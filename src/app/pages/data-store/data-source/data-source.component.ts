import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataSourceService } from 'core/http-apis/data-source.service';

@Component({
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.scss']
})
export class DataSourceComponent implements OnInit {

  dataSource;
  workspaceName: string;

  constructor(
    private route: ActivatedRoute,
    private dataSourceApi: DataSourceService
  ) { }

  ngOnInit(): void {
    console.log("active!");
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.workspaceName = params.get('workspaceName');
      this.getDataSourceList();
    });
  }

  getDataSourceList(): void {
    this.dataSourceApi.getDataSourceList(this.workspaceName).subscribe(resp => {
      if (!resp) { return; }
      this.dataSource = resp.dataStores.dataStore.map(store => {
        return {
          name: store.name,
          detail: this.dataSourceApi.getDetailJson(store.href)
        }
      });
      console.log(this.dataSource);
    });
  }

}

