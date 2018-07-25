package com.example.models.users;


import com.example.constants.users.UserConstants;
import com.example.dtos.users.UserView;
import com.example.models.station.CityGateStationEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.hosSein.core.model.BaseEntity;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

//import play.data.validation.Constraints;

@Entity
@Table(name="security_user")
@EntityListeners({AuditingEntityListener.class})
public class UserEntity extends BaseEntity implements UserConstants/*, Subject*/ {
	private static final long serialVersionUID = 1L;

	@JsonView(UserView.class)
	@ManyToOne
	@JoinColumn(name="organization_id")
	public OrganizationEntity organization;

	@JsonView(UserView.class)
	@NotNull(message = ERROR_ACTIVE_REQUIRED)
	public Boolean active;

	@JsonView(UserView.class)
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="created_date", columnDefinition = "datetime")
	@NotNull(message = ERROR_CREATED_DATE_REQUIRED)
	public Date createdDate;

	@JsonView(UserView.class)
	@Size(max = 45)
	private String province;

	@JsonView(UserView.class)
	@Size(max = 45)
	private String city;

	@JsonView(UserView.class)
	@Size(max = 250)
	private String address;

	@JsonView(UserView.class)
	@Size(max=128, message = ERROR_USERNAME_MAX_LENGTH)
	@NotNull(message = ERROR_USERNAME_REQUIRED)
	public String username;

	@JsonView(UserView.class)
	@Size(max=128, message = ERROR_EMAIL_MAX_LENGTH)
//	@Constraints.Email
	public String email;

	@JsonView(UserView.class)
	@Column(name="email_activated")
	@NotNull(message = ERROR_EMAIL_ACTIVATED_REQUIRED)
	public Boolean emailActivated;

	@JsonView(UserView.class)
	@Column(name="email_activation_code")
	@Size(max=36, message = ERROR_EMAIL_ACTIVATION_CODE_MAX_LENGTH)
	public String emailActivationCode;


	@JsonView(UserView.class)
	@Column(name="first_name")
	@NotNull(message = ERROR_FIRST_NAME_REQUIRED)
	@Size(max = 45)
	public String firstName;

	@JsonView(UserView.class)
	@Column(name="last_name")
	@NotNull(message = ERROR_LAST_NAME_REQUIRED)
	@Size(max = 45)
	public String lastName;

	@JsonView(UserView.class)
	@Column(name="mobile_activated")
	@NotNull(message = ERROR_MOBILE_ACTIVATED_REQUIRED)
	public Boolean mobileActivated;

	@JsonView(UserView.class)
	@Column(name="mobile_activation_code")
	@Size(max=6, message = ERROR_MOBILE_ACTIVATION_CODE_MAX_LENGTH)
	public String mobileActivationCode;

	@JsonView(UserView.class)
	@NotNull(message = ERROR_PASSWORD_REQUIRED)
//	@Size(message = ERROR_PASSWORD_MAX_LENGTH)
	@Lob
	public String password;

	@JsonView(UserView.class)
	@Column(name="phone_number")
	@Size(max=45, message = ERROR_PHONE_NUMBER_MAX_LENGTH)
	public String phoneNumber;

	@JsonView
	//bi-directional many-to-many association to RoleEntity
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(
		name="user_role"
		, joinColumns={
			@JoinColumn(name="user_id", nullable=false)
			}
		, inverseJoinColumns={
			@JoinColumn(name="role_id", nullable=false)
			}
		)
	public List<RoleEntity> roles;

	@JsonView
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    public List<LinkedAccountEntity> linkedAccounts;

	@JsonView
    @OneToMany(mappedBy = "user")
    public List<CityGateStationEntity> cityGateStations;

	public UserEntity() {
	}
	public UserEntity(Long id){
		super.id = id;
	}

	public String getEmail() {
		return this.email;
	}

	public String getPhoneNumber() {
		return this.phoneNumber;
	}

	public List<? extends RoleEntity> getRoles() {
		return this.roles;
	}



//    @Override
//	public String getIdentifier() {
//		return email != null && !email.isEmpty() ? email :
//				(phoneNumber != null && !phoneNumber.isEmpty() ? phoneNumber : id.toString());
//	}
//
//	@Override
//	public List<? extends Permission> getPermissions() {
//		List<PermissionEntity> permissions = new ArrayList<>();
//		getRoles().parallelStream().forEach(r -> {
//			((RoleEntity)r).permissions.parallelStream().forEach(p -> {
//				if (!permissions.contains(p))
//					permissions.add(p);
//			});
//		});
//		return permissions;
//	}

    @JsonIgnore
    public List<String> getProviders() {
        final List<String> providerKeys = new ArrayList<>();
        for (final LinkedAccountEntity acc : this.linkedAccounts) {
            providerKeys.add(acc.providerKey);
        }
        return providerKeys;
    }

    public String getFullName() {
		return firstName + " " + lastName;
	}

	public void setRoles(ArrayList<RoleEntity> roleEntities) {
		roles = roleEntities;
	}

	public void setPassword(String encode) {
		this.password = encode;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public void setEmail(String email) {
		this.email = email;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	//	public static UserEntity toAuthUser(UsernamePasswordAuthUser authUser) {
//		UserEntity user = new UserEntity();
//		user.username = authUser.getEmail();
//		user.password = authUser.getPassword();
//		return null;
//	}


    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public OrganizationEntity getOrganization() {
        return organization;
    }

    public void setOrganization(OrganizationEntity organization) {
        this.organization = organization;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Boolean getEmailActivated() {
        return emailActivated;
    }

    public void setEmailActivated(Boolean emailActivated) {
        this.emailActivated = emailActivated;
    }

    public String getEmailActivationCode() {
        return emailActivationCode;
    }

    public void setEmailActivationCode(String emailActivationCode) {
        this.emailActivationCode = emailActivationCode;
    }

    public Boolean getMobileActivated() {
        return mobileActivated;
    }

    public void setMobileActivated(Boolean mobileActivated) {
        this.mobileActivated = mobileActivated;
    }

    public String getMobileActivationCode() {
        return mobileActivationCode;
    }

    public void setMobileActivationCode(String mobileActivationCode) {
        this.mobileActivationCode = mobileActivationCode;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<LinkedAccountEntity> getLinkedAccounts() {
        return linkedAccounts;
    }

    public void setLinkedAccounts(List<LinkedAccountEntity> linkedAccounts) {
        this.linkedAccounts = linkedAccounts;
    }
}