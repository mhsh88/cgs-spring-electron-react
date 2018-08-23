package com.example.service.station;

import com.example.models.station.CalculationEntity;
import com.example.models.station.CityGateStationEntity;
import com.example.models.station.ConditionEntity;
import com.example.models.station.GasEntity;
import org.springframework.stereotype.Service;

@Service
public class ResultService {
    public void getCalculationResult(CalculationEntity calculationEntity) {
        CityGateStationEntity cityGateStation = calculationEntity.cityGateStation;
        ConditionEntity conditionEntity = calculationEntity.condition;
        GasEntity gasEntity = calculationEntity.gas;

    }
}
