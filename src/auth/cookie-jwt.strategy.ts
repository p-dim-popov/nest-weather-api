import { Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";
import { UserDto } from "../users/user.dto";

@Injectable()
export class CookieJwtStrategy extends PassportStrategy(
    Strategy,
    "cookie-jwt",
) {
    constructor(private config: ConfigService) {
        super({
            jwtFromRequest: (request: Request) => request.cookies.access_token,
            ignoreExpiration: !!config.get("IS_DEVELOPMENT"),
            secretOrKey: config.get<string>("JWT__SECRET"),
        });
    }

    async validate(payload: any): Promise<Partial<UserDto>> {
        return { id: payload.sub, email: payload.email };
    }
}
