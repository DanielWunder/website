import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import ScrollToAnchor from "../components/ScrollToAnchor";

const MainLayout = () => {
  return (
    <div
      className="App"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <ScrollToAnchor />
      <AppBar color="primary" position="sticky">
        <Toolbar sx={{ gap: 2 }}>
          <Link component={NavLink} to="/" sx={{ height: "60px" }}>
            <img
              alt="Bild konnte nicht geladen werden"
              src="/logo_weiss_transparent.png"
              style={{ height: "84px", marginTop: "-12px" }}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "left",
            }}
          >
            <Typography
              component={NavLink}
              to="/"
              variant="h6"
              sx={{
                textAlign: "left",
                color: "white",
                textDecoration: "none",
              }}
            >
              EChB Delbrück
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Button
              component={NavLink}
              to="/#gottesdienste"
              sx={{ color: "#fff" }}
            >
              Gottesdienste
            </Button>
            <Button
              component={NavLink}
              to="/#glaubensbekenntnis"
              sx={{ color: "#fff" }}
            >
              Glaubensbekenntnis
            </Button>
            <Button component={NavLink} to="/#kontakt" sx={{ color: "#fff" }}>
              Kontakt
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <div style={{ flexGrow: 1, backgroundColor: "#EAF2F8" }}>
        <Outlet />
      </div>
      <Toolbar
        variant="dense"
        sx={{
          justifyContent: "center",
          gap: 1,
          borderTop: "1px solid lightgrey",
        }}
      >
        <Link component={NavLink} to="/impressum">
          Impressum
        </Link>
        |
        <Link component={NavLink} to="/datenschutz">
          Datenschutz
        </Link>
      </Toolbar>
    </div>
  );
};

export default MainLayout;
