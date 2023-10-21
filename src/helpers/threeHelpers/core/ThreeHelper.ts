import { ThreeScene } from './ThreeScene'
import { ThreeCamera } from './ThreeCamera'
import { ThreeControls } from './ThreeControls'
import { ThreeRenderer } from './ThreeRenderer'
import { ThreeGrid } from './ThreeGrid'
import { ThreeLights } from './ThreeLights'
import { MAX_SCALE } from './constants/ThreeConstants'

export class ThreeHelper implements IThreeHelper {
  private scene: ThreeScene
  private camera: ThreeCamera
  private renderer: ThreeRenderer
  private controls: ThreeControls
  private grid: ThreeGrid
  private scale: number

  constructor(private canvas?: HTMLCanvasElement) {
    this.scale = 0.01
    this.scene = new ThreeScene()
    this.camera = new ThreeCamera(window.innerWidth / window.innerHeight)
    this.renderer = new ThreeRenderer(this.canvas)
    this.controls = new ThreeControls(this.camera.camera, this.renderer.renderer.domElement)
    this.grid = new ThreeGrid()
    this.lights = ThreeLights.createLights();

    this.scene.scene.add(this.grid.grid.getGridMesh())
    this.lights.forEach(light => this.scene.scene.add(light))
    this.setupWindowResize(this.camera, this.renderer)
  }

  // listen to window size changes
  private setupWindowResize({ camera }: ThreeCamera, { renderer }: ThreeRenderer): void {
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    })
  }

  public animate(): void {
    const animateLoop = () => {
      requestAnimationFrame(animateLoop)

      // animate grid expansion
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
