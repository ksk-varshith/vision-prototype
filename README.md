# VISION — SEVA FIRST 2026 Four-Pillar Prototype

Static, self-contained HTML/CSS/JavaScript educational career-navigation demonstration.

## Run locally in VS Code
1. Extract the ZIP. Open the extracted folder in VS Code.
2. Install **Live Server** by Ritwick Dey (VS Code Extensions).
3. Right-click `index.html` → **Open with Live Server**.
4. Visit the browser address shown by Live Server (usually http://127.0.0.1:5500/).

Alternatively from this folder: `python -m http.server 5500` then open `http://localhost:5500/`.

## Deploy
Drag the **folder containing index.html** into Netlify Drop (https://app.netlify.com/drop). Test the generated public link in a private browser tab. A public URL is not included with this package.

## Features
- Four independently accessible, connected sections: Discover, Decide, Navigate and Access.
- Six student educational stages, 34 career profiles, stage-aware profiles and explainable, advisory matching.
- Career search, domain filters, saved careers, comparison of up to three careers, detailed career view.
- Interactive five-step roadmaps with alternative routes and next-step checklist.
- 12 curated authoritative programme/portal *references* with relevance explanations and stage filters.
- Downloadable text plan, printing, and browser-local preferences.
- Telugu label support is partial; detailed career content remains English pending translation review.

## Known limitations
- No trained AI or validated aptitude test; matching is explainable rule-based relevance.
- No live internship/scholarship APIs and no claims of current application openings.
- Stage match is not a formal eligibility determination. Educational requirements, dates and fees must be verified directly from official providers.
- No student pilot is claimed; actual field evidence requires approved school access and consent.
- Content coverage is representative, not nationwide or exhaustive.
- Storing preferences in browser localStorage on a shared device requires clearing after use using **My plan → Reset all locally saved data**.

## Source files
`index.html`, `app.css`, `app.js`, `data.js`, `logic.js`, `opportunities.js`. No API keys or build tools required.
