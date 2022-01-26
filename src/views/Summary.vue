<template>
  <div class="body-content container">
    <h3>Summary</h3>
    <div class="row">
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
            <label>Contact information</label>
          </p>
          <div>
            <p>{{ $store.state.customerDetails.firstName }} {{ $store.state.customerDetails.lastName }}</p>
            <p>{{ $store.state.customerDetails.emailAddress }}</p>
            <p>{{ $store.state.customerDetails.address }}</p>
            <p>{{ $store.state.customerDetails.zipCode }} {{ $store.state.customerDetails.city }}</p>
          </div>

          <p>
            <label>Products</label>
          </p>
          <div v-for="item in $store.state.shoppingCart" :key="item.id">
            <p>{{ item.title }}</p>
            <p>{{ item.price }} €</p>
          </div>
          <div>
            <p class="totalPrice">
              <b>Total {{ $store.getters.cartTotal }} €</b>
            </p>
          </div>
          <div class="btn btn-success pull-right">
                <router-link to="/success">Purchase</router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  beforeCreate() {
    //Jos ostoskori on tyhjä, ohjataan takaisin etusivulle
    if(!(this.$store.state.shoppingCart.length)) {
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>

.btn a {
        color: white !important;
        font-size:18px;
        text-decoration: none;
    }

</style>