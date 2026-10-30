/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
}
