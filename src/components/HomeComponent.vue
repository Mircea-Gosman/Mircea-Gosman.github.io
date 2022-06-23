<template>
  <div class="app-container">
    <div class="container">
      <NavigationComponent @pageJump="gotToPage" :currentPage="getCurrentPage()"/>
      <PresentationComponent @nextPage="nextPage" :copy="page"/>
      <FooterComponent/>
    </div>
  </div>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent';
import PresentationComponent from '@/components/PresentationComponent';
import FooterComponent from '@/components/FooterComponent';
import copy from "@/assets/copy/presentation.json";

export default {
  name: 'HomeComponent',
  components: {
    NavigationComponent,
    PresentationComponent,
    FooterComponent
  },
  data() {
    return {
      index: 0,
      page: copy[0]
    }
  },
  methods: {
    nextPage() {
      if (this.index < copy.length) {
        this.index ++;
        this.page = copy[this.index];
      }
    },
    gotToPage(section) {
      const index = copy.indexOf(copy.find(page => page.meta === section));

      if (index || index === 0) {
        this.index = index;
        this.page = copy[this.index];
      }
    },
    getCurrentPage() {
      return copy[this.index].meta;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    height: 100vh;
    max-width: max(33rem, 100%);
    background-color: var(--background);
    display: block;
  }
  .app-container {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 470px) {
    .app-container {
      width:100vw;
      display: block;
    }
  }
</style>
