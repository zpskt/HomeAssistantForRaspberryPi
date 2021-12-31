/*
挖掘了隐藏的参数，启用了自定义css
*/


var CONFIG = {
   customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: 'http://' + location.hostname + ':8123',
   wsUrl: 'ws://' + location.hostname + ':8123/api/websocket',
   authToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5YjEzODYzMTFiMGU0YWVlYjhlNjdiYTE5NmU4YTVkYyIsImlhdCI6MTY0MDg1NzgwMSwiZXhwIjoxOTU2MjE3ODAxfQ.VKTWhXlkMAX-f-QlNgUUqw6n0oYlgfvQghJ9GqDsyzo",
   //password: null,
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   debug: false, // Prints entities and state change info to the console.
   // next fields are optional
   events: [],
   timeFormat: 12,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

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
                 icon: '&sensor.heweather_cond_txt.state',
                 icons: {
                                                          '晴': 'clear',
                                                          '多云': 'cloudy',
                                                          '毛毛雨': 'rain',
                                                          '小雨': 'rain',
                                                          '中雨': 'rain',
                                                          '大雨': 'rain',
                                                          '阵雨': 'rain',
                                                          '极端降雨': 'rain',
                                                          '暴雨': 'rain',
                                                          '大暴雨': 'rain',
                                                          '特大暴雨': 'rain',
                                                          '强阵雨': 'rain',
                                                          '雷阵雨': 'rain',
                                                          '强雷阵雨': 'rain',                                                          
                                                          '雨夹雪': 'sleet',
                                                          '雨雪天气': 'sleet',
                                                          '阵雨夹雪': 'sleet',
                                                          '雷阵雨伴有冰雹': 'sleet',
                                                          '小雪': 'snow',
                                                          '中雪': 'snow',
                                                          '大雪': 'snow',
                                                          '暴雪': 'snow',
                                                          '阵雪': 'snow',
                                                          '有风': 'hazy',
                                                          '微风': 'hazy',
                                                          '和风': 'hazy',
                                                          '清风': 'hazy',
                                                          '强风': 'hazy',
                                                          '疾风': 'hazy',
                                                          '清风': 'hazy',
                                                          '烈风': 'hazy',
                                                          '雾': 'fog',
                                                          '薄雾': 'fog',
                                                          '少云': 'partlycloudy',
                                                          '晴间多云': 'partlycloudy',                                                          
                                                          '阴': 'partlycloudy',
                 },
                 fields: {
                    temperature: '&sensor.heweather_tmp.state',
                    temperatureUnit: '&sensor.heweather_tmp.attributes.unit_of_measurement',
                    summary: '&sensor.heweather_cond_txt.state',
         }
      }
              ],
      left: [
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'yyyy年 LLLL dd日 , EEEE', //https://docs.angularjs.org/api/ng/filter/date
         }
      ]
   },

   screensaver: {// optional. [url=https://github.com/resoai/TileBoard/wiki/Screensaver-configuration]https://github.com/resoai/TileBo ... saver-configuration[/url]
      timeout: 60, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [
              { 
                      type: SCREENSAVER_ITEMS.DATETIME,
                      dateFormat: 'yyyy年 LLLL dd日 , EEEE',
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
               }
            ]
         }
      ]
   },

   pages: [
      {
         title: 'Main page',
         bg: 'images/bg3.jpg',
         icon: 'mdi-home-outline', // home icon
         groups: [
            {
               title: '生活讯息',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                                         bg: 'images/bg01.jpg',
                                         bgOpacity: 1,
                     list: [
                        {
                           title: '日出日落',
                           icon: 'mdi-weather-sunny',
                           value: '&sensor.sun_state.state'
                        },
                        {
                           title: '月满月缺',
                           icon: 'mdi-weather-night',
                           value: '&sensor.moon_state.state'
                        },
                        {
                           title: '文化路路况',
                           icon: 'mdi-traffic-light',
                           value: '&sensor.wenhualu_traffic.state'
                        },
                        {
                           title: '青年大街路况',
                           icon: 'mdi-traffic-light',
                           value: '&sensor.qndj_traffic.state'
                        },
                        {
                           title: '和平大街路况',
                           icon: 'mdi-traffic-light',
                           value: '&sensor.hpdj_traffic.state'
                        },
                        {
                           title: '体重',
                           icon: 'mdi-scale-bathroom',
                           value: '&sensor.phicomm_balance.state kg'
                        }
                     ]
                  },
                  {
                                   position: [0, 1],
                                   type: TYPES.SENSOR,
                                   title: '客厅温度',
                                   height: 0.5,
                                   id: 'sensor.temperature_xxxxxx',
                                   bg: 'images/bg03.jpg',
                                   bgOpacity: 1,
                   unit: 'C', // override default entity unit
                   state: false, // hidding state
                  },
                  {
                                   position: [0, 1.5],
                                   type: TYPES.SENSOR,
                                   title: '客厅湿度',
                                   height: 0.5,
                                   id: 'sensor.humidity_xxxxx',
                                   bg: 'images/bg03_2.jpg',
                                   bgOpacity: 1,
                   unit: '%', // override default entity unit
                   state: false, // hidding state
                  },
                  {
                                   position: [1, 1],
                                   type: TYPES.SENSOR,
                                   title: '客厅亮度',
                                   height: 0.5,
                                   id: 'sensor.illumination_xxxxx',
                                   bg: 'images/bg03_1.jpg',
                                   bgOpacity: 1,
                   unit: 'Lm', // override default entity unit
                   state: false, // hidding state
                  },
                  {
                                   position: [1, 1.5],
                                   type: TYPES.SENSOR,
                                   title: '系统运行',
                                   height: 0.5,
                                   id: 'sensor.homeassistant',
                                   bg: 'images/bg03_4.jpg',
                                   bgOpacity: 1,
                   unit: 'h', // override default entity unit
                   state: false, // hidding state
                  },
                  {
                                   position: [0, 2],
                                   type: TYPES.SENSOR_ICON,
                                   title: '门传感器',
                                   //height: 0.5,
                                   width: 0.5,
                                   id: 'binary_sensor.door_window_sensor_xxxxx',
                                   bg: 'images/bg05.jpg',
                                   states: {
                                      on: "开",
                                      off: "关"
                                   },
                                   icons: {
                                      on: 'mdi-door-open',
                                      off: 'mdi-door-closed'
                                   },
                                  },
                  {
                                   position: [0.5, 2],
                                   type: TYPES.SENSOR_ICON,
                                   title: '窗传感器',
                                   width: 0.5,
                                   id: 'binary_sensor.door_window_sensor_xxxxxx',
                                   bg: 'images/bg05.jpg',
                                   states: {
                                      on: "开",
                                      off: "关"
                                   },
                                   icons: {
                                      on: 'mdi-window-open',
                                      off: 'mdi-window-closed'
                                   },
                  },
                  {
                                   position: [1, 2],
                                   type: TYPES.SENSOR_ICON,
                                   title: '人员活动',
                                   width: 0.5,
                                   id: 'binary_sensor.motion_sensor_xxxxxx',
                                   bg: 'images/bg05.jpg',
                                   states: {
                                      on: "有人",
                                      off: "无人"
                                   },
                                   icons: {
                                      on: 'mdi-run',
                                      off: 'mdi-human-male'
                                   },
                                  },
                  {
                                   position: [1.5, 2],
                                   type: TYPES.SENSOR_ICON,
                                   title: '煤气探测',
                                   width: 0.5,
                                   id: 'binary_sensor.natgas_sensor_xxxxxx',
                                   bg: 'images/bg05.jpg',
                                   states: {
                                      on: "危险",
                                      off: "安全"
                                   },
                                   icons: {
                                      on: 'mdi-security-close',
                                      off: 'mdi-verified'
                                   },
                                  },                                  
               ]
            },
            {
               title: '常用开关',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.newair",
                                         bg: 'device/newair.jpg',
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     title: '新风',
                     icons: {'off': 'mdi-fan-off', 'on': 'mdi-fan mdi-spin'}
                  },
                  {
                     position: [0.75, 0],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.jiashiqi",
                                         bg: 'device/jsq.jpg',
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     title: '加湿器',
                     icons: {'off': 'mdi-water-off', 'on': 'mdi-water'}
                  },
                  {
                     position: [1.5, 0],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "input_boolean.play_music",
                                         bg: 'device/music.jpg',
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     title: '背景音乐',
                     icons: {'off': 'mdi-music-off', 'on': 'mdi-music'}
                  },
                  {
                     position: [2.25, 0],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "light.gateway_light_xxxxxx",
                                         bg: 'device/gateway.jpg',
                                         //bgOpacity: 0.4,
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     //icons: {'off': 'mdi-lightbulb', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [0, 0.75],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.hassmart_keting_cxxx_1",
                                         bg: 'device/td.jpg',
                                         //bgOpacity: 0.4,
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     //icons: {'off': 'mdi-track-light', 'on': 'mdi-track-light'}
                  },
                  {
                     position: [0.75, 0.75],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.hassmart_keting_cxxxxx_2",
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                                         bg: 'device/dengdai.jpg',
                                         classes: ["switch-bg"],
                                         //bgOpacity: 0.4,
                     //icons: {'off': 'mdi-lightbulb', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [1.5, 0.75],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.hassmart_keting_cxxxxx_3",
                                         bg: 'device/dd.jpg',
                                         //bgOpacity: 0.4,
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     //icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-ceiling-light'}
                  },
                  {
                     position: [2.25, 0.75],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.hassmart_cf_cxxxxx_1",
                                         bg: 'device/cf.jpg',
                                         classes: ["switch-bg"],
                                         //bgOpacity: 0.4,
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     //icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [0, 1.5],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.hassmart_cf_cxxxxx_2",
                                         bg: 'device/bx.jpg',
                                         classes: ["switch-bg"],
                                         //bgOpacity: 0.4,
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     //icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [0.75, 1.5],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.hassmart_cxxxxx_1",
                                         bg: 'device/gd.jpg',
                                         classes: ["switch-bg"],
                                         //bgOpacity: 0.4,
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     //icons: {'off': 'mdi-track-light', 'on': 'mdi-track-light'}
                  },
                  {
                     position: [1.5, 1.5],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.hassmart_cxxxxx2",
                                         bg: 'device/wc.jpg',
                                         classes: ["switch-bg"],
                                         //bgOpacity: 0.4,
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     //icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [2.25, 1.5],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "light.bedroom_yeelight",
                                         bg: 'device/yeelight.jpg',
                                         classes: ["switch-bg"],
                                         //bgOpacity: 0.4,
                                         title: '主卧台灯',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     //icons: {'off': 'mdi-desk-lamp', 'on': 'mdi-desk-lamp'}
                  },
                                  {
                                         position: [0, 2.25],
                     width: 0.75,
                     height: 0.75,
                                         type: TYPES.SWITCH,
                                         bg: 'device/airpur.jpg',
                                         classes: ["switch-bg"],
                                         title: '客厅空净',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                                         id: 'fan.air_purifier_livingroom',
                                         icons: {'off': 'mdi-fan-off', 'on': 'mdi-fan mdi-spin'}
                                  },
                                  {
                                         position: [0.75, 2.25],
                     width: 0.75,
                     height: 0.75,
                                         type: TYPES.SWITCH,
                                         bg: 'device/airpur.jpg',
                                         classes: ["switch-bg"],
                                         title: '卧室空净',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                                         id: 'fan.air_purifier_bedroom',
                                         icons: {'off': 'mdi-fan-off', 'on': 'mdi-fan mdi-spin'}
                                  },
                                  {
                                         position: [1.5, 2.25],
                     width: 0.75,
                     height: 0.75,
                                         type: TYPES.SWITCH,
                                         bg: 'device/fan.jpg',
                                         classes: ["switch-bg"],
                                         title: '电风扇',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                                         id: 'fan.xiaomi_smart_fan_1',
                                         icons: {'off': 'mdi-fan-off', 'on': 'mdi-fan mdi-spin'}
                                  },
                                  {
                                         position: [2.25, 2.25],
                     width: 0.75,
                     height: 0.75,
                                         type: TYPES.SWITCH,
                     id: "light.bedroom_yeelight2",
                                         bg: 'device/yeelight.jpg',
                                         classes: ["switch-bg"],
                                         //bgOpacity: 0.4,
                                         title: '次卧台灯',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     //icons: {'off': 'mdi-desk-lamp', 'on': 'mdi-desk-lamp'}
                                  }
               ]
            },

            {
               title: '',
               width: 2,
               height: 3,
               items: [
                                                {
                                                   position: [0, 0],
                                                   height: 2,
                                                   title: '天气',
                                                   //classes: ['-compact'], // enable this if you want a little square tile (1x1)
                                                   type: TYPES.WEATHER,
                                                   id: 'group.weather',
                                               bg: 'images/bg02.jpg',
                                               bgOpacity: 1,
                                                   state: '&sensor.heweather_cond_txt.state', // label with weather summary (e.g. Sunny)
                                                   icon: '&sensor.heweather_cond_txt.state',
                                                   //iconImage: '&sensor.heweather_cond_txt.state', // use this one if you want to replace icon with image
                                                   icons: {
                                                          '晴': 'clear',
                                                          '多云': 'cloudy',
                                                          '毛毛雨': 'rain',
                                                          '小雨': 'rain',
                                                          '中雨': 'rain',
                                                          '大雨': 'rain',
                                                          '阵雨': 'rain',
                                                          '极端降雨': 'rain',
                                                          '暴雨': 'rain',
                                                          '大暴雨': 'rain',
                                                          '特大暴雨': 'rain',
                                                          '强阵雨': 'rain',
                                                          '雷阵雨': 'rain',
                                                          '强雷阵雨': 'rain',                                                          
                                                          '雨夹雪': 'sleet',
                                                          '雨雪天气': 'sleet',
                                                          '阵雨夹雪': 'sleet',
                                                          '雷阵雨伴有冰雹': 'sleet',
                                                          '小雪': 'snow',
                                                          '中雪': 'snow',
                                                          '大雪': 'snow',
                                                          '暴雪': 'snow',
                                                          '阵雪': 'snow',
                                                          '有风': 'hazy',
                                                          '微风': 'hazy',
                                                          '和风': 'hazy',
                                                          '清风': 'hazy',
                                                          '强风': 'hazy',
                                                          '疾风': 'hazy',
                                                          '清风': 'hazy',
                                                          '烈风': 'hazy',
                                                          '雾': 'fog',
                                                          '薄雾': 'fog',
                                                          '少云': 'partlycloudy',
                                                          '晴间多云': 'partlycloudy',                                                          
                                                          '阴': 'partlycloudy',
                                                   },
                                                   fields: { // most of that fields are optional
                                                          summary: '&sensor.heweather_cond_txt.state',
                                                          temperature: '&sensor.heweather_tmp.state',
                                                          temperatureUnit: '&sensor.heweather_tmp.attributes.unit_of_measurement',
                                                          windSpeed: '&sensor.heweather_wind_spd.state',
                                                          windSpeedUnit: '&sensor.heweather_wind_spd.attributes.unit_of_measurement',
                                                          humidity: '&sensor.heweather_hum.state',
                                                          humidityUnit: '&sensor.heweather_hum.attributes.unit_of_measurement',

                                                          list: [
                                                                 // custom line
                                                                 '空气质量： '
                                                                        + '&sensor.heweather_qlty.state',

                                                                 // another custom line
                                                                 '气压： '
                                                                        + '&sensor.heweather_pres.state'
                                                                        + '&sensor.heweather_pres.attributes.unit_of_measurement',

                                                                 // yet another custom line
                                                                 '风力：'
                                                                        + '&sensor.heweather_wind_dir.state'
                                                                        + '&sensor.heweather_wind_sc.state'
                                                                    + '级'
                                                          ]
                                                   }
                                                },
                                                {
                                                         position: [0, 2],
                                     width: 2,
                                     height: 1,
                                                         type: TYPES.MEDIA_PLAYER,
                                                         state: false,
                                                         bg: 'images/bg04.jpg',
                                                 bgOpacity: 1,
                                                         id: 'media_player.bt',
                                                         title: '蓝牙音箱',
                                                },
                                                {
                                                   position: [1, 0],
                                                   type: TYPES.DEVICE_TRACKER,
                                                   id: 'device_tracker.xxxxxx',
                                                   map: 'yandex',
                                                   states: {
                                                      home: "Home",
                                                      not_home: "Away",
                                                   },
                                                   zoomLevels: [9, 13], // or [9] for only one map slide
                                                   hideEntityPicture: false, //hide entity pic, if you need only map
                                                   slidesDelay: 2 // delay before first slide animation
                                                },
                                                {
                                                   position: [1, 1],
                                                   type: TYPES.DEVICE_TRACKER,
                                                   id: 'device_tracker.xxxxxx',
                                                   map: 'yandex',
                                                   states: {
                                                      home: "Home",
                                                      not_home: "Away",
                                                   },
                                                   zoomLevels: [9, 13], // or [9] for only one map slide
                                                   hideEntityPicture: false, //hide entity pic, if you need only map
                                                   slidesDelay: 2 // delay before first slide animation
                                                }
                                                
               ]
            }
         ]
      },
     ],
}

