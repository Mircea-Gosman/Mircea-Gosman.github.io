<template>
  <div class="presentation-container">
    <h1 class="presentation-meta" v-if="copy.meta">{{ copy.meta }}</h1>
    <transition name="fade">
      <h2 class="presentation-title" v-if="copy.title" @click="openLinks()">{{ copy.title }}
        <LinkSVG v-if="copy.links" class="linkSVG"/>
      </h2>
    </transition >
    <p class="presentation-hook" v-if="copy.hook">{{ copy.hook }}</p>
    <p class="presentation-body" v-if="copy.body">{{ copy.body }}</p>
    <transition name="fade" mode="out-in">
      <p class="presentation-postScriptum" v-if="copy.postScriptum">{{ copy.postScriptum }}</p>
    </transition >
    <transition name="fadeBtn" mode="in-out">
      <div class="presentation-button" @click="this.$emit('nextPage')" v-if="copy.meta !== 'Contact'">
        <ArrowSVG class="presentation-button-svg"/>
      </div>
    </transition>
  </div>
</template>

<script>
import ArrowSVG from "@/assets/icons/arrow.vue";
import LinkSVG from "@/assets/icons/link";

export default {
  name: "PresentationComponent",
  components: {
    ArrowSVG,
    LinkSVG
  },
  props: {
    copy: Object
  },
  methods: {
    openLinks() {
      this.copy.links.forEach(link => window.open(link, '_blank'))
    }
  }
}
</script>

<style lang="scss">
.fadeBtn-enter-active,
.fadeBtn-leave-active {
  transition: opacity 1s ease;
}

.fadeBtn-enter-from,
.fadeBtn-leave-to {
  opacity: 0;
}
.fade-enter-active{
  transition-delay: 0.25s;
  transition: opacity 1s ease;
}

.fade-enter-from {
  opacity: 0;
}

.presentation-container {
    text-align: center;
    max-width: 22rem;
    margin-left: auto;
    margin-right: auto;
    color: var(--text);
  }
  .presentation-meta {
    margin-top: 20vh;
    margin-bottom: 6vh;
    font-weight: 600;
  }
  .presentation-title {
    font-weight: 700;
    font-size: 1.2rem;
    background-color: var(--action);
    width: fit-content;
    padding: 0.5rem 1rem;
    color: var(--interimBackground);
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .presentation-title:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  .linkSVG {
    height: 1.3rem;
    margin-left: 0.5vw;
  }
  .presentation-hook {
    font-weight: 500;
    line-height: 2rem;
    margin-top: 4vh;
    margin-bottom: 2.5vh;
    font-style: italic;
  }
  .presentation-body {
    font-weight: 500;
    line-height: 2rem;
  }
  .presentation-postScriptum {
    font-weight: 300;
    font-style: italic;
    line-height: 2rem;
    margin-top: 7vh;
    padding: 0.4rem;
    border: #585555 solid 0.1rem;
  }
  .presentation-button {
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    width: 4rem;
    height: 4rem;
    background-color: var(--action);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .presentation-button:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  .presentation-button-svg {
    margin:auto;
    width: 45%;
    transform: translateY(0.2rem);
  }

  @media only screen and (max-width: 470px) {
    .presentation-meta {
      margin-top: 10vh;
    }
  }
</style>