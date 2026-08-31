// Prefix root-absolute asset paths with the deploy basePath (e.g. "/porfolio"
// on GitHub Pages). Plain <img>/<a> tags don't get Next's basePath applied
// automatically, so wrap any "/…" public asset path with asset().
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => (path ? `${BASE}${path}` : path);
