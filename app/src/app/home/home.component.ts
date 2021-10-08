import { Component, OnInit } from '@angular/core';
import { User } from '../inserfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends: User[];
  constructor() {
    let user1: User = {
      nick: 'usuario uno',
      age: 15,
      email: 'jonathan.garzon.ruiz@unillanos.edu.co',
      friend: true,
      uid: 1
    };
    let user2: User = {
      nick: 'usuario dos',
      age: 20,
      email: 'jonathan.garzon.ruiz@gmail.com',
      friend: true,
      uid: 2
    };
    let user3: User = {
      nick: 'usuario tres',
      age: 20,
      email: 'jonatangarzon95@gmail.com',
      friend: true,
      uid: 3
    };
    this.friends = [user1, user2, user3];
  }

  ngOnInit(): void {
  }

}
