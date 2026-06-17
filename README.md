# Building Green, Made Simple — site

Static GitHub Pages site for the open-access guide
(DOI [10.5281/zenodo.20365825](https://doi.org/10.5281/zenodo.20365825), CC BY-NC-ND 4.0).

## What's here

```
index.html            Landing page: guide, DOI, three-filter framework, zone table
zone-finder.html      Climate Zone Finder — city name → zone → strategies by budget band
measure-picker.html   Measure Picker — zone × budget × skill filters + economy layer
assets/bgms.css       Shared stylesheet (BGMS Style Guide v1, Earth & Forest palette)
assets/zones.js       Six-zone definitions and per-zone strategy content
assets/cities.js      Curated city → zone lookup (~190 cities, static, offline)
assets/measures.js    Measure dataset with cost band, ease, payback band, horizon, financing note
```

## Architecture decisions (deliberate)

- **Pure static. No build step, no backend, no APIs, no analytics.** Open any file
  in a browser and it works; GitHub Pages serves it unchanged.
- **No live data feeds and no per-country cost databases.** Costs are *bands*
  (<$50 / $50–500 / >$500) and paybacks are *ranges* only where a verified Tier 1/2
  source supports them (DOE Building America, NRCan, IEA, WHO, ENERGY STAR — same
  sources as the guide's research log). Stale numbers in a tool are worse than no
  tool; bands and physics don't go stale.
- **City lookup is a curated list, not geocoding.** ~518 cities mapped to the six
  zones via simplified Köppen-Geiger; borderline cities carry an honest note, and
  unlisted cities fall back to a manual zone chooser. No external service to break
  or to track users.
- **Content is versioned with the guide.** When V2 ships, `zones.js` and
  `measures.js` are updated in the same pass as the PDF, so the tools never say
  something the guide doesn't.

## Deploying

1. Create a public repo (e.g. `bgms-guide`) and push these files to `main`.
2. Repo **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. Site goes live at `https://<username>.github.io/bgms-guide/` within a minute or two.
4. Add that URL to: the Zenodo record (as an "alternate identifier"/related URL),
   the LinkedIn featured section, and the first comment of framework-week posts.

Optional: a custom domain can be added later in the same Pages settings without
changing anything in the repo.

## Updating the data

- New city: add a row to `assets/cities.js` —
  `["City", "CC", "ZONE", "optional borderline note", ["optional aliases"]]`.
- New measure: add an object to `assets/measures.js`. Rules: cost as a band,
  payback only with a loggable source, a financing note for every cost-band-3
  measure, and `avoid:[]` zones where the physics turns against it.

## License

Site content mirrors the guide: CC BY-NC-ND 4.0 © 2026 Pradeep Angiras.
