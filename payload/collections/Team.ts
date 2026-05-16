import type { CollectionConfig } from 'payload';

export const Team: CollectionConfig = {
  slug: 'team',
  labels: {
    singular: 'Membro Team',
    plural: 'Membri Team',
  },
  admin: {
    useAsTitle: 'surname',
    group: 'Contenuti',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'surname',
      type: 'text',
      required: true,
    },
    {
      name: 'birthYear',
      type: 'number',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fullDescription',
      type: 'richText',
    },
    {
      name: 'stats',
      type: 'json',
      admin: {
        description: 'Esempio: {"CODING": 95, "DESIGN": 90}'
      }
    },
    {
      name: 'specialAbility',
      type: 'text',
    },
    {
      name: 'sampleFile',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'founder',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    }
  ],
};