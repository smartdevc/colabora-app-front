import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseGridComponent } from './cause-grid.component';

describe('CauseGridComponent', () => {
  let component: CauseGridComponent;
  let fixture: ComponentFixture<CauseGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CauseGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CauseGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
