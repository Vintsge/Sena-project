package models;

import java.time.LocalDate;

import models.Enums.Severidad;

public class Diagnostico {
    //Atributos
    private final int id_diagnostico;
    private final Enfermedad enfermedad;
    private Severidad severidad;
    private final  LocalDate fecha_diagnostico;
    private String recomendaciones_personalizadas;

    //Constructor
    public Diagnostico(int id_diagnostico, Enfermedad enfermedad, Severidad severidad, String recomendaciones_personalizadas){
        this.id_diagnostico = id_diagnostico;
        this.enfermedad = enfermedad;
        this.severidad = severidad;
        this.fecha_diagnostico = LocalDate.now();
        this.recomendaciones_personalizadas = recomendaciones_personalizadas;
    }

    //Metodos
    public int getId_diagnostico () {return id_diagnostico;}
    public Enfermedad getEnfermedad () {return enfermedad;}
    public Severidad getSeveridad () {return severidad;}
    public void setSeveridad (Severidad severidad) {this.severidad = severidad;}
    public LocalDate getFecha_diagnostico () {return fecha_diagnostico;}
    public String getRecomendaciones_personalizadas () {return recomendaciones_personalizadas;}
    public void setRecomendaciones_personalizadas (String recomendaciones_personalizadas) {this.recomendaciones_personalizadas = recomendaciones_personalizadas;}
}
