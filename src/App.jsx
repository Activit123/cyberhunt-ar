// src/App.js

import React from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

function App() {
  // Codul secret pe care vrei să-l trimiți înapoi la Flutter
  const secretCode = 'VIITORUL_ESTE_AICI';

  // Funcția care este apelată când markerul este găsit
  const handleMarkerFound = () => {
    console.log('Marker găsit! Se trimite codul către Flutter:', secretCode);

    // Această verificare asigură că funcția este apelată doar când
    // aplicația rulează în interiorul WebView-ului din Flutter.
    if (window.flutter_inappwebview) {
      window.flutter_inappwebview.callHandler('arCodeHandler', secretCode);
    } else {
      // Alertă pentru testare în browser normal
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
        {/* Definim markerul. URL-ul este relativ la folderul 'public' */}
        <a-marker 
          type="pattern" 
          url="marker.patt" 
          onMarkerFound={handleMarkerFound}
        >
          {/* Acesta este modelul 3D care va apărea peste marker */}
          <Entity
            gltf-model="url(cod.glb)"
            scale="0.5 0.5 0.5"
            position="0 0.5 0" // Puțin mai sus de marker
            rotation="-90 0 0"
          />
        </a-marker>

        {/* Camera standard pentru AR.js */}
        <a-entity camera></a-entity>
      </Scene>
    </div>
  );
}

export default App;