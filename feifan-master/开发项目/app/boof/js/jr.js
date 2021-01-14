var creat_video = function() {
            var _video = document.getElementsByClassName('video-i');
            if (_video.length > 0) {
                for (var i = 0; i < _video.length; i++) {
                    var _that = _video[i];
                    _that.addEventListener('click', function(e) {
                        var _this = e.currentTarget,
                            _videoUrl = _this.getAttribute('data-src'),
                            _img = _this.children[0].getAttribute('src'),
                            _dom = document.createElement('video'),
                            _autoPlayAllowed = true,
                            _loading = document.createElement('div'),
                            _p,
                            _process = document.createElement('i');
                            _noSound = document.createElement('em');
                        if (_this.getAttribute('data-video')) {
                            var _video = _this.parentNode.querySelectorAll('video');
                            var _noSound = _this.parentNode.querySelectorAll('.no-sound');
                            if (_video.length > 0) {
                                _dom = _video[0];
                                // if (_dom.ended) {
                                if (isIPhone) {
                                    //修改Ios11状态不准，视频无法播放的问题
                                    if (_dom.src.indexOf('random') > -1) {
                                        _dom.src = _dom.src.split('random=')[0] + 'random=' + _dom.src.split('random=')[1] + 1;
                                    } else {
                                        _dom.src = _dom.src + '?random=' + Math.floor(Math.random() * (100 - 10 + 1) + 10);
                                    }
                                }
                                _noSound[0].classList.remove('hide');
                                _dom.play();
                                _this.classList.add('hide');
                                _dom.classList.remove('hide');
                                // }
                            }
                            return;
                        }
                        _this.setAttribute('data-video', '1');
                        _process.setAttribute('class', 'vjs-process');
                        _process.innerHTML = '加载中...';
                        _loading.setAttribute('class', 'vjs-loading-spinner');
                        _dom.setAttribute('src', _videoUrl);
                        _dom.setAttribute('controls', 'controls');
                        _dom.setAttribute('autoPlay', 'false');
                        // _dom.setAttribute('x5-video-player-type', 'h5');
                        _this.parentNode.appendChild(_loading);
                        _this.parentNode.appendChild(_process);
                        _this.parentNode.classList.add('vjs-waiting');
                        _noSound.setAttribute('class', 'no-sound');
                        _noSound.innerHTML = '无声';
                        // _dom.setAttribute('webkit-playsinline', 'webkit-playsinline');
                        // _dom.setAttribute('playsinline', 'playsinline');
                        _dom.setAttribute('poster', _img);
                        _p = _dom.play();
                        console.time("加载毫秒");
                        var _dom_buffered_promise = function() {
                            var _end = _dom.buffered.end(0);
                            var _duration = _dom.duration;
                            var _a = Math.round(_end / _duration * 100);
                            _process.innerHTML = _a + '%';
                            console.log(_end + ' ' + _duration)
                            if (_a < 10) {
                                setTimeout(_dom_buffered, 200);
                            } else {
                                _dom_buffered();
                            }
                        };
                        var _dom_buffered = function() {
                            _this.parentNode.classList.remove('vjs-waiting');
                            _this.classList.add('hide');
                            _process.classList.add('hide');
                            _this.parentNode.appendChild(_dom);
                            _this.parentNode.appendChild(_noSound);
                            _dom.addEventListener('ended', function() {
                                _dom.classList.add('hide');
                                _this.classList.remove('hide');
                                _noSound.classList.add('hide');
                            });
                            _dom.currentTime = 0;
                            console.timeEnd("加载毫秒");
                        };
                        if (_p instanceof Promise) {
                            _p.catch(function(error) {
                                console.log(error.message);
                                if (error.name === 'NotAllowedError') {
                                    _autoPlayAllowed = false;
                                }
                            }).then(function(e) {
                                if (_autoPlayAllowed) {
                                    _dom_buffered_promise();
                                }
                            });
                        } else {
                            //ios8-9拿不到promise需要给个延时处理
                            setTimeout(function() {
                                _dom_buffered();
                            }, 4000);
                        }
                    });
                }
            }
        };

new creat_video();