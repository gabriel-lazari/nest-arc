import { IsNotEmpty, MinLength } from "class-validator";

export class LiveDTO {
    @IsNotEmpty() @MinLength(3)
    url: string;
}