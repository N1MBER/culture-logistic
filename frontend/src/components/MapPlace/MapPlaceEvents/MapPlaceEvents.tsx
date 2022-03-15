import React, { useEffect, useState } from 'react';
import { IconCalendar } from '@consta/uikit/IconCalendar';
import { Text } from '@consta/uikit/Text';
import {
  Place,
  PlaceEvent,
  transformWorkTimeToRus,
} from '../../../types/place';
import { convertDateToString, Time } from '../../../types/date';
import { cn } from '../../../__private__/utils/bem';

import './MapPlaceEvents.scss';
import { MapPlaceCardWorkTime } from '../MapPlaceCard/MapPlaceCardWorkTime/MapPlaceCardWorkTime';

type Props = {
  event: PlaceEvent;
  place?: Place;
};

const cnMapPlaceEvents = cn('MapPlaceEvents');

export const MapPlaceEvents = (props: Props) => {
  const { event, place: eventPlace } = props;

  const [workTime, setWorkTime] = useState<
    undefined | Record<string, [Time, Time] | undefined>
  >();

  const { name, startTime, endTime, galery, description, image } = event;

  const place = eventPlace || ({} as Place);

  const { name: placeName, workTime: workTimeEn, address } = place;

  useEffect(() => {
    workTimeEn && setWorkTime(transformWorkTimeToRus(workTimeEn));
  }, [workTimeEn]);

  return (
    <div className={cnMapPlaceEvents()}>
      <div className={cnMapPlaceEvents('Title')}>
        <div
          className={cnMapPlaceEvents('TitleImageContainer', {
            hasImage: !!image,
          })}
        >
          {image ? (
            <img
              className={cnMapPlaceEvents('TitleImage')}
              src={image}
              alt={name}
            />
          ) : (
            <IconCalendar size="m" />
          )}
        </div>
        <Text align="left" as="h3" view="primary" weight="semibold" size="xl">
          {name}
        </Text>
      </div>
      <Text as="p" view="primary" weight="regular" size="m">
        {description}
      </Text>
      <div className={cnMapPlaceEvents('TimeBlock')}>
        <Text weight="semibold" size="s" align="left" as="p" view="primary">
          Время проведения:
        </Text>
        <Text as="p" view="secondary" weight="regular" size="m">
          {`${startTime && `C ${convertDateToString(startTime)}`} ${
            startTime && endTime && '-'
          } ${endTime && `По ${convertDateToString(endTime)}`}`}
        </Text>
      </div>
      {Array.isArray(galery) && (
        <>
          <Text weight="semibold" size="s" align="left" as="p" view="primary">
            Фотографии:
          </Text>
          <div className={cnMapPlaceEvents('Gallery')}>
            {galery.map((galeryImage, index) => {
              return (
                <div
                  className={cnMapPlaceEvents('GalleryImageContainer')}
                  key={`Event-GalleryImage-${index}`}
                >
                  <img
                    className={cnMapPlaceEvents('GalleryImage')}
                    alt={galeryImage}
                    src={galeryImage}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
      {placeName && (
        <Text weight="regular" size="s" align="left" as="p" view="primary">
          Место проведения мероприятия: <b>{placeName}</b>
        </Text>
      )}
      {address && (
        <Text as="span" weight="regular" size="xs" view="secondary">
          {address}
        </Text>
      )}
      {workTime && <MapPlaceCardWorkTime workTime={workTime} />}
    </div>
  );
};
