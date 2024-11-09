import { EditProfileComponent } from './../component/profile-pages/widgets/model/edit-profile/edit-profile.component';
import { CanDeactivateFn } from '@angular/router';

export const preventUnsavedChangesGuard: CanDeactivateFn<EditProfileComponent> =
 (component) => {
  if(component.editForm?dirty){
    return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
  }

  return true;
};
