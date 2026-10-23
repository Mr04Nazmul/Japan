# myjapan

A Japan travel tracker with all 47 prefectures, personal names, local progress storage, PNG poster exports, a website QR code and a responsive AdSense unit.

## Development

Requires Node.js 20 or newer. Run `npm ci` then `npm run build`.

The generated `assets/app.js` and `assets/app.css` are committed so the root is ready for GitHub Pages. Regenerate them after source changes.

## Publishing

The included GitHub Actions workflow builds and deploys GitHub Pages. The Pages URL is https://mr04nazmul.github.io/Japan/.

## Photo saving

Web browsers cannot silently write into iOS Photos. Save to Gallery opens the native file sharing sheet where supported; choose Save Image. A standard PNG download and a long-press image fallback are also provided.

## Advertising

Publisher: ca-pub-3728341118830943. Responsive slot: 9686075799. AdSense approval and ad availability determine whether ads display; the code alone does not guarantee delivery. Ads never enter exported posters.

## Map data

Geographic geometry is derived from https://github.com/dataofjapan/land/blob/master/japan.geojson and simplified for display. The travel percentage counts visited prefectures, rather than land area. Okinawa uses a clearly labeled inset in exported posters.
