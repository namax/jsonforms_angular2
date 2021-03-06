
export class ViewGenerator{
    static generate(schema:any,prefixPath = "/"):ILayout{
        //get or create a sub schema -> ui schema providers
        let subUiSchema:ILayout={type:'VerticalLayout',elements:[]};
        if(schema.allOf!=undefined){
          schema.allOf.forEach((element,index) =>{subUiSchema.elements.push(this.generate(element,prefixPath+"allOf/"+index+"/"));});
          return subUiSchema;
        }
        if(schema.anyOf!=undefined){
          schema.anyOf.forEach((element,index) =>{subUiSchema.elements.push(this.generate(element,prefixPath+"anyOf/"+index+"/"));});
          return subUiSchema;
        }
        //actually wrong
        if(schema.oneOf!=undefined){
          schema.oneOf.forEach((element,index) =>{subUiSchema.elements.push(this.generate(element,prefixPath+"oneOf/"+index+"/"));});
          subUiSchema.type="HorizontalLayout";
          return subUiSchema;
        }
        Object.keys(schema.properties).forEach(key => {
            let control:IControlObject={type:"Control",label:key,scope:{$ref:prefixPath+"properties/"+key}};
            subUiSchema.elements.push(control);
        });
        return subUiSchema;
    }
}
