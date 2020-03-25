<template>
  <div class="login">
    <!-- Modal -->
    <div
      class="modal fade"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <!-- <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                >Login</a>
              </li>         
            </ul> -->

            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
              >
                <h5 class="text-center">Login Please</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    @keyup.enter="login"
                    v-model="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-primary w-100" @click="login">Login</button>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  name: "login",
  props: {
    msg: String
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      role: null
    };
  },
  methods: {
    login() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          $("#login").modal("hide");

          var role = "";
          let userRef = db
            .collection("profiles")
            .doc(user.user.uid)
            .get()
            .then(doc => {
              if (!doc.exists) {
                console.log("No such document!");
              } else {
                //console.log("Role :", doc.data().role);
                role = doc.data().role;
                //console.log("+>", role);
                let name = doc.data().name
                // console.log('user name: ',name)
                //console.log('email',{name:name,email:this.email,role:role})
                this.$store.commit('currentUser',{name:name,email:this.email,role:role})
                if (role == "user") {
                  console.log("go to user");
                  this.$router.replace("user/profile");
                }else if (role == "admin") {
                  console.log("go to admin");
                  this.$router.replace("admin/overview");
                }
              }
            })
            .catch(err => {
              console.log("Error getting document", err);
            });

          //this.$router.replace("admin");
        })
        .catch(function(error) {
          //Handle Errors here
          let errorMSG = error.message;
          alert("Oops.  " + errorMSG);
          //console.log("Error creating new user:", error);
        });
               
    },
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          $("#login").modal("hide");
          //console.log(user.user.uid);

          // Create our initial doc
          db.collection("profiles")
            .doc(user.user.uid)
            .set({
              name: this.name,
              email:this.email,
              role: "user"
            })
            .then(() => {
              console.log(this.name + " writtent!");
            })
            .catch(error => {
              console.error("Error eriting doc", error);
            });

         // this.$router.replace("admin");
         this.$router.replace("user/profile");
        })
        .catch(function(error) {
          let errorMSG = error.message;
          if (error.code == "auth/weak-password") {
            alert("Oops. Passwors is too weaak");
          } else {
            alert("Oops.  " + errorMSG);
          }
          //console.log("Error creating new user:", error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

// Update the doc without using dot notation. // Notice the map value for
favorites. // db.collection("users").doc("name").update({ // favorites: { //
food: "Ice Cream" // } // }) // .then(function() { // console.log("Frank food
updated"); // });
