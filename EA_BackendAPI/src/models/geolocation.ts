import { Schema, model } from "mongoose";

import { Geolocation } from "../interfaces/geolocation.interface";

const GeolocationSchema = new Schema<Geolocation>(
    {
        challenge: {
            type: [Schema.Types.ObjectId],
            ref: 'challenges',
        } ,
        coordenadas: {
            type: String,
            required: true,
        },
        operativo: {
            type: Boolean,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const GeolocationModel = model('geolocation', GeolocationSchema);

export default GeolocationModel;