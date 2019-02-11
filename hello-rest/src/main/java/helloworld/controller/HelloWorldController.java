package helloworld.controller;

import helloworld.model.Person;
import helloworld.model.Result;
import org.springframework.web.bind.annotation.*;


@RestController
public class HelloWorldController {

    @RequestMapping("/getHelloWorld")
    @CrossOrigin(origins = "http://localhost:4200")
    public Result getHelloWorld(@RequestBody Person person)
    {
        System.out.println("Name "+person.name);
        return new Result(person.name+" Hello world!");
    }

}
