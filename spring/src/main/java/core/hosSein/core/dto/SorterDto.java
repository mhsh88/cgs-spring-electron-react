package core.hosSein.core.dto;

/**
 * Created by Payam Mostafaei
 * Creation time: 2017/Aug/14 - 1:46 PM
 */
public class SorterDto {
    private String field;
    private String order;

    public SorterDto() {

    }

    public SorterDto(String field, String order) {
        this.field = field;
        this.order = order;

    }

    public SorterDto(String string){

    }
    public String getField() {
        return field;
    }
    public void setField(String field) {
        this.field = field;
    }

    public String getOrder() {
        return order;
    }
    public void setOrder(String order) {
        this.order = order;
    }
}
