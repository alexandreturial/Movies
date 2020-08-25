<template>
  <div>  
    <Topo title="Movies"/>
    <main>
        <CardDetalhe/>
        <Video/>
    </main>
  </div>
</template>

<script>
import Topo from '../components/Topo'
import CardDetalhe from '../components/CardDetalhe'
import Video from '../components/Video.vue'

export default {
  components: {
    Topo,
    CardDetalhe,
    Video
  }
}
</script>

<style scoped>
main{
  align-items: center;
  justify-content: center;
  margin: 0rem 1rem;
}
footer{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 1rem 1rem;
}
@media(min-width: 1100px){
  main{
    margin: 0rem 1rem;
  }
}
</style>
