# FMS
Simple fleet management service api

## Prisma ORM 

All db info inside .prisma files. Base file in ./prisma folder has connection configuration. Tables configuration separated on different .prisma files, you can find them in entity module folder. These .prisma files should be merged into one `./prisma/.schema.prisma` after each db structure update. For this:

```console
npm run prisma:merge
```

And after that create migration:

```console
npm run prisma:migrate {MIGRATION_NAME}
```

example npm run prisma:migrate add_vehicle_table