import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-search',
  templateUrl: './part-search.component.html',
  styleUrls: ['./part-search.component.css']
})
export class PartSearchComponent implements OnInit {

  // partForm = new FormGroup({
  //   firstName: new FormControl('Sheshank', Validators.required),
  //   lastName: new FormControl('Jamwal', Validators.required),
  // });

  showButton: boolean = true;
  public displayedColumns = ['CP', 'specifications', 'value1', 'value2', 'value3', 'value4'];
  dataSource: any[];
  showTable: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.dataSource = [{ CP: '340', specifications: 'Diameter Bore (8x)' }
      , { CP: '341', specifications: 'Diameter Bore (8x)' },
    { CP: '342', specifications: 'Cross Hole (8x)' },
    { CP: '343', specifications: 'Corner Brake (8x)' },
    { CP: '344', specifications: 'Distance (SC)' },
    { CP: '345', specifications: 'Corner Brake (4x)' },
    { CP: '346', specifications: 'Diameter Bore (8x)' },
    { CP: '347', specifications: 'Diameter Bore (8x)' },
    { CP: '348', specifications: 'Diameter Bore (8x)' }];
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
