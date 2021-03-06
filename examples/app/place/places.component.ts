import {Component,OnInit,Inject} from 'angular2/core';
import {Router} from 'angular2/router';
import {DataProviderService} from '../DataProviderService';
import {ListComponent} from '../list/list-abstract.component';
import {PlaceUtil} from './place-util';
@Component({
    selector: 'places-list',
    templateUrl:"app/list/list-template.html",
    styleUrls:["app/list/list.css"],
    pipes: []
})
export class PlacesComponent extends ListComponent implements OnInit {
  constructor(@Inject('DataProviderService')_dataProviderService: DataProviderService, _router: Router) {
    super(_dataProviderService,_router);
  }
  ngOnInit() {
    this.getValues();
  }
  protected getCreateMethodName():string{return "createPlace";};
  protected getValuesMethodName():string{return "getPlaces";};
  protected getDetailName():string{return "PlaceDetail";};
  protected getName(value:any):string{return PlaceUtil.getPlaceName(value);};
  protected getHeader():string{return "All Places";};
  protected getAddValue():string{return "Add Place";};
}
