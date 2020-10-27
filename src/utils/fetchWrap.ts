import * as Sentry from '@sentry/browser';

const sentryErrorLogger = (error: string, errorID: string): void => {
  Sentry.withScope(scope => {
    scope.setTag('Error ID', errorID);
    Sentry.captureException(error);
  });
};

const fetchMiddleware = (response: Response, errorID: string): void => {
  if ((!response.ok && response.status !== 300) || 400 || 500) {
    throw TypeError(`Front End Error ID: ${errorID}`);
  }
};

export const fetchWrap = async (request: Request, errorID: string): Promise<Response> => {
  try {
    const response = await fetch(request);
    fetchMiddleware(response, errorID);
    return response;
  } catch (error) {
    sentryErrorLogger(error, errorID);
    throw new Error(error);
  }
};
