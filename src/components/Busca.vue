<template>
    <div class="form-container">
     <slot name="search">
        
     </slot>
         
     
    </div>
</template>

<script>

export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .form-container{
     display: flex;
     align-items: center;
     justify-content: center;
     text-decoration: none;
     border: none;
     outline:none;     
}
input{
     width: 100%;
     border-radius: 50rem;
     background: #ebebeb;
     color:#9ebbcc;
     cursor: pointer;
     font-size: 1rem;
     font-family: 'Abel', sans-serif;
     padding: 0.8rem 1.5rem;
     border: none;
     outline:none;
}

::-webkit-input-placeholder {
   color: #9ebbcc;
}
</style>
