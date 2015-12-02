# VideoJS Audio Tracks

A Videojs plugin to use with video files that contain multiple audio tracks. Useful for audio descriptions, director commentary, and additional languages.

## Note

As this plugin uses the [Audio Tracks API](http://caniuse.com/#search=audio%20tracks), it is only available in IE 11+ &amp; Safari 8+. Also, it will not work in the Videojs Flash fallback.

## Usage

Include:
* `videojs-audio-tracks.min.css`
* `videojs-audio-tracks.min.js`

```js
  var player = videojs('example-video');
  player.AudioTracks({
    default: 0,
    descriptive: 1
  });
```

## Example

[Example using Video.js 5](https://sprice.github.io/videojs-audio-tracks/)

## Support

Browser testing for this project has been graciously donated by [BrowserStack](https://www.browserstack.com).

## License

Licesned Apache 2. See LICENSE file.
