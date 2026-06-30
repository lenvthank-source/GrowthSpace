import { createClient } from 'next-sanity';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
};

const client = createClient(config);

export const sanityClient = {
  ...client,
  fetch: async (query: string, params?: any, options?: any) => {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-id') {
      return query.trim().endsWith('}') ? [] : null;
    }
    return client.fetch(query, params, options);
  }
};
