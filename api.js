export const APIs = (() => {
  const url = "http://localhost:3000/goals";

  const getGoals = () => fetch(url).then((data) => data.json());

  const createGoal = (newGoal) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
    }).then((res) => res.json());
  };

  const updateGoal = (id, updatedData) => {
    return fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
  };

  return {
    getGoals,
    createGoal,
    updateGoal,
  };
})();
