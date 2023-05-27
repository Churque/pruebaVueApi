
<template>
    <div >
      <ul>
        <div class="container" v-for="pajaro in pajaros" :key="pajaro.id">
           <a> {{ pajaro.name.spanish }}</a>
           <img :src="pajaro.images.main" alt="Pajaro" >
        </div>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pajaros: [],
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios
          .get('https://aves.ninjas.cl/api/birds')
          .then((result) => {
            this.pajaros = result.data;
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
  