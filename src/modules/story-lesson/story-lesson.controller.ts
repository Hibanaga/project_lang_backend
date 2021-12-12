import { IStoryLessonProps } from './../../types/lesson.types';
import { Controller, Post, Query, Get } from '@nestjs/common';
import { StoryLessonService } from './story-lesson.service';

@Controller('story-lesson')
export class StoryLessonController {
  constructor(private readonly _storyLessonService: StoryLessonService) {}

  @Get()
  get(@Query() query): Promise<IStoryLessonProps> {
    return this._storyLessonService.get(query);
  }
}
