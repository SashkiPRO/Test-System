package sunrise.test.com.configuration;

import org.springframework.context.annotation.*;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;


@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"sunrise.test.com.*"})
@PropertySource("classpath:database.properties")
@Import({HibernateConfig.class})

public class ContextConfig extends AbstractAnnotationConfigDispatcherServletInitializer implements WebMvcConfigurer {
    @Bean
    public UrlBasedViewResolver setupViewResolver() {
        UrlBasedViewResolver resolver = new UrlBasedViewResolver();
        resolver.setViewClass(JstlView.class);
        resolver.setSuffix(".jsp");
        return resolver;
    }
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
    }



    @Nullable
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return null;
    }

    @Nullable
    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{ContextConfig.class};
    }
    @Nullable
    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }
}
