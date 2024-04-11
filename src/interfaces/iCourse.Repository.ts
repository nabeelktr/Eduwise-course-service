import { Course } from "../model/course.entities";

export interface ICourseRepository {
  updatePurchaseCount(courseId: string): Promise<Object | null>;
  createCourse(data: Course): Promise<object | null> ;
  getCourses(instructorId: string): Promise<Course[] | null>;
  updateCourse(id: string, data: Course): Promise<object | null> ;
  deleteCourse(courseId: string): Promise<object | null> ;
  getCourseWop(courseId: string): Promise<Course | null>;
  getCourseContent(courseId: string): Promise<Course | null>;
  getAllCourses(): Promise<Course[] | null>;
  getTrendingCourses(): Promise<Course[] | null>;
}
