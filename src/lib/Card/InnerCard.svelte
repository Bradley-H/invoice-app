<script lang="ts">
    import {globalStore} from '../../store/globalStore'
    export let modal = false;
</script>

<style lang="scss">
    @import "../../scss/util/index";
     div{
        display: block;
        border-top-left-radius: toRem(12);
        border-top-right-radius: toRem(12);
        border: toRem(2) solid black;
        padding: toRem(13);
        position: relative;
        width: 100%;
        max-width: toRem(1000);
        &.Dark{
            background-color: lighten($color: $bgColorDark, $amount: 15);
        }
        &.Light{
            background-color: darken($color: $bgColorLight, $amount: 10);
        }
        &.modal{
            border-radius: 0;
            &.Dark{
            background-color: lighten($color: $bgColorDark, $amount: 9);
        }
        &.Light{
            background-color: darken($color: $bgColorLight, $amount: 15);
        }
        }
    }
</style>

<div class={$globalStore.theme} class:modal={modal}>
    <slot />
</div>