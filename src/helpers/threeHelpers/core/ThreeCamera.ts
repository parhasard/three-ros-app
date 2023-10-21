import * as THREE from 'three'
import { FOV, NEAR, FAR } from './constants/ThreeConstants'

export class ThreeCamera {
  public camera: THREE.PerspectiveCamera

  constructor(aspectRatio: number) {
    this.camera = new THREE.PerspectiveCamera(FOV, aspectRatio, NEAR, FAR)
    this.camera.position.set(60, 60, 60)
  }
}
