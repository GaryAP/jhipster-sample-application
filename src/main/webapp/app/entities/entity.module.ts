import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'resident',
        loadChildren: () => import('./resident/resident.module').then(m => m.JhipsterSampleApplicationResidentModule),
      },
      {
        path: 'room',
        loadChildren: () => import('./room/room.module').then(m => m.JhipsterSampleApplicationRoomModule),
      },
      {
        path: 'facility',
        loadChildren: () => import('./facility/facility.module').then(m => m.JhipsterSampleApplicationFacilityModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhipsterSampleApplicationEntityModule {}
