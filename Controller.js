import { APIs } from "./api.js";
import { Model } from "./Model.js";
import { View } from "./View.js";

const Controller = ((api, model, view) => {
  const state = new model.State();
  const addGoal = (e) => {
    e.preventDefault();
    const getInputValues = view.getValues();
    if (getInputValues == "") {
      view.clearInput();
      return;
    }
    api.createGoal(getInputValues).then((newGoal) => {
      view.clearInput();
      state.addgoalList(newGoal);
    });
  };

  const changeAchieveStatus = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("btn-update")) {
      const parentId = e.target.parentElement.id;

      const val = e.target.value == "Mark as achieved" ? false : true;
      console.log(val);

      // console.log(val);
      api.updateGoal(parentId, { achieved: val }).then((data) => {
        console.log(data);
      });
    }
  };

  const init = () => {
    state.subscribe(() => {
      view.renderGoals(state.goals);
    });

    api.getGoals().then((goals) => {
      console.log(goals);
      state.goals = goals;
    });

    view.addBtn.addEventListener("click", addGoal);
    view.listItems.addEventListener("click", changeAchieveStatus);
  };

  return {
    init,
  };
})(APIs, Model, View);

Controller.init();

console.log("hello");
