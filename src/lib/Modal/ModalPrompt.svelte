<script lang="ts">
    // COMPONENTS //
        import InnerCard from '../Card/InnerCard.svelte';
        import Text from '../Text/Text.svelte';
        import Button from '../Button/Button.svelte'
        // CREATE EVENT DISPATCHER //
        import {createEventDispatcher} from 'svelte';
        const dispatch = createEventDispatcher();
        // PROPS //
        export let text: string = "";
        
        // SVELTE IMPORTS //
        import {scale, fade} from 'svelte/transition'

        // FUNCTIONS // 
        function dispatchPrompt(status){
            dispatch(status, false);  // dispatch prompt event
        }
        // SCSS DEFINITIONS  //
            import "../../scss/styles.scss"; 
</script>


<style lang="scss">
    @import "../../scss/util/index";
    // prompt is centered //
    .prompt {
        @include centered;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @extend %fullWidth;
        max-width: toRem(600);
        z-index: 5;
        padding: toRem(25);
        line-height: 2;
        text-align: center;
        @include laptop{
            max-width: clamp(toRem(500), 25vw, toRem(1000));
            max-height: clamp(toRem(300), 15vh, toRem(500));
        }
    }

    .overlay{
        position: fixed;
        inset: 0;
        @extend %fullWidth;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 4;
    }

    .btns{
        display: flex;
        justify-content: space-around;
        margin-top: toRem(20);
        gap: 10px;
    }
</style>

<div class="prompt" transition:scale={{duration: 400}}>
    <InnerCard modal>
       <Text size="h3" {text}>
              <slot/>
        </Text>
       <div class="btns">
           <Button type="primary" rounded size="large" icon="check" text="Yes" on:click={() => dispatchPrompt("accept")}/>
           <Button type="danger" rounded size="large" icon="times" text="No" on:click={() => dispatchPrompt("decline")}/>
       </div>
    </InnerCard>
</div>

<div class="overlay" in:fade={{duration: 400}} out:fade={{duration: 200}}></div>