var CONFIG = {
  customTheme: CUSTOM_THEMES.TRANSPARENT, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
  transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
  entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
  tileSize: 135,  //整体大小
  tileMargin: 6,  //两个方块之间的间隔
  groupMarginCss: '20px',  //每个group之间的间隔
  groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY
  menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM  //侧面分组还是底部分组
  serverUrl: 'http://hassip:8123',
  wsUrl: 'ws://hassip:8123/api/websocket',
  authToken: 'XXXX', // optional: make an long live token and put it here
  //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
  debug: false, // Prints entities and state change info to the console.

  // next fields are optional
  events: [],
  timeFormat: 24,
  hideScrollbar: false, // horizontal scrollbar  
//下面是页面开头
  header: { // [url=https://github.com/resoai/TileBoard/wiki/Header-configuration]https://github.com/resoai/TileBoard/wiki/Header-configuration[/url]
     styles: {
        padding: '30px 130px 0',
        fontSize: '28px'
     },
     right: [
        {
           type: HEADER_ITEMS.CUSTOM_HTML,
           html: '<b> 智能家庭控制中心 - RokeySun</b>',
           styles: {
           margin: '20px 0 0'
           }
        },
        {
                type: HEADER_ITEMS.WEATHER,
                styles: {
                   float: 'right',
                   margin: '10px',
                },
                icon: '&weather.localweather.state',
                icons: {
                     'sunny': 'clear',
                     'cloudy': 'cloudy',
                     'rainy': 'rain',                                                         
                     'snowy-rainy': 'sleet',
                     'snowy': 'snow',
                     'windy': 'hazy',
                     '强风': 'hazy',
                     '疾风': 'hazy',
                     '清风': 'hazy',
                     '烈风': 'hazy',
                     'fog': 'fog',
                     'partlycloudy': 'partlycloudy',
                },
                fields: {
                   temperature: '&sensor.hetemperature.state',
                   temperatureUnit: '&sensor.hetemperature.attributes.unit_of_measurement',
                   //summary: '&weather.localweather.state',
        }
     }
     ],
     left: [
        {
           type: HEADER_ITEMS.DATETIME,
           dateFormat: 'yyyy年 LLLL月 dd日 , EEEE', //https://docs.angularjs.org/api/ng/filter/date
        }
     ]
  },
//下面是屏保
  screensaver: {// optional. [url=https://github.com/resoai/TileBoard/wiki/Screensaver-configuration]https://github.com/resoai/TileBo ... saver-configuration[/url]
     timeout: 60, // after 5 mins of inactive
     slidesTimeout: 10, // 10s for one slide
     styles: { fontSize: '40px' },
     leftBottom: [
             { 
                     type: SCREENSAVER_ITEMS.DATETIME,
                     dateFormat: 'yyyy年 LLLL月 dd日 , EEEE',
             }
             ], // put datetime to the left-bottom of screensaver
     slides: [
        {
           bg: 'images/bg2.png',
           rightTop: [ // put text to the 2nd slide
              {
                 type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                 html: "<b>智能家庭控制中心</b>",
                 styles: { fontSize: '40px' }
              },
              {
                type: HEADER_ITEMS.WEATHER,
                styles: {
                   float: 'right',
                   margin: '10px',
                },
                icon: '&weather.localweather.state',
                icons: {
                     'sunny': 'clear',
                     'cloudy': 'cloudy',
                     'rainy': 'rain',                                                         
                     'snowy-rainy': 'sleet',
                     'snowy': 'snow',
                     'windy': 'hazy',
                     '强风': 'hazy',
                     '疾风': 'hazy',
                     '清风': 'hazy',
                     '烈风': 'hazy',
                     'fog': 'fog',
                     'partlycloudy': 'partlycloudy',
                },
                fields: {
                   temperature: '&sensor.hetemperature.state',
                   temperatureUnit: '&sensor.hetemperature.attributes.unit_of_measurement',
                   //summary: '&weather.localweather.state',
                   windSpeed: '&sensor.hewindspeed.state',
                   windSpeedUnit: '&sensor.hewindspeed.attributes.unit_of_measurement',
                   humidity: '&sensor.hehumidity.state',
                   humidityUnit: '&sensor.hehumidity.attributes.unit_of_measurement'
                     }
              }
           ]
        }
     ]
  },
  pages: [
     {  
        title: 'Main page',
        bg: 'images/bg3.jpg',  //页面的背景图
        icon: 'mdi-home-outline', // home icon
        groups: [
            {
              title: '传感器',
              width: 2,
              height: 1,
              items: [
                  {
                    position: [0, 0],
                    type: TYPES.SENSOR_ICON,
                    width: 1,
                    height: 1,
                    title: '门口感应',
                    id: 'binary_sensor._8',
                    //bg: 'images/se.jpg',
                    states: {
                       on: "已触发",
                       off: "未触发"
                   },
                    icons: {
                       on: 'mdi-run-fast',
                       off: 'mdi-walk'
                   }
                 },
                 {
                    position: [1, 0],
                    type: TYPES.SENSOR_ICON,
                    width: 1,
                    height: 1,
                    title: '过道感应',
                    id: 'binary_sensor._9',
                    //bg: 'images/se.jpg',
                    states: {
                       on: "已触发",
                       off: "未触发"
                   },
                    icons: {
                       on: 'mdi-run-fast',
                       off: 'mdi-walk'
                   }
                 },
                 {
                    position: [0, 1],
                    type: TYPES.SENSOR_ICON,
                    width: 1,
                    height: 1,
                    title: '客厅感应',
                    id: 'binary_sensor._6',
                    //bg: 'images/se.jpg',
                    states: {
                       on: "已触发",
                       off: "未触发"
                   },
                    icons: {
                       on: 'mdi-run-fast',
                       off: 'mdi-walk'
                   }
                 },
                 {
                    position: [1, 1],
                    type: TYPES.SENSOR_ICON,
                    width: 1,
                    height: 1,
                    title: '厕所感应',
                    id: 'binary_sensor._7',
                    //bg: 'images/se.jpg',
                    states: {
                       on: "已触发",
                       off: "未触发"
                   },
                    icons: {
                       on: 'mdi-run-fast',
                       off: 'mdi-walk'
                   }
                 }
               ]
             },
             {
               title: '家庭灯具',
               width: 3,
               height: 1,
               items: [
                 {
                    position: [0, 0],
                    type: TYPES.SWITCH,
                    width: 0.75,
                    height: 0.75,
                    title: '走廊灯',
                    subtitle: '玄关',
                    id: 'light._19',
                    bg: 'images/xg.jpg',
                    states: {
                       on: "打开",
                       off: "关闭"
                    }
                    /*icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    }*/
                 }, 
                 {
                    position: [0.75, 0],
                    type: TYPES.SWITCH,
                    width: 0.75,
                    height: 0.75,
                    title: '过道灯',
                    subtitle: '玄关',
                    id: 'light._16',
                    bg: 'images/xg.jpg',
                    states: {
                       on: "打开",
                       off: "关闭"
                    }                 
                 }, 
                 {
                    position: [1.5, 0],
                    type: TYPES.SWITCH,
                    width: 0.75,
                    height: 0.75,
                    title: '前灯',
                    subtitle: '客厅',
                    id: 'light._17',
                    bg: 'images/kt.jpg',
                    states: {
                       on: "打开",
                       off: "关闭"
                    }
                 },
                 {
                    position: [2.25, 0],
                    type: TYPES.SWITCH,
                    width: 0.75,
                    height: 0.75,
                    title: '左灯',
                    subtitle: '客厅',
                    id: 'light._3',
                    bg: 'images/kt.jpg',
                    states: {
                       on: "打开",
                       off: "关闭"
                    }
                 },
                 {
                    position: [0, 0.75],
                    type: TYPES.SWITCH,
                    width: 0.75,
                    height: 0.75,
                    title: '右灯',
                    subtitle: '客厅',
                    id: 'light._18',
                    bg: 'images/kt.jpg',
                    states: {
                       on: "打开",
                       off: "关闭"
                    }
                    /*icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    }*/
                 }, 
                 {
                    position: [0.75, 0.75],
                    type: TYPES.SWITCH,
                    width: 0.75,
                    height: 0.75,
                    title: '后灯',
                    subtitle: '客厅',
                    id: 'light._4',
                    bg: 'images/kt.jpg',
                    states: {
                       on: "打开",
                       off: "关闭"
                    }                 
                 }, 
                 {
                    position: [1.5, 0.75],
                    type: TYPES.SWITCH,
                    width: 0.75,
                    height: 0.75,
                    title: '洗脸台灯',
                    subtitle: '厕所',
                    id: 'light._5',
                    bg: 'images/cs.jpg',
                    states: {
                       on: "打开",
                       off: "关闭"
                    }
                 },
                 {
                    position: [2.25, 0.75],
                    type: TYPES.SWITCH,
                    width: 0.75,
                    height: 0.75,
                    title: '浴室灯',
                    subtitle: '厕所',
                    id: 'light._11',
                    bg: 'images/cs.jpg',
                    states: {
                       on: "打开",
                       off: "关闭"
                    }
                 },
                 {
                    position: [0, 1.5],
                    type: TYPES.SWITCH,
                    width: 0.75,
                    height: 0.75,
                    title: '卧室灯',
                    subtitle: '卧室',
                    id: 'light._15',
                    bg: 'images/ws.jpg',
                    states: {
                       on: "打开",
                       off: "关闭"
                    }
                    /*icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    }*/
                 },
                 {
                    position: [0.75, 1.5],
                    type: TYPES.LOCK,
                    width: 0.75,
                    height: 0.75,
                    id: 'lock.1_2',
                    title: '卧室锁',
                    states: {
                      locked: "已锁",
                      unlocked: "未锁"
                   },
                   icons: {
                      locked: "mdi-lock",
                      unlocked: "mdi-lock-open",
                   }
                }, 
                {
                    position: [1.5,1.5],
                    type: TYPES.AUTOMATION,
                    width: 0.75,
                    height: 0.75,
                    title: '灯光自动化',
                    subtitle: '玄关',
                    id: 'automation.xglight',
                    icon: 'mdi-weather-sunny'
                },  
                 {
                    position: [2.25,1.5],
                    type: TYPES.AUTOMATION,
                    width: 0.75,
                    height: 0.75,
                    title: '灯光自动化',
                    subtitle: '客厅',
                    id: 'automation.ktlight',
                    icon: 'mdi-weather-sunny'
                },               
                 {
                    position: [0, 2.25],
                    width: 3,
                    id: "climate.1_2",
                    type: TYPES.CLIMATE,
                    unit: 'C',
                    state: function (item, entity) {
                       return '温度 '
                          + entity.attributes.current_temperature
                          + entity.attributes.unit_of_measurement;
                    }
                 }
                 ]
             },
             {
               title: '用户控制',
               width: 3,
               height: 1,
               items: [                 
                 {
                    position: [0, 0],
                    width: 1,
                    height: 1,
                    id: 'scene.allopen',
                    title: '全开',
                    bg: 'images/sc.png',
                    type: TYPES.SCENE,
                    state: false,
                    //icon: 'mdi-blur',
                 },
                 {
                    position: [1, 0],
                    width: 1,
                    height: 1,
                    id: 'scene.allclose',
                    title: '全关',
                    bg: 'images/sc.png',
                    type: TYPES.SCENE,
                    state: false,
                    //icon: 'mdi-blur',
                 },
                 {
                    position: [2, 0],
                    width: 1,
                    height: 1,
                    id: 'scene.romantic',
                    title: '娱乐',
                    bg: 'images/sc.png',
                    type: TYPES.SCENE,
                    state: false,
                    //icon: 'mdi-blur',
                 },
                   ]
             }
       ]

     },
     {
       title: 'Two page',
        bg: 'images/bg3.jpg',  //页面的背景图
        icon: 'mdi-cards-playing-outline', // home icon
        groups: [
            {
               title: '娱乐',
               width: 2,
               height: 1,
               items: [
                  {
                   position: [0, 0],
                    width: 2,
                    height: 1,
                    type: TYPES.MEDIA_PLAYER,
                    title: '背景音乐',
                    id: "media_player.music15",
                    //classes: ["switch-bg"],
                    state: '@attributes.media_title',
                    bg: 'images/by.jpg',
                  }
               ]
             },  
        ]
     }
  ],
}

