import { Test, TestingModule } from '@nestjs/testing';
import { SucusController } from './sucus.controller';
import { SucusService } from './sucus.service';

describe('SucusController', () => {
  let controller: SucusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SucusController],
      providers: [SucusService],
    }).compile();

    controller = module.get<SucusController>(SucusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
