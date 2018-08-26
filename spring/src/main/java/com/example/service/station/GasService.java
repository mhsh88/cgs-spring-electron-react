package com.example.service.station;

import com.example.models.station.*;
import ir.behinehsazan.gasStation.model.mathCalculation.MathCalculation;
import sample.model.Station;
import sample.model.base.BaseModel;
import sample.model.pipeLine.PipeLine;
import sample.model.pipeLine.PipeSize;
import sample.model.stationProperties.StationPropertice;

import java.util.Map;

public class GasService {
    private Double[] component = new Double[21];
    private StationPropertice stationPropertice = new StationPropertice();

public void setGas(GasEntity gasEntity, CityGateStationEntity cityGateStationEntity, ConditionEntity conditionEntity){
    try {
        component[0] = gasEntity.getNitrogen();
        component[1] = gasEntity.getCarbonDioxide();
        component[2] = gasEntity.getMethan();//gasInputCheck(methanTextField);
        component[3] = gasEntity.getEthane();//gasInputCheck(ethaneTextField);
        component[4] = gasEntity.getPropane();//gasInputCheck(propaneTextField);
        component[5] = gasEntity.getnButane();//gasInputCheck(nButaneTextField);
        component[6] = gasEntity.getIsoButane();//gasInputCheck(isoButaneTextField);
        component[7] = gasEntity.getnPentane();//gasInputCheck(nPentaneTextField);
        component[8] = gasEntity.getIsoPentane();//gasInputCheck(isoPentaneTextField);
        component[9] = gasEntity.getHexane();//gasInputCheck(hexaneTextField);
        component[10] = gasEntity.getHeptane();//gasInputCheck(heptaneTextField);
        component[11] = gasEntity.getOctane();//gasInputCheck(octaneTextField);
        component[12] = gasEntity.getNonane();//gasInputCheck(nonaneTextField);
        component[13] = gasEntity.getDecane();//gasInputCheck(decaneTextField);
        component[14] = gasEntity.getHydrogen();//gasInputCheck(hydrogenTextField);
        component[15] = gasEntity.getOxygen();//gasInputCheck(oxygenTextField);
        component[16] = gasEntity.getCarbonMonoxide();//gasInputCheck(carbonMonoxideTextField);
        component[17] = gasEntity.getWater();//gasInputCheck(waterTextField);
        component[18] = gasEntity.getHydrogenSulfide();//gasInputCheck(hydrogenSulfideTextField);
        component[19] = gasEntity.getHelium();//gasInputCheck(heliumTextField);
        component[20] = gasEntity.getArgon();//gasInputCheck(argonTextField);
    }
    catch (Exception e){
        return;
    }
    if(MathCalculation.listSum(component) <= 0){
        return;
    }

    component = MathCalculation.normal(component);
    Double[] M_i = {28.0135
            , 44.01
            , 16.043
            , 30.07
            , 44.097
            , 58.123
            , 58.123
            , 72.15
            , 72.15
            , 86.177
            , 100.204
            , 114.231
            , 128.258
            , 142.285
            , 2.0159
            , 31.9988
            , 28.01
            , 18.0153
            , 34.082
            , 4.0026
            , 39.948};
    if(gasEntity.isMoleWightPersent()){


        component =   MathCalculation.normal(MathCalculation.matrixDevide(MathCalculation.pointToPointDivistion(component, M_i), MathCalculation.dotProduct(component, M_i)));
    }

    stationPropertice.setComponent(component);


    stationPropertice.setProvince(cityGateStationEntity.province);
    stationPropertice.setCity(cityGateStationEntity.city);
    stationPropertice.setArea(cityGateStationEntity.region);
    stationPropertice.setNominalCapacity(String.valueOf(cityGateStationEntity.nominalCapacity));
    stationPropertice.setAddress(cityGateStationEntity.address);

    stationPropertice.setInputTemp(conditionEntity.getStationInputTemprature());
    stationPropertice.setInputPressure(conditionEntity.getStationInputPressure());

    stationPropertice.setOutputPressure(conditionEntity.getStationOutputPressure());
    stationPropertice.setOutputTemp(conditionEntity.getStationOutputTemprature());

    stationPropertice.setEnvironmentTemp(conditionEntity.getEnvTempreture());
    stationPropertice.setWindVelocity(conditionEntity.getWindSpeed());
    stationPropertice.setDebi(conditionEntity.getStationDebi());


    Station station = Station.getInstance();
    Map<String, BaseModel> tempMap = station.getList();
    tempMap.put("stationPropertice",stationPropertice);



}

public void setBeforeHeater(PipeSpecificationsEntity pipeSpecificationsEntity){
PipeSize pipeSize = new PipeSize(pipeSpecificationsEntity.pipeSize.getWallThickness(),pipeSpecificationsEntity.pipeSize.getOuterDiameter());
    PipeLine pipeLine = new PipeLine(pipeSize, pipeSpecificationsEntity.getLength());
    pipeLine.setInsulationFactor(pipeSpecificationsEntity.getInsulationFactor());
    pipeLine.setInsulationThickness(pipeSpecificationsEntity.getInsulationThickness());

    Map<String, BaseModel> map = Station.getInstance().getList();
    map.put("beforeHeaterPipeLine", pipeLine);


}
}
