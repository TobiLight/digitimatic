<script lang="ts">
  import "../../app.css";
  import "@fontsource-variable/inter";

</script>

<svelte:head>
  <title>Media Placement - Digitimatic</title>
  <meta name="description" content="Digitimatic is part of the 1% of PR agencies that can guarantee results.">
</svelte:head>

<main class="min-h-screen py-8 px-4 md:w-2/3 md:mx-auto">
    <slot />
</main>

<style lang="postcss">
  :global(body) {
    font-family: "Inter Variable", sans-serif;
  }
  
  
  main {
    font-family: 'Inter Variable', sans-serif;
    font-display: swap;
  }

</style>