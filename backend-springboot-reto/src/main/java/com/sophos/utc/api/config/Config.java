package com.sophos.utc.api.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;



public class Config {

    public Config(){
        
    }

    @Bean
    public ModelMapper modelMapper(){

        return new ModelMapper();
        
    }
  
    
}
