import { TestBed } from '@angular/core/testing';

import { AuiChartsService } from './aui-charts.service';

describe('AuiChartsService', () => {
  let service: AuiChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuiChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
