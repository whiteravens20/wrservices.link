---
tags:
  - search-engine
  - self-hosted
  - privacy
  - searxng
---

# White Ravens Search

White Ravens Search is a private internet search engine based on the [SearXNG](https://github.com/searxng/searxng) project. It works like Google or Bing, but **keeps no history of your searches** — it doesn't track you, doesn't display ads, and doesn't create an advertising profile.

!!! tip "Link"
    [White Ravens SearXNG](https://search.whiteravens.net/) · [Terms of use and privacy](https://search.whiteravens.net/privacy)

**Key features:**

- :material-shield-account: **Privacy** — no tracking, no search history, no ads
- :material-magnify: **Results from multiple sources** — the search engine pulls results from Google, Bing, DuckDuckGo, and many others simultaneously
- :material-cog: **Configurable** — you can choose which search engines the results come from
- :material-account-off: **No registration** — use it right away, without creating an account

---

## How to use it?

1. Go to [White Ravens SearXNG](https://search.whiteravens.net/).
2. Type your search query in the search field.
3. Browse the results — you can filter them by categories (websites, images, videos, news, etc.).

!!! info "How is this different from Google?"
    Regular search engines save every query and create a profile to display personalized ads. Ours keeps no history of your queries and builds no profile.

---

## How to set it as your default search engine?

To avoid manually going to the website every time, you can set SearXNG as the default search engine in your browser.

=== "Google Chrome"

    1. Type in the address bar: `chrome://settings/searchEngines`
    2. Click **Add** in the "Search engines" section.
    3. Fill in the fields:
        - **Name:** `SearXNG`
        - **Keyword:** `sx`
        - **URL:** `https://search.whiteravens.net/search?q=%s`
    4. Click the three dots :material-dots-vertical: next to the added search engine → **Set as default**.

=== "Mozilla Firefox"

    1. Open **Settings** → **Search** tab.
    2. Click **Find more search engines** or **Add search engine**.
    3. Enter URL: `https://search.whiteravens.net/search?q=%s`
    4. Select SearXNG as the default search engine.

=== "Microsoft Edge"

    1. Type in the address bar: `edge://settings/searchEngines`
    2. Click **Add** and fill in:
        - **Name:** `SearXNG`
        - **Keyword:** `sx`
        - **URL:** `https://search.whiteravens.net/search?q=%s`
    3. Set as the default search engine.

---

## Frequently asked questions

??? question "Are the results worse than Google?"
    No — SearXNG pulls results from Google and many other search engines simultaneously, so you often get even more diverse results.

??? question "Do I need to register?"
    No. The search engine works right away, without an account and without logging in.

??? question "Are my searches saved anywhere?"
    No. We keep no search history. Like every web server, ours logs connections (IP address and time) to stay secure, but not what you searched for; the [terms](https://search.whiteravens.net/privacy) describe the one small exception.

??? question "Can I choose which sources the results come from?"
    Yes. In the search engine settings, you can enable and disable individual result sources.

---

White Ravens Search is a private, ad-free search engine that gives you full control over where results come from — without tracking and without a search history.
