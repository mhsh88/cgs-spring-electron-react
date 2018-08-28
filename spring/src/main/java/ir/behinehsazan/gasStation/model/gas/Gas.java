package ir.behinehsazan.gasStation.model.gas;

import com.fasterxml.jackson.annotation.JsonProperty;

import static ir.behinehsazan.gasStation.model.mathCalculation.MathCalculation.*;

public class Gas extends BaseGas {
    final double[] dencity ={1.2504,1.977,0.7175,1.355,2.011,2.7083,2.5326,2.975,2.975,0,0,0,0,0,0.0845,1.429,1.165,0.5040,1.434,0.1664,1.661};
    final double[] HHV = {0,0,55499,51876,50346,49500,49500,48776,48776,0,0,0,0,0,141790,0,10160.4048,0,0,0,0};

    @JsonProperty("D")
    public double getD() {
        return D;
    }
    @JsonProperty("M")
    public Double getM() {
        return M;
    }
    @JsonProperty("U")
    public Double getU() {
        return super.U;
    }
    @JsonProperty("H")
    public Double getH(){return H; }
    @JsonProperty("S")
    public Double getS() { return S; }
    @JsonProperty("C_v")
    public Double getC_v(){ return C_v; }
    @JsonProperty("C_p")
    public double getC_p() {
        return C_p;
    }
    @JsonProperty("mu")
    public Double getMu() {
        return mu;
    }
    public void setMu(Double mu) {
        this.mu = mu;
    }
    @JsonProperty("kappa")
    public Double getKappa(){ return kappa; }
    @JsonProperty("soundSpeed")
    public Double getW(){ return w; }

    @JsonProperty("HHVd")
    public double getHHVd(){
        Double[] massFraction = matrixDevide(multiply(this.getComponent(), dencity) , dotProduct(this.getComponent(), dencity));
        double heatCapacity = dotProduct( massFraction, HHV);
        calculate(this.getP_theta(), this.getT_theta());
        double HHVd = heatCapacity * this.getD();
        return HHVd;
    }







}
