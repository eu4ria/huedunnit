<script>
	export let text;
</script>

<h2>{text}</h2>

<style lang="scss">
	h2 {
		position: absolute;
		top: $--size-5;
		color: $--colour-primary-400;

		letter-spacing: 3px;
		z-index: 10000;
		padding: $--size-5;
		max-width: 30ch;
		text-transform: capitalize;
		font-size: $--fontsize-4;

		position: absolute;
		left: 50%;
		transform: translate(-50%);
	}
</style>
