<template>
  <div class="text-center">
    <h1>MOBILE PRODUCTS</h1>
    <!-- <div id="subnav">
        <li class="p-2">VIEW PRODUCT</li>
        <li class="p-2">ADD PRODUCT</li>
        <li class="p-2">COMPARISON</li>
    </div> -->
    <!-- <div id="brand">
      <select name="brands" id="brands">
        <option value="default">SELECT BRAND</option>
        <option value="APPLE">APPLE</option>
        <option value="OPPO">OPPO</option>
        <option value="SAMSUNG">SAMSUNG</option>
        <option value="VIVO">VIVO</option>
      </select>
    </div> -->
    <product-list 
    class = "flex flex-col"
      v-for="product in products"
      :product="product"
      :key="product.productid"
    >
    
    </product-list>
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
        const res = await fetch("http://104.215.139.17:3000/show");
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

</style>