package sunrise.test.com.dao.interfaces;

import sunrise.test.com.model.User;

public interface UserDao extends GenericDao<User,Long> {
    public User getUser(String username);

}
