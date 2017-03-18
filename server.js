/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const express = require('express');
const youtubeStream = require('youtube-audio-stream');

const app = express();

// Streaming audio
app.get('/audio', function(req, res) {
  var requestUrl = 'http://youtube.com/watch?v=' + req.query.videoId;
  try {
    youtubeStream(requestUrl, { quality : !!req.query.quality ? req.query.quality : 'highest' }).pipe(res)
  } catch (exception) {
    res.status(500).send(exception)
  }
});

app.listen(3002, function() {
 console.log(`The server is running at http://localhost:3002/`);
});
