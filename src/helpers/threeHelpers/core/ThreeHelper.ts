import {ThreeScene} from './ThreeScene'
import {ThreeCamera} from './ThreeCamera'
import {ThreeControls} from './ThreeControls'
import {ThreeRenderer} from './ThreeRenderer'
import {ThreeGrid} from './ThreeGrid'
import { MAX_SCALE } from './constants/ThreeConstants'


export class ThreeHelper implements IThreeHelper {
  private scene: ThreeScene
  private camera: ThreeCamera
  private renderer: ThreeRenderer
  private controls: ThreeControls
  private grid: ThreeGrid
  private scale: number

  constructor() {
    this.scale = 0.01

    this.scene = new ThreeScene()
    this.camera = new ThreeCamera(window.innerWidth / window.innerHeight)
    this.renderer = new ThreeRenderer({ width: window.innerWidth, height: window.innerHeight })
    this.controls = new ThreeControls(this.camera.camera, this.renderer.renderer.domElement)
    this.grid = new ThreeGrid()

    this.scene.scene.add(this.grid.grid.getGridMesh())
  }

  public animate(): void {
    const animateLoop = () => {
      requestAnimationFrame(animateLoop)
      if (this.scale < MAX_SCALE) {
        this.scale += 0.005
        this.grid.grid.getGridMesh().scale.set(this.scale, this.scale, this.scale)
      }
      this.controls.controls.update()
      this.renderer.renderer.render(this.scene.scene, this.camera.camera)
    }
    animateLoop()
  }
}
