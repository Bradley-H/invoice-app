<script lang="ts">
    // STORES //
    import { globalStore } from "../../store/globalStore";
    // SVELTE IMPORTS //
    import { onMount } from "svelte";
    // SCSS DEFINITIONS //
    import "../../scss/styles.scss";
    // VARIABLES //
    let icon = "moon";
    // FUNCTIONS //
    function themeSwitch() {
        if ($globalStore.theme === "Dark") {
            $globalStore.theme = "Light";
            icon = "sun";
        } else {
            $globalStore.theme = "Dark";
            icon = "moon";
        }
        // SAVE THEME TO LOCAL STORAGE //
        localStorage.setItem("theme", $globalStore.theme);
    }
    onMount(() => {
        // IF LOCALSTORAGE HAS A THEME SET, SET THE STORE TO THAT THEME //
        if (localStorage.getItem("theme") !== null) {
            $globalStore.theme = localStorage.getItem("theme");
        }
    });
</script>

<nav>
    <a on:click={() =>
            ($globalStore.modalStatus = null
                ? ""
                : ($globalStore.modalStatus = null))}
        href="/"><i class="fas fa-home" /></a>
        
    <div class="settings">
        <div class="themeSwitcher">
            <i on:click={themeSwitch} class="fas fa-{icon}" />
        </div>
        <div class="avatar">
            <i class="fas fa-user-circle" />
        </div>
    </div>
</nav>

<style lang="scss">
    @import "../../scss/util/index.scss";

    nav {
        display: flex;
        height: $navHeight;
        @extend %fullWidth;
        background-color: $colorDarker;
        z-index: 5;
        @include laptop {
            flex-direction: column;
            height: 100%;
            width: $navWidth;
            position: fixed;
            left: 0;
            top: 0;
            border-top-right-radius: toRem(15);
        }
        @include large{
            width: $navWidthLarge;
        } 
        .settings {
            @include centered;
            flex-direction: row;
            color: white;
            @extend %fullHeight;
            font-size: toRem(28);
            margin: 0 0 0 auto;
            @include laptop {
                flex-direction: column;
                width: $navWidth;
                height: 100%;
                margin: auto 0 0 0;
            }
            @include large{
                    width: $navWidthLarge;
                }
            i {
                cursor: pointer;
                @include centered;
                @extend %fullHeight;
                @extend %fullWidth;
            }
            .themeSwitcher {
                border-right: toRem(2) solid rgba($color: grey, $alpha: 0.6);
                @extend %fullHeight;
                padding: 0 toRem(25) 0 toRem(25);
                @include laptop {
                    border-bottom: toRem(2) solid rgba($color: grey, $alpha: 0.6);
                    border-right: none;
                    width: $navWidth;
                    padding: 0 0 toRem(33) 0;
                    margin-top: auto;
                    height: 0;
                }
                @include large{
                    width: $navWidthLarge;
                }
            }
            .avatar {
                padding: 0 toRem(25);
                @include laptop {
                    padding: toRem(20) 0 toRem(15) 0;
                }
            }
        }
    }

    a {
        @include centered;
        background-color: $colorLight;
        color: white;
        width: $navWidth;
        height: $navHeight;
        font-size: toRem(25);
        transition: transform 0.4s ease-in-out;
        border-top-right-radius: toRem(15);
        &:hover {
            transform: scale(1.1);
        }
            @include large{
                width: $navWidthLarge;
                height: toRem(140);
                font-size: toRem(35);
            }
        }
</style>
