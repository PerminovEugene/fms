import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/general/database/prisma.service';

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

  it('/drivers (GET) when 0 drivers in db', () => {
    return request(app.getHttpServer()).get('/drivers').expect(200).expect({
      items: [],
      pageNumber: 0,
      pageSize: 10,
      lastPageNumber: 0,
    });
  });

  it('/drivers/:id (GET)', async () => {
    const { id } = await prisma.driver.create({
      data: { status: 'active' },
    });

    return request(app.getHttpServer())
      .get(`/drivers/${id}`)
      .expect(200)
      .expect({
        id: id,
        status: 'active',
      });
  });

  it('/drivers (POST)', () => {
    return request(app.getHttpServer())
      .post('/drivers')
      .send({
        status: 'active',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual({
          id: expect.any(Number),
          status: 'active',
        });
      });
  });

  it('/drivers (PUT)', async () => {
    const { id } = await prisma.driver.create({
      data: { status: 'banned' },
    });

    return request(app.getHttpServer())
      .put(`/drivers/${id}`)
      .send({
        status: 'active',
      })
      .expect(200)
      .expect({
        id,
        status: 'active',
      });
  });

  it('/drivers/:id (DELETE)', async () => {
    const { id } = await prisma.driver.create({
      data: { status: 'banned' },
    });

    await request(app.getHttpServer())
      .delete(`/drivers/${id}`)
      .expect(200)
      .expect({});

    const driver = await prisma.driver.findFirst({ where: { id } });
    expect(driver).toBeNull();
  });
});
