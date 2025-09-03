import { Box } from "@mui/material";
import { memo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const data = [
  {
    startDate: "2025-09-01",
    endDate: "2025-09-15",
    type: "images",
    links: ["/erntedankfest_1.jpg", "/erntedankfest_2.jpg"],
  },
  {
    startDate: "2025-09-02",
    endDate: "2025-10-06",
    type: "images",
    links: ["/stadthalle-1.jpg", "/stadthalle-2.jpg"],
  },
];
const EventsComponent = () => {
  // const [imageLinks, setImageLinks] = useState<string[]>([]);
  // const loaded = useRef(false);
  var imageLinks: string[] = [];

  if (data) {
    var dateNow = new Date();
    for (let row of data) {
      if (row) {
        if (
          new Date(row.startDate) < dateNow &&
          dateNow < new Date(row.endDate)
        ) {
          if (row.type === "images") {
            imageLinks = imageLinks.concat(row.links);
          }
        }
      }
    }
  }

  // useEffect(() => {
  //   if (loaded.current) {
  //     return;
  //   }
  //   loaded.current = true;
  //   fetch(
  //     "https://websitestorageechb.blob.core.windows.net/public/events.txt?sp=r&st=2024-05-04T13:21:43Z&se=2024-12-31T22:21:43Z&spr=https&sv=2022-11-02&sr=b&sig=wEpZTMVa%2F7pOHDdiMjGQFkFvwd87Dd13MYUi7V%2FQGuM%3D"
  //   )
  //     .then((r) => r.text())
  //     .then((t) => {
  //       if (t) {
  //         var rows = t.split("\n");
  //         var dateNow = new Date();
  //         for (let row of rows) {
  //           if (row) {
  //             var columns = row.split("\t");
  //             if (columns.length > 3) {
  //               var startDate = new Date(columns[0]);
  //               var endDate = new Date(columns[1]);
  //               var type = columns[2];
  //               if (startDate < dateNow && dateNow < endDate) {
  //                 if (type == "images") {
  //                   setImageLinks(columns.slice(3, columns.length));
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     });
  // }, []);

  if (imageLinks.length > 0) {
    return (
      <Box p={2}>
        <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
        >
          {imageLinks.map((link, index) => (
            <div key={index}>
              <img
                alt="Bild konnte nicht geladen werden"
                src={link}
                style={{ maxWidth: "600px" }}
              />
            </div>
          ))}
        </Carousel>
      </Box>
    );
  }
  return <></>;
};

export default memo(EventsComponent);
