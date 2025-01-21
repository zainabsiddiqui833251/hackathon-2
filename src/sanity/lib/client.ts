// src/sanity/client.ts
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env'; // Assuming these are in your `.env` or config files

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages or using ISR/revalidation
});

