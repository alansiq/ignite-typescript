interface Course {
    name: string,
    duration?: number,
    educator: string,
}

class CreateCourseService {
    
    execute(courseData: Course) {
        console.log(courseData.name, courseData.duration, courseData.educator);
    }
}

export default new CreateCourseService;