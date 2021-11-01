import { Injectable } from '@nestjs/common';

import {FindTeacherResponseDto} from "./dto/teacher.dto"
import {FindResponseStudentsDto} from "../student/dto/student.dto"
import {teachers, students} from "../db"

@Injectable()
export class TeacherService {

    private teachers = teachers
    private students = students

    getTeachers():FindTeacherResponseDto[] {
        return this.teachers
    }

    getTeacherById(teacherId:string):FindTeacherResponseDto{
        return this.teachers.find(teacher => {
            return teacherId === teacher.id
        })
    }

    getStudentsOfTeacher(teacherId: string): FindResponseStudentsDto[] {
        return this.students.filter(student => {
            return student.teacher === teacherId
        })
    }

    updateStudentsOfTeacher(teacherId: string, studentId: string): FindResponseStudentsDto {
        let updatedStudent: FindResponseStudentsDto

        let updatedStudentList = this.students.map(student => {
            if(student.id === studentId){
                updatedStudent = {
                    ...student,
                    teacher: teacherId
                };
                return updatedStudent
            } else return student
        });

        this.students = updatedStudentList

        return updatedStudent
    }
}
