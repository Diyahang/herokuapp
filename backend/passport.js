const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const dotenv = require("dotenv")
dotenv.config();

const GOOGLE_CLIENT_ID =
  // "596754862245-qahk2ulmrksl9tqtmqgn50dd5gkso1gm.apps.googleusercontent.com";
  "186329547645-acapce6mbsovundj74jp0c21417cn5vo.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = 
// "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";
"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";

const GITHUB_CLIENT_ID = 
// "ea38bdb3f1f56908ff78";
"4aeca64a89887d2cc6c1";
const GITHUB_CLIENT_SECRET = 
// "d4dd68a98f661fd8667bdc303baa4ba63e29ea6e";
"a6681739bfb51aca8c4f84d673ab86f5f8821dd5"

const FACEBOOK_APP_ID = "your id";
const FACEBOOK_APP_SECRET = "your id";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});