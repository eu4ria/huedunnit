<script>
	export let text;
</script>

<h1>{text}</h1>

<style lang="scss">
	h1 {
		position: absolute;
		// top: $--size-1;
		// letter-spacing: 3px;
		top:0;
		color: $--colour-primary-300;

		z-index: 10000;
		padding: $--size-3 0;
		max-width: 30ch;
		text-transform: capitalize;
		font-size: $--fontsize-6;

		position: absolute;
		left: 50%;
		transform: translate(-50%);
	}
</style>
