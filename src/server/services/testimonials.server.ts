// src/services/testimonials.server.ts

import 'server-only';
import type { Testimonial } from '@/types/testimonial';
import { testimonials } from '@/data/testimonials';

export async function getPublicTestimonialsServer(): Promise<ReadonlyArray<Testimonial>> {
  return testimonials;
}
