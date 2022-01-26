<template>
<div class="col-md-9 productContainer">
  <h3>Products <small>({{ $store.getters.countProducts }})</small></h3>
    <div v-for="product in $store.state.products" :key="product.id">
      <div class="panel-default">
        <div class="panel-body">
          <div class="col-md-2">
            <img class="img img-responsive productImage" :src="product.image" />
          </div>
          <div class="col-md-8">
            <h4 class="productTitle">{{ product.title }}</h4>
            <p class="productDesc">{{ product.description }}</p>
          </div>
          <div class="col-md-2">
            <p class="productPrice">{{ product.price }} €</p>
            <form @submit.prevent>
            <input
              class="btn btn-success"
              type="submit"
              value="Buy"
              @click="addToCart(product.id)"
            />
          </form>
          </div>
        </div>
      </div>
    </div>
</div>
  
</template>

<script>
export default {
  Name: "Products",
  components: {},
  beforeCreate() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    },
  },
};
</script>

<style scoped>
.productImage {
  max-height: 200px;
  margin: 0 auto;
}
.productContainer {
  border-left: 1px solid #777;
  min-height: 100vh;
}
.productTitle {

}
.productDesc {

}
.productPrice {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}
form {
  text-align: center;
}

</style>