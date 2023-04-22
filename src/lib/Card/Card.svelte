<script lang="ts">
    // STORE //
    import { globalStore } from "../../store/globalStore";
    // COMPONENTS //
    // PROPS //
    export let inv: boolean = false;
    export let id: string = "";
    export let modal: boolean = false;
    export let round: boolean = false;
</script>

<style lang="scss">
    @import "../../scss/util/index";
    div,
    a {
        @extend %flex;
        position: relative;
        @extend %fullWidth;
        padding: .6rem;
        margin-top: .5rem;
        &.Dark {
            background-color: lighten($color: $bgColorDark, $amount: 9);
        }
        &.Light {
            background-color: darken($color: $bgColorLight, $amount: 11);
        }
        &.inv {
           @extend %flex;
           @extend %fullWidth;
           border-radius: 12px;
           margin: .25rem 0;
           padding: toRem(12);
           @include desktop{
            height: toRem(99)
           }
           @include large{
            height: toRem(150)
           }
        }
        &.modal {
            @extend %flexCol;
            height: 100%;
            @extend %fullWidth;
            z-index: 2;
            overflow: auto;
            padding: 1.5rem;
            margin: 0;
            &.Dark {
                background-color: lighten($color: $bgColorDark, $amount: 1);
            }
            &.Light {
                background-color: darken($color: $bgColorLight, $amount: 15);
            }
        }
    }

    .round{
        border-radius: toRem(8);
    }
</style>



{#if !inv}
    <div class:round={round} class:modal class={$globalStore.theme}>
        <slot />
    </div>
{:else}
    <a href="/{id}" class:inv class={$globalStore.theme}>
        <slot />
    </a>
{/if}
