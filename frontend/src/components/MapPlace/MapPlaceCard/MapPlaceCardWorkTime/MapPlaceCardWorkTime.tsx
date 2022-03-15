import React from 'react';
import { Text } from '@consta/uikit/Text';
import { Time, convertTime } from '../../../../types/date';
import { cn } from '../../../../__private__/utils/bem';

import './MapPlaceCardWorkTime.scss';

const cnMapPlaceCardWorkTime = cn('MapPlaceCardWorkTime');

export const MapPlaceCardWorkTime = (props: {
  workTime: Record<string, [Time, Time] | undefined>;
}) => {
  const { workTime } = props;
  return (
    <div className={cnMapPlaceCardWorkTime()}>
      <Text weight="semibold" size="s" align="left" as="p" view="primary">
        Время работы:
      </Text>
      {Object.keys(workTime).map((key) => {
        let startTime;
        let endTime;
        const time = workTime[key];
        if (time) {
          [startTime, endTime] = time;
        }
        return (
          <div
            className={cnMapPlaceCardWorkTime('Container')}
            key={`${cnMapPlaceCardWorkTime('Day')}-${key}`}
          >
            <p className={cnMapPlaceCardWorkTime('Day')}>{key}</p>
            <p
              className={cnMapPlaceCardWorkTime('Time', {
                alert: !(startTime && endTime),
              })}
            >
              {startTime && endTime
                ? `${convertTime(
                    startTime.hours,
                    startTime.minutes
                  )} - ${convertTime(endTime.hours, endTime.minutes)}`
                : 'Закрыто'}
            </p>
          </div>
        );
      })}
    </div>
  );
};
