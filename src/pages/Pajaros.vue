
<template>
    <div >
      <ul>
        <div class="container" v-for="producto in productos" :key="producto.id">
          <div class="card" style="width: 18rem;">
           <div class="images" v-for="image in producto.images" :key="image">
           <img width="200" height="200"  :src="image" alt="Producto" >
          </div>
  <div class="card-body">
    <h5 class="card-title">{{ producto.name }}</h5>
    <p class="card-text">{{ producto.description }}</p>
    <p class="card-text">{{ producto.price }}</p>
    <p class="card-text">{{ producto.createdAt }}</p>
  </div>
           
  <div class="btn-group d-flex justify-content-center">
            <button class="btn btn-sm btn-outline-secondary"> <RouterLink :to="`/Reviews/${producto._id}`">Detalles</RouterLink></button>
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
  