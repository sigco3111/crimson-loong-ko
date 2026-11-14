# 赤龍 · Crimson Loong (Korean edition)

Korean overlay for the browser demo of [ChetasLua/crimson-loong](https://github.com/ChetasLua/crimson-loong). Demo: [chetaslua.github.io/crimson-loong](https://chetaslua.github.io/crimson-loong/)

This repository changes only the text the game shows on screen, into Korean. The original file `index.html` is kept as is. The page loads `ko-overlay.js`, which reads the dictionary `i18n/ko.json` and replaces the visible strings at display time.

- Language: switch with the button at the top right (English / 한국어). `?lang=en` or `?lang=ko` in the URL opens a language directly. The choice is remembered in the browser.
- Method: original text is preserved in the dictionary keys. Text nodes are rewritten when they are shown, and the source file is not changed except for one `<script>` line added before `</body>`.
- Terms: [docs/glossary.md](docs/glossary.md)
- No external fonts, analytics or server calls. The only extra file requested is `i18n/ko.json`. No service worker or offline cache.
- Limits: the game shows about 25 short strings and all of them are translated. Documents such as the original README are not translated. If the dictionary cannot load (for example when the file is opened directly from disk), the page stays in English. A few English strings may flash while the page loads.

## License

The original repository ChetasLua/crimson-loong does not state a project license. The only license it declares is three.js (MIT), which is used by the game and noted in its README. This is an unofficial translation made without an explicit permission from the author. If the author or a rights holder asks, this repository will be deleted on request.

Korean version: [README.md](README.md)
