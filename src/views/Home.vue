<template>
  <div class="home container bg-white">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div class="row h-100 d-inline-flex p-2">
      <div class="col-sm-12 my-auto">
        <img src="/png/bg1.png" class="img-fluid" alt="ตั้งใจทำงานอีสัส" width="500px" />
        <h1 class="title">Login</h1>
        <a
          class="btn btn-warning btn-login m-2"
          type="submit"
          data-toggle="modal"
          data-target="#login"
        >Login</a>
        <a>
          <button type="button" class="btn btn-info">Info</button>
        </a>
      </div>
      <div class="col">
        <router-link to="/config" tag="button" class="btn btn-danger m-2">To Config</router-link>
      </div>
    </div>
<a href=""></a>
    <login></login>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
export default {
  name: "Home",
  components: { Login }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
.home {
  font-family: "Raleway", sans-serif;
}
.title {
  font-size: 10em;
}
.home{
  height: 100vh;
}
</style>
