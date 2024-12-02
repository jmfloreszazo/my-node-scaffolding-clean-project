import 'reflect-metadata'
import { IsString, IsDateString } from 'class-validator'

export class CreateGadgetDto {
    /**
     * The unique identifier of the gadget.
     */
    @IsString()
    id!: string

    /**
     * The name of the gadget.
     */
    @IsString()
    name!: string

    /**
     * The brand of the gadget.
     */
    @IsString()
    brand!: string

    /**
     * The release date of the gadget.
     */
    @IsDateString()
    releaseDate!: string

    /**
     * A description of the gadget.
     */
    @IsString()
    description!: string
}
