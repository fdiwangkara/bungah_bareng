<script>
    import { onMount, onDestroy } from 'svelte';

    import Navbar from '$lib/components/Navbar.svelte';
    import HeroSection from '$lib/components/sections/HeroSection.svelte';
    import AcaraSection from '$lib/components/sections/AcaraSection.svelte';
    import BeritaSection from '$lib/components/sections/BeritaSection.svelte';
    import GaleriSection from '$lib/components/sections/GaleriSection.svelte';
    import VideoSection from "$lib/components/sections/VideoSection.svelte";

    let showContent = false;
    let logoSrc = '';
    let leftElementSrc = '';
    let rightElementSrc = '';

    function updateAssets(width) {
        const isMobile = width < 768;
        const isTablet = width < 1025;

        logoSrc = isMobile
            ? '/assets/images/mobile_logo.svg'
            : isTablet
                ? '/assets/images/ipad_logo.svg'
                : '/assets/images/desktop_logo.svg';

        leftElementSrc = isMobile
            ? '/assets/images/mobile_element_L.svg'
            : isTablet
                ? '/assets/images/ipad_element_L.svg'
                : '/assets/images/desktop_element_L.svg';

        rightElementSrc = isMobile
            ? '/assets/images/mobile_element_R.svg'
            : isTablet
                ? '/assets/images/ipad_element_R.svg'
                : '/assets/images/desktop_element_R.svg';
    }

    function handleResize() {
        updateAssets(window.innerWidth);
    }

    onMount(() => {
        const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
        updateAssets(width);

        window.addEventListener('resize', handleResize);

        const timer = setTimeout(() => {
            showContent = true;
        }, 2000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize);
        }
    });
</script>

<Navbar {showContent} />

<HeroSection
        {showContent}
        {logoSrc}
        {leftElementSrc}
        {rightElementSrc}
/>

<AcaraSection />
<GaleriSection />
<BeritaSection />
<VideoSection />

