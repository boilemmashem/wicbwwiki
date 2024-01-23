import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Well, It Could Be Worse',
			social: {
				github: 'https://github.com/boilemmashem/wicbwwiki',
			},
			sidebar: [
				// {
				// 	label: 'Intro',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Intro', link: '/guides/intro' },
				// 	],
				// },
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Characters',
					autogenerate: { directory: 'characters' },
					collapsed: true
				},
				{
					label: 'Factions',
					autogenerate: { directory: 'factions' },
					collapsed: true
				},
				{
					label: 'Regions',
					autogenerate: { directory: 'regions' },
					collapsed: true
				},
				{
					label: 'Pantheon',
					autogenerate: { directory: 'pantheon' },
					collapsed: true
				},
			],
		}),
	],
});
