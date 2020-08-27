<template>
    <nav class="navbar">
        <div class="navbar">
             <router-link :to="{ path: '/'}"  style="text-decoration: none; color: inherit;"> 
                <h1 class="title">{{title}}</h1>
            </router-link>
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
        background: var(--var-background-nav);
    }
    h1{
        margin: 0 0 2rem;
    }
    .title{
        display: flex;  
        justify-content: center;  
        padding: 0.4rem;
        font: 500 2.5rem 'Abel', sans-serif;
        color: var(--var-title-color);
        letter-spacing: 1px;
    }
</style>
