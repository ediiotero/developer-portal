import * as Sentry from '@sentry/browser';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import SwaggerUI from 'swagger-ui';
import * as actions from '../../actions';
import { APIDocSource } from '../../apiDefs/schema';
import { getDocURL, getVersion, getVersionNumber } from '../../reducers/api-versioning';
import { RootState, APIMetadata } from '../../types';
import { SwaggerPlugins, System } from './swaggerPlugins';

import 'swagger-ui-themes/themes/3.x/theme-muted.css';

export interface SwaggerDocsProps {
  apiName: string;
  docSource: APIDocSource;
}

export interface VersionInfo {
  version: string;
  status: string;
  path: string;
  healthcheck: string;
  internal_only: boolean;
}

const getMetadata = async (metadataUrl?: string): Promise<APIMetadata | null> => {
  if (!metadataUrl) {
    return null;
  }
  try {
    const request = new Request(`${metadataUrl}`, {
      method: 'GET',
    });
    const response = await fetch(request);
    return response.json() as Promise<APIMetadata>;
  } catch (error) {
    Sentry.captureException(error);
    return null;
  }
};

const setSearchParam = (queryString: string, version: string, history: any) => {
  const params = new URLSearchParams(location.search);
  if (params.get('version') !== version) {
    params.set('version', version);
    history.push(`${history.location.pathname}?${params.toString()}`);
  }
};

const SwaggerDocs = (props: SwaggerDocsProps): JSX.Element => {
  const dispatch: React.Dispatch<
    actions.SetRequestedAPIVersion | actions.SetInitialVersioning
  > = useDispatch();

  const docUrl = useSelector((state: RootState) => getDocURL(state.apiVersioning));
  const metadata = useSelector((state: RootState) => state.apiVersioning.metadata);
  const version = useSelector((state: RootState) => getVersion(state.apiVersioning));
  const versionNumber = useSelector((state: RootState) => getVersionNumber(state.apiVersioning));

  const history = useHistory();
  const location = useLocation();

  const { openApiUrl, metadataUrl } = props.docSource;


  const renderSwaggerUI = React.useCallback(() => {
    const handleVersionChange = (currentVersion: string) => {
      dispatch(actions.setRequstedApiVersion(currentVersion));
      setSearchParam(location.search, version, history);
    };

    if (document.getElementById('swagger-ui') && docUrl.length !== 0) {
      const plugins = SwaggerPlugins(handleVersionChange);
      const ui: System = SwaggerUI({
        dom_id: '#swagger-ui',
        layout: 'ExtendedLayout',
        plugins: [plugins],
        url: docUrl,
      }) as System;
      ui.versionActions.setApiVersion(versionNumber);
      ui.versionActions.setApiMetadata(metadata as APIMetadata);
    }
  }, [dispatch, docUrl, metadata, versionNumber, version, history, location.search]);

  /*
   * Update the properties swagger uses for rendering
   */
  React.useEffect(() => {
    const setMetadataAndDocUrl = async () => {
      const currentMetadata = await getMetadata(metadataUrl);
      dispatch(actions.setInitialVersioning(openApiUrl, currentMetadata));
    };

    void setMetadataAndDocUrl();
  }, [dispatch, metadataUrl, openApiUrl, props.apiName]);

  /*
   * Trigger new renders
   */
  React.useLayoutEffect(() => {
    renderSwaggerUI();
  }, [renderSwaggerUI]);

  const { apiIntro } = props.docSource;

  return (
    <React.Fragment>
      {apiIntro && apiIntro({})}
      <div id="swagger-ui" />
    </React.Fragment>
  );
};

export { SwaggerDocs };
