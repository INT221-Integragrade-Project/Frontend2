<template>
  <div id="productlist" class="p-5">
    <div>
      <img alt="Mobile shop logo" src="../assets/logo2.png" width="250" />
    </div>
    <div id="productdescription">
      <p>PRODUCT NAME | {{ product.productname }}</p>
      <p>PRICE : {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.products = await this.fetchProducts();
    console.log(this.products);
  },
};
</script>

<style>
#productlist {
  /* margin: 30px; */
  outline-style: solid;
  outline-width: 1px;
  outline-color: #d3d3d3;
  /* background-color: lightgrey; */
  width: 400px;
  border: 15px;
  padding: 50px;
  margin: 20px;
}

#productdescription {
  text-align: left;
  font-size: 75%;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
</style>
