const questions = document.querySelectorAll(".quest");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const symbol = question.querySelector("span");

    const answers = document.querySelectorAll(".answer");

    answers.forEach((ans) => {
      ans.classList.remove("show");
      ans.previousElementSibling.querySelector("span").textContent = "+";
    });

    if (!answer.classList.contains("show")) {
      answer.classList.add("show");
      symbol.textContent = "-";
    } else {
      answer.classList.remove("show");
      symbol.textContent = "+";
    }
  });
});
