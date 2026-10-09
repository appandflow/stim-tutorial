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

## Tutorial pull requests

The last tutorial step can open a pull request to this repo with a screenshot at `finish/<github-login>.png`. A workflow (`.github/workflows/tutorial-finish.yml`) comments, adds the `tutorial-finish` label and closes the PR without merging. It uses `pull_request_target` and only calls the GitHub API; it never checks out or runs the PR's code.

## License

MIT
