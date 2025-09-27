import type { JSX } from "@emotion/react/jsx-runtime";
import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Typography,
  Grid,
} from "@mui/material";

type CoffeeProps = {};

const Coffee = (props: CoffeeProps): JSX.Element => {
  return (
    <>
      <Container>
        <Grid>
          <Card>
            <CardMedia title="" image="" />
            <CardContent>{}</CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
};

export default Coffee;
