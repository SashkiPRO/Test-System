package sunrise.test.com.dao.implement;

import org.springframework.stereotype.Repository;
import sunrise.test.com.dao.interfaces.UserDao;
import sunrise.test.com.model.User;
@Repository
public class AdminServiceImpl extends HibernateDaoImpl<User,Long>
implements UserDao{
    @Override
    public User getUser(String username) {
        return null;
    }
}
