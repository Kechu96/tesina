import { Component, OnInit, Input } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { User } from 'src/app/user/shared/user.model';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  @Input() public rentals: Rental[];
  @Input() public user: User;
  constructor() { }

  ngOnInit() {
  }

}
