<script lang="ts">
	import type { Tools } from '$lib/utils/types';
	import ToolCard from '$lib/components/molecules/ToolCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	export let tools: Tools[];
</script>

<ContentSection
	id="tools"
	title="Tools"
	description="Interactive learning using generative AI tools!"
>
	<div class="tools-container">
		<div class="three-group-grid">
			{#each tools as tool}
				<ToolCard
					name={tool.name}
					description={tool.description}
					image={tool.image}
					link={tool.link}
					tags={tool.tags}
				/>
			{/each}
		</div>
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.tools-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}

	.three-group-grid {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-gap: 20px;

		@media (max-width: 1085px) {
			grid-template-columns: 1fr 1fr;
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
		}

		// Select every 3 elements, starting from position 2
		// And make it take up 2 rows
		@media (min-width: 1086px) {
			> :global(:nth-child(3n + 2)) {
				grid-row: span 2;
			}
		}

		// Select every 3 elements, starting from position 1
		// And make it take up 2 columns
		> :global(:nth-child(3n + 1)) {
			@media (max-width: 1085px) {
				grid-column: span 2;
			}

			@include for-tablet-portrait-down {
				grid-template-columns: 1fr;
				grid-column: unset;
			}
		}
	}
</style>