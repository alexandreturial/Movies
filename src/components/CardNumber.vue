<template>
        <p>
            <span>
                {{numero}}
            </span>
        </p>
</template>

<script>
export default {
    props:{
        numero: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p{
        margin: 0%;
        border: solid 2px #116193;
        border-radius: 50%;
        margin-top: -2rem;
        margin-left: 0.4rem;
        background: #116193;
        display: flex;  
        justify-content: center;  
        
    }
    p span{
        border-radius: 50%;
        padding: 0.8rem 0.8rem;
        border: solid 3px #01dfdf;
        color: #01dfdf;
        font: 500 1.2rem 'Abel', sans-serif;
    }
</style>
