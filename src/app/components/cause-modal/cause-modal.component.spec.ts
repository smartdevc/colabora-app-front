import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseModalComponent } from './cause-modal.component';

describe('CauseModalComponent', () => {
  let component: CauseModalComponent;
  let fixture: ComponentFixture<CauseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CauseModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CauseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
