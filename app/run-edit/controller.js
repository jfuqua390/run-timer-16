import Ember from 'ember';

export default Ember.Controller.extend({
  submitForm() {
    const attributes = this.model;

    fetch(`https://tiny-tn.herokuapp.com/collections/runs-jf/${attributes._id}`, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((r) => r.json())
    .then((data) => {
      this.transitionToRoute(`run-detail`, data._id);
    });
  },

  cancelForm() {

  },


});
