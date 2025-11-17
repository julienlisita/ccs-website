// src/components/sections/NewsSection.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
import NewsCard from '@/components/widgets/NewsCard';
import type { NewsItem } from '@/types/news';
import Section from '../common/Section';
import SectionWrapper from '../common/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

type Props = { items: ReadonlyArray<NewsItem> };

export default function NewsSection({ items }: Props) {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock title="Articles récents" align="left" />

        <FeaturesGrid
          items={items}
          gridClassName="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          pageSize={6}
          renderItem={(item) => (
            <NewsCard
              key={item.id ?? item.slug}
              title={item.title}
              description={item.description}
              displayDate={item.displayDate}
              source={item.source}
              url={item.url}
              imageUrl={item.imageUrl}
              imageAlt={item.imageAlt ?? item.title}
            />
          )}
          getKey={(it, i) => `${it.title}-${i}`}
        />
      </SectionWrapper>
    </Section>
  );
}
