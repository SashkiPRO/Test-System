package sunrise.test.com.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import sunrise.test.com.dao.interfaces.GenericDao;
import sunrise.test.com.dao.interfaces.UserDao;
import sunrise.test.com.model.User;

import java.util.List;

@Controller
public class DemoController {

    @Autowired
    private UserDao userDao;

    @GetMapping(path = "/test")
    public @ResponseBody List<User> getStr(Model model){
        return userDao.getAll();
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
}
