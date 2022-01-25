<template>
  <ShoppingCart />
  <div class="home container">
    <Products />
  </div>
</template>

<script>
import Products from '../components/Products'
import ShoppingCart from '../components/ShoppingCart'

export default {
  name: 'Home',
  components: {
    Products,
    ShoppingCart
  },
}
</script>
