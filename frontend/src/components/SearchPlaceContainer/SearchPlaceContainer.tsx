import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleMap } from '../GoogleMap/GoogleMap';
import { pins } from '../../__mocks__/google.mock';
import { Place } from '../../types/place';
import { MapPlace } from '../MapPlace/MapPlace';
import { RootState } from '../../store/reducers';
import { EventBar } from '../EventBar/EventBar';
import { setPlaceEvent } from '../../store/reducers/placeReducer';
import { PlaceBar } from '../PlaceBar/PlaceBar';
import { cn } from '../../__private__/utils/bem';

import './SearchPlaceContainer.scss';

const cnSearchPlaceContainer = cn('SearchPlaceContainer');

export const SearchPlaceContainer = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  const placeEvent = useSelector((store: RootState) => store.place.placeEvent);

  const viewMode = useSelector((store: RootState) => store.settings.viewMode);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setPlaces([...pins]);
  }, []);

  const handleClose = () => {
    dispatch(setPlaceEvent(undefined));
    history.goBack();
  };

  return (
    <div className={cnSearchPlaceContainer({ viewMode })}>
      <PlaceBar onChangePlaces={setPlaces} open={viewMode === 'sidebar'} />
      <GoogleMap token={process.env.REACT_APP_GOOGLE_API_KEY}>
        <EventBar
          place={placeEvent?.place}
          event={placeEvent?.event}
          isOpen={typeof placeEvent !== 'undefined'}
          closeSideBar={handleClose}
        />
        {places.map((place, index) => (
          <MapPlace place={place} key={`Marker-${index}`} />
        ))}
      </GoogleMap>
    </div>
  );
};
