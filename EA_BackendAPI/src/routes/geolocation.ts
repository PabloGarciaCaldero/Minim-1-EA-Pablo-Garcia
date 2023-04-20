import { Router } from "express";

import { addGeolocation, deleteGeolocation, getGeolocations, updateGeolocations } from "../controllers/geolocation"
import { add_Challenge_to_Geolocation } from "../services/geolocation";

const router = Router();

router.get("/get/all", getGeolocations);

router.post("/add", addGeolocation);

router.post("/add/challenge"), add_Challenge_to_Geolocation;

router.post("/update/:idGeolocation"), updateGeolocations;

router.delete("/delete/:idGeolocation"), deleteGeolocation;

export { router };