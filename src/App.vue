<template>
  <navbar-component></navbar-component>
  <router-view></router-view>

</template>

<script>
/* eslint-disable */
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  components: {
    NavbarComponent,
  },

  methods: {
    pageCreated(pageObj){
      this.pages.push(pageObj);
    }
  }
};
</script>