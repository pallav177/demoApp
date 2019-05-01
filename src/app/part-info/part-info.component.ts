import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-part-info',
  templateUrl: './part-info.component.html',
  styleUrls: ['./part-info.component.css']
})
export class PartInfoComponent implements OnInit {
  public displayedColumns = ['CP', 'specifications', 'value1', 'value2', 'value3', 'value4'];
  dataSource: any[];
  constructor() { }

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
}
