<template>
  <div
    class="relative grid max-w-4xl px-8 pt-4 pb-10 mx-auto place-content-center"
  >
  <div class="text-center">
    <h1>ADD PRODUCT</h1>
    <product-form></product-form>
  </div>
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";

export default {
  name: "Form",
  components: {
    ProductForm,
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