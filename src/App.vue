<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script> 
import home from './Pages/home.vue';
import auth from './Pages/auth.vue';

 
export default {
  name:'App',
  data() {
    return {
      name: '',
    }
  },
}
</script>

