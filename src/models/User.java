package models;

import java.time.LocalDate;

public class User {
    // Atributos
    private final int id;
    private String nombre;
    private int edad;
    private String telefono;
    private final LocalDate fechaRegistro;

    // Constructor
    public User(String nombre, int edad, String telefono, int id) {
        this.nombre = nombre;
        this.edad = edad;
        this.fechaRegistro = LocalDate.now();
        this.id = id;
        this.telefono = telefono;
    }

    // Metodos get y set
    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
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
}
