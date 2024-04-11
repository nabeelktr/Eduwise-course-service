import { Course } from "../model/course.entities";

export interface ICourseService {
  updatePurchaseCount(courseId: string): unknown;
  createCourse(data: Course): any;
  getCourses(instructorId: string): Promise<Course[] | null>;
  updateCourse(data: Course): Promise<Object | null>;
  deleteCourse(courseId: string): Promise<object | null> ;
  getCourseWop(courseId: string): Promise<Course | null> ;
  getCourseContent(courseId: string): Promise<Course | null> ;
  getAllCourses(): Promise<Course[] | null>;
  getTrendingCourses(): Promise<Course[] | null>;
}
