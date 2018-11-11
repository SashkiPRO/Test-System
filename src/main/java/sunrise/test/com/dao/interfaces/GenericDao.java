package sunrise.test.com.dao.interfaces;

import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.List;

@Component
public interface GenericDao<E, K extends Serializable> {
    public void add(E entity) ;
    public void saveOrUpdate(E entity) ;
    public void update(E entity) ;
    public void remove(E entity);
    public E find(K key);
    public List<E> getAll() ;

}
