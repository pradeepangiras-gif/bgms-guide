# How to put this on angiras.co — step by step

This folder is your website, ready to upload. **You will not type a single command.** Everything is done by dragging files on the GitHub website. You cannot break anything you can't undo — GitHub keeps a history of every change.

---

## What's in this folder

```
_deploy/
├── index.html          ← your homepage  (becomes angiras.co)
├── bgms/
│   └── index.html      ← the BGMS guide (becomes angiras.co/bgms/)
├── styles.css          ← the brand styling (do not rename)
├── tokens/             ← colors, fonts, spacing (leave as-is)
└── assets/             ← logos, photos, illustrations
```

The folder layout **mirrors your website exactly**. Whatever path a file has here is the path it gets on angiras.co.

---

## ⚠️ Read this first — one safety note

Your live `angiras.co/bgms/` already has your **calculators** (`zone-finder.html`, `measure-picker.html`, `payback-calculator.html`, `rainwater-tank.html`). 

- Those four files are **NOT** in this folder, so uploading **will not touch or delete them.** ✅
- The one file this **will replace** is your current `bgms/index.html` (the BGMS landing page). That's intended — this is the new, nicer version. The guide links *out* to your existing calculators, which stay exactly as they are.

If you want to be extra safe: before uploading, download your current `bgms/index.html` from GitHub and keep a copy. (You can also always revert from GitHub's history — see the last section.)

---

## Step-by-step (web upload, no command line)

1. Go to **github.com** and open your website repository (the one that publishes to angiras.co — likely `pradeepangiras-gif/bgms-guide` or your `…github.io` repo).
2. Click **`Add file`** (top right) → **`Upload files`**.
3. Open this `_deploy` folder on your computer. Select **everything *inside* it** (the `index.html`, `bgms` folder, `styles.css`, `tokens`, `assets`) — **not** the `_deploy` folder itself — and **drag it onto the GitHub page.**
   - GitHub keeps the folder structure automatically. The `bgms` folder will land in the right place.
4. Scroll down to **"Commit changes"**. In the message box type something like `Add new homepage and BGMS guide`. Leave "Commit directly to the main branch" selected.
5. Click the green **`Commit changes`** button.
6. Wait about **1–2 minutes**. GitHub Pages rebuilds the site automatically. Refresh **angiras.co** — you'll see the new homepage. Visit **angiras.co/bgms/** for the guide.

That's it. 🎉

---

## Want to preview it BEFORE uploading?

Just **double-click `index.html`** in this folder — it opens in your browser and looks exactly like the live site will. Click around, check the links. (Fonts need an internet connection to load.)

---

## If something looks wrong / how to undo

- **A picture is missing:** you probably didn't drag the `assets` folder along. Re-upload it.
- **The styling is gone (plain text):** the `styles.css` or `tokens` folder didn't upload. Re-upload them to the root.
- **You want the old page back:** on GitHub, click the **commit history** (the clock/“History” link), find the previous version, and click **Revert**. Nothing is ever lost.

---

## When your training & consulting go live

This same folder is how you'll grow. Send me the green light and I'll add the new pages (e.g. `bgms/`-style course pages) into this structure — they'll inherit the identical brand automatically, and you upload them the same way.

— Built for Angiras & Co.™ · contact set to pradeep@angiras.co
