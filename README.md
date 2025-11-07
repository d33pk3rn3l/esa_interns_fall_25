# 🚀 ESA Internships Explorer

A modern, static website for exploring European Space Agency (ESA) internship opportunities through interactive visualization and search.

## 🌟 Features

- **📊 Interactive Network Graph**: D3.js force-directed visualization showing relationships between ESA, locations, directorates, and 213 job opportunities
- **🔍 Fuzzy Search**: Real-time search across job titles, locations, directorates, and descriptions using Fuse.js
- **⚡ 100% Static**: Built with Astro for optimal performance, all data loaded at build-time
- **🎨 Dark Mode UI**: Clean, modern interface optimized for readability
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** v5.15.4 - Static site generator
- **[D3.js](https://d3js.org/)** v7.9.0 - Data visualization
- **[Fuse.js](https://fusejs.io/)** v7.1.0 - Fuzzy search
- **[PapaParse](https://www.papaparse.com/)** v5.5.3 - CSV parsing

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions deployment workflow
├── data/
│   └── ESA_intern_jobs_full_enriched.csv  # Job data source
├── src/
│   ├── components/
│   │   ├── JobGraph.astro   # D3.js force-directed graph
│   │   └── Search.astro     # Fuse.js search component
│   ├── lib/
│   │   └── jobLoader.js     # CSV data loader (build-time)
│   ├── pages/
│   │   └── index.astro      # Main page
│   └── styles/
│       └── global.css       # Global styles (dark mode theme)
├── astro.config.mjs         # Astro configuration
└── package.json             # Dependencies
```

## 🎯 How It Works

### Data Loading
The `jobLoader.js` utility reads the CSV file at build-time using Node.js `fs` module and parses it with PapaParse, converting it to a JSON array of job objects.

### Visualization
The `JobGraph.astro` component creates a force-directed graph with:
- **Center node**: ESA (white with blue border)
- **Location nodes**: 14 unique locations (blue)
- **Directorate nodes**: 11 unique directorates (green)  
- **Job nodes**: 213 individual jobs (gray)

Nodes are interactive with drag functionality and hover tooltips.

### Search
The `Search.astro` component provides fuzzy search across multiple fields with a threshold of 0.3, displaying the top 10 results with job details and direct links to the ESA career portal.

## 🚀 Deployment

The site is configured for GitHub Pages deployment:

1. Push to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Site available at `https://d33pk3rn3l.github.io/esa_interns_fall_25`

## 📄 Data Source

Job data is sourced from `data/ESA_intern_jobs_full_enriched.csv` containing 213 ESA internship opportunities with fields including:
- Title
- Location (Workplace)
- Directorate
- Closing Date
- Link to job posting
- Description

## 🤝 Contributing

This is a static site project. To update job data, replace the CSV file in the `data/` directory and rebuild.

## 📝 License

ISC 
