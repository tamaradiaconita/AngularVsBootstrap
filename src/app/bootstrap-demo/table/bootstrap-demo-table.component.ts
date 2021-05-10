import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/overlay-directives';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation-dialog/confirmation-dialog.component';
import { EditUserDialogComponent } from 'src/app/dialogs/edit-user-dialog/edit-user-dialog.component';
declare var $:any;
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  edit: any
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-bootstrap-demo-table',
  styleUrls: ['bootstrap-demo-table.component.css'],
  templateUrl: 'bootstrap-demo-table.component.html',
})
export class BootstrapDemoTableComponent {
  public displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'edit'];

  public users: UserData[];
  public pagData: UserData[];

  public currentPage = 1;

  public selectedUser: UserData | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    this.users = users;
    this.pagData = this.users.slice(0, 10);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pagData = this.users
      .filter(user => user.name.trim().toLowerCase().indexOf(filterValue.toLowerCase()) !== -1)
      .slice(10 * (this.currentPage - 1), 10 * this.currentPage);
  }

  public changePage(page: string) {
    if(page === 'previous' && this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
    }
    else if(page === 'next') {
      this.currentPage = this.currentPage + 1;
    }
    else {
      this.currentPage = parseInt(page);
    }

    this.pagData = this.users.slice(10 * (this.currentPage - 1), 10 * this.currentPage)
  }

  public selectUser(user: UserData) {
    this.selectedUser = user;
  }

  public deleteUser() {
    const idx = this.users.findIndex((user: UserData) => this.selectedUser?.id === user.id);
    this.users = this.users.slice(0, idx).concat(this.users.slice(idx + 1, this.users.length));
    this.pagData = this.users.slice(0, 10);
  }

  public editUser() {
    let userToEdit: any = this.pagData.find((user: UserData) => user.id === this.selectedUser?.id);

    userToEdit.name = (document.getElementById("new-username") as HTMLInputElement).value;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    edit: ''
  };

}
