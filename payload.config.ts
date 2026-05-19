import { buildConfig } from 'payload';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { Projects } from './payload/collections/Projects';
import { Commissions } from './payload/collections/Commissions';
import { MyDevs } from './payload/collections/MyDevs';
import { Roadmap } from './payload/collections/Roadmap';
import { Team } from './payload/collections/Team';
import { Media } from './payload/collections/Media';

import { Home } from './payload/globals/Home';
import { About } from './payload/globals/About';
import { Contacts } from './payload/globals/Contacts';
import { Settings } from './payload/globals/Settings';
import { Blocksmith } from './payload/globals/Blocksmith';

export default buildConfig({
  admin: {
    theme: 'dark',
    components: {
      graphics: {
        Logo: undefined,
        Icon: undefined,
      },
    },
    meta: {
      titleSuffix: '- Procione Admin',
    },
  },
  collections: [Projects, Commissions, MyDevs, Roadmap, Team, Media],
  globals: [Home, About, Contacts, Settings, Blocksmith],
  editor: lexicalEditor({}),
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-for-dev',
});
