import { FirstModule } from "@app/first.module";
import { SecondModule } from "@app/second.module";
import { Controller, Get } from "@nestjs/common";
import { LazyModuleLoader } from "@nestjs/core";

@Controller("app")
export class AppController {
  constructor(private readonly loader: LazyModuleLoader) {}

  @Get()
  async test() {
    const moduleRefA = await this.loader.load(() => FirstModule, { logger: true });
    const moduleRefB = await this.loader.load(() => SecondModule, { logger: true });

    const moduleAValue = await moduleRefA.resolve("TEST", undefined, { strict: false });
    const moduleBValue = await moduleRefB.resolve("TEST", undefined, { strict: false });
    const moduleAValue2 = await moduleRefA.resolve("TEST", undefined, { strict: false });

    return { moduleAValue, moduleBValue, moduleAValue2 };
  }
}
