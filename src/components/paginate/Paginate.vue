<template>
    <div class="navigation">
        
        <slot name="botao">
        
     </slot>
    </div>
</template>

<script>


export default {
    data: function () {
        return{
            totalPages: 5,
            currentPage: 1
        }
   
    },
 methods:{
    Changepage: function (event) {
       this.currentPage = event   
    }
 }
}
</script>

<style>
    .navigation{
         display: flex;
         overflow-x: scroll;
         width: 500px;
    }
    .navigation button {
        color: var(--var-background-nav);
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        font: 500 1rem 'Abel', sans-serif;
        background: none;
        border: none;
        outline:none;
        cursor: pointer;  
    }
    .active{
        padding: 0rem !important;
        margin: 0%;
        border: solid 2px var(--var-background-nav) !important;
        border-radius: 50%;
        background: var(--var-background-nav) !important;
        display: flex;  
        justify-content: center;  
        margin-bottom: 0.2rem;
    }
    .active span{
        width: 20px;
        border-radius: 50%;
        padding: 8px 8px;
        border: solid 3px var(--var-title-color);
        color: var(--var-title-color);
        font: 500 1.2rem 'Abel', sans-serif;
    }
     /* Hide scrollbar for Chrome, Safari and Opera */
     .navigation::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .navigation {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }
</style>
