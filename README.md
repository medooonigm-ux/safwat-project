# لكِ ❤ — how to customize

Everything you'll want to change lives at the top of **script.js**, in the block marked:

```js
// CUSTOMIZE YOUR WEBSITE HERE
```

| What | Where | How |
|---|---|---|
| **Password** | `const PASSWORD = "CHANGE_ME";` | Replace with any password you like. |
| **Her name (optional check)** | `const REQUIRED_NAME = "";` | Leave blank to accept any name typed in, or set an exact name to require. |
| **The romantic message** | `const romanticMessage = \`...\`;` | Replace the text. Leave a **blank line** between paragraphs — each paragraph types out separately. Arabic + RTL already work correctly. |
| **The final message** (after "One More Thing ❤") | `const finalMessage = \`...\`;` | Same idea — a short closing message. |
| **Background photo** | `const backgroundImage = "assets/background.jpg";` | Drop your photo into the `assets/` folder using that exact filename, or update the path. |
| **Music** | `const musicFile = "assets/music.mp3";` | Drop an mp3 into `assets/` using that filename, or update the path. |

## Assets folder

Put your files here:

```
assets/
  background.jpg   ← her photo (or a photo of the two of you)
  music.mp3         ← the song
```

If you skip the photo, the page still looks intentional — it falls back to a deep burgundy gradient instead of a broken image. If you skip the music, the player button simply has nothing to play; everything else works normally.

## Opening it

Just open `index.html` in a browser. No install, no server, no build step — it's plain HTML/CSS/JS.

For music autoplay: most browsers block audio from starting on its own before any interaction. Since she'll have just typed a password and pressed "ادخلي" (Enter), that counts as an interaction, so autoplay will usually work. If it doesn't, the floating button in the corner starts/pauses it manually.

## Files

- `index.html` — structure (login screen + letter page + final reveal)
- `style.css` — all styling (burgundy/wine/gold palette, glassmorphism, animations)
- `script.js` — your customization block + all logic (login, typewriter, particles, music)
- `assets/` — put your photo and music file here
