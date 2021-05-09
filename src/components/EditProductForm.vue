<template>
  <div class="mt-20 lg:mt-24" v-show="!isLoad">
    <form @submit.prevent="submitForm">
      <div class="text-left">
        <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
          <p>PRODUCT NAME</p>
            <input v-model.trim="productName" class="input-css" id="" type="text" placeholder="product name" required :class="{ 'ring ring-red-400': invalid_name }" />
            <span v-if="invalid_name" class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 ">Please input name</span>
        </div>
        <br>

        <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
          <p>MANUFACTURER DATE</p>
            <input type="text" class="input-css" placeholder="manufacturer date" v-model="manuDate" required :class="{ 'ring ring-red-400': invalid_date }" />
            <span v-if="invalid_date" class="absolute p-3 font-mono text-red-500 left-7 -bottom-1">Please input date</span>
        </div>
        <br>

        <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
          <p>PRODUCT DESCRIPTION</p>
          <textarea class="input-css h-40" id="description" placeholder="description" v-model="description" type="text" />
        </div>
        <br>

        <div class="relative px-3 mb-6 lg:w-full md:mb-0">
          <p>SELECT BRAND</p>
            <select class="input-css" id="brandAdd" v-model="brandAdd" required :class="{ 'ring ring-red-400': invalid_brand }">
              <option value="" disabled selected>[ Select Brand ]</option>
              <option value="APPLE">APPLE</option>
              <option value="OPPO">OPPO</option>
              <option value="SAMSUNG">SAMSUNG</option>
              <option value="VIVO">VIVO</option>
            </select>
          <span v-if="invalid_brand" class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 ">Please select Brand</span>
        </div>
        <br>

        <div class="px-3 mb-6 lg:w-full md:mb-0 relative" :class="{ hidden: activeClose }">
          <p>IMAGE</p>
          <input class="input-css" id="file" v-on:change="onFileChange($event)" type="file" :class="{ 'ring ring-red-400': invalid_img }" />
          <span v-if="invalid_img" class="absolute p-3 font-mono text-red-500 left-7 -bottom-1 ">Please choose image</span>
        </div>
        <br>

        <div class="px-3 mb-6 lg:w-full md:mb-0" :class="{ hidden: !activeClose }">
          <label class="label-css" for="previewImage">Preview</label>
          <div class="relative input-css">
            <span class="absolute p-1 text-white bg-blue-700 rounded-full cursor-pointer material-icons top-2 right-2" @click="removeImage()">close</span>
            <img :src="previewImage" alt="Preview Image" class="max-h-80" />
          </div>
        </div>
        <br>
        
        <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative">
          <p>PRICE</p>
            <input v-model="price" class="input-css" id="price" type="number" placeholder="price" min="1" max="99999" required :class="{ 'ring ring-red-400': invalid_price }" />
            <span v-if="invalid_price" class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 ">Please input price</span>
        </div>
        <br>

        <div class="px-3 mb-6 lg:w-full md:mb-0">
          <label class="label-css">Warranty</label>
            <div class="flex flex-col md:flex-row input-css">
              <div class="flex items-center mr-7">
                <input type="checkbox" id="0" name="warranty" v-model="warranty" value="0" class="w-4 h-5 mr-2" />
                <label for="0">none</label>
              </div>
              <div class="flex items-center mr-7">
                <input type="checkbox" id="1" name="warranty" v-model="warranty" value="1" class="w-4 h-5 mr-2" />
                <label for="1">1 year</label>
              </div>
              <div class="flex items-center mr-7">
                <input type="checkbox" id="2" name="warranty" v-model="warranty" value="2" class="w-4 h-5 mr-2" />
                <label for="2">2 year</label>
              </div>
            </div>
        </div>
        <br>

      </div>
      <input @click="validating" type="submit" value="SAVE" class="absolute z-10 rounded shadow-md cursor-pointer btn left-4" />
    </form>
  </div>

    <div v-show="isLoad" class="h-screen w-full flex items-center justify-center">
        <i class="material-icons text-4xl animate-pulse" v-show="isLoad"> loading . .</i>
    </div>
</template>

