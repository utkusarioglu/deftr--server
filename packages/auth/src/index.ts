require('dotenv').config({
  path: require('path').join(__dirname, '../../../.env'),
});
import passport from 'passport';
import { Application } from 'express';
import passportLocal from 'passport-local';
import expressSession from 'express-session';

const LocalStrategy = passportLocal.Strategy;

export function enableSession(app: Application) {
  const expressSessionInit = expressSession({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  });
  app.use(expressSessionInit);
}

export function enableAuth(app: Application) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy((username, password, done) => {
      if (username === 'utku' && password == '1') {
        return done(null, { username, password });
      }
      return done(null, false);
    })
  );
  passport.serializeUser((user, done) => {
    console.log('serializer', user);
    done(JSON.stringify(user));
  });
  passport.deserializeUser((userId: string, done) => done(JSON.parse(userId)));

  app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      console.log('auth', user);
      if (err) {
        console.log('auth err', err);
        return next(err);
      }

      if (!user) {
        return res.send({ message: 'fail' });
      }
      console.log('before req login');
      req.logIn(user, (err) => {
        console.log('login fun');
        if (err) {
          console.log('err\n', err);
          return next(err);
        }
        return res.send({ message: 'login success' });
      });
    })(req, res, next);
  });
}
