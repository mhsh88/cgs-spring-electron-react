package core.hosSein.core.ebean;


//package com.hosSein.core.ebean;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.JsonNode;
//import BaseDto;
//import PageDto;
//import CoreMessagesCodes;
//import BaseEntity;
//import ReflectionUtil;
//import StringUtil;
//import BaseView;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.*;
//import play.libs.Json;
//import play.mvc.BodyParser;
//import play.mvc.Result;
//
//import java.io.Serializable;
//import java.lang.reflect.Method;
//import java.lang.reflect.ParameterizedType;
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
///**
// * Created by Payam Mostafaei
// * Creation Time: 2017/Jan/10 - 01:44 PM
// */
//
//
//@RequestMapping("/u")
//public abstract class RestController<m extends BaseEntity, I extends Serializable, V extends BaseView> extends BaseController {
//
//    public abstract BaseDao<I, m> getDao();
//
//    @Autowired
//    BaseService baseDAO;
//
//    //@SubjectPresent
//    public Result load(I id) {
//
//        PageResult<m> pageResult = new PageResult<>();
//
//        try {
//            m model = getDao().load(id, getFetchedFields());
//            afterLoad(model);
//            pageResult.addData(model);
//            pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_LOAD_MODEL);
//            return ok(writeJson(pageResult));
//        }
//        catch (Exception e) {
//            pageResult.unsuccessfulOperation(e.getMessage());
//            return badRequest(Json.toJson(pageResult));
//        }
//    }
//
//    protected void afterLoad(m model) { }
//
//    /* This method can be overriden in the subclasses */
//    protected List<String> getFetchedFields() {
//        return ReflectionUtil.getAllEntityColumnNames(getModelClass());
//    }
//
//    /* This method can be overriden in the subclasses */
//    protected List<String> getLoadConverterFields() {
//        List<String> conversionPolicy = new ArrayList<>();
//        for (Method method : getModelClass().getMethods()) {
//            if (ReflectionUtil.isPrimitiveOrBasicPropertyGetterMethod(method)) {
//                String propertyName = StringUtil.toFirstLower(method.getName().substring(3));
//                conversionPolicy.add(propertyName);
//            }
//        }
//        return conversionPolicy;
//    }
//
//    /* This method can be overriden in the subclasses */
//    protected List<String> getSaveOrUpdateConverterFields() {
//        List<String> conversionPolicy = new ArrayList<>();
//        for (Method method : getModelClass().getMethods()) {
//            if (ReflectionUtil.isPrimitiveOrBasicPropertyGetterMethod(method)) {
//                String propertyName = StringUtil.toFirstLower(method.getName().substring(3));
//                conversionPolicy.add(propertyName);
//            }
//        }
//        return conversionPolicy;
//    }
//
//    /* This method can be overriden in the subclasses */
//    protected Map<Class<? extends BaseDto>, Class<? extends BaseEntity>> getConverterSpecialClassesMap() { return null; }
//
//    @BodyParser.Of(BodyParser.Json.class)
//    protected Result insert() {
//
//        PageResult<m> pageResult = new PageResult<>();
//
//        try {
//            m model = readJson(request().body().asJson());
//            model = beforeInsert(model);
//            m newModel = getDao().insert(model);
//            newModel = afterInsert(newModel);
//            pageResult.addData(newModel);
//            pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_SAVE_MODEL);
//            return ok(writeJson(pageResult));
//        }
//        catch (Exception e) {
//            pageResult.unsuccessfulOperation(e.getMessage());
//            return badRequest(Json.toJson(pageResult));
//        }
//    }
//
//    @BodyParser.Of(BodyParser.Json.class)
//    protected Result update() {
//
//        PageResult<m> pageResult = new PageResult<>();
//
//        try {
//            m model = readJson(request().body().asJson());
//            m oldModel = getDao().load((I) model.id);
//            model = beforeUpdate(oldModel, model);
//            m newModel = getDao().update(model);
//            newModel = afterUpdate(newModel);
//            pageResult.addData(newModel);
//            pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_SAVE_MODEL);
//            return ok(writeJson(pageResult));
//        }
//        catch (Exception e) {
//            pageResult.unsuccessfulOperation(e.getMessage());
//            return badRequest(Json.toJson(pageResult));
//        }
//    }
//
//    /* This method can be overriden in the subclasses */
//    protected m beforeInsert(m newEntity) throws Exception {
//        return newEntity;
//    }
//
//    /* This method can be overriden in the subclasses */
//    protected m afterInsert(m newEntity) {
//        return newEntity;
//    }
//
//    /* This method can be overriden in the subclasses */
//    protected m beforeUpdate(m oldEntity, m newEntity) throws Exception {
//        return newEntity;
//    }
//
//    /* This method can be overriden in the subclasses */
//    protected m afterUpdate(m newEntity) {
//        return newEntity;
//    }
//
//    protected Result delete(I id) {
//        PageResult<m> pageResult = new PageResult<>();
//        try {
//            getDao().delete(id);
//            pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_DELETE_MODEL);
//            return ok(writeJson(pageResult));
//        }
//        catch (Exception e) {
//            pageResult.unsuccessfulOperation(e.getMessage());
//            return badRequest(Json.toJson(pageResult));
//        }
//    }
//
//    public Result loadModels() {
//
//        JsonNode pageNode = Json.parse(request().queryString().size() > 0 ?
//                request().queryString().keySet().toArray()[0].toString() : "{}");
//        PageDto page = Json.fromJson(pageNode, PageDto.class);
//        PageResult<m> modelsPageResult = new PageResult<>();
//
//        try {
//            List<String> fields = getFetchedFields();
//            page.setFetchFields(fields);
//            modelsPageResult = find(page);
//            for (m model : modelsPageResult.getData()) {
//                afterLoad(model);
//            }
//            return ok(writeJson(modelsPageResult));
//        }
//        catch (Exception e) {
//            modelsPageResult.unsuccessfulOperation(e.getMessage());
//            return badRequest(Json.toJson(modelsPageResult));
//        }
//    }
//
//    protected PageResult<m> find(PageDto page) throws Exception {
//        return getDao().find(page);
//    }
//
//    @BodyParser.Of(BodyParser.Json.class)
//    public Result loadOptions() {
//
//        PageDto page = request().body().as(PageDto.class);
//        HashMap<Long, String> options = new HashMap<>();
//
//        try {
//
//            /*if (page.getSorter() != null)
//                page.getSorter().setAscending(true);*/
//
//            PageResult<m> pageResult = find(page);
//            if (pageResult != null) {
//                for (m model : pageResult.getData()) {
//                    try {
//                        Object optionTitle = ReflectionUtil.invokeGetter(model, page.getOptionField());
//                        options.put(model.id, optionTitle.toString());
//                    } catch (Exception e) {
//
//                    }
//                }
//            }
//        }
//        catch (Exception e) {
//            PageResult<m> pageResult = new PageResult<>();
//            pageResult.unsuccessfulOperation(e.getMessage());
//            return badRequest(Json.toJson(pageResult));
//        }
//        return ok(Json.toJson(options));
//    }
//
//    protected Class<m> getModelClass() {
//        Class<?> clazz = getClass();
//        while (clazz.getGenericSuperclass() != null) {
//            if (clazz.getGenericSuperclass() instanceof ParameterizedType) {
//                return (Class<m>) ((ParameterizedType) clazz.getGenericSuperclass()).getActualTypeArguments()[0];
//            } else {
//                clazz = clazz.getSuperclass();
//            }
//        }
//        return null;
//    }
//
//    protected Class<V> getViewClass() {
//        Class<?> clazz = getClass();
//        while (clazz.getGenericSuperclass() != null) {
//            if (clazz.getGenericSuperclass() instanceof ParameterizedType) {
//                return (Class<V>) ((ParameterizedType) clazz.getGenericSuperclass()).getActualTypeArguments()[2];
//            } else {
//                clazz = clazz.getSuperclass();
//            }
//        }
//        return null;
//    }
//
//    protected String writeJson(PageResult<m> pageResult) throws JsonProcessingException {
//        return Json.mapper().writerWithView(getViewClass()).writeValueAsString(pageResult);
//    }
//
//    protected m readJson(JsonNode jsonNode) throws java.io.IOException {
//        return Json.mapper().readerWithView(getViewClass()).forType(getModelClass()).readValue(jsonNode);
//    }
//
//}
