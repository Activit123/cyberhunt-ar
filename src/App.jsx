// src/App.js - VERSIUNE DE DEPANARE

import React, { useEffect } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

function App() {
  const secretCode = 'VIITORUL_ESTE_AICI';
  
  // NOU: Folosim useEffect pentru a adăuga un log la pornire
  useEffect(() => {
    console.log("Componenta App s-a încărcat. Se pregătește scena AR.");
  }, []);

  const handleMarkerFound = () => {
    console.log('SUCCES: Marker găsit! Se trimite codul către Flutter:', secretCode);
    if (window.flutter_inappwebview) {
      window.flutter_inappwebview.callHandler('arCodeHandler', secretCode);
    } else {
      console.log("ALERTĂ: Rulează în browser normal. Afișez alertă de test.");
      alert(`Marker găsit! Codul este: ${secretCode}`);
    }
  };
  
  const handleMarkerLost = () => {
    console.log("INFO: Markerul a fost pierdut.");
  };

  console.log("Componenta App se redă. Se definește scena...");

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
          url="marker.patt" 
          onMarkerFound={handleMarkerFound}
          onMarkerLost={handleMarkerLost} // NOU: Log la pierderea markerului
        >
          <Entity
            gltf-model="url(cod.glb)"
            scale="0.5 0.5 0.5"
            position="0 0.5 0"
            rotation="-90 0 0"
            animation="property: rotation; to: -90 360 0; loop: true; dur: 10000; easing: linear;"
          />
        </a-marker>
        <a-entity camera></a-entity>
      </Scene>
    </div>
  );
}

export default App;