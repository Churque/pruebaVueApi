<template>
<div v-for="(usuario, index) in usuarios" :key="index" :usuario="usuario">
<h1>{{usuario.name}}</h1>
<h1>AAAAAAAAAAAAAAAAA</h1>
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
      usuarios: [],
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
          this.usuarios = result.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
