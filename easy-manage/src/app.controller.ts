import { Controller, Get, Post, HttpCode, HttpException, HttpStatus, Param, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { RequestParamType } from 'src/interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getAll() {
    return this.appService.getAll();
  }

  @Get(':id')
  @HttpCode(200)
  getDetail(@Param('id') id: number) {
    return this.appService.getDetail(id);
  }

  @Post()
  @HttpCode(204)
  async createRecode(@Body() param: RequestParamType): Promise<void> {
    const res = await this.appService.createRecode(param);
    if (!res) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'fauld create recode.',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
