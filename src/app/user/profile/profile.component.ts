import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { switchMap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import {  NonNullableFormBuilder } from '@angular/forms';
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

  profileForm = this.fb.group({
    uid: [''],
    displayName: [''],
    firstName: [''],
    lastName: [''],
    phone: [''],
    address: [''],
  })

  constructor(
    private userService: UserService,
    private toast: HotToastService,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.userService.currentUserProfile$
      .pipe(untilDestroyed(this))
      .subscribe((user) => {
        this.profileForm.patchValue({ ...user });
      });
  }

  uploadImage(event: any, {uid}: ProfileUser) {
    this.userService
      .uploadImage(event.target.files[0], `images/profile/${uid}`)
      .pipe(
        this.toast.observe({
          loading: 'Image is being uploaded...',
          success: 'Image uploaded successfully',
          error: 'There was an error',
        }),
        switchMap((photoURL) =>
          this.userService.updateUser({ uid, photoURL })
        )
      )
      .subscribe();
  }

  saveProfile() {
    const {uid, ...data} = this.profileForm.value;

    if(!uid){
      return;
    }

    this.userService
      .updateUser({uid, ...data})
      .pipe(
        this.toast.observe({
          loading: 'Updating data...',
          success: 'Data has bee updated',
          error: 'There was an error updatng the data',
        })
      )
      .subscribe();
  }
}
