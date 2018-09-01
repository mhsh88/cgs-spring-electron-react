package sample.controller.calculate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import ir.behinehsazan.gasStation.model.burner.Burner;
import ir.behinehsazan.gasStation.model.gas.Gas;
import ir.behinehsazan.gasStation.model.heater.Heater;
import ir.behinehsazan.gasStation.model.heater.Heaters;
import ir.behinehsazan.gasStation.model.pipeLine.base.BasePipe;
import ir.behinehsazan.gasStation.model.regulator.Regulator;
import ir.behinehsazan.gasStation.model.run.base.BaseRun;
import ir.behinehsazan.gasStation.model.station.StationLogic;
import javafx.collections.ObservableList;
import sample.controller.base.BaseController;
import sample.controller.showResults.ShowResultsController;
import sample.model.Station;
import sample.model.heaters.HeatersModel;
import sample.model.pipeLine.PipeLine;
import sample.model.run.Runs;
import sample.model.showResultEntity.Table;
import sample.model.stationProperties.StationPropertice;

import java.io.IOException;
import java.util.List;

public class CalculateController extends BaseController{
    public final static String celciusDegree = " (C°)";
    public final static String percent = " (٪)";
    public final static String pressureDegree = " (kPa)";
    public final static String PSI = "Psi";
    public final static String KPA = "kPa";
    public final static String MPA = "MPa";
    public final static String CELCIUS = "°C";
    public final static String FARENHEIT = "°F";
    public final static String MINUS = "-";
    public final static String SPACE = " ";
    ObjectMapper mapper = new ObjectMapper();

    ArrayNode arrayNode = mapper.createArrayNode();
    ObjectNode stationItems = mapper.createObjectNode();



