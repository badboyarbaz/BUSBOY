export const SELECT_BUS = 'SELECT_BUS';

export const selectedBus = (bus) => ({
  type: SELECT_BUS,
  payload: bus,
});
