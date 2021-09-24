import express from "express";
import { login, signUp, show, update, destroy, showAll } from "./controller";

const RutaUser = express.Router();

RutaUser.route("/login").post(login);
RutaUser.route("/signUp").post(signUp);
RutaUser.route("/show/:id").get(show);
RutaUser.route("/update/:id").put(update);
RutaUser.route("/destroy/:id").delete(destroy);
RutaUser.route("/list").get(showAll);

export default RutaUser;
