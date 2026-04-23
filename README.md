# YouTube Clone

A front-end clone of YouTube's homepage, built from scratch with HTML and CSS to practise layout fundamentals.

**Live demo:** [developer-coder1.github.io/Youtube-clone](https://developer-coder1.github.io/Youtube-clone/)

## What it does

- Recreates YouTube's homepage layout — top navbar, left sidebar, and a grid of video cards.
- Each video card has a thumbnail, title, channel info, views, and timestamp.
- Responsive-ish: adapts to different screen sizes (still working on making it fully mobile-friendly).

## Why I built it

I wanted a project that would force me to actually understand Flexbox, Grid, and positioning — not just read about them. YouTube's homepage is a good test because there's a sidebar, a sticky header, and a responsive grid all working together. Got inspiration from watching tutorials like SuperSimpleDev's, but wrote my own version to make sure I understood what every line was doing.

## What I learned

- **CSS Grid** for laying out the video cards.
- **Flexbox** for aligning stuff inside each card and in the header.
- **Positioning** — fixed headers, sticky sidebars, z-index when things overlap.
- How much work goes into pixel-matching a real product. Real websites have a LOT of small details.
- Organising HTML so the CSS can actually style it cleanly (classes and structure matter).

## Tech used

- HTML
- CSS
- No frameworks, no JavaScript — pure front-end fundamentals on purpose.

## Running it locally

Just clone and open `index.html` in a browser — no build step needed.

```bash
git clone https://github.com/Developer-Coder1/Youtube-clone.git
cd Youtube-clone
# open index.html in your browser, or use VS Code Live Server
```

## What I'd do next

- Make it fully mobile-responsive (currently breaks on small screens).
- Add a working search bar (probably with the YouTube API or mock data).
- Dark mode toggle.
- Recreate the video player page, not just the homepage.

## About me

I'm a young self-taught dev from the UK, working toward a Level 6 software engineering apprenticeship after sixth form. This was one of my earlier projects — built it to lock in CSS fundamentals before moving on to JavaScript-heavy apps.
