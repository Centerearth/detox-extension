# Detox Extension

A Chrome extension that forces you to wait 10 seconds before accessing distracting websites.

## Loading the Extension

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer mode** using the toggle in the top-right corner
3. Click **Load unpacked**
4. Select the `detox-extension` folder
5. The extension is now active

To apply any code changes, click the **refresh icon** on the extension card in `chrome://extensions`, then reload the target webpage.

## Blocked Sites

The following sites are currently blocked:

- `mail.google.com`
- `messages.google.com`
- `reddit.com`
- `facebook.com`
- `youtube.com`
- `linkedin.com`

## Adding or Removing Sites

Open `manifest.json` and edit the `matches` array inside `content_scripts`:

```json
"matches": [
  "https://mail.google.com/*",
  "https://www.reddit.com/*"
]
```

**To add a site**, add a new line in the same format:
```json
"https://www.twitter.com/*"
```

**To remove a site**, delete its line from the list.

After editing, reload the extension at `chrome://extensions` for the changes to take effect.

### URL Format

Match patterns follow the format `https://<domain>/*`. A few rules:
- Use `www.` only if the site actually uses it (e.g. `www.reddit.com` but `mail.google.com`)
- The `*` at the end matches any path on that domain
- Use `https://*.example.com/*` to match all subdomains
