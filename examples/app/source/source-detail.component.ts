import {Component, OnInit,Inject} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {DataProviderService} from '../DataProviderService';
import {FORM_PROVIDERS,FORM_DIRECTIVES} from '../../../src/forms/forms';

@Component({
    selector: 'source-detail',
    template:`
    <div *ngIf="_source">
      <header>
        <!-- <nav>Ancestors Descendants</nav> -->
        <h1>{{label}}</h1>
      </header>
      <form-outlet [data]="_source" [dataSchema]="_schema.definitions.sourceDescription" [root]="true" [refs]="_refs"></form-outlet>
    </div>
    <div *ngIf="!_source">Loading...</div>
    `,
    styles: [``],
    pipes: [],
    directives:[FORM_DIRECTIVES]
})
export class SourceDetailComponent implements OnInit {
    private _source: any;
    private _schema:any;
    private _refs:any;

    constructor(@Inject('DataProviderService')private _dataProviderService: DataProviderService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        this._schema=this._dataProviderService.getSchema().then(schema=>{this._schema=schema});
        this._refs=this._dataProviderService.getRefs().then(refs=>{this._refs=refs});
        if (!this._source) {
            let id = this._routeParams.get('id');
            this._dataProviderService.getSource(id).then(
              source => {this._source = source}
            );
        }
    }

    private get label():string {
        if(this._source.citations==undefined || this._source.citations.length==0)
            return this._source.id;
        return this._source.citations[0].value;
    }
}
