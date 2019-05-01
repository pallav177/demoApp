import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  owners: any;

  constructor(private demoservice: DemoService) { }

  ngOnInit() {

    const load = {
      PageNumber: 1,
      PageSize: 10,
      CompanyId: 77
    };
    this.demoservice.request(environment.baseurl + "owner/GetOwnerList", load).subscribe
      (
        data => {
          // this.owners = 
        }, error => {
        }

      );


    let variable = 'sheshank';


  }

}
