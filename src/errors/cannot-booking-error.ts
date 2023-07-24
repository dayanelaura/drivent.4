import { ApplicationError } from '@/protocols';

export function cannotBookingError(): ApplicationError {
  return {
    name: 'CannotBookingError',
    message: 'Cannot book this room. There is no vacancy available!',
  };
}
