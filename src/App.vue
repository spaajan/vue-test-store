<template>
    <Header />
  <router-view/>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  }
}
</script>
<style>
  body {
    font-family: 'Roboto';
  }
</style>
