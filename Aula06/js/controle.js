(function () {
    let delay = 3000;
  
    let label = document.getElementById('label');
    let value = parseInt(label.textContent);
  
    let progress = document.getElementById('progress');
  
    let resumeBtn = document.getElementById('resume');
    let pauseBtn = document.getElementById('pause');
    let resetBtn = document.getElementById('reset');
  
    let t = new timer(function () {
      label.textContent = ++value;
    }, delay);
  
    progress.style.animationDuration = delay + "ms";
  
    resumeBtn.addEventListener("click", function () {
      t.resume();
  
      pauseBtn.classList.remove('disabled');
      resumeBtn.classList.add('disabled');
      resetBtn.classList.add('disabled');
  
      progress.classList.add('animate');
      progress.classList.remove('pause');
    });
  
    pauseBtn.addEventListener('click', function () {
      t.pause();
  
      pauseBtn.classList.add('disabled');
      resumeBtn.classList.remove('disabled');
      resetBtn.classList.remove('disabled');
  
      progress.classList.add('pause');
    });
  
    resetBtn.addEventListener('click', function () {
      t.reset();
  
      pauseBtn.classList.add('disabled');
      resumeBtn.classList.remove('disabled');
      resetBtn.classList.add('disabled');
  
      progress.classList.remove('animate');
      void progress.offsetWidth;
      progress.classList.add('animate');
    });
  })();
  
  function timer(callback, delay) {
    var timerId;
    var start;
    var remaining = delay;
  
    this.pause = function () {
      window.clearTimeout(timerId);
      remaining -= new Date() - start;
    };
  
    var resume = function () {
      start = new Date();
      timerId = window.setTimeout(function () {
        remaining = delay;
        resume();
        callback();
      }, remaining);
    };
    this.resume = resume;
  
    this.reset = function () {
      remaining = delay;
    };
  }