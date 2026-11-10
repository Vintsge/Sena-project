
package models;

import java.time.LocalDate;

public class User {

    // Atributos
    private final int id;
    private String nombre;
    private final LocalDate fechaNacimiento;
    private String telefono;
    private final LocalDate fechaRegistro;
    private String nivelEducativo;

    // Constructor para usuarios nuevos
    public User(String nombre, LocalDate fechaNacimiento,
                String telefono, String nivelEducativo) {

        this.id = 0; // MySQL asignará el ID
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.fechaRegistro = LocalDate.now();
        this.nivelEducativo = nivelEducativo;
    }

    // Constructor para recuperar usuarios de MySQL
    public User(int id, String nombre, LocalDate fechaNacimiento,
                String telefono, LocalDate fechaRegistro,
                String nivelEducativo) {

        this.id = id;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.fechaRegistro = fechaRegistro;
        this.nivelEducativo = nivelEducativo;
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public LocalDate getFechaRegistro() {
        return fechaRegistro;
    }

    public String getNivelEducativo() {
        return nivelEducativo;
    }

    public void setNivelEducativo(String nivelEducativo) {
        this.nivelEducativo = nivelEducativo;
    }
}
