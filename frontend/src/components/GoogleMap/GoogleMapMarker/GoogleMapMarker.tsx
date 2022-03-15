import React from 'react';
import { Marker } from '@react-google-maps/api';
import { Location } from '../../../types/google';

type Props = {
  position: Location;
  onMarkerClick?: (position: Location) => void;
};

export const GoogleMapMarker = (props: Props) => {
  const { position, onMarkerClick } = props;

  const handleClick = (e: google.maps.MapMouseEvent) => {
    const { latLng } = e;
    latLng &&
      onMarkerClick?.({
        lat: latLng.lat(),
        lng: latLng.lng(),
      });
  };

  return (
    <Marker icon="/images/Pin.svg" position={position} onClick={handleClick} />
  );
};
