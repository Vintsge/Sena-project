package models;

public class RespuestaUser {
    // Atributos
    private final int id_respuestaUser;
    private final IntentoPrueba intentoPrueba;
    private final Pregunta pregunta;
    private String respuesta_texto;
    private int respuesta_multiple;
    private String respuesta_audio;
    private final double tiempo_usado;
    private final double puntaje_obtenido;
    private final boolean es_correcta;

    // Constructor
    public RespuestaUser(
        int id_respuestaUser,
        IntentoPrueba intentoPrueba,
        Pregunta pregunta,
        String respuesta_texto,
        int respuesta_multiple,
        String respuesta_audio,
        double tiempo_usado,
        double puntaje_obtenido,
        boolean es_correcta
    ) {
        this.id_respuestaUser = id_respuestaUser;
        this.intentoPrueba = intentoPrueba;
        this.pregunta = pregunta;
        this.respuesta_texto = respuesta_texto;
        this.respuesta_multiple = respuesta_multiple;
        this.respuesta_audio = respuesta_audio;
        this.tiempo_usado = tiempo_usado;
        this.puntaje_obtenido = puntaje_obtenido;
        this.es_correcta = es_correcta;
    }

    // Métodos
    public int getId_respuestaUser() { return id_respuestaUser; }
    public IntentoPrueba getIntentoPrueba() { return intentoPrueba; }
    public Pregunta getPregunta() { return pregunta; }
    public String getRespuesta_texto() { return respuesta_texto; }
    public void setRespuesta_texto(String respuesta_texto) { this.respuesta_texto = respuesta_texto;}
    public int getRespuesta_multiple() { return respuesta_multiple; }
    public void setRespuesta_multiple(int respuesta_multiple) { this.respuesta_multiple = respuesta_multiple;}
    public String getRespuesta_audio() { return respuesta_audio; }
    public void setRespuesta_audio(String respuesta_audio) { this.respuesta_audio = respuesta_audio;}
    public double getTiempo_usado() { return tiempo_usado; }
    public double getPuntaje_obtenido() { return puntaje_obtenido;}
    public boolean isEs_correcta() { return es_correcta; }
    }
