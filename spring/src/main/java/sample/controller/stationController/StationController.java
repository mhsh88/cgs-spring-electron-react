//package sample.controller.stationController;
//
//import javafx.application.Platform;
//import javafx.event.ActionEvent;
//import javafx.fxml.FXMLLoader;
//import javafx.fxml.Initializable;
//import javafx.scene.Parent;
//import javafx.scene.Scene;
//import javafx.scene.control.Alert;
//import javafx.scene.control.Button;
//import javafx.scene.control.ButtonBar;
//import javafx.scene.control.ButtonType;
//import javafx.scene.layout.VBox;
//import javafx.stage.FileChooser;
//import javafx.stage.Stage;
//import sample.controller.afterHeater.AfterHeaterFrame;
//import sample.controller.base.BaseController;
//import sample.controller.beforeHeater.BeforeHeaterFrame;
//import sample.controller.calculate.CalculateController;
//import sample.controller.heaterController.HeaterFrame;
//import sample.controller.run.RunFrame;
//import sample.controller.showResults.ShowResultsFrame;
//import sample.controller.stationProperty.StationPropertyController;
//import sample.controller.stationProperty.StationPropertyFrame;
//import sample.model.Station;
//import sample.model.base.BaseModel;
//import sample.util.FileLocation;
//
//import java.io.*;
//import java.net.URL;
//import java.util.HashMap;
//import java.util.Map;
//import java.util.Optional;
//import java.util.ResourceBundle;
//
//public class StationController extends BaseController implements Initializable {
//    public VBox mainVbox;
//    Stage stage;
//    Scene scene;
//    FXMLLoader fxmlLoader;
//    Parent root1;
////    private static final StationController instance = new StationController();
//    StationPropertyController stationPropertyController = new StationPropertyController();
//    BeforeHeaterFrame beforeHeaterFrame = new BeforeHeaterFrame();
//    HeaterFrame heaterFrame = new HeaterFrame();
//    AfterHeaterFrame afterHeaterFrame = new AfterHeaterFrame();
//    RunFrame runFrame = new RunFrame();
//    StationPropertyFrame stationPropertyFrame = new StationPropertyFrame();
//    ShowResultsFrame showResultsFrame = new ShowResultsFrame();
//    CalculateController calculateController = new CalculateController();
//    public Button btn = new Button();
//    public Button btn1 = new Button();
//    public Button heater = new Button();
//    public Button beforeHeaterPipeLine = new Button();
//    public Button pipe1 = new Button();
//    public Button pipe2 = new Button();
//    public Button pipe3 = new Button();
//    public Button leftFourWay = new Button();
//    public Button rightFourWay = new Button();
//    @Override
//    public void initialize(URL location, ResourceBundle resources) {
////    Stage stage = (Stage)mainVbox.getScene().getWindow();
////        mainVbox.prefWidthProperty().bind(stage.widthProperty().multiply(0.80));
//
//    }
//
//    public StationPropertyFrame getStationPropertyFrame() {
//        return stationPropertyFrame;
//    }
//
//
//    public StationController(){
////        btn.getStyleClass().add("icon-button");
////        btn.setPickOnBounds(true);
//    }
////
////    public static StationController getInstance(){
////        return instance;
////    }
//
//
//
//
//    public void sayHelloWorld(ActionEvent actionEvent) {
//    }
//
//    public void changIcon(ActionEvent actionEvent) {
//
//        btn.getStyleClass().add("icon-button");
//        btn.setPickOnBounds(true);
//    }
//
//    public void launchLogingController(Stage stage) throws IOException {
//        this.stage = stage;
//        fxmlLoader = new FXMLLoader(getClass().getResource("/sample/view/station/sample.fxml"));
//        root1 = (Parent) fxmlLoader.load();
////        stage = new Stage();
//        stage.setScene(new Scene(root1, 1000, 700));
//        stage.setTitle("نرم افزار محاسبه مصرف گاز ایستگاه تقلیل فشار گاز");
////        stage.setTitle("User Login");
////        stage.setScene(scene);
////        stage.setResizable(true);
////        stage.hide();
//        mainVbox.prefWidthProperty().bind(stage.widthProperty().multiply(0.80));
//        mainVbox.prefHeightProperty().bind(stage.heightProperty().multiply(0.80));
//        stage.show();
//    }
//
//    public void beforeHeaterWindows(ActionEvent actionEvent) throws IOException {
////        beforeHeaterFrame.close();
//        beforeHeaterFrame.show();
//    }
//    public void heaterWindows(ActionEvent actionEvent) throws  IOException{
////        heaterFrame.close();
//        heaterFrame.show();
//    }
//
//    public void afterWindows(ActionEvent actionEvent) throws IOException {
////        afterHeaterFrame.close();
//        afterHeaterFrame.show();
//    }
//
//    public void runWindows(ActionEvent actionEvent) throws IOException{
////        runFrame.close();
//        runFrame.show();
//    }
//
//    public void stationPropertyWindows(ActionEvent actionEvent) throws IOException {
////        stationPropertyController.show();
//
////        stationPropertyFrame.close();
//        stationPropertyFrame.show();
//
//    }
//
//    public void showResultsWindows(ActionEvent actionEvent) throws IOException {
////        showResultsFrame.close();
//        showResultsFrame.show();
//    }
//
//    public void calculateButton(ActionEvent actionEvent) throws IOException {
//        if(calculateController.calculate()!=null){
//
//        showResultsFrame.show();
//        }
////        calculateButtonFrame.close();
//
//
//
//    }
//
//
//    public void newMenu(ActionEvent actionEvent) throws IOException {
//        if(!Station.getInstance().getList().isEmpty()) {
//            Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
//            alert.setTitle("توجه");
//            alert.setHeaderText("ذخیره سازی اطلاعات");
//            alert.setContentText("آیا مایل به ذخیره سازی هستید؟");
//            ButtonType okButton = new ButtonType("بله", ButtonBar.ButtonData.YES);
//            ButtonType noButton = new ButtonType("خیر", ButtonBar.ButtonData.NO);
//            ButtonType cancelButton = new ButtonType("انصراف", ButtonBar.ButtonData.CANCEL_CLOSE);
////                    ButtonType cancelButton = new ButtonType("خروج", ButtonBar.ButtonData.CANCEL_CLOSE);
//            alert.getButtonTypes().setAll(okButton, noButton, cancelButton);
//            Optional<ButtonType> result = alert.showAndWait();
//            if (result.get() == okButton) {
//                saveMenu(actionEvent);
//
//            } else if (result.get() == cancelButton) {
//                return;
//            } else {
//                Station.getInstance().getList().clear();
//                // ... user chose CANCEL or closed the dialog
//            }
//        }
//        else Station.getInstance().getList().clear();
//
//
//
//    }
//
//    public void saveMenu(ActionEvent actionEvent) throws IOException {
//        FileChooser chooser = new FileChooser();
////        FileChooserBuilder fcb = FileChooserBuilder.create();
////        FileChooser fc = fcb.title("Open Dialog").build();
//        chooser.setTitle("Select File Name To Save");
//
////Set extension filter
//        FileChooser.ExtensionFilter extFilterCGS =
//                new FileChooser.ExtensionFilter("CGS Files", "*.CGS", "*.cgs");
//
//
//        chooser.getExtensionFilters().addAll(extFilterCGS);
//
//        chooser.setInitialDirectory(new FileLocation().getFileLocation());
//
//        chooser.setInitialFileName("New.cgs");
//
//        File file = chooser.showSaveDialog(new Stage());
//        if(file == null){
//            return;
//        }
//        String dir="";
//        if (file.isDirectory())
//        {
//            dir=file.getAbsolutePath();
//        }
//        else
//        {
//            dir=file.getAbsolutePath().replaceAll(file.getName(), "");
//        }
//
//
////        String filePath = file.getAbsolutePath();
////        System.out.println(file.getName());
//
//        if (file != null) {
//
////            String fileName = file.getName();
//            String fileExtension = file.getName().substring(file.getName().indexOf(".") + 1, file.getName().length());
//            if(fileExtension.equals("cgs") || fileExtension.equals("CGS")){
//                Map<String, BaseModel> ldapContent = Station.getInstance().getList();
////                File saveFile = new File(file.get);
//                FileOutputStream f = new FileOutputStream(file);
//                ObjectOutputStream s = null;
//                try {
//                    s = new ObjectOutputStream(f);
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//                try {
//                    s.writeObject(ldapContent);
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//                s.flush();
//
//
//
//            }
//
//            new FileLocation().setFileLocation(dir);
//
//
//
//
//        } else {
//            return;
//        }
//
//
//
//
//    }
//
//    public void openMenu(ActionEvent actionEvent) throws IOException {
//        FileChooser chooser = new FileChooser();
////        FileChooserBuilder fcb = FileChooserBuilder.create();
////        FileChooser fc = fcb.title("Open Dialog").build();
//        chooser.setTitle("Select File To Open");
//
////Set extension filter
//        FileChooser.ExtensionFilter extFilterCGS =
//                new FileChooser.ExtensionFilter("CGS Files", "*.CGS", "*.cgs");
//
//
//        chooser.getExtensionFilters().addAll(extFilterCGS);
//        chooser.setInitialDirectory(new FileLocation().getFileLocation());
//
//        File file = chooser.showOpenDialog(new Stage());
//
//        if(file == null){
//            return;
//        }
//        String dir="";
//        if (file.isDirectory())
//        {
//            dir=file.getAbsolutePath();
//        }
//        else
//        {
//            dir=file.getAbsolutePath().replaceAll(file.getName(), "");
//        }
//
//        if (file != null) {
//
//            String fileName = file.getName();
//            String fileExtension = fileName.substring(fileName.indexOf(".") + 1, file.getName().length());
//            if(fileExtension.equals("cgs") || fileExtension.equals("CGS")) {
//
//                Map<String, BaseModel> ldapContent = new HashMap<String, BaseModel>();
//
//
//                File openFile = new File(file.getAbsolutePath());
//                FileInputStream f = null;
//                try {
//                    f = new FileInputStream(openFile);
//                } catch (FileNotFoundException e) {
//                    e.printStackTrace();
//                }
//                ObjectInputStream s = null;
//                try {
//                    s = new ObjectInputStream(f);
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//                try {
//                    Map<String, BaseModel> map = (HashMap<String, BaseModel>) s.readObject();
//                    System.out.println(map);
//                    Station.getInstance().setList(map);
//
//
//                } catch (IOException e) {
//                    e.printStackTrace();
//                } catch (ClassNotFoundException e) {
//                    e.printStackTrace();
//                }
//                try {
//                    s.close();
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//
//
////                Properties properties = new Properties();
////                try {
////                    properties.load(new FileInputStream(fileName));
////                } catch (IOException e) {
////                    e.printStackTrace();
////                }
////
////                for (String key : properties.stringPropertyNames()) {
////                    ldapContent.put(key, (BaseModel) properties.get(key));
////                }
////                Map<String, BaseModel> map = Station.getInstance().getList();
////                map = ldapContent;
////                System.out.println(map);
//            }
//            new FileLocation().setFileLocation(dir);
//        }
//        else{
//            return;
//        }
//    }
//
//    public void exitMenu(ActionEvent actionEvent) throws IOException {
//        if(!Station.getInstance().getList().isEmpty()) {
//            Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
//            alert.setTitle("توجه");
//            alert.setHeaderText("ذخیره سازی اطلاعات");
//            alert.setContentText("آیا مایل به ذخیره سازی هستید؟");
//            ButtonType okButton = new ButtonType("بله", ButtonBar.ButtonData.YES);
//            ButtonType noButton = new ButtonType("خیر", ButtonBar.ButtonData.NO);
//            ButtonType cancelButton = new ButtonType("انصراف", ButtonBar.ButtonData.CANCEL_CLOSE);
////                    ButtonType cancelButton = new ButtonType("خروج", ButtonBar.ButtonData.CANCEL_CLOSE);
//            alert.getButtonTypes().setAll(okButton, noButton, cancelButton);
//            Optional<ButtonType> result = alert.showAndWait();
//            if (result.get() == okButton) {
//                saveMenu(actionEvent);
//
//            } else if (result.get() == cancelButton) {
//                return;
//            } else {
//                Platform.exit();
//                // ... user chose CANCEL or closed the dialog
//            }
//        }
//        else{
//
//            Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
//            alert.setTitle("توجه");
//            alert.setHeaderText("اطمینان از خروج");
//            alert.setContentText("آیا برای خارج شدن از برنامه اطمینان دارید؟");
//            ButtonType okButton = new ButtonType("بله", ButtonBar.ButtonData.YES);
//            ButtonType noButton = new ButtonType("خیر", ButtonBar.ButtonData.NO);
////                    ButtonType cancelButton = new ButtonType("خروج", ButtonBar.ButtonData.CANCEL_CLOSE);
//            alert.getButtonTypes().setAll(okButton, noButton);
//            Optional<ButtonType> result = alert.showAndWait();
//            if (result.get() == okButton) {
//
//                Platform.exit();
//
//            }  else {
//
//                return;
//
//                // ... user chose CANCEL or closed the dialog
//            }
//
//
//
//        }
//
//    }
//
//    @Override
//    public void setOnShow() {
//
//    }
//
//    public void saveAsMenu(ActionEvent actionEvent) throws IOException {
//        saveMenu(actionEvent);
//    }
//
//
//
//}
//
//
