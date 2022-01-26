<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
body {
  font-family: "Roboto";
}
.body-content {
  min-height: 90vh;
}
</style>
