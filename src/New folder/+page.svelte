<script lang="ts">
    //store//
    import { globalStore } from "../store/globalStore";
    import type { ActionData } from "$types";
    //variables//
    let active = true;
    //components //
    import Button from "$lib/Button/Button.svelte";
    import Text from "$lib/Text/Text.svelte";
    import FormField from "$lib/FormField/FormField.svelte";
    // function
    function toggleActive() {
        active = !active;
    }
    export let form: ActionData;
    
    $: console.log(form);
    
    
    import "../scss/styles.scss";
</script>

<main class="bgColor{$globalStore.theme}">
    <div class="form-container">
        <form class:active>
            <div class="front">
                <div class="header">
                    <Text size="h2" text="Login" />
                </div>
                <div class="form">
                    <FormField text="Username" id="user" />
                    <FormField text="Password" form="password" />
                </div>
            </div>
            <Button type="primary" rounded size="small" text="Login" />
        </form>
        <div class="text">
            <Text
                on:click={toggleActive}
                size="h4"
                text={`Are you not ${
                    !active ? "registered" : "logged In"
                }? If so, click here`}
            />
        </div>
    </div>
</main>

<style lang="scss">
    @import "../scss/util/index";

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100svh;

        .form-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: toRem(25);
            width: 100%;
            max-width: toRem(500);
            height: 100%;
            max-height: toRem(450);
            border-radius: toRem(10);
            padding: toRem(25);
            position: relative;
        }
        form {
            display: flex;
            flex-direction: column;
            background-color: $colorDark;
            padding: toRem(15) toRem(25);
            text-align: center;
            width: clamp(toRem(300), toRem(500), toRem(500));
            height: max-content;
            position: relative;
            backface-visibility: hidden;
            border-radius: toRem(10);
            perspective: 1000px;
            transform-style: preserve-3d;
            transition: all 0.5s ease-in-out;
            &.active {
                transform: rotateY(180deg);
            }

            .form {
                display: flex;
                flex-direction: column;
                gap: 25px;
                margin-bottom: 20px;
            }
        }

        .formBack {
            position: absolute;
            top: 3rem;
            left: 0;
            transform: translate(0, 0);
            transform-style: preserve-3d;
            transition: all 0.5s ease-in-out;
            width: 100%;
            &.active {
                transform: rotateY(180deg);
            }
        }

        .front,
        .back {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }
    }
</style>
