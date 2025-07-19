<script>
    export let showContent;
    export let logoSrc;
    export let leftElementSrc;
    export let rightElementSrc;
</script>

<section id="hero" class="relative w-full h-screen bg-bg overflow-hidden flex items-center justify-center flex-col">
    <img
            alt="Left Element"
            src={leftElementSrc}
            class="absolute left-0 bottom-0 transform transition-all duration-700 ease-out"
            class:translate-x-0={showContent}
            class:opacity-100={showContent}
            class:-translate-x-32={!showContent}
            class:opacity-0={!showContent}
    />
    <img
            alt="Right Element"
            src={rightElementSrc}
            class="absolute right-0 bottom-0 transform transition-all duration-700 ease-out"
            class:translate-x-0={showContent}
            class:opacity-100={showContent}
            class:translate-x-32={!showContent}
            class:opacity-0={!showContent}
    />
    <img
            alt="Logo"
            src={logoSrc}
            class="w-auto mb-6 transition-opacity duration-700 ease-out"
            class:opacity-100={showContent}
            class:opacity-0={!showContent}
    />
    <p
            class="font-primary text-black text-xl md:text-4xl text-center px-4 transition-all duration-700 ease-out"
            class:opacity-100={showContent}
            class:translate-y-0={showContent}
            class:opacity-0={!showContent}
            class:-translate-y-4={!showContent}
    >
        Mbangun Desa Kanthi Rasa
    </p>
</section>
