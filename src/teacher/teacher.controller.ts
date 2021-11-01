import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';

import {FindTeacherResponseDto, TeacherResponseDto} from "./dto/teacher.dto"
import {TeacherService} from "./teacher.service"

@Controller("teachers")
export class TeacherController {

  constructor(private readonly teacherService:TeacherService){}

  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeachers()
  }

  @Get("/:teacherId")
  getTeacherById(
    @Param() param : {teacherId: string}
    // @Param() teacherId : string
  ) : FindTeacherResponseDto {
    // console.log(teacherId)
    return this.teacherService.getTeacherById(param.teacherId)
  }

}
