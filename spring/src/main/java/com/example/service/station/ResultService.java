package com.example.service.station;

import com.example.models.station.CalculationEntity;
import com.example.models.station.CityGateStationEntity;
import com.example.models.station.ConditionEntity;
import com.example.models.station.GasEntity;
import org.springframework.stereotype.Service;
import sample.controller.calculate.CalculateController;

@Service
public class ResultService {
    public void getCalculationResult(CalculationEntity calculationEntity) {
        CityGateStationEntity cityGateStation = calculationEntity.cityGateStation;
        ConditionEntity conditionEntity = calculationEntity.condition;
        GasEntity gasEntity = calculationEntity.gas;
        GasService gasService = new GasService();
        gasService.setGas(gasEntity,cityGateStation,conditionEntity);
        gasService.setBeforeHeater(cityGateStation.beforeHeater);
        gasService.setHeater(cityGateStation);
        gasService.setAfterHeater(cityGateStation.afterHeater);
        gasService.setRunAndCollector(cityGateStation);

        CalculateController calculateController = new CalculateController();
        calculateController.calculate();



    }
}
