import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {SharedModule} from '../../../../shared/shared.module';
import {DashboardSharedModule} from '../../shared/shared.module';
import {PipelineLeadTimeGraphStrategy} from './strategies/pipeline-lead-time-graph-strategy';
import {PipelineLeadTimePreviewStrategy} from './strategies/pipeline-lead-time-preview-strategy';
import {PipelineLeadTimeDetailStrategy} from './strategies/pipeline-lead-time-detail-strategy';
import {PipelineLeadTimeBuildingBlocksStrategy} from './strategies/pipeline-lead-time-building-blocks-strategy';
import {PipelineLeadTimePrimaryMetricStrategy} from './strategies/pipeline-lead-time-primary-metric-strategy';
import {PipelineLeadTimeTrendStrategy} from './strategies/pipeline-lead-time-trend-strategy';
import {MetricMapService} from '../../shared/services/metric-map.service';
import {PipelineLeadTimeDetailComponent} from './components/metric-detail/pipeline-lead-time-detail.component';
import {PipelineLeadTimePreviewComponent} from './components/metric-preview/pipeline-lead-time-preview.component';
import {PipelineLeadTimeRoutingModule} from './pipeline-lead-time.routing.module';
import {PipelineLeadTimeBuildingBlockPrimaryMetricStrategy} from './strategies/pipeline-lead-time-building-block-primary-metric-strategy';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    SharedModule,
    DashboardSharedModule,
    PipelineLeadTimeRoutingModule
  ],
  declarations: [
    PipelineLeadTimePreviewComponent,
    PipelineLeadTimeDetailComponent
  ],
  exports: [
    PipelineLeadTimePreviewComponent,
    PipelineLeadTimeDetailComponent
  ],
  providers: [
    MetricMapService,
    PipelineLeadTimeTrendStrategy,
    PipelineLeadTimePrimaryMetricStrategy,
    PipelineLeadTimeBuildingBlocksStrategy,
    PipelineLeadTimeBuildingBlockPrimaryMetricStrategy,
    PipelineLeadTimeDetailStrategy,
    PipelineLeadTimePreviewStrategy,
    PipelineLeadTimeGraphStrategy
  ]
})

export class PipelineLeadTimeModule {}
