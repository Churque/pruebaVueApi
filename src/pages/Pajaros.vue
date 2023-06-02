
<template>
    <div >
      <ul>
        <div class="container" v-for="producto in productos" :key="producto.id">
           <a> {{ producto.name }}</a>
           <a> {{ producto.description }}</a>
           <a> {{ producto.price }}</a>
           <a type="Date"> {{ producto.createdAt }}</a>
           <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
           <div class="images" v-for="image in producto.images" :key="image">
           <img :src="image" alt="Producto" >
           </div>
  </div>
          </div>
        </div>
      </ul>
    </div>

  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        productos: [],
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios
          .get('http://54.163.208.73:8080/products')
          .then((result) => {
            this.productos = result.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };
  </script>

  <style >

  </style>
  