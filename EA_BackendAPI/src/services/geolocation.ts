import { Types } from "mongoose";

import { Geolocation } from '../interfaces/geolocation.interface';
import GeolocationModel from "../models/geolocation";
import ChallengeModel from "../models/user";


const get_Geolocations = async() => {
    const responseItem = await GeolocationModel.find({}).limit(10);
    return responseItem;
};

const update_Geolocation = async(idGeolocation: string, data: Geolocation) => {
    const responseItem = await GeolocationModel.findByIdAndUpdate({_id: idGeolocation}, data, {new: true});
    return responseItem;
};

const add_Geolocation = async (item: Geolocation) => {
    item.operativo = true;
    const responseInsert = await GeolocationModel.create(item);
    return responseInsert;
};

const add_Challenge_to_Geolocation = async(idGeolocation: string, idChallenger: string) => {
    const challenge = await ChallengeModel.findById({_id: idChallenger});
    const responseItem = await GeolocationModel.findByIdAndUpdate({_id: idGeolocation},
        {$addToSet: {record: new Types.ObjectId(challenge?.id)}}, {new: true});
    return responseItem;
};

const delete_Geolocation = async (idGeolocation: string) => {
    const responseItem = await ChallengeModel.findByIdAndRemove({_id: idGeolocation});
    return responseItem;
};



export {get_Geolocations, update_Geolocation, add_Challenge_to_Geolocation, delete_Geolocation, add_Geolocation}