import { Component } from '@angular/core';

import { DUMMY_USERS, signal } from '../dummy-users';

const RandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //  Using Signal... which refreshes data on event... 
  selectedUser = signal( DUMMY_USERS[RandomIndex]);

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser(){
    //console.log('clicked');
    const RandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[RandomIndex]);
  }

}
