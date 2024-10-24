import { Component } from '@angular/core';
import { ConversationPanelSkeletonComponent } from '../../widgets/conversation-panel-skeleton/conversation-panel-skeleton.component';
import { CreatePostSkeletonComponent } from '../../widgets/create-post-skeleton/create-post-skeleton.component';
import { LikePageSkeletonComponent } from '../../widgets/like-page-skeleton/like-page-skeleton.component';
import { ProfileBoxSkeletonComponent } from '../../widgets/profile-box-skeleton/profile-box-skeleton.component';
import { SidebarOneSkeletonComponent } from '../../widgets/sidebar/sidebar-one-skeleton/sidebar-one-skeleton.component';
import { StorySkeletonComponent } from '../../widgets/story-skeleton/story-skeleton.component';
import { SuggestionBoxSkeletonComponent } from '../../widgets/suggestion-box-skeleton/suggestion-box-skeleton.component';
import { BirthdayReminderSkeletonComponent } from '../../widgets/birthday-reminder-skeleton/birthday-reminder-skeleton.component';
import { GallerySectionSkeletonComponent } from '../../widgets/gallery-section-skeleton/gallery-section-skeleton.component';
import { PostPanelSkeletonComponent } from '../../widgets/post-panel-skeleton/post-panel-skeleton.component';
import { HeaderOneSkeletonComponent } from '../../widgets/header/header-one-skeleton/header-one-skeleton.component';

@Component({
  selector: 'app-skeleton-style-2',
  standalone: true,
  imports: [ConversationPanelSkeletonComponent, SidebarOneSkeletonComponent, StorySkeletonComponent,
    ProfileBoxSkeletonComponent, SuggestionBoxSkeletonComponent, LikePageSkeletonComponent,HeaderOneSkeletonComponent,
    CreatePostSkeletonComponent, BirthdayReminderSkeletonComponent,GallerySectionSkeletonComponent,
    PostPanelSkeletonComponent],
  templateUrl: './skeleton-style-2.component.html',
  styleUrl: './skeleton-style-2.component.scss'
})
export class SkeletonStyle2Component {

}