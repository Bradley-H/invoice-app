<script lang="ts">
    export let href:string = ""
    export let text:string = ""
    export let type:string = "primary";
    export let icon:string = "";
    export let size:string = ""
    export let fluid:boolean = false;
    export let disabled: boolean = false;
    export let rounded: Boolean = false
</script>


<style lang="scss">
    @import "../../scss/util/index";

    a,button{
        @include centered;
        padding: .75rem;
        font-size: toRem(15);
        height: 3.5rem;
        cursor: pointer;
        font-weight: bold;
        @include tablet{
            font-size: toRem(16);
            min-width: 4rem;
        }
        @include large{
            font-size: toRem(20);
            min-width: 4.5rem;
            height: 4.3rem;
        }
        @include fourk{
            font-size: toRem(25);
            width: 13rem;
            height: 5rem;
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
            width: 100% !important;
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
            height: 3.5rem;
            width: 100%;
            @include tablet{
                width:8rem;
            }
            @include desktop{
                width: 10rem;
            }
            @include large{
                width: 12rem;
            }
            @include fourk{
                width: 13rem;

            }
        }
        &.medium{
            min-width: 3rem;
            max-width: 10rem;
            height: 3rem;
        }
        &.large{
            width: 11.5rem;
            height: 4.3rem;
        }
    }

    button[disabled]{
            opacity: .5;
            cursor: not-allowed;
        }
</style>


{#if !href}
    <button class:rounded={rounded} {disabled} on:click|preventDefault class:fluid={fluid} class="{type} {size}"><i class="fas fa-{icon}"></i>{text}</button>
{:else}
    <a on:click|preventDefault class="{type}" {href}><i class="fas fa-{icon}"></i>{text}</a>
{/if}