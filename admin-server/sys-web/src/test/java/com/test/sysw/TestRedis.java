package com.test.sysw;

import com.test.admin.SysWebApplication;
import com.yuntian.architecture.redis.config.RedisManage;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import lombok.extern.slf4j.Slf4j;

/**
 * @Auther: yuntian
 * @Date: 2019/12/25 0025 00:25
 * @Description:
 */
@SpringBootTest(classes = SysWebApplication.class)
@Slf4j
public class TestRedis {

    @Resource
    private RedisManage  redisManage;


    @Test
    void setValue() {
        redisManage.set("user:1","tt");
    }

}
