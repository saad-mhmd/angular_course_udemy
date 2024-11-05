import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-root', // tells Angular to render this component in the <app-root> tag
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, ],
  templateUrl: './app.component.html', // tells Angular to use this HTML file as the template
  styleUrl: './app.component.css', // tells Angular to use this CSS file as the styles
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

}
