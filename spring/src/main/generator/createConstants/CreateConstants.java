package createConstants;

import base.BaseConstants;
import com.google.common.base.CaseFormat;

import java.io.*;
import java.util.List;

public class CreateConstants implements BaseConstants {
    String BaseFolder = "constants";
    String SUFIX = "Constants";


    public void createConstant(List<String> fileName, File folder, String folderName) throws FileNotFoundException {
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
            osw.write("package com.example.constants."+folderName+";\n" +
                    "\n" +
                    "import com.hosSein.core.constant.BaseConstants;\n" +
                    "\n" +
                    "public interface "+entity+"Constants extends BaseConstants {\n" +
                    "\n" +
                    "    String ENTITY = \""+CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, entity)+"\";\n" +
                    "\n" +
                    "\n" +
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
