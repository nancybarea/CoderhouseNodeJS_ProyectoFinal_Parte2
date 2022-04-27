import dotenv from 'dotenv';

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 8000,
  MONGO_URL: process.env.MONGO_URL||'noURL',
  MONGO_DB: process.env.MONGO_BASE||'ecommerce',
  MONGO_SESSION_URL: process.env.SESSION_URL||'noURL',
  SESSION_MAXAGE: process.env.SESSION_MAXAGE || 600000,
  SECRET:process.env.SECRET || 'Thebestteam9',
  //CORS_ORIG: process.env.CORS_ORIG || '*',
  TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA|| 'Mongo'  
}
