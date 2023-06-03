<template>
  <div>
    <ul>
      <div class="container" v-if="producto">
        <CartaModelo :modelo="producto" :imgLink="producto.images[0]" />
      </div>
      <CartaModelo
        :modelo="usuario"
        :imgLink="usuario.photo"
        :linkTo="'/perfilusuario/'"
        :botonName="Perfil"
      />
      <div class="container">
        <div class="btn-group d-flex justify-content-center"></div>
      </div>

      <div class="container" v-for="review in reviews" :key="review._id">
        <CartaModelo
          :modelo="review"
          :imgLink="review.user.photo"
          :userName="true"
        />
        <a> {{ review._id }}</a>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import CartaModelo from "../components/CartaModelo.vue";

export default {
  components: {
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
      producto: null,
      reviews: [],
      usuario: [],
    };
  },
  mounted() {
    //  this.fetchData();
    this.conseguirIdProduct();
  },

  methods: {
    conseguirIdProduct() {
      axios
        .get(`http://54.163.208.73:8080/products/${this.id}/reviews`)
        .then((result) => {
          this.producto = result.data.product;
          this.reviews = result.data.reviews;
          this.usuario = result.data.product.user;
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(this.usuario);
    },
  },
};
</script>

<style></style>
