import { Reducer } from 'redux';
import { StoreActionType } from '.';
import { ModalData } from '../../types/setings';

type ViewMode = 'map' | 'sidebar';

type State = {
  modalStack: ModalData[];
  viewMode: ViewMode;
};

const initialState: State = {
  modalStack: [],
  viewMode: 'sidebar',
};

export const REMOVE_MODAL_DATA = 'REMOVE_MODAL_DATA';
export const CLEAR_MODAL_STACK = 'CLEAR_MODAL_STACK';
export const PUSH_MODAL_DATA = 'PUSH_MODAL_DATA';
export const VIEW_MODE = 'VIEW_MODE';

const actionTypes = [
  REMOVE_MODAL_DATA,
  CLEAR_MODAL_STACK,
  PUSH_MODAL_DATA,
  VIEW_MODE,
] as const;
type ActionType = typeof actionTypes[number];

export const settingsReducer: Reducer<State, StoreActionType<ActionType>> = (
  state = initialState,
  action: StoreActionType<ActionType>
) => {
  const { data, type } = action;
  switch (type) {
    case CLEAR_MODAL_STACK:
      return { ...state, modalStack: [] };
    case PUSH_MODAL_DATA:
      return { ...state, modalStack: [...state.modalStack, data as ModalData] };
    case REMOVE_MODAL_DATA: {
      const copyArray = [...state.modalStack];
      const index = copyArray.indexOf(
        copyArray.filter((modal) => modal.key === data)[0]
      );
      copyArray.splice(index, 1);
      return { ...state, modalStack: copyArray };
    }
    case VIEW_MODE:
      return { ...state, viewMode: data as ViewMode };
    default:
      return state;
  }
};

export const removeModalData = (key: string | number) => {
  return {
    type: REMOVE_MODAL_DATA,
    data: key,
  };
};

export const pushModalData = (data: ModalData) => {
  return {
    type: PUSH_MODAL_DATA,
    data,
  };
};

export const clearModalStack = () => {
  return {
    type: CLEAR_MODAL_STACK,
  };
};

export const setViewMode = (data: ViewMode) => {
  return {
    type: VIEW_MODE,
    data,
  };
};
