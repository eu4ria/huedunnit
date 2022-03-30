<script>
	import { colours } from '$lib/../stores';
	import Title1 from '$lib/components/title1.svelte';
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
<section>
	<div class="palette">
		{#each palette as colour}
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
		gap: $--size-4;
		transform: translate(-50%);
	}
	button {
		width: 6rem;
		outline: none;
		border: none;
		background: none;
		font-size: $--size-8;
		cursor: pointer;
		transition-duration: $--transition-time;
		transition-timing-function: cubic-bezier();
		transition-property: all;
		&:hover {
			color: $--colour-primary-500;
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
		width: 10%;
		border-radius: $--size-2;
		padding: $--size-8;
		background-color: rgba(255, 255, 255, 0.25);
		top: 50%;
		left: 50%;
		font-size: $--fontsize-2;
		transform: translate(-50%, -50%);
		opacity: 0;
		text-transform: uppercase;
		display: flex;
		transition-duration: $--transition-time;
		transition-timing-function: cubic-bezier();
		transition-property: all;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
	}
	.colour:hover {
		width: 50%;
	}
	.colour:hover::after {
		opacity: 1;
	}
</style>
