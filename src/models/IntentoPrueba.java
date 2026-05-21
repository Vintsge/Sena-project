package models;

import java.time.LocalDate;

public class IntentoPrueba {
    //Atributos
    private final int id_intento;
    private final Pruebas prueba;
    private final User usuario;
    private final int tiempoTomado;
    private final LocalDate fechaIntento;
    private boolean completado;

    //Constructor
    public IntentoPrueba(int id_intento, Pruebas prueba, User usuario, int tiempoTomado, boolean completado) {
        this.id_intento = id_intento;
        this.prueba = prueba;
        this.usuario = usuario;
        this.tiempoTomado = tiempoTomado;
        this.fechaIntento = LocalDate.now();
        this.completado = completado;
    }

    //Metodos
    public int getId_intento() { return id_intento; }
    public Pruebas getPrueba() { return prueba; }
    public User getUsuario() { return usuario; }
    public int getTiempoTomado() { return tiempoTomado; }
    public boolean isCompletado() { return completado; }
    public void setCompletado(boolean completado) { this.completado = completado; }
    public LocalDate getFechaIntento() { return fechaIntento; }
}