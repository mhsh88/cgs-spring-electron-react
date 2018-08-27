package sample.model.run;

import sample.model.pipeLine.PipeLine;
import sample.model.pipeLine.PipeSize;

public class Collector extends PipeLine {
    public Collector(String size, double length) {
        super(size,length);
    }
    public Collector(PipeSize pipeSize, double length){
        super(pipeSize, length);
    }
}
