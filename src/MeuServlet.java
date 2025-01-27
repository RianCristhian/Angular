import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

public class MeuServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("application/json");
        resp.getWriter().write("{\"mensagem\": \"Olá do backend em Java!\"}");
    }
}
