export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Explicitly map the site root to index.html.
    if (url.pathname === "/") {
      url.pathname = "/index.html";
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }

    // Serve all other static files (README.md, images, etc.) from the
    // Cloudflare Workers asset binding.
    return env.ASSETS.fetch(request);
  },
};
