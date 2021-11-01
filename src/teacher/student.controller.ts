import { Controller, Get, Put, Param, Body, ParseUUIDPipe } from '@nestjs/common';

import {FindResponseStudentsDto, UpdateStudentDto, ResponseStudentsDto} from "../student/dto/student.dto"
import {TeacherService} from "./teacher.service"

@Controller("/:teacherId/students")
export class StudentTeacherController {

  constructor(private readonly studentTeacherService : TeacherService){}

  @Get()
  getStudentsOfTeacher(
    @Param() param : {teacherId: string}
  ) : FindResponseStudentsDto[] {
    return this.studentTeacherService.getStudentsOfTeacher(param.teacherId)
  }

  @Put("/:studentId")
  updateStudentsOfTeacher(
    // @Param() teacherId: string, 
    // @Param() studentId: string, 
    @Param() params : {teacherId: string, studentId: string}
    // @Body() body: UpdateStudentDto
  ) : FindResponseStudentsDto {
    // return `Update Student with Id ${studentId} of Teacher with Id ${teacherId}`
    return this.studentTeacherService.updateStudentsOfTeacher(params.teacherId, params.studentId)
  }

}
