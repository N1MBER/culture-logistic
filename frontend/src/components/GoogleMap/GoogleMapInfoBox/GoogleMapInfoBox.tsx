import React from 'react';
import { InfoBox } from '@react-google-maps/api';
import { Location } from '../../../types/google';

type Props = {
  children?: React.ReactNode;
  position?: Location;
  anchor?: google.maps.MVCObject;
};

export const GoogleMapInfoBox = (props: Props) => {
  const { position, children, anchor } = props;

  return (
    <InfoBox position={position} anchor={anchor}>
      {children}
    </InfoBox>
  );
};
