<template>
  <div>
    <ul>
      <div class="container" v-for="producto in productos" :key="producto.id">
        <div class="card" style="width: 18rem">
          <div v-if="producto.images.length > 1" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item" v-for="(image, index) in producto.images" :key="index" :class="{ 'active': index === 0 }">
                <img :src="image" class="d-block w-100" alt="Producto" />
              </div>
            </div>
          </div>
          <div v-else>
            <div class="images">
              <img :src="producto.images[0]" class="d-block w-100" alt="Producto" />
            </div>
          </div>
          <CartaProducto :producto="producto" />

          <div class="btn-group d-flex justify-content-center">
            <button class="btn btn-sm btn-outline-secondary">
              <RouterLink :to="`/Reviews/${producto._id}`">Detalles</RouterLink>
            </button>
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
