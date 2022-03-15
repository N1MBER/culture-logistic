import React from 'react';
import { Sidebar } from '@consta/uikit/Sidebar';
import { Place, PlaceEvent } from '../../types/place';
import { MapPlaceEvents } from '../MapPlace/MapPlaceEvents/MapPlaceEvents';

type Props = {
  isOpen?: boolean;
  event?: PlaceEvent;
  place?: Place;
  closeSideBar?: () => void;
};

export const EventBar = (props: Props) => {
  const { isOpen, event, place, closeSideBar } = props;
  return (
    <Sidebar
      onEsc={closeSideBar}
      onClickOutside={closeSideBar}
      position="left"
      isOpen={isOpen}
      hasOverlay
      size="l"
    >
      {event && <MapPlaceEvents event={event} place={place} />}
    </Sidebar>
  );
};
