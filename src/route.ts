import { Express, Request, Response } from "express";
import { getWeatherData } from "./controller/weather-map.controller";
export default function (app:Express)
{
    app.get("/health-check",(req:Request,res:Response)=>{res.sendStatus(200)});
    app.get("/weather-report",(req:Request,res:Response)=>getWeatherData(req,res))
}