import axios from "axios";
import { Request, Response } from "express";
export const getWeatherData = async(req:Request,res:Response) => {
    try {

const date:number = new Date().getDate();
let isPrime = true;
if (date === 1) {
    res.status(404).send("Date is not prime so you can’t request the data")
}
else if (date > 1) {

    for (let i = 2; i < date; i++) {
        if (date % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        const weatherData=await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=28&lon=77&appid=daa73a8230cb83f3630ee6f7d2977fab")
        res.status(200).send(weatherData.data)
    } else {
        res.status(404).send("Date is not prime so you can’t request the data")
    }
}
    } catch (error) {
        res.status(500).send("something wnet wrong !!")
        
    }
}