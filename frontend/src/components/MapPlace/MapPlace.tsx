import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleMapMarker } from '../GoogleMap/GoogleMapMarker/GoogleMapMarker';
import { GoogleMapInfoBox } from '../GoogleMap/GoogleMapInfoBox/GoogleMapInfoBox';
import { Place } from '../../types/place';
import { MapPlaceCard } from './MapPlaceCard/MapPlaceCard';
import { RootState } from '../../store/reducers';
import { setCurrentPlace } from '../../store/reducers/placeReducer';

type Props = {
  place: Place;
};

export const MapPlace = (props: Props) => {
  const { place } = props;

  const { coordinate } = place;
  const [visibleCard, setVisibleCard] = useState<boolean>(false);

  const viewMode = useSelector((store: RootState) => store.settings.viewMode);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleMarkerClick = () => {
    history.push(`?place=${place.name}`);
    if (viewMode === 'sidebar') {
      dispatch(setCurrentPlace(place));
    } else {
      setVisibleCard(!visibleCard);
    }
  };

  return (
    <>
      <GoogleMapMarker
        position={coordinate}
        onMarkerClick={handleMarkerClick}
      />
      {visibleCard && viewMode === 'map' && (
        <GoogleMapInfoBox position={coordinate}>
          <MapPlaceCard closeCard={() => setVisibleCard(false)} place={place} />
        </GoogleMapInfoBox>
      )}
    </>
  );
};
