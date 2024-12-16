import { Module, Scope } from "@nestjs/common";
import { randomBytes } from "node:crypto";

@Module({
  providers: [
    {
      provide: "TEST",
      useValue: `SECOND ${randomBytes(20).toString('hex')}`,
      scope: Scope.REQUEST,
      durable: false,
    },
  ],
})
export class SecondModule {}
