import { GalleryPhotosComponent } from './../../favorite-page/favorite-photos/photos/gallery-photos/gallery-photos.component';
import { images } from './../../../shared/interface/common';
import { Component, OnInit, input } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem, VideoItem, YoutubeItem, IframeItem } from 'ng-gallery';

@Component({
  selector: 'app-member-photos',
  standalone: true,
  templateUrl: './member-photos.component.html',
  styleUrls: ['./member-photos.component.css']
})

export class MemberPhotosComponent {  

  member = input.required<GalleryItem[]>();
}