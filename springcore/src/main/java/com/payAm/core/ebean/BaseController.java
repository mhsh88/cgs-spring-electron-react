package com.payAm.core.ebean;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Throwables;
import com.payAm.core.dto.PageDto;
import com.payAm.core.i18n.CoreMessagesCodes;
import com.payAm.core.model.BaseEntity;
import com.payAm.core.util.ReflectionUtil;
import com.payAm.core.view.BaseView;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;

import javax.servlet.http.HttpServletRequest;
import java.beans.FeatureDescriptor;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

//import org.apache.commons.beanutils.BeanUtils;
//import org.apache.commons.beanutils.BeanUtilsBean;


public abstract class BaseController<T extends BaseEntity, ID extends Serializable, V extends BaseView> {

    private Logger logger = LoggerFactory.getLogger(RestController.class);
    protected ObjectMapper mapper = new ObjectMapper();
    protected BaseRepository<T, ID> repo;
    public abstract BaseDao< T, ID> getDao();

    public BaseController(BaseRepository<T, ID> repo) {
        this.repo = repo;
    }
    protected void afterLoad(T model) { }

    @RequestMapping(method = {RequestMethod.GET, RequestMethod.POST})//(/*value = "/{queryString}",*/ /*method=RequestMethod.GET*/)
    public @ResponseBody
    ResponseEntity<String> listAll(@RequestParam Map<String,String> params, @RequestBody(required = false) PageDto pageDto, HttpServletRequest request,
                                   ModelMap model, Principal principal
                                                 ) throws IOException {
        String queryString = request.getQueryString();
        if(params.size() > 0 || pageDto == null)
            pageDto = getPageDtoFromJson(params);

        PageResult<T> modelsPageResult = new PageResult<>();
            try {
                modelsPageResult = getStringResponseEntity(pageDto, (PageResult<T>) modelsPageResult);
                ResponseEntity<String> respo = ResponseEntity.ok().body(mapper.writerWithView(getViewClass()).writeValueAsString(modelsPageResult));
                return respo;
            }
              catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.badRequest().body(mapper.writerWithView(getViewClass()).writeValueAsString(modelsPageResult));
        }


    }

    protected PageResult<T> getStringResponseEntity(PageDto pageDto, PageResult<T> modelsPageResult) throws Exception {

            List<String> fields = getFetchedFields();
            pageDto.setFetchFields(fields);
            modelsPageResult = find(pageDto);
            for (T model : modelsPageResult.getData()) {
                afterLoad(model);
            }

            return modelsPageResult;
//            return ResponseEntity.ok().body(mapper.writerWithView(getViewClass()).writeValueAsString(modelsPageResult));
//            return ResponseEntity.ok().body(modelsPageResult);


    }




    protected PageDto getPageDtoFromJson(Map<String, String> params) throws IOException {
        String jsonString = "{}";

        try{
            if(params.get(params.keySet().stream().findFirst().get()).equals(""))
                jsonString = params.keySet().stream().findFirst().get().length() > 0 ?
                    params.keySet().stream().findFirst().get() : "{}";
            else
                jsonString = mapper.writeValueAsString(params);

        }
        catch (Exception e){

        }

//        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(jsonString, PageDto.class);

    }







    @RequestMapping(method=RequestMethod.PUT, consumes={MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity<String> create(/*HttpServletRequest request*/@RequestBody(required = false) T json) throws IOException {
//        ServletInputStream test = request.getInputStream();
//        T json = getParamsFromPost(request);
        
//        T json = mapper.readValue(request.getInputStream(),getModelClass());
//        T json = null;
        logger.debug("create() with body {} of type {}", json, json.getClass());
        PageResult<T> pageResult = new PageResult<>();

        ResponseEntity<String> response = getStringResponseEntity(pageResult, (T) json);
        return response;
    }

    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<String> get(@PathVariable ID id) throws JsonProcessingException {
        PageResult<T> pageResult = new PageResult<>();


        try {
            T model = getDao().findOne(id);
            pageResult.addData(model);
            pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_LOAD_MODEL);
            return ResponseEntity.ok().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }
        catch (Exception e) {
            pageResult.unsuccessfulOperation(e.getMessage());
            return ResponseEntity.badRequest().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }




//        T model = this.repo.findOne(id);


//        pageResult.addData((T) model);
//        pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_LOAD_MODEL);
//
//        return  ResponseEntity.ok().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
    }

    @RequestMapping(value="/{id}", method=RequestMethod.POST/*, consumes={MediaType.APPLICATION_JSON_VALUE}*/)
    public @ResponseBody
    ResponseEntity<String> update(@PathVariable ID id, @RequestBody T json) throws JsonProcessingException {
        logger.debug("update() of id#{} with body {}", id, json);
        logger.debug("T json is of type {}", json.getClass());

        PageResult<T> pageResult = new PageResult<>();
        T updated;


        T entity = findOne(id);


        try {
//            BeanUtils.copyProperties(entity, json);
            copyNonNullProperties(json, entity);
        }
        catch (Exception e) {
            logger.warn("while copying properties", e);
            throw Throwables.propagate(e);
        }

        logger.debug("merged entity: {}", entity);

        ResponseEntity<String> response = getStringResponseEntity(pageResult, (T) entity);
        return response;

    }

    @RequestMapping(value = "/updatelist", method=RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<String> updateList(@RequestBody ArrayList<T> json) throws JsonProcessingException {
        logger.debug("update() of id#{} with body {}", json);
        logger.debug("T json is of type {}", json.getClass());

        PageResult<T> pageResult = new PageResult<>();
        T updated;
        ResponseEntity<String> response = null;

//        BeanUtilsBean.getInstance().getConvertUtils().register(false, false, 0);
        for(T t : json) {
            try {

                T entity = findOne((ID) t.id);

                try {
//            BeanUtils.copyProperties(entity, json);
                    copyNonNullProperties(t, entity);
                } catch (Exception e) {
                    logger.warn("while copying properties", e);
                    throw Throwables.propagate(e);
                }

                logger.debug("merged entity: {}", entity);

                response = getStringResponseEntity(pageResult, (T) entity);
            }
            catch (Exception e){
                pageResult.unsuccessfulOperation(e.getMessage());
                response = ResponseEntity.badRequest().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
            }
        }

//        BeanUtils.copyProperty(entity, json, "aProperty");
//        BeanUtils beanUtils = new BeanUtils();
//        beanUtils.setExcludeNulls(true);


        
        return response;

    }

    private ResponseEntity<String> getStringResponseEntity(PageResult pageResult, T entity) throws JsonProcessingException {
        try {
            T updated = this.repo.save(entity);
            pageResult.addData(updated);
            pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_LOAD_MODEL);
            return ResponseEntity.ok().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }
        catch (Exception e) {
            pageResult.unsuccessfulOperation(e.getMessage());
            return ResponseEntity.badRequest().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }
    }

    private T findOne(ID id) {
        return getDao().findOne(id);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public @ResponseBody
    ResponseEntity<String> delete(@PathVariable ID id) throws JsonProcessingException {
        PageResult<T> pageResult = new PageResult<>();
        try{
            T model = this.repo.findOne(id);
            model.setDeleted(true);
//            this.repo.save(model);
            return getStringResponseEntity(pageResult, model);
        }
        catch (Exception e){
            pageResult.unsuccessfulOperation(e.getMessage());
            return ResponseEntity.badRequest().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }

//        Map<String, Object> m = Maps.newHashMap();
//        m.put("success", true);
//        return m;
    }


    @RequestMapping(value="/[{Ids}]", method=RequestMethod.DELETE)
    public @ResponseBody
    ResponseEntity<String> deleteList(@PathVariable ID[] Ids) throws JsonProcessingException {
        PageResult pageResult = new PageResult();
        for(ID id : Ids){

            try{
                delete(id);
//                T model = this.repo.findOne(id);
//                model.deleted = true;
//                this.repo.save(model);
            }
            catch (Exception e){
                pageResult.unsuccessfulOperation(e.getMessage());
                return ResponseEntity.badRequest().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
            }

        }
        pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_LOAD_MODEL);
        return ResponseEntity.ok().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));


