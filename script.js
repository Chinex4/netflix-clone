const questions = document.querySelectorAll(".quest");

questions.forEach((quest) => {
  quest.addEventListener("click", () => {
    const answers = document.querySelectorAll('.answers')
    console.log(answers)
    // if (!answer.classList.contains("show")) {
    //   answer.classList.add("show");
    // } else {
    //   answer.classList.remove("show");
    // }
  });
});
