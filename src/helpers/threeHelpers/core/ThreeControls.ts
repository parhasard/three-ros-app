import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export class ThreeControls {
  public controls: OrbitControls

  constructor(camera: THREE.PerspectiveCamera, element: HTMLElement) {
    this.controls = new OrbitControls(camera, element)
    this.controls.enableDamping = true
  }
}
