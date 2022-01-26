<template>
  <div class="body-content container">
    <h3>Enter contact details</h3>
    <!--TODO RAKENNA CONTACT NÄKYMÄ-->
    <form @submit.prevent>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="email">First name</label>
            <input
            v-model="firstName"
              required
              type="text"
              class="form-control"
              placeholder="Enter first name"
              name="firstName"
            />
          </div>
          <div class="form-group">
            <label for="email">Last name</label>
            <input
            v-model="lastName"
              required
              type="text"
              class="form-control"
              placeholder="Enter last name"
              name="lastName"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
            v-model="emailAddress"
              required
              type="email"
              class="form-control"
              placeholder="Enter email"
              name="email"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="pwd">Address</label>
            <input
            v-model="address"
              required
              type="text"
              class="form-control"
              placeholder="Enter address"
              name="address"
            />
          </div>
          <div class="form-group">
            <label for="pwd">City</label>
            <input
            v-model="city"
              required
              type="text"
              class="form-control"
              placeholder="Enter city"
              name="city"
            />
          </div>
          <div class="form-group">
            <label for="pwd">ZIP code</label>
            <input
            v-model="zipCode"
              required
              type="text"
              class="form-control"
              placeholder="Enter ZIP code"
              name="zipCode"
            />
          </div>
        </div>
      </div>
      <button @click="submitContact" type="submit" class="btn btn-success">Continue</button>
    </form>
  </div>
</template>

<script>

export default {   
  name: "Contact",
  beforeCreate() {
    //Jos ostoskori on tyhjä, ohjataan takaisin etusivulle
    if(!(this.$store.state.shoppingCart.length)) {
      this.$router.push('/')
      console.log('No products found')
    }
  },
  data() {
      //Asetetaan oletusarvot jokaiselle formin kentälle, jotka voidaan bindata inputeille
      return {
          firstName: '',
          lastName: '',
          emailAddress: '',
          address: '',
          city: '',
          zipCode: ''
      }
  },
  methods: {
      submitContact() {
        var formDetails = {
            firstName : this.firstName,
            lastName : this.lastName,
            emailAddress : this.emailAddress,
            address : this.address,
            city : this.city,
            zipCode : this.zipCode
        }
        
        this.$store.dispatch("submitContact", formDetails);
        this.$router.push('summary')
      }
  }
};
</script>

<style>
</style>