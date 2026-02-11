import React, { useState, useEffect, useRef, useCallback } from 'react';
import './MedicalMap.css';

const MedicalMap = () => {
  const [map, setMap] = useState(null);
  const [mainMarker, setMainMarker] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [currentType, setCurrentType] = useState('hospital');
  const [autocompleteService, setAutocompleteService] = useState(null);
  const [placesService, setPlacesService] = useState(null);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [overlayHidden, setOverlayHidden] = useState(false);
  const [mapBright, setMapBright] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [mapTypeMenuOpen, setMapTypeMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const mapRef = useRef(null);
  const mapFrameRef = useRef(null);

  const fetchData = useCallback(async (lat, lon) => {
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    setMarkers([]);

    setLoaderVisible(true);

    const query = `[out:json][timeout:25];
        (
          node["amenity"="${currentType}"](around:10000,${lat},${lon});
          way["amenity"="${currentType}"](around:10000,${lat},${lon});
          relation["amenity"="${currentType}"](around:10000,${lat},${lon});
        );
        out center;`;

    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.elements) {
        console.error('No data returned from Overpass API');
        setLoaderVisible(false);
        return;
      }

      const newMarkers = [];

      data.elements.forEach(f => {
        const latVal = f.lat || f.center?.lat;
        const lonVal = f.lon || f.center?.lon;

        if (!latVal || !lonVal) return;

        const name = f.tags?.name || `Medical Facility (${currentType})`;

        const marker = new window.google.maps.Marker({
          position: { lat: latVal, lng: lonVal },
          map: map,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#ef4444',
            fillOpacity: 0.9,
            strokeColor: '#ffffff',
            strokeWeight: 3
          },
          title: name
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="text-align:center; padding:10px; min-width:200px;">
              <b style="color:#1e293b; font-size:14px;">${name}</b><br>
              <a href="https://www.google.com/maps/search/?api=1&query=${latVal},${lonVal}" target="_blank" 
                 style="color:#007BFF; text-decoration:none; font-weight:700; font-size:11px; display:inline-block; margin-top:10px; border: 1px solid #007BFF; padding: 5px 12px; border-radius: 20px;">
                 VIEW IN GOOGLE MAPS <i class="fa-solid fa-location-arrow"></i>
              </a>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        newMarkers.push(marker);
      });

      setMarkers(newMarkers);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
    setLoaderVisible(false);
  }, [map, currentType]);

  const placePin = useCallback(async (lat, lon) => {
    console.log('Placing pin at:', lat, lon);

    if (!map) {
      console.error('Map not initialized');
      return;
    }

    // Clear existing main marker
    if (mainMarker) {
      mainMarker.setMap(null);
    }

    try {
      // Create main marker
      const newMainMarker = new window.google.maps.Marker({
        position: { lat, lng: lon },
        map: map,
        draggable: true,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#007BFF',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3
        }
      });

      setMainMarker(newMainMarker);
      console.log('Main marker created successfully');

      // Animate to location
      map.panTo({ lat, lng: lon });
      map.setZoom(14);

      // Fetch medical facilities
      await fetchData(lat, lon);

      // Handle marker drag
      newMainMarker.addListener('dragend', (e) => {
        console.log('Marker dragged to:', e.latLng.lat(), e.latLng.lng());
        const position = e.latLng;
        fetchData(position.lat(), position.lng());
      });
    } catch (error) {
      console.error('Error placing pin:', error);
      alert("Error placing location pin. Please try again.");
    }
  }, [map, mainMarker, fetchData]);

  useEffect(() => {
    const loadGoogleMaps = () => {
      console.log('Loading Google Maps...');
      if (window.google && window.google.maps) {
        console.log('Google Maps already loaded, initializing...');
        initializeMap();
      } else {
        console.log('Google Maps not loaded, loading script...');
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAjO6EMZjeaQv-NdHcBDFCS1mQH_xAgKH0&libraries=places';
        script.async = true;
        script.defer = true;
        script.onload = () => console.log('Google Maps script loaded');
        script.onerror = (error) => console.error('Google Maps script failed to load:', error);
        window.initMap = initializeMap;
        document.head.appendChild(script);
      }
    };

    const initializeMap = () => {
      console.log('Initializing map...');
      if (!mapRef.current) {
        console.error('Map ref is null');
        return;
      }

      try {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          zoom: 2,
          center: { lat: 20, lng: 0 },
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#c9e8f7" }]
            }
          ]
        });

        console.log('Map created successfully:', mapInstance);
        setMap(mapInstance);
        setMapLoaded(true);

        const autocompleteServiceInstance = new window.google.maps.places.AutocompleteService();
        const placesServiceInstance = new window.google.maps.places.PlacesService(mapInstance);

        setAutocompleteService(autocompleteServiceInstance);
        setPlacesService(placesServiceInstance);

        mapInstance.addListener('click', (e) => {
          console.log('Map clicked at:', e.latLng.lat(), e.latLng.lng());
          console.log('Overlay hidden:', overlayHidden);
          if (overlayHidden) {
            placePin(e.latLng.lat(), e.latLng.lng());
          } else {
            console.log('Ignoring map click - overlay is visible');
          }
        });
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    loadGoogleMaps();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const searchContainer = document.querySelector('.search-container');
      const filterWrapper = document.querySelector('.dropdown-wrapper');
      const mapTypeWrapper = document.querySelectorAll('.dropdown-wrapper')[1];

      // Close search suggestions
      if (searchContainer && !searchContainer.contains(e.target)) {
        setShowSuggestions(false);
      }

      // Close filter dropdown
      if (filterWrapper && !filterWrapper.contains(e.target)) {
        setFilterMenuOpen(false);
      }

      // Close map type dropdown
      if (mapTypeWrapper && !mapTypeWrapper.contains(e.target)) {
        setMapTypeMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const startApp = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser. Please use the search bar.");
      return;
    }

    setLoaderVisible(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log('Location obtained:', pos.coords);
        setMapBright(true);
        setOverlayHidden(true);
        setLoaderVisible(false);
        placePin(pos.coords.latitude, pos.coords.longitude);
      },
      (error) => {
        setLoaderVisible(false);
        console.error('Geolocation error:', error);
        let errorMessage = "Unable to get your location. ";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += "Please allow location access in your browser settings.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage += "Location request timed out.";
            break;
          default:
            errorMessage += "Please use the search bar to find your location.";
            break;
        }

        alert(errorMessage);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  };

  const search = async () => {
    if (!searchQuery.trim()) {
      alert("Please enter a location to search.");
      return;
    }

    setLoaderVisible(true);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`);
      const data = await res.json();

      if (data && data[0]) {
        console.log('Search result:', data[0]);
        setMapBright(true);
        setOverlayHidden(true);
        placePin(parseFloat(data[0].lat), parseFloat(data[0].lon));
      } else {
        alert("Location not found. Please try a different search term.");
      }
    } catch (error) {
      console.error("Search failed:", error);
      alert("Search failed. Please check your internet connection and try again.");
    }
    setLoaderVisible(false);
  };

  const handleSuggestions = (query) => {
    if (!autocompleteService || query.length < 2) {
      setShowSuggestions(false);
      setSuggestions([]);
      return;
    }

    autocompleteService.getPlacePredictions({
      input: query,
      types: [],
      fields: ['place_id', 'formatted_address', 'name', 'geometry'],
      componentRestrictions: null
    }, (predictions, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
        setSuggestions(predictions);
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
        setSuggestions([]);
      }
    });
  };

  const selectSuggestion = (placeId, description) => {
    if (!placesService) return;

    console.log('Selecting suggestion:', description);
    setLoaderVisible(true);

    placesService.getDetails({ placeId }, (place, status) => {
      setLoaderVisible(false);

      if (status === window.google.maps.places.PlacesServiceStatus.OK && place?.geometry?.location) {
        console.log('Place details obtained:', place);
        setSearchQuery(description);
        setShowSuggestions(false);
        setSuggestions([]);
        setMapBright(true);
        setOverlayHidden(true);
        placePin(place.geometry.location.lat(), place.geometry.location.lng());
      } else {
        console.error('Place details failed:', status);
        alert("Unable to get location details. Please try again.");
      }
    });
  };

  const changeType = (type) => {
    setCurrentType(type);
    setFilterMenuOpen(false);
    if (mainMarker && map) {
      const position = mainMarker.getPosition();
      fetchData(position.lat(), position.lng());
    }
  };

  const changeMapType = (mapTypeId) => {
    if (map) {
      map.setMapTypeId(mapTypeId);
      setMapTypeMenuOpen(false);
    }
  };

  const toggleFullscreen = () => {
    const mapFrame = mapFrameRef.current;

    if (!document.fullscreenElement) {
      mapFrame.requestFullscreen().then(() => {
        setIsFullscreen(true);
        setTimeout(() => {
          if (window.google && window.google.maps && window.google.maps.event) {
            window.google.maps.event.trigger(map, 'resize');
          }
        }, 100);
      }).catch(err => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
        setTimeout(() => {
          if (window.google && window.google.maps && window.google.maps.event) {
            window.google.maps.event.trigger(map, 'resize');
          }
        }, 100);
      }).catch(err => {
        console.error('Error attempting to exit fullscreen:', err);
      });
    }
  };

  useEffect(() => {
    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [searchTimeout]);

  const getSuggestionIcon = (types) => {
    if (types.includes('locality') || types.includes('administrative_area_level_1')) {
      return 'fa-city';
    } else if (types.includes('street_address') || types.includes('route')) {
      return 'fa-home';
    } else if (types.includes('establishment')) {
      return 'fa-building';
    }
    return 'fa-map-marker-alt';
  };

  return (
    <section id="maps">
      <div className="outer-container">
        <h1>Find Medical centers near you...</h1>

        <div
          className={`map-frame ${mapBright ? 'map-bright' : ''} ${isFullscreen ? 'fullscreen-mode' : ''}`}
          id="mainFrame"
          ref={mapFrameRef}
        >
          <div
            id="loader"
            style={{ display: loaderVisible ? 'block' : 'none' }}
          >
            <i className="fas fa-globe-americas fa-spin"></i> SCANNING GLOBAL DATABASE...
          </div>

          <div id="map" ref={mapRef}></div>

          <div className="top-controls">
            <div className="search-container">
              <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  id="cityInput"
                  placeholder="Enter city, address, or place..."
                  value={searchQuery}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchQuery(value);

                    // Clear existing timeout
                    if (searchTimeout) {
                      clearTimeout(searchTimeout);
                    }

                    // Debounce search suggestions
                    const timeout = setTimeout(() => {
                      handleSuggestions(value);
                    }, 300);

                    setSearchTimeout(timeout);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') search();
                  }}
                />
              
              <div
                id="searchSuggestions"
                className={`search-suggestions ${showSuggestions ? 'show' : ''}`}
              >
                {suggestions.map((prediction, index) => {
                  const parts = prediction.terms;
                  const mainName = parts[0]?.value || '';
                  const secondaryInfo = prediction.description.replace(mainName, '').trim();

                  return (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => selectSuggestion(prediction.place_id, prediction.description)}
                    >
                      <i className={`fas ${getSuggestionIcon(prediction.types)}`} style={{ marginRight: '8px', color: '#667eea' }}></i>
                      <span className="city-name">{mainName}</span>
                      {secondaryInfo && <span className="country-name">{secondaryInfo}</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="button-group">
              <button className="pill-btn" onClick={startApp}>
                <i className="fa-solid fa-location-crosshairs"></i> Update Location
              </button>

              <div className="dropdown-wrapper">
                <button className="pill-btn" onClick={() => setFilterMenuOpen(!filterMenuOpen)}>
                  <i className="fa-solid fa-sliders"></i> Filters
                </button>
                <div
                  id="filterMenu"
                  className={`filter-menu ${filterMenuOpen ? 'show' : ''}`}
                >
                  <div className="filter-item" onClick={() => changeType('hospital')}>
                    <i className="fa-solid fa-hospital"></i> Hospitals
                  </div>
                  <div className="filter-item" onClick={() => changeType('pharmacy')}>
                    <i className="fa-solid fa-pills"></i> Pharmacies
                  </div>
                  <div className="filter-item" onClick={() => changeType('clinic')}>
                    <i className="fa-solid fa-house-medical"></i> Clinics
                  </div>
                </div>
              </div>

              <div className="dropdown-wrapper">
                <button className="pill-btn" onClick={() => setMapTypeMenuOpen(!mapTypeMenuOpen)}>
                  <i className="fa-solid fa-layer-group"></i> Map Type
                </button>
                <div
                  id="mapTypeMenu"
                  className={`filter-menu ${mapTypeMenuOpen ? 'show' : ''}`}
                >
                  <div className="filter-item" onClick={() => changeMapType('roadmap')}>
                    <i className="fa-solid fa-map"></i> Roadmap
                  </div>
                  <div className="filter-item" onClick={() => changeMapType('satellite')}>
                    <i className="fa-solid fa-satellite"></i> Satellite
                  </div>
                  <div className="filter-item" onClick={() => changeMapType('hybrid')}>
                    <i className="fa-solid fa-globe"></i> Hybrid
                  </div>
                  <div className="filter-item" onClick={() => changeMapType('terrain')}>
                    <i className="fa-solid fa-mountain"></i> Terrain
                  </div>
                </div>
              </div>

              <button className="pill-btn" onClick={toggleFullscreen}>
                <i className="fa-solid fa-expand"></i> Fullscreen
              </button>
            </div>
          </div>

          <div
            id="enable-overlay"
            className={overlayHidden ? 'hidden' : ''}
          >
            <img src="/src/assets/images/map.png" className="loc-img" alt="Location Icon" />
            <div className="title">Enable Location</div>
            <p className="subtitle">Access high-accuracy international medical data for your current area.</p>
            <button className="blue-btn" onClick={startApp}>Enable Location</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalMap;
