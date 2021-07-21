import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/framework/database/prisma.service';
import { Order } from '../src/framework/pagination/pagination.utils';
import { buildDriverDto as buildDriverDto } from '../src/domain/driver/driver.factory';
import { buildMany } from '../src/framework/factory/factory.utils';

describe('DriverController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = app.get('PrismaService');
    await app.init();
  });

  afterEach(async () => {
    await prisma.driver.deleteMany();
  });

  it('/drivers (GET) when 0 drivers in db', () => {
    return request(app.getHttpServer())
      .get('/drivers')
      .query({
        pageNumber: 0,
        pageSize: 10,
        order: Order.ASC,
      })
      .expect(200)
      .expect({
        items: [],
        pageNumber: 0,
        pageSize: 10,
        lastPageNumber: 0,
        order: Order.ASC,
      });
  });

  it('/drivers/:id (GET)', async () => {
    const driver = buildDriverDto();
    const { id } = await prisma.driver.create({
      data: driver,
    });

    return request(app.getHttpServer())
      .get(`/drivers/${id}`)
      .expect(200)
      .expect({
        id: id,
        ...driver,
      });
  });

  it('/drivers (GET)', async () => {
    const itemsCount = 5;
    await prisma.driver.createMany({
      data: buildMany(buildDriverDto, itemsCount),
    });

    const pageSize = 3;
    const pageNumber = 1;
    const { body } = await request(app.getHttpServer())
      .get(`/drivers`)
      .query({
        pageNumber,
        pageSize,
        order: Order.ASC,
      })
      .expect(200);

    expect(body.items.length).toEqual(itemsCount - pageSize);
    expect(body.pageSize).toEqual(pageSize);
    expect(body.pageNumber).toEqual(pageNumber);
  });

  it('/drivers (POST)', () => {
    const driver = buildDriverDto();
    return request(app.getHttpServer())
      .post('/drivers')
      .send(driver)
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual({
          id: expect.any(Number),
          ...driver,
        });
      });
  });

  it('/drivers (PUT)', async () => {
    const driver = buildDriverDto();
    const { id } = await prisma.driver.create({
      data: buildDriverDto(),
    });

    return request(app.getHttpServer())
      .put(`/drivers/${id}`)
      .send(driver)
      .expect(200)
      .expect({
        id,
        ...driver,
      });
  });

  it('/drivers/:id (DELETE)', async () => {
    const { id } = await prisma.driver.create({
      data: buildDriverDto(),
    });

    await request(app.getHttpServer()).delete(`/drivers/${id}`).expect(200);

    const driver = await prisma.driver.findFirst({ where: { id } });
    expect(driver).toBeNull();
  });
});
