import { useEffect, useRef } from "react";
import Globe from "globe.gl";
import * as THREE from "three";
import "./WhereWeAre.css";

export default function GlobeSection() {
  const globeRef = useRef();
  const globeInstance = useRef();

  const locations = [
    { name: "TURKEY", email: "turkiye@acunmedya.com", lat: 38.9637, lng: 35.2433 },
    { name: "USA", email: "usa@acunmedya.com", lat: 37.0902, lng: -95.7129 },
    { name: "NETHERLANDS", email: "netherlands@acunmedya.com", lat: 52.1326, lng: 5.2913 },
    { name: "SLOVENIA", email: "info@acunmedya.com", lat: 46.1512, lng: 14.9955 },
    { name: "HUNGARY", email: "hungary@acunmedya.com", lat: 47.1625, lng: 19.5033 },
    { name: "GREECE", email: "greece@acunmedya.com", lat: 39.0742, lng: 21.8243 },
    { name: "CROATIA", email: "info@acunmedya.com", lat: 45.1, lng: 15.2 },
    { name: "GERMANY", email: "info@acunmedya.com", lat: 51.1657, lng: 10.4515 },
    { name: "MEXICO", email: "mexico@acunmedya.com", lat: 23.6345, lng: -102.5528 },
    { name: "DOMINICAN REPUBLIC", email: "dr@acunmedya.com", lat: 18.7357, lng: -70.1627 },
    { name: "CZECHIA", email: "info@acunmedya.com", lat: 49.8175, lng: 15.4730 },
    { name: "SLOVAKIA", email: "info@acunmedya.com", lat: 48.6690, lng: 19.6990 },
    { name: "ROMANIA", email: "romania@acunmedya.com", lat: 45.9432, lng: 24.9668 },
    { name: "SERBIA", email: "info@acunmedya.com", lat: 44.0165, lng: 21.0059 },
  ];

  useEffect(() => {
    const world = Globe()(globeRef.current)
      .backgroundColor("rgba(0,0,0,0)")
      .showAtmosphere(true)
      .atmosphereColor("#88c0ff")
      .atmosphereAltitude(0.25)
      .globeMaterial(new THREE.MeshPhongMaterial({
        color: "#ffffff",
        emissive: "#b0d4ff",
        emissiveIntensity: 0.2,
        transparent: true,
        opacity: 0.1,
      }));

    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(countries => {
        world.polygonsData(countries.features)
          .polygonCapColor(() => 'rgba(200, 225, 255, 0.6)')
          .polygonSideColor(() => 'rgba(0, 100, 200, 0.05)')
          .polygonStrokeColor(() => '#cfe3ff')
          .polygonAltitude(0.01);
      });

    world.pointsData(locations)
      .pointColor(() => "#4cc9f0")
      .pointAltitude(0.03)
      .pointRadius(0.8)
      .pointsMerge(false);

    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    world.scene().add(ambient);
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(100, 100, 100);
    world.scene().add(pointLight);

    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.8;
    world.controls().enableZoom = false;
    world.pointOfView({ altitude: 2.3 });

    globeInstance.current = world;

    const handleResize = () => {
      world.width(globeRef.current.offsetWidth);
      world.height(globeRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFlyTo = (loc) => {
    globeInstance.current.pointOfView({ lat: loc.lat, lng: loc.lng, altitude: 2 }, 1000);
  };

  return (
    <section className="globe-section">
      <div className="content-wrapper">
        <h2 className="title-overlay">
          <span className="fill">Countries Within Our</span>
          <span className="outline">Care Network</span>
        </h2>

        <div className="main-display">
          <div className="location-table">
            {locations.map((loc, i) => (
              <div key={i} className="table-cell" onClick={() => handleFlyTo(loc)}>
                <div className="cell-inner">
                  <p className="loc-name">{loc.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="globe-canvas" ref={globeRef}></div>
        </div>
      </div>
    </section>
  );
}