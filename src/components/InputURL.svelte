<script lang="ts">
    import { VideoInfo } from "../stores/VideoInfo.store";
    import { fetchStatus } from "../stores/fetchStatus.store";

    let input_value  = ""

    function getYoutubeVideoId(link: string) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = link.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;

    }

    async function fetchYoutubeInfo() {
        const id = getYoutubeVideoId(input_value)
        const data = await fetch(`https://youtube-download.cyclic.app/youtube-video/${id}`)
                        .then(response => response.json())

        return data
    }

    async function storeYoutubeInfo() {
        fetchStatus.set("loading")
        try{
            VideoInfo.set(await fetchYoutubeInfo())
        } 
        catch (err) {
            fetchStatus.set("failed")
        }
        fetchStatus.set("success")
    }

</script>

<div>
    <form>
        <input bind:value={input_value} type="text" id="input" placeholder="Paste the youtube URL">
        <button on:click|preventDefault={storeYoutubeInfo}>
            <img src="/search-ico.svg" alt="">
        </button>
    </form>
</div>

<style>
    form {
        padding: 2rem;

        display: flex;
        align-items: center;
        gap: .2rem;

        font-family: Poppins;

        justify-content: center;

    }

    input {
        font-family: inherit;
        background-color: #222;
        color: white;

        width: max(80%, 35vw);
        height: min(30px, 3vw);
        outline: none;
        border: none;

        padding: 2.5rem 2rem;
        font-size: 1rem;

        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    button {
        /* width: max(250px, 35vw); */
        height: min(30px, 3vw);
        padding: 2.5rem 2rem;

        outline: none;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;

        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;

        background-color: #222;

        cursor: pointer
    }

    button:active {
        background-color: #333;
    }

    @media(max-width: 600px) {
        form {
            padding: 2rem 0;
        }

        input {
            padding: 2rem 1rem;
            /* font-size: .8rem; */
        }

        button {
            padding: 2rem 1rem;
        }
    }
    
</style>