package models;

import models.Enums.Categoria;

public class Pruebas {
        //Atributos
    private final int id_prueba;
    private String descripcion;
    private String nombrePrueba ;
    private String nivelDificultad;
    private int tiempoLimite;
    private String instrucciones;
    private Categoria categoria;

    //Constructor
    public Pruebas(int id_prueba, String descripcion, String nombrePrueba , String nivelDificultad, String instrucciones, Categoria categoria, int tiempoLimite){
        this.id_prueba = id_prueba;
        this.descripcion = descripcion;
        this.nombrePrueba = nombrePrueba;
        this.nivelDificultad = nivelDificultad;
        this.tiempoLimite = tiempoLimite;
        this.instrucciones = instrucciones;
        this.categoria = categoria;
    }

    //Metodos
    public int getId_prueba () {return id_prueba;}
    public String getDescripcion () {return descripcion;}
    public void setDescripcion (String descripcion) {this.descripcion = descripcion;}
    public String getNombrePrueba () {return nombrePrueba;}
    public void setNombrePrueba(String nombrePrueba) {this.nombrePrueba = nombrePrueba;}
    public String getNivelDificultad (){return nivelDificultad;}
    public void setNivelDificultad (String nivelDificultad) {this.nivelDificultad = nivelDificultad;}
    public int getTiempoLimite () {return tiempoLimite;}
    public void setTiempoLimite (int tiempoLimite) {this.tiempoLimite = tiempoLimite;}
    public String getInstrucciones () {return instrucciones;}
    public void setInstrucciones (String instrucciones) {this.instrucciones = instrucciones;}
    public Categoria getCategoria () {return categoria;}
    public void setCategoria (Categoria categoria) {this.categoria = categoria;}
}
