<template>
  <div class="container">
  
  <Home/>

  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/layout/footer'
import Home from '@/components/home'
export default {
  name: 'App',
  components:{
Footer,Home
    }
}
</script>


