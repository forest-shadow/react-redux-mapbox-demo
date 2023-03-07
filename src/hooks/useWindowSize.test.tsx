import {act, renderHook} from '@testing-library/react';
import {useWindowSize, WINDOW_SIZE_DIMENSION} from './useWindowSize'

const setupHook = () => renderHook(() => useWindowSize());
enum WINDOW_SIZE_PROPS {
  INNER_WIDTH = 'innerWidth',
  INNER_HEIGHT = 'innerHeight'
}
const setWindowSizeProperty = (prop: WINDOW_SIZE_PROPS, value: number) => {
  Object.defineProperties(window, {
    [prop]: {
      value: value,
      writable: true
    }
  });
}

const windowResize = (dimension: WINDOW_SIZE_DIMENSION, value: number): void => {
  if (dimension === WINDOW_SIZE_DIMENSION.WIDTH) {
    setWindowSizeProperty(WINDOW_SIZE_PROPS.INNER_WIDTH, value);
  }

  if (dimension === WINDOW_SIZE_DIMENSION.HEIGHT) {
    setWindowSizeProperty(WINDOW_SIZE_PROPS.INNER_HEIGHT, value);
  }

  window.dispatchEvent(new Event('resize'));
}

describe('useWindowSize', () => {
  it('should be initialized without errors', () => {
    const { result } = setupHook();
    const { height, width } = result.current;
    expect(typeof height).toBe('number');
    expect(typeof width).toBe('number');
  })

  it('should handle window resize', () => {
    const { result } = setupHook();

    act(() => {
      windowResize(WINDOW_SIZE_DIMENSION.HEIGHT, 420);
      windowResize(WINDOW_SIZE_DIMENSION.WIDTH, 430);
    });

    expect(result.current.height).toBe(420);
    expect(result.current.width).toBe(430);

    act(() => {
      windowResize(WINDOW_SIZE_DIMENSION.WIDTH, 1920);
      windowResize(WINDOW_SIZE_DIMENSION.HEIGHT, 1080);
    })

    expect(result.current.width).toBe(1920);
    expect(result.current.height).toBe(1080);
  });
});