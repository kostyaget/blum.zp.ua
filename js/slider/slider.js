let data = [
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/box1093_all_1485584.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/box1713_all_891473.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/box1806_all_1144445.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/box1978_all_822986.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/box1344_all_834558.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/box1345_all_896894.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/box1457_all_520518.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/box1847_all_1765965.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/lbx0134_all_717966.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/lbx0138_all_702027.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/lbx0140_all_661507.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/lbx0145_all_768632.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/lbx0147_all_900560.png?raw=true",
        "https://github.com/kostyaget/blum.zp.ua/blob/main/images/Slider/lbx0171_all_990633.png?raw=true",
      ];

      let slider = document.getElementById("slider");
      let index = 0, images /* список <img> внутри slider */;

      (function __init__() {
        slider.innerHTML = data.map(src => `<img src="${src}">`).join("");

        images = slider.querySelectorAll("img");
        images[index].classList.add("opaque");
      })();

      function next() {
        images[index].classList.remove("opaque");
        index = (index + 1) % images.length;
        images[index].classList.add("opaque");
      }

      function prev() {
        images[index].classList.remove("opaque");
        index = (index - 1 + images.length) % images.length;
        images[index].classList.add("opaque");
      }

      (function _loop() {
        next();
        setTimeout(_loop, 4000);
      })();