    public final static String cubicMeter = " متر مکعب بر ساعت ";
    public final static String windSpeed = " m/s ";
    double Th;
    public ObjectNode calculate() throws IOException {
        boolean state;

        Station station = Station.getInstance();
        Runs runs = (Runs) station.getList().get("Runs");
        StationPropertice stationPropertice = (StationPropertice) station.getList().get("stationPropertice");
        HeatersModel heatersModel = (HeatersModel) station.getList().get("HeatersModel");
        PipeLine afterHeaterPipeLine = (PipeLine) station.getList().get("afterHeaterPipeLine");
        PipeLine beforeHeaterPipeLine = (PipeLine) station.getList().get("beforeHeaterPipeLine");
        if(stationPropertice == null){
            throw new NullPointerException("اطلاعات ایستگاه تکمیل نشده است");
        }
        else{

            if(runs != null){
                double tempDebi = 0;
                for(int i = 0 ; i < runs.getRuns().size(); i++){
                    tempDebi += runs.getRuns().get(i).getDebi();

                }
                if(stationPropertice.getDebi() < tempDebi){
                    stationPropertice.setDebi(tempDebi);
                }

            }



            StationLogic stationLogic = new StationLogic();
            Gas gas = new Gas();
            Double[] component = stationPropertice.getComponent();
            gas.setComponent(component);
            stationLogic.setGas(gas);
            stationLogic.setTenv(stationPropertice.getEnvironmentTemp());
            stationLogic.setVair(stationPropertice.getWindVelocity());
            stationLogic.setDebi(stationPropertice.getDebi());
            stationLogic.setTin(stationPropertice.getInputTemp());
            stationLogic.setPin(stationPropertice.getInputPressure());
            stationLogic.setTout(stationPropertice.getOutputTemp());
            stationLogic.setPout(stationPropertice.getOutputPressure());


            station.getList().put("beforeHeaterPipeLine", stationLogic.setBeforeHeater(beforeHeaterPipeLine));



            stationLogic.setRegulator();


            stationLogic.setRuns(runs);

            stationLogic.setCollector(runs);




            station.getList().put("afterHeaterPipeLine", stationLogic.setAfterHeater(afterHeaterPipeLine));


            stationLogic.setHeaters(heatersModel);
//
            station.setStationLogic(stationLogic);

            state = true;



//            stationItems.put("province",stationPropertice.getProvince());
//            stationItems.put("city",stationPropertice.getCity());
//            stationItems.put("region", stationPropertice.getArea());
//            stationItems.put("address", stationPropertice.getAddress());
//            stationItems.put("nominalCapacity", stationPropertice.getNominalCapacity());
//            if(stationPropertice.getEnvironmentTemp()!=null) {
//                stationItems.put("envTemperature", String.valueOf(stationPropertice.getEnvironmentTemp() - 273.15));
//            }
//            stationItems.put("windSpeed", stationPropertice.getWindVelocity());
//            stationItems.put("stationInputTemperature", stationPropertice.getInputTemp() - 273.15);
//            stationItems.put("stationInputPressure", stationPropertice.getInputPressure());
//            stationItems.put("stationOutputTemperature", stationPropertice.getOutputTemp() - 273.15);
//            stationItems.put("stationOutputPressure", stationPropertice.getOutputPressure());
//            stationItems.put("stationDebi", stationPropertice.getDebi());

            ObjectNode userInput = mapper.createObjectNode();

//
            ObjectNode beforeHeater = mapper.createObjectNode();
            PipeLine beforeheaterpipeline = (PipeLine) station.getList().get("beforeHeaterPipeLine");
            ObjectNode beforeHeaterInput = mapper.createObjectNode();
            beforeHeaterInput.put("T", beforeheaterpipeline.getTin());
            beforeHeaterInput.put("P", beforeheaterpipeline.getPin());
            gas.calculate(beforeheaterpipeline.getPin(),beforeheaterpipeline.getTin());
            beforeHeaterInput.put("gas", removeGasProperty(gas));
            beforeHeater.put("input",beforeHeaterInput);

            ObjectNode beforeHeaterOutput = mapper.createObjectNode();
            beforeHeaterOutput.put("T", beforeheaterpipeline.getTout());
            beforeHeaterOutput.put("P", beforeheaterpipeline.getPout());
            gas.calculate(beforeheaterpipeline.getPout(),beforeheaterpipeline.getTout());
            beforeHeaterOutput.put("gas",removeGasProperty(gas));
            beforeHeater.put("output",beforeHeaterOutput);
            beforeHeater.put("insulationLoss", -1 * beforeheaterpipeline.getWithInsulationConsumption());
            beforeHeater.put("noInsulationLoss", -1 * beforeheaterpipeline.getWithInsulationConsumption());

            userInput.put("beforeHeater", beforeHeater);
//
//
//
            if (stationLogic.getHeaters() != null) {

                Heaters heaters = stationLogic.getHeaters();
                List<Heater> heater = heaters.getHeaters();
//                data.add(new Table("اطلاعات گرم کن ", "", ""));
                ObjectNode allHeaters = mapper.createObjectNode();
                ArrayNode jsonHeaters = mapper.createArrayNode();
                for (Heater h : heater) {
                    ObjectNode jsonHeater = mapper.createObjectNode();
                    jsonHeater.put("efficiency", h.getEfficiency() * 100);

                    List<Burner> burners = h.getBurners();
                    ArrayNode jsonBurners = mapper.createArrayNode();
                    int temp2 = 1;
                    for (Burner b : burners) {
                        ObjectNode jsonBurner = mapper.createObjectNode();
                        jsonBurner.put("flueGasTemperature", b.getTstack());
                        jsonBurner.put("oxygenPercent", b.getOxygen());
                        jsonBurner.put("efficiency", b.getEfficiency());
                        jsonBurner.put("consumption", b.getConsumption());
                        jsonBurners.add(jsonBurner);
                    }

                    jsonHeater.put("burners", jsonBurners);
                    jsonHeaters.add(jsonHeater);
                }

                allHeaters.put("heaters", jsonHeaters);
                allHeaters.put("consumption", heaters.getConsumption());

                ObjectNode heaterInput = mapper.createObjectNode();
                heaterInput.put("T", heaters.getTin());
                heaterInput.put("P", heaters.getPin());
                gas.calculate(heaters.getPin(),heaters.getTin());
                heaterInput.put("gas",removeGasProperty(gas));
                allHeaters.put("input",heaterInput);

                ObjectNode heaterOutput = mapper.createObjectNode();
                heaterOutput.put("T", heaters.getTout());
                heaterOutput.put("P", heaters.getPout());
                gas.calculate(heaters.getPout(),heaters.getTout());
                heaterOutput.put("gas",removeGasProperty(gas));
                allHeaters.put("output",heaterOutput);

                userInput.put("heater", allHeaters);

            }

            ObjectNode afterHeater = mapper.createObjectNode();

            ObjectNode afterHeaterInput = mapper.createObjectNode();
            afterHeaterInput.put("T", afterHeaterPipeLine.getTin());
            afterHeaterInput.put("P", afterHeaterPipeLine.getPin());
            gas.calculate(afterHeaterPipeLine.getPin(),afterHeaterPipeLine.getTin());
            afterHeaterInput.put("gas",removeGasProperty(gas));
            afterHeater.put("input",afterHeaterInput);

            ObjectNode afterHeaterOutput = mapper.createObjectNode();
            afterHeaterOutput.put("T", afterHeaterPipeLine.getTout());
            afterHeaterOutput.put("P", afterHeaterPipeLine.getPout());
            gas.calculate(afterHeaterPipeLine.getPout(),afterHeaterPipeLine.getTout());
            afterHeaterOutput.put("gas",removeGasProperty(gas));
            afterHeater.put("output",afterHeaterOutput);
            afterHeater.put("insulationLoss", -1 * afterHeaterPipeLine.getWithInsulationConsumption());
            afterHeater.put("noInsulationLoss", -1 * afterHeaterPipeLine.getWithInsulationConsumption());

            userInput.put("afterHeater", afterHeater);
//
//
            if (stationLogic != null) {
                if (stationLogic.getCollector() != null) {

                    BasePipe collector = stationLogic.getCollector();
                    ObjectNode jsonCollector = mapper.createObjectNode();

                    ObjectNode collectorInput = mapper.createObjectNode();
                    collectorInput.put("T", collector.getTin());
                    collectorInput.put("P", collector.getPin());
                    gas.calculate(collector.getPin(),collector.getTin());
                    collectorInput.put("gas",removeGasProperty(gas));
                    jsonCollector.put("input",collectorInput);

                    ObjectNode collectorOutput = mapper.createObjectNode();
                    collectorOutput.put("T", afterHeaterPipeLine.getTout());
                    collectorOutput.put("P", afterHeaterPipeLine.getPout());
                    gas.calculate(afterHeaterPipeLine.getPout(),afterHeaterPipeLine.getTout());
                    collectorOutput.put("gas",removeGasProperty(gas));
                    jsonCollector.put("output",collectorOutput);

                    jsonCollector.put("loss", -1 * collector.getConsumption());

                    userInput.put("collector", jsonCollector);

                }
            }
            if (stationLogic != null) {
                if (stationLogic.getRuns() != null) {

                    ir.behinehsazan.gasStation.model.run.Runs logicRuns = stationLogic.getRuns();
                    List<BaseRun> run = logicRuns.getRuns();
                    ArrayNode runArray = mapper.createArrayNode();
                    int i = 1;
                    for (BaseRun r : run) {
                        ObjectNode jsonRun = mapper.createObjectNode();

                        ObjectNode runInput = mapper.createObjectNode();
                        runInput.put("T", r.getTin());
                        runInput.put("P", r.getPin());
                        gas.calculate(r.getPin(),r.getTin());
                        runInput.put("gas",removeGasProperty(gas));
                        jsonRun.put("input",runInput);

                        ObjectNode runOutput = mapper.createObjectNode();
                        runOutput.put("T", afterHeaterPipeLine.getTout());
                        runOutput.put("P", afterHeaterPipeLine.getPout());
                        gas.calculate(afterHeaterPipeLine.getPout(),afterHeaterPipeLine.getTout());
                        runOutput.put("gas",removeGasProperty(gas));
                        jsonRun.put("output",runOutput);

                        jsonRun.put("loss", -1 * r.getConsumption());
                        runArray.add(jsonRun);
                    }
                    userInput.put("runs", runArray);

                }
            }

            if (stationLogic != null) {
                if (stationLogic.getRegulator() != null) {
                    Regulator regulator = stationLogic.getRegulator();
                    ObjectNode jsonRegulator = mapper.createObjectNode();

                    ObjectNode regulatorInput = mapper.createObjectNode();
                    regulatorInput.put("T", regulator.getTin());
                    regulatorInput.put("P", regulator.getPin());
                    gas.calculate(regulator.getPin(),regulator.getTin());
                    regulatorInput.put("gas",removeGasProperty(gas));
                    jsonRegulator.put("input",regulatorInput);

                    ObjectNode regulatorOutput = mapper.createObjectNode();
                    regulatorOutput.put("T", regulator.getTout());
                    regulatorOutput.put("P", regulator.getPout());
                    gas.calculate(regulator.getPout(),regulator.getTout());
                    regulatorOutput.put("gas",removeGasProperty(gas));
                    jsonRegulator.put("output",regulatorOutput);
                    userInput.put("regulator", jsonRegulator);
                 }
            }

            stationItems.put("userInputTemperature", userInput);


            // T_hydrate temperature




        }




//        saveUserTempInputResults();
        calculateHydrateResults();
        return stationItems;





    }

