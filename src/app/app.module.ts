import { Module } from '@nestjs/common';

import { StudentController } from "../student/student.controller"
import { TeacherController } from "../teacher/teacher.controller"
import { StudentTeacherController } from "../teacher/student.controller"
import {StudentService} from "../student/student.service"
import { TeacherService } from '../teacher/teacher.service'
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';


@Module({
  imports: [StudentModule, TeacherModule],
  // controllers: [StudentController, TeacherController, StudentTeacherController],
  // providers: [StudentService, TeacherService]
})
export class AppModule {}
