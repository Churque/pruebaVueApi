<template>
  <div class="container">

    <CartaModelo :modelo="usuario"  :imgLink="usuario.photo"></CartaModelo>
  </div>

  <p style="text-align: center;"> Cantidad de reviews hechas por {{usuario.name}} es de {{reviews.length}} </p>
  
  <div v-for="review in reviews" :key="review._id">
    <h4>{{ review.product.name }}</h4>
    <CartaModelo :modelo="review"  :imgLink="review.product.images[0]"></CartaModelo>
  </div>

</template>

<script>
import axios from "axios";
import CartaModelo from "../components/CartaModelo.vue";
export default {
  components:{
      CartaModelo,
    },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      usuario: Object,
      reviews: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(`http://54.163.208.73:8080/users/${this.id}/reviews`)
        .then((result) => {
          this.usuario = result.data.user;
          this.reviews = result.data.reviews;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
</style>
