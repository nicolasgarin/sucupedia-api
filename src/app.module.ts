import { Module } from '@nestjs/common';
import { SucusModule } from './sucus/sucus.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [SucusModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
