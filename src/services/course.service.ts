import { ICourseService } from "../interfaces/iCourse";
import { ICourseRepository } from "../interfaces/iCourse.Repository";
import { Course } from "../model/course.entities";

export class CourseService implements ICourseService {
  constructor(private repository: ICourseRepository) {}

  async getCourseAnalytics(instructorId: string): Promise<Object[] | null> {
    const months: { month: string; value: string }[] = [];
    for (let i = 0; i < 12; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      months.push({
        month: date.toLocaleString("default", { month: "long" }),
        value: date.toISOString().slice(0, 7),
      });
    }

    const response = await this.repository.getCourseAnalytics(instructorId);
    const aggregatedData: Record<string, number> = {};
    if (response) {
      response.forEach(({ _id, count }: any) => {
        aggregatedData[_id] = count;
      });
    } else {
      return null;
    }

    const output: Object[] = months.map(({ month, value }) => ({
      month,
      count: aggregatedData[value] || 0,
    }));

    return output;
  }

  addReview(data: any): Promise<Object | null> {
    return this.repository.addReview(data);
  }

  addAnswer(data: any): Promise<Object | null> {
    return this.repository.addAnswer(data);
  }

  addQuestion(data: any): Promise<Object | null> {
    return this.repository.addQuestion(data);
  }

  getCourseContent(courseId: string): Promise<Course | null> {
    return this.repository.getCourseWop(courseId);
  }

  updatePurchaseCount(courseId: string): Promise<Object | null> {
    return this.repository.updatePurchaseCount(courseId);
  }

  getTrendingCourses(): Promise<any[] | null> {
    return this.repository.getTrendingCourses();
  }

  getAllCourses(): Promise<Course[] | null> {
    return this.repository.getAllCourses();
  }

  getCourseWop(courseId: string): Promise<Course | null> {
    return this.repository.getCourseWop(courseId);
  }

  deleteCourse(courseId: string): Promise<object | null> {
    return this.repository.deleteCourse(courseId);
  }

  updateCourse(data: Course): Promise<Object | null> {
    const updateData = {
      ...data,
    };
    return this.repository.updateCourse(data.courseId || "", updateData);
  }

  async getCourses(instructorId: string): Promise<Course[] | null> {
    const courses = await this.repository.getCourses(instructorId);
    return courses;
  }

  async createCourse(data: Course) {
    try {
      const response = await this.repository.createCourse(data);
      return response;
    } catch (e: any) {
      throw new Error("Failed to create course.");
    }
  }
}
