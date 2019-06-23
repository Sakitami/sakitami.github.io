const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "一花依世界",
        artist: '洛天依',
        url: 'http://www.ytmp3.cn/down/51653.mp3',
        cover: 'https://tvax1.sinaimg.cn/large/005BYqpggy1g4bimwpcaij30zk0spn2d.jpg',
      },
      {
        name: '不老不死【异托邦LOVETOPIA】',
        artist: '洛天依',
        url: 'dist/不老不死.mp3',
        cover: 'https://tvax1.sinaimg.cn/large/005BYqpggy1g4bix0p6p9j30ee0k2wq9.jpg',
      }
    ]
});
