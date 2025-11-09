# ESA Internships Explorer

A static site for exploring ESA internship data, featuring a D3.js force-directed graph and client-side fuzzy search.

## Tech Stack

  * **Core Framework**: [Astro](https://astro.build/) v5 (Static Site Generator)
  * **Visualization**: [D3.js](https://d3js.org/) v7 (Force-directed network graph)
  * **Search**: [Fuse.js](https://fusejs.io/) v7 (Client-side fuzzy search)
  * **Data Processing**: [PapaParse](https://www.papaparse.com/) (Build-time CSV parsing)

## Architecture

  * **Data Source**: Static CSV file (`data/ESA_intern_jobs_full_enriched.csv`).
  * **Build Process**: Data is parsed once at build-time using `jobLoader.js` and baked into the static output.
  * **Runtime**: The site is 100% static JavaScript/HTML. Search and visualization run entirely in the client browser with no backend.

## Project Structure

```
├── data/
│   └── ESA_intern_jobs_full_enriched.csv  # Source data
├── src/
│   ├── components/
│   │   ├── JobGraph.astro  # D3.js visualization logic
│   │   └── Search.astro    # Fuse.js search implementation
│   ├── lib/
│   │   └── jobLoader.js    # Build-time data loader
│   └── pages/
│       └── index.astro     # Main entry point
```

## Development

```bash
npm install
npm run dev
npm run build
```

Or just use GitHub Actions
