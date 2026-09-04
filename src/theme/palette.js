// Design system: deep space neutrals + violet/teal accent duo.
// Kept the primary/background shape the existing components already consume
// (theme.colors.primary.*, theme.colors.background.*) so the whole app
// re-themes from this one file. `accent` is new and used by the newer
// sections (About, Experience, Contact) for a bit of two-tone variety.

const PRIMARY = {
  lighter: "#f5f6fb", // headings / high-emphasis text
  light: "#9497ab", // muted / secondary text
  main: "#7c6cf6", // primary accent - buttons, links, highlights, borders
  dark: "#14151f", // card & section surfaces
  darker: "#0a0a10", // page background, deepest layer
  contrastText: "#ffffff",
};

const BACKGORUND = {
  bg1: "#0a0a10",
  bg2: "#1d1e2c",
};

const ACCENT = {
  teal: "#34d1bf", // secondary accent for contrast/highlight moments
  amber: "#f5b942", // reserved for rare warm highlight (stats, badges)
};

const palatte = {
  primary: { ...PRIMARY },
  background: { ...BACKGORUND },
  accent: { ...ACCENT },
};

export default palatte;
