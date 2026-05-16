import type { GlobalConfig } from 'payload';

export const Blocksmith: GlobalConfig = {
  slug: 'blocksmith',
  label: 'Blocksmith Studio',
  admin: {
    group: 'Contenuti',
  },
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      defaultValue: 'BLOCKSMITH',
    },
    {
      name: 'heroSubtitle',
      type: 'text',
      defaultValue: 'THE FORGE',
    },
    {
      name: 'introText',
      type: 'textarea',
    },
    {
      name: 'storiaParagrafo1',
      type: 'textarea',
    },
    {
      name: 'storiaParagrafo2',
      type: 'textarea',
    },
    {
      name: 'sviluppoText',
      type: 'textarea',
    },
    {
      name: 'designText',
      type: 'textarea',
    },
    {
      name: 'marketingText',
      type: 'textarea',
    },
    {
      name: 'comeLavoriamo1',
      type: 'textarea',
    },
    {
      name: 'comeLavoriamo2',
      type: 'textarea',
    },
    {
      name: 'comeLavoriamo3',
      type: 'textarea',
    },
    {
      name: 'aChiCiRivolgiamo1',
      type: 'textarea',
    },
    {
      name: 'aChiCiRivolgiamo2',
      type: 'textarea',
    },
    {
      name: 'doveSiamo1',
      type: 'textarea',
    },
    {
      name: 'doveSiamo2',
      type: 'textarea',
    },
    {
      name: 'finaleText',
      type: 'text',
      defaultValue: 'Benvenuto alla Forge.',
    }
  ],
};