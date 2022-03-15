import React, { useState, useCallback, useEffect } from 'react';
import {
  GoogleMap as GoogleMapWrapper,
  useJsApiLoader,
} from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { cn } from '../../__private__/utils/bem';

import './GoogleMap.scss';
import { GoogleMapType, MapType, Location } from '../../types/google';
import { useWindowDimensions } from '../../hooks/useWindowDimensions/useWindowDimensions';
import { RootState } from '../../store/reducers';

const defaultCenter: Location = {
  lat: 59.9638699,
  lng: 30.2873573,
};

const cnGoogleMap = cn('GoogleMap');

type GoogleMapProps = {
  children?: React.ReactNode | React.ReactNode[];
  token?: string;
  mode?: 'main' | 'small';
  center?: Location;
  zoom?: number;
};

export const GoogleMap = (props: GoogleMapProps) => {
  const { children, token, mode, center = defaultCenter, zoom = 10 } = props;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: token || '',
  });
  const [map, setMap] = useState<GoogleMapType | null>(null);
  const [mapMode, setMapMode] = useState<MapType>('roadmap');

  const [currentCenter, setCurrentCenter] = useState<Location>(center);
  const [currentZoom, setCurrentZoom] = useState<number>(zoom);

  const { width, height } = useWindowDimensions();

  const viewMode = useSelector((store: RootState) => store.settings.viewMode);

  const currentPlace = useSelector(
    (store: RootState) => store.place.currentPlace
  );

  useEffect(() => {
    if (currentPlace && viewMode === 'sidebar') {
      setCurrentCenter({
        ...currentPlace.coordinate,
      });
      setCurrentZoom(17);
    }
  }, [currentPlace]);

  useEffect(() => {
    setCurrentCenter(center);
  }, [center]);

  useEffect(() => {
    setCurrentZoom(zoom);
  }, [zoom]);

  const onLoad = useCallback(function callback(newMap) {
    setMap(newMap);
  }, []);

  const getMapId = () => {
    if (map) {
      //@ts-ignore
      setMapMode(map.mapTypeId as MapType);
    }
  };

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className={cnGoogleMap({ mapMode, mode })}>
      <GoogleMapWrapper
        mapContainerStyle={{
          width:
            viewMode === 'sidebar' ? (width || window.innerWidth) / 2 : width,
          height: (height || window.innerHeight) - 60,
        }}
        center={currentCenter}
        zoom={currentZoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onMapTypeIdChanged={getMapId}
        mapTypeId="roadmap"
      >
        {children}
      </GoogleMapWrapper>
    </div>
  ) : (
    <></>
  );
};
