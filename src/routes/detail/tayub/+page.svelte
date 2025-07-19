<script>
    import { goto } from '$app/navigation';

    function goBack() {
        history.length > 1 ? history.back() : goto('/');
    }
</script>

<section class="w-full min-h-screen bg-[#FDF9EC] relative overflow-hidden pt-12 px-4 pb-16">
    <button on:click={goBack} class="absolute top-6 left-6 z-20 flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#F08519" />
                    <stop offset="100%" stop-color="#EC1C24" />
                </linearGradient>
            </defs>
            <path d="M15 5L8 12L15 19" stroke="url(#gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="text-sm font-montserrat font-semibold bg-gradient-to-r from-[#F08519] to-[#EC1C24] text-transparent bg-clip-text">
			Kembali
		</span>
    </button>

    <div class="flex justify-center items-center mt-12 relative">
        <img src="/assets/icons/title_element_left.svg" alt="Left Decoration" class="w-32 md:w-40 lg:w-56 mr-4" />
        <h1 class="relative overflow-visible lg:text-6xl md:text-4xl text-2xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#F08519] to-[#EC1C24] z-10 text-center leading-[1.2] tracking-wide">
            TAYUB
        </h1>
        <img src="/assets/icons/title_element_right.svg" alt="Right Decoration" class="w-32 md:w-40 lg:w-56 ml-4" />
    </div>

    <p class="mt-8 max-w-4xl mx-auto text-center text-[#262626] text-[10px] md:text-sm lg:text-lg font-montserrat leading-relaxed">
        Seni Tayub adalah salah satu bentuk kesenian tradisional Jawa yang berasal dari Jawa Tengah, Indonesia. Tayub sendiri merupakan singkatan dari "tari" dan "yub" yang berarti "menghibur" atau "menari". Namun, dalam konteks yang lebih luas, Tayub dapat diartikan sebagai sebuah pertunjukan seni yang melibatkan tarian, musik, dan interaksi antara penari dan penonton.
    </p>

    <div class="mt-10 flex justify-center">
        <picture>
            <source srcset="/assets/images/galeri_tayub_mobile.png" media="(max-width: 767px)" />
            <source srcset="/assets/images/galeri_tayub_tablet.png" media="(max-width: 1024px)" />
            <img
                    src="/assets/images/galeri_tayub_desktop.png"
                    alt="Galeri Tayub"
                    class="w-full max-w-6xl rounded-xl shadow-md"
            />
        </picture>
    </div>
</section>
