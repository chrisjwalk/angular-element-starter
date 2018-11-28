import { Component, OnInit } from '@angular/core';
import { SharedComponentsService } from 'projects/shared-components/src/lib/services/shared-components.service';

@Component({
  selector: 'lib-shared-components',
  templateUrl: './shared-components.component.html',
  styleUrls: ['./shared-components.component.scss']
})
export class SharedComponentsComponent implements OnInit {
  data: any[];
  constructor(private dataService: SharedComponentsService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }
}
