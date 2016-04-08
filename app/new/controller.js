import Ember from 'ember';

export default Ember.Controller.extend({
  submitForm() {
    const attributes = {
      time: this.time,
      date: this.date,
      notes: this.notes,
    };
    fetch(`https://tiny-tn.herokuapp.com/collections/runs-jf`, {
      method: `POST`,
      headers: {
        Accept: `application/JSON`,
        'Content-type': `application/JSON`,
      },
      body: JSON.stringify(attributes),
    }).then((r) => r.json())
    .then((newRun) => {
      this.clearForm();
      this.addNewRun(newRun);
      this.transitionToRoute(`index`);
    });
  },

  cancelForm() {

  },

  clearForm() {
    this.set(`time`, ``);
    this.set(`date`, ``);
    this.set(`notes`, ``);
  },

  addNewRun(run) {
    this.set(`model`, [run, ...this.model]);
  },
});
