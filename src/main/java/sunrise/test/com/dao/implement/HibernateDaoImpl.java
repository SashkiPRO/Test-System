package sunrise.test.com.dao.implement;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import sunrise.test.com.dao.interfaces.GenericDao;
import sunrise.test.com.model.EntityModel;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

@SuppressWarnings("unchecked")
@Repository
public abstract class HibernateDaoImpl<E, K extends Serializable>
        implements GenericDao<E, K>{
    @Autowired
    private SessionFactory sessionFactory;

    protected Class<? extends E> daoType;

    protected Session getSession() {
    		return this.sessionFactory.getCurrentSession();
    	}

    public HibernateDaoImpl() {
        Type t = getClass().getGenericSuperclass();
        ParameterizedType pt = (ParameterizedType) t;
        daoType = (Class) pt.getActualTypeArguments()[0];
    }
    protected Session currentSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void add(E entity) {
        currentSession().save(entity);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void saveOrUpdate(E entity) {
        currentSession().saveOrUpdate(entity);
    }

    @Override
        @Transactional(propagation = Propagation.REQUIRED)
    public void update(E entity) {
        currentSession().saveOrUpdate(entity);
    }

    @Override
        @Transactional(propagation = Propagation.REQUIRED)
    public void remove(E entity) {
        currentSession().delete(entity);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public E find(K key) {
        return (E) currentSession().get(daoType, key);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<E> getAll() {
        return currentSession().createCriteria(daoType).list();
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

}
