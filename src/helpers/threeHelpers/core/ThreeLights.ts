import { DirectionalLight, AmbientLight, Light } from 'three';

export class ThreeLights {
  static createLights(): Light[] {
    const directionalLight1 = new DirectionalLight(0xffeeff, 0.8);
    directionalLight1.position.set(1, 1, 1);

    const directionalLight2 = new DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(-1, 0.5, -1);

    const ambientLight = new AmbientLight(0xffffee, 0.25);

    return [directionalLight1, directionalLight2, ambientLight];
  }
}