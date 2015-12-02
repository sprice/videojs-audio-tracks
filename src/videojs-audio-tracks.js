let videojs = require('video.js');
let Component = videojs.getComponent('Component');
let Button = videojs.getComponent('Button');

class AudioDescriptionToggle extends Button {

  constructor(player, options){
    super(player, options);

    this.currentAudioTrack = 0;
    this.previousAudioTrack = 0;
    this.defaultAudioTrack = options.trackSettings.default;
    this.descriptiveAudioTrack = options.trackSettings.descriptive;
    this.tracks = options.tracks;
  }

  buildCSSClass() {
    return `vjs-audio-description-control ${super.buildCSSClass()}`;
  }

  handleClick() {
    if (this.tracks[this.defaultAudioTrack].enabled) {
      this.tracks[this.defaultAudioTrack].enabled = false;
      this.tracks[this.descriptiveAudioTrack].enabled = true;
      this.addClass('vjs-da-enabled');
    } else if (this.tracks[this.descriptiveAudioTrack].enabled) {
      this.tracks[this.defaultAudioTrack].enabled = true;
      this.tracks[this.descriptiveAudioTrack].enabled = false;
      this.removeClass('vjs-da-enabled');
    }
  }
}

AudioDescriptionToggle.prototype.controlText_ = 'Audio Description';
videojs.registerComponent('AudioDescriptionToggle', AudioDescriptionToggle);

let AudioTracks = function(options) {

  let player = this;
  player.on('loadeddata', function () {

    let videoEl = player.el().getElementsByTagName('video')[0];
    let audioTracks = videoEl.audioTracks;

    if (audioTracks) {
      let buttonOptions = {
        trackSettings: options,
        tracks: audioTracks
      };
      this.controlBar.addChild('AudioDescriptionToggle', buttonOptions);
    }
  });
};

videojs.plugin('AudioTracks', AudioTracks);
