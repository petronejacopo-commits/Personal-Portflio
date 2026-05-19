import type { CollectionConfig } from 'payload';

export const MyDevs: CollectionConfig = {
  slug: 'my-devs',
  labels: {
    singular: 'Dev Tool',
    plural: 'My Devs',
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
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Emoji Icon',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        }
      ]
    }
  ],
};