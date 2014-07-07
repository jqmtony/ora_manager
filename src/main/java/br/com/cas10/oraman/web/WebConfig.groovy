package br.com.cas10.oraman.web

import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

@Configuration
@EnableWebMvc
@ComponentScan(basePackages=['br.com.cas10.oraman.web'])
class WebConfig extends WebMvcConfigurerAdapter {
}
