import * as THREE from 'three'

export class ThreeScene {
  public scene: THREE.Scene

  constructor() {
    this.scene = new THREE.Scene()
    this.setBackground()
  }

  add(mesh: THREE.Mesh) {
    this.scene.add(mesh);
  }

  setBackground(color: THREE.Color = new THREE.Color(0x242635)) {
    this.scene.background = color;
  }
}
