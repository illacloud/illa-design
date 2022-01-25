// thx arco.design
import React, { useState, useEffect, useRef } from 'react';

export function useMergeValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
  }
): [T, React.Dispatch<React.SetStateAction<T>>, T] {
  const { defaultValue, value } = props || {};
  const firstRenderRef = useRef(true);

  const [stateValue, setStateValue] = useState<T>(
    value !== undefined ? value : defaultValue !== undefined ? defaultValue : defaultStateValue
  );

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    if (value === undefined) {
      setStateValue(value as T);
    }
  }, [value]);

  const mergedValue = value === undefined ? stateValue : value;

  return [mergedValue, setStateValue, stateValue];
}