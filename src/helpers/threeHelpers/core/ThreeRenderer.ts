import * as THREE from 'three'

export class ThreeRenderer {
  public renderer: THREE.WebGLRenderer

  constructor(canvas?: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)
  }
}
