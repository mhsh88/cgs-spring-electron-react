package service.users;

import com.example.models.users.RoleEntity;
import com.example.models.users.UserEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class CustomUserDetails implements UserDetails {

    private String username;
    private String password;
    private Long organizationId;
    private boolean active;
    Collection<? extends GrantedAuthority> authorities;


    public CustomUserDetails(UserEntity byUsername) {
        this.username = byUsername.username;
        this.password = byUsername.password;
        this.active = byUsername.active;

        List<GrantedAuthority> auths = new ArrayList<>();
        for(RoleEntity role : byUsername.getRoles()){
            auths.add(new SimpleGrantedAuthority(role.name/*.toUpperCase()*/));

        }

        this.authorities = auths;

    }

    public CustomUserDetails(String username, String password, Boolean active, Collection<? extends GrantedAuthority> authorities, Long organizationId) {
        this.username = username;
        this.password = password;
        this.active = active;
        this.authorities = authorities;
        this.organizationId = organizationId;

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.active ;
    }


    public Long getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(Long organizationId) {
        this.organizationId = organizationId;
    }

}
