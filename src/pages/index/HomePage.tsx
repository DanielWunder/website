import { Email, LocationOn } from "@mui/icons-material";
import {
  Box,
  Container,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import EventsComponent from "./components/EventsComponent";

const NoWrap = styled.span`
  white-space: nowrap;
`;

const ImageBackground = styled.div`
  padding: 16px;
  height: 35vh;
  color: white;
  transform-style: preserve-3d;
  background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(/bethaus.jpg);

  @media (max-width: 900px) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(/bethaus_mobil.jpg);
  }
`;

interface TitleProps {
  id: string;
  title: string;
}
const Title = (props: TitleProps) => {
  return (
    <Typography
      variant="h4"
      id={props.id}
      gutterBottom
      sx={{ scrollMarginTop: 65, mt: 8 }}
    >
      {props.title}
    </Typography>
  );
};

interface DateTableRowProps {
  day: string;
  time: string;
  name: string;
  info?: string;
}
const DateTableRow = (props: DateTableRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">
          {props.day}, <NoWrap>{props.time} Uhr</NoWrap>
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{props.name}</Typography>
        {props.info && <Typography variant="body2">{props.info}</Typography>}
      </TableCell>
    </TableRow>
  );
};

const HomePage = () => {
  var events = <></>;
  var today = new Date();
  if (today.toISOString() < "2024-09-30") {
    events = (
      <>
        <Typography variant="h5" mt={2}>
          Erntedankfest
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 550,
            display: "inline-block",
            backgroundColor: "#e8eaf6",
          }}
        >
          <Table>
            <TableBody>
              <DateTableRow day="So 29.09." time="10" name="Erntedankfest" />
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
  return (
    <>
      <ImageBackground>
        <Typography variant="h4" fontWeight="bold">
          Evangeliums-Christen-Baptisten Delbrück
        </Typography>
        <img
          alt="Bild konnte nicht geladen werden"
          src="/logo_weiss_transparent.png"
          style={{
            height: "150px",
            position: "absolute",
            left: 0,
            bottom: 0,
            marginBottom: "-30px",
          }}
        />
      </ImageBackground>
      {/* <Typography variant="h4" fontWeight="bold" sx={{ pt: 4 }}>
        Evangeliums-Christen-Baptisten Delbrück
      </Typography> */}
      <Container maxWidth="md" disableGutters sx={{ paddingX: 2, pb: 5 }}>
        <EventsComponent />
        <Title id="gottesdienste" title="Unsere Gottesdienste" />
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 550, display: "inline-block" }}
        >
          <Table>
            <TableBody>
              <DateTableRow day="Sonntags" time="10" name="Gottesdienst" />
              <DateTableRow day="Sonntags" time="16" name="Gottesdienst" />
              <DateTableRow
                day="Freitags"
                time="19"
                name="Gebets- und Bibelstunde"
              />
            </TableBody>
          </Table>
        </TableContainer>
        {events}
        <Title id="glaubensbekenntnis" title="Glaubenbekenntnis" />
        <Typography variant="h5">Wir sind</Typography>
        <ul style={{ textAlign: "left" }}>
          <li>
            <Typography>
              eine Evangeliums-Christen-Baptisten Gemeinde, die dem
              neutestamentlichen Vorbild entsprechen will. Unsere Gemeinde
              besteht aus Menschen verschiedener Altersstufen und Berufe, die
              eine persönliche Entscheidung für Jesus Christus getroffen haben
              und auf ihren Glauben getauft sind. Wir vertreten keine
              "heilsnotwendige" Sonderlehre und lassen uns gerne an dem Maßstab
              der Bibel überprüfen.
            </Typography>
          </li>
        </ul>
        <Typography variant="h5">Wir glauben</Typography>
        <ul style={{ textAlign: "left" }}>
          <li>
            <Typography>
              dass der eine ewige unwandelbare Gott sich als Vater, Sohn und
              Heiliger Geist offenbart.
            </Typography>
          </li>
          <li>
            <Typography>
              dass Gott durch sein Allmachtswort den Himmel und die Erde, alle
              Lebewesen und den Menschen geschaffen hat.
            </Typography>
          </li>
          <li>
            <Typography>
              dass die Schriften des Alten und Neuen Testaments von Gott
              inspiriert und deshalb fehlerlos sind und die höchste und
              endgültige Autorität in Bezug auf Glauben und Leben haben.
            </Typography>
          </li>
          <li>
            <Typography>
              dass alle Menschen vor Gott durch ihre sündhafte Natur schuldig
              sind.
            </Typography>
          </li>
          <li>
            <Typography>
              dass Jesus Christus, der Sohn Gottes, Mensch geworden, am Kreuz
              auf Golgatha für die Sündenschuld der Menschen gestorben ist und
              dadurch die Versöhnung mit Gott erwirkt hat.
            </Typography>
          </li>
          <li>
            <Typography>
              dass alle Menschen, die ihre Schuld vor Gott bekennen und im
              Glauben Jesus Christus als Retter und Herrn aufnehmen,
              wiedergeboren sind durch den Heiligen Geist und zum Leib Christi
              gehören.
            </Typography>
          </li>
          <li>
            <Typography>
              dass Jesus Christus auferstanden ist und eines Tages wiederkommen
              wird, um seine Gemeinde zu sich zu nehmen.
            </Typography>
          </li>
        </ul>
        <Typography variant="h5">Wir wollen</Typography>
        <ul style={{ textAlign: "left" }}>
          <li>
            <Typography>
              den Menschen, die in Schuld und Ausweglosigkeit leben, helfen,
              sich für Jesus Christus zu entscheiden, und dadurch den Weg zum
              wahren, sinnerfüllten und ewigen Leben zu finden.
            </Typography>
          </li>
        </ul>
        <Title id="kontakt" title="Kontakt" />
        <Box
          display="flex"
          gap={1}
          alignItems="strech"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              width: "240px",
              justifyContent: "center",
            }}
          >
            <Email sx={{ paddingX: 1 }} />
            <Link href="mailto:info@echb-delbrueck.de" sx={{ flexGrow: 1 }}>
              info@echb-delbrueck.de
            </Link>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1,
              width: "240px",
              justifyContent: "center",
            }}
          >
            <LocationOn sx={{ paddingX: 2 }} />
            <Typography sx={{ width: "fit-content", flexGrow: 1 }}>
              Schwalbenweg 6<br />
              33129 Delbrück
            </Typography>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
