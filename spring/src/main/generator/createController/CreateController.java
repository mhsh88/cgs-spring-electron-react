package createController;

import base.BaseConstants;

import java.io.*;
import java.util.List;

public class CreateController implements BaseConstants {
    String BaseFolder = "controllers";
    String SUFIX = "Controller";


    public void createController(List<String> fileName, File folder, String folderName) throws FileNotFoundException {
        for (String file : fileName) {
            createFilesInFolder(file, folder, folderName);
        }
    }

    private void createFilesInFolder(String file, File folder, String folderName) throws FileNotFoundException {
        String[] tok = file.split("Entity", 2);
        String entity = tok[0];
        try {
            File directory = new File(folder.getAbsolutePath()+SLASH+ BaseFolder+ SLASH + folderName + SLASH );
            if(!directory.exists()) {
                directory.mkdir();
            }
            else{
                directory.delete();
                directory.mkdir();
            }
            File fout = new File(folder.getAbsolutePath()+SLASH+ BaseFolder+ SLASH + folderName + SLASH + entity + SUFIX + DOT + JAVA);
            FileOutputStream fos = new FileOutputStream(fout);
            OutputStreamWriter osw = new OutputStreamWriter(fos);
            osw.write("package com.example.controllers."+folderName+";\n" +
                    "\n" +
                    "import com.hosSein.core.ebean.BaseController;\n" +
                    "import com.hosSein.core.ebean.BaseDao;\n" +
                    "import com.example.daos."+folderName+"."+entity+"Dao;\n" +
                    "import com.example.repositories."+folderName+"."+entity+"Repository;\n" +
                    "import com.example.dtos."+folderName+"."+entity+"View;\n" +
                    "import com.example.models."+folderName+"."+entity+"Entity;\n" +
                    "import org.springframework.beans.factory.annotation.Autowired;\n" +
                    "import org.springframework.web.bind.annotation.*;\n" +
                    "\n" +
                    "import javax.inject.Inject;\n" +
                    "\n" +
                    "@RestController\n" +
                    "@RequestMapping(\"/u/new"+entity.toLowerCase()+"s\")\n" +
                    "public class New"+entity+"Controller extends BaseController<"+entity+"Entity, Long, "+entity+"View>{\n" +
                    "    @Autowired\n" +
                    "    public New"+entity+"Controller("+entity+"Repository repo) {\n" +
                    "        super(repo);\n" +
                    "    }\n" +
                    "\n" +
                    "\n" +
                    "    @Inject\n" +
                    "    private "+entity+"Dao dao;\n" +
                    "\n" +
                    "    @Override\n" +
                    "    public BaseDao<"+entity+"Entity,Long> getDao() {\n" +
                    "        return dao;\n" +
                    "    }\n" +
                    "}");
            osw.close();
        } catch (FileNotFoundException e) {
            // File not found
            e.printStackTrace();
        } catch (IOException e) {
            // Error when writing to the file
            e.printStackTrace();
        }
    }

}
