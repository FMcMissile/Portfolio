declare module "@mkkellogg/gaussian-splats-3d" {
  export interface ViewerOptions {
    rootElement?: HTMLElement;
    cameraUp?: number[];
    initialCameraPosition?: number[];
    initialCameraLookAt?: number[];
    selfDrivenMode?: boolean;
    useBuiltInControls?: boolean;
    sharedMemoryForWorkers?: boolean;
    antialiased?: boolean;
  }

  export interface AddSplatSceneOptions {
    showLoadingUI?: boolean;
    progressiveLoad?: boolean;
    splatAlphaRemovalThreshold?: number;
    position?: number[];
    rotation?: number[];
    scale?: number[];
  }

  export class Viewer {
    constructor(options?: ViewerOptions);
    addSplatScene(path: string, options?: AddSplatSceneOptions): Promise<void>;
    start(): void;
    dispose(): void;
  }
}