    private void calculateHydrateResults() throws IOException {
        boolean state;

        Station station = Station.getInstance();
        Runs runs = (Runs) station.getList().get("Runs");
        StationPropertice stationPropertice = (StationPropertice) station.getList().get("stationPropertice");
        HeatersModel heatersModel = (HeatersModel) station.getList().get("HeatersModel");
        PipeLine afterHeaterPipeLine = (PipeLine) station.getList().get("afterHeaterPipeLine");
        PipeLine beforeHeaterPipeLine = (PipeLine) station.getList().get("beforeHeaterPipeLine");
        if(stationPropertice == null){
            throw new NullPointerException("اطلاعات ایستگاه تکمیل نشده است");
//            showAlert("خطا","خطا در اطلاعات ورودی","اطلاعات ایستگاه تکمیل نشده است", Alert.AlertType.ERROR);
//            return false;
        }
        else{



            StationLogic stationLogic = new StationLogic();
            Gas gas = new Gas();
            Double[] component = stationPropertice.getComponent();
            gas.setComponent(component);
            gas.calculate(stationPropertice.getOutputPressure(), stationPropertice.getOutputTemp(),component);
            Th = gas.getT_h();
            stationLogic.setGas(gas);
            stationLogic.setTenv(stationPropertice.getEnvironmentTemp());
            stationLogic.setVair(stationPropertice.getWindVelocity());
            stationLogic.setDebi(stationPropertice.getDebi());
            stationLogic.setTin(stationPropertice.getInputTemp());
            stationLogic.setPin(stationPropertice.getInputPressure());
            if(gas.getT_h()>50){

                throw new IllegalArgumentException("دمای هیدرات برای شرایط زیر قابل محاسبه نیست");
//                ObservableList<Table> data = ShowResultsController.getHydrateData();
//                data.clear();
//                data.add(new Table("خطا", "","دمای هیدرات برای شرایط زیر قابل محاسبه نیست"));
//                return;
            }
            stationLogic.setTout(Th + 273.15 + 2);
            stationLogic.setPout(stationPropertice.getOutputPressure());

            station.getList().put("beforeHeaterPipeLine", stationLogic.setBeforeHeater(beforeHeaterPipeLine));

            stationLogic.setRegulator();


            stationLogic.setRuns(runs);

            stationLogic.setCollector(runs);




            station.getList().put("afterHeaterPipeLine", stationLogic.setAfterHeater(afterHeaterPipeLine));


            stationLogic.setHeaters(heatersModel);
//
            station.setStationLogic(stationLogic);
            state = true;

            ObjectNode userInput = mapper.createObjectNode();

            ObjectNode beforeHeater = mapper.createObjectNode();

            ObjectNode beforeHeaterInput = mapper.createObjectNode();
            beforeHeaterInput.put("T", beforeHeaterPipeLine.getTin());
            beforeHeaterInput.put("P", beforeHeaterPipeLine.getPin());
            gas.calculate(beforeHeaterPipeLine.getPin(),beforeHeaterPipeLine.getTin());
            beforeHeaterInput.put("gas",removeGasProperty(gas));
            beforeHeater.put("input",beforeHeaterInput);

            ObjectNode beforeHeaterOutput = mapper.createObjectNode();
            beforeHeaterOutput.put("T", beforeHeaterPipeLine.getTout());
            beforeHeaterOutput.put("P", beforeHeaterPipeLine.getPout());
            gas.calculate(beforeHeaterPipeLine.getPout(),beforeHeaterPipeLine.getTout());
            beforeHeaterOutput.put("gas",removeGasProperty(gas));
            beforeHeater.put("output",beforeHeaterOutput);
            beforeHeater.put("insulationConsumption", -1 * beforeHeaterPipeLine.getWithInsulationConsumption());
            beforeHeater.put("noInsulationConsumption", -1 * beforeHeaterPipeLine.getWithInsulationConsumption());

            userInput.put("beforeHeater", beforeHeater);



            if (stationLogic.getHeaters() != null) {

                Heaters heaters = stationLogic.getHeaters();
                List<Heater> heater = heaters.getHeaters();
                ObjectNode allHeaters = mapper.createObjectNode();
                ArrayNode jsonHeaters = mapper.createArrayNode();
                for (Heater h : heater) {
                    ObjectNode jsonHeater = mapper.createObjectNode();
                    jsonHeater.put("efficiency", h.getEfficiency() * 100);

                    List<Burner> burners = h.getBurners();
                    ArrayNode jsonBurners = mapper.createArrayNode();
                    int temp2 = 1;
                    for (Burner b : burners) {
                        ObjectNode jsonBurner = mapper.createObjectNode();
                        jsonBurner.put("flueGasTemperature", b.getTstack());
                        jsonBurner.put("oxygenPercent", b.getOxygen());
                        jsonBurner.put("efficiency", b.getEfficiency());
                        jsonBurner.put("consumption", b.getConsumption());
                        jsonBurners.add(jsonBurner);
                    }

                    jsonHeater.put("burners", jsonBurners);
                    jsonHeaters.add(jsonHeater);
                }

                allHeaters.put("heaters", jsonHeaters);
                allHeaters.put("consumption", heaters.getConsumption());

                ObjectNode heaterInput = mapper.createObjectNode();
                heaterInput.put("T", heaters.getTin());
                heaterInput.put("P", heaters.getPin());
                gas.calculate(heaters.getPin(),heaters.getTin());
                heaterInput.put("gas",removeGasProperty(gas));
                allHeaters.put("input",heaterInput);

                ObjectNode heaterOutput = mapper.createObjectNode();
                heaterOutput.put("T", heaters.getTout());
                heaterOutput.put("P", heaters.getPout());
                gas.calculate(heaters.getPout(),heaters.getTout());
                heaterOutput.put("gas",removeGasProperty(gas));
                allHeaters.put("output",heaterOutput);

                userInput.put("heater", allHeaters);

            }


            ObjectNode afterHeater = mapper.createObjectNode();

            ObjectNode afterHeaterInput = mapper.createObjectNode();
            afterHeaterInput.put("T", afterHeaterPipeLine.getTin());
            afterHeaterInput.put("P", afterHeaterPipeLine.getPin());
            gas.calculate(afterHeaterPipeLine.getPin(),afterHeaterPipeLine.getTin());
            afterHeaterInput.put("gas",removeGasProperty(gas));
            afterHeater.put("input",afterHeaterInput);

            ObjectNode afterHeaterOutput = mapper.createObjectNode();
            afterHeaterOutput.put("T", afterHeaterPipeLine.getTout());
            afterHeaterOutput.put("P", afterHeaterPipeLine.getPout());
            gas.calculate(afterHeaterPipeLine.getPout(),afterHeaterPipeLine.getTout());
            afterHeaterOutput.put("gas",removeGasProperty(gas));
            afterHeater.put("output",afterHeaterOutput);
            afterHeater.put("insulationLoss", -1 * afterHeaterPipeLine.getWithInsulationConsumption());
            afterHeater.put("noInsulationLoss", -1 * afterHeaterPipeLine.getWithInsulationConsumption());

            userInput.put("afterHeater", afterHeater);


            if (stationLogic != null) {
                if (stationLogic.getCollector() != null) {

                    BasePipe collector = stationLogic.getCollector();
                    ObjectNode jsonCollector = mapper.createObjectNode();

                    ObjectNode collectorInput = mapper.createObjectNode();
                    collectorInput.put("T", collector.getTin());
                    collectorInput.put("P", collector.getPin());
                    gas.calculate(collector.getPin(),collector.getTin());
                    collectorInput.put("gas",removeGasProperty(gas));
                    jsonCollector.put("input",collectorInput);

                    ObjectNode collectorOutput = mapper.createObjectNode();
                    collectorOutput.put("T", afterHeaterPipeLine.getTout());
                    collectorOutput.put("P", afterHeaterPipeLine.getPout());
                    gas.calculate(afterHeaterPipeLine.getPout(),afterHeaterPipeLine.getTout());
                    collectorOutput.put("gas",removeGasProperty(gas));
                    jsonCollector.put("output",collectorOutput);

                    jsonCollector.put("loss", -1 * collector.getConsumption());

                    userInput.put("collector", jsonCollector);

                }
            }
            if (stationLogic != null) {
                if (stationLogic.getRuns() != null) {

                    ir.behinehsazan.gasStation.model.run.Runs logicRuns = stationLogic.getRuns();
                    List<BaseRun> run = logicRuns.getRuns();
                    ArrayNode runArray = mapper.createArrayNode();
                    int i = 1;
                    for (BaseRun r : run) {
                        ObjectNode jsonRun = mapper.createObjectNode();

                        ObjectNode runInput = mapper.createObjectNode();
                        runInput.put("T", r.getTin());
                        runInput.put("P", r.getPin());
                        gas.calculate(r.getPin(),r.getTin());
                        runInput.put("gas",removeGasProperty(gas));
                        jsonRun.put("input",runInput);

                        ObjectNode runOutput = mapper.createObjectNode();
                        runOutput.put("T", afterHeaterPipeLine.getTout());
                        runOutput.put("P", afterHeaterPipeLine.getPout());
                        gas.calculate(afterHeaterPipeLine.getPout(),afterHeaterPipeLine.getTout());
                        runOutput.put("gas",removeGasProperty(gas));
                        jsonRun.put("output",runOutput);

                        jsonRun.put("loss", -1 * r.getConsumption());
                        runArray.add(jsonRun);
                    }
                    userInput.put("runs", runArray);

                }
            }

            if (stationLogic != null) {
                if (stationLogic.getRegulator() != null) {
                    Regulator regulator = stationLogic.getRegulator();
                    ObjectNode jsonRegulator = mapper.createObjectNode();

                    ObjectNode regulatorInput = mapper.createObjectNode();
                    regulatorInput.put("T", regulator.getTin());
                    regulatorInput.put("P", regulator.getPin());
                    gas.calculate(regulator.getPin(),regulator.getTin());
                    regulatorInput.put("gas",removeGasProperty(gas));
                    jsonRegulator.put("input",regulatorInput);

                    ObjectNode regulatorOutput = mapper.createObjectNode();
                    regulatorOutput.put("T", regulator.getTout());
                    regulatorOutput.put("P", regulator.getPout());
                    gas.calculate(regulator.getPout(),regulator.getTout());
                    regulatorOutput.put("gas",removeGasProperty(gas));
                    jsonRegulator.put("output",regulatorOutput);
                    userInput.put("regulator", jsonRegulator);
                }
            }

            stationItems.put("hydrateTemperature", userInput);


            // T_hydrate temperature




        }

//        saveHydrateResults();
//        return state;

    }

