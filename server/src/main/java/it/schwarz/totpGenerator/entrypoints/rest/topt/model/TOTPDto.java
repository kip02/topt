package it.schwarz.totpGenerator.entrypoints.rest.topt.model;

public class TOTPDto {
    private String code;

    public TOTPDto(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
