import React, { useEffect, useState } from 'react';
import { IconMMP } from '@consta/uikit/IconMMP';
import { Text } from '@consta/uikit/Text';
import { IconClose } from '@consta/uikit/IconClose';
import { useDispatch } from 'react-redux';
import { IconCalendar } from '@consta/uikit/IconCalendar';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Place,
  PlaceEvent,
  transformWorkTimeToRus,
} from '../../../types/place';
import { Time } from '../../../types/date';
import { cn } from '../../../__private__/utils/bem';
import { setPlaceEvent } from '../../../store/reducers/placeReducer';

import './MapPlaceCard.scss';
import { MapPlaceCardWorkTime } from './MapPlaceCardWorkTime/MapPlaceCardWorkTime';

export type MapPlaceCardProps = {
  place: Place;
  closeCard?: () => void;
  view?: 'infobox' | 'card' | 'card_short';
  onCardClick?: (place: Place) => void;
};

const cnMapPlaceCard = cn('MapPlaceCard');

export const MapPlaceCard = (props: MapPlaceCardProps) => {
  const [workTime, setWorkTime] = useState<
    undefined | Record<string, [Time, Time] | undefined>
  >();

  const { place, closeCard, view = 'infobox', onCardClick } = props;

  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

  const {
    name,
    image,
    workTime: workTimeEn,
    description,
    galery,
    address,
    events,
  } = place;

  useEffect(() => {
    workTimeEn && setWorkTime(transformWorkTimeToRus(workTimeEn));
  }, [workTimeEn]);

  const onClickOnPlaceEvent = (placeEvent: PlaceEvent) => {
    dispatch(setPlaceEvent({ event: placeEvent, place }));
    history.push(`${location.search}&event=${placeEvent.name}`);
  };

  const handleCardClick = () => {
    if (view === 'card_short') {
      history.push(`?place=${place.name}`);
      onCardClick?.(place);
    }
  };

  const Container = view === 'card_short' ? 'button' : 'div';

  return (
    <Container
      className={cnMapPlaceCard({ view })}
      onClick={handleCardClick}
      style={{
        ['--infobox-max-height' as string]: window.innerHeight * 0.65,
      }}
    >
      {view !== 'card_short' && (
        <button
          className={cnMapPlaceCard('CloseButton')}
          type="button"
          onClick={closeCard}
        >
          <IconClose size="s" />
        </button>
      )}
      <div className={cnMapPlaceCard('Title')}>
        <div
          className={cnMapPlaceCard('TitleContainer', { hasImage: !!image })}
        >
          {image ? (
            <img
              className={cnMapPlaceCard('TitleImage')}
              src={image}
              alt={name}
            />
          ) : (
            <IconMMP size="m" view="secondary" />
          )}
        </div>
        <Text
          className={cnMapPlaceCard('TitleText')}
          size="xl"
          as="h3"
          weight="semibold"
          view="primary"
        >
          {name}
        </Text>
      </div>
      {description && (
        <Text
          className={cnMapPlaceCard('Description')}
          weight="regular"
          size="s"
          align="left"
          as="p"
          view="primary"
        >
          {description}
        </Text>
      )}
      {address && (
        <Text
          className={cnMapPlaceCard('Address')}
          as="span"
          weight="regular"
          size="xs"
          align="left"
          view="secondary"
        >
          {address}
        </Text>
      )}
      {Array.isArray(galery) && (
        <>
          <Text
            className={cnMapPlaceCard('GalleryText')}
            weight="semibold"
            size="s"
            align="left"
            as="p"
            view="primary"
          >
            Фотографии:
          </Text>
          <div className={cnMapPlaceCard('Gallery')}>
            {galery.map((galeryImage, index) => (
              <div
                key={`${cnMapPlaceCard('GalleryImage')}-${name}-${index}`}
                className={cnMapPlaceCard('GalleryContainer')}
              >
                <img
                  className={cnMapPlaceCard('GalleryImage')}
                  src={galeryImage}
                  alt={galeryImage}
                />
              </div>
            ))}
          </div>
        </>
      )}
      {workTime && <MapPlaceCardWorkTime workTime={workTime} />}
      {Array.isArray(events) && (
        <>
          <Text
            className={cnMapPlaceCard('EventsText')}
            weight="semibold"
            size="s"
            align="left"
            as="p"
            view="primary"
          >
            Проходящие мероприятия:
          </Text>
          <div className={cnMapPlaceCard('Events')}>
            {events.map((placeEvent, index) => (
              <button
                type="button"
                onClick={() => onClickOnPlaceEvent(placeEvent)}
                className={cnMapPlaceCard('EventContainer')}
                key={`${cnMapPlaceCard('EventContainer')}-${index}`}
              >
                <div className={cnMapPlaceCard('EventImage')}>
                  {placeEvent.image ? (
                    <img alt={placeEvent.name} src={placeEvent.image} />
                  ) : (
                    <IconCalendar size="s" />
                  )}
                </div>
                <Text
                  align="left"
                  weight="semibold"
                  size="m"
                  as="p"
                  view="primary"
                >
                  {placeEvent.name}
                </Text>
              </button>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};
