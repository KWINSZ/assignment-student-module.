import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',  // Empty password in XAMPP by default
      database: 'students_db',
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    StudentModule,
  ],
})
export class AppModule {}