    private void saveHydrateResults() {
        ObservableList<Table> data = ShowResultsController.getHydrateData();
        data.clear();

        StationLogic stationLogic = Station.getInstance().getStationLogic();
        StationPropertice stationPropertice = (StationPropertice) Station.getInstance().getList().get("stationPropertice");
        if (stationPropertice == null) {
            return;

        }
        else{
            data.add(new Table("محاسبات بر اساس دمای هیدرات به علاوه ۲ درجه", "", ""));
//            System.out.println(Th);
            data.add(new Table("دمای هیدرات ", CELCIUS, String.valueOf(Th)));

        }
        if (stationLogic != null) {
            if (stationLogic.getBeforeHeater() != null) {


//                    BasePipe beforeHeater = stationLogic.getBeforeHeater();
//                    data.add(new Table("خط لوله قبل از گرم کن", ""));
//
//                    data.add(new Table("دمای گاز ورودی", String.valueOf(beforeHeater.getTin() - 273.15)));
//                    data.add(new Table("فشار گاز ورودی", String.valueOf(beforeHeater.getPin())));
//                    data.add(new Table("دمای گاز خروجی", String.valueOf(beforeHeater.getTout() - 273.15)));
//                    data.add(new Table("فشار گاز خروجی", String.valueOf(beforeHeater.getPout())));
//                    data.add(new Table("اختلاف دما", String.valueOf(beforeHeater.getTin() - 273.15 - beforeHeater.getTout() - 273.15)));
//                    data.add(new Table("تلفات حرارتی", String.valueOf(beforeHeater.getConsumption())));
                if(Station.getInstance().getList().get("beforeHeaterPipeLine") !=null) {
                    PipeLine beforeHeaterSampleModel = (PipeLine) Station.getInstance().getList().get("beforeHeaterPipeLine");
                    data.add(new Table("خط لوله قبل از گرم کن", "", ""));

                    data.add(new Table("دمای گاز ورودی", CELCIUS, String.valueOf(beforeHeaterSampleModel.getTin() - 273.15)));
                    data.add(new Table("فشار گاز ورودی" , PSI, String.valueOf(beforeHeaterSampleModel.getPin())));
                    data.add(new Table("دمای گاز خروجی", CELCIUS, String.valueOf(beforeHeaterSampleModel.getTout() - 273.15)));
                    data.add(new Table("فشار گاز خروجی" , PSI, String.valueOf(beforeHeaterSampleModel.getPout())));
                    data.add(new Table("اختلاف دما", CELCIUS, String.valueOf(beforeHeaterSampleModel.getTin() - 273.15 - beforeHeaterSampleModel.getTout() - 273.15)));
                    data.add(new Table(   "تلفات حرارتی با عایق حرارتی" , cubicMeter, String.valueOf(beforeHeaterSampleModel.getWithInsulationConsumption())));
                    data.add(new Table("تلفات حرارتی بدون عایق حرارتی" , cubicMeter, String.valueOf(beforeHeaterSampleModel.getNotIsulationConsumption())));



                }

            }
        }

        if (stationLogic != null) {
            if (stationLogic.getHeaters() != null) {

                Heaters heaters = stationLogic.getHeaters();
                List<Heater> heater = heaters.getHeaters();
                data.add(new Table("اطلاعات گرم کن ", "", ""));
                int temp = 1;
                for (Heater h : heater) {

                    data.add(new Table("گرم کن " + temp, "", ""));
                    data.add(new Table("بازده جذب گرمایی کویل‌ها " + temp, percent, String.valueOf(h.getEfficiency() * 100)));

                    List<Burner> burners = h.getBurners();
                    int temp2 = 1;
                    for (Burner b : burners) {
                        data.add(new Table("دمای دودکش مشعل " + temp2 , CELCIUS, String.valueOf(b.getTstack())));
                        data.add(new Table("درصد اکسیژن مشعل " + temp2, percent, String.valueOf(b.getOxygen())));
                        data.add(new Table("بازده ناخالص (gross) مشعل " + temp2, percent, String.valueOf(b.getEfficiency() * 100)));
                        double tem = b.getConsumption();
                        data.add(new Table("مصرف مشعل " + temp2 , cubicMeter, String.valueOf(b.getConsumption())));

                        temp2++;
                    }
                    temp++;
                }
                data.add(new Table("مصرف گرمکن‌ها" , cubicMeter, String.valueOf(heaters.getConsumption())));
            }
        }

        if (stationLogic != null) {
            if (stationLogic.getAfterHeater() != null) {

//                BasePipe afterHeater = stationLogic.getAfterHeater();
//                data.add(new Table("خط لوله بعد از گرم کن", ""));
//                data.add(new Table("دمای گاز ورودی", String.valueOf(afterHeater.getTin() - 273.15)));
//
//                data.add(new Table("فشار گاز ورودی", String.valueOf(afterHeater.getPin())));
//                data.add(new Table("دمای گاز خروجی", String.valueOf(afterHeater.getTout() - 273.15)));
//                data.add(new Table("فشار گاز خروجی", String.valueOf(afterHeater.getPout())));
//                data.add(new Table("اختلاف دما", String.valueOf(afterHeater.getTin() - 273.15 - afterHeater.getTout() - 273.15)));
//                data.add(new Table("تلفات حرارتی", String.valueOf(afterHeater.getConsumption())));

                if(Station.getInstance().getList().get("afterHeaterPipeLine") !=null) {
                    PipeLine afterHeaterSampleModel = (PipeLine) Station.getInstance().getList().get("afterHeaterPipeLine");
                    data.add(new Table("خط لوله بعد از گرم کن", "", ""));

                    data.add(new Table("دمای گاز ورودی" , CELCIUS, String.valueOf(afterHeaterSampleModel.getTin() - 273.15)));
                    data.add(new Table("فشار گاز ورودی" , PSI, String.valueOf(afterHeaterSampleModel.getPin())));
                    data.add(new Table("دمای گاز خروجی" , CELCIUS, String.valueOf(afterHeaterSampleModel.getTout() - 273.15)));
                    data.add(new Table("فشار گاز خروجی" , PSI, String.valueOf(afterHeaterSampleModel.getPout())));
//                    data.add(new Table("اختلاف دما", String.valueOf(afterHeaterSampleModel.getTin()  - afterHeaterSampleModel.getTout() )));
                    data.add(new Table("تلفات حرارتی با عایق حرارتی" , cubicMeter,  String.valueOf(-1 * afterHeaterSampleModel.getWithInsulationConsumption())));
                    data.add(new Table("تلفات حرارتی بدون عایق حرارتی" , cubicMeter, String.valueOf(-1 * afterHeaterSampleModel.getNotIsulationConsumption())));



                }


            }
        }

        if (stationLogic != null) {
            if (stationLogic.getCollector() != null) {

                BasePipe collector = stationLogic.getCollector();
                data.add(new Table("اطلاعات کلکتور", "", ""));
                data.add(new Table("دمای گاز ورودی" , CELCIUS, String.valueOf(collector.getTin() - 273.15)));

                data.add(new Table( "فشار گاز ورودی" , PSI, String.valueOf(collector.getPin())));
                data.add(new Table("دمای گاز خروجی" , CELCIUS, String.valueOf(collector.getTout() - 273.15)));
                data.add(new Table("فشار گاز خروجی" , PSI, String.valueOf(collector.getPout())));
//                data.add(new Table("اختلاف دما", String.valueOf(collector.getTin() - 273.15 - collector.getTout() - 273.15)));
                data.add(new Table("تلفات حرارتی" , cubicMeter, String.valueOf(-1 * collector.getConsumption())));
            }
        }
        if (stationLogic != null) {
            if (stationLogic.getRuns() != null) {
                data.add(new Table("اطلاعات ران ها", "", ""));

                ir.behinehsazan.gasStation.model.run.Runs runs = stationLogic.getRuns();
                List<BaseRun> run = runs.getRuns();
                int i = 1;
                for (BaseRun r : run) {
                    data.add(new Table("ران " + i, "",""));

                    data.add(new Table("دمای گاز ورودی" , CELCIUS, String.valueOf(r.getTin() - 273.15)));
                    data.add(new Table("فشار گاز ورودی" , PSI, String.valueOf(r.getPin())));
                    data.add(new Table("دمای گاز خروجی" , CELCIUS, String.valueOf(r.getTout() - 273.15)));
                    data.add(new Table("فشار گاز خروجی" , PSI, String.valueOf(r.getPout())));
//                    data.add(new Table("اختلاف دما", String.valueOf(r.getTin() - 273.15 - r.getTout() - 273.15)));
                    data.add(new Table("تلفات حرارتی" , cubicMeter, String.valueOf(-1 * r.getConsumption())));
                    i++;
                }
            }
        }

        if (stationLogic != null) {
            if (stationLogic.getRegulator() != null) {
                Regulator regulator = stationLogic.getRegulator();
                data.add(new Table("رگولاتور", "", ""));
                data.add(new Table("دمای گاز ورودی" , CELCIUS, String.valueOf(regulator.getTin() - 273.15)));
                data.add(new Table("فشار گاز ورودی" , PSI, String.valueOf(regulator.getPin())));
                data.add(new Table("دمای گاز خروجی" , CELCIUS, String.valueOf(regulator.getTout() - 273.15)));
                data.add(new Table("فشار گاز خروجی" , PSI, String.valueOf(regulator.getPout())));
            }
        }


    }

