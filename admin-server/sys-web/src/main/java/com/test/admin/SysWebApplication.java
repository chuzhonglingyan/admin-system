package com.test.admin;

import com.alibaba.nacos.spring.context.annotation.config.NacosPropertySource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author Administrator
 */
@NacosPropertySource(dataId = "redis", groupId= "sys-web",  autoRefreshed = true)
@NacosPropertySource(dataId = "data-source", groupId= "sys-web",  autoRefreshed = true)
@ComponentScan(basePackages = { "com.yuntian"})
@SpringBootApplication
public class SysWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(SysWebApplication.class, args);
    }

}
