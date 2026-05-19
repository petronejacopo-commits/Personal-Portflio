import type { GlobalConfig } from 'payload';

export const Contacts: GlobalConfig = {
  slug: 'contacts',
  label: 'Contatti',
  admin: {
    group: 'Contenuti',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'discord',
      type: 'text',
    },
    {
      name: 'telegram',
      type: 'text',
    },
    {
      name: 'formEnabled',
      type: 'checkbox',
      defaultValue: true,
    }
  ],
};