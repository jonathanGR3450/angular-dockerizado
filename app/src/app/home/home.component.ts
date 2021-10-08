import { Component, OnInit } from '@angular/core';
import { User } from '../inserfaces/user';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends: User[];
  query: string = '';
  constructor(private userService: UserServiceService) {
    this.friends = userService.getFriends();
  }

  ngOnInit(): void {
  }

}
