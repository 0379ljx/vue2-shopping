// 登录相关接口请求
import request from '@/utils/request'
// 1.获取图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}

// 获取短信验证码
export const getMagCode = (captchaCode, captchakey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchakey,
      mobile

    }
  })
}

// 登录接口
export const codeLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      mobile,
      partyData: {},
      smsCode
    }
  })
}
