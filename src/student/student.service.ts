import { Injectable } from '@nestjs/common';
import {v4 as uuid} from "uuid"

import {FindResponseStudentsDto, ResponseStudentsDto, CreateStudentDto, UpdateStudentDto} from "./dto/student.dto"
import {students} from "../db"

@Injectable()
export class StudentService {

    private students = students;

    getStudents() : FindResponseStudentsDto[] {
        return this.students
    }

    getStudentById(studentId : string) : FindResponseStudentsDto {
        return this.students.find(student => {
            return studentId === student.id
        })
    }

    createStudent(body : CreateStudentDto) : ResponseStudentsDto {
        let newStudent : ResponseStudentsDto
        newStudent = {
            id: uuid(),
            ...body
        }
        this.students.push(newStudent)
        return newStudent
    }

    updateStudent( studentId : string, body : UpdateStudentDto) : ResponseStudentsDto {
        let updatedStudent : ResponseStudentsDto
        let updatedStudentList = this.students.map(student => {
            if(student.id === studentId){
                updatedStudent = {
                    id : studentId,
                    ...body
                };
                return updatedStudent
            } else return student
        });

        this.students = updatedStudentList

        return updatedStudent  
    }

}
