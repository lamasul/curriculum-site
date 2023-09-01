<script>
	import Image from '../atoms/Image.svelte';
</script>

<section id="section">
	<div class="info">
		<h2 id="h2">
			What is GenAI Lab?
		</h2>
		<p>
			Everyone is impacted by AI in their daily lives and in their workplaces. It is critical for everyone to have a fundamental knowledge of AI and to understand AI&#39;s potential for good and harm. The GenAI Lab will jumpstart your readiness for AI and give you the tools you need to prepare for the AI-enabled world. <br><br>
			The GenAI Lab, designed by MIT educators and experienced facilitators, features hands-on and computer-based activities on AI concepts, ethical issues in AI, creative expression using AI, and how AI relates to your future. You will experience training and using machine learning to make predictions, investigate bias in machine learning applications, use generative adversarial networks to create novel works of art, and learn to recognize the AI you interact with daily and in the world around you.
		</p>
	</div>
	
</section>
<hr>
<section id="section">
	<div class="info">
		<h2>
			Project and the Team
		</h2>
		<p>
			This curriculum is currently being piloted through NSF EAGER Grant 2022502. This is a joint venture between the <b>Personal Robots Group</b> at the MIT Media Lab, <b>MIT STEP Lab</b>, and <b>Boston College</b>. <br>
		</p>
	</div>
	
</section>
<hr>
<section id="section">
	<div class="info">
		<h2>
			People
		</h2>
	</div>
</section>
<section id="grid">
	<div>
		test2
	</div>
	<div>
		test3
	</div>
	<div>
		test2
	</div>
	<div>
		test3
	</div>
	<div>
		test2
	</div>
	<div>
		test3
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#section {
		position: relative;
		display: flex;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 60px;
		padding-top: 30px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			h2 {
				padding-top: 20px;
				padding-bottom: 10px;
				@include for-phone-only {
					text-align: center;
				}
			}
			
			#h2{
				padding-top: 100px;
			}

			p {
				padding-top: 10px;
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}
	}

	#grid{
		position: relative;
		display: grid;
		grid-template-columns: 300px 300px 300px 300px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}
	}
</style>
