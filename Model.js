export const Model = (() => {
  class State {
    #goals = [];
    #onChange = () => {};

    get goals() {
      return this.#goals;
    }

    set goals(newGoalList) {
      this.#goals = newGoalList;
      console.log("hi");
      this.#onChange();
    }

    addgoalList(newGoalList) {
      this.#goals = [...this.goals, newGoalList];
    }

    updategoalList(id) {
      // this.#goals = this.#goals.map((el) =>
      //   el.id === id ? { ...el, achieved: !el.achieved } : el
      // );
      console.log("inside the variable" + this.#goals);

      this.#onChange();
    }

    subscribe(fn) {
      this.#onChange = fn;
    }
  }

  return {
    State,
  };
})();
