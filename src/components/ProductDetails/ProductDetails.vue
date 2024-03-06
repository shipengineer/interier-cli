<template>
    <div class="product" :id=product.id >
        <img :src=product.image  class="product__img" style="width: 180px;">
        <h3 class="product__name">{{ product.name }}</h3>
        <p class="product__description">{{ formattedPrice(product.price) }}</p>    
        <p v-if="product.available" class="available">Available</p>
        <p v-else>Out of stock</p>
    </div>
</template>
<script>

export default {
    name:'ProductDetails',
    props:{
       product:Object
    },
    methods:{
      formattedPrice(){
        return '$'+this.product.price

      }
    },
    data(){
        return{

        }
    },
    mounted(){
      this.formattedPrice()
      
    }
    
    }
    

</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0px;
}
.product {
  margin-top: 10px;
  border: 2px solid green;
  border-radius: 10px;
  width: 250px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 30px;
}

</style>