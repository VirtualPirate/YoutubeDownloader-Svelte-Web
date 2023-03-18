<script lang="ts">

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

    function bytesToMegabytes(bytes: string) {
        const mb = (parseInt(bytes) / (1024*1024)).toFixed(1);
        return mb;
    }


    export let videos: Array<Video>;
    $: videoWithAudio = videos.filter((vid) => vid.hasAudio);

</script>

<div class="video-list">

    <div class="video-list-heading">VIDEOS</div>

    <div class="video-list-items">
        { #each videoWithAudio as {height, width, fps, video_format, contentLength, url } }
            <a href={url} target="_blank">
                <div class="list-item">
                    <span class="item-info">{width} x {height} ({video_format}, {fps}fps)</span>
                    <span class="item-size">{bytesToMegabytes(contentLength)}mb</span>
                    <img src="/download_button.svg" alt="This is the download button">
                </div>
            </a>
        { /each }
    </div>
</div>

<style>

    .video-list {
        width: 100%;
    }
    .video-list-heading {
        background-color: #00599A;
        color: white;
        font-weight: bold;
        padding: .2rem 1rem;
    }

    a {
        text-decoration: none;
        color: white;
        all: unset;
    }

    .list-item {
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        cursor: pointer;
        border-bottom: .5px solid #858585;
    }

    @media (max-width: 600px) {
        .list-item {
            padding: 1rem 1rem;
            font-size: 1rem;
        }

        .item-info {
            font-weight: 300;
        }
    }


</style>