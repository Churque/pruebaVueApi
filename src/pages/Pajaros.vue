<template>
  <div>
    <ul>
      <div class="container" v-for="producto in productos" :key="producto.id">
          <CartaProducto :modelo="producto" :linkTo="'/Reviews/'" :imgLink="producto.images[0]" :userName="false">    
          </CartaProducto>
        </div>
    </ul>
  </div>
</template>


<script>
import axios from "axios";
import CartaProducto from "../components/CartaModelo.vue";
export default {
  components: {
    CartaProducto,
  },
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
        .get("http://54.163.208.73:8080/products")
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

<style></style>
