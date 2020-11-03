import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessadorComponent } from './processador.component';

describe('ProcessadorComponent', () => {
  let component: ProcessadorComponent;
  let fixture: ComponentFixture<ProcessadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
