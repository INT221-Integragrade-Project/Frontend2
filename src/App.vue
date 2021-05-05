<template>
  <div id="nav" class="text-center">
    <router-link to="/">MOBILE SHOP</router-link> |
    <router-link to="/product">Product</router-link> |
    <router-link to="/addproduct">AddProduct</router-link> |
    <router-link to="/team">Team</router-link>
  </div>
  <router-view/>
</template>

<style>

body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background-color: #FEE9E4;
  font-size: 125%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  }

#nav a {
  font-weight: 2  00;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #FF838A;
}
</style>
