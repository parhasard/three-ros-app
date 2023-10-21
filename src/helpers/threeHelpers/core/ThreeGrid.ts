import * as THREE from 'three'
import { SimpleGrid } from '@/helpers/threeHelpers/utils/InfiniteGridHelper'

export class ThreeGrid {
  public grid: SimpleGrid

  constructor() {
    this.grid = new SimpleGrid(new THREE.Color(0xDEE2E6), 10, 100)
    this.grid.fade = true
  }
}
