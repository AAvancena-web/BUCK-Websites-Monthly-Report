# BUCK Portfolio — Monthly Report Dashboard

A self-contained HTML/CSS/JS dashboard for the BUCK website portfolio's end-of-month
report. No build step, no dependencies — just static files you can host on GitHub Pages.

It shows, per site:

- **Actions completed this month** (with done / pending status)
- **PageSpeed scores** (Mobile + Desktop, as color-coded gauges)
- **Technical audit** (Accessibility, Best Practices, SEO — mobile vs. desktop)
- **Analytics** (placeholder cells, ready for when your GTM data starts flowing)

Plus a portfolio summary strip (site count, actions completed, average speeds,
domains renewed) that is calculated automatically from the data.

---

## Files

| File         | What it is                                              |
|--------------|---------------------------------------------------------|
| `index.html` | Page structure. You rarely touch this.                  |
| `styles.css` | All styling. You rarely touch this.                     |
| `app.js`     | Rendering logic. You never need to touch this.          |
| `data.js`    | **The report data — this is the only file you edit.**   |

---

## Updating the report each month

1. Open `data.js`.
2. Change `meta.month` and `meta.year` at the top.
3. For each site, update the PageSpeed scores, audit scores, and actions.
4. When Google Analytics data is available, fill in the `analytics` numbers
   (replace `null`). Any value left as `null` shows a `—` placeholder.
5. Commit and push. The live site updates automatically.

**Add a site:** copy any `{ ... }` block inside the `sites` array.
**Remove a site:** delete its block.
The numbering (01, 02, 03…) and the summary stats recalculate on their own.

> Tip: keep a copy of each month's `data.js` (e.g. `data-2026-04.js`) if you want
> an archive of past reports.

---

## Publishing on GitHub Pages

1. Create a repository (e.g. `buck-report`) and upload these four files to the root.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**,
   **Branch = `main`**, folder **`/ (root)`**, then **Save**.
4. After a minute your dashboard is live at
   `https://<your-username>.github.io/buck-report/`.

Send that link each month — or open the page and click **Print / Save PDF**
to generate a clean PDF version (the print layout hides the toolbar and lays the
cards out two-up).

---

## Notes

- Scores are color-coded on the standard PageSpeed scale:
  **0–49 red · 50–89 amber · 90–100 green.**
- America's Golden Age was removed from the portfolio, so it is not included.
  To add it back, drop a new block into the `sites` array in `data.js`.
- Everything works offline / from a local file — just open `index.html` in a browser.
