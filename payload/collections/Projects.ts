import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Progetto',
    plural: 'Progetti',
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
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
      name: 'category',
      type: 'text',
    },
    {
      name: 'techUsed',
      type: 'array',
      fields: [
        {
          name: 'tech',
          type: 'text',
        }
      ]
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    }
  ],
};