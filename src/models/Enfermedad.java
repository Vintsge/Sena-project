package models;

import java.time.LocalDate;

public class Enfermedad {
    //Atributos
    private final int id_enfermedad;
    private String nombre;
    private String descripcion;
    private String Categoria_enfermedad;
    private String recomendaciones_generales;
    private final LocalDate fecha_registro;

    //Constructor
    public Enfermedad(int id_enfermedad, String nombre, String descripcion, String Categoria_enfermedad, String recomendaciones_generales){
        this.id_enfermedad = id_enfermedad;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha_registro = LocalDate.now();
        this.Categoria_enfermedad = Categoria_enfermedad;
        this.recomendaciones_generales = recomendaciones_generales;
    }

    //Metodos
    public int getId_enfermedad () {return id_enfermedad;}
    public String getNombre () {return nombre;}
    public void setNombre (String nombre) {this.nombre = nombre;}
    public String getDescripcion () {return descripcion;}
    public void setDescripcion (String descripcion) {this.descripcion = descripcion;}
    public String getCategoria_enfermedad () {return Categoria_enfermedad;}
    public void setCategoria_enfermedad (String categoria_enfermedad) {Categoria_enfermedad = categoria_enfermedad;}
    public String getRecomendaciones_generales () {return recomendaciones_generales;}
    public void setRecomendaciones_generales (String recomendaciones_generales) {this.recomendaciones_generales = recomendaciones_generales;}
    public LocalDate getFecha_registro () {return fecha_registro;}
}
