import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSucusDto } from './dto/create-sucus.dto';
import { UpdateSucusDto } from './dto/update-sucus.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SucusService {
  constructor(private prismaService: PrismaService) {}

  async create(createSucusDto: CreateSucusDto) {
    try {
      return await this.prismaService.sucu.create({
        data: createSucusDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ConflictException(`Sucu with name ${createSucusDto.name} already exists`);
        }
      }
    }

  }

  findAll() {
    return this.prismaService.sucu.findMany();
  }

  async findOne(id: number) {
    const sucuFound = await this.prismaService.sucu.findUnique({
      where: {
        id: id,
      },
    });

    if (!sucuFound) {
      throw new NotFoundException(`Sucu with id ${id} not found`);
    }

    return sucuFound;
  }

  async update(id: number, updateSucusDto: UpdateSucusDto) {

    const sucuUpdate = await this.prismaService.sucu.update({
      where: {
        id
      },
      data: updateSucusDto
    })

    if (!sucuUpdate) {
      throw new NotFoundException(`Sucu with id ${id} not found`);
    }

    return sucuUpdate;
  }

  async remove(id: number) {
    const deletedSucu = this.prismaService.sucu.delete({
      where: {
        id: id,
      }
    })

    if (!deletedSucu) {
      throw new NotFoundException(`Sucu with id ${id} not found`);

    }
    return deletedSucu;
  }
}
