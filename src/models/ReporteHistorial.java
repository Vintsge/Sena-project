package models;

public class ReporteHistorial {
    // Atributos
    private final int id_reporte;
    private final int id_reporte_Anterior;
    private final int id_reporte_Actual;

    private final int delta_puntaje;
    private final int delta_severidad;
    private final int delta_subsets;

    // Constructor (cálculo automático)
    public ReporteHistorial(
        int id_reporte,
        int id_reporte_Anterior,
        int id_reporte_Actual,
        int puntajeAnterior,
        int puntajeActual,
        int severidadAnterior,
        int severidadActual,
        int subsetsAnterior,
        int subsetsActual
    ) {
        this.id_reporte = id_reporte;
        this.id_reporte_Anterior = id_reporte_Anterior;
        this.id_reporte_Actual = id_reporte_Actual;

        this.delta_puntaje = puntajeActual - puntajeAnterior;
        this.delta_severidad = severidadActual - severidadAnterior;
        this.delta_subsets = subsetsActual - subsetsAnterior;
    }

    // Métodos (solo lectura)
    public int getId_reporte() { return id_reporte; }
    public int getId_reporte_Anterior() { return id_reporte_Anterior; }
    public int getId_reporte_Actual() { return id_reporte_Actual; }

    public int getDelta_puntaje() { return delta_puntaje; }
    public int getDelta_severidad() { return delta_severidad; }
    public int getDelta_subsets() { return delta_subsets; }
}
