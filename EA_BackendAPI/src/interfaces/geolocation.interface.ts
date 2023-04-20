import { ObjectId } from "mongodb";

export interface Geolocation {
    challenge?: ObjectId[];
    coordenadas: string;  
    operativo: boolean;
}