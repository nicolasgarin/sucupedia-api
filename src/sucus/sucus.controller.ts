import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SucusService } from './sucus.service';
import { CreateSucusDto } from './dto/create-sucus.dto';
import { UpdateSucusDto } from './dto/update-sucus.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('sucus')
@Controller('sucus')
export class SucusController {
  constructor(private readonly sucusService: SucusService) {}

  @Post()
  @ApiOperation({ summary: 'Registra una suculenta nueva' })
  create(@Body() createSucusDto: CreateSucusDto) {
    return this.sucusService.create(createSucusDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Devuelve todas las suculentas' })
  findAll() {
    return this.sucusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sucusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSucusDto: UpdateSucusDto) {
    return this.sucusService.update(+id, updateSucusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sucusService.remove(+id);
  }
}
