import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const LivePage = () => {
  const { id } = useParams();
  //my test: TUxeZiZ814U
  //Ostermontag: mn6W3HqrKtk
  var iframe = <></>;
  if (id && false) {
    iframe = (
      <iframe
        width="100%"
        height="315"
        style={{ maxWidth: "600px" }}
        src={
          "https://www.youtube-nocookie.com/embed/" +
          id +
          "?rel=0&modestbranding=1&showinfo=0"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; modestbranding"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    );
  }
  return <Box p={3}>{iframe}</Box>;
};

export default LivePage;
