<script lang="ts">
    interface Audio {
        quality: string
        url: string
        contentLength: string
        audio_format: string
    }

    function bytesToMegabytes(bytes: string) {
        const mb = (parseInt(bytes) / (1024*1024)).toFixed(1);
        return mb;
    }


    export let audios: Array<Audio>;

</script>

<div class="audio-list">

    <div class="audio-list-heading">AUDIOS</div>

    <div class="audio-list-items">
        { #each audios as {url, audio_format, contentLength} }
            <a href={url} target="_blank">
                <div class="list-item">
                    <span class="item-info">{audio_format}</span>
                    <span class="item-size">{bytesToMegabytes(contentLength)}mb</span>
                    <img src="/download_button.svg" alt="This is the download button">
                </div>
            </a>
        { /each }
    </div>
</div>

<style>

    .audio-list {
        width: 100%;
    }
    .audio-list-heading {
        background-color: #009A2B;
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