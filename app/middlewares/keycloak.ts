import Keycloak from "keycloak-connect";

const config = {
  realm: process.env.KEYCLOAK_REALM || "default-realm",
  "auth-server-url": `${process.env.KEYCLOAK_URL}`,
  "ssl-required": "external",
  resource: process.env.KEYCLOAK_CLIENT || "default-resource",
  "bearer-only": true,
  "confidential-port": 0,
};

const keycloak = new Keycloak({}, config);

export { keycloak };
