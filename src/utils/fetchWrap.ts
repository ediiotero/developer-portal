import * as Sentry from '@sentry/browser';

const sentryErrorHandler = (error: string, errorID: string) => {
  Sentry.withScope(scope => {
    scope.setTag('Error ID', errorID);
    Sentry.captureException(error);
  });
  throw error;
};

const fetchMiddleware = (response: Response, errorID: string) => {
  if ((!response.ok && response.status !== 300) || 400 || 500) {
    throw TypeError(`Front End Error ID: ${errorID}`);
  }
  return response;
};

export const fetchWrap = async (request: Request, errorID: string): Promise<Response> => {
  try {
    const response = await fetch(request);
    fetchMiddleware(response, errorID);
  } catch (error) {
    return sentryErrorHandler(error, errorID);
  }
  // what do we return?
  return ?;
};
