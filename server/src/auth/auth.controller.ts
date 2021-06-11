import {
	Body,
	Controller,
	Get,
	Post,
	Request,
	UseGuards,
} from '@nestjs/common';
import md5 from 'md5';
import { Token } from 'src/models/token.entity';
import { User } from 'src/models/user.entity';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { HttpBearerGuard } from './http-bearer.guard';

@Controller('auth')
export class AuthController {
	constructor(protected auth: AuthService) {}

	@Post('/register')
	async register(@Body() data: RegisterDTO) {
		const user = await this.auth.register(data);
		const text = String.random();
		const token = new Token();
		token.hash = md5(text);
		token.user = user;
		await token.save();
		return {
			user,
			token: text,
		};
	}

	@Post('/login')
	async login(@Body() data: LoginDTO) {
		const user = await this.auth.login(data);
		const text = String.random();
		const token = new Token();
		token.hash = md5(text);
		token.user = user;
		await token.save();
		return {
			user,
			token: text,
		};
	}

	@Post('/logout')
	@UseGuards(HttpBearerGuard)
	async logout(@Request() req) {
		const user: User = req.user;
		return await user.currentToken.remove();
	}

	@Get('/check')
	@UseGuards(HttpBearerGuard)
	check(@Request() req) {
		return req.user;
	}
}