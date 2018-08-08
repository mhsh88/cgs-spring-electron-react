package createDao;

import base.BaseConstants;

import java.io.*;
import java.util.List;

public class CreateDao implements BaseConstants {
    String BaseFolder = "daos";
    String SUFIX = "Dao";


    public void createDao(List<String> fileName, File folder, String folderName) throws FileNotFoundException {
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
            osw.write("package com.example.daos."+folderName+";\n" +
                    "\n" +
                    "import BaseDao;\n" +
                    "import com.example.models."+folderName+"."+entity+"Entity;\n" +
                    "import javax.inject.Singleton;\n" +
                    "import org.springframework.stereotype.Component;\n" +
                    "\n"+
                    "@Singleton\n" +
                    "@Component\n" +
                    "public class "+entity+"Dao extends BaseDao<"+entity+"Entity, Long> {\n" +
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
