/* =============================================================================
   BUCK Portfolio Dashboard — render logic
   Reads the global REPORTS array from data.js (newest month first).
   No build step required.
   ============================================================================= */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  // --- Score → severity bucket (matches Google PageSpeed thresholds) ----------
  function band(score) {
    if (score == null) return "none";
    if (score >= 90) return "good";
    if (score >= 50) return "mid";
    return "poor";
  }
  function getCSS(v) {
    return getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  }
  const COLORS = { good: getCSS("--good"), mid: getCSS("--mid"), poor: getCSS("--poor") };

  function fmt(n) { return n == null ? "—" : Number(n).toLocaleString("en-US"); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  // --- State -------------------------------------------------------------------
  let activeIndex = 0;                 // 0 = newest month
  const current = () => REPORTS[activeIndex];

  // --- Month tabs --------------------------------------------------------------
  function renderTabs() {
    const tabs = REPORTS.map((r, i) => {
      const label = `${r.meta.month} ${r.meta.year}`;
      const isNew = i === 0;
      return `<button class="period-tab ${i === activeIndex ? "is-active" : ""}"
                role="tab" aria-selected="${i === activeIndex}" data-index="${i}">
                ${esc(label)}${isNew ? '<span class="period-tab__new">LATEST</span>' : ""}
              </button>`;
    }).join("");
    $("#period-tabs").innerHTML = tabs;
    document.querySelectorAll(".period-tab").forEach((btn) =>
      btn.addEventListener("click", () => switchTo(Number(btn.dataset.index)))
    );
  }

  function switchTo(i) {
    if (i === activeIndex) return;
    activeIndex = i;
    renderTabs();
    renderHeader();
    render();
  }

  // --- Header / footer text ----------------------------------------------------
  function renderHeader() {
    const m = current().meta;
    const period = `${m.month} ${m.year}`;
    $("#report-title").textContent = m.title;
    $("#report-edition").textContent = m.subtitle;
    $("#footer-period").textContent = period;
    document.title = `${m.title} — ${m.subtitle} · ${period}`;
  }

  // --- Gauge SVG ---------------------------------------------------------------
  function gauge(label, score) {
    const r = 38;
    const c = 2 * Math.PI * r;
    const color = COLORS[band(score)] || COLORS.poor;
    const offset = c * (1 - (score || 0) / 100);
    return `
      <div class="gauge">
        <div class="gauge__ring">
          <svg viewBox="0 0 88 88" width="88" height="88">
            <circle class="gauge__track" cx="44" cy="44" r="${r}" fill="none" stroke-width="7"></circle>
            <circle class="gauge__bar" cx="44" cy="44" r="${r}" fill="none" stroke-width="7"
              stroke="${color}" stroke-dasharray="${c.toFixed(1)}"
              stroke-dashoffset="${c.toFixed(1)}" data-target="${offset.toFixed(1)}"></circle>
          </svg>
          <div class="gauge__num" style="color:${color}">${score ?? "—"}</div>
        </div>
        <span class="gauge__cap">${label}</span>
      </div>`;
  }

  // --- Audit table -------------------------------------------------------------
  const scoreCell = (v) => `<span class="score score--${band(v)}">${v}</span>`;
  function auditTable(audit) {
    const rows = [
      ["Accessibility", "accessibility"],
      ["Best Practices", "bestPractices"],
      ["SEO", "seo"],
    ];
    return `
      <table class="audit">
        <thead><tr><th>Metric</th><th>Mobile</th><th>Desktop</th></tr></thead>
        <tbody>
          ${rows.map(([label, key]) => `
            <tr>
              <td class="metric">${label}</td>
              <td>${scoreCell(audit.mobile[key])}</td>
              <td>${scoreCell(audit.desktop[key])}</td>
            </tr>`).join("")}
        </tbody>
      </table>`;
  }

  // --- Actions list ------------------------------------------------------------
  const CHECK = `<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  function actionsList(actions) {
    if (!actions.length) {
      return `<p class="analytics-note">No actions recorded for this month yet.</p>`;
    }
    return `
      <ul class="actions">
        ${actions.map((a) => `
          <li class="${a.done ? "is-done" : "is-pending"}">
            <span class="tick ${a.done ? "tick--done" : "tick--pending"}">${a.done ? CHECK : ""}</span>
            <span>${esc(a.text)}${a.done ? "" : '<span class="tag-pending">PENDING</span>'}${
              a.items && a.items.length
                ? `<ul class="subactions">${a.items.map((it) => `<li>${esc(it)}</li>`).join("")}</ul>`
                : ""
            }</span>
          </li>`).join("")}
      </ul>`;
  }

  // --- Analytics block ---------------------------------------------------------
  const SRC_COLORS = ["#7c2d2d", "#2c7a4f", "#b07918", "#3d6b7d", "#5d564b", "#9a6a3a"];

  const METRIC_TIPS = {
    // Legacy set (April–May)
    Sessions: "A session is one visit to the site — a single period of activity by a user. One person can start several sessions.",
    Users: "The number of distinct people who visited. A single user may return across multiple sessions.",
    Pageviews: "The total number of pages loaded, counting repeat views of the same page.",
    Engagement: "The share of sessions that were engaged — lasting over 10 seconds, triggering a key event, or viewing two or more pages.",
    // GA4 set (June onward)
    "Active Users": "The number of distinct users who engaged with the site in the period — GA4's primary 'Users' metric.",
    "New Users": "Users who interacted with the site for the first time in the period.",
    "Avg Engagement": "Average time the site was in focus in the browser, per active user.",
    "Event Count": "Total tracked events — page views, scrolls, clicks, and other interactions.",
  };

  const CHANNEL_TIPS = {
    "direct": "Visitors who typed the URL, used a bookmark, or came from an untracked link.",
    "organic search": "Visitors from unpaid search engine results (Google, Bing, etc.).",
    "organic social": "Visitors from unpaid posts or links on social media.",
    "organic shopping": "Visitors from unpaid listings in shopping tabs or marketplaces.",
    "referral": "Visitors who clicked a link to the site from another website.",
    "cross network": "Visitors from ads shown across a mix of Google networks (e.g. cross-network campaigns).",
    "paid search": "Visitors who arrived through paid search ads.",
    "paid social": "Visitors who arrived through paid social media ads.",
    "email": "Visitors who arrived from an email campaign.",
    "unassigned": "Sessions GA4 could not match to a known channel grouping.",
  };

  function infoTip(text) {
    if (!text) return "";
    return `<span class="tip"><button class="tip__btn" type="button" aria-label="More information">` +
      `<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">` +
      `<circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>` +
      `<line x1="8" y1="7" x2="8" y2="11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>` +
      `<circle cx="8" cy="4.5" r="1" fill="currentColor"/></svg></button>` +
      `<span class="tip__bubble" role="tooltip">${esc(text)}</span></span>`;
  }

  function renderSources(sources) {
    const bar = sources
      .map((s, i) => `<span style="width:${s.share}%;background:${SRC_COLORS[i % SRC_COLORS.length]}" title="${esc(s.channel)} — ${s.share}%"></span>`)
      .join("");
    const legend = sources
      .map((s, i) => `
        <li>
          <span class="src-dot" style="background:${SRC_COLORS[i % SRC_COLORS.length]}"></span>
          <span class="src-name">${esc(s.channel)}${infoTip(CHANNEL_TIPS[s.channel.toLowerCase()])}</span>
          <span class="src-val">${fmt(s.sessions)} · ${s.share}%</span>
        </li>`)
      .join("");
    return `
      <div class="sources">
        <p class="sources__title">Traffic Sources <span>· by sessions</span></p>
        <div class="sources__bar">${bar}</div>
        <ul class="sources__legend">${legend}</ul>
      </div>`;
  }

  function analyticsBlock(a) {
    // Two supported GA metric sets, auto-detected per site:
    //   • Legacy (Apr–May): sessions / users / pageviews / engagementRate
    //   • GA4    (Jun on):  activeUsers / newUsers / avgEngagement / eventCount
    const isGA4 = a.activeUsers != null || a.newUsers != null ||
                  a.avgEngagement != null || a.eventCount != null;
    const cells = isGA4
      ? [
          ["Active Users", a.activeUsers],
          ["New Users", a.newUsers],
          ["Avg Engagement", a.avgEngagement],  // includes its unit, e.g. "24s"
          ["Event Count", a.eventCount],
        ]
      : [
          ["Sessions", a.sessions],
          ["Users", a.users],
          ["Pageviews", a.pageviews],
          ["Engagement", a.engagementRate == null ? null : a.engagementRate + "%"],
        ];
    const hasData = cells.some(([, v]) => v != null);
    const grid = `
      <div class="analytics-grid">
        ${cells.map(([l, v]) => `
          <div class="metric-cell">
            <div class="m-label">${l}${infoTip(METRIC_TIPS[l])}</div>
            <div class="m-value ${v == null ? "is-empty" : ""}">${v == null ? "—" : (typeof v === "number" ? fmt(v) : v)}</div>
          </div>`).join("")}
      </div>`;
    const sources = (a.sources && a.sources.length) ? renderSources(a.sources) : "";
    const note = hasData ? "" : `<p class="analytics-note">${esc(current().meta.analyticsNote)}</p>`;
    return grid + sources + note;
  }

  // --- Card --------------------------------------------------------------------
  function card(site, index) {
    const no = String(index + 1).padStart(2, "0");
    const host = site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `
      <article class="card" style="animation-delay:${Math.min(index * 60, 480)}ms">
        <div class="card__head">
          <span class="card__no">${no}</span>
          <div class="card__titles">
            <h2 class="card__name">${esc(site.name)}</h2>
            <a class="card__url" href="${esc(site.url)}" target="_blank" rel="noopener">
              ${esc(host)}
              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
            </a>
          </div>
        </div>

        <div>
          <p class="sec-label">PageSpeed</p>
          <div class="gauges">
            ${gauge("Mobile", site.pagespeed.mobile)}
            ${gauge("Desktop", site.pagespeed.desktop)}
          </div>
        </div>

        <div>
          <p class="sec-label">Technical Audit</p>
          ${auditTable(site.audit)}
        </div>

        <div>
          <p class="sec-label">Actions This Month</p>
          ${actionsList(site.actions)}
        </div>

        ${site.analytics ? `
        <div>
          <p class="sec-label">Analytics</p>
          ${analyticsBlock(site.analytics)}
        </div>` : ""}
      </article>`;
  }

  function animateGauges() {
    requestAnimationFrame(() => {
      document.querySelectorAll(".gauge__bar").forEach((bar) => {
        bar.style.strokeDashoffset = bar.dataset.target;
      });
    });
  }

  // --- Sort + filter -----------------------------------------------------------
  function getView() {
    const q = $("#search").value.trim().toLowerCase();
    const sort = $("#sort").value;
    let list = current().sites.map((s, i) => ({ site: s, index: i }));

    if (q) {
      list = list.filter(({ site }) =>
        site.name.toLowerCase().includes(q) || site.url.toLowerCase().includes(q));
    }
    const cmp = {
      name: (a, b) => a.site.name.localeCompare(b.site.name),
      "mobile-asc": (a, b) => a.site.pagespeed.mobile - b.site.pagespeed.mobile,
      "mobile-desc": (a, b) => b.site.pagespeed.mobile - a.site.pagespeed.mobile,
      "desktop-asc": (a, b) => a.site.pagespeed.desktop - b.site.pagespeed.desktop,
      "desktop-desc": (a, b) => b.site.pagespeed.desktop - a.site.pagespeed.desktop,
    }[sort];
    if (cmp) list.sort(cmp);
    return list;
  }

  function render() {
    const view = getView();
    const grid = $("#grid");
    const empty = $("#empty");
    if (!view.length) { grid.innerHTML = ""; empty.hidden = false; return; }
    empty.hidden = true;
    grid.innerHTML = view.map(({ site, index }) => card(site, index)).join("");
    animateGauges();
  }

  // --- Init --------------------------------------------------------------------
  renderTabs();
  renderHeader();
  render();
  $("#search").addEventListener("input", render);
  $("#sort").addEventListener("change", render);

  // Tooltips: hover/focus works via CSS; this enables tap-to-toggle on touch.
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".tip__btn");
    const allTips = document.querySelectorAll(".tip");
    if (btn) {
      const tip = btn.closest(".tip");
      const isOpen = tip.classList.contains("is-open");
      allTips.forEach((t) => t.classList.remove("is-open"));
      if (!isOpen) tip.classList.add("is-open");
      e.preventDefault();
      e.stopPropagation();
    } else {
      allTips.forEach((t) => t.classList.remove("is-open"));
    }
  });
})();
