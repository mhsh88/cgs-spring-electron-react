import createConstants.CreateConstants;
import createController.CreateController;
import createDao.CreateDao;
import createDto.CreateDto;
import createRepository.CreateRepository;
import readFiles.ReadEntityFiles;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class MainGenerator {

    public static void main(String[] args) throws IOException {

        String path = new java.io.File( "." ).getCanonicalPath() + "/spring/src/main/java/com/example/models/station";
        final File folder = new File(path);
        File baseFolder = new File(new java.io.File( "." ).getCanonicalPath() + "/spring/src/main/java/com/example");
        ReadEntityFiles readEntityFiles = new ReadEntityFiles();
//        File foldertemp = new File(new java.io.File( "." ).getCanonicalPath() + "/spring/src/main/java/com/example/models/users");
//        readEntityFiles.listFilesForFolder(foldertemp);
        List<String> fileList = readEntityFiles.listFilesForFolder(folder);


        String destFolder = "station";
        new CreateRepository().createRepository(fileList, baseFolder, destFolder);
        new CreateDto().createDto(fileList, baseFolder, destFolder);
        new CreateDao().createDao(fileList, baseFolder, destFolder);
        new CreateController().createController(fileList, baseFolder, destFolder);
        new CreateConstants().createConstant(fileList, baseFolder, destFolder);
//        new CreateDaoBean().createDaoBean(fileList, baseFolder, destFolder);

//        for( String file : fileList){
//
//            String[] tok = file.split("Entity", 2);
//            String entity = tok[0];
//            System.out.println("String " + CaseFormat.UPPER_CAMEL.to(CaseFormat.UPPER_UNDERSCORE, entity)+"_READ" + " = \"" +
//                    CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, entity) + ".read\";");
//            System.out.println("String " + CaseFormat.UPPER_CAMEL.to(CaseFormat.UPPER_UNDERSCORE, entity)+"_UPDATE" + " = \"" +
//                    CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, entity) + ".update\";");
//            System.out.println("String " + CaseFormat.UPPER_CAMEL.to(CaseFormat.UPPER_UNDERSCORE, entity)+"_CREATE" + " = \"" +
//                    CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, entity) + ".create\";");
//            System.out.println("String " + CaseFormat.UPPER_CAMEL.to(CaseFormat.UPPER_UNDERSCORE, entity)+"_DELETE" + " = \"" +
//                    CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, entity) + ".delete\";\n");
//
//
//        }

    }
}
