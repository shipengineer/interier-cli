<template>
    <div class="error404">
        <HeaderComponent/>
        <div class="container">
            <h1>There Are No Such Design</h1>
            <router-link to="/">Home</router-link>
        </div>
        <FooterComponent/>
    </div>
        
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Error404',
    components: {
      HeaderComponent,
      FooterComponent
  },
    
}</script>
<style lang="scss" scoped>

.container{
margin-top: 200px;
font-family: 'DM Serif Display';
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}</style>