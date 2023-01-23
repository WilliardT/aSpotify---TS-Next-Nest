import { PlayerAction, PlayerActionTypes } from "types/player";
import { Itrack } from "types/track";


export const playTrack = (): PlayerAction => {
  return {type: PlayerActionTypes.PLAY}
}

export const pauseTrack = (): PlayerAction => {
  return {type: PlayerActionTypes.PAUSE}
}

export const setVolume = (payload: number): PlayerAction => {
  return {type: PlayerActionTypes.SET_VOLUME, payload}
}

export const setCurrentTime = (payload: number): PlayerAction => {
  return {type: PlayerActionTypes.SET_CURRENT_TIME, payload}
}

export const setActiveTrack = (payload: Itrack): PlayerAction => {
  return {type: PlayerActionTypes.SET_ACTIVE, payload}
}