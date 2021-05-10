<template>
  <div class="home">
    <div id="left">
      <div id="logo">
        <img alt="Mobile shop logo" src="../assets/logo2.png" width="500" />
      </div>
    </div>
    <div id="right" >
      <div id="about" class ="text-center  my-10">
        <h1>MOBILE SHOP</h1>
        <p>
          A website that combines many different brands of smartohone<br />
          Whether it's a mobile phone or tablet for education<br />
          You can choose to view the product<br />
          and you can add a list of products on this website
        </p>
        
        <div class="text-center my-10">
          <input @click="goProductPage" value="PRODUCTS PAGE" class="cursor-pointer btn text-center" />
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
  margin: 5%;
  float: left;
}

#about {
  float: right;
  margin: 5%;
}

#about h1 {
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
export default {
  methods: {
    goProductPage() {
      this.$router.push('/product');
    }
  },
};
</script>


