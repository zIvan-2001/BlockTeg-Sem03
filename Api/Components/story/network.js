import express from "express";
import {
  createStory,
  readStory,
  updateStory,
  destroyStory,
} from "./controller";

const RutaStory = express.Router();

RutaStory.route("/createStory").post(createStory);
RutaStory.route("/readStory").get(readStory);
RutaStory.route("/updateStory/:id").put(updateStory);
RutaStory.route("/destroyStory/:id").delete(destroyStory);

export default RutaStory;
