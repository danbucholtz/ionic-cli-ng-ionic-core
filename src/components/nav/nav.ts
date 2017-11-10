import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  NgZone,
  OnInit,
  Renderer,
  ReflectiveInjector,
  ViewContainerRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ion-nav',
  template: `
    <div #viewport class="ng-nav-viewport"></div>
  `
})
export class AngularNav {

  @ViewChild('viewport', { read: ViewContainerRef}) viewport: ViewContainerRef;

  constructor(private crf: ComponentFactoryResolver, private changeDetection: ChangeDetectorRef, private zone: NgZone) {
  }

  ngOnInit() {
    const controllerElement = document.querySelector('ion-nav-controller') as any;
    controllerElement.componentOnReady(() => {
      controllerElement.delegate = this;
    });
  }

  attachViewToDom(nav: any, enteringView: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.zone.run(() => {

        console.log('enteringView.component: ', enteringView.component);
        const componentProviders = ReflectiveInjector.resolve([]); // TODO, types
        const componentFactory = this.crf.resolveComponentFactory(enteringView.component);

        const childInjector = ReflectiveInjector.fromResolvedProviders(componentProviders, this.viewport.parentInjector);
        const componentRef = componentFactory.create(childInjector, []);
        this.viewport.insert(componentRef.hostView, this.viewport.length);
        this.changeDetection.detectChanges();


        enteringView.componentFactory = componentFactory;
        enteringView.childInjector = childInjector;
        enteringView.componentRef = componentRef;
        enteringView.instance = componentRef.instance;
        enteringView.angularHostElement = componentRef.location.nativeElement;
        enteringView.element = componentRef.location.nativeElement.querySelector('ion-page');
        resolve();
      });
    });
  }

  removeViewFromDom(nav: any, viewController: any) {
    return new Promise((resolve, reject) => {
      this.zone.run(() => {
        viewController.componentRef.destroy();
        // (nav.element as HTMLElement).removeChild(viewController.angularHostElement);

        viewController.componentFactory = null;
        viewController.childInjector = null;
        viewController.componentRef = null;
        viewController.instance = null
        viewController.angularHostElement = null;
        viewController.element = null;
        resolve();
      });
    })
  }
}

