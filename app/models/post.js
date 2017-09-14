'use strict'

const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  _owner: {
    // what's this pointing to?
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    // what is this doing?
    transform: function (doc, ret, options) {
      const userId = (options.user && options.user_id) || false
      ret.editable = userId && userId.equals(doc._owner)
      return ret
    }
  }
})

// Place virtuals here

const Post = mongoose.model('Post', postSchema)

module.exports = Post
