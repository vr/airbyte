declare global {
  interface Window {
    TRACKING_STRATEGY?: string;
    AIRBYTE_VERSION?: string;
    API_URL?: string;
    CONNECTOR_BUILDER_API_URL?: string;
    CLOUD?: string;
    REACT_APP_DATADOG_APPLICATION_ID: string;
    REACT_APP_DATADOG_CLIENT_TOKEN: string;
    REACT_APP_DATADOG_SITE: string;
    REACT_APP_DATADOG_SERVICE: string;
    REACT_APP_SENTRY_DSN?: string;
    REACT_APP_WEBAPP_TAG?: string;
    REACT_APP_INTERCOM_APP_ID?: string;
    REACT_APP_INTEGRATION_DOCS_URLS?: string;
    SEGMENT_TOKEN?: string;
    LAUNCHDARKLY_KEY?: string;
    // Cloud specific properties
    FIREBASE_API_KEY?: string;
    FIREBASE_AUTH_DOMAIN?: string;
    FIREBASE_AUTH_EMULATOR_HOST?: string;
    CLOUD_API_URL?: string;
    CLOUD_PUBLIC_API_URL?: string;
  }
}

export interface AirbyteWebappConfig {
  segment: { token?: string; enabled: boolean };
  apiUrl: string;
  connectorBuilderApiUrl: string;
  version: string;
  integrationUrl: string;
  oauthRedirectUrl: string;
  cloudApiUrl?: string;
  cloudPublicApiUrl?: string;
  firebase: {
    apiKey?: string;
    authDomain?: string;
    authEmulatorHost?: string;
  };
  intercom: {
    appId?: string;
  };
  launchDarkly?: string;
}

export type DeepPartial<T> = {
  [P in keyof T]+?: DeepPartial<T[P]>;
};

export type ProviderAsync<T> = () => Promise<T>;
export type Provider<T> = () => T;

export type ValueProvider<T> = Array<ProviderAsync<DeepPartial<T>>>;

export type ConfigProvider<T extends AirbyteWebappConfig = AirbyteWebappConfig> = ProviderAsync<DeepPartial<T>>;
