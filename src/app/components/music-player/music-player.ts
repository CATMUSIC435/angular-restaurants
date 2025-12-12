import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

interface Song {
  title: string;
  url: string;
}

@Component({
  selector: 'app-music-player',
  imports: [CommonModule],
  templateUrl: './music-player.html',
})
export class MusicPlayerComponent implements AfterViewInit {

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  isOpen = false;

  playlist: Song[] = [
    { title: 'Mất tích', url: '/musics/matich.mp3' },
    { title: 'Khóc đấy', url: '/musics/khocday.mp3' },
    { title: 'Nó', url: '/musics/no.mp3' },
  ];

  currentIndex = 0;
  isPlaying = false;

  currentTime = 0;
  duration = 0;

  togglePopup() {
    this.isOpen = !this.isOpen;
  }

  playSong(index: number) {
    this.currentIndex = index;
    const audio = this.audioPlayer.nativeElement;

    audio.src = this.playlist[index].url;
    audio.currentTime = 0;

    audio.play();
    this.isPlaying = true;
  }

  togglePlay() {
    const audio = this.audioPlayer.nativeElement;

    if (!audio.src) {
      audio.src = this.playlist[this.currentIndex].url;
    }

    this.isPlaying ? audio.pause() : audio.play();
    this.isPlaying = !this.isPlaying;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    this.playSong(this.currentIndex);
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.playSong(this.currentIndex);
  }

  updateProgress() {
    const audio = this.audioPlayer.nativeElement;
    this.currentTime = audio.currentTime;
    this.duration = audio.duration;
  }

  seek(event: any) {
    const audio = this.audioPlayer.nativeElement;
    audio.currentTime = event.target.value;
  }

  formatTime(sec: number): string {
    if (!sec || isNaN(sec)) return '00:00';

    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);

    // luôn đảm bảo 2 số
    const m = minutes < 10 ? '0' + minutes : minutes;
    const s = seconds < 10 ? '0' + seconds : seconds;

    return `${m}:${s}`;
  }

  ngAfterViewInit() {
    const audio = this.audioPlayer.nativeElement;
    audio.src = this.playlist[0].url;   // gán bài đầu tiên
  }

}
