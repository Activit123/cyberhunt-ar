import React from "react";
import "aframe"; // optional if loaded via index.html
// DON'T import AR.js here — included via index.html as above

const ARView = () => {
  return (
    <a-scene
      embedded
      vr-mode-ui="enabled: false"
      arjs='sourceType: webcam; debugUIEnabled: false;'
      style={{ width: "100%", height: "100vh" }}
    >
      {/* Marker: try the built-in "hiro" marker */}
      <a-marker preset="hiro">
        {/* Primitive for debugging — switch to your gltf once this appears */}
        <a-box position="0 0.25 0" scale="0.5 0.5 0.5" rotation="0 45 0"></a-box>

        {/* Example: your glTF (uncomment to test after box works)
        <a-entity
          gltf-model="url(/assets/cod.glb)"
          scale="0.1 0.1 0.1"
          position="0 0 0"
        ></a-entity>
        */}
      </a-marker>

      {/* Fallback markerless content or camera entity */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARView;
