import React from 'react';

import { SchemaBase } from '../types/schema';

interface JsonLdProps {
  data: SchemaBase;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}