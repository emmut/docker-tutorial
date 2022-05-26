import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.json([
    {
      id: 1,
      name: "Thing 1",
    },
    {
      id: 2,
      name: "Thing 2",
    },
    {
      id: 3,
      name: "Thing 3",
    },
    {
      id: 4,
      name: "Thing 4",
    },
  ]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
