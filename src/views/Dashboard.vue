<template>
<div class="background">
  <h1>SMpaking</h1>

  <div class="container">
    <div class="row">
      <div class="col">
          <b-card
            title="1st Floor"
            img-alt="Image"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
          <b-card-text class="floor-num">Available 100</b-card-text>
          </b-card>
          <b-card
            title="2nd Floor"
            img-alt="Image"
            
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
          <b-card-text class="floor-num">Available 100</b-card-text>
          </b-card>

          <b-card
            title="3rd Floor"
            img-alt="Image"
       
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text class="floor-num">Available 150</b-card-text>
          </b-card>

          <b-card
            title="4th Floor"
            img-alt="Image"
           
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text class="floor-num">Available 150</b-card-text>
          </b-card>
          </div>

          <div class="col">
          <b-card 
            title="Recommend"
            img-alt="Image"
            
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text class="recomend-font">A1</b-card-text>
          </b-card>

          <b-card
            title="Available Total"
            img-alt="Image"
           
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text class="floor-num">150</b-card-text>
          </b-card>
          
        </div>

    </div>
         
   </div>
      <div>
        <a
          class="btn btn-warning  "
          type="submit"
          data-toggle="modal"
          data-target="#login"
        >Login</a><login></login>
        
        
        <router-link to="/config" tag="button" class="btn btn-danger ">To Config</router-link>
     
      </div>  
        
      
</div>
 

</template>



<script>
import Login from "@/components/Login.vue";

export default {

  name: "Dashboard",
  components: { Login }
};
 
  // status: {
  //   recommend: A1,
  //   goodFloor: 1,
  //   totalAll: 200
  // }

</script>

<style scoped>
.recomend-font {
  font-size: 150px;
}
.floor-num {
  font-size: 25px;
  
}
.background {
  
  position: relative;
  /* margin: auto; */
  background-image: url(/png/parking2.jpg);
  /* Full height */
  height: 100%;
  padding: 110px;
  
  /* Center and scale the image nicely */
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;
  /* opacity: 0.65; */
  /* filter: brightness(80%); */
  
}
.container{
    /* display: flex; */
    
    align-items: center;
    justify-content: center;
    
    
}
.col {
  
  margin-left: 5rem;
  margin-right: auto;
 
}
/* .row {
  margin-top: 0rem;
} */

/* .custom-btn{
  padding:0.5em 2.5em;
  font-size: 25px;
 
} */
.mb-2 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  /* margin-left: 10rem; */
  /* margin-right: 0rem; */
}
.btn {
  margin-top: 50px;
  margin-right: 3rem;
  margin-left: 3rem;
  padding:0.5em 2.5em;
  font-size: 25px;
}
h1 {
  text-align: left;
  color: beige;
}
</style>