    public static void saveUserTempInputResults() {
        ObservableList<Table> data = ShowResultsController.getData();
        data.clear();
//        ObjectNode json = mapper.createObjectNode();
//        json.put("name", "student");
//
//        ArrayNode array = mapper.createArrayNode();
//        ObjectNode item = mapper.createObjectNode();
//        item.put("information", "test");
//        item.put("id", 3);
//        item.put("name", "course1");
//        array.add(item);
//
//        json.put("course", array);

        StationLogic stationLogic = Station.getInstance().getStationLogic();
        StationPropertice stationPropertice = (StationPropertice) Station.getInstance().getList().get("stationPropertice");
        if (stationPropertice != null) {
            data.add(new Table("استان", "", stationPropertice.getProvince()));
            data.add(new Table("شهر", "", stationPropertice.getCity()));
            data.add(new Table("منطقه", "", stationPropertice.getArea()));
            data.add(new Table("آدرس", "", stationPropertice.getAddress()));
            data.add(new Table("ظرفیت نامی" , cubicMeter, stationPropertice.getNominalCapacity()));


            if(stationPropertice.getEnvironmentTemp()!=null) {
//                stationItems.put("envTemperature", String.valueOf(stationPropertice.getEnvironmentTemp() - 273.15));
                data.add(new Table("دمای محیط" , CELCIUS, String.valueOf(stationPropertice.getEnvironmentTemp() - 273.15)));
            }
//            stationItems.put("windSpeed", String.valueOf(stationPropertice.getWindVelocity()));
//            stationItems.put("stationInputTemperature", String.valueOf(stationPropertice.getInputTemp() - 273.15));
//            stationItems.put("stationInputPressure",String.valueOf(stationPropertice.getInputPressure()));
//            stationItems.put("stationOutputTemperature",String.valueOf(stationPropertice.getOutputTemp() - 273.15));
//            stationItems.put("stationOutputPressure",String.valueOf(stationPropertice.getOutputPressure()));
//            stationItems.put("stationDebi", String.valueOf(stationPropertice.getDebi()));

            data.add(new Table("سرعت باد" , windSpeed, String.valueOf(stationPropertice.getWindVelocity())));
            data.add(new Table("دمای گاز ورودی به ایستگاه" , CELCIUS, String.valueOf(stationPropertice.getInputTemp() - 273.15)));
            data.add(new Table("فشار گاز ورودی به ایستگاه" , PSI, String.valueOf(stationPropertice.getInputPressure())));
            data.add(new Table("دمای گاز خروجی از ایستگاه" , CELCIUS, String.valueOf(stationPropertice.getOutputTemp() - 273.15)));
            data.add(new Table("فشار گاز خروجی از ایستگاه" , PSI, String.valueOf(stationPropertice.getOutputPressure())));
            data.add(new Table("دبی عبوری از ایستگاه"  , cubicMeter, String.valueOf(stationPropertice.getDebi())));
            data.add(new Table("نیتروژن", percent, String.valueOf(stationPropertice.getComponent()[0] * 100)));
            data.add(new Table("دی اکسید کربن", percent, String.valueOf(stationPropertice.getComponent()[1] * 100)));
            data.add(new Table("متان", percent, String.valueOf(stationPropertice.getComponent()[2] * 100)));
            data.add(new Table("اتان", percent, String.valueOf(stationPropertice.getComponent()[3] * 100)));
            data.add(new Table("پروپان", percent, String.valueOf(stationPropertice.getComponent()[4] * 100)));
            data.add(new Table("نرمال بوتان", percent, String.valueOf(stationPropertice.getComponent()[5] * 100)));
            data.add(new Table("ایزو بوتان", percent, String.valueOf(stationPropertice.getComponent()[6] * 100)));
            data.add(new Table("نرمال پنتان", percent, String.valueOf(stationPropertice.getComponent()[7] * 100)));
            data.add(new Table("ایزو پنتان", percent, String.valueOf(stationPropertice.getComponent()[8] * 100)));
            data.add(new Table("هگزان", percent, String.valueOf(stationPropertice.getComponent()[9] * 100)));
            data.add(new Table("هپتان", percent, String.valueOf(stationPropertice.getComponent()[10] * 100)));
            data.add(new Table("اکتان", percent, String.valueOf(stationPropertice.getComponent()[11] * 100)));
            data.add(new Table("نونان", percent, String.valueOf(stationPropertice.getComponent()[12] * 100)));
            data.add(new Table("دکان", percent, String.valueOf(stationPropertice.getComponent()[13] * 100)));
            data.add(new Table("هیدروژن", percent, String.valueOf(stationPropertice.getComponent()[14] * 100)));
            data.add(new Table("اکسیژن", percent, String.valueOf(stationPropertice.getComponent()[15] * 100)));
            data.add(new Table("کربن منواکسید", percent, String.valueOf(stationPropertice.getComponent()[16] * 100)));
            data.add(new Table("آب", percent, String.valueOf(stationPropertice.getComponent()[17] * 100)));
            data.add(new Table("هیدروژن سولفید", percent, String.valueOf(stationPropertice.getComponent()[18] * 100)));
            data.add(new Table("هلیوم", percent, String.valueOf(stationPropertice.getComponent()[19] * 100)));
            data.add(new Table("آرگون", percent, String.valueOf(stationPropertice.getComponent()[20] * 100)));
        }
        if (stationLogic != null) {
            if (stationLogic.getBeforeHeater() != null) {


//                    BasePipe beforeHeater = stationLogic.getBeforeHeater();
//                    data.add(new Table("خط لوله قبل از گرم کن", ""));
//
//                    data.add(new Table("دمای گاز ورودی", String.valueOf(beforeHeater.getTin() - 273.15)));
//                    data.add(new Table("فشار گاز ورودی", String.valueOf(beforeHeater.getPin())));
//                    data.add(new Table("دمای گاز خروجی", String.valueOf(beforeHeater.getTout() - 273.15)));
//                    data.add(new Table("فشار گاز خروجی", String.valueOf(beforeHeater.getPout())));
//                    data.add(new Table("اختلاف دما", String.valueOf(beforeHeater.getTin() - 273.15 - beforeHeater.getTout() - 273.15)));
//                    data.add(new Table("تلفات حرارتی", String.valueOf(beforeHeater.getConsumption())));
                if(Station.getInstance().getList().get("beforeHeaterPipeLine") !=null) {
                    PipeLine beforeHeaterSampleModel = (PipeLine) Station.getInstance().getList().get("beforeHeaterPipeLine");
                    data.add(new Table("خط لوله قبل از گرم کن", "", ""));

                    data.add(new Table("دمای گاز ورودی" , CELCIUS, String.valueOf(beforeHeaterSampleModel.getTin() - 273.15)));
                    data.add(new Table("فشار گاز ورودی" , PSI, String.valueOf(beforeHeaterSampleModel.getPin())));
                    data.add(new Table("دمای گاز خروجی" , CELCIUS, String.valueOf(beforeHeaterSampleModel.getTout() - 273.15)));
                    data.add(new Table("فشار گاز خروجی" , PSI, String.valueOf(beforeHeaterSampleModel.getPout())));
//                    data.add(new Table("اختلاف دما", String.valueOf(beforeHeaterSampleModel.getTin() - 273.15 - beforeHeaterSampleModel.getTout() - 273.15)));
                    data.add(new Table("تلفات حرارتی با عایق حرارتی" , cubicMeter,  String.valueOf(-1 * beforeHeaterSampleModel.getWithInsulationConsumption())));
                    data.add(new Table("تلفات حرارتی بدون عایق حرارتی" , cubicMeter,  String.valueOf(-1 * beforeHeaterSampleModel.getNotIsulationConsumption())));



                }

            }
        }

        if (stationLogic != null) {
            if (stationLogic.getHeaters() != null) {

                Heaters heaters = stationLogic.getHeaters();
                List<Heater> heater = heaters.getHeaters();
                data.add(new Table("اطلاعات گرم کن ", "", ""));
                int temp = 1;
                for (Heater h : heater) {

                    data.add(new Table("گرم کن " + temp, "", ""));
                    data.add(new Table("بازده جذب گرمایی کویل‌ها " , percent, String.valueOf(h.getEfficiency() * 100)));

                    List<Burner> burners = h.getBurners();
                    int temp2 = 1;
                    for (Burner b : burners) {
                        data.add(new Table("دمای دودکش مشعل " + temp2 , CELCIUS, String.valueOf(b.getTstack())));
                        data.add(new Table("درصد اکسیژن مشعل " + temp2 + percent, percent, String.valueOf(b.getOxygen())));
                        data.add(new Table("بازده ناخالص (gross) مشعل " + temp2, percent, String.valueOf(b.getEfficiency() * 100)));
                        double tem = b.getConsumption();
                        data.add(new Table("مصرف مشعل " + temp2 , cubicMeter, String.valueOf(b.getConsumption())));

                        temp2++;
                    }
                    temp++;
                }
                data.add(new Table("مصرف گرمکن‌ها" , cubicMeter, String.valueOf(heaters.getConsumption())));
            }
        }

        if (stationLogic != null) {
            if (stationLogic.getAfterHeater() != null) {

//                BasePipe afterHeater = stationLogic.getAfterHeater();
//                data.add(new Table("خط لوله بعد از گرم کن", ""));
//                data.add(new Table("دمای گاز ورودی", String.valueOf(afterHeater.getTin() - 273.15)));
//
//                data.add(new Table("فشار گاز ورودی", String.valueOf(afterHeater.getPin())));
//                data.add(new Table("دمای گاز خروجی", String.valueOf(afterHeater.getTout() - 273.15)));
//                data.add(new Table("فشار گاز خروجی", String.valueOf(afterHeater.getPout())));
//                data.add(new Table("اختلاف دما", String.valueOf(afterHeater.getTin() - 273.15 - afterHeater.getTout() - 273.15)));
//                data.add(new Table("تلفات حرارتی", String.valueOf(afterHeater.getConsumption())));

                if(Station.getInstance().getList().get("afterHeaterPipeLine") !=null) {
                    PipeLine afterHeaterSampleModel = (PipeLine) Station.getInstance().getList().get("afterHeaterPipeLine");
                    data.add(new Table("خط لوله بعد از گرم کن", "", ""));

                    data.add(new Table("دمای گاز ورودی" , CELCIUS, String.valueOf(afterHeaterSampleModel.getTin() - 273.15)));
                    data.add(new Table("فشار گاز ورودی" , PSI, String.valueOf(afterHeaterSampleModel.getPin())));
                    data.add(new Table("دمای گاز خروجی" , CELCIUS, String.valueOf(afterHeaterSampleModel.getTout() - 273.15)));
                    data.add(new Table("فشار گاز خروجی" , PSI, String.valueOf(afterHeaterSampleModel.getPout())));
//                    data.add(new Table("اختلاف دما", String.valueOf(afterHeaterSampleModel.getTin() - 273.15 - afterHeaterSampleModel.getTout() - 273.15)));
                    data.add(new Table("تلفات حرارتی با عایق حرارتی" , cubicMeter,  String.valueOf(-1 * afterHeaterSampleModel.getWithInsulationConsumption())));
                    data.add(new Table("تلفات حرارتی بدون عایق حرارتی" , cubicMeter,  String.valueOf(-1 * afterHeaterSampleModel.getNotIsulationConsumption())));



                }


            }
        }

        if (stationLogic != null) {
            if (stationLogic.getCollector() != null) {

                BasePipe collector = stationLogic.getCollector();
                data.add(new Table("اطلاعات کلکتور", "", ""));
                data.add(new Table("دمای گاز ورودی" , CELCIUS, String.valueOf(collector.getTin() - 273.15)));
                data.add(new Table("فشار گاز ورودی" , PSI, String.valueOf(collector.getPin())));
                data.add(new Table("دمای گاز خروجی" , CELCIUS, String.valueOf(collector.getTout() - 273.15)));
                data.add(new Table("فشار گاز خروجی" , PSI, String.valueOf(collector.getPout())));
//                data.add(new Table("اختلاف دما", String.valueOf(collector.getTin() - 273.15 - collector.getTout() - 273.15)));
                data.add(new Table("تلفات حرارتی" , cubicMeter, String.valueOf(collector.getConsumption())));
            }
        }
        if (stationLogic != null) {
            if (stationLogic.getRuns() != null) {
                data.add(new Table("اطلاعات ران ها", "", ""));

                ir.behinehsazan.gasStation.model.run.Runs runs = stationLogic.getRuns();
                List<BaseRun> run = runs.getRuns();
                int i = 1;
                for (BaseRun r : run) {
                    data.add(new Table("ران " + i, "",""));


                    data.add(new Table("دمای گاز ورودی " , CELCIUS, String.valueOf(r.getTin() - 273.15)));

                    data.add(new Table("فشار گاز ورودی" , PSI, String.valueOf(r.getPin())));
                    data.add(new Table("دمای گاز خروجی" , CELCIUS, String.valueOf(r.getTout() - 273.15)));
                    data.add(new Table("فشار گاز خروجی" , PSI, String.valueOf(r.getPout())));
//                    data.add(new Table("اختلاف دما", String.valueOf(r.getTin() - 273.15 - r.getTout() - 273.15)));
                    data.add(new Table("تلفات حرارتی" , cubicMeter,  String.valueOf(-1 * r.getConsumption())));
                    i++;
                }
            }
        }

        if (stationLogic != null) {
            if (stationLogic.getRegulator() != null) {
                Regulator regulator = stationLogic.getRegulator();
                data.add(new Table("رگولاتور", "", ""));
                data.add(new Table("دمای گاز ورودی" , CELCIUS, String.valueOf(regulator.getTin() - 273.15)));
                data.add(new Table("فشار گاز ورودی" , PSI, String.valueOf(regulator.getPin())));
                data.add(new Table("دمای گاز خروجی" , CELCIUS, String.valueOf(regulator.getTout() - 273.15)));
                data.add(new Table("فشار گاز خروجی" , PSI, String.valueOf(regulator.getPout())));
            }
        }


    }

    @Override
    public void setOnShow() {

    }

    private ObjectNode removeGasProperty(Gas gas) throws IOException {
        ObjectNode gasNode = (ObjectNode) mapper.readTree(mapper.writeValueAsString(gas));
        gasNode.remove("component");
        gasNode.remove("t");
        gasNode.remove("p");
        return  gasNode;
    }
}
