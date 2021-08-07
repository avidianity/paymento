import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LocationService } from './location.service';

@Module({
	imports: [HttpModule],
	providers: [LocationService],
})
export class LocationModule {}
