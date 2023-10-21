import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SimpleGrid } from './infiniteGridHelper';

export interface IThreeHelper {
    animate: () => void;
  }
  
  export class ThreeHelper implements IThreeHelper {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private controls: OrbitControls;
    private grid: SimpleGrid;
    private scale: number;


    private constructor() {
      this.scale = 0.01;


      this.scene = new THREE.Scene();
      
      
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.set(60,60,60)
      
      
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);
      
 
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true

      // Initialize the InfiniteGridHelper
      this.grid = new SimpleGrid(new THREE.Color('white'), 10, 100);
      this.grid.fade = true;
      this.scene.add(this.grid.getGridMesh());
    }
  


    public animate(): void {
      
      const maxScale = 1;
      const animateLoop = () => {
        requestAnimationFrame(animateLoop);
    
        // Only increase the scale if it's not yet living its max life
        if (this.scale < maxScale) {
          this.scale += 0.005; // or whatever rate you feel is fab enough
          this.grid.getGridMesh().scale.set(this.scale, this.scale, this.scale);
        }
    
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      };
    
      animateLoop();
    }
  
    public static factory(): IThreeHelper {
      const instance = new ThreeHelper();
      return instance;
    }
  }