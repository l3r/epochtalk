'use strict';
var couchapp = require('couchapp'),
    path = require('path');

var ddoc = {
  _id: '_design/epochtalk',
  views: {},
  lists: {},
  shows: {} 
};

module.exports = ddoc;

ddoc.views.boards = {
  map: function(doc) {
    if (doc.type === 'board') emit(doc._id, doc);
  }
};
ddoc.views.threads = {
  map: function(doc) {
    if (doc.type === 'thread') emit(doc._id, doc);
  }
};
ddoc.views.posts = {
  map: function(doc) {
    if (doc.type === 'post') emit(doc._id, doc);
  }
};


ddoc.views.topics = {
  map: function(doc) {
    if (doc.type === 'topic') emit(doc._id, doc);
  }
};

ddoc.views.topicsByBoard = {
  map: function(doc) {
    if (doc.type === 'topic') emit(doc.ID_BOARD, doc);
  }
};

ddoc.views.messagesByTopic = {
  map: function(doc) {
    if (doc.type === 'message') emit([doc.ID_TOPIC, doc.posterTime], doc);
  }
};

ddoc.views.messages = {
  map: function(doc) {
    if (doc.type === 'message') emit(doc.ID_MSG, doc);
  }
};
