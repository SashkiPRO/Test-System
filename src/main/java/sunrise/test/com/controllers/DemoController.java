package sunrise.test.com.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import sunrise.test.com.dao.interfaces.GenericDao;
import sunrise.test.com.dao.interfaces.UserDao;
import sunrise.test.com.model.User;
import sunrise.test.com.service.user.UserService;

import java.util.List;

@Controller
public class DemoController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/test")
    public @ResponseBody List<User> getStr(Model model){
        return userService.getAll();
    }

    @PostMapping(path = "/user")
    public @ResponseBody void createOrdUpdateUser(@RequestBody User user){
        userService.add(user);
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
