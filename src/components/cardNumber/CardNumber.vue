<template>
        <p>
            <span>
                {{numero *10}}%
            </span>
        </p>
</template>

<script>
export default {
    props:['numero']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
    p{
        margin: 0%;
        border: solid 2px var(--var-background-nav);
        border-radius: 50%;
        margin-top: -2rem;
        margin-left: 0.4rem;
        background: var(--var-background-nav);
        display: flex;  
        justify-content: center;  
        
    }
    p span{
        border-radius: 50%;
        padding: 1rem 0.8rem;
        border: solid 3px var(--var-title-color);
        color: var(--var-title-color);
        font: 500 1.2rem 'Abel', sans-serif;
    }
</style>
