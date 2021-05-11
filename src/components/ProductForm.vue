<template>
<div class="">
  <div class="mt-20 lg:mt-24" v-show="!isLoad">
    <form @submit.prevent="submitForm">
      <div class="text-left flex flex-col">
        
        <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
          <p>PRODUCT NAME</p>
            <input v-model.trim="name" class="input-css" id="" type="text" placeholder="product name" required :class="{ 'ring ring-red-400': invalid_name }" />
            <span v-if="invalid_name" class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 ">Please input name</span>
        </div>
        <br>

        <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
          <p>MENUFACTURER DATE</p>
            <input type="date" class="input-css" placeholder="menufacturer date" v-model="menudate" required :class="{ 'ring ring-red-400': invalid_date }" />
            <span v-if="invalid_date" class="absolute p-3 font-mono text-red-500 left-7 -bottom-1">Please input date</span>
        </div>
        <br>

        <div class="px-3 mb-6 lg:w-full md:mb-0 relative mx-0">
          <p>PRODUCT DESCRIPTION</p>
          <textarea class="input-css h-40" id="description" placeholder="description" v-model="description" type="text" />
        </div>
        <br>

        <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative">
          <p>CAPACITY</p>
            <input v-model="capacity" class="input-css" id="capacity" type="number" placeholder="capacity" min="1" max="99999" required :class="{ 'ring ring-red-400': invalid_price }" />
            <span v-if="invalid_price" class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 ">Please input price</span>
        </div>
        <br>

        <div class="relative px-3 mb-6 lg:w-full md:mb-0">
          <p>SELECT BRAND</p>
            <select class="input-css" id="addBrand" v-model="addBrand" required :class="{ 'ring ring-red-400': invalid_brand }">

              <option  v-for="brand in brands" :key="brand.brandid" :value="brand.brandid" >{{brand.brandname}}</option>

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
          <div class="relative">  
            <img :src="previewImage" alt="Preview Image" class="max-h-80" />
            <div class="absolute z-10 rounded shadow-md cursor-pointer btn" @click="removeImage()">close</div>
          </div>
        </div>
        <br>

        <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative">
         <p>COLOR</p>
         <div class="grid grid-cols-6">
            <div v-for="(color , index) in colors"
            :key="color.colorid" 
            >
            <input type="checkbox" id="0" name="newColors" v-model="newColors[index]" class="w-4 h-4 m-2" />
            <div class="rounded-full w-5 h-5 m-1 border border-gray-500" :style="{backgroundColor : color.colorcode}">
            </div>
            
          </div>
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
          <label class="label-css">WARRANTY</label>
            <div class="input-css">
              <div class="flex items-center mr-7">
                <input type="radio" id="0" name="warranty" v-model="warranty" value="0" class="w-4 h-5 mr-2" />
                <label for="0">none</label>
              </div>
              <div class="flex items-center mr-7">
                <input type="radio" id="1" name="warranty" v-model="warranty" value="1" class="w-4 h-5 mr-2" />
                <label for="1">1 year</label>
              </div>
              <div class="flex items-center mr-7">
                <input type="radio" id="2" name="warranty" v-model="warranty" value="2" class="w-4 h-5 mr-2" />
                <label for="2">2 year</label>
              </div>
              <div class="flex items-center mr-7">
                <input type="radio" id="3" name="warranty" v-model="warranty" value="2" class="w-4 h-5 mr-2" />
                <label for="3">3 year</label>
              </div>
            </div>
        </div>
        <br>

      </div>
      <input @click="validating" type="submit" value="SAVE" class="absolute z-10 rounded shadow-md cursor-pointer btn left-48 bottom-5" />
    </form>
    </div>
  </div>

    <div v-show="isLoad" class="h-screen w-full flex items-center justify-center">
        <i class="material-icons text-4xl animate-pulse" v-show="isLoad"> loading . .</i>
    </div>
</template>

