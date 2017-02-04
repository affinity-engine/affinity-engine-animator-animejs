/* jshint ignore:start */
import Ember from 'ember';
import anime from 'ember-animejs';

export default Ember.Service.extend({
  animate($element, effect, options) {
    return new Ember.RSVP.Promise((resolve) => {
      if (!options.easing) { options.easing = 'easeInOutSine'; }
      if (options.duration === 0) { options.duration = 1; }

      anime({
        targets: $element.get(0),
        complete: resolve,
        ...options,
        ...effect
      });
    });
  }
});
