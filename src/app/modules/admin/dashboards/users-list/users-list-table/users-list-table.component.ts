import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserInfoModel } from 'app/core/models/user.model';

@Component({
  selector: 'app-users-list-table',
  templateUrl: './users-list-table.component.html',
  styleUrls: ['./users-list-table.component.scss']
})
export class UsersListTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'email', 'role'];
  dataSource = new MatTableDataSource<UserInfoModel>(ELEMENT_DATA);

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: UserInfoModel[] = [
  {position: 1, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 2, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 3, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 4, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 5, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 6, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 7, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 8, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 9, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 10, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 11, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 12, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 13, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 14, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 15, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 16, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 17, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 18, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 19, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},
  {position: 20, name: "Slobodan Rankovic", email: "slobodeveloper@gmail.com", role: "admin"},

]
