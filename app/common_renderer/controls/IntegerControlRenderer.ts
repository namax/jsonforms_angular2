/// <reference path="../../typings/uischema.d.ts"/>

import {Component, Inject} from 'angular2/core';
import {FormsTester} from '../../forms/forms';
import {ServicesDirective} from '../services.directive';
import {AbstractControlRenderer,ControlRendererTester} from './AbstractControlRenderer';

@Component({
    selector: 'IntegerControlRenderer',
    template: `
        <div class="forms_control">
            <label class="forms_integerControlLabel forms_controlLabel">{{label}}</label>
            <input type="number" step="1" [(ngModel)]="_modelValue[fragment]" class="forms_integerControl"/>
            <div *ngFor="#error of getValues(_uiSchema.validation)" style="color:red">{{error|json}}</div>
        </div>
    `
    ,
    styles: [``],
    directives:[ServicesDirective]
})
export class IntegerControlRenderer extends AbstractControlRenderer{
    constructor( @Inject('uiSchema') _uiSchema:IControlObject, @Inject('data') _data:any) {
        super(_uiSchema,_data);
    }
}
export var IntegerControlRendererTester: FormsTester = ControlRendererTester('integer',1);