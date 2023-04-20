import { ObjectId, Schema, model } from "mongoose";

export interface Geolocation {
    _id: string;
    challenge?: ObjectId[];
    coordenadas: string;  
    operativo: boolean;
}