/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: 'ac9f8893e63b45168aa20249d9d636cb',
    title: '松饼 早安',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}

      湿度: {{shidu.DATA}}  
      
      空气质量指数:{{aqi.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是主人与小狗的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
  {
    id: 'ac9f8893e63b45168aa20249d9d636cb',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
