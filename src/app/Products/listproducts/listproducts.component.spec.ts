import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListproductsComponent } from './listproducts.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import{Chance} from 'chance'
describe('ListproductsComponent', () => {
  let component: ListproductsComponent;
  let fixture: ComponentFixture<ListproductsComponent>;
  //const chance: Chance.Chance = new Chance();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproductsComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
