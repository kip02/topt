package it.schwarz.totpGenerator.dataproviders;

public class TOTPDataModel {
    private String code;

    public TOTPDataModel(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
