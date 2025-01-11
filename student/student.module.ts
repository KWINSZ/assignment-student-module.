import { Module } from '@nestjs/common';
import { StudentService } from './student.service';  // Ensure the path is correct
import { StudentController } from './student.controller';  // Ensure the path is correct
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';  // Ensure the path is correct

@Module({
  imports: [TypeOrmModule.forFeature([Student])],  // Import the Student entity for TypeORM
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
