import { IIntroduceLessonProps } from '../../types/lesson.types';
import { Controller, Get, Query } from '@nestjs/common';
import { IntroduceLessonsService } from './introduce-lessons.service';

@Controller('introduce-lessons')
export class IntroduceLessonsController {
  constructor(
    private readonly _introduceLessonService: IntroduceLessonsService,
  ) {}

  @Get()
  get(@Query() query): Promise<IIntroduceLessonProps> {
    return this._introduceLessonService.getLesson(query);
  }
}
