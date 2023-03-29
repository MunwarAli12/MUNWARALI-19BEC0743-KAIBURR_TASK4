import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllServersComponent } from './list-all-servers.component';

describe('ListAllServersComponent', () => {
  let component: ListAllServersComponent;
  let fixture: ComponentFixture<ListAllServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
