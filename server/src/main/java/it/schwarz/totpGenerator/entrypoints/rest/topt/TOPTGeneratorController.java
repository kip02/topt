package it.schwarz.totpGenerator.entrypoints.rest.topt;

import it.schwarz.totpGenerator.core.entity.TOTP;
import it.schwarz.totpGenerator.core.usecase.*;
import it.schwarz.totpGenerator.entrypoints.rest.topt.model.TOTPDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/totp")
public class TOPTGeneratorController {
    private final GenerateTOPTUseCase generateTOPTUseCase;

    public TOPTGeneratorController(GenerateTOPTUseCase generateTOPTUseCase) {
        this.generateTOPTUseCase = generateTOPTUseCase;
    }

    @GetMapping("")
    public TOTPDto generateTOPT() {
        return toDto(generateTOPTUseCase.generate());
    }

    private TOTPDto toDto(TOTP totp) {
        return new TOTPDto(totp.getCode());
    }
}
