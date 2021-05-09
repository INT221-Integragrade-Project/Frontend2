<template>
  <div id="nav" class="text-center">
    <!-- <div class="float-left"> -->
    <router-link to="/" class="mx-5">MOBILE SHOP</router-link>
    <!-- </div> -->
    <!-- <div class="float-right"> -->
    <router-link to="/product" class="mx-5">PRODUCTS</router-link>
    <router-link to="/add" class="mx-5" @click="createNewProduct"
      >ADD PRODUCT</router-link
    >
    <router-link to="/team" class="mx-5">TEAM</router-link>
    <!-- </div> -->
  </div>
  <router-view />
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
  background-color: #fee9e4;
  font-size: 125%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#nav a {
  font-weight: 2 00;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ff838a;
}
</style>

<script>
export default {
  methods: {
    createNewProduct() {
      // fetch ("http://104.215.139.17:3000/add")
      fetch(`http://104.215.139.17:3000/add`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: {
          productid: 0,
          productname: "",
          price: 0,
          warranty: 0,
          menufacturrerdate: "",
          capacity: 0,
          description:"",
          images: "",
          brandid: 0,
        },
      });
    },
  },
};
</script>

