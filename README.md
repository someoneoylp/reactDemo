
```javascript
  {
    "setting_global": {
            "classify": 0, //分类分级优先, 0:关闭，1:开启 ，默认为0
            "offline": { 
                   "enable": 0, //离线访问, 0:关闭，1:开启 ，默认为0
                   "time_long": 0 //数据类型是number,时长，小时,默认为0
            },
            "auto_scan": 0, //终端自主扫描,0:关闭，1:开启 ，默认为0
            "hook_withe": [ //HOOK地址白名单
                    {
                        "value": "file name" 
                    }
            ], 
            "application_list": [
                    {
                        "value": "file name" 
                    }
            ]

    },
    "setting_approve": {
    }
}

  ```