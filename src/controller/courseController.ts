import { NotFoundError } from "@nabeelktr/error-handler";
import { ICourseService } from "../interfaces/iCourse";
import { Course } from "../model/course.entities";

export class CourseController {
  constructor(private service: ICourseService) {}

  createCourse = async (data: Course) => {
    try {
      const response = await this.service.createCourse(data);
      return response;
    } catch (e: any) {
      console.log(e);
    }
  };

  getCourses = async (instructorId: string) => {
    try {
      return this.service.getCourses(instructorId);
    } catch (e: any) {
      console.log(e);
    }
  };

  updataCourse = async (data: Course) => {
    try {
      return this.service.updateCourse(data);
    } catch (e: any) {
      console.log(e);
    }
  };

  deleteCourse = async (courseId: string) => {
    try {
      return this.service.deleteCourse(courseId);
    } catch (e: any) {
      console.log(e);
    }
  };

  getCourseWop = async (courseId: string) => {
    try {
      return this.service.getCourseWop(courseId);
    } catch (e: any) {
      console.log(e);
    }
  };

  getAllCourses = async () => {
    try {
      return this.service.getAllCourses();
    } catch (e: any) {
      throw new NotFoundError();
    }
  };

  getTrendingCourses = async () => {
    try {
      return this.service.getTrendingCourses();
    } catch (e: any) {
      throw new NotFoundError();
    }
  };

  updatePurchaseCount = async (courseId: string) => {
    try {
      return this.service.updatePurchaseCount(courseId);
    } catch (e: any) {
      throw new NotFoundError();
    }
  };

  getCourseContent = async (courseId: string) => {
    try {
      return this.service.getCourseContent(courseId);
    } catch (e: any) {
      console.log(e);
    }
  };

  addQuestion = async (data: any) => {
    try {
      return this.service.addQuestion(data);
    } catch (e: any) {
      console.log(e);
    }
  };

  addAnswer = async (data: any) => {
    try {
      return this.service.addAnswer(data);
    } catch (e: any) {
      console.log(e);
    }
  };

  addReview = async (data: any) => {
    try {
      return this.service.addReview(data);
    } catch (e: any) {
      console.log(e);
    }
  };

  getCourseAnalytics = async (instructorId: string) => {
    try {
      return this.service.getCourseAnalytics(instructorId);
    } catch (e: any) {
      console.log(e);
    }
  };
  
}
