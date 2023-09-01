<script>
	import Image from '../atoms/Image.svelte';
</script>

<section id="about">
	<div class="info">
		<h3>
			Welcome to your mini learning hub for Generative AI!
		</h3>
		<p>
			Explore the future of innovation through bite-sized lessons, demystifying complex concepts. Ignite your understanding and harness the power of AI-driven creativity!
		</p>
	</div>
	<div class="image">
		<img src="/images/welcome.gif" alt="welcome.gif">
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 600px 500px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;
		padding-top: 100px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			h3 {
				@include for-phone-only {
					text-align: center;
				}
			}

			p {
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}
		img {
			width: 500px;
			border-radius: 15px;
    		overflow: hidden;
    		perspective: 1px;
			box-shadow: 8px -8px #1a2538;
		}
	}
</style>
