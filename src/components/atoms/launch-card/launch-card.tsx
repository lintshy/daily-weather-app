import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { LaunchCardProps } from "./launch-card.type";

export const LaunchCard: FC<LaunchCardProps> = ({
  title,
  heading1,
  heading2,
  value1,
  value2,
  onClick,
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2">
          {heading2}
          <br />
          {value1}
        </Typography>
        <Typography variant="body2">
          {heading1}
          <br />
          {value2}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClick}>
          Show daily trend!
        </Button>
      </CardActions>
    </Card>
  );
};
