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
        color: #116193;
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
        border: solid 2px #116193 !important;
        border-radius: 50%;
        background: #116193 !important;
        display: flex;  
        justify-content: center;  
        margin-bottom: 0.2rem;
    }
    .active span{
        border-radius: 50%;
        padding: 0rem 0.7rem;
        border: solid 3px #01dfdf;
        color: #01dfdf;
        font: 500 1.7rem 'Abel', sans-serif;
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
