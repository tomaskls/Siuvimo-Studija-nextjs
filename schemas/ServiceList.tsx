// components/ServiceList.tsx
import { ServiceListSchema } from "@/types/schema";
import React from 'react'


interface ServiceListProps {
  schema: ServiceListSchema;
}

const ServiceList: React.FC<ServiceListProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceList;