import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'scode',
        data: { pageTitle: 'pgseApp.scode.home.title' },
        loadChildren: () => import('./scode/scode.module').then(m => m.ScodeModule),
      },
      {
        path: 'scodevaleur',
        data: { pageTitle: 'pgseApp.scodevaleur.home.title' },
        loadChildren: () => import('./scodevaleur/scodevaleur.module').then(m => m.ScodevaleurModule),
      },
      {
        path: 'slocalite',
        data: { pageTitle: 'pgseApp.slocalite.home.title' },
        loadChildren: () => import('./slocalite/slocalite.module').then(m => m.SlocaliteModule),
      },
      {
        path: 'sstructure',
        data: { pageTitle: 'pgseApp.sstructure.home.title' },
        loadChildren: () => import('./sstructure/sstructure.module').then(m => m.SstructureModule),
      },
      {
        path: 'setablissement',
        data: { pageTitle: 'pgseApp.setablissement.home.title' },
        loadChildren: () => import('./setablissement/setablissement.module').then(m => m.SetablissementModule),
      },
      {
        path: 'etypechamp',
        data: { pageTitle: 'pgseApp.etypechamp.home.title' },
        loadChildren: () => import('./etypechamp/etypechamp.module').then(m => m.EtypechampModule),
      },
      {
        path: 'eattribut',
        data: { pageTitle: 'pgseApp.eattribut.home.title' },
        loadChildren: () => import('./eattribut/eattribut.module').then(m => m.EattributModule),
      },
      {
        path: 'evaleurattribut',
        data: { pageTitle: 'pgseApp.evaleurattribut.home.title' },
        loadChildren: () => import('./evaleurattribut/evaleurattribut.module').then(m => m.EvaleurattributModule),
      },
      {
        path: 'eunite',
        data: { pageTitle: 'pgseApp.eunite.home.title' },
        loadChildren: () => import('./eunite/eunite.module').then(m => m.EuniteModule),
      },
      {
        path: 'ecampagne',
        data: { pageTitle: 'pgseApp.ecampagne.home.title' },
        loadChildren: () => import('./ecampagne/ecampagne.module').then(m => m.EcampagneModule),
      },
      {
        path: 'equestionnaire',
        data: { pageTitle: 'pgseApp.equestionnaire.home.title' },
        loadChildren: () => import('./equestionnaire/equestionnaire.module').then(m => m.EquestionnaireModule),
      },
      {
        path: 'egroupe',
        data: { pageTitle: 'pgseApp.egroupe.home.title' },
        loadChildren: () => import('./egroupe/egroupe.module').then(m => m.EgroupeModule),
      },
      {
        path: 'etypevariable',
        data: { pageTitle: 'pgseApp.etypevariable.home.title' },
        loadChildren: () => import('./etypevariable/etypevariable.module').then(m => m.EtypevariableModule),
      },
      {
        path: 'evariable',
        data: { pageTitle: 'pgseApp.evariable.home.title' },
        loadChildren: () => import('./evariable/evariable.module').then(m => m.EvariableModule),
      },
      {
        path: 'eattributvariable',
        data: { pageTitle: 'pgseApp.eattributvariable.home.title' },
        loadChildren: () => import('./eattributvariable/eattributvariable.module').then(m => m.EattributvariableModule),
      },
      {
        path: 'eeventualite',
        data: { pageTitle: 'pgseApp.eeventualite.home.title' },
        loadChildren: () => import('./eeventualite/eeventualite.module').then(m => m.EeventualiteModule),
      },
      {
        path: 'eeventualitevariable',
        data: { pageTitle: 'pgseApp.eeventualitevariable.home.title' },
        loadChildren: () => import('./eeventualitevariable/eeventualitevariable.module').then(m => m.EeventualitevariableModule),
      },
      {
        path: 'egroupevariable',
        data: { pageTitle: 'pgseApp.egroupevariable.home.title' },
        loadChildren: () => import('./egroupevariable/egroupevariable.module').then(m => m.EgroupevariableModule),
      },
      {
        path: 'evaleurvariable',
        data: { pageTitle: 'pgseApp.evaleurvariable.home.title' },
        loadChildren: () => import('./evaleurvariable/evaleurvariable.module').then(m => m.EvaleurvariableModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
