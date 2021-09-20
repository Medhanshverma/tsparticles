import { NgModule } from '@angular/core';
import { NgParticlesComponent, ParticlesComponent } from './ng-particles.component';
import type { ISourceOptions } from 'tsparticles-engine';

@NgModule({
    declarations: [NgParticlesComponent, ParticlesComponent],
    imports: [],
    exports: [NgParticlesComponent, ParticlesComponent]
})
export class NgParticlesModule {
}

export * from 'tsparticles-engine';

export type IParticlesProps = ISourceOptions;
export type IParticlesParams = IParticlesProps;
