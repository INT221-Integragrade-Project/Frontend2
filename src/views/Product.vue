<template>
  <div class="text-center">
    <h1>MOBILE PRODUCTS</h1>
    <div class="grid grid-cols-4">
    <product-list
      v-for="product in products"
      :product="product"
      :key="product.productid"
    >
    </product-list>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Product",
  components: {
    ProductList,
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
    async fetchBrands() {
      try {
        const res = await fetch("http://104.215.139.17:3000/show/" + this.id);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.products = await this.fetchProducts();
    this.brand = await this.fetchBrands();
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