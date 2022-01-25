<template>
    <div v-if="$store.state.shoppingCart.length" class="well">
        <div class="container">
            <h4>Shopping cart</h4>
            <div class="row" v-for="item in $store.state.shoppingCart" :key="item.id">
                <div class="col-md-10 col-xs-12">
                    <p>{{ item.title }}</p>
                </div>
                <div class="col-md-1 col-xs-10">
                    <p class="itemPrice">{{ item.price }} €</p>
                </div>
                <div class="col-md-1 col-xs-2">
                    <p>
                        <i @click="deleteItem(item.id)" class="fas fa-times-circle"></i>
                    </p>
                </div> 
            </div>
            <div class="row">
                <div class="col-md-2 col-md-offset-9 col-xs-10">
                    <p class="totalPrice">
                        <b>
                            Total {{ $store.getters.cartTotal }} €
                        </b>
                    </p>
                    <div class="btn btn-success pull-right">
                        <router-link to="/contact">Continue</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ShoppingCart',
    methods: {
        deleteItem(id) {
            this.$store.dispatch("deleteItem", id);
        }
    }
}
</script>

<style scoped>
    .well {
        border-radius: 0;
        margin-top:0;
    }
    .itemPrice {
        font-weight: bold;
        text-align-last: right;
    }
    .fa-times-circle {
        font-size:16px;
        color:red;
        cursor: pointer;
    }
    .totalPrice {
        text-align: right;
        margin-top: 20px;
    }
    .btn a {
        color: white !important;
        font-size:18px;
        text-decoration: none;
    }
</style>