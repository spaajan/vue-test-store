<template>
  <div class="success container">
    <h3>Thank you for your purchase</h3>
    <div v-if="showAlert" class="alert alert-success">
      <i class="fas fa-check"></i> Confirmation sent successfully!
    </div>
    <div class="row">
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
            <label>Contact information</label>
          </p>
          <div class="customersDetails">
            <p>{{ $store.state.customerDetails.firstName }} {{ $store.state.customerDetails.lastName }}</p>
            <p>{{ $store.state.customerDetails.emailAddress }}</p>
            <p>{{ $store.state.customerDetails.address }}</p>
            <p>{{ $store.state.customerDetails.zipCode }} {{ $store.state.customerDetails.city }}</p>
          </div>

          <p>
            <label>Products</label>
          </p>
          <div class="products">
             <div v-for="item in $store.state.shoppingCart" :key="item.id">
                 <p>{{ item.title }}</p>
                <p>{{ item.price }} €</p>
            </div>
          </div>
          <div>
            <p class="totalPrice">
              <b>Total {{ $store.getters.cartTotal }} €</b>
            </p>
          </div>
          <div class="btn btn-success pull-right">
            <router-link @click="clearData" to="/">Back to start</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Success",
  data() {
    //Asetetaan oletusarvot jokaiselle formin kentälle, jotka voidaan bindata inputeille
    return {
      showAlert: false
    };
  },
  created() {
    /*Email.send({
      Host: "<smtp host>",
      Username: "<username>",
      Password: "<password>",
      To: this.$store.state.customerDetails.emailAddress,
      From: "<from address>",
      Subject: "Your purchase from Vue test-store",
      Body: "<h3>Thank you for your purchase</h3>" + 
            "<p><b>Customer details</b></p>" +
            "<p>" +
                this.$store.state.customerDetails.firstName + " " +
                this.$store.state.customerDetails.lastName + 
            "</p>" +
            "<p>" +
                this.$store.state.customerDetails.emailAddress + "<br>" +
                this.$store.state.customerDetails.address + "<br>" +
                this.$store.state.customerDetails.zipCode + " " + this.$store.state.customerDetails.city +
            "</p>" +
            "<p><b>Products</b></p>" +
            "<p>" +
                this.$store.getters.shoppingCartToString +
            "</p>" 
              
    });*/
    this.showAlert = !this.showAlert;

  },
  methods: {
      clearData() {
          this.$store.dispatch("clearData");
      }
  }
};
</script>

<style scoped>
.btn a {
  color: white !important;
  font-size: 18px;
  text-decoration: none;
}
</style>