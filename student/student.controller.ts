import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Get } from '@nestjs/common';
import { Put, Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { UpdateStudentDto } from './dto/update-student.dto';  // Adjust path if necessary





@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }
  @Get()
async findAll() {
  return this.studentService.findAll();
}
@Put(':id')
async update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
  return this.studentService.update(id, updateStudentDto);
}
@Delete(':id')
async remove(@Param('id') id: number) {
  return this.studentService.remove(id);
}
}
