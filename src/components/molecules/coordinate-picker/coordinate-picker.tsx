import React, { FC, useState } from "react";
import { Input, Button } from "@mui/material";

import { CoordinatePickerProps } from "./coordinate-picker.type";

export const CoordinatePicker: FC<CoordinatePickerProps> = ({
  defaultLatitude,
  defaultLongitude,
  onCheck,
}) => {
  const [latitude, setLatitude] = useState<string>(defaultLatitude);
  const [longitude, setLongitude] = useState<string>(defaultLongitude);
  return (
    <div>
      <Input
        placeholder="Latitude"
        value={latitude}
        onChange={(event) => setLatitude(event.target.value)}
      ></Input>
      <Input
        placeholder="Longitude"
        value={longitude}
        onChange={(event) => setLongitude(event.target.value)}
      ></Input>
      <Button onClick={() => onCheck(latitude, longitude)}>Check</Button>
    </div>
  );
};
