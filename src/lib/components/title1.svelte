<script>
	export let text;
</script>

<h1>{text}</h1>

<style lang="scss">
	h1 {
		position: absolute;
		top: 2rem;
		letter-spacing: 3px;
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
