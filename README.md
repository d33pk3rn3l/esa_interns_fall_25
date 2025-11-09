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

## Disclaimer

This website is an independent, personal project and is not affiliated with, endorsed by, or in any way officially connected with the European Space Agency (ESA) or ETH Zürich.

All information (including internship listings, descriptions, and locations) is sourced from publicly available data on the official ESA Career Portal. While efforts are made to ensure the information is accurate and up-to-date, no guarantees are made regarding the completeness, accuracy, reliability, or timeliness of the data presented.

This site is provided "as-is" and "as-available" without any warranties, express or implied. The creator of this site assumes no liability for any errors, omissions, or for any actions taken or decisions made based on the information provided herein.

Users are strongly advised to verify all information directly on the official ESA Career Portal before making any decisions or applications.

All trademarks, service marks, and logos (e.g., "ESA") are the property of their respective owners.