<style>
input[type=text] , input[type=number] , input[type=date] , textarea{
  width: 500px;
  height: 30px;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

select {
  width: 300px;
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
      addBrand: Number,
      name: "",
      price: 0,
      warranty: 0,
      menudate: "",
      description: "",
      capacity: 0 ,
      image: "",
      previewImage: null,
      activeClose: true,
      colors: [],
      newColors: new Array(12),
      invalid_brand: false,
      invalid_name: false,
      invalid_price: false,
      invalid_Color: false,
      invalid_date: false,
      invalid_img: false,
      invalid_capacity: false,
      colorparam: "",
      brandid: 0,
      isLoad: Boolean,
      reqparam: "",
      url: "",
    };
  },
  props: {
    id: {
      type: String,
    },
  },
  methods: {
    validating() {
      this.invalid_brand = this.addBrand === 0 ? true : false;
      this.invalid_name = this.name === "" ? true : false;
      this.invalid_price = this.price === 0 ? true : false;
      this.invalid_Color = this.newColors.length === 0 ? true : false;
      this.invalid_date = this.menudate === "" ? true : false;
      this.invalid_img = this.previewImage === null ? true : false;
      this.invalid_capacity = this.capacity === 0 ? true : false;
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
        this.invalid_Color = false;
      }, 5000);
      setTimeout(() => {
        this.invalid_date = false;
      }, 5000);
      setTimeout(() => {
        this.invalid_img = false;
      }, 5000);
      setTimeout(() => {
      this.invalid_capacity = false;
      }, 5000);
    },

    submitForm() {
      if (
        this.addBrand !== 0 &&
        this.name !== "" &&
        this.price !== 0 &&
        this.newColors.length !== 0 &&
        this.menudate !== "" &&
        this.previewImage !== null &&
        this.capacity !== 0
      ) {

        this.reqparam = `productname=${this.name}&price=${this.price}&warranty=${this.warranty}&menufacturrerdate=${this.menudate}&capacity=${this.capacity}&description=${this.description}&images=${this.image}&brandid=${this.addBrand}`;

        if (this.id) {
          this.editProduct();
        } else {
          this.createNewProduct();
        }
      }

      let newcolorid = [];
      for(let i=0 ; i<this.colors.length ; i++) {
        if(this.newColors[i] == true) {
          newcolorid.push(this.colors[i].colorid)

          this.reqparam += `&colorid=${this.colors[i].colorid}`;
        }
      }

      this.url = `http://104.215.139.17:3000/add?${this.reqparam}`;

    },

    editProduct() { // *****
      fetch("http://104.215.139.17:3000/edit/" + this.id , {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }).catch((error) => console.log(error));
    },

    onFileChange(event) {
      let files = event.target.files || event.dataTransfer.files;
      this.image = files[0].name;
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

    async getDataToEdit() { //*****
      if (this.productid != null) {
        fetch(`http://104.215.139.17:3000/show/${this.productid}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.addBrand = data.brand.brandName;
            this.name = data.productName;
            this.price = data.price;
            this.description = data.description;
            this.warranty = data.warranty;
            this.menudate = data.menudate;
            this.capacity = data.capacity;
          })
          .catch((error) => console.log(error));
      } else {
        this.isLoad = false;
      }
    },

    createNewProduct() {
      fetch(`http://104.215.139.17:3000/upload?images=`+this.image , {
      method: "POST",
      })
      fetch( this.url , {
      method: "POST",
      }).catch((error) => console.log(error));

    },
    async fetchProducts() {
      try {
        const res = await fetch("http://104.215.139.17:3000/show");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchColors() {
      try {
        const res = await fetch("http://104.215.139.17:3000/showallcolor");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },

     async fetchBrands() {
      try {
        const res = await fetch("http://104.215.139.17:3000/showbrand");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    this.products = await this.fetchProducts();
    this.colors = await this.fetchColors();
    this.brands = await this.fetchBrands();

    await this.getDataToEdit();
  },
};
</script>