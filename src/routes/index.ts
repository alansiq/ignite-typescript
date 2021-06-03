import { Request, Response } from 'express'; 
import CreateCourseService from '../services/CreateCourseService';

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Dani"
    });

    CreateCourseService.execute({
        name: "React Js",
        duration: 5,
        educator: "Diego"
    });

    return response.status(201).json({ message: "Success" });
}