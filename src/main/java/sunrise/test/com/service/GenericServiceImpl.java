package sunrise.test.com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sunrise.test.com.dao.interfaces.GenericDao;

import java.io.Serializable;
import java.util.List;

@Service
public abstract class GenericServiceImpl <E, K extends Serializable>
        implements GenericService<E, K >{
    @Autowired
    private GenericDao<E, K> genericDao;

    @Override
    public void add(E entity) {
        genericDao.add(entity);
    }

    @Override
    public void saveOrUpdate(E entity) {
        genericDao.saveOrUpdate(entity);
    }

    @Override
    public void update(E entity) {
        genericDao.saveOrUpdate(entity);
    }

    @Override
    public void remove(E entity) {
genericDao.remove(entity);
    }

    @Override
    public E find(K key) {
        return genericDao.find(key);
    }

    @Override
    public List<E> getAll() {
        return genericDao.getAll();
    }

    public void setGenericDao(GenericDao<E, K> genericDao) {
        this.genericDao = genericDao;
    }
}
