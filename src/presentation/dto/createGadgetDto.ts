import 'reflect-metadata'
import { IsString, IsDateString } from 'class-validator'

export class CreateGadgetDto {
    @IsString()
    name!: string

    @IsString()
    brand!: string

    @IsDateString()
    releaseDate!: Date

    @IsString()
    description!: string // new property
}
