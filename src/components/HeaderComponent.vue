<template>
<header>
    <img src='@/assets/logo.png' class="logo" />
    <nav>
        <router-link to="/">Home</router-link> 
        <router-link to="/projects">Project</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/market">Market</router-link>
        <router-link to="/article">Article</router-link>
    </nav>
</header>
</template>
<script>
export default {
  name: 'HeaderComponent',
  props:{
    
  },
  data(){
    return{
      logoImg:'/logo.png'
    }
  }
  
}
</script>
<style lang="scss">
@import url('@/assets/scss-modules/_header.scss');
</style>