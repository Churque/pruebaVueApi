<template>

    <div class="card" >

    <div class="images">
              <img :src="`${imgLink}`" class="card-img-top"  alt="Foto" />
    </div>
    <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">{{ new Date(modelo.createdAt).toLocaleDateString() }}</h6>
    <div v-if="!userName">
    <h5 class="card-title">{{ modelo.name }}</h5>
    </div>
    <div v-if="userName">
    <h5 class="card-title">{{ modelo.user.name }}</h5>
    </div>
    <div v-if="modelo.description">
    <p class="card-text mb-2 text-muted">{{ modelo.description }}</p>
    </div>
    <div v-if="modelo.bio">
    <p class="card-text mb-2 text-muted">{{ modelo.bio }}</p>
    </div>
    <div v-if="modelo.review">
    <p class="card-text mb-2 text-muted">{{ modelo.review }}</p>
    </div>
    <div v-if="modelo.city">
    <p class="card-text mb-2 text-muted">{{ modelo.city }}</p>
    </div>

    <h5 class="card-subtitle text-primary">{{ modelo.price }}</h5>
    <div v-if="linkTo">
    <button class="btn btn-outline-info">
              <RouterLink :to="`${linkTo}${modelo._id}`">Detalle</RouterLink>
    </button>
  </div>
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
    linkTo:{
        type: String,
        required: false,
    },
    imgLink:{
        type: String,
        required: true,
    },
    userName:{
      type: Boolean,
      required: true,
    },
    botonName: {
      type:String,
      required:false,
    },

  },
};
</script>
<style>

.card {
  flex-direction: row;
  margin-top: 30px; 
  margin-bottom: 30px;
}
.card img {
  width: 80%;
  height: 200px;
  border-radius: 20px;
}
</style>