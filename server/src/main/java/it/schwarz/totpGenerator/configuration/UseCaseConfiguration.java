package it.schwarz.totpGenerator.configuration;

import it.schwarz.totpGenerator.core.usecase.*;
import it.schwarz.totpGenerator.core.usecase.dataprovider.ITOTPDataProvider;
import org.springframework.context.annotation.*;

@Configuration
public class UseCaseConfiguration {
    @Bean
    public GenerateTOPTUseCase generateTOPTUseCase(ITOTPDataProvider totpDataProvider) {
        return new GenerateTOPTUseCase(totpDataProvider);
    }
 }
