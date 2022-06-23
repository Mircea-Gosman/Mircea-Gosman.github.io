<template>
  <div class="nav-container">
    <a @click="() => select('Projects')" :class="'nav-element active-'+activeSection.Projects">Projects</a>
    <a @click="() => select('Internships')" :class="'nav-element center-nav-element active-'+activeSection.Internships">Internships</a>
    <a @click="() => select('Contact')" :class="'nav-element active-'+activeSection.Contact">Contact</a>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  props: {
    currentPage: String
  },
  data() {
    return {
      activeSection: {
        Projects: false,
        Internships: false,
        Contact: false
      }
    }
  },
  methods: {
    select(section) {

      for (const [key] of Object.entries(this.activeSection)) {
        this.activeSection[key] = key === section;

      }

      this.$emit('pageJump', section);
    }
  },
  watch: {
    currentPage: function (newPage) { this.select(newPage) }
  }
}
</script>

<style lang="scss">
  .nav-container {
    position:sticky;
    background-color: var(--interimBackground);
    padding: 1rem 3rem 1rem 3rem;
    height: auto;
    border-radius: 0 0 0.2rem 0.2rem;
    color: var(--passive-text);
    font-size: 1.2rem;
  }
  .nav-element {
    padding: 0.3rem 1rem;
  }
  .nav-element:hover {
    cursor: pointer;
    font-weight: 400;
  }
  .center-nav-element {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .active-true {
    background-color: var(--action);
    color: var(--interimBackground);
    font-weight: 700;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 470px) {
    .nav-container {
      padding: 1rem 3vw 1rem 3vw;
    }
    .center-nav-element {
      margin-left: 1vw;
      margin-right: 1vw;
    }
  }
</style>