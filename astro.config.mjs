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
			components: {
				Head: './src/components/Head.astro',
			},
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
				{ slug: 'kmom01' },
				{ slug: 'kmom02' },
				{ slug: 'kmom03' },
				{ slug: 'kmom04' },
				{ slug: 'kmom05' },
				{ slug: 'kmom06' },
				{ slug: 'kmom10' },
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
