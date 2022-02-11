import { Controller, Get, Param, Req } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';

// API's Queries
// https://dcoff-planner/api/v1/<database>/<tabla_name>
// https://dcoff-planner/api/v1/<database>/<tabla_name>/id
// https://dcoff-planner/api/v1/<database>/<tabla_name>/<attribute>/<value>
// https://dcoff-planner/api/v1/<database>/<catalogue>/<package>/function
// https://dcoff-planner/api/v1/<database>/<view>
// https://dcoff-planner/api/v1/<database>/<view>/<attribute>/<value>
// https://dcoff-planner/api/v1/<database>/<query>
// API's Auth
// API's Email
// API's File
// API's AWS
// API's Google Drive

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('task/:id')
  getTask(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} task`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Get('tasks')
  getTasks(): string {
    return this.appService.getHello();
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get()
  findAllObservable(): Observable<any[]> {
    return of([]);
  }

}
