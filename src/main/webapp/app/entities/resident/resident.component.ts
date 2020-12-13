import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IResident } from 'app/shared/model/resident.model';
import { ResidentService } from './resident.service';
import { ResidentDeleteDialogComponent } from './resident-delete-dialog.component';

@Component({
  selector: 'jhi-resident',
  templateUrl: './resident.component.html',
})
export class ResidentComponent implements OnInit, OnDestroy {
  residents?: IResident[];
  eventSubscriber?: Subscription;

  constructor(protected residentService: ResidentService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.residentService.query().subscribe((res: HttpResponse<IResident[]>) => (this.residents = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInResidents();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IResident): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInResidents(): void {
    this.eventSubscriber = this.eventManager.subscribe('residentListModification', () => this.loadAll());
  }

  delete(resident: IResident): void {
    const modalRef = this.modalService.open(ResidentDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.resident = resident;
  }
}
