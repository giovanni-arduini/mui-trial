import { Typography, Box, Stack, Button, Container } from "@mui/material";
import Espresso from "../../assets/images/ec178d83e5f597b162cda1e60cb64194.jpg";

const Hero = () => {
  return (
    <>
      <Container id="home">
        {/* // stack è un container flexbox */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: "85vh",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              justifyContent: "center",
              padding: "3rem 0",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
            >
              Coffee for All
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
            >
              The revolution starts now
            </Typography>
          </Box>

          <Box sx={{ width: "50%", padding: 2, textAlign: "center" }}>
            <img
              src={Espresso}
              alt="espresso image"
              style={{ width: "100%" }}
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;
