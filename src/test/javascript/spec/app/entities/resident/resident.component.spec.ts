import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { JhipsterTestModule } from '../../../test.module';
import { ResidentComponent } from 'app/entities/resident/resident.component';
import { ResidentService } from 'app/entities/resident/resident.service';
import { Resident } from 'app/shared/model/resident.model';

describe('Component Tests', () => {
  describe('Resident Management Component', () => {
    let comp: ResidentComponent;
    let fixture: ComponentFixture<ResidentComponent>;
    let service: ResidentService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterTestModule],
        declarations: [ResidentComponent],
      })
        .overrideTemplate(ResidentComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ResidentComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ResidentService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Resident(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.residents && comp.residents[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
