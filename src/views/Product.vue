<template>
  <div class="product">
    <h1>MOBILE PRODUCTS</h1>
    <div id="subnav">
      <ul>
        <li class="p-2">VIEW PRODUCT</li>
        <li class="p-2">ADD PRODUCT</li>
        <li class="p-2">COMPARISON</li>
      </ul>
    </div>
    <div id="brand">
      <select name="brands" id="brands">
        <option value="APPLE">APPLE</option>
        <option value="OPPO">OPPO</option>
        <option value="SAMSUNG">SAMSUNG</option>
        <option value="VIVO">VIVO</option>
      </select>
    </div>
    <product-list
      :product="product"
      v-for="product in products"
      :key="product.id"
    >
    </product-list>
    <div>
      <div id="productlist" class="p-5">
        <div>
          <img alt="Mobile shop logo" src="../assets/logo2.png" width="250" />
        </div>
        <div id="productdescription">
          <p>PRODUCT NAME | </p>
          <p>PRICE : </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Product",
  components: {
    ProductList,
  },
  props: {
    product: Object,
    // type: String,
    // resetpage: Boolean,
  },
  data() {
    return {
      products: [],
    };
  },
  // async created() {
  //   fetch("http://localhost:3000/products")
  //   .then(res) = res.json()
  //   .then(data) = (this.products = data)
  //   .then() => {
  //     if(!this.resetpage) {
  //       this.products = this.products.filter(product) => {
  //         return product.Type.toLowerCase() === this.Type.toLowerCase();
  //       };
  //     }
  //   })
  //   .catch(error) => console.log(error);
  // },

  // async getProducts() {
  //   let url = "http://localhost:3000/products";
  //   try {
  //     let res = await fetch(url);
  //     return await res.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  async getProducts() {
    await fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        this.items = data.sort((a, b) => {
          if (a.brand > b.brand) return 1;
          if (a.brand < b.brand) return -1;
          return 0;
        });
      });
  },
};
</script>

<style>
h1 {
  margin: 30px;
  font-size: 250%;
  font-weight: bold;
}

ul {
  display: inline;
  list-style-type: none;
}

li {
  display: block;
  /* background-color: gray; */
}

/* #subnav {
  margin-left: 80px;
  background: gray;
} */

#brand {
  text-align: center;
}

/* #productlist {
  margin: 30px;
  outline-style: solid;
  outline-width: 1px;
  outline-color: #d3d3d3;
}

#productdescription {
  text-align: left;
} */
</style>