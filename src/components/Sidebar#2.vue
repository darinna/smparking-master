<template>
  <div>
    <nav id="sidebar">
        <div class="custom-menu">
<button type="button" id="sidebarCollapse" class="btn btn-primary">
<i class="fa fa-bars"></i>
<span class="sr-only">Toggle Menu</span>
</button>
</div>
      <div class="sidebar-header">
          <div>LOGO</div>
        <h3>SM Parking</h3>
      </div>

      <ul class="list-unstyled components">
        <p>Dummy Heading</p>
        <li class="active">
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Home</a>
          <ul class="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Pages</a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <ul class="list-unstyled CTAs">
        <li>
          <a
            href="https://bootstrapious.com/tutorial/files/sidebar.zip"
            class="download"
          >Download source</a>
        </li>
        <li>
          <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Sidebar"
};
</script>
<style lang="scss">
@import "./src/assets/sidebar.scss";
</style>