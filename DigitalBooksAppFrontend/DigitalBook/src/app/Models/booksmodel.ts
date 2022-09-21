import { FormsModule,FormGroup,Validators,FormBuilder,FormControl} from "@angular/forms";
export class Book{
    id:number=0;
    title:string='';
    category:string='';
    price:number=0;
    publisher:string='';
    active:string='';
    content:string='';
    author:string="";
    releaseddate:string="";
    //formBookGroup:FormGroup;

    
   // constructor(){
   //     var _builder=new FormBuilder();
    //    this.formBookGroup=_builder.group({});
   ///     this.formBookGroup.addControl("TitleControl",new FormControl('',Validators.required));
//}
}