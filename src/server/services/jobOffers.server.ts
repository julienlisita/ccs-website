// src/services/jobOffers.server.ts

import 'server-only';
import type { JobOffer } from '@/types/job';
import { jobOffers } from '@/data/jobOffers';

export async function getPublicJobOffersServer(): Promise<ReadonlyArray<JobOffer>> {
  return jobOffers;
}
