<template>
  <div>
    <ul>
      <div class="container" v-if="producto">
        <a> {{ producto.name }}</a>
        <a> {{ producto.description }}</a>
        <a> {{ producto.price }}</a>
        <a type="Date"> {{ producto.createdAt }}</a>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="images" v-for="image in producto.images" :key="image">
              <img :src="image" alt="Producto" />
            </div>
          </div>
        </div>
      </div>

      <div class="container" v-for="review in reviews" :key="review._id">
        <a> {{ review._id }}</a>
        <div class="btn-group d-flex justify-content-center">
          <p>Nombre Reviewer: {{ review.user.name }}</p>
          <p>Review: {{ review }}</p>
        </div>
      </div>
    </ul>
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
      producto: null,
      reviews: [],
    };
  },
  mounted() {
    //  this.fetchData();
    this.conseguirIdProduct();
  },

  methods: {
    /*
    fetchData() {
      axios
        .get("http://54.163.208.73:8080/products")
        .then((result) => {
          this.productos = result.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    */
    conseguirIdProduct() {
      axios
        .get(`http://54.163.208.73:8080/products/${this.id}/reviews`)
        .then((result) => {
          this.producto = result.data.product;
          this.reviews = result.data.reviews;
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(this.reviews);
    },
  },
};
</script>

<style></style>
