import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from '@nestjs/common';

import {CreateStudentDto, UpdateStudentDto, FindResponseStudentsDto, ResponseStudentsDto} from "./dto/student.dto"
import {StudentService} from "./student.service"


@Controller("students")
export class StudentController {

  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents() : FindResponseStudentsDto[] {
    return this.studentService.getStudents()
  }

  @Get("/:studentId")
  getStudentById(
    // @Param() params : {studentId: string}  // way 1  // this is for getting all params
    @Param("studentId", new ParseUUIDPipe()) studentId : string  // way 2   // this is for getting particular param
  ) : FindResponseStudentsDto {
    // console.log(params)
    return this.studentService.getStudentById(studentId)
  }

  @Post()
  createStudent(
    @Body() body : CreateStudentDto
  ) : ResponseStudentsDto {
    // console.log(body)
    return this.studentService.createStudent(body)
  }

  @Put("/:studentId")
  updateStudent(
    @Param("studentId", new ParseUUIDPipe()) studentId : string, 
    @Body() body : UpdateStudentDto
  ) : ResponseStudentsDto {
    return this.studentService.updateStudent(studentId, body)
  }

}
