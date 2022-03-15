import { Reducer } from 'redux';
import { Place, PlaceEvent } from '../../types/place';
import { StoreActionType } from '.';

type PlaceEventWithPlace = {
  event: PlaceEvent;
  place?: Place;
};

type State = {
  placeEvent?: PlaceEventWithPlace;
  currentPlace?: Place;
};

const initialState: State = {
  placeEvent: undefined,
  currentPlace: undefined,
};

export const SET_PLACE_EVENT = 'SET_PLACE_EVENT';
export const SET_CURRENT_PLACE = 'SET_CURRENT_PLACE';

const actionTypes = [SET_PLACE_EVENT, SET_CURRENT_PLACE] as const;
type ActionType = typeof actionTypes[number];

export const placeReducer: Reducer<State, StoreActionType<ActionType>> = (
  state = initialState,
  action: StoreActionType<ActionType>
) => {
  const { data, type } = action;
  switch (type) {
    case SET_PLACE_EVENT:
      return { ...state, placeEvent: data as PlaceEventWithPlace | undefined };
    case SET_CURRENT_PLACE:
      return { ...state, currentPlace: data as Place };
    default:
      return state;
  }
};

export const setPlaceEvent = (data?: PlaceEventWithPlace) => {
  return {
    type: SET_PLACE_EVENT,
    data,
  };
};

export const setCurrentPlace = (data?: Place) => {
  return {
    type: SET_CURRENT_PLACE,
    data,
  };
};
