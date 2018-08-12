package com.example.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.core.io.Resource;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.code.AuthorizationCodeServices;
import org.springframework.security.oauth2.provider.code.JdbcAuthorizationCodeServices;
import org.springframework.security.oauth2.provider.error.OAuth2AccessDeniedHandler;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;
import com.example.service.users.CustomUserDetailsService;

import javax.inject.Inject;
import javax.sql.DataSource;

@Configuration
@EnableAuthorizationServer
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Import(com.example.config.WebSecurityServerConfig.class)
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    //////////////////
    @Value("classpath:schema.sql")
    private Resource schemaScript;

    @Autowired
    private CustomUserDetailsService userDetailsService;
    @Inject
    private AuthenticationManager authenticationManager;
    @Autowired
    @Qualifier("dataSource")
    private DataSource dataSource;
    @Autowired
    private PasswordEncoder oauthClientPasswordEncoder;

    @Bean
    public JdbcTokenStore tokenStore() {
        return new JdbcTokenStore(dataSource);
    }
    @Bean
    protected AuthorizationCodeServices authorizationCodeServices() {
        return new JdbcAuthorizationCodeServices(dataSource);
    }
    @Bean
    public OAuth2AccessDeniedHandler oauthAccessDeniedHandler() {
        return new OAuth2AccessDeniedHandler();
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer oauthServer) {
        oauthServer
                .tokenKeyAccess("permitAll()")
                .checkTokenAccess("isAuthenticated()")
                .passwordEncoder(oauthClientPasswordEncoder)
                .allowFormAuthenticationForClients();
    }

//    @Override
//    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
//        security.checkTokenAccess("isAuthenticated()");
//    }


    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.jdbc(dataSource);
//        clients.inMemory()
//                .withClient("my-trusted-client")
//                .authorizedGrantTypes("password", "authorization_code", "refresh_token", "implicit")
//                .authorities("ROLE_ADMIN", "ROLE_ASSESSOR")
//                .scopes("read", "write", "trust")
//                .secret("secret")
//                .accessTokenValiditySeconds(120).//Access token is only valid for 2 minutes.
//                refreshTokenValiditySeconds(600);//Refresh token is only valid for 10 minutes.
//    clients.inMemory().withClient("my-trusted-client")
//            .authorizedGrantTypes("client_credentials","password")
//            .authorities("ROLE_CLIENT","ROLE_TRUSTED_CLIENT")
//            .scopes("read","write","trust")
//            .resourceIds("oauth2-resource")
//            .accessTokenValiditySeconds(5000)
//            .secret("secret");
//        clients.jdbc(dataSource)
//                .withClient("sampleClientId")
//                .authorizedGrantTypes("implicit")
//                .scopes("read")
//                .autoApprove(true)
//                .and()
//                .withClient("clientIdPassword")
//                .secret("secret")
//                .authorizedGrantTypes(
//                        "password","authorization_code", "refresh_token")
//                .scopes("read");
//

//        clients.jdbc(dataSource)
//                .withClient("my-trusted-client")
//                .authorizedGrantTypes("client_credentials","password")
//                .authorities("ROLE_ADMIN","ROLE_TRUSTED_CLIENT")
//                .scopes("read","write","trust")
//                .resourceIds("oauth2-resource")
//                .accessTokenValiditySeconds(5000)
//                .secret("secret");


    }


    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
//        endpoints.authenticationManager(authenticationManager);
        super.configure(endpoints);
        endpoints.tokenStore(tokenStore()).authenticationManager(authenticationManager).userDetailsService(userDetailsService);
    }

//    @Bean
//    public JdbcTokenStore tokenStore() {
//        return new JdbcTokenStore(dataSource);
//    }


}
