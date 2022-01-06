import { IsNumber } from 'class-validator';
import { User } from 'src/models/user.entity';
import { Exists } from 'src/validators';
import { CoordinatesDTO } from './coordinates.dto';

export class AnonymousPassengerOutDTO extends CoordinatesDTO {
	@Exists(User)
	@IsNumber()
	passengerId: number;
}
