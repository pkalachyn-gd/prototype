import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockupComponent } from './mockup/mockup.component';
import { MockupHeaderComponent } from './mockup-header/mockup-header.component';
import { MockupContentComponent } from './mockup-content/mockup-content.component';
import { MockupFooterComponent } from './mockup-footer/mockup-footer.component';
import { MockupRoutingModule } from './mockup-routing.module';
import { MockupHeaderSunComponent } from './mockup-header-sun/mockup-header-sun.component';
import { MockupHeaderMoonComponent } from './mockup-header-moon/mockup-header-moon.component';
import { SharedModule } from '../shared/shared.module';
import { MockupHeroComponent } from './mockup-hero/mockup-hero.component';

@NgModule({
  declarations: [
    MockupComponent,
    MockupHeaderComponent,
    MockupContentComponent,
    MockupFooterComponent,
    MockupHeaderSunComponent,
    MockupHeaderMoonComponent,
    MockupHeroComponent,
  ],
  imports: [CommonModule, MockupRoutingModule, SharedModule],
})
export class MockupModule {}
