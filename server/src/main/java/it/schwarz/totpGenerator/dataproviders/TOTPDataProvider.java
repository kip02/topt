package it.schwarz.totpGenerator.dataproviders;

import dev.turingcomplete.kotlinonetimepassword.HmacAlgorithm;
import dev.turingcomplete.kotlinonetimepassword.TimeBasedOneTimePasswordConfig;
import dev.turingcomplete.kotlinonetimepassword.TimeBasedOneTimePasswordGenerator;
import it.schwarz.totpGenerator.core.entity.TOTP;
import it.schwarz.totpGenerator.core.usecase.dataprovider.ITOTPDataProvider;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class TOTPDataProvider implements ITOTPDataProvider {

    private final String SHARED_SECRET = "SHARED_SECRET_1234567";

    public TOTP generateCode() {
        TimeBasedOneTimePasswordConfig config = new TimeBasedOneTimePasswordConfig(30, TimeUnit.SECONDS,8, HmacAlgorithm.SHA1);
        TimeBasedOneTimePasswordGenerator timeBasedOneTimePasswordGenerator = new TimeBasedOneTimePasswordGenerator(SHARED_SECRET.getBytes(), config);
        return new TOTP(timeBasedOneTimePasswordGenerator.generate(System.currentTimeMillis()));
    }
}
