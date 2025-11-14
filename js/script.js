const items = document.querySelectorAll(".faq__item");

items.forEach((item) => {
  const question = item.querySelector(".faq__question");
  const answer = item.querySelector(".faq__answer");
  const number = item.querySelector(".faq__number");
  const text = item.querySelector(".faq__text");
  const icon = item.querySelector(".faq__icon");

  // скрываем высоту
  answer.style.maxHeight = "0px";

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    // закрываем другие
    items.forEach((other) => {
      if (other !== item) {
        other.classList.remove("active");
        const otherAnswer = other.querySelector(".faq__answer");
        const otherNumber = other.querySelector(".faq__number");
        const otherText = other.querySelector(".faq__text");
        const otherIcon = other.querySelector(".faq__icon");

        otherAnswer.style.maxHeight = "0px";
        otherNumber.style.color = "#ffffff";
        otherText.style.color = "#ffffff";
        otherIcon.src = "./icons/cross.svg";
        otherIcon.style.transform = "rotate(0deg)";
      }
    });

    // переключаем текущий
    if (!isOpen) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";

      number.style.color = "#c5ff66";
      text.style.color = "#c5ff66";
      icon.src = "./icons/cross--green.svg";
      icon.style.transform = "rotate(45deg)";
    } else {
      item.classList.remove("active");
      answer.style.maxHeight = "0px";

      number.style.color = "#ffffff";
      text.style.color = "#ffffff";
      icon.src = "./icons/cross.svg";
      icon.style.transform = "rotate(0deg)";
    }
  });
});
