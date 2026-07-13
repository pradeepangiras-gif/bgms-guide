# Building Green, Made Simple — site

Static site for [angiras.co](https://angiras.co), home of the open-access guide (DOI [10.5281/zenodo.20365824](https://doi.org/10.5281/zenodo.20365824) — concept DOI, always resolves to the latest version; currently V1.1), CC BY-NC-ND 4.0.

## What's here
## Live pages

| Page | URL |
| --- | --- |
| Angiras & Co. landing page | https://angiras.co/ |
| BGMS guide landing page | https://angiras.co/bgms/ |
| Climate Zone Finder | https://angiras.co/bgms/zone-finder.html |
| Measure Picker | https://angiras.co/bgms/measure-picker.html |
| Payback Calculator | https://angiras.co/bgms/payback-calculator.html |
| Rainwater Tank Sizer | https://angiras.co/bgms/rainwater-tank.html |
| Guide PDF (Zenodo, always latest version) | https://doi.org/10.5281/zenodo.20365824 |

All five BGMS tools share navigation, so any one page links to the rest. The zone finder, measure picker, payback calculator, and rainwater sizer all run entirely client-side — no data leaves the browser.

## Architecture decisions (deliberate)

- **Pure static.** No build step, no backend, no server-side APIs. Open any file in a browser and it works; GitHub Pages serves it unchanged.
- **No live data feeds and no per-country cost databases.** Costs are bands (<$50 / $50–500 / >$500) and paybacks are ranges only where a verified Tier 1/2 source supports them (DOE Building America, NRCan, IEA, WHO, ENERGY STAR, EDGE, BS EN 16941-1 — same sources as the guide's research log). Stale numbers in a tool are worse than no tool; bands and physics don't go stale.
- **City lookup is a curated list, not geocoding.** 518 cities mapped to six zones via a measures-first Köppen-Geiger classification (zone = a causal claim about which guide measures apply, not a temperature reading); borderline cities carry an honest note, and unlisted cities fall back to a manual zone chooser. No external geocoding service to break or to track users.
- **Content is versioned with the guide.** When V2 ships, `zones.js` and `measures.js` are updated in the same pass as the PDF, so the tools never say something the guide doesn't.
- **Method over compliance.** Where a tool's math follows a named standard or paper (e.g. the rainwater sizer's dry-period-demand method, consistent in principle with BS EN 16941-1:2024), the site states the method's lineage rather than claiming certified compliance. Mathematical methods aren't copyrightable; the site implements them, it doesn't reproduce standards text.
- **Privacy-respecting analytics only.** Ahrefs Web Analytics (cookieless, no personal data collected) is used to understand traffic at a basic level. No behavioral tracking, no ad pixels, no third-party data sharing.

## Deploying

1. Push to `main` on this repo.
2. Repo Settings → Pages → Source: Deploy from a branch → `main` / (root).
3. Custom domain `angiras.co` is configured via CNAME (Porkbun DNS); GitHub Pages serves both the root and `/bgms/` from this one repo.
4. Sitemap at `/sitemap.xml` lists all indexable pages — update it when a page is added or removed.

## Updating the data

- **New city:** add a row to `bgms/assets/cities.js` — `["City", "CC", "ZONE", "optional borderline note", ["optional aliases"], lat, lon]`.
- **New measure:** add an object to `bgms/assets/measures.js`. Rules: cost as a band, payback only with a loggable source, a financing note for every cost-band-3 measure, and `avoid:[]` zones where the physics turns against it.
- **Sourcing:** every numeric claim across the site traces to `BGMS_Research_Log` (Tier 1 or verified Tier 2). Unsourced claims don't ship.

## License

Site content mirrors the guide: CC BY-NC-ND 4.0 © 2026 Pradeep Angiras.
