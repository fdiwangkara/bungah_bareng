<script>
    const beritaList = [
        {
            image: '/assets/images/gambar_berita_1.png',
            title: 'Acara Nyadran Tayub di Desa Ngandong, Camat Gantiwarno Ajak Lestarikan Budaya Lokal',
            source: 'gantiwarno.klaten.go.id',
            link: 'https://gantiwarno.klaten.go.id/acara-nyadran-tayub-di-desa-ngandong-camat-gantiwarno-ajak-lestarikan-budaya-lokal'
        },
        {
            image: '/assets/images/gambar_berita_2.png',
            title: 'Tayub Menari di Tengah Globalisasi: Desa Ngandong Klaten Bangun Desa dengan Rasa',
            source: 'IDPOST.ID',
            link: 'https://www.beritasatu.com/network/idpost/603450/tayub-menari-di-tengah-globalisasi-desa-ngandong-klaten-bangun-desa-dengan-rasa'
        },
        {
            image: '/assets/images/gambar_berita_3.png',
            title: 'Pentas Tayub Desa Ngandong Dihadiri Bupati Klaten',
            source: 'lintassolorayanews',
            link: 'https://www.lintassolorayanews.com/seni-budaya-dan-wisata/pentas-tayub-desa-ngandong-dihadiri-bupati-klaten/'
        }
    ];
</script>

<section id="berita" class="w-full h-auto bg-[#FDF9EC] px-4 py-16">
    <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-[#EE571D] font-montserrat font-bold text-4xl md:text-4xl lg:text-6xl mb-4">
            BERITA
        </h2>

        <div class="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
            {#each beritaList as berita}
                <a href={berita.link} class="min-w-[250px] max-w-sm flex-shrink-0 bg-transparent overflow-hidden hover:opacity-80 transition-opacity duration-200">
                    <img
                            src={berita.image}
                            alt={berita.title}
                            class="w-full h-48 object-cover rounded-xl"
                    />
                    <div class="pt-4">
                        <h3 class="font-semibold font-montserrat text-[#262626] text-base leading-snug line-clamp-2">
                            {berita.title}
                        </h3>
                        <p class="font-normal font-montserrat text-gray-400 text-sm mt-2">
                            {berita.source}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<style>
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
