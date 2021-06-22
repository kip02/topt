package it.schwarz.totpGenerator.core.entity;

public class TOTP {
    private String code;

    public TOTP(String code) {
        this.code = code;
    }
    
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
