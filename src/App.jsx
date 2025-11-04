// src/App.js - CU CĂI CORECTE

import React, { useEffect } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

function App() {
  const secretCode = 'VIITORUL_ESTE_AICI';
  
  // Această variabilă va fi '/' local și '/cyberhunt-ar/' pe GitHub Pages
  const baseUrl = import.meta.env.BASE_URL;

  const handleMarkerFound = () => {
    if (window.flutter_inappwebview) {
      window.flutter_inappwebview.callHandler('arCodeHandler', secretCode);
    } else {
      alert(`Marker găsit! Codul este: ${secretCode}`);
    }
  };

  return (
    <div style={{ margin: 0, overflow: 'hidden' }}>
      <Scene
        vr-mode-ui="enabled: false"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
        <a-marker 
          type="pattern" 
          // Am adăugat baseUrl pentru a asigura calea corectă
          url={`${baseUrl}marker.patt`}
          onMarkerFound={handleMarkerFound}
        >
          <Entity
            // Am adăugat baseUrl și aici
            gltf-model={`url(${baseUrl}cod.glb)`}
            scale="0.5 0.5 0.5"
            position="0 0.5 0"
            rotation="-90 0 0"
          />
        </a-marker>
        <a-entity camera></a-entity>
      </Scene>
    </div>
  );
}

export default App;