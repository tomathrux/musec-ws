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
const request = require('request');
const cors = require('cors');

const app = express();
app.use(cors());


// Streaming audio
app.get('/audio', function(req, res) {
  var requestUrl = 'http://youtube.com/watch?v=' + req.query.videoId;
  try {
    youtubeStream(requestUrl, { quality : !!req.query.quality ? req.query.quality : 'highest' }).pipe(res)
  } catch (exception) {
	
  }
});

// Predictive searching
app.get('/suggest', function(req, res) {
	var requestUrl = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' + req.query.term;
	try {
	  req.pipe(request(requestUrl)).pipe(res);			
	} catch (exception) {
	  console.log(exception);
	}
})

app.listen(3002, function() {
 console.log(`The server is running at http://localhost:3002/`);
});
