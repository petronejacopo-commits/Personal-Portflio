import type { CollectionConfig } from 'payload';

export const Commissions: CollectionConfig = {
  slug: 'commissions',
  labels: {
    singular: 'Commissione',
    plural: 'Commissioni',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Contenuti',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'UX/UI Design', value: 'uxui' },
        { label: 'Lore Design', value: 'lore' },
        { label: 'Social Media Manager', value: 'social' }
      ],
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'caption',
          type: 'text',
        }
      ]
    }
  ],
};