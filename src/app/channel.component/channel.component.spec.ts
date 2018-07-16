import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelComponent } from './channel.component';
 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 
describe('ChannelComponent', () => {
  let component: ChannelComponent;
  let fixture: ComponentFixture<ChannelComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
