<template>
  <div class="text-center">
    <h1>APPLE PRODUCT</h1>
  </div>

  <div
    class="relative grid max-w-4xl px-8 pt-4 pb-10 mx-auto bg-gray-100 sm:grid-cols-2 grid-rows-1"
  >
    <div>
      <img src="../assets/16Product/PA1.png" class="w-96" />
    </div>

    <!-- <div>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div> -->

    <div>
      <span>
        <p>PRODUCT NAME | {{ product.productname }}</p>
        <br />
        <p>MANUFACTURER DATE : {{ product.menufacturrerdate }}</p>
        <p>PRODUCT DESCRIPTION : {{ product.description }}</p>
        <p>BRAND : {{ product.productname }}</p>
        <p>PRICE : {{ product.price }}</p>
        <p>WARRANTY : {{ product.warranty }}</p>
      </span>
    </div>

  </div>
</template>

<style>
h1 {
  margin: 30px;
  font-size: 250%;
  font-weight: bold;
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
      type: String
    }
  },
  data() {
    return {
      product: Object,
    };
  },

  methods: {
    async fetchProduct() {
      try {
        const res = await fetch("http://104.215.139.17:3000/show/"+this.id);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.product = await this.fetchProduct();
    console.log(this.product);
    console.log(Number(this.id));
  },
};

</script>
