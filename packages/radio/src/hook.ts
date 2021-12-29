export function useMergeValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
  }
) {
  const { defaultValue, value } = props || {};

  return value !== undefined ? value : defaultValue !== undefined ? defaultValue : defaultStateValue;
}

