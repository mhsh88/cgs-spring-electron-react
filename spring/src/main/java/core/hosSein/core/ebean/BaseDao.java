package core.hosSein.core.ebean;


import com.google.common.base.CaseFormat;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Constant;
import com.querydsl.core.types.Ops;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.PathBuilder;
import com.querydsl.core.types.dsl.SimplePath;
import com.querydsl.jpa.JPAQueryBase;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQuery;
import core.hosSein.core.dto.FilterDto;
import core.hosSein.core.dto.PageDto;
import core.hosSein.core.i18n.CoreMessagesCodes;
import core.hosSein.core.model.BaseEntity;
import core.hosSein.core.util.StringUtil;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.JpaEntityInformationSupport;
import org.springframework.data.jpa.repository.support.QueryDslJpaRepository;
import org.springframework.data.jpa.repository.support.Querydsl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.ParameterizedType;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public abstract class BaseDao<T extends BaseEntity, ID extends Serializable> {

    @PersistenceContext
    EntityManager entityManager;

    public QueryDslJpaRepository<T, ID> repository;

    JpaEntityInformation<T, ?> entityInformation;


    @Transactional
    public T save(T entity){
        entityInformation = JpaEntityInformationSupport.getEntityInformation(getEntityClass(), entityManager);
        repository = new QueryDslJpaRepository<T, ID>((JpaEntityInformation<T, ID>) entityInformation, entityManager);
        entity = repository.save(entity);
//        entityManager.persist(entity);
        return entity;
        }
    public T findOne(ID id) {
        PageResult<T> pageResult = new PageResult<>();
        entityInformation = JpaEntityInformationSupport.getEntityInformation(getEntityClass(), entityManager);
        repository = new QueryDslJpaRepository<T, ID>((JpaEntityInformation<T, ID>) entityInformation, entityManager);
        return repository.findOne(id);

    }
    public PageResult<T> findData(PageDto page) throws Exception {
        PageResult<T> pageResult = new PageResult<>();
        entityInformation = JpaEntityInformationSupport.getEntityInformation(getEntityClass(), entityManager);
        repository = new QueryDslJpaRepository<T, ID>((JpaEntityInformation<T, ID>) entityInformation, entityManager);
        Sort sort;
        if (page.getSort() == null)
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "id"), new Sort.Order(Sort.Direction.ASC, "value"));

            else{
            if (page.getSort().getOrder() == null) {
                page.getSort().setOrder("DESC");
                page.getSort().setField("id");
            }
            sort = new Sort(page.getSort().getOrder().toLowerCase().equals("asc") ? Sort.Direction.ASC : Sort.Direction.DESC, page.getSort().getField());}
        Pageable pageSpecification = null;
            if(page.isEnablePaging()){
                pageSpecification = new PageRequest(page.getPagination().getPageNumber() - 1, page.getPagination().getPageSize(), sort);
            }

        PathBuilder<T> pathBuilder = new PathBuilder<>(getEntityClass(), CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, getEntityClass().getSimpleName()));
        Querydsl querydsl = new Querydsl(entityManager,pathBuilder);
        JPQLQuery<T> query;


        query = filterResults(pathBuilder, page.getFetchFields(), page.getFilters());


        List<T> res;
        if(page.isEnablePaging()) {
            pageResult.setTotal((int) query.fetchCount());
            query = querydsl.applyPagination(pageSpecification, query);
            res =  query.fetch();

        }
        else
            res = query.fetch();

        pageResult.setData(res);
        pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_LOAD_MODELS);
        return pageResult;
    }
    private JPAQueryBase filterResults(PathBuilder<T> pathBuilder, List<String> fetchFields, List<FilterDto> filters) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        JPAQueryBase jpaQueryBase = new JPAQuery(entityManager).from(pathBuilder);


        if (filters.size() > 0) {
            for (FilterDto filter : filters) {
                String property;
                if (filter.getField().contains(StringUtil.DOT)) {
                    String pathString = filter.getField().substring(0, filter.getField().lastIndexOf('.'));
                    property = filter.getField().substring(filter.getField().lastIndexOf('.') + 1);

                    PathBuilder<T> subPath = new PathBuilder<T>(
                            (Class<? extends T>) Class.forName("com.example.models.station." + CaseFormat.LOWER_CAMEL.to(CaseFormat.UPPER_CAMEL, pathString) + "Entity"),
                            pathString + "Entity");


                    jpaQueryBase.join(pathBuilder.get(pathString), subPath);/*.where(subPath.get(property).in(val));*/
//                    addWhereClouse(jpaQueryBase, subPath, property, filter.getOperator(), filter.getValue());
                    filter.setField(property);
                    jpaQueryBase = applyWhereExpression(jpaQueryBase, subPath, filter);
                } else {
                    property = filter.getField();
                    Class<?> field = getEntityClass().getField(property).getType();
//            genericPath = entityPath;
                    jpaQueryBase = applyWhereExpression(jpaQueryBase, pathBuilder, filter);
                }


            }
        }

        return jpaQueryBase;
    }


    public com.querydsl.core.types.Predicate getPredicate(PathBuilder<T> entityPath, FilterDto filter) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        PathBuilder<?> genericPath = null;
        Predicate predicate = null;
        BooleanBuilder builder = new BooleanBuilder();
        Class<?> field;
        String property;

        if (filter.getField().contains(StringUtil.DOT)) {
            String[] pathSplit = filter.getField().split(StringUtil.DOT);
            if(pathSplit.length>2){

                String st = "";

            }
            String pathString = filter.getField().substring(0, filter.getField().lastIndexOf('.'));
            property = filter.getField().substring(filter.getField().lastIndexOf('.') + 1);
            PathBuilder<T> subPath = new PathBuilder<T>(
                    (Class<? extends T>) Class.forName("com.example.models.station." + CaseFormat.LOWER_CAMEL.to(CaseFormat.UPPER_CAMEL, pathString) + "Entity"),
                    pathString+"Entity");

            field = Class.forName("com.example.models.station." + CaseFormat.LOWER_CAMEL.to(CaseFormat.UPPER_CAMEL, pathString) + "Entity").getConstructor().newInstance().getClass().getField(property).getType();
//            try{
//                Field field2 = Class.forName("com.example.models.station.BurnersEntity").getConstructor().newInstance().getClass().getField(pathString);
//                PathBuilder<T> pathBuilder = new PathBuilder<>(getEntityClass(), CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, getEntityClass().getSimpleName()));
//                JPAQueryBase jpaQueryBase = new JPAQuery(entityManager).from(pathBuilder);
//                Constant<?> val;
//                List<Long> list2 = Arrays.asList("1,2,3".split(",")).stream().map(s -> Long.parseLong(s.trim())).collect(Collectors.toList());
//                val = (Constant<?>) Expressions.constant(list2);
//                jpaQueryBase.join(pathBuilder.get(pathString), subPath).where(subPath.get(property).in(val));
//                List list = jpaQueryBase.fetch();
//
//
//
//                System.out.println(field2);
//            }
//            catch (Exception e){
//                e.printStackTrace();
//            }

//            genericPath = subPath;

        }
        else{
            property = filter.getField();
            field = getEntityClass().getField(property).getType();
//            genericPath = entityPath;

        }
        genericPath = entityPath;


