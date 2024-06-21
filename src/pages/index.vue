<template>
  <v-container>
    <v-row>
      <section id="home">
        <Home/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="register">
        <Register/>
      </section>
    </v-row>
  </v-container>
</template>

<script>
import Home from '@/components/Home.vue'
import About from '@/components/About.vue';
import Register from '@/components/Register.vue';

export default {

};
</script>

<style scoped lang="scss">

/*
.highlight {
  color: $span;
}

.text-description {
  font-size: 1.2rem;
  color: #333;
}

.card-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.card {
 width: 100%;
 max-width: 300px;
 height: 300px;
 border-radius: 20px;
 background: $white;
 position: relative;
 padding: 1rem;
 border: 2px solid $light-grey;
 transition: 0.5s ease-out;
}


.card-details {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: auto;
  max-height: none;
  gap: 0.5em;
}

.text-body {
  color: $dark-grey;
  font-size: 1rem;
  overflow: hidden;
  white-space: normal;
}

.text-title {
  font-size: 1.3em;
  font-weight: bold;
  overflow: hidden;
  white-space: normal;
  color: $black;
}

.card:hover {
 border-color: $light-blue;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

@media (max-width: 599px) {
  .text-description {
    font-size: 1rem;
  }
  .text-body {
    font-size: 0.7rem;
  }
}

@media (min-width: 1300px) {
  .text-description {
    font-size: 1.75rem;
    margin-top: 1rem;
  }
} */
</style>
