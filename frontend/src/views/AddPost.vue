<template>
  <div>
    <section class="wrapper container">
      <div class="title">Add Product</div>
      <form
        method="POST"
        enctype="multipart/form-data"
        class="form"
        @submit.prevent="submitForm"
      >
        <div class="input_field">
          <label>Title</label>
          <input type="text" class="input" name="title" v-model="post.title" />
        </div>
        <div class="input_field">
          <label>Content</label>
          <input
            type="text"
            class="input"
            name="content"
            v-model="post.content"
          />
        </div>
        <div class="input_field">
          <label>Image</label>
          <input
            type="file"
            id="file"
            ref="file"
            @change="selectFile"
            class="input"
            name="image"
          />
        </div>
        <div>
          <img class="img-fluid mb-3" v-if="url" :src="url" />
        </div>
        <div class="input_field">
          <label>Rating</label>
          <div class="costum_select">
            <select v-model="post.rating" name="rating" id="">
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div class="input_field">
          <label>Category</label>
          <input
            type="text"
            class="input"
            name="category"
            v-model="post.category"
          />
        </div>
        <div class="input_field">
          <label>Price</label>
          <input type="text" class="input" name="price" v-model="post.price" />
        </div>
        <div class="input_field">
          <input type="submit" value="Submit" class="btn"/>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { createPost } from "../api/posts";
export default {
  name: "Add-post",
  data() {
    return {
      post: {
        title: "",
        content: "",
        image: "",
        rating: "",
        category: "",
        price: "",
      },
      image: "",
      url: null
    };
  },
  methods: {
    selectFile(e) {
      this.image = this.$refs.file.files[0];
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("content", this.post.content);
      formData.append("rating", this.post.rating);
      formData.append("category", this.post.category);
      formData.append("price", this.post.price);
      const response = await createPost(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      this.$router.push({
        name: "Home",
        params: { message: response.message },
      });
    },
  },
};
</script>


<style>
.wrapper {
  margin-top: 140px;
  max-width: 800px !important;
  width: 100%;
  background: #eeeded;
  padding: 30px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.125);
}

.wrapper .title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #313131;
  text-transform: uppercase;
  text-align: center;
}

.wrapper .form {
  width: 100%;
}

.wrapper .form .input_field {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.wrapper .form .input_field label {
  width: 100px;
  color: #757575;
  margin-right: 10px;
  font-size: 14px;
}

.wrapper .form .input_field .input {
  width: 100%;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 3s ease;
}

.wrapper .form .input_field .costum_select {
  position: relative;
  width: 100%;
  height: 37px;
}

.wrapper .form .input_field .costum_select select {
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #d5dbd9;
  width: 100%;
  height: 100%;
  padding: 8px 10px;
  border-radius: 3px;
  outline: none;
}

.wrapper .form .input_field .costum_select select:before {
  content: "";
  position: absolute;
  top: 12;
  right: 10;
  border: 8px solid;
  border-color: black;
}

.wrapper .form .input_field:focus,
.wrapper .form .input_field .input:focus,
.wrapper .form .input_field select:focus {
  border: 1px solid #181817;
}

.wrapper .form .input_field .btn {
  width: 100%;
  padding: 8px 10px;
  font-size: 15px;
  border: 0;
  background: #b6b5b5;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
}

.wrapper .form .input_field:last-child {
  margin-bottom: 0;
}

.wrapper .form .input_field .btn:hover {
  background: #9e9e9e;
}

body > div > div > section > form > div:nth-child(4) > img {
  min-width: 100%;
  object-fit: cover;
  min-height: 100%;
}

@media (max-width: 420px) {
  .wrapper .form .input_field {
    flex-direction: column;
    align-items: flex-start;
  }

  .wrapper .form .input_field label {
    margin-bottom: 5px;
  }
}
</style>