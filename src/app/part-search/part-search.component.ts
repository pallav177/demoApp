import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-search',
  templateUrl: './part-search.component.html',
  styleUrls: ['./part-search.component.css']
})
export class PartSearchComponent implements OnInit {
  showButton: boolean = true;
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'
  ];
  dataSource: any[];
  showTable: boolean;
  constructor() { }

  ngOnInit() {
    this.dataSource = [{ name: 'Sheshank', dateOfBirth: 'DOB', address: 'test address', details: 'Test Details', update: 'Test Update', delete: 'Test delete' }, { name: 'Sheshank', dateOfBirth: 'DOB', address: 'test address', details: 'Test Details', update: 'Test Update', delete: 'Test delete' }, { name: 'Sheshank', dateOfBirth: 'DOB', address: 'test address', details: 'Test Details', update: 'Test Update', delete: 'Test delete' }, { name: 'Sheshank', dateOfBirth: 'DOB', address: 'test address', details: 'Test Details', update: 'Test Update', delete: 'Test delete' }, { name: 'Sheshank', dateOfBirth: 'DOB', address: 'test address', details: 'Test Details', update: 'Test Update', delete: 'Test delete' }];
  }

  search(value) {
    this.showButton = value;
    if (value) {
      this.showTable = !value;
    }
  }

  table(value) {
    this.showTable = value;
  }
}
