import { Component, OnInit } from '@angular/core';
import { IComponent } from '../../models/component';
import { ComponentsService } from '../../services/components.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-component',
  templateUrl: './show-component.component.html',
  styleUrls: ['./show-component.component.css']
})
export class ShowComponentComponent implements OnInit{

  component!: IComponent;
  constructor(private ComponentService:ComponentsService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.getComponent();
  }
  getComponent()
  {
    const id=this.route.snapshot.params['id'];
    this.ComponentService.getComponent(id).subscribe(response => this.component = response)
  }

}
