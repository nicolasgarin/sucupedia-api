import { Test, TestingModule } from '@nestjs/testing';
import { SucusService } from './sucus.service';

describe('SucusService', () => {
  let service: SucusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SucusService],
    }).compile();

    service = module.get<SucusService>(SucusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
