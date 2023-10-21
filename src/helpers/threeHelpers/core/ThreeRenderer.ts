import * as THREE from 'three'

export class ThreeRenderer {
  public renderer: THREE.WebGLRenderer

  constructor(size: { width: number; height: number }) {
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(size.width, size.height)
    document.body.appendChild(this.renderer.domElement)
  }
}
