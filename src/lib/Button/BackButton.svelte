<script lang="ts">
    import Text from "$lib/Text/Text.svelte";
    export let href: boolean = false;
</script>

{#if href}
    <a href="/"
        ><i class="fas fa-chevron-left" /><Text size="{innerWidth > 1880 ? "h2" : "h3"}" text="Go back" /></a
    >
{:else}
    <button on:click|preventDefault
        ><i class="fas fa-chevron-left" /><Text
            size={innerWidth > 1880 ? "h2" : "h3"}
            text="Go back"
        /></button
    >
{/if}

<style lang="scss">
    @import "../../scss/util/index.scss";
    a,
    button {
        @include centered;
        font-size: toRem(13);
        margin: 1.5rem 0;
        cursor: pointer;
        @include tablet {
            font-size: toRem(30);
        }
    }

    i {
        color: $colorLight;
        font-weight: bold;
        margin-right: 0.5rem;
        font-size: 1.4rem;
        @include desktop{
            font-size: 1.6rem;
        }
        @include large {
            font-size: 2rem;
            margin-right: 1rem;
        }
    }
</style>
