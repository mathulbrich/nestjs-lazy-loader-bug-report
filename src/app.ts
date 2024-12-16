/* eslint-disable @typescript-eslint/no-floating-promises */
import "source-map-support/register";

import { NestFactory } from "@nestjs/core";
import { AppModule } from "@app/app.module";

(async () => {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    cors: true,
  });
  await app.listen(3001);
})();
