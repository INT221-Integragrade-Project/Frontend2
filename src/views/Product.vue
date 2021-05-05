<template>
  <div class="text-center">
    <h1>MOBILE PRODUCTS</h1>
    <!-- <div id="subnav">
        <li class="p-2">VIEW PRODUCT</li>
        <li class="p-2">ADD PRODUCT</li>
        <li class="p-2">COMPARISON</li>
    </div> -->
    <div id="brand">
      <select name="brands" id="brands">
        <option value="default">SELECT BRAND</option>
        <option value="APPLE">APPLE</option>
        <option value="OPPO">OPPO</option>
        <option value="SAMSUNG">SAMSUNG</option>
        <option value="VIVO">VIVO</option>
      </select>
    </div>
    <product-list 
      v-for="product in products"
      :product="product"
      :key="product.productid"
    ></product-list>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Product",
  components: {
    ProductList,
  },
  props: {
    type: String,
    resetpage: Boolean,
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