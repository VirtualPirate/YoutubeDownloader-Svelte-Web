<script lang="ts">


</script>

<nav>
    <div class="nav-item">
        <img src="/youtube-logo.svg" alt="" class="nav-logo">
        <div class="nav-title">
        <span style="color: #FF6767"> YOUTUBE </span>
        <span> DOWNLOADER </span>
        </div>
    </div>
</nav>

<style>
    nav {
        width: 100%;
        background-color: #222222;
    }

    .nav-item {
        display: flex;
        align-items: center;

        margin: 0 4rem;
        gap: 2rem;

        padding: 1rem 0;
    }

    .nav-logo {
        width: 6rem;
        height: 6rem;
    }

    .nav-title {
        font-weight: bold;
        font-size: 2rem;
    }

    @media(max-width: 800px) {
        .nav-item {
            margin: 0 2rem;
            gap: 1rem;

            padding: 1rem 0;
        }
        .nav-logo {
            width: 4rem;
            height: 4rem;
        }
        .nav-title {
            font-size: 1.5rem;
        }
    }


</style>