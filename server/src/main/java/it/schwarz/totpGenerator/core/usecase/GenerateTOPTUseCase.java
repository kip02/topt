package it.schwarz.totpGenerator.core.usecase;

import it.schwarz.totpGenerator.core.entity.TOTP;
import it.schwarz.totpGenerator.core.usecase.dataprovider.ITOTPDataProvider;

public class GenerateTOPTUseCase {
    private final ITOTPDataProvider ITOTPDataProvider;

    public GenerateTOPTUseCase(ITOTPDataProvider ITOTPDataProvider) {
        this.ITOTPDataProvider = ITOTPDataProvider;
    }

    public TOTP generate() {
        return ITOTPDataProvider.generateCode();
    }

}
