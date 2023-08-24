window.addEventListener("DOMContentLoaded", function () {
  //slider
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const sliderItems = document.querySelectorAll(".slider-item");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  const chooseProductLi = document.querySelectorAll(".choose-product-li");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length;
  //width: 9500px;
  let positionX = 0;
  let index = 0;
  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  [...dotItems].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...dotItems].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      positionX = -1 * index * sliderItemWidth;
      sliderMain.style = `transform:translateX(${positionX}px)`;
    })
  );
  function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index >= slidesLength - 1) {
        index = slidesLength - 1;

        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform:translateX(${positionX}px)`;
      index++;
      console.log(sliderMain);
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform:translateX(${positionX}px)`;
      index--;
      console.log(positionX);
    }
    [...dotItems].forEach((el) => el.classList.remove("active"));
    dotItems[index].classList.add("active");
  }
  //   let interval = setInterval(function () {
  //     handleChangeSlide(1);
  //   }, 3500);
  [...chooseProductLi].forEach((item) =>
    item.addEventListener("click", function (li) {
      const indexItem = parseInt(li.target.dataset.index);
      li.preventDefault();

      switch (indexItem) {
        case 1:
          window.location.href = "./html/iPhone.html";
          break;
        case 2:
          window.location.href = "./html/Mac.html";
          break;
        case 3:
          window.location.href = "./html/ipad.html";
          break;
        case 4:
          window.location.href = "./html/watch.html";
          break;
        case 5:
          window.location.href = "./html/amthanh.html";
          break;
        case 6:
          window.location.href = "./html/phukien.html";
          break;
        default:
          break;
      }
    })
  );
});
