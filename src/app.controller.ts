import { Controller, Get, Param, Req } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';

// API's Queries
// https://asl-planner/api/v1/<database>/<tabla_name>
// https://asl-planner/api/v1/<database>/<tabla_name>/id
// https://asl-planner/api/v1/<database>/<tabla_name>/<attribute>/<value>
// https://asl-planner/api/v1/<database>/<catalogue>/<package>/function
// https://asl-planner/api/v1/<database>/<view>
// https://asl-planner/api/v1/<database>/<view>/<attribute>/<value>
// https://asl-planner/api/v1/<database>/<query>

// API's APIs
// API's Auth
// API's Email
// API's File
// API's AWS
// API's Google Drive
// API's Http Request

// CI/CD
// branch master -> terra-prod
// branch uat    -> terra-uat
// branck dev    -> terra-dev

// terra-dev
// terra-uat
// terra-prod *

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
