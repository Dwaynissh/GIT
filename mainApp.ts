import { Application, Request, Response } from "express";



export const mainApp = (app: Application)=>{

    app.use("/api/v1", )

    app.get("/",(req: Request, res: Response)=>{
        try {
            return res.status(200).json({
                message: "Welcome to our Kids API"
            })
        } catch (error) {
            return res.status(400).json({
                message: "Error"
            })
        }
    })
}