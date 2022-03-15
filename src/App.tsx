import {
  OrbitControls,
  PerspectiveCamera,
  RoundedBox
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import "./styles.css";
import { SteeringEntity } from "./ThreeSteer";

export const loadScript = (src: string) =>
  new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.addEventListener("load", resolve);
    script.addEventListener("error", reject);
    script.src = src;
    document.body.appendChild(script);
  });

export default function App() {
  const boxRef = useRef();

  useEffect(() => {
    const entity = new SteeringEntity(boxRef.current);
    console.log("THREE steer", SteeringEntity, boxRef.current, entity);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 2]} />
        <OrbitControls
          // maxAzimuthAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          // minAzimuthAngle={-Math.PI / 4}
          minPolarAngle={0}
          // target={new Vector3(experience.camera['3d'].lookAt[0], experience.camera['3d'].lookAt[1], experience.camera['3d'].lookAt[2])}
        />
        <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4} ref={boxRef}>
          <meshPhongMaterial attach="material" color="#f3f3f3" />
        </RoundedBox>
      </Canvas>
    </div>
  );
}
