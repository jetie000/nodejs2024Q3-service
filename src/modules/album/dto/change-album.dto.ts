import { IsNumber, IsString } from 'class-validator';

export class ChangeAlbumDto {
  @IsString()
  name: string;

  @IsNumber()
  year: number;
}
