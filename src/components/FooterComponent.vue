<template>
  <div class="footer-container">
    <div class="footer-icons">
      <a href="mailto:mircea.gosman@mail.mcgill.com" target="_blank"><EmailSVG class="footer-icon"/></a>
      <a href="https://github.com/Mircea-Gosman" target="_blank"><GithubSVG class="footer-icon center-footer-icon"/></a>
      <a href="https://www.linkedin.com/in/mircea-gosman-14ab08177/" target="_blank"><LinkedInSVG class="footer-icon"/></a>
    </div>
    <div class="footer-signature">Mircea Gosman<br>2022</div>
  </div>
</template>

<script>
import EmailSVG from "@/assets/icons/email.vue";
import GithubSVG from "@/assets/icons/github.vue";
import LinkedInSVG from "@/assets/icons/linkedin.vue";

export default {
  name: "FooterComponent",
  components: {
    EmailSVG,
    GithubSVG,
    LinkedInSVG
  }
}
</script>

<style lang="scss">
.footer-container {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  bottom: 0;
  //background-color: var(--interimBackground);
  padding: 1rem 4rem 1rem 4rem;
  height: auto;
  border-radius: 0 0 0.2rem 0.2rem;
  color: var(--passive-text);
  font-size: 1.4rem;
}
.footer-icons {
  display: inline-block;
}
.footer-icon {
  width: 1.8rem;
  fill: var(--interimBackground);
}
.footer-icon:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.center-footer-icon {
  margin-left: 1rem;
  margin-right: 1rem;
}
.footer-signature {
  font-size: 0.8rem;
  color: var(--text);
}
</style>