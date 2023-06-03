<template>
      <div class="card-body">
    <h5 class="card-title">{{ producto.name }}</h5>
    <p class="card-text">{{ producto.description }}</p>
    <p class="card-text">{{ producto.price }}</p>
    <p class="card-text">{{ producto.createdAt }}</p>
  </div>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true,
    },
  },
};
</script>