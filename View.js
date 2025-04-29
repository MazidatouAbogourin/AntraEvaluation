export const View = (() => {
  const goal = document.querySelector("#goal");
  const categoryEl = document.querySelector("#category");
  const repititionEl = document.querySelector("#repition");
  const listItems = document.querySelector(".output");
  const addBtn = document.querySelector(".add-btn");

  const renderGoals = (goals) => {
    goals.forEach((element) => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = element.description;
      const bold = document.createElement("em");
      bold.textContent = element.category;
      const span2 = document.createElement("span");
      span2.textContent = `(${element.repitions})`;
      const button = document.createElement("button");
      button.classList.add("btn-update");
      button.textContent = !element.achieved ? "Mark as achieved " : "achieved";
      div.id = element.id;
      div.appendChild(span);
      div.appendChild(bold);
      div.appendChild(span2);
      div.appendChild(button);
      div.classList.add("goal_el");

      listItems.appendChild(div);
    });
  };

  const getValues = () => {
    const description = goal.value;
    const category = categoryEl.value;
    const repitions = repititionEl.value;

    if (description == "" || category == "" || repitions == "") {
      alert("Add value that are missing");
      return "";
    }

    return {
      description,
      category,
      repitions,
      achieved: false,
    };
  };

  const clearInput = () => {
    goal.value = " ";
    categoryEl.value = "";
    repititionEl.value = "";
  };

  return {
    renderGoals,
    addBtn,
    getValues,
    clearInput,
    listItems,
  };
})();
