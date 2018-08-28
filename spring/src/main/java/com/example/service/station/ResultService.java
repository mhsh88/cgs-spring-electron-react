package com.example.service.station;

import com.example.models.station.CalculationEntity;
import com.example.models.station.CityGateStationEntity;
import com.example.models.station.ConditionEntity;
import com.example.models.station.GasEntity;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.stereotype.Service;
import sample.controller.calculate.CalculateController;

import java.io.IOException;

@Service
public class ResultService {
    public ObjectNode getCalculationResult(CalculationEntity calculationEntity) throws IOException {
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
        return calculateController.calculate();



    }
}
