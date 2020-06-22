<template>
  <div class="home">
     <Navbar> </Navbar>
     
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
//import Admin from "@/components/Admin.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
