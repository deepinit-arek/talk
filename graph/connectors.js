// Errors.
const errors = require('../errors');

// Models.
const Action = require('../models/action');
const Asset = require('../models/asset');
const Comment = require('../models/comment');
const Setting = require('../models/setting');
const User = require('../models/user');

// Services.
const Actions = require('../services/actions');
const Assets = require('../services/assets');
const Cache = require('../services/cache');
const Comments = require('../services/comments');
const DomainList = require('../services/domainlist');
const I18n = require('../services/i18n');
const Jwt = require('../services/jwt');
const Karma = require('../services/karma');
const Kue = require('../services/kue');
const Limit = require('../services/limit');
const Mailer = require('../services/mailer');
const Metadata = require('../services/metadata');
const Migration = require('../services/migration');
const Mongoose = require('../services/mongoose');
const Passport = require('../services/passport');
const Plugins = require('../services/plugins');
const Pubsub = require('../services/pubsub');
const Redis = require('../services/redis');
const Regex = require('../services/regex');
const Scraper = require('../services/scraper');
const Settings = require('../services/settings');
const Setup = require('../services/setup');
const Subscriptions = require('../services/subscriptions');
const Tags = require('../services/tags');
const Tokens = require('../services/tokens');
const Users = require('../services/users');
const Wordlist = require('../services/wordlist');

// Connector.
const connectors = {
  errors,
  models: {
    Action,
    Asset,
    Comment,
    Setting,
    User,
  },
  services: {
    Actions,
    Assets,
    Cache,
    Comments,
    DomainList,
    I18n,
    Jwt,
    Karma,
    Kue,
    Limit,
    Mailer,
    Metadata,
    Migration,
    Mongoose,
    Passport,
    Plugins,
    Pubsub,
    Redis,
    Regex,
    Scraper,
    Settings,
    Setup,
    Subscriptions,
    Tags,
    Tokens,
    Users,
    Wordlist,
  },
};

module.exports = connectors;
