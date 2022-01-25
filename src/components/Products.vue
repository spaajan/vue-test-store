<template>
  <h3>Products</h3>
  <div v-for="product in $store.state.products" :key="product.id">
    <div class="col-md-4 col-sm-6 col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <img class="img img-responsive productImage" :src="product.image" />
        </div>
        <div class="panel-body">
          <h4 class="productTitle">{{ product.title }}</h4>
          <p class="productDesc">{{ product.description }}</p>
          <p class="productPrice">{{ product.price }} €</p>
        </div>
        <div class="panel-footer">
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
.productTitle {
  min-height: 40px;
}
.productDesc {
  min-height: 150px;
}
.productPrice {
  font-weight: bold;
  font-size: 18px;
}
.panel-body,
.panel-heading,
.panel-footer {
  border: none !important;
  background: white;
}
</style>