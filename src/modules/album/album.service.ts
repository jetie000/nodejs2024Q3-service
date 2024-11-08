import { Injectable, NotFoundException } from '@nestjs/common';
import { AlbumRepository } from './album.repository';
import { CreateAlbumDto } from './dto/create-album.dto';

@Injectable()
export class AlbumService {
  constructor(private albumRepository: AlbumRepository) {}

  getAll() {
    return this.albumRepository.getAll();
  }

  getAlbum(id: string) {
    const album = this.albumRepository.getById(id);
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    return album;
  }

  createAlbum(createAlbumDto: CreateAlbumDto) {
    return this.albumRepository.create(createAlbumDto);
  }

  updateAlbum(id: string, updateAlbumDto: CreateAlbumDto) {
    const album = this.albumRepository.getById(id);
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    return this.albumRepository.update(id, updateAlbumDto);
  }

  deleteAlbum(id: string) {
    const album = this.albumRepository.getById(id);
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    this.albumRepository.delete(id);
  }
}
