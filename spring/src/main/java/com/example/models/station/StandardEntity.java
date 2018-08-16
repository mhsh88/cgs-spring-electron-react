package com.example.models.station;

import com.example.constants.station.StandardConstants;
import com.example.dtos.station.StandardView;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "standard",uniqueConstraints={@UniqueConstraint(columnNames ={"text"})})
@EntityListeners({AuditingEntityListener.class})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class StandardEntity extends BaseEntity implements StandardConstants {
	private static final long serialVersionUID = 1L;

	@JsonView({StandardView.class})
	@Lob
	public String text;

	public StandardEntity(){}

    public StandardEntity(Long id, String text) {
        super.id = id;
        this.text = text;
    }

    public StandardEntity(String standard) {
        super();
        this.text = standard;
    }

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

}