<template>
  <div>
    <canvas id="canvas" ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { IThreeHelper } from '@/helpers/threeHelpers/interfaces/IThreeHelper'
import { ThreeHelper } from '@/helpers/threeHelpers/core/ThreeHelper'
import { EnhancedThreeHelper } from '@/helpers/threeHelpers/core/EnhancedThreeHelper'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (canvas.value) {
    const baseThreeHelper = new ThreeHelper(canvas.value)
    const decoratedThreeHelper: IThreeHelper = new EnhancedThreeHelper(baseThreeHelper)
    decoratedThreeHelper.animate()
  }
})
</script>

<style scoped>
#canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  outline: none;
}
</style>
