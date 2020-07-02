<template>
  <div class="login">
    
        <div class="modal fade" id="logi" >
            <div class="modal-dialog" style="width: 500px;">
            <div class="modal-content">
                <div class="modal-header">

                    <a  class="btn btn-outline-success my-2 my-sm-0" data-toggle= "modal" data-target ="#Formulairee">Register</a>
                <h4 class="modal-title" style="margin-left: 100px;">Connectez- vous à votre compte udemy !</h4>              
                <button type="button" class="close" data-dismiss="modal"  style="margin-top: -20px;">
                    <span>&times;</span>
                </button>
                </div>
                <div class="modal-body row">
                <form class="col" action = "/login" method="POST">
                        <div class="form-group row">
                                <div class="col-sm-10" style="margin-left: 50px;">
                                <input type="email" class="form-control" id="colFormLabel" placeholder="Email"  name="Emaail">
                                </div>
                            </div>
                    <div class="form-group row">
                    <div class="col-sm-10" style="margin-left: 50px;">
                        <input type="password" class="form-control form-control-lg" id="colFormLabelLg" placeholder="password" name="password">
                    </div>
                    </div>
                    <div style="text-align: center;">
                <button type="submit" class="btn btn-primary" style="text-align: center;">Connexion</button>
                </div>
                </form>
                </div>
            </div>
            </div>
        </div>

        <div class="modal fade" id="login">
		<div class="modal-dialog">
		  <div class="modal-content">
			<div class="modal-header">
			  <h4 class="modal-title" style="margin-left: 100px;"> Inscrivez-vous et commencez par apprendre !</h4>              
			  <button type="button" class="close" data-dismiss="modal" style="margin-top: -20px;" >
				<span>&times;</span>
			  </button>
			</div>
			<div class="modal-body row">
			  <form class="col" >
					
							<div class="form-group row">
							  <div class="col-sm-10" style="margin-left: 50px;">
								<input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Nom" v-model="nom">
							  </div>
							</div>
							<div class="form-group row">
									<div class="col-sm-10" style="margin-left: 50px;">
									  <input type="email" class="form-control" id="colFormLabel" placeholder="Email"  v-model="email">
									</div>
								  </div>
								  <div class="form-group row">
										<div class="col-sm-10" style="margin-left: 50px;">
										  <input type="password" class="form-control" id="colFormLabel" placeholder="password"  v-model="password">
										</div>
									  </div>
							
							<div style="text-align: center;">
				<button  class="btn btn-primary" style="text-align: center;" @click="register">S'inscrire</button>
			</div>
			  </form>
			</div>
		  </div>
		</div>
	  </div>
  </div>
</template>

<script>
//import {fb} from '../firebase'
export default {
  name: "Login",
  props: {
    msg: String
  },
 data ()
  {
       return {
      nom :null,
      email:null,
      password:null
   }
 },
 methods:
 {
     register()
            {
                  fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                   .catch(function(error) {
                  // Handle Errors here.
                      var errorCode = error.code;
                      var errorMessage = error.message;
                      if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                      } else {
                        alert(errorMessage);
                      }
                      console.log(error);
                    });
            }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
