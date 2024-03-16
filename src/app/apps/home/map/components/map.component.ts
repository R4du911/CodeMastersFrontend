import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BottomComponentComponent } from '../../bottom-component/bottom-component.component';
import { LeftComponentComponent } from '../../left-component/left-component.component';
import { SecondTopComponentComponent } from '../../second-top-component/second-top-component.component';
import { TopComponentComponent } from '../../top-component/top-component.component';
import { TopOfBottomComponentComponent } from '../../top-of-bottom-component/top-of-bottom-component.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {

  @ViewChild('bottomComponent', { read: ViewContainerRef }) bottomComponent!: ViewContainerRef;
  @ViewChild('leftComponent', { read: ViewContainerRef }) leftComponent!: ViewContainerRef;
  @ViewChild('secondTopComponent', { read: ViewContainerRef }) secondTopComponent!: ViewContainerRef;
  @ViewChild('topComponent', { read: ViewContainerRef }) topComponent!: ViewContainerRef;
  @ViewChild('topOfBottomComponent', { read: ViewContainerRef }) topOfBottomComponent!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  desks = { '1': [1.1, 1.2, 1.3, 1.4], '2': [2.1, 2.2, 2.3, 2.4] };

  ngAfterViewInit() {

    setTimeout(() => {
      var factory1 = this.componentFactoryResolver.resolveComponentFactory(BottomComponentComponent);
      this.bottomComponent.createComponent(factory1);

      var factory2 = this.componentFactoryResolver.resolveComponentFactory(LeftComponentComponent);
      this.leftComponent.createComponent(factory2);

      var factory3 = this.componentFactoryResolver.resolveComponentFactory(SecondTopComponentComponent);
      this.secondTopComponent.createComponent(factory3);

      var factory4 = this.componentFactoryResolver.resolveComponentFactory(TopComponentComponent);
      this.topComponent.createComponent(factory4);

      var factory5 = this.componentFactoryResolver.resolveComponentFactory(TopOfBottomComponentComponent);
      this.topOfBottomComponent.createComponent(factory5);
    });



    

  }
  
}
