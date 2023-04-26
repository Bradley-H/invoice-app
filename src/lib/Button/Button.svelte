<script lang="ts">
    export let href:string = ""
    export let text:string = ""
    export let type:string = "primary";
    export let icon:string = "";
    export let size:string = ""
    export let fluid:boolean = false;
    export let disabled: boolean = false;
    export let rounded: Boolean = false
    export let fullHeight: boolean = false;
</script>


<style lang="scss">
    @import "../../scss/util/index";

    a,button{
        @include centered;
        padding: .75rem;
        font-size: toRem(15);
        font-weight: bold;
        height: 100%;
        width: 100%;
        cursor: pointer;
        @include tablet{
            font-size: toRem(16);
        }
        @include large{
            font-size: toRem(20);;
        }
        @include fourk{
            font-size: toRem(25);
        }
        &.primary{
            background-color: $colorLight;
        }
        &.secondary{
            background-color: lighten($colorDark, 36%);
            color: white
        }
        &.accent{
            background-color: $colorLightest;
        }
        &.danger{
            background-color: $colorDanger;
        }
        &.fluid{
            width: 100%;
        }
        &.fullHeight{
            height: 100% !important;
        }
        i{
            display: none;
            margin-right: .7rem;
            font-size: 1.1rem;
            @include tablet{
                display: inline-block;
                font-size: 1.5rem;
            }
            @include large{
                font-size: 2rem;
            }
            @include fourk{
                font-size: 2.3rem;
            }
        }
        &.rounded{
            border-radius: toRem(20);
        }
        &.small{
            width: clamp(2rem, 25vw, max-content);
            height: 100%;
        }
        &.medium{
            min-width: 3rem;
            max-width: 10rem;
            height: 3rem;
        }
        &.large{
            height: 5rem;
        }
    }

    button[disabled]{
            opacity: .5;
            cursor: not-allowed;
        }
</style>


{#if !href}
    <button class:rounded={rounded} {disabled} on:click|preventDefault class:fluid={fluid} class="{type} {size}" class:fullHeight={fullHeight}><i class="fas fa-{icon}"></i>{text}</button>
{:else}
    <a class:fullHeight={fullHeight} on:click|preventDefault class="{type}" {href}><i class="fas fa-{icon}"></i>{text}</a>
{/if}