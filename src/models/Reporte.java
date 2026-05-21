package models;

import java.time.LocalDate;

public class Reporte {
    // Atributos
    private final int id_reporte;
    private final IntentoPrueba intentoPrueba;
    private final Pruebas prueba;
    private final Diagnostico diagnostico;
    private final LocalDate fecha_reporte;
    private String interpretacion;

    // Constructor
    public Reporte(
        int id_reporte,
        IntentoPrueba intentoPrueba,
        Pruebas prueba,
        Diagnostico diagnostico,
        String interpretacion
    ) {
        this.id_reporte = id_reporte;
        this.intentoPrueba = intentoPrueba;
        this.prueba = prueba;
        this.diagnostico = diagnostico;
        this.fecha_reporte = LocalDate.now();
        this.interpretacion = interpretacion;
    }

    // Métodos
    public int getId_reporte() { return id_reporte; }
    public IntentoPrueba getIntentoPrueba() { return intentoPrueba; }
    public Pruebas getPrueba() { return prueba; }
    public Diagnostico getDiagnostico() { return diagnostico; }
    public LocalDate getFecha_reporte() { return fecha_reporte; }
    public String getInterpretacion() { return interpretacion; }
    public void setInterpretacion(String interpretacion) { this.interpretacion = interpretacion;

}
}