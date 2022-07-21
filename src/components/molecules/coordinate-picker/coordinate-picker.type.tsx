export type CoordinatePickerProps = {
  defaultLatitude: string;
  defaultLongitude: string;
  onCheck: (latitude: string, longitude: string) => void;
};
