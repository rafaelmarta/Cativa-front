<template>
  <v-app-bar app>
    <v-img src="@/assets/cativa-logo.png" max-height="40" contain  />
    <v-spacer ></v-spacer>
    <v-btn text >Inicio</v-btn>
    <v-btn text >Sobre</v-btn>
    <v-btn text >Cadastro</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>

</style>
