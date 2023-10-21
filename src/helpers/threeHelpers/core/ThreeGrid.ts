import * as THREE from 'three'
import { SimpleGrid } from '@/helpers/threeHelpers/utils/InfiniteGridHelper'

export class ThreeGrid extends SimpleGrid {
  constructor() {
    super(new THREE.Color(0xDEE2E6), 10, 100);
    this.fade = true;
  }
}