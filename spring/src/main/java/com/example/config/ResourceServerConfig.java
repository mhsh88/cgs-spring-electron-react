package config;


import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;

@EnableResourceServer
@Configuration
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {
    private static final String RESOURCE_ID = "resource-server-rest-api";
    private static final String SECURED_READ_SCOPE = "#oauth2.hasScope('read')";
    private static final String SECURED_WRITE_SCOPE = "#oauth2.hasScope('write')";
    private static final String SECURED_UPDATE_SCOPE = "#oauth2.hasScope('update')";
    private static final String SECURED_PATTERN = "/u/**";

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        resources.resourceId(RESOURCE_ID).stateless(false);
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
//                http.authorizeRequests()
//                .antMatchers("/**").permitAll();
                        http.authorizeRequests()
                .antMatchers("/**").authenticated();
//        http.requestMatchers()
//                .antMatchers(SECURED_PATTERN)
//                .and().authorizeRequests();
//                .antMatchers(HttpMethod.POST, SECURED_PATTERN).access(SECURED_WRITE_SCOPE)
//                .anyRequest().access(SECURED_READ_SCOPE);
//        http.requestMatchers()
//                .antMatchers(SECURED_PATTERN)
//                .and().authorizeRequests()
//                .antMatchers(HttpMethod.POST, SECURED_PATTERN).access(SECURED_WRITE_SCOPE)
//                .antMatchers(HttpMethod.PUT, SECURED_PATTERN).access(SECURED_UPDATE_SCOPE)
//                .anyRequest().access(SECURED_READ_SCOPE);
    }


//    @Override
//    public void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                .antMatchers("/**").authenticated();
//                .antMatchers("/").permitAll()

//                .antMatchers("/u/**").authenticated()
//        .anyRequest().authenticated()
//        .and()
//        .formLogin()
//        .loginPage("/login")
//        .permitAll()
//        .and()
//        .logout()
//        .logoutUrl("/logout")
//        .permitAll();
//    }

//    @Override
//    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
//        super.configure(resources);
//    }
}
