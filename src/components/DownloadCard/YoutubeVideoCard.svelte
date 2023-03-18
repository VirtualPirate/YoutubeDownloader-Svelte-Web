<script lang="ts">
import VideoDownloadList from "./VideoDownloadList.svelte";
import AudioDownloadList from "./AudioDownloadList.svelte";

interface YoutubeInfo {
  title: string
  description: string
  videoUrl: string
  videoId: string
  videoLength: string
  viewCount: string
  category: string
  publishDate: string
  channelName: string
  subscriberCount: number
  thumbnails: Thumbnail[]
  channelUrl: string
  videos: Video[]
  audios: Audio[]
  status: string
}

interface Thumbnail {
  url: string
  width: number
  height: number
}

interface Video {
  quality: string
  width: number
  height: number
  url: string
  contentLength?: string
  video_format: string
  hasAudio: boolean
  fps: number
}

interface Audio {
  quality: string
  url: string
  contentLength: string
  audio_format: string
}

export let info: YoutubeInfo;

function formatViews(num: number) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
}

</script>

<div class="video-card">
    <div class="video-info-wrapper">
        <img class="thumbnail" src={info.thumbnails[3].url} alt=""/>
        <div class="video-info">
            <div class="title">{info.title}</div>
            <a href={info.videoUrl}>
              <div class="url">{info.videoUrl}</div>
            </a>
            <div class="micro-details">
              <div>{info.channelName}</div>
              <div>{formatViews(parseInt(info.viewCount))}</div>
            </div>
        </div>
    </div>

    <VideoDownloadList videos={info.videos} />
    <AudioDownloadList audios={info.audios} />
</div>

<style>
  .video-card {
    padding: 3rem;
    width: fit-content;
    background-color: #222222;
    margin-left: auto;
    margin-right: auto;

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    gap: 2rem;
  }

  .video-info-wrapper {
    display: flex;
    gap: 3rem;
  }

  .thumbnail {
    width: 20rem;
  }

  .video-info {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .title {
    font-size: 1.5rem;

    text-overflow: ellipsis;
    /* white-space: nowrap; */
    overflow: hidden;

  }
  
  a {
    text-decoration: none;
  }

  .url {
    font-weight: 300;
    color: #37B7FF;
  }

  .micro-details {
    display: flex;
    gap: 2rem;
    font-weight: 200;


  }

  @media(max-width: 800px) {
    .video-card {
      padding: 2rem;
    }
    .thumbnail {
      width: 10rem;
    }
    .title {
      font-size: 1.3rem;
    }

    .url {
      font-size: .8rem;
    }
  }

  @media(max-width: 600px) {
    .video-info-wrapper {
      flex-direction: column;
      gap: 1rem;
    }
    .video-info {
      gap: 1rem;
    }
    .thumbnail {
      width: 100%;
    }
  }
  
</style>