import { Injectable, NotFoundException } from '@nestjs/common';
import { ArtistRepository } from './artist.repository';
import { ArtistDto } from './dto/artist.dto';

@Injectable()
export class ArtistService {
  constructor(private artistRepository: ArtistRepository) {}

  getAll() {
    return this.artistRepository.getAll();
  }

  getArtist(id: string) {
    const artist = this.artistRepository.getById(id);
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return artist;
  }

  createArtist(createArtistDto: ArtistDto) {
    return this.artistRepository.create(createArtistDto);
  }

  updateArtist(id: string, updateArtistDto: ArtistDto) {
    const artist = this.artistRepository.getById(id);
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return this.artistRepository.update(id, updateArtistDto);
  }

  deleteArtist(id: string) {
    const artist = this.artistRepository.getById(id);
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    this.artistRepository.delete(id);
  }
}
