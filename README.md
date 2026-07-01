# PLAYRASA

PLAYRASA is an original short-video/short-drama app scaffold with an owner-controlled admin panel.

It is not copied APK source. It has no old APK catalog, no premium bypass, and no bundled third-party content. The mobile app only displays content that your admin panel publishes.

## What You Get

- PLAYRASA mobile app branding, logo mark, and interface
- Empty default library until you upload your own videos
- Browser admin panel for upload, publish, unpublish, preview, and delete
- Local API used by the mobile app
- Published-only app feed so drafts stay hidden
- Smoke test for the admin API and app API

## Run Admin Panel

```bash
npm run admin
```

Open:

```text
http://localhost:4100/admin
```

Use the admin page to upload a video file or paste a video URL. Set status to `Published` to make it visible in the app.

## Run Mobile App

```bash
npm install
npm start
```

Then press `a` for Android, `i` for iOS, or scan with Expo Go.

For Android emulator testing, the app uses `http://10.0.2.2:4100`. For a real phone on Wi-Fi, change `src/api.ts` to your computer's local IP address, for example `http://192.168.1.20:4100`.

## Test

```bash
npm test
```

The test starts the local API, creates a temporary upload, checks that published content appears in the app API, checks that draft content is hidden, then deletes the upload.

## Files To Customize

- Mobile app: `App.tsx`
- Branding: `src/brand.ts`
- Logo source: `assets/playrasa-logo.svg`
- App API client: `src/api.ts`
- Admin/backend: `server/server.mjs`
- Admin UI: `server/admin.html`
- Local content database: `server/data/library.json`

## Production Notes

For launch, replace the local server with a hosted backend, add admin login, store videos in object storage, add transcoding/HLS, and configure the mobile API URL for your domain.
