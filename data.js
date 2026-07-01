/* =============================================================================
   BUCK PORTFOLIO — MONTHLY REPORT DATA
   -----------------------------------------------------------------------------
   This is the ONLY file you edit each month.

   The dashboard now holds MULTIPLE months. Each entry in the REPORTS array is
   one month. They appear as tabs in the header, NEWEST FIRST. The first entry
   in the array is shown by default and highlighted.

   ── To start a new month ──────────────────────────────────────────────────
   1. Copy the whole { meta, sites } block of the most recent month.
   2. Paste it as the FIRST item in the REPORTS array (so it becomes the
      newest tab).
   3. Update meta.month / meta.year, refresh the PageSpeed + audit scores,
      and replace the actions with that month's work.

   ── Conventions ────────────────────────────────────────────────────────────
   • SCORE COLORS are automatic:  0–49 = red,  50–89 = amber,  90–100 = green.
   • ACTIONS:   done: true = completed,  done: false = pending.
   • ANALYTICS: leave a value as  null  to show a "—" placeholder.
   ============================================================================= */

const REPORTS = [

  /* ===========================================================================
     JUNE 2026
     First full analytics pull across the portfolio. Figures use GA4's newer
     metric set: Active Users / New Users / Avg Engagement Time / Event Count.
     =========================================================================== */
  {
    meta: {
      title: "BUCK Website Maintenance Work",
      subtitle: "End of Month Report",
      month: "June",
      year: 2026,
      analyticsNote:
        "Analytics are pulled from each site's Google Analytics 4 property " +
        "for the reporting month.",
    },
    sites: [
      {
        name: "BUCKOne",
        url: "https://buckone.org",
        pagespeed: { mobile: 72, desktop: 40 },
        audit: {
          mobile:  { accessibility: 89, bestPractices: 92, seo: 100 },
          desktop: { accessibility: 96, bestPractices: 96, seo: 100 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "MailOptin - Lite",
            "Smush",
            "Unlimited Elements for Elementor",
            "W3 Total Cache",
            "WP Armour - Honeypot Anti Spam",
          ] },
        ],
        analytics: {
          activeUsers: 133, newUsers: 133, avgEngagement: "4s", eventCount: 478,
          sources: [
            { channel: "Direct",         sessions: 108, share: 80.0 },
            { channel: "Organic Search", sessions: 20,  share: 14.8 },
            { channel: "Organic Social", sessions: 6,   share: 4.4 },
            { channel: "Referral",       sessions: 1,   share: 0.7 },
          ],
        },
      },
      {
        name: "BUCK Academy",
        url: "https://buckacademy.org",
        pagespeed: { mobile: 39, desktop: 51 },
        audit: {
          mobile:  { accessibility: 44, bestPractices: 73, seo: 77 },
          desktop: { accessibility: 44, bestPractices: 73, seo: 77 },
        },
        actions: [
          { text: "Created Give page.", done: true },
          { text: "Created Fundraising page.", done: true },
          { text: "Made changes to the books on the front page.", done: true },
          { text: "Removed 'coming soon' tags and replaced them with new books.", done: true },
        ],
        analytics: {
          activeUsers: 266, newUsers: 258, avgEngagement: "24s", eventCount: "1.8K",
          sources: [
            { channel: "Direct",           sessions: 195, share: 60.6 },
            { channel: "Organic Search",   sessions: 73,  share: 22.7 },
            { channel: "Unassigned",       sessions: 33,  share: 10.2 },
            { channel: "Organic Social",   sessions: 11,  share: 3.4 },
            { channel: "Organic Shopping", sessions: 5,   share: 1.6 },
            { channel: "Referral",         sessions: 4,   share: 1.2 },
            { channel: "Cross Network",    sessions: 1,   share: 0.3 },
          ],
        },
      },
      {
        name: "Febyolla",
        url: "https://febyolla.com",
        pagespeed: { mobile: 52, desktop: 65 },
        audit: {
          mobile:  { accessibility: 100, bestPractices: 96, seo: 85 },
          desktop: { accessibility: 96,  bestPractices: 96, seo: 85 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "Logo Slider",
            "MetaSlider Slideshow",
            "Site Kit by Google",
            "WP Armour - Honeypot Anti Spam",
          ] },
        ],
        analytics: {
          activeUsers: 15, newUsers: 16, avgEngagement: "13s", eventCount: 65,
          sources: [
            { channel: "Direct",         sessions: 12, share: 80.0 },
            { channel: "Organic Search", sessions: 3,  share: 20.0 },
          ],
        },
      },
      {
        name: "Dustin Goss",
        url: "https://dustinericgoss.com",
        pagespeed: { mobile: 59, desktop: 68 },
        audit: {
          mobile:  { accessibility: 95, bestPractices: 92, seo: 85 },
          desktop: { accessibility: 89, bestPractices: 96, seo: 85 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "Classic Editor",
            "Contact Form 7",
            "Logo Slider",
            "MetaSlider",
            "Wordfence Security",
          ] },
        ],
        // Carried over from May 2026 (no new figures reported for June).
        analytics: {
          sessions: 3, users: 3, pageviews: 3, engagementRate: 0,
          sources: [
            { channel: "Direct", sessions: 3, share: 100 },
          ],
        },
      },
      {
        name: "Messy Chefs",
        url: "https://messychefs.com",
        pagespeed: { mobile: 54, desktop: 64 },
        audit: {
          mobile:  { accessibility: 93, bestPractices: 69, seo: 85 },
          desktop: { accessibility: 89, bestPractices: 69, seo: 85 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "Pop Up Maker",
            "Site Kit by Google",
            "WP Armour - Honeypot Anti Spam",
            "Yoast SEO",
          ] },
        ],
        analytics: {
          activeUsers: 44, newUsers: 43, avgEngagement: "10s", eventCount: 222,
          sources: [
            { channel: "Direct",         sessions: 38, share: 84.4 },
            { channel: "Referral",       sessions: 3,  share: 6.7 },
            { channel: "Organic Search", sessions: 3,  share: 6.7 },
            { channel: "Unassigned",     sessions: 1,  share: 2.2 },
          ],
        },
      },
      {
        name: "Crown Expert",
        url: "https://crownexpert.com",
        pagespeed: { mobile: 100, desktop: 100 },
        audit: {
          mobile:  { accessibility: 95, bestPractices: 96, seo: 82 },
          desktop: { accessibility: 95, bestPractices: 96, seo: 82 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "Site Kit by Google",
            "WP Armour - Honeypot Anti Spam",
            "Ultimate Addons for Elementor (UAE)",
            "Wordfence Security",
            "WPForms Lite",
          ] },
        ],
        analytics: {
          activeUsers: 1, newUsers: 1, avgEngagement: "0s", eventCount: 3,
          sources: [
            { channel: "Direct", sessions: 1, share: 100 },
          ],
        },
      },
      {
        name: "BUCK Academy LMS",
        url: "https://bucksacademy.com",
        pagespeed: { mobile: 59, desktop: 72 },
        audit: {
          mobile:  { accessibility: 98, bestPractices: 96, seo: 77 },
          desktop: { accessibility: 98, bestPractices: 96, seo: 77 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "Essential Addons for Elementor",
            "HT Mega Addons for Elementor - Elementor Widgets & Template Builder",
            "Password Protect WordPress Lite",
            "Site Kit by Google",
            "Templately",
            "The Plus Addons for Elementor",
            "Ultimate Addons for Elementor (UAE)",
            "Ultimate Member",
            "WooCommerce Direct Checkout",
            "WooPayments",
            "WP Armour - Honeypot Anti Spam",
          ] },
        ],
        analytics: {
          activeUsers: 69, newUsers: 69, avgEngagement: "3s", eventCount: 278,
          sources: [
            { channel: "Direct",         sessions: 28, share: 38.9 },
            { channel: "Organic Search", sessions: 40, share: 55.6 },
            { channel: "Unassigned",     sessions: 4,  share: 5.6 },
          ],
        },
      },
      {
        name: "BUCK Making Cents",
        url: "https://buckmakingcents.com",
        pagespeed: { mobile: 19, desktop: 99 },
        audit: {
          mobile:  { accessibility: 80, bestPractices: 92, seo: 69 },
          desktop: { accessibility: 82, bestPractices: 73, seo: 69 },
        },
        actions: [],
        analytics: {
          activeUsers: 12, newUsers: 12, avgEngagement: "6s", eventCount: 43,
          sources: [
            { channel: "Direct",         sessions: 10, share: 83.3 },
            { channel: "Organic Search", sessions: 1,  share: 8.3 },
            { channel: "Referral",       sessions: 1,  share: 8.3 },
          ],
        },
      },
      {
        name: "Makota Co",
        url: "https://makotaco.com",
        pagespeed: { mobile: 50, desktop: 71 },
        audit: {
          mobile:  { accessibility: 94, bestPractices: 96, seo: 92 },
          desktop: { accessibility: 93, bestPractices: 96, seo: 92 },
        },
        actions: [],
        analytics: {
          activeUsers: 111, newUsers: 107, avgEngagement: "20s", eventCount: 462,
          sources: [
            { channel: "Direct",         sessions: 70, share: 55.6 },
            { channel: "Organic Search", sessions: 45, share: 35.7 },
            { channel: "Unassigned",     sessions: 7,  share: 5.6 },
            { channel: "Referral",       sessions: 3,  share: 2.4 },
            { channel: "Cross Network",  sessions: 1,  share: 0.8 },
          ],
        },
      },
    ],
  },

  /* ===========================================================================
     MAY 2026
     =========================================================================== */
  {
    meta: {
      title: "BUCK Website Maintenance Work",
      subtitle: "End of Month Report",
      month: "May",
      year: 2026,
      analyticsNote:
        "Google Tag Manager was installed across the portfolio in April. " +
        "Add this month's analytics figures as they become available.",
    },
    sites: [
      {
        name: "BUCKOne",
        url: "https://buckone.org",
        pagespeed: { mobile: 73, desktop: 80 },
        audit: {
          mobile:  { accessibility: 94, bestPractices: 92, seo: 100 },
          desktop: { accessibility: 96, bestPractices: 96, seo: 100 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "Classic Editor",
            "Contact Form 7",
            "Duplicate Page",
            "MailOptin - Lite",
            "Unlimited Elements for Elementor",
            "WPCode Lite",
          ] },
        ],
        analytics: {
          sessions: 164, users: 159, pageviews: 183, engagementRate: 12.8,
          sources: [
            { channel: "Direct",         sessions: 143, share: 87.2 },
            { channel: "Organic Search", sessions: 15,  share: 9.2 },
            { channel: "Organic Social", sessions: 3,   share: 1.8 },
            { channel: "Referral",       sessions: 3,   share: 1.8 },
          ],
        },
      },
      {
        name: "BUCK Academy",
        url: "https://buckacademy.org",
        pagespeed: { mobile: 40, desktop: 45 },
        audit: {
          mobile:  { accessibility: 44, bestPractices: 77, seo: 77 },
          desktop: { accessibility: 44, bestPractices: 73, seo: 77 },
        },
        actions: [
          { text: "The fundraising page is now live.", done: true },
          { text: "Added Mother's Day book.", done: true },
          { text: "Added Memorial Day coloring.", done: true },
          { text: "Re-arranged and updated all books, removed 'coming soon' tags, and updated the arrangement accordingly.", done: true },
        ],
        analytics: {
          sessions: 24, users: 21, pageviews: 46, engagementRate: 33.3,
          sources: [
            { channel: "Direct",         sessions: 19, share: 79.2 },
            { channel: "Referral",       sessions: 3,  share: 12.5 },
            { channel: "Organic Search", sessions: 2,  share: 8.3 },
          ],
        },
      },
      {
        name: "Febyolla",
        url: "https://febyolla.com",
        pagespeed: { mobile: 40, desktop: 77 },
        audit: {
          mobile:  { accessibility: 100, bestPractices: 96, seo: 85 },
          desktop: { accessibility: 96,  bestPractices: 96, seo: 85 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "Classic Editor",
            "Contact Form 7",
            "Logo Slider",
            "MetaSlider",
            "Wordfence Security",
          ] },
        ],
        analytics: {
          sessions: 3, users: 3, pageviews: 3, engagementRate: 0,
          sources: [
            { channel: "Direct", sessions: 3, share: 100 },
          ],
        },
      },
      {
        name: "Dustin Goss",
        url: "https://dustinericgoss.com",
        pagespeed: { mobile: 59, desktop: 68 },
        audit: {
          mobile:  { accessibility: 95, bestPractices: 92, seo: 85 },
          desktop: { accessibility: 89, bestPractices: 96, seo: 85 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "Classic Editor",
            "Contact Form 7",
            "Logo Slider",
            "MetaSlider",
            "Wordfence Security",
          ] },
        ],
        analytics: {
          sessions: 3, users: 3, pageviews: 3, engagementRate: 0,
          sources: [
            { channel: "Direct", sessions: 3, share: 100 },
          ],
        },
      },
      {
        name: "Messy Chefs",
        url: "https://messychefs.com",
        pagespeed: { mobile: 52, desktop: 77 },
        audit: {
          mobile:  { accessibility: 93, bestPractices: 69, seo: 85 },
          desktop: { accessibility: 89, bestPractices: 69, seo: 85 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "Classic Editor",
            "Contact Form 7",
            "Duplicate Page",
            "Simple Custom CSS and JS",
            "Popup Maker",
            "WPCode Lite",
            "Yoast SEO",
          ] },
        ],
        analytics: {
          sessions: 11, users: 11, pageviews: 11, engagementRate: 0,
          sources: [
            { channel: "Direct", sessions: 11, share: 100 },
          ],
        },
      },
      {
        name: "Crown Expert",
        url: "https://crownexpert.com",
        pagespeed: { mobile: 66, desktop: 82 },
        audit: {
          mobile:  { accessibility: 95, bestPractices: 96, seo: 92 },
          desktop: { accessibility: 95, bestPractices: 96, seo: 92 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "Classic Editor",
            "Elementor Header & Footer Builder",
            "Presto Player",
            "Spectra",
            "WP Armour - Honeypot Anti Spam",
            "WPForms Lite",
          ] },
        ],
        analytics: {
          sessions: 48, users: 48, pageviews: 49, engagementRate: 2.08,
          sources: [
            { channel: "Direct", sessions: 48, share: 100 },
          ],
        },
      },
      {
        name: "BUCK Academy LMS",
        url: "https://bucksacademy.com",
        pagespeed: { mobile: 61, desktop: 69 },
        audit: {
          mobile:  { accessibility: 92, bestPractices: 96, seo: 77 },
          desktop: { accessibility: 92, bestPractices: 96, seo: 77 },
        },
        actions: [
          { text: "Updated the following plugins:", done: true, items: [
            "All-in-One WP Migration and Backup",
            "Big File Uploads",
            "Classic Editor",
            "Elementor Header & Footer Builder",
            "Essential Addons for Elementor",
            "HT Mega – Absolute Addons for Elementor",
            "Members",
            "Password Protect WordPress Lite",
            "Templately",
            "The Plus Addons for Elementor",
            "Ultimate Member",
            "WooCommerce Direct Checkout",
            "WooPayments",
            "Wordfence Security",
            "WP Armour - Honeypot Anti Spam",
            "WPCode Lite",
          ] },
        ],
        analytics: {
          sessions: 148, users: 131, pageviews: 260, engagementRate: 21.62,
          sources: [
            { channel: "Direct",           sessions: 92, share: 62.2 },
            { channel: "Unassigned",        sessions: 28, share: 18.9 },
            { channel: "Organic Search",    sessions: 21, share: 14.2 },
            { channel: "Organic Social",    sessions: 5,  share: 3.4 },
            { channel: "Referral",          sessions: 4,  share: 2.7 },
            { channel: "Organic Shopping",  sessions: 2,  share: 1.4 },
          ],
        },
      },
      {
        name: "BUCK Making Cents",
        url: "https://buckmakingcents.com",
        pagespeed: { mobile: 17, desktop: 97 },
        audit: {
          mobile:  { accessibility: 81, bestPractices: 73, seo: 69 },
          desktop: { accessibility: 82, bestPractices: 73, seo: 69 },
        },
        actions: [],
        analytics: {
          sessions: 2, users: 2, pageviews: 2, engagementRate: 50,
          sources: [
            { channel: "Direct", sessions: 2, share: 100 },
          ],
        },
      },
      {
        name: "Makota Co",
        url: "https://makotaco.com",
        pagespeed: { mobile: 42, desktop: 60 },
        audit: {
          mobile:  { accessibility: 94, bestPractices: 96, seo: 92 },
          desktop: { accessibility: 93, bestPractices: 96, seo: 92 },
        },
        actions: [
          { text: "Generated last year's page views for a specific page from Squarespace analytics.", done: true },
        ],
        analytics: {
          sessions: 61, users: 54, pageviews: 71, engagementRate: 34.43,
          sources: [
            { channel: "Direct",         sessions: 37, share: 60.7 },
            { channel: "Organic Search", sessions: 19, share: 31.2 },
            { channel: "Unassigned",     sessions: 4,  share: 6.6 },
            { channel: "Referral",       sessions: 1,  share: 1.6 },
          ],
        },
      },
    ],
  },

  /* ===========================================================================
     APRIL 2026
     =========================================================================== */
  {
    meta: {
      title: "BUCK Website Maintenance Work",
      subtitle: "End of Month Report",
      month: "April",
      year: 2026,
      analyticsNote:
        "Google Tag Manager was installed across the portfolio this month. " +
        "Analytics figures will begin populating in the next reporting cycle.",
    },
    sites: [
      {
        name: "BUCKOne",
        url: "https://buckone.org",
        pagespeed: { mobile: 44, desktop: 68 },
        audit: {
          mobile:  { accessibility: 94, bestPractices: 92, seo: 92 },
          desktop: { accessibility: 92, bestPractices: 96, seo: 92 },
        },
        actions: [
          { text: "Updated copyright year in site footer to 2026.", done: true },
          { text: "Installed Google Tag Manager container for unified analytics across the portfolio.", done: true },
          { text: "Updated 8 plugins in WordPress and Elementor database.", done: true },
        ],
      },
      {
        name: "BUCK Academy",
        url: "https://buckacademy.org",
        pagespeed: { mobile: 42, desktop: 61 },
        audit: {
          mobile:  { accessibility: 51, bestPractices: 73, seo: 77 },
          desktop: { accessibility: 51, bestPractices: 73, seo: 77 },
        },
        actions: [
          { text: "Updated copyright year in site footer to 2026.", done: true },
          { text: "Installed Google Tag Manager container for unified analytics across the portfolio.", done: true },
          { text: "Created new Fundraising page at /pages/fundraising.", done: true },
          { text: "Created new Give page at /pages/give.", done: true },
          { text: "Added LA Style Magazine feature to the Press page.", done: true },
          { text: "Added new book listing: LA Style Magazine — New Jesus Revolution Issue 2026 BUCK Academy Feature.", done: true },
        ],
      },
      {
        name: "Febyolla",
        url: "https://febyolla.com",
        pagespeed: { mobile: 49, desktop: 50 },
        audit: {
          mobile:  { accessibility: 100, bestPractices: 96, seo: 85 },
          desktop: { accessibility: 96,  bestPractices: 96, seo: 85 },
        },
        actions: [
          { text: "Updated copyright year in site footer to 2026.", done: true },
          { text: "Installed Google Tag Manager container for unified analytics across the portfolio.", done: true },
          { text: "Renewed domain registration (expired April 22, 2026).", done: true },
        ],
      },
      {
        name: "Dustin Goss",
        url: "https://dustinericgoss.com",
        pagespeed: { mobile: 50, desktop: 69 },
        audit: {
          mobile:  { accessibility: 92, bestPractices: 92, seo: 85 },
          desktop: { accessibility: 89, bestPractices: 96, seo: 85 },
        },
        actions: [
          { text: "Updated copyright year in site footer to 2026.", done: true },
          { text: "Installed Google Tag Manager container for unified analytics across the portfolio.", done: true },
        ],
      },
      {
        name: "Messy Chefs",
        url: "https://messychefs.com",
        pagespeed: { mobile: 51, desktop: 83 },
        audit: {
          mobile:  { accessibility: 93, bestPractices: 69, seo: 85 },
          desktop: { accessibility: 89, bestPractices: 69, seo: 85 },
        },
        actions: [
          { text: "Updated copyright year in site footer to 2026.", done: true },
          { text: "Installed Google Tag Manager container for unified analytics across the portfolio.", done: true },
        ],
      },
      {
        name: "Crown Expert",
        url: "https://crownexpert.com",
        pagespeed: { mobile: 64, desktop: 83 },
        audit: {
          mobile:  { accessibility: 95, bestPractices: 96, seo: 92 },
          desktop: { accessibility: 95, bestPractices: 96, seo: 92 },
        },
        actions: [
          { text: "Updated copyright year in site footer to 2026.", done: true },
          { text: "Installed Google Tag Manager container for unified analytics across the portfolio.", done: true },
          { text: "Renewed domain registration (expired April 14, 2026).", done: true },
        ],
      },
      {
        name: "BUCK Academy LMS",
        url: "https://bucksacademy.com",
        pagespeed: { mobile: 63, desktop: 75 },
        audit: {
          mobile:  { accessibility: 92, bestPractices: 96, seo: 77 },
          desktop: { accessibility: 92, bestPractices: 96, seo: 77 },
        },
        actions: [
          { text: "Updated copyright year in site footer to 2026.", done: true },
          { text: "Installed Google Tag Manager container for unified analytics across the portfolio.", done: true },
        ],
      },
      {
        name: "BUCK Making Cents",
        url: "https://buckmakingcents.com",
        pagespeed: { mobile: 57, desktop: 95 },
        audit: {
          mobile:  { accessibility: 80, bestPractices: 92, seo: 69 },
          desktop: { accessibility: 82, bestPractices: 92, seo: 69 },
        },
        actions: [
          { text: "Updated copyright year in site footer to 2026.", done: true },
          { text: "Installed Google Tag Manager container for unified analytics across the portfolio.", done: true },
        ],
      },
      {
        name: "Makota Co",
        url: "https://makotaco.com",
        pagespeed: { mobile: 47, desktop: 60 },
        audit: {
          mobile:  { accessibility: 94, bestPractices: 96, seo: 92 },
          desktop: { accessibility: 93, bestPractices: 96, seo: 92 },
        },
        actions: [
          { text: "Updated copyright year in site footer to 2026.", done: true },
          { text: "Installed Google Tag Manager container for unified analytics across the portfolio.", done: true },
        ],
      },
    ],
  },

];
