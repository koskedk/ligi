export interface Result {
  value?: any | null;
  isSuccess: boolean;
  error?: any | null;
}

export function success(value: any): Result {
  return {value, isSuccess: true, error: null};
}

export function failure(error: any): Result {
  return {error, isSuccess: false, value: null};
}

