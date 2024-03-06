<template>
  <div class="market">
   <HeaderComponent/>
    <ProductDetails v-for="product in  products" :product="product" :key="product.id"/>
   <FooterComponent/>
  </div>
  </template>
  
  <script>
  import FooterComponent from '@/components/FooterComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import ProductDetails from '@/components/ProductDetails.vue'
  
  export default {
    name: 'BlogView',
    components: {
      ProductDetails,
      HeaderComponent,
      FooterComponent
  },
  data(){
    return{
        month: [
      'December',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'January',
    ],
    products: [
      {
        id: 1,
        name: 'Товар 1',
        image:
          'https://www.cosmedel.ru/upload/iblock/23e/n2ju8xpew44h6uutkxob6h40tris55n2.jpg',
        price: 100,
        available:true
      },
      {
        id: 2,
        name: 'Товар 2',
        image:
          'https://www.cosmedel.ru/upload/iblock/6ff/fmh81aaowb06kbtptonrl0yduapu18h1.jpg',
        price: 50,
        available:true

      },
      {
        id: 3,
        name: 'Товар 3',
        image:
          'https://www.cosmedel.ru/upload/iblock/68d/nhnb4y2aspwa486c54xlucm18ahna446.jpg',
        price: 200,
        available:false

      },
    ],
    articles: [
      {
        id: 0,
        img: './news-image/1.png',
        name: 'let’s get solution for building construction work',
        date: 1735171200,
        tag: 'kitchan design',
      },
      {
        id: 1,
        img: './news-image/2.png',
        name: ' low cost latest invented interior designing ideas.',
        date: 1734825600,
        tag: 'living design',
      },
      {
        id: 2,
        img: './news-image/3.png',
        name: 'best for any office & business interior solution',
        date: 1735171200,
        tag: 'interior design',
      },
      {
        id: 3,
        img: './news-image/4.png',
        name: 'let’s get solution for building construction work',
        date: 1735084800,
        tag: 'kitchan design',
      },
      {
        id: 4,
        img: './news-image/5.png',
        name: ' low cost latest invented interior designing ideas.',
        date: 1734825600,
        tag: 'living design',
      },
      {
        id: 5,
        img: './news-image/6.png',
        name: 'best for any office & business interior solution',
        date: 1735084800,
        tag: 'interior design',
      },
    ],
  }},
    methods: {
  getDateToString(timestamp) {
    const date = new Date(timestamp * 1000);
    return `${date.getDate()} ${
      this.month[date.getMonth()]
    } ${date.getFullYear()}`;
    },
    },
  }

  </script>
  <style lang="scss" scoped>
  .articles{
    margin: 0
  }
  @import url('@/assets/scss-modules/_head.scss');
  @import url('@/assets/scss-modules/_latest-post.scss');
  @import url('@/assets/scss-modules/_bookmarks.scss');
  @import url('@/assets/scss-modules/_pages.scss');
  @import url('@/assets/scss-modules/articles.scss');
  @import url('@/assets/styles/_blog.scss');
  </style>
  