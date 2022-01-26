<template>
  <ShoppingCart />
  <div class="body-content container">
    <div class="row">
      <Search />
      <Products />
    </div>
  </div>
</template>

<script>
import Products from '../components/Products'
import ShoppingCart from '../components/ShoppingCart'
import Search from '../components/Search'

export default {
  name: 'Home',
  components: {
    Products,
    ShoppingCart,
    Search
  },
}
</script>

<style scoped>

</style>
