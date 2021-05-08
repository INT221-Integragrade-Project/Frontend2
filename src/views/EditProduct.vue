<template>
  <div class="text-center">
    <h1>EDIT PRODUCT</h1>
  </div>
</template>

<script>
import EditProductForm from "@/components/EditProductForm.vue";

export default {
  name: 'Home',
  components: {
    EditProductForm
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