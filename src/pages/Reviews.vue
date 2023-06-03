<template>
  <div>
    <ul>
      <div class="container" v-if="producto">
        <CartaProducto :producto="producto" />
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
        <div class="card" style="width: 18rem">
          <img
            width="200"
            height="200"
            :src="review.user.photo"
            alt="Producto"
          />
          <div class="card-body">
            <h5 class="card-title">Nombre Reviewer: {{ review.user.name }}</h5>
            <p class="card-text">{{ review.review }}</p>
            <div class="d-flex custom-centered">
          <div class="btn-group d-flex justify-content-center">
            <router-link :to="`/perfilusuario/${review.user._id}`" class="btn btn-sm btn-outline-secondary"> Ver Habilidades</router-link>
          </div>
        </div>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import CartaProducto from "../components/CartaProducto.vue";

export default {
  components: {
    CartaProducto,
  },
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
    },
  },
};
</script>

<style></style>
