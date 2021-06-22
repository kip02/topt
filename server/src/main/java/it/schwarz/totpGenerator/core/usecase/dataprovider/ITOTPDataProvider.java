package it.schwarz.totpGenerator.core.usecase.dataprovider;

import it.schwarz.totpGenerator.core.entity.TOTP;

public interface ITOTPDataProvider {
    TOTP generateCode();
}
