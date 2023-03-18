<script lang="ts">
  import InputUrl from "./components/InputURL.svelte";
  import LoadingAnimation from "./components/LoadingAnimation.svelte";
  import Navigation from "./components/Navigation.svelte";
  import YoutubeVideoCard from "./components/DownloadCard/YoutubeVideoCard.svelte";

  import { VideoInfo } from "./stores/VideoInfo.store";
  import type { YoutubeInfo } from "./stores/VideoInfo.store";

  import { fetchStatus } from "./stores/fetchStatus.store";
  import type {fetchStatusType} from "./stores/fetchStatus.store"

  let videoStoreValue: YoutubeInfo | null = null;
  let fetchStatus_: fetchStatusType = "stale";

  VideoInfo.subscribe(value => videoStoreValue = value)
  fetchStatus.subscribe(value => fetchStatus_ = value)
</script>

<main>
  <Navigation />
  <InputUrl />

  {#if fetchStatus_ === "loading"}
    <LoadingAnimation />
  {:else if fetchStatus_ === "stale"}
    <h2 style="text-align: center;"> ENTER A YOUTUBE VIDEO LINK </h2>
  {:else if fetchStatus_ === "success"}
    <YoutubeVideoCard info={videoStoreValue} />
  {:else if fetchStatus_ === "failed"}
  <h2 style="text-align: center;"> REQUEST FAILED, PLEASE TRY AGAIN </h2>

  {/if}
</main>

<style global>

</style> 