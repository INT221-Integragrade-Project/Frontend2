<template>
  <div class="text-center">
    <h1>{{ brand.brandname }} PRODUCT</h1>
  </div>

  <div
    class="relative grid max-w-4xl px-8 pt-4 pb-10 mx-auto sm:grid-cols-2 grid-rows-1"
  >
    <div>
      <img
        :src="`http://104.215.139.17:3000/file/${product.images}`"
        class="w-96"
      />
    </div>

    <div class="mt-10">
      <span>
        <p><b>PRODUCT NAME |</b> {{ product.productname }}</p>
        <br />
        <p><b>MANUFACTURER DATE :</b> {{ product.menufacturrerdate }}</p>
        <p><b>PRODUCT DESCRIPTION :</b> {{ product.description }}</p>
        <p><b>BRAND :</b> {{ brand.brandname }}</p>
        <p><b>PRICE :</b> {{ product.price }}</p>
        <p><b>WARRANTY :</b> {{ product.warranty }}</p>
        
    <div>
      <input @click="editProduct" type="submit" value="EDIT" class="absolute z-10 rounded shadow-md cursor-pointer btn right-20 bottom-10" />
      <input @click="deleteProduct" type="submit" value="DELETE" class="absolute z-10 rounded shadow-md cursor-pointer btn right-0 bottom-10 text-red-500" />
    </div>
      </span>
    </div>
    

    <div class="pt-5">
      <span class="dot mr-2"></span>
      <span class="dot mr-2"></span>
      <span class="dot mr-2"></span>
      <span class="dot mr-2"></span>
    </div>
  </div>
</template>

<style>
h1 {
  margin: 30px;
  font-size: 250%;
  font-weight: bold;
  text-transform: uppercase;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>

<script>
export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      product: Object,
      brand: Object,
    };
  },

  methods: {
    // async deleteProduct() {
    //   const res = await fetch("http://104.215.139.17:3000", {
    //     method: 'DELETE'
    //   })
    // },
    async fetchProduct() {
      try {
        const res = await fetch("http://104.215.139.17:3000/show/" + this.id);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchBrand() {
      try {
        const res = await fetch(
          "http://104.215.139.17:3000/showbrand/" + this.product.brandid
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    // async fetchColors() {
    //   try {
    //     const res = await fetch(
    //       "http://104.215.139.17:3000/showbrand/" + this.product.brandid
    //     );
    //     const data = await res.json();
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
  async created() {
    this.product = await this.fetchProduct();
    this.brand = await this.fetchBrand();
    // this.colors = await this.fetchColors();
    console.log(this.product);
    console.log(this.brand);
    console.log(Number(this.id));
  },
};
</script>
