import Ember from 'ember';

export default Ember.Route.extend({
  model(url) {
    return fetch(`https://tiny-tn.herokuapp.com/collections/runs-jf/${url._id}`)
      .then(resp => resp.json());
  },
});
