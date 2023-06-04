<template>

      <div class="imagen-container">
      <div v-for="imagen in modelo.images" :key="imagen">
  <img :src="imagen" alt="Imagen del producto"  class="producto-imagen">
</div>
</div>
</template>

<script>
export default {
  props: {
    modelo: {
      type: Object,
      required: true,
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