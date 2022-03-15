export type MapType = 'roadmap' | 'hybrid' | 'satellite' | 'terrain';
export type GoogleMapType = typeof window.google.maps;

export type LatLng = typeof window.google.maps.LatLng;

export type Location = {
  lat: number;
  lng: number;
};
