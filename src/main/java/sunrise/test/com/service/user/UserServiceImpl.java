package sunrise.test.com.service.user;

import org.springframework.stereotype.Service;
import sunrise.test.com.model.User;
import sunrise.test.com.service.GenericServiceImpl;

@Service
public class UserServiceImpl extends GenericServiceImpl<User,Long> implements UserService {
}
