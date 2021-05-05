<template>
  <div class="text-center">
  <h1>ADD PRODUCT</h1>
  <add-product-form></add-product-form>
  </div>
</template>

<script>
import AddProductForm from "@/components/AddProductForm.vue";

export default {
  name: 'Home',
  components: {
    AddProductForm
  }
}
</script>

<style>
h1 {
  margin: 30px;
  font-size: 250%;
  font-weight: bold;
}
</style>