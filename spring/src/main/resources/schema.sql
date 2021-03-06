        drop table if exists oauth_client_details;
        create table oauth_client_details (
        client_id VARCHAR(255) PRIMARY KEY,
        resource_ids VARCHAR(255),
        client_secret VARCHAR(255),
        scope VARCHAR(255),
        authorized_grant_types VARCHAR(255),
        web_server_redirect_uri VARCHAR(255),
        authorities VARCHAR(255),
        access_token_validity INTEGER,
        refresh_token_validity INTEGER,
        additional_information VARCHAR(4096),
        autoapprove VARCHAR(255));

        drop table if exists oauth_client_token;
        create table oauth_client_token (
        token_id VARCHAR(255),
        token LONGVARBINARY,
        authentication_id VARCHAR(255) PRIMARY KEY,
        user_name VARCHAR(255),
        client_id VARCHAR(255));

        drop table if exists oauth_access_token;
        create table oauth_access_token (
        token_id VARCHAR(255),
        token LONGVARBINARY,
        authentication_id VARCHAR(255) PRIMARY KEY,
        user_name VARCHAR(255),
        client_id VARCHAR(255),
        authentication LONGVARBINARY,
        refresh_token VARCHAR(255));

        drop table if exists oauth_refresh_token;
        create table oauth_refresh_token (
        token_id VARCHAR(255),
        token LONGVARBINARY,
        authentication LONGVARBINARY);

        drop table if exists oauth_code;
        create table oauth_code (
        code VARCHAR(255), authentication LONGVARBINARY);

--         SET SQL_MODE='ALLOW_INVALID_DATES';
        drop table if exists oauth_approvals;
        create table oauth_approvals (
        userId VARCHAR(255),
        clientId VARCHAR(255),
        scope VARCHAR(255),
        status VARCHAR(10),
        expiresAt TIMESTAMP,
        lastModifiedAt TIMESTAMP);

        drop table if exists ClientDetails;
        create table ClientDetails (
        appId VARCHAR(255) PRIMARY KEY,
        resourceIds VARCHAR(255),
        appSecret VARCHAR(255),
        scope VARCHAR(255),
        grantTypes VARCHAR(255),
        redirectUrl VARCHAR(255),
        authorities VARCHAR(255),
        access_token_validity INTEGER,
        refresh_token_validity INTEGER,
        additionalInformation VARCHAR(4096),
        autoApproveScopes VARCHAR(255));


INSERT INTO oauth_client_details(CLIENT_ID, RESOURCE_IDS, CLIENT_SECRET, SCOPE, AUTHORIZED_GRANT_TYPES, AUTHORITIES, ACCESS_TOKEN_VALIDITY, REFRESH_TOKEN_VALIDITY)
 VALUES ('spring-security-oauth2-read-client', 'resource-server-rest-api',
 /*spring-security-oauth2-read-client-password1234*/'$2a$04$WGq2P9egiOYoOFemBRfsiO9qTcyJtNRnPKNBl5tokP7IP.eZn93km',
 'read', 'password,authorization_code,refresh_token,implicit', 'USER', 10800, 2592000);
INSERT INTO oauth_client_details(CLIENT_ID, RESOURCE_IDS, CLIENT_SECRET, SCOPE, AUTHORIZED_GRANT_TYPES, AUTHORITIES, ACCESS_TOKEN_VALIDITY, REFRESH_TOKEN_VALIDITY)
 VALUES ('spring-security-oauth2-read-write-client', 'resource-server-rest-api',
 /*spring-security-oauth2-read-write-client-password1234*/'$2a$04$soeOR.QFmClXeFIrhJVLWOQxfHjsJLSpWrU1iGxcMGdu.a5hvfY4W',
 'read,write', 'password,authorization_code,refresh_token,implicit', 'USER', 10800, 2592000);