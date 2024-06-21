<template>
  <v-app-bar app>
    <v-img src="@/assets/cativa-logo.png" max-height="40" contain  />
    <v-spacer ></v-spacer>
    <v-btn text @click="scrollToSection('home')">Inicio</v-btn>
    <v-btn text @click="scrollToSection('about')">Sobre</v-btn>
    <v-btn text @click="scrollToSection('register')">Cadastro</v-btn>
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
    scrollToSection(sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>

</style>
