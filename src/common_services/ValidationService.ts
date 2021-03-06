import {FormServiceFactory,FormsService,ChangeNotification} from './../forms/forms';
import {PathUtil} from '../common_renderer/PathUtil';

declare var tv4;
export class ValidationServiceFactory implements FormServiceFactory{
    createFormService(dataSchema:any,uiSchema:IUISchemaElement, data:any):FormsService{
        return new ValidationService(dataSchema, uiSchema, data);
    }
}
class ValidationService extends FormsService {
    constructor(dataSchema:any,uiSchema:IUISchemaElement, data:any){
        super(dataSchema, uiSchema, data);
        this.validate(null);
    }
    onChange(changeNotification:ChangeNotification):void{
        this.validate(changeNotification);
    }
    onAdd(changeNotification:ChangeNotification):void{
        this.validate(changeNotification);
    }
    onRemove(changeNotification:ChangeNotification):void{
        this.validate(changeNotification);
    }
    private validate(changeNotification:ChangeNotification):void{
        let results = tv4.validateMultiple(
            changeNotification==null?this._data:changeNotification.newData(this._data), this._dataSchema);
        let result: {[key: string]: any}={};
        let foundErrors:boolean=false;
        results['errors'].forEach((error) => {
            let propName:string;
            if (error['schemaPath'].indexOf("required") != -1) {
                propName = error['dataPath'] + "/" + error['params']['key'];
            } else {
                propName=error['dataPath'];
            }
            propName=propName.substr(1);
            if(!result.hasOwnProperty(propName)){
                result[propName]=[];
            }
            result[propName].push(error['message']);

            foundErrors=true;
        });
        this.cleanControlObjects(this._uiSchema);
        this.mapErrorOnControlObject(this._uiSchema,result);
    }
    private cleanControlObjects(uiSchema:IUISchemaElement):void{
        if(uiSchema.hasOwnProperty('elements')){
            //search all children of Layout
            let children=uiSchema['elements'];
            for(let i=0;i<children.length;i++){
                this.cleanControlObjects(children[i]);
            }
        }
        else if(uiSchema.hasOwnProperty('scope')){
            uiSchema['validation']= null;
        }
    }

    private mapErrorOnControlObject(fullSchema:IUISchemaElement, errors:{[key: string]: any}):void{
        if(fullSchema.hasOwnProperty('elements')){
            //search all children of Layout
            let children=fullSchema['elements'];
            for(let i=0;i<children.length;i++){
                this.mapErrorOnControlObject(children[i],errors);
            }
        }
        else if(fullSchema.hasOwnProperty('scope')){
            let path=PathUtil.normalize(fullSchema['scope']['$ref']);
            let keys=Object.keys(errors);
            let relevantKeys=keys.filter(value=>{
                return value.indexOf(path)!=-1 &&
                value.substr(path.length+1).indexOf("/")==-1
            });
            if(relevantKeys.length==0){
                return;
            }
            let allErrors:Array<any>=[];
            relevantKeys.forEach(key =>{
                let indexOfSlash=key.indexOf("/");
                if(indexOfSlash==-1)
                    allErrors.push(errors[key]);
                else{
                    let position=key.substr(indexOfSlash+1);
                    allErrors.push({"index":position,"error":errors[key]});
                }
            });
            fullSchema['validation']= allErrors;
        }
    }
}
