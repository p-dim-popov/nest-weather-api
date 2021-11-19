import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MvcController } from "./mvc.controller";
import { UsersModule } from "../users/users.module";

@Module({
    imports: [AuthModule, UsersModule],
    controllers: [MvcController],
})
export class MvcModule {}