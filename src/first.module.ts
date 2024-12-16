import { Module, Scope } from "@nestjs/common";
import { randomBytes } from "node:crypto";

@Module({
  providers: [
    {
      provide: "TEST",
      useValue: `FIRST ${randomBytes(20).toString('hex')}`,
      scope: Scope.REQUEST,
      durable: false,
    },
  ],
})
export class FirstModule {}
