import * as THREE from 'three'

export class ThreeScene extends THREE.Scene {
  public scene: THREE.Scene

  constructor() {
    super()
    this.background = new THREE.Color(0x242635)
  }
}
