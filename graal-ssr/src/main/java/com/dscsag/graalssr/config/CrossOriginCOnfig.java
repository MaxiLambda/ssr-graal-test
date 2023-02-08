package com.dscsag.graalssr.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class CrossOriginCOnfig {

    @Bean
    public CorsConfigurationSource corsConfiguration(){
        var config = new CorsConfiguration();
        var src = new UrlBasedCorsConfigurationSource();
        config.setAllowedOrigins(List.of("http://localhost"));
        config.setAllowedMethods(List.of("GET","POST"));
        src.registerCorsConfiguration("/**",config);
        return src;
    }

}
