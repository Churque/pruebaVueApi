<template>
    <div>
        <div class="container" >
          <img v-if="perro" :src="perro.message" alt="Perro" width=600>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        perro: null,
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios
          .get('https://dog.ceo/api/breeds/image/random')
          .then((response) => {
            this.perro = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };
  </script>
  

  <style >
  .container{
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
  }

  </style>
