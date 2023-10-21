import * as THREE from 'three'

export class ThreeScene {
  public scene: THREE.Scene

  constructor() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x242635)
  }
}
