import { Injectable, NotFoundException } from '@nestjs/common';
import { TrackRepository } from './track.repository';
import { CreateTrackDto } from './dto/create-track.dto';

@Injectable()
export class TrackService {
  constructor(private trackRepository: TrackRepository) {}

  getAll() {
    return this.trackRepository.getAll();
  }

  getTrack(id: string) {
    const track = this.trackRepository.getById(id);
    if (!track) {
      throw new NotFoundException('Track not found');
    }
    return track;
  }

  createTrack(createTrackDto: CreateTrackDto) {
    return this.trackRepository.create(createTrackDto);
  }

  updateTrack(id: string, updateTrackDto: CreateTrackDto) {
    const track = this.trackRepository.getById(id);
    if (!track) {
      throw new NotFoundException('Track not found');
    }
    return this.trackRepository.update(id, updateTrackDto);
  }

  deleteTrack(id: string) {
    const track = this.trackRepository.getById(id);
    if (!track) {
      throw new NotFoundException('Track not found');
    }
    this.trackRepository.delete(id);
  }
}
