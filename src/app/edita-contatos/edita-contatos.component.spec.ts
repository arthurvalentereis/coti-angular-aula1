import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaContatosComponent } from './edita-contatos.component';

describe('EditaContatosComponent', () => {
  let component: EditaContatosComponent;
  let fixture: ComponentFixture<EditaContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaContatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
