<script lang="ts">
  import InputUrl from "./components/InputURL.svelte";
  import LoadingAnimation from "./components/LoadingAnimation.svelte";
  import Navigation from "./components/Navigation.svelte";
  import YoutubeVideoCard from "./components/DownloadCard/YoutubeVideoCard.svelte";

  import { VideoInfo } from "./stores/VideoInfo.store";
  import type { YoutubeInfo } from "./stores/VideoInfo.store";

  let videoStoreValue: YoutubeInfo | null = null;
  VideoInfo.subscribe(value => videoStoreValue = value)
</script>

<main>
  <Navigation />
  <InputUrl />

  {#if videoStoreValue == null}
    <!-- <LoadingAnimation /> -->
    <h2 style="text-align: center;"> ENTER A YOUTUBE VIDEO LINK </h2>
  {:else}
    <YoutubeVideoCard info={videoStoreValue} />
  {/if}
</main>

<style global>

</style> 