<template>
<router-link :to="{name:'Product1' , params:{id:product.productid}}" >
  <div>
    <div id="productlist" class="p-5 flex flex-col">
      <div class="overflow-hidden w-full relative pb-5">
        <img :src ="`http://104.215.139.17:3000/file/${product.images}`" width="250"/>
      </div>
      <div id="productdescription" class="">
        <p>PRODUCT NAME | {{ product.productname }}</p>
        <p>PRICE : {{ product.price }}</p>
      </div>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
    id: {
      type: String
    }
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
  outline-style: solid;
  outline-width: 1px;
  outline-color: #d3d3d3;
  width: 300px;
  margin: 20px;

  flex: column;
}

#productdescription {
  text-align: left;
  font-size: 80%;
}

img {
  position: relative;
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
}
</style>
