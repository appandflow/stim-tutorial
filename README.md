# stim-tutorial

A tiny Expo app (SDK 58) with one screen: a title and a subtitle on a background. The Stim Desktop tutorial clones it so you can try Stim on a real project.

The colors live in `theme.js` (`titleColor`, `backgroundColor`). Change one, save, and the app updates. On start the app logs `[stim:tutorial] title color=... background=...`, which shows up in `stim logs`.

## Run it with Stim

```sh
npm install
npx stim start
npx stim ios
npx stim logs
```

If `stim` is installed globally, drop `npx`. The Android version is `stim android`. Stop with `stim stop`.

## License

MIT
