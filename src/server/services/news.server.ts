// src/services/news.server.ts

import 'server-only';
import type { NewsItem } from '@/types/news';
import { newsItems } from '@/data/news';

export async function getPublicNewsServer(): Promise<ReadonlyArray<NewsItem>> {
  return newsItems;
}
