<template>
  <div class="container">
    <img :src="`${usuario.photo}`" />
    <h1>{{ usuario.name }}</h1>
    <h1>{{ usuario.city }}</h1>
    <h1>{{ usuario.bio }}</h1>
  </div>

  <p> cantidad de reviews hechas por {{usuario.name}} es de {{reviews.length}} </p>
  <div v-for="review in reviews" :key="review._id">
    <h1>{{ review.product.name }}</h1>
    <div v-for="image in review.product.images" :key="image">
      <img width="200" height="200" :src="image" alt="" />
    </div>
    <p> {{review.review}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
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

<style></style>
