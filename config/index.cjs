/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  //USE_PASSAGE: 'push-plus'
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb07ce9921e6073b8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd1c2e2091f418279361fac2bbab86039',

  PROVINCE: '广东',
  CITY: '东莞',
  openUrl:'https://chat.52amz.com/chat'
  USERS: [
    {
      // 想要发送的人的名字
      name: '小狗',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2w1k6ZltziJbkjAM1TZ87NkB_cA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'skESTq1n4JXJv2PxWDUwb_6Z8drgjd471uCGamZKuF0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-11',
      horoscopeDateType: '今日',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '松饼', year: '1999', date: '04-11',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '阿什', year: '2000', date: '10-31',
        },
        {
          type: '节日', name: '小狗日', year: '2024', date: '02-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-01-25' },
        // 结婚纪念日
      //  { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'skESTq1n4JXJv2PxWDUwb_6Z8drgjd471uCGamZKuF0',

  CALLBACK_USERS: [
    {
      name: 'Ashe',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2w1k6ZltziJbkjAM1TZ87NkB_cA',
    }
  ],

}

module.exports = USER_CONFIG

