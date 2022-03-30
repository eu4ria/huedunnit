<script>
	import { colours } from '$lib/../stores';
	import Title1 from '$lib/components/title1.svelte';
	import Title2 from '$lib/components/title2.svelte';
	let position = Math.floor(Math.random() * $colours.length);
	let palette = $colours[position];
	let m = { x: 0, y: 0 };

	const getNext = (old) => {
		position = old + 1;
		if (position > $colours.length - 1) {
			position = 0;
		}
		palette = $colours[position];
	};
	const getPrevious = (old) => {
		position = old - 1;
		if (position < 0) {
			position = $colours.length - 1;
		}
		palette = $colours[position];
	};
	const getRandom = () => {
		position = Math.floor(Math.random() * $colours.length);
		palette = $colours[position];
	};
	const copyClipboard = (position) => {
		const clipboardPalette = $colours[position];
		console.log(clipboardPalette);
		let clipboardValue = '';
		clipboardPalette.forEach((col) => (clipboardValue += col.col + ','));
		navigator.clipboard.writeText(clipboardValue);
	};
</script>

<Title1 text="Huedunnit" />
<Title2 text={palette.name} />
<section>
	<div class="palette">
		{#each palette.data as colour}
			<div class="colour" data-text={colour.col} style={'background-color:' + colour.col + ';'} />
		{/each}
	</div>
</section>

<div class="buttons">
	<button id="previous" on:click={() => getPrevious(position)}
		><i class="fa-solid fa-chevron-left" /></button
	>
	<button id="random" on:click={getRandom}><i class="fa-solid fa-shuffle" /></button>
	<button id="copy" on:click={() => copyClipboard(position)}><i class="fa-solid fa-copy" /></button>
	<button id="next" on:click={() => getNext(position)}
		><i class="fa-solid fa-chevron-right" /></button
	>
</div>

<style lang="scss">
	.buttons {
		position: absolute;
		bottom: $--size-4;
		left: 50%;
		display: flex;
		// gap: $--size-1;
		transform: translate(-50%);
	}
	button {
		width: 6rem;
		outline: none;
		border: none;
		background: none;
		font-size: $--size-6;
		cursor: pointer;
		transition-duration: $--transition-time;
		transition-timing-function: cubic-bezier();
		transition-property: all;
        color: $--colour-primary-300;
		&:hover {
			color: $--colour-primary-600;
		}
	}

	section {
		width: 100%;
		height: 100vh;
	}
	.palette {
		display: flex;
		min-height: 100%;
	}
	.colour {
		width: 20%;
		min-height: 100%;
		transition-duration: $--transition-time;
		transition-timing-function: cubic-bezier();
		transition-property: all;
		position: relative;
		background: attr(color data-text);
	}
	.colour::after {
		position: absolute;
		content: attr(data-text);
		border-radius: $--size-1;
		top: 50%;
		left: 50%;
		font-size: $--fontsize-1;
		transform: translate(-50%, -50%);
		text-transform: uppercase;
		display: flex;
		transition-duration: $--transition-time;
		transition-timing-function: cubic-bezier();
		transition-property: all;
		align-items: center;
		color: $--colour-primary-000;
		justify-content: center;
		box-shadow: 0 2px 3px rgba(black, 0.5);
		border: 2px solid $--colour-primary-300;
		background-color: rgba(white, 0.25);
		padding: $--size-1 $--size-1;
	}
</style>
