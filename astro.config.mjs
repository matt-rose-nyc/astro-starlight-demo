// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://matt-rose-nyc.github.io',
    base: '/astro-starlight-demo/',
    integrations: [
		starlight({
			title: 'OMP Documentation POC with Astro',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/matt-rose-nyc/astro-starlight-demo' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
