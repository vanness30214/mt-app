import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import Usermodel from '../../dbs/models/users'

passport.use(new LocalStrategy(async function (username,password,done) {
  let where ={
    username
  };
  let result= await Usermodel.findOne(where)
  if(result!=null){
    if(result.password===password){
      return done(null,result)
    }else {
      return done(null,false,'密码错误')
    }
  }else {
    return done(null,false,'用户不存在')
  }
}))

passport.serializUser(function (user,done) {
  done(null,user)
})
passport.deserialzeUser(function (user,done) {
  return done(null,user)
})

export default passport