//        com.querydsl.core.types.Path<T> path;
//        return addEpressionToPath(builder, genericPath,filter.getOperator(), field,
//                property, filter);
        return addEpressionToPath(builder, genericPath,filter, field
               );
    }


    private com.querydsl.core.types.Predicate addEpressionToPath(BooleanBuilder builder, PathBuilder<?> pathBuilder, FilterDto filterDto, Class<?> clazz) {

        SimplePath<?> field = Expressions.path(clazz, pathBuilder, filterDto.getField());
        Constant<?> val;
        if(Long.class.isAssignableFrom(clazz)) {
        try {
            val = (Constant<?>) Expressions.constant(Long.parseLong(filterDto.getValue()));
        }
        catch (Exception e){
            val = (Constant<?>) Expressions.constant(filterDto.getValue());
        }
        }
        else if (Integer.class.isAssignableFrom(clazz))
            val = (Constant<?>) Expressions.constant(Integer.parseInt(filterDto.getValue()));
        else if(Double.class.isAssignableFrom(clazz))
            val = (Constant<?>) Expressions.constant(Double.parseDouble(filterDto.getValue()));
        else if(Float.class.isAssignableFrom(clazz))
            val = (Constant<?>) Expressions.constant(Float.parseFloat(filterDto.getValue()));
        else if(Boolean.class.isAssignableFrom(clazz))
            val = (Constant<?>) Expressions.constant(Boolean.parseBoolean(filterDto.getValue()));
        else
            val = (Constant<?>) Expressions.constant(filterDto.getValue());





        switch(filterDto.getOperator()){

            case EQ:
                return  builder.and(Expressions.predicate(Ops.EQ, field, val));

            case NE:
                return builder.and(Expressions.predicate(Ops.NE, field, val));
            case GT:
                return builder.and(Expressions.predicate(Ops.GT, field, val));
            case GE:
                return builder.and(Expressions.predicate(Ops.GOE, field, val));
            case LT:
                return builder.and(Expressions.predicate(Ops.LT, field, val));
            case LE:
                return builder.and(Expressions.predicate(Ops.LOE, field, val));
            case IS_NULL:
                return builder.and(Expressions.predicate(Ops.IS_NULL, field, val));
            case IS_NOT_NULL:
                return builder.and(Expressions.predicate(Ops.IS_NOT_NULL, field, val));
            case LIKE:
                val = (Constant<?>) Expressions.constant(StringUtil.PERCENT + filterDto.getValue() + StringUtil.PERCENT);

                return builder.and(Expressions.predicate(Ops.LIKE, field, val));
            case STARTS_WITH:

                return builder.and(Expressions.predicate(Ops.STARTS_WITH, field, val));
            case ENDS_WITH:
                return builder.and(Expressions.predicate(Ops.ENDS_WITH, field, val));
            case IN:

                List<Long> list = Arrays.asList(filterDto.getValue().split(",")).stream().map(s -> Long.parseLong(s.trim())).collect(Collectors.toList());
                val = (Constant<?>) Expressions.constant(list);//.stream().map(s -> Long.parseLong(s.trim())).collect(Collectors.toList()));

                return builder.and(Expressions.predicate(Ops.IN, field, val));


            case JSON_EQ:
                break;
            case JSON_EXISTS:
                break;
            case JSON_NE:
                break;
            case JSON_NOT_EXISTS:
                break;
            case AND:
//                    and();
                break;
            case OR:
                break;
            case NOT:
                break;
            default:

        }

        return null;

    }

    private JPAQueryBase applyWhereExpression(JPAQueryBase query, PathBuilder pathBuilder , FilterDto filterDto) throws NoSuchMethodException, IllegalAccessException, InstantiationException, NoSuchFieldException, InvocationTargetException, ClassNotFoundException {

        com.querydsl.core.types.Predicate expression = getPredicate(pathBuilder, filterDto);

        if (expression != null) {
            query.where(expression);
        }
        return query;
    }







    private Class<T> getEntityClass() {
        Class<?> clazz = getClass();
        while (clazz.getGenericSuperclass() != null) {
            if (clazz.getGenericSuperclass() instanceof ParameterizedType) {
                return (Class<T>) ((ParameterizedType) clazz.getGenericSuperclass()).getActualTypeArguments()[0];
            } else {
                clazz = clazz.getSuperclass();
            }
        }
        return null;
    }


}