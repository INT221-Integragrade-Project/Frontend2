<template>
  <div class="home">
    <div id="left">
      <div id="logo">
        <img alt="Mobile shop logo" src="../assets/logo2.png" width="500" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      </div>
    </div>
    <div id="right">
      <div id="description" class ="text-center">
        <h1>MOBILE SHOP</h1>
        <p>
          A website that combines many different brands of smartohone<br />
          Whether it's a mobile phone or tablet for education<br />
          You can choose to view the product<br />
          and you can add a list of products on this website
        </p>
        <br />
        <div id="button">
          <router-link to="/product"><button>GO TO MOBILE PRODUCTS PAGE</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.home {
  margin-left: 10%;
  margin-right: 10%;
}

#logo {
  /* position: relative; */
  /* right: 300px; */
  /* top: 100px; */
  margin: 5%;
  float: left;
}

#description {
  float: right;
  margin: 5%;
}

#description h1 {
  font-size: 350%;
  font-family: Arial;
  font-weight: bold;
}

#button {
  height: 50px;
  width: 400px;
  font-weight: bold;
  font-size: 100%;
  font-family: Arial;
  background-color: #FEE9E4;
}

</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
</script>

