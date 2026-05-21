package models;
import models.Enums.Tipo_pregunta;
public class Pregunta {
    // Atributos
    private final int id_pregunta;
    private final Pruebas prueba;
    private String texto_pregunta;
    private Tipo_pregunta tipo_pregunta; // "texto", "multiple", "audio"
    private double valor_pregunta;
    //guarda información adicional de la pregunta que puede variar según el tipo de pregunta.
    //Piensa en él como una “bolsa flexible” donde guardas parámetros que no vale la pena convertir en columnas individuales.
    private String meta; 

    // Constructor
    public Pregunta(int id_pregunta, Pruebas prueba, String texto_pregunta, Tipo_pregunta tipo_pregunta, double valor_pregunta, String meta) {
        this.id_pregunta = id_pregunta;
        this.prueba = prueba;
        this.texto_pregunta = texto_pregunta;
        this.tipo_pregunta = tipo_pregunta;
        this.valor_pregunta = valor_pregunta;
        this.meta = meta;
    }
    // Métodos
    public int getId_pregunta() { return id_pregunta; }
    public Pruebas getPrueba() { return prueba; }
    public String getTexto_pregunta() { return texto_pregunta; }
    public void setTexto_pregunta(String texto_pregunta) { this.texto_pregunta = texto_pregunta;}
    public Tipo_pregunta getTipo_pregunta() { return tipo_pregunta;}
    public void setTipo_pregunta(Tipo_pregunta tipo_pregunta) { this.tipo_pregunta = tipo_pregunta;}
    public double getValor_pregunta() { return valor_pregunta; }
    public void setValor_pregunta(double valor_pregunta) { this.valor_pregunta = valor_pregunta;}
    public String getMeta() { return meta; }
    public void setMeta(String meta) { this.meta = meta; }
}
