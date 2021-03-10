import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  const createMockRoute = (id: string) =>{
    return{
      params:{id: id}
    }as any
  }

  const createMockRouteState = () => null;
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[RouterTestingModule.withRoutes([])],providers:[AuthGuard]});
    guard = TestBed.get(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
