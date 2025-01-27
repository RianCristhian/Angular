import org.apache.catalina.startup.Tomcat;

public class Main {
    public static void main(String[] args) throws Exception {
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(8080);
        tomcat.getConnector();

        tomcat.addWebapp("/", new java.io.File("backend/webapp").getAbsolutePath());
        System.out.println("Aplicação rodando em: http://localhost:8080");

        tomcat.start();
        tomcat.getServer().await();
    }
}
