import { Module } from '@nestjs/common';
import { SucusService } from './sucus.service';
import { SucusController } from './sucus.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SucusController],
  providers: [SucusService, PrismaService],
})
export class SucusModule {}
