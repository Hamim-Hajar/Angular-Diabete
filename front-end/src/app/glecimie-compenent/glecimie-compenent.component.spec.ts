import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlecimieCompenentComponent } from './glecimie-compenent.component';

describe('GlecimieCompenentComponent', () => {
  let component: GlecimieCompenentComponent;
  let fixture: ComponentFixture<GlecimieCompenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlecimieCompenentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlecimieCompenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