//        Map<String, Object> m = Maps.newHashMap();
//        m.put("success", true);
//        return m;
    }


    protected List<String> getFetchedFields() {
        return ReflectionUtil.getAllEntityColumnNames(getModelClass());
    }
    protected Class<T> getModelClass() {
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

    protected Class<V> getViewClass() {
        Class<?> clazz = getClass();
        while (clazz.getGenericSuperclass() != null) {
            if (clazz.getGenericSuperclass() instanceof ParameterizedType) {
                return (Class<V>) ((ParameterizedType) clazz.getGenericSuperclass()).getActualTypeArguments()[2];
            } else {
                clazz = clazz.getSuperclass();
            }
        }
        return null;
    }


    protected PageResult<T> find(PageDto page) throws Exception {
        return getDao().findData(page);
    }



    public static void copyNonNullProperties(Object src, Object target) {
        BeanUtils.copyProperties(src, target, getNullPropertyNames(src));
    }

//    public static String[] getNullPropertyNames (Object source) {
//        final BeanWrapper src = new BeanWrapperImpl(source);
//        java.beans.PropertyDescriptor[] pds = src.getPropertyDescriptors();
//
//        Set<String> emptyNames = new HashSet<String>();
//        for(java.beans.PropertyDescriptor pd : pds) {
//            Object srcValue = src.getPropertyValue(pd.getName());
//            if (srcValue == null) emptyNames.add(pd.getName());
//        }
//        String[] result = new String[emptyNames.size()];
//        return emptyNames.toArray(result);
//    }
    public static String[] getNullPropertyNames(Object source) {
        final BeanWrapper wrappedSource = new BeanWrapperImpl(source);
        return Stream.of(wrappedSource.getPropertyDescriptors())
                .map(FeatureDescriptor::getName)
                .filter(propertyName -> wrappedSource.getPropertyValue(propertyName) == null)
                .toArray(String[]::new);
    }

    private T getParamsFromPost(HttpServletRequest request) throws IOException {
        BufferedReader reader = request.getReader();
        StringBuilder sb = new StringBuilder();
        String line = reader.readLine();
        while (line != null) {
            sb.append(line + "\n");
            line = reader.readLine();
        }
        reader.close();
        String params = sb.toString();
        String[] _params = params.split("&");
//        for (String param : _params) {
//            System.out.println("params(POST)-->" + param);
//        }
        Class<T> clazz = getModelClass();
        return mapper.readValue(params, clazz);
    }
}