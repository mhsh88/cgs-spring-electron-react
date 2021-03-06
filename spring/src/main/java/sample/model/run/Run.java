package sample.model.run;

import sample.model.pipeLine.PipeLine;
import sample.model.pipeLine.PipeSize;

public class Run extends PipeLine {


    double debi;
    public Run(String size,double length,  double debi){
        super(size, length);
        this.debi = debi;
    }
    public Run(PipeSize pipeSize, double length, double debi){
        super(pipeSize, length);
        this.debi = debi;
    }
    private Run(Double OD, Double ID, Double lineThickness,Double debi,  Double insulationThickness, Double insulationFactor) {
        super(OD, ID, lineThickness, insulationThickness, insulationFactor);
        this.debi = debi;
    }

    public double getDebi() {
        return debi;
    }
}
