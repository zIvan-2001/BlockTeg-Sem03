import express from "express";
import RutaUser from "./Components/user/network";
import RutaStory from "./Components/story/network";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(RutaUser, RutaStory);

const PORT = 8080;

app.listen(PORT);
