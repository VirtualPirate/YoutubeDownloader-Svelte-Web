import { writable } from "svelte/store";

export interface YoutubeInfo {
  title: string;
  description: string;
  videoUrl: string;
  videoId: string;
  videoLength: string;
  viewCount: string;
  category: string;
  publishDate: string;
  channelName: string;
  subscriberCount: number;
  thumbnails: Thumbnail[];
  channelUrl: string;
  videos: Video[];
  audios: Audio[];
  status: string;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Video {
  quality: string;
  width: number;
  height: number;
  url: string;
  contentLength?: string;
  video_format: string;
  hasAudio: boolean;
  fps: number;
}

export interface Audio {
  quality: string;
  url: string;
  contentLength: string;
  audio_format: string;
}

export const VideoInfo = writable<YoutubeInfo | null>();
