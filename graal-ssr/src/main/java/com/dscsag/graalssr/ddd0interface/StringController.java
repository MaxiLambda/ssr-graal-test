package com.dscsag.graalssr.ddd0interface;


import lombok.extern.java.Log;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log
@CrossOrigin
public class StringController {

    @CrossOrigin
    @GetMapping("/string/nice")
    public String getNiceString(){
        return "Nice";
    }

    @GetMapping("/string/nice/{count}")
    public String getNiceStringTimesX(@PathVariable int count){
        return "Nice".repeat(count);
    }
}
