<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import type { BlogPost } from '$lib/utils/types';

	export let data: {
		posts: BlogPost[];
	};

	let { posts } = data;
</script>

<svelte:head>
  <title>GenAI Lab | Home</title>
</svelte:head>

<div class="container">
	<Hero />
	<About />
	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
</div>
