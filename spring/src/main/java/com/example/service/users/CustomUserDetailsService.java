package service.users;


import com.example.models.users.PermissionEntity;
import com.example.models.users.RoleEntity;
import com.example.models.users.UserEntity;
import com.example.repositories.users.RoleRepository;
import com.example.repositories.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Service("userDetailsService")
@Transactional
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    public UserRepository userRepository;
//    @Autowired
//    private IUserService service;
//    @Autowired
//    private MessageSource messages;
    @Autowired
    public RoleRepository roleRepository;

//    @Autowired
//    public CustomUserDetailsService(UserRepository userRepository){
//        this.userRepository = userRepository;
//    }


    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByUsername(username);
//        if (user == null) {
//            return new org.springframework.security.core.userdetails.User(
//                    " ", " ", true, true, true, true,
//                    getAuthorities(Arrays.asList(roleRepository.findByName("ROLE_USER"))));
//        }
        if(user == null)
            throw new UsernameNotFoundException(username);
//
//        return new org.springframework.security.core.userdetails.User(
//                user.email, user.password, user.active, true, true,
//                true, getAuthorities(user.roles));

        return new service.users.CustomUserDetails(user.username, user.password, user.active, getAuthorities(user.roles),user.organization.id);
//        return new CustomUserDetails(user);
    }

    private Collection<? extends GrantedAuthority> getAuthorities(Collection<RoleEntity> roles) {
        return getGrantedAuthorities(getPrivileges(roles));
    }

    private List<String> getPrivileges(Collection<RoleEntity> roles) {
        List<String> privileges = new ArrayList<String>();
        List<PermissionEntity> collection = new ArrayList<PermissionEntity>();
        for (RoleEntity role : roles) {
            collection.addAll(role.permissions);
            privileges.add(role.name);
        }
        for (PermissionEntity item : collection) {
            privileges.add(item.name);
        }

        return privileges;
    }

    private List<GrantedAuthority> getGrantedAuthorities(List<String> privileges) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (String privilege : privileges) {
            authorities.add(new SimpleGrantedAuthority(privilege));
        }
        return authorities;
    }
}