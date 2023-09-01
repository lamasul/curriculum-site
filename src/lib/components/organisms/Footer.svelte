<script>
	import FooterWave from '$lib/icons/footer-wave.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	import RssLink from '$lib/components/atoms/RssLink.svelte';
</script>

<footer>
	<div class="wave">
		<FooterWave />
	</div>
	<div class="content">
		<div class="copyright">
			<img src="images/About/media_lab.png" alt="MIT Media Lab">
			© 2023 Copyright MIT
		</div>
		<div class="credits">
			Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer"
				>SvelteKit</a
			>.
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		height: 340px;
		width: 100%;
		background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		display: grid;
		grid-template-rows: 120px 1fr;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 15px;
			font-weight: 600;
			text-align: center;
			padding-bottom: 5px;

			img{
				height: 85px;
			}

			.credits {
				font-weight: 400;
				font-size: 90%;
				color: var(--color--text-shade);
			}
		}

		a {
			&:hover {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
