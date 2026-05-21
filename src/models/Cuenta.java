package models;

import static models.Enums.EstadoCuenta;
import static models.Enums.MetodoRegistro;

import java.time.LocalDate;

public class Cuenta {

    // Atributos
    private final int id_cuenta;
    private final User usuario;
    private MetodoRegistro metodoRegistro;
    private final LocalDate fechaCreacion;
    private EstadoCuenta estado;
    private String contra;
    private String correo;

    // Constructor
    public Cuenta(int id_cuenta, User usuario, MetodoRegistro metodoRegistro, EstadoCuenta estado, String contra, String correo) {
        this.id_cuenta = id_cuenta;
        this.usuario = usuario;
        this.metodoRegistro = metodoRegistro;
        this.estado = estado;
        setContra(contra);   // aplica validación
        setCorreo(correo);   // aplica validación
        this.fechaCreacion = LocalDate.now();
    }

    // Métodos
    public int getId_cuenta() {
        return id_cuenta;
    }

    public User getUsuario() {
        return usuario;
    }

    public MetodoRegistro getMetodoRegistro() {
        return metodoRegistro;
    }

    public void setMetodoRegistro(MetodoRegistro metodoRegistro) {
        this.metodoRegistro = metodoRegistro;
    }

    public EstadoCuenta getEstado() {
        return estado;
    }

    public void setEstado(EstadoCuenta estado) {
        this.estado = estado;
    }

    public String getContra() {
        return contra;
    }

    public void setContra(String contra) {
        if (contra != null && contra.length() >= 8) {
            this.contra = contra;
        } else {
            throw new IllegalArgumentException("La contraseña debe tener al menos 8 caracteres.");
        }
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        if (correo != null && correo.contains("@")) {
            this.correo = correo;
        } else {
            throw new IllegalArgumentException("Correo inválido. Debe contener '@'.");
        }
    }

    public LocalDate getFechaCreacion() {
        return fechaCreacion;
}
    }