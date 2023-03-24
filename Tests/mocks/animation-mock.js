

import { Animated } from 'react-native';

const mockAnimated = () => {
  const mock = jest.fn(() => ({
    delay: () => jest.fn(),
    interpolate: () => jest.fn(),
    timing: () => jest.fn(),
    start: () => jest.fn(),
    stop: () => jest.fn(),
    reset: () => jest.fn(),
  }));

  Animated.parallel = mock;
  Animated.loop = mock;
  ...

  return Animated;
};