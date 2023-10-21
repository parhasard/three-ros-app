<template>
  <div>
    <canvas id="canvas"
    ref="canvas"
  ></canvas>

  </div>
</template>

<script lang="ts">
import { ref, onMounted,  defineComponent } from 'vue'
import { IThreeHelper } from '@/helpers/threeHelpers/interfaces/IThreeHelper'
import { ThreeHelper } from '@/helpers/threeHelpers/core/ThreeHelper'
import { EnhancedThreeHelper } from '@/helpers/threeHelpers/core/EnhancedThreeHelper.ts'

export default defineComponent({
  setup() {
    const canvas = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      if (canvas.value) {
        const baseThreeHelper = new ThreeHelper(canvas.value);
        const decoratedThreeHelper: IThreeHelper = new EnhancedThreeHelper(baseThreeHelper);
        decoratedThreeHelper.animate();
      }
    });

    return {
      canvas
    };
  }
});
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
