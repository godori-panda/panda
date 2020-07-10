package com.godori.panda.api.domain.test;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class testController {

    @GetMapping("/api/test")
    public String test() {
        log.info("테스트 ~~~");
        return "하이 만수르 나는 다이애나 ~";
    }
}
