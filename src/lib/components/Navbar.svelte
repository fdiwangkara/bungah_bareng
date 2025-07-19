<script>
    import { onMount } from 'svelte';

    export let showContent = true;
    let isMenuOpen = false;
    let isAnimating = false;
    let screenWidth = 0;

    function handleNavigate(id) {
        closeMenu();
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    }

    function closeMenu() {
        isAnimating = true;
        setTimeout(() => {
            isMenuOpen = false;
            isAnimating = false;
        }, 500);
    }

    onMount(() => {
        screenWidth = window.innerWidth;

        const handleResize = () => {
            screenWidth = window.innerWidth;
            if (screenWidth >= 1025) {
                isMenuOpen = false;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
</script>

<nav class="fixed top-2 w-full px-6 md:px-12 py-4 z-50 flex items-center justify-center bg-transparent pointer-events-auto">
    <img
            src="/nav_logo.svg"
            alt="Logo"
            class="absolute left-6 md:left-12 h-8 md:h-12 transition-opacity duration-700 ease-out pointer-events-auto"
            class:opacity-100={showContent}
            class:opacity-0={!showContent}
    />

    {#if screenWidth >= 1025}
        <ul
                class="flex gap-8 font-[Montserrat] font-bold text-sm md:text-base transition-opacity duration-700 ease-out mt-1 pointer-events-auto"
                class:opacity-100={showContent}
                class:opacity-0={!showContent}
        >
            <li>
                <button
                        type="button"
                        on:click={() => handleNavigate('acara')}
                        class="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#F08519] to-[#EC1C24] focus:outline-none"
                >
                    Acara
                </button>
            </li>
            <li>
                <button
                        type="button"
                        on:click={() => handleNavigate('galeri')}
                        class="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#F08519] to-[#EC1C24] focus:outline-none"
                >
                    Galeri
                </button>
            </li>
            <li>
                <button
                        type="button"
                        on:click={() => handleNavigate('berita')}
                        class="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#F08519] to-[#EC1C24] focus:outline-none"
                >
                    Berita
                </button>
            </li>
        </ul>
    {/if}

    {#if screenWidth < 1025}
        <button
                class="absolute right-6 md:right-12 z-50 pointer-events-auto"
                on:click={() => (isMenuOpen = true)}
        >
            <img src="/assets/icons/hamburger.svg" alt="Menu" class="h-6 w-6" />
        </button>
    {/if}

    <div
            class="fixed top-0 right-0 h-screen w-full bg-[#FDF9EC] z-[999] transition-transform duration-500"
            class:translate-x-0={isMenuOpen}
            class:translate-x-full={!isMenuOpen || isAnimating}
    >
        <div class="flex justify-end p-4">
            <button on:click={closeMenu}>
                <img src="/assets/icons/close.svg" alt="Close" class="h-6 w-6" />
            </button>
        </div>

        <ul class="flex flex-col items-start px-8 gap-6 mt-4 font-[Montserrat] font-bold text-lg text-[#EC1C24]">
            <li>
                <button on:click={() => handleNavigate('acara')} class="focus:outline-none">
                    Acara
                </button>
            </li>
            <li>
                <button on:click={() => handleNavigate('galeri')} class="focus:outline-none">
                    Galeri
                </button>
            </li>
            <li>
                <button on:click={() => handleNavigate('berita')} class="focus:outline-none">
                    Berita
                </button>
            </li>
        </ul>
    </div>

    <style>
        nav::after {
            position: absolute;
            content: '';
            top: 65px;
            left: 0;
            height: 1px;
            width: 100%;
            background: linear-gradient(
                    to right,
                    rgba(253, 139, 81, 0) 0%,
                    rgba(253, 139, 81, 1) 50%,
                    rgba(253, 139, 81, 0) 100%
            );
        }
    </style>
</nav>
