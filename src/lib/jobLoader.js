import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

/**
 * Load and parse ESA job data from CSV file at build-time
 * @returns {Promise<Array>} Array of job objects
 */
export async function loadJobs() {
  const csvPath = path.join(process.cwd(), 'data', 'ESA_intern_jobs_full_enriched.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  
  const result = Papa.parse(csvContent, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: false,
  });
  
  return result.data;
}
