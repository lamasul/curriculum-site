<script>
	import Image from '../atoms/Image.svelte';
</script>

<section id="section">
	<div class="info">
		<h2 id="h2">
			what does daniella want this to say
		</h2>
		<p>
			description of workshops?
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
			This curriculum is currently being piloted through blank. This is a joint venture between the <b>Personal Robots Group</b> at the MIT Media Lab, <b>MIT STEP Lab</b>, and <b>Boston College</b>. <br>
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
