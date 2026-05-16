import type { CollectionConfig } from 'payload';

export const Roadmap: CollectionConfig = {
  slug: 'roadmap',
  labels: {
    singular: 'Roadmap Event',
    plural: 'Roadmap Events',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Contenuti',
  },
  fields: [
    {
      name: 'year',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Completed', value: 'completed' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Planned', value: 'planned' }
      ],
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
    }
  ],
};