<template>
    <nav class="navbar">
        <div class="navbar">
            <h1 class="title">{{title}}</h1>
        </div>
    </nav>
</template>

<script>
export default {
    props:{
        title: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar {
        background: #116193;
    }
    h1{
        margin: 0 0 2rem;
    }
    .title{
        display: flex;  
        justify-content: center;  
        padding: 0.4rem;
        font: 500 2.5rem 'Abel', sans-serif;
        color: #01dfdf;
        letter-spacing: 1px;
    }
</style>
