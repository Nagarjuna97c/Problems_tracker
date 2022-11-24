const topicInput = document.querySelector(".topic-input");
const questionInput = document.querySelector(".question-input");
const urlInput = document.querySelector(".url-input");
const notesInput = document.querySelector(".notes-input");

const addProblemBtn = document.querySelector(".add-problem");

async function addProblemToTracker(event) {
  // event.preventDefault();

  const topicValue = topicInput.value.split(",");
  const questionInputValue = questionInput.value;
  const urlInputValue = urlInput.value;
  const notesInputValue = notesInput.value;

  let selectedOption;
  let bookmark;

  document.getElementsByName("progress").forEach((each) => {
    if (each.checked) {
      selectedOption = each.value;
    }
  });

  document.getElementsByName("bookmark").forEach((each) => {
    if (each.checked) {
      bookmark = each.value;
    }
  });

  const problemObject = {
    topic: topicValue,
    questionTitle: questionInputValue,
    questionUrl: urlInputValue,
    notes: notesInputValue,
    questionStatus: selectedOption,
    bookmarked: bookmark,
    Date: new Date(),
  };
  console.log(problemObject);

  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(problemObject),
  };

  await fetch("http://localhost:7000/problemsTracksheet", options);

  questionInput.value = "";
  urlInput.value = "";
  notesInput.value = "";
}
