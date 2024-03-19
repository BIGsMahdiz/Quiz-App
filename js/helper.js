const formatData = (questionData) => {
  const result = questionData.map((item) => {
    const questionObject = { question: item.question };
    const category = item.category;
    const answers = [...item.incorrect_answers];
    const correctAnswersIndex = Math.floor(Math.random() * 4);
    answers.splice(correctAnswersIndex, 0, item.correct_answer);
    questionObject.category = category;
    questionObject.answers = answers;
    questionObject.correctAnswersIndex = correctAnswersIndex;
    return questionObject;
  });
  return result;
};

export default formatData;
