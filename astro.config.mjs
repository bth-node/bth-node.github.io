// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	site: 'https://bth-node.github.io/',
	base: '/',
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	integrations: [
		starlight({
			plugins: [
				starlightImageZoom(),
			],
			title: 'Kursen node',
			favicon: 'favicon.png',
			logo: {
				//src: './src/assets/leaf_256x256.png',
				src: '@assets/leaf_256x256.png',
			},
			customCss: [
				'./src/styles/dbwebb.css',
			],
			editLink: {
				baseUrl: 'https://github.com/bth-node/bth-node.github.io/tree/main',
			},
			social: [
    			{ icon: 'github', label: 'GitHub', href: 'https://github.com/bth-node/bth-node.github.io' }
			],
			head: [
				{
				  tag: 'base',
				  attrs: {
					href: ''
				  }
				}
			],
			sidebar: [
				{
					label: 'Introduktion',
					collapsed: true,
					autogenerate: { directory: 'intro' },
				},
				{
					label: 'Labbmiljö',
					collapsed: true,
					autogenerate: { "directory": "labbmiljo" }
				},
				{
					label: 'Kursrepo',
					collapsed: true,
					autogenerate: { "directory": "kursrepo" }
				},
				// {
				// 	label: 'Kom igång',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kom-igang' },
				// },
				// {
				// 	label: 'Kmom01',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kmom01' },
				// },
				// {
				// 	label: 'Kmom02',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kmom02' },
				// },
				// {
				// 	label: 'Kmom03',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kmom03' },
				// },
				// {
				// 	label: 'Kmom04',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kmom04' },
				// },
				// {
				// 	label: 'Kmom05',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kmom05' },
				// },
				// {
				// 	label: 'Kmom06',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kmom06' },
				// },
				// {
				// 	label: 'Kmom10',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kmom10' },
    //     },
        {
					label: 'Kursmoment',
					collapsed: true,
					autogenerate: { directory: 'kmom' },
				},
				// {
				// 	label: 'Studieguide',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'studieguide' },
				// 	/* items: [
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],*/
				// },
				{
					label: 'Övrigt',
					collapsed: true,
					autogenerate: { directory: 'ovrigt' },
				}
			],
		}),
	],
});
