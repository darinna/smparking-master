<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <i class="fas fa-globe-asia mr-2"></i>
      <a class="navbar-brand" href="#">
        <!-- <img
          src="/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
        />-->
        SMparking
      </a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">User Name</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Edit</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Setting</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  methods: {}
};
</script>
<style lang="scss">
@import "./src/assets/navbar.scss";

</style>