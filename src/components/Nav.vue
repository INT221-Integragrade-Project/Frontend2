<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/product">Product</router-link> |
    <router-link to="/team">Team</router-link>
  </div>
  <router-view/>
</template>

<style>

#nav {
  padding: 50px;
  background-color: yellow;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
};
</script>