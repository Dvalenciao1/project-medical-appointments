import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Medical History')
@Controller('medical-history')
export class MedicalHistoryController {}