<style>
input[type=text] , input[type=number] , textarea{
  width: 500px;
  height: 30px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

select {
  width: 500px;
  height: 50px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>

<script>
export default {
  data() {
    return {
      brands: [],
      brandAdd: "",
      name: "",
      price: 0,
      warranty: 0,
      manuDate: "",
      types: [],
      type: "",
      description: "",
      url: "http://localhost:3000/products",
      previewImage: null,
      activeClose: false,
      colors: [],
      colorsAdd: [],
      invalid_brand: false,
      invalid_name: false,
      invalid_price: false,
      invalid_type: false,
      invalid_Color: false,
      invalid_date: false,
      invalid_img: false,
      productIds: [],
      isLoad: Boolean,
    };
  },
  props: {
    itemId: Number,
  },
  methods: {
    validating() {
      this.invalid_brand = this.brandAdd === "" ? true : false;
      this.invalid_name = this.name === "" ? true : false;
      this.invalid_price = this.price === 0 ? true : false;
      this.invalid_type = this.type === "" ? true : false;
      this.invalid_Color = this.colorsAdd.length === 0 ? true : false;
      this.invalid_date = this.manuDate === "" ? true : false;
      this.invalid_img = this.previewImage === null ? true : false;
      setTimeout(() => {
        this.invalid_brand = false;
      }, 5000);
      setTimeout(() => {
        this.invalid_name = false;
      }, 5000);
      setTimeout(() => {
        this.invalid_price = false;
      }, 5000);
      setTimeout(() => {
        this.invalid_type = false;
      }, 5000);
      setTimeout(() => {
        this.invalid_Color = false;
      }, 5000);
      setTimeout(() => {
        this.invalid_date = false;
      }, 5000);
      setTimeout(() => {
        this.invalid_img = false;
      }, 5000);
    },

    submitForm() {
      if (
        this.brandAdd !== "" &&
        this.name !== "" &&
        this.price !== 0 &&
        this.type !== "" &&
        this.colorsAdd.length !== 0 &&
        this.manuDate !== "" &&
        this.previewImage !== null
      ) {
        let newId =
          this.productIds.sort((a, b) => {
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
          })[0] + 1;
        let Id = this.itemId ? this.itemId : newId;
        let body = JSON.stringify({
          productId: Number(Id),
          productName: this.name,
          brand: this.brands.find((brand) => {
            return brand.brandName == this.brandAdd;
          }),
          type: this.types.find((type) => {
            return type.typeName == this.type;
          }),
          price: Number(this.price),
          colors: this.colorsAdd,
          description: this.description,
          warranty: Number(this.warranty),
          manuDate: this.manuDate,
          imageUrl: "imageUrl.test",
        });
        if (this.itemId) {
          this.editProduct(body);
          setTimeout(() => {
            this.restart();
          }, 1000);
          // this.$router.push("/");
          // console.log(body);
        } else {
          this.addProduct(body);
          setTimeout(() => {
            this.restart();
          }, 1000);
          // this.$router.push("/");
          // console.log(body);
        }
      }
    },

    restart() {
      this.brandAdd = "";
      this.name = "";
      this.price = 0;
      this.warranty = 0;
      this.manuDate = "";
      this.type = "";
      this.description = "";
      this.colors.forEach((color) => (color["active"] = false));
      this.previewImage = null;
      this.activeClose = !this.activeClose;
    },

    addProduct(body) {
      fetch(`${this.url}/add`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: body,
      }).catch((error) => console.log(error));
    },
    editProduct(body) {
      fetch(`${this.url}/update`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: body,
      }).catch((error) => console.log(error));
    },
    onFileChange(event) {
      let files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.activeClose = true;
    },

    createImage(file) {
      let reader = new FileReader();
      reader.onload = (event) => {
        this.previewImage = event.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage() {
      this.previewImage = null;
      this.activeClose = !this.activeClose;
    },

    active(active, index) {
      this.colors[index].active = active;
      this.colorsAdd = this.colors
        .filter((color) => {
          return color.active === true;
        })
        .map((color) => {
          return {
            colorId: color.colorId,
            colorName: color.colorName,
            hexColor: color.hexColor,
          };
        });
    },
    async getDataToEdit() {
      if (this.itemId != null) {
        fetch(`${this.url}/${this.itemId}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.brandAdd = data.brand.brandName;
            this.type = data.type.typeName;
            this.name = data.productName;
            this.price = data.price;
            this.description = data.description;
            this.warranty = data.warranty;
            this.manuDate = data.manuDate;
            for (let i = 0; i < this.colors.length; i++) {
              if (
                data.colors.some((color) => {
                  return color.colorId === this.colors[i].colorId;
                })
              ) {
                this.active((this.colors[i].active = true), i);
              }
            }
          })
          .catch((error) => console.log(error));
      } else {
        this.restart();
        this.isLoad = false;
      }
    },
  },
  async created() {
    await fetch("http://localhost:9091/product/list")
      .then((res) => res.json())
      .then(
        (data) =>
          (this.productIds = data.map((pid) => {
            return pid.productId;
          }))
      )
      .catch((error) => console.log(error));

    await fetch("http://localhost:9091/color/list")
      .then((res) => {
        this.isLoad = true;
        return res.json();
      })
      .then((data) => (this.colors = data))
      .then(() => {
        this.colors.forEach((color) => (color["active"] = false));
      })
      .catch((error) => console.log(error));

    await fetch("http://localhost:9091/brand/list")
      .then((res) => res.json())
      .then((data) => (this.brands = data))
      .catch((error) => console.log(error));

    await fetch("http://localhost:9091/type/list")
      .then((res) => {
        this.isLoad = false;
        return res.json();
      })
      .then((data) => (this.types = data))
      .catch((error) => console.log(error));

    await this.getDataToEdit();
  },
};
</script>