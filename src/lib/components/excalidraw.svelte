<script lang="ts">
	import type { ExcalidrawProps } from '@excalidraw/excalidraw/types/types';
	import { createElement } from 'react';
	import { createRoot } from 'react-dom/client';

	let rootEl: HTMLElement;
	let props: ExcalidrawProps = $props();

	$effect(() => {
		const root = createRoot(rootEl);

		import('@excalidraw/excalidraw').then(({ Excalidraw, WelcomeScreen, MainMenu }) => {
			const welcome = createElement(WelcomeScreen, { key: 'WelcomeScreen' });
			const menu = createElement(MainMenu, { key: 'MainMenu' }, [
				createElement(MainMenu.DefaultItems.LoadScene, { key: 'LoadScene' }),
				createElement(MainMenu.DefaultItems.SaveAsImage, { key: 'SaveAsImage' }),
				createElement(MainMenu.DefaultItems.Export, { key: 'Export' }),
				createElement(MainMenu.DefaultItems.ToggleTheme, { key: 'ToggleTheme' }),
				createElement(MainMenu.Separator, { key: 'Separator' }),
				createElement(MainMenu.DefaultItems.ChangeCanvasBackground, {
					key: 'ChangeCanvasBackground'
				})
			]);
			const excalidraw = createElement(Excalidraw, { ...props }, [welcome, menu]);
			root.render(excalidraw);
		});

		return () => root.unmount();
	});
</script>

<div bind:this={rootEl} class="root" data-theme={props.theme}></div>

<style>
	.root {
		--bg-color: '#ffffff';
		height: 100svh;
		background-color: var(--bg-color);

		&[data-theme='dark'] {
			--bg-color: #121212;
		}
	}
</style>
