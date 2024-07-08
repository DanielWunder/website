import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Typography variant="h5" py={8} px={2}>
        Die von Ihnen aufgerufene Seite konnte nicht gefunden werden.
      </Typography>
      <Link to="/">Zur Startseite</Link>
    </>
  );
};

export default NotFoundPage;
