<script>
    import {onMount, onDestroy} from 'svelte';
    import {goto} from '$app/navigation';

    let showContent = false;
    let screenWidth = 0;
    let leftElementSrc = '';
    let rightElementSrc = '';

    function updateAssets(width) {
        if (width < 768) {
            leftElementSrc = '/assets/images/mobile_element_L.svg';
            rightElementSrc = '/assets/images/mobile_element_R.svg';
        } else if (width < 1025) {
            leftElementSrc = '/assets/images/ipad_element_L.svg';
            rightElementSrc = '/assets/images/ipad_element_R.svg';
        } else {
            leftElementSrc = '/assets/images/desktop_element_L.svg';
            rightElementSrc = '/assets/images/desktop_element_R.svg';
        }
    }

    function handleResize() {
        screenWidth = window.innerWidth;
        updateAssets(screenWidth);
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
            screenWidth = window.innerWidth;
            updateAssets(screenWidth);
            window.addEventListener('resize', handleResize);

            setTimeout(() => {
                showContent = true;
            }, 200);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize);
        }
    });

    function goHome() {
        goto('/');
    }
</script>

<div class="relative w-full h-screen bg-bg overflow-hidden flex items-center justify-center flex-col py-6">
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
    <h1
            class="font-bold font-primary mb-4 transition-all duration-700 ease-out
	text-4xl"
            class:opacity-100={showContent}
            class:translate-y-0={showContent}
            class:opacity-0={!showContent}
            class:-translate-y-4={!showContent}
    >
        404
    </h1>

    <p
            class="text-xl font-primary text-center mt-6 transition-all duration-700 ease-out"
            class:opacity-100={showContent}
            class:translate-y-0={showContent}
            class:opacity-0={!showContent}
            class:-translate-y-4={!showContent}
    >
        Halaman tidak ditemukan
    </p>
</div>
