<template>
  <div id="productlist" class="p-5">
    <div>
      <img alt="Mobile shop logo" src="../assets/logo2.png" width="250" />
    </div>
    <div id="productdescription">
      <p>PRODUCT NAME | </p>
      <p>PRICE : </p>
    </div>
  </div>
</template>

<script>
// export default {
//   props: {
//     product: Object
//   },
// };
export default {
  async getProducts() {
    await fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data.sort((a, b) => {
          if (a.productid > b.productid) return 1;
          if (a.productid < b.productid) return -1;
          return 0;
        });
      });
  },
  async created() {
    this.products = await this.getProducts();
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>

<style>
#productlist {
  margin: 30px;
  outline-style: solid;
  outline-width: 1px;
  outline-color: #d3d3d3;
}

#productdescription {
  text-align: center;
}
</style>
