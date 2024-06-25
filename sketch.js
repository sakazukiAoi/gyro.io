function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  // デバイスのオリエンテーションの権限リクエスト
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    // iOS 13+ の場合
    DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation);
        } else {
          alert('デバイスのオリエンテーションへのアクセスが拒否されました。');
        }
      })
      .catch(console.error);
  } else {
    // Androidや他の環境の場合
    window.addEventListener('deviceorientation', handleOrientation);
  }
}

function draw() {
  // 描画処理
}

function handleOrientation(event) {
  let tiltX = event.gamma; // 左右の傾き
  let tiltY = event.beta;  // 前後の傾き

  // 傾きを利用して何かする
  background(220);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(`Tilt X: ${tiltX.toFixed(2)}`, width / 2, height / 2 - 20);
  text(`Tilt Y: ${tiltY.toFixed(2)}`, width / 2, height / 2 + 20);
}
