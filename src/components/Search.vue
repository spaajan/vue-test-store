<template>
  <div class="search col-md-3">
    <h3 class="category">
      {{ category }}
    </h3>
      <ul>
        <li>
            <a class="category" @click="getProducts()" href="#">All categories</a>
        </li>
        <li v-for="category in $store.state.categories" :key="category">
            <a class="category" @click="submitCategory(category)" href="#">{{ category }}</a>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  Name: "Search",
  data() {
      return {
          category: 'All categories'
      }
  },
  beforeCreate() {
    this.$store.dispatch("getCategories");
  },
  methods: {
    submitCategory(category) {
        this.category = category
        this.$store.dispatch("getProductsByCategory", category);
    },
    getProducts() {
        this.$store.dispatch("getProducts");
        this.category = 'All categories'
    }
  }
};
</script>

<style scoped>
.category {
    text-transform: capitalize;
}
ul {
  list-style: none;
  /*padding-left: 0;*/
}
ul li a {
  color:black;
  line-height:2;
  font-size:18px;
}

</style>