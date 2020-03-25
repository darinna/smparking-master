<template>
  <div class="config">
    <div class="page-wrapper d-flex align-items-stretch">
      <Sidebar />

      <div class="container-fluid">
        <div class="page-content p-4 p-md-5 pt-5">
          <Navbar />
          <div class=" bg-light">
            <h1 class="display-2">Config</h1>

            <main class="page-content pt-2">
              <router-view></router-view>
            </main>

            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-header">Zone A</div>
                  <div class="card-body ">
                    <ul class="spot-list spot-list-vertical p-0 my-1 mx-0">
                      
                      <a href="#"><li class="spot"></li></a>
                      <a href="#"><li class="spot"></li></a>
                      <a href="#"><li class="spot"></li></a>
                      <a href="#"><li class="spot"></li></a>
                      <a href="#"><li class="spot"></li></a>
                      
                     
                    </ul>
                    <ul class="spot-list spot-list-vertical p-0 my-1 mx-0">
                      <a href="#"><li class="spot"></li></a>
                      <a href="#"><li class="spot"></li></a>
                      <a href="#"><li class="spot"></li></a>
                      <a href="#"><li class="spot"></li></a>
                      <a href="#"><li class="spot"></li></a>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageNavi />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import PageNavi from "@/components/PageNavi";
export default {
  components: {
    Navbar,
    Sidebar,
    PageNavi
  }
};
</script>
<style lang="scss">
.spot-list {
  list-style-type: none;
  margin: 0;
  float: left;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.spot-list li {
  float: right;
  width: 0.5em;
  height: 1em;
  margin: 0.1em;
  background-color: rgb(163, 163, 163);
}
.spot-list-vertical {
  transform: rotate(-90deg);
}
</style>
