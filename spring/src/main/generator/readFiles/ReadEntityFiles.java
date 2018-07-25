package readFiles;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class ReadEntityFiles {
    List<String> fileList = new ArrayList<>();

public void readFromFolder(String path) throws IOException {
    try (Stream<Path> paths = Files.walk(Paths.get(path))) {
        paths
                .filter(Files::isRegularFile)
                .forEach(System.out::println);
    }
}

    public List<String> listFilesForFolder(final File folder) {
        for (final File fileEntry : folder.listFiles()) {
            if (fileEntry.isDirectory()) {
                listFilesForFolder(fileEntry);
            } else {
                fileList.add(fileEntry.getName());
            }
        }
        return fileList;
    }
}
