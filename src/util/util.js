import axios from "axios";

export const initializeReduxState = async () => {
  try {
    const response = await axios.get(
      "https://boiling-brook-19149-8ec2377c0615.herokuapp.com/api/v1/problems/by-list/Top 75"
    );
    return response.data; 
  } catch (error) {
    console.error("Error fetching problems data:", error);
  }
  return [{ empty: "empty" }]; // Return an empty array if there's an error
};

export const initializeUser = async () => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
      const returnedUser = await axios.get(
        "https://boiling-brook-19149-8ec2377c0615.herokuapp.com/api/v1/auth/me"
      );
      return returnedUser.data;
    } else {
      console.log("No token found");
      return;
    }
  } catch (error) {
    console.error("Error checking user:", error);
    return;
  }
};

export const filterDifficulty = (allQuestion, input) => {
  let currentQuestion = [];
  currentQuestion = allQuestion.filter((question) => {
    return question.difficulty === input;
  });

  return currentQuestion;
};
export const filterSolved = (allQuestion, input) => {
  let currentQuestion = [];
  let bool = input == "Solved" ? true : false;
  currentQuestion = allQuestion.filter((question) => {
    if (bool) {
      return question.solution.length > 0;
    } else {
      return question.solution.length <= 0;
    }
  });

  return currentQuestion;
};
export const filterStatus = (allQuestion, input) => {
  let currentQuestion = [];
  currentQuestion = allQuestion.filter((question) => {
    return question.status === input;
  });

  return currentQuestion;
};
export const searchInputFilter = (allQuestion, input) => {
  let currentQuestion = [];
  currentQuestion = allQuestion.filter((question) => {
    const searchTitle = question.title.toLowerCase();
    const searchTerm = input.toLowerCase();
    return searchTitle.includes(searchTerm);
  });

  return currentQuestion;
};

export const filterByLists = (listName) => {
  return [];
};
export const filterProblemsByTags = (problems, tags) => {
  return problems.filter((problem) => {
    return tags.some((tag) => problem.tags.includes(tag));
  });
};
