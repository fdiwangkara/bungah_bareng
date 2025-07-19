<script>
    import { onMount, onDestroy } from 'svelte';
    let currentSlide = 0;
    let previousSlide = 0;
    let interval;
    let isManual = false;
    let isDesktop = true;

    let xStart = 0;
    let xEnd = 0;
    let manualTimeout;

    const slides = [
        {
            image: '/assets/images/nyadran.png',
            title: 'Nyadran',
            description: '9 Juni 2025',
            link: '/detail/nyadran'
        },
        {
            image: '/assets/images/tayub.png',
            title: 'Tayub',
            description: '9 Juni 2025',
            link: '/detail/tayub'
        }
    ];

    function scheduleAutoSlide() {
        clearInterval(interval);
        interval = setInterval(() => {
            if (!isManual) {
                previousSlide = currentSlide;
                currentSlide = (currentSlide + 1) % slides.length;
            }
        }, 5000);
    }

    function nextSlide(manual = false) {
        previousSlide = currentSlide;
        currentSlide = (currentSlide + 1) % slides.length;
        handleManual(manual);
    }

    function prevSlide(manual = false) {
        previousSlide = currentSlide;
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        handleManual(manual);
    }

    function handleManual(manual) {
        if (manual) {
            isManual = true;
            clearInterval(interval);
            clearTimeout(manualTimeout);
            manualTimeout = setTimeout(() => {
                isManual = false;
                scheduleAutoSlide();
            }, 5000);
        }
    }

    function handleResize() {
        isDesktop = window.innerWidth > 1024;
    }

    function handleTouchStart(e) {
        xStart = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
        xEnd = e.changedTouches[0].clientX;
        if (xEnd - xStart > 50) {
            prevSlide(true);
        } else if (xStart - xEnd > 50) {
            nextSlide(true);
        }
    }

    onMount(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        scheduleAutoSlide();

        return () => {
            clearInterval(interval);
            clearTimeout(manualTimeout);
            window.removeEventListener('resize', handleResize);
        };
    });

    onDestroy(() => {
        clearInterval(interval);
        clearTimeout(manualTimeout);
    });
</script>

<section
        id="acara"
        class="relative w-full h-screen overflow-hidden"
        on:touchstart={handleTouchStart}
        on:touchend={handleTouchEnd}
>
    {#if !isManual}
        {#each slides as slide, index}
            <div
                    class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style="background-image: url({slide.image}); opacity: {index === currentSlide ? 1 : 0}; background-size: cover; background-position: center;"
            >
                <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%);"></div>

                {#if index === currentSlide}
                    <div class="absolute bottom-[50px] left-[25px] z-10 max-w-md md:bottom-[50px] md:left-[50px] lg:bottom-[100px] lg:left-[100px]">
                        <h2 class="text-6xl font-montserrat font-bold text-[#FDF9EC] mb-2">{slide.title}</h2>
                        <p class="text-xl font-montserrat font-semibold text-[#FDF9EC] mb-4 md:text-2xl">{slide.description}</p>
                        <a href={slide.link} class="detail-button">LIHAT DETAIL</a>
                    </div>
                {/if}
            </div>
        {/each}
    {:else}
        <div class="absolute inset-0 flex transition-transform duration-700" style="transform: translateX(-{currentSlide * 100}%);">
            {#each slides as slide}
                <div class="min-w-full h-screen bg-cover bg-center relative" style="background-image: url({slide.image});">
                    <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%);"></div>
                    <div class="absolute bottom-[50px] left-[25px] z-10 max-w-md md:bottom-[50px] md:left-[50px] lg:bottom-[100px] lg:left-[100px]">
                        <h2 class="text-6xl font-montserrat font-bold text-[#FDF9EC] mb-2">{slide.title}</h2>
                        <p class="text-xl font-montserrat font-semibold text-[#FDF9EC] mb-4 md:text-2xl">{slide.description}</p>
                        <a href={slide.link} class="detail-button">LIHAT DETAIL</a>
                    </div>
                </div>
            {/each}
        </div>
    {/if}

    {#if isDesktop}
        <div class="absolute inset-y-0 left-0 flex items-center px-4 z-20">
            <button on:click={() => prevSlide(true)} class="p-2">
                <img src="/assets/icons/left_button.svg" alt="Previous" class="h-10 w-10" />
            </button>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center px-4 z-20">
            <button on:click={() => nextSlide(true)} class="p-2">
                <img src="/assets/icons/right_button.svg" alt="Next" class="h-10 w-10" />
            </button>
        </div>
    {/if}

    <style>
        .detail-button {
            padding: 0.5rem 1.5rem;
            font-weight: 600;
            border: 2px solid transparent;
            border-image: linear-gradient(to right, #F08519, #EC1C24) 1;
            background: transparent;
            background-image: linear-gradient(to right, #F08519, #EC1C24);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            position: relative;
            z-index: 10;
            display: inline-block;
        }
    </style>
</section>
