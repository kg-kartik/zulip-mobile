/* @flow strict-local */
import type { Action, Orientation } from '../types';
import { APP_ONLINE, APP_ORIENTATION, DEAD_QUEUE, DEBUG_FLAG_TOGGLE } from '../actionConstants';

export const appOnline = (isOnline: boolean): Action => ({
  type: APP_ONLINE,
  isOnline,
});

export const deadQueue = (): Action => ({
  type: DEAD_QUEUE,
});

export const appOrientation = (orientation: Orientation): Action => ({
  type: APP_ORIENTATION,
  orientation,
});

export const debugFlagToggle = (key: string, value: boolean): Action => ({
  type: DEBUG_FLAG_TOGGLE,
  key,
  value,
});
