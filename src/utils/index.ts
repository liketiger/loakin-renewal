export const voidFn = () => {};

export const convertToOptionList = (list: string[]) =>
  list.map((item) => ({
    label: item,
    value: item
  }));
