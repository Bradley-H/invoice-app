<script lang="ts">
    // PROPS //
    export let id: string = ""
    export let paymentDue: string = "";
    export let total: number = 0;
    export let clientName: string = "";
    export let status: string = "";
// COMPONENTS //
    import Card from "$lib/Card/Card.svelte";
    import Text from '$lib/Text/Text.svelte';
    import Tag from '$lib/Invoice/Tag.svelte';
// FUNCTIONS //
import {convertDate, numberWithCommas} from '../../store/functionStore'
// SCSS FILES //
    import "../../scss/styles.scss";
</script>


<style lang="scss">
    @import "../../scss/util/index";
    
    .container-invoice{
        @extend %grid;
        grid-template-columns:1fr .3fr;
        @extend %fullWidth;
        @include laptop{
            grid-template-columns:2fr 1fr;
        }
            div{
            @extend %flexCol;
            justify-content: end;
            @include tablet{
                flex-direction: row;
                align-items: center;
                padding: 1rem;
            }
    }

    .dueInformation{
        @extend %grid;
        grid-template-columns: 1fr;
        padding: toRem(16) 0 toRem(16) toRem(8);
        gap: toRem(10);
        @include tablet{
            grid-template-columns: 1fr 80%;
            text-align: center;
            padding: 0;
        }
        @include desktop{
            display: flex;
            justify-content: space-around;
        }
        @include large{
            width: unset;
            place-items: center;
            margin-right: toRem(25)
        }
        div{
            @extend %flexCol;
            justify-content: space-around;
            gap: toRem(8);
            @include tablet{
                display: grid;
                place-items: center;
                margin: 0;
                grid-template-columns: 1fr 1fr;
            }
            @include laptop{
                grid-template-columns: 2fr 1fr;
                align-items: center;
            }
            @include desktop{
                display: flex;
                flex-direction: column;
                gap: toRem(10);
                width: toRem(200)
            }
            @include large{
                width: max-content;
                text-align: center;
                @include centered;
            }
        }
    }

    .paymentInformation{
        @extend %grid;
        grid-template-columns: 1fr;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: toRem(8);
        width: 95%;
        margin-right: toRem(-16);
        @include tablet{
            gap: toRem(4);
        }
        @include laptop{
            display: flex;
            flex-direction: column;
            gap: toRem(8);
        }
        @include desktop{
            padding: 0 toRem(8) 0 0;
            width: 100%;
            gap: toRem(10);
        }
    }
    }
    
</style>

<Card inv {id}>
    <div class="container-invoice">
        <div class="dueInformation">
            <Text size="h3" text="#{id}"/>
            <div>
                <Text size="p" text="Due: {convertDate(paymentDue, 0)}"/>
                <Text size="h3" text="${numberWithCommas(total.toFixed(2))}"/>
            </div>
        </div>
    <div class="paymentInformation">
        <Text size="p" text="{clientName}"/>
        <Tag {status}/>
    </div>
</div>
</Card>