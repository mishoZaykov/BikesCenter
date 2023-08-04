import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'firebase/auth';
import { concatMap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { FormControl, FormGroup } from '@angular/forms';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { ProfileUser } from 'src/app/types/user-profile';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user$ = this.userService.currentUserProfile$;

  profileForm = new FormGroup({
    uid: new FormControl(''),
    displayName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(private userService: UserService, private toast: HotToastService) {}

  ngOnInit(): void {
    this.userService.currentUserProfile$
    .pipe(untilDestroyed(this))
    .subscribe((user) => {
      this.profileForm.patchValue({...user});
    })
  }

  uploadImage(event: any, user: ProfileUser) {
    this.userService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe(
        {
          loading: 'Image is being uploaded...',
          success: 'Image uploaded successfully',
          error: 'There was an error'
        }
      ),
      concatMap((photoURL) => this.userService.updateUser({uid: user.uid,photoURL}))
    ).subscribe()
  }

  saveProfile(){
    const profileData = this.profileForm.value ;
    this.userService
    .updateUser(profileData)
    .pipe(
      this.toast.observe({
        loading: 'Updating data...',
        success: 'Data has bee updated',
        error: 'There was an error updatng the data'
      })
    ).subscribe()
  }
}
