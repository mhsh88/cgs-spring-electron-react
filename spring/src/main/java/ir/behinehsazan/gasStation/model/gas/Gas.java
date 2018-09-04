package ir.behinehsazan.gasStation.model.gas;

import com.fasterxml.jackson.annotation.JsonProperty;

import static ir.behinehsazan.gasStation.model.mathCalculation.MathCalculation.*;

//@JsonIgnoreProperties(ignoreUnknown = true)
public class Gas extends BaseGas {
    final double[] dencity = {1.2504, 1.977, 0.7175, 1.355, 2.011, 2.7083, 2.5326, 2.975, 2.975, 0, 0, 0, 0, 0, 0.0845, 1.429, 1.165, 0.5040, 1.434, 0.1664, 1.661};
    final double[] HHV = {0, 0, 55499, 51876, 50346, 49500, 49500, 48776, 48776, 0, 0, 0, 0, 0, 141790, 0, 10160.4048, 0, 0, 0, 0};
    private double hhvd;

    @JsonProperty
    public double getD() {
        return d;
    }

    //    @JsonProperty("m")
    @JsonProperty
    public Double getM() {
        return m;
    }

    //    @JsonProperty("u")
    @JsonProperty
    public Double getU() {
        return super.u;
    }

    //    @JsonProperty("h")
    @JsonProperty
    public Double getH() {
        return h;
    }

    //    @JsonProperty("s")
    @JsonProperty
    public Double getS() {
        return s;
    }

    //    @JsonProperty("c_v")
    @JsonProperty
    public Double getC_v() {
        return c_v;
    }

    //    @JsonProperty("c_p")
    @JsonProperty
    public double getC_p() {
        return c_p;
    }

    //    @JsonProperty("mu")
    @JsonProperty
    public Double getMu() {
        return mu;
    }

    public void setMu(Double mu) {
        this.mu = mu;
    }

    //    @JsonProperty("kappa")@JsonProperty
    @JsonProperty
    public Double getKappa() {
        return kappa;
    }

    //    @JsonProperty("w")
    @JsonProperty
    public Double getW() {
        return w;
    }

    //    @JsonProperty("HHVd")
    @JsonProperty
    public double getHhvd() {
        Double[] massFraction = matrixDevide(multiply(this.getComponent(), dencity), dotProduct(this.getComponent(), dencity));
        double heatCapacity = dotProduct(massFraction, HHV);
        calculate(this.getP_theta(), this.getT_theta());
        double HHVd = heatCapacity * this.getD();
        setHhvd(HHVd);
        return HHVd;
    }


    public void setHhvd(Double hhvd) {
        this.hhvd = hhvd;
    }

}
