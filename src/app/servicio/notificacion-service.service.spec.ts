import { TestBed } from '@angular/core/testing';

import { NotificacionServiceService } from './notificacion-service.service';

describe('NotificacionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificacionServiceService = TestBed.get(NotificacionServiceService);
    expect(service).toBeTruthy();
  });
});
