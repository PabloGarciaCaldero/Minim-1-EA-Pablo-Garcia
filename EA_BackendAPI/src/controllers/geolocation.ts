import { Request,Response } from "express";

import { handleHttp } from "../utils/error.handle";

import {add_Geolocation, get_Geolocations, update_Geolocation, add_Challenge_to_Geolocation, delete_Geolocation } from "../services/geolocation";


const getGeolocations = async (req:Request, res:Response) => {
    try{
        const response = await get_Geolocations();
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_GET_GEOLOCATION");
    }
};

const updateGeolocations = async ({params, body}:Request, res:Response) => {
    try{
        const {idGeolocation} = params;
        const response = await update_Geolocation(idGeolocation, body);
        res.send(response);
    } catch (e){
        handleHttp(res, "ERROR_UPDATE_GEOLOCATION")
    }
};

const addGeolocation = async ({body}:Request, res:Response) => {
    try{
        const response = await add_Geolocation(body);
        res.send(response);
    }catch(e){
        handleHttp(res,"ERROR_POST_GEOLCATION");
    }
};


const addGeolocationToChallenge = async ({params}:Request, res:Response) => {
    try{
        const {idUser, idChallenge} = params;
        const response = await add_Challenge_to_Geolocation(idUser, idChallenge);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_POST_GEOLOCATION");
    }
};


const deleteGeolocation = async ({params}:Request, res:Response) => {
    try{
        const {idGeolocation} = params;
        const response = await delete_Geolocation(idGeolocation);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_DELETE_GEOLOCATION");
    }
};


export {getGeolocations, updateGeolocations, addGeolocation, addGeolocationToChallenge, deleteGeolocation}