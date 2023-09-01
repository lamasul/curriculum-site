<script lang="ts">
	import Tool from '$lib/components/organisms/Tools.svelte';
    import type { Tools } from '$lib/utils/types';

	export let data: {
        tools: Tools[];
	};

	let { tools } = data;
</script>

<svelte:head>
  <title>GenAI Lab | Tools</title>
</svelte:head>

<div class="container">
    <Tool {tools} />
</div>
