import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { User } from './user.model';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //  Required:true means the html requires the attribute!

  @Input({ required: true }) user!: User;

  //  This is how I handled the inputs one at a time
  /*
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  */

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
