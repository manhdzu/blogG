const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const post = ({
//    title: {
//       type: String,
//       required: true
//    },
//    body: {
//       type: String,
//       required: true
//    },
//    author: {
//       type: String,
//       required: true
//    },
//    date: {
//       type: Date,
//       default: Date.now
//    },
//    likeCount: {
//       type: Number,
//       default: 0
//    }
// }, {
//    timestamps: true 
// });

const PostSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true
      },
      body: {
         type: String,
         required: true
      },
      author: {
         type: String,
         required: true
      },
      date: {
         type: Date,
         default: Date.now
      },
      likeCount: {
         type: Number,
         default: 0
      }
   }, {
      timestamps: true 
   }
);

module.exports = mongoose.model("posts", PostSchema);