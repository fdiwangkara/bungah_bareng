<script>
    import "../app.css";
    import { onMount } from 'svelte';
    import Footer from "$lib/components/Footer.svelte";

    let isLoading = true;
    let slideUp = false;

    onMount(() => {
        setTimeout(() => {
            slideUp = true;
            setTimeout(() => {
                isLoading = false;
            }, 1000);
        }, 1500);
    });
</script>

{#if isLoading}
    <div class={`fixed inset-0 z-[9999] flex items-center justify-center bg-bg transition-transform duration-1000 ease-in-out ${slideUp ? '-translate-y-full' : 'translate-y-0'}`}>
        <img src="/desktop_header.svg" alt="Logo" class="h-[100px] w-auto animate-pulse" />
    </div>
{/if}

<slot />
<Footer />
