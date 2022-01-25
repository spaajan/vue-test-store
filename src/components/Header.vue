<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">
          <img class="img-responsive" src="../assets/logo.png" />
        </router-link>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
            <li><router-link to="/">All products</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  Name: "Vue",
};
</script>

<style scoped>
.navbar-inverse {
    border-radius:0;
    margin-bottom:0;
}
.navbar-brand img {
  max-height: 20px;
}
.navbar-header button {
    border-color: white;
}
</style>