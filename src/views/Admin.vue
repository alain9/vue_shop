<template>
  <div class="admin">
      <Admin> </Admin>
      
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Admin from "@/components/Admin.vue";

export default {
  name: "admin",
  components: {
    Admin
  }
};
</script>
