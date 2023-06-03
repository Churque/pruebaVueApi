<template>
  <div>
    <ul>
      <h1>Autor publicacion</h1>
      <CartaModelo
        :modelo="usuario"
        :imgLink="usuario.photo"
        :linkTo="'/perfilusuario/'"
        :botonName="Perfil"
      />

      <h1>Producto</h1>
      <div class="container" v-if="producto">
        <CartaModelo :modelo="producto" :imgLink="producto.images[0]" />
      </div>


      <div class="imagen-container">
      <div v-for="imagen in producto.images" :key="imagen">
  <img :src="imagen" alt="Imagen del producto"  class="producto-imagen">
</div>
</div>




      <h1>Reviews</h1>
      <p style="text-align: center;"> cantidad de reviews hechas es de {{reviews.length}} </p>
      <div class="container" v-for="review in reviews" :key="review._id">
        <CartaModelo
          :modelo="review"
          :imgLink="review.user.photo"
          :userName="true"
        />
      </div>
      <div class="container">
        <div class="btn-group d-flex justify-content-center"></div>
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
      producto: {
        images:[]
      },
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

<style>
.imagen-container {
  display: flex;
  justify-content: center;
}

.producto-imagen {
  width: 200px;
  height: 200px;
  margin: 0 100px;
  border-radius: 20px;
  border: 2px solid grey;
  margin-bottom: 100px;
  margin-top: 100px;
}

.producto-imagen {
    transition: transform 0.3s;
  }

  .producto-imagen:hover {
    transform: scale(1.5);
  }


</style>
