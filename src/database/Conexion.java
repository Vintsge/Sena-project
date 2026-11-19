
package database;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Conexion {

    public static Connection conectar() {

        Properties propiedades = new Properties();

        try {
            propiedades.load(new FileInputStream(".env"));

            String url = propiedades.getProperty("DB_URL");
            String usuario = propiedades.getProperty("DB_USER");
            String contrasena = propiedades.getProperty("DB_PASSWORD");

            Connection conexion = DriverManager.getConnection(url, usuario, contrasena);

            System.out.println("Conexion exitosa a MySQL");

            return conexion;

        } catch (IOException | SQLException e) {

            System.out.println("Error al conectar: " + e.getMessage());

            return null;
        }
    }
}
