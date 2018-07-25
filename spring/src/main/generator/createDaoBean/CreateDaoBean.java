package createDaoBean;

import base.BaseConstants;
import com.google.common.base.CaseFormat;

import java.io.*;
import java.util.List;

public class CreateDaoBean implements BaseConstants {
    String BaseFolder = "daos";
    String SUFIX = "Dao";


    public void createDaoBean(List<String> files, File folder, String folderName) throws IOException {
        String destination = new java.io.File( "." ).getCanonicalPath() + "/src/main/java/config";
        String fileName = "NewAppConfig";
        File directory = new File(destination+SLASH+fileName+DOT+JAVA);
        if(directory.exists()) {
            directory.delete();
        }
        String subText = "";
        for(String file : files){
            String[] tok = file.split("Entity", 2);
            String entity = tok[0];
            subText = subText +"    @Bean\n" +
                    "    public "+entity+"Dao "+CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, entity)+"Dao() {\n" +
                    "        return new "+entity+"Dao();\n" +
                    "    }\n";
        }
        String text = "package config;\n" +
                "\n" +
                "import daos."+folderName+".*;\n" +
                "import org.springframework.context.annotation.Bean;\n" +
                "import org.springframework.context.annotation.Configuration;\n" +
                "import org.springframework.context.annotation.Lazy;\n" +
                "import org.springframework.context.annotation.Primary;\n" +
                "@Lazy\n" +
                "@Configuration\n" +
                "public class "+fileName+" {\n" +
                subText
                +

                "}";
        try {
            File fout =directory;
            FileOutputStream fos = new FileOutputStream(fout);
            OutputStreamWriter osw = new OutputStreamWriter(fos);
            osw.write(text);
            osw.close();
        } catch (FileNotFoundException e) {
            // File not found
            e.printStackTrace();
        } catch (IOException e) {
            // Error when writing to the file
            e.printStackTrace();
        }
    }


    public void createDaoBeans(List<String> fileName, File folder, String folderName) throws FileNotFoundException {
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
            osw.write("package daos."+folderName+";\n" +
                    "\n" +
                    "import com.payAm.core.ebean.BaseDao;\n" +
                    "import models."+folderName+"."+entity+"Entity;\n" +
                    "import javax.inject.Singleton;\n" +
                    "\n"+
                    "@Singleton\n" +
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
