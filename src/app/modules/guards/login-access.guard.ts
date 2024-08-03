import { CanActivateFn } from '@angular/router';

export const loginAccessGuard: CanActivateFn = (route, state) => {
  return true;
};
