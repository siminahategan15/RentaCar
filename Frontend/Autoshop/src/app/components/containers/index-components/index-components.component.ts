import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IComponent } from '../../models/component';
import { ComponentsService } from '../../services/components.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl,  FormGroup } from '@angular/forms';


@Component({
  selector: 'app-index-components',
  templateUrl: './index-components.component.html',
  styleUrls: ['./index-components.component.css']
})
export class IndexComponentsComponent implements OnInit {

  components!: IComponent[];

  name2:string='';
  price2:number=0;
  stock2:number=0;

  constructor(private componentService:ComponentsService, private router: Router) {}

  ngOnInit(): void {
    this.componentService.getComponents().subscribe(res => {
      this.components =res;
    console.log(res);
  }
    )
   }

   showComponent(component: IComponent)
   {
    this.router.navigate([`/components/${component.idComponent}`]);
   }
  
  
   createComponent() {
   
    let component:IComponent={
      
      name:this.name2,
    price:this.price2,
    stock:this.stock2

    };

// this will be replaced with form value
  this.componentService.createComponent(component).subscribe(
    res => this.components.push(res), 
  );
}



  deleteComponent(component: IComponent)
  {
    this.componentService.deleteComponent(component.idComponent).subscribe(
      (res: any)=> {
        const componentIndex = this.components.indexOf(component);
        this.components.splice(componentIndex,1);
      }
    )
  }


  updateComponent(component:IComponent)
  {
    const updatedComp: IComponent = {
      name:component.name,
      price:this.price2,
      stock:this.stock2
    };
  
    this.componentService.updateComponent(component.idComponent, updatedComp).subscribe(
      res => {
        const componentIndex = this.components.indexOf(component);
          this.components[componentIndex] = { ...this.components[componentIndex], ...updatedComp };
        
      }
    );
    } 

}
