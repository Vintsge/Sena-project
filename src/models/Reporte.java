package models;

import java.time.LocalDate;

public class Reporte {

    // Atributos
    private final int id_reporte;
    private final IntentoPrueba intentoPrueba;
    private final Diagnostico diagnostico;
    private final LocalDate fecha_generacion;
    private String interpretacion;
    private String alerta;

    // Constructor
    public Reporte(
        int id_reporte,
        IntentoPrueba intentoPrueba,
        Diagnostico diagnostico,
        String interpretacion,
        String alerta
    ) {
        this.id_reporte = id_reporte;
        this.intentoPrueba = intentoPrueba;
        this.diagnostico = diagnostico;
        this.fecha_generacion = LocalDate.now();
        this.interpretacion = interpretacion;
        this.alerta = alerta;
    }

    // Métodos
    public int getId_reporte() { return id_reporte; }
    public IntentoPrueba getIntentoPrueba() { return intentoPrueba; }
    public Diagnostico getDiagnostico() { return diagnostico; }
    public LocalDate getFecha_generacion() { return fecha_generacion; }
    public String getInterpretacion() { return interpretacion; }
    public void setInterpretacion(String interpretacion) { this.interpretacion = interpretacion; }
    public String getAlerta() { return alerta; }
    public void setAlerta(String alerta) { this.alerta = alerta; }

}
