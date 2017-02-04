export default {
  priority: 2,
  global: {
    animationLibrary: 'animejs',
    transition: {
      duration: 250,
      effect: { opacity: 1 }
    },
    transitionDuration: 200,
    transitionIn: {
      duration: 250,
      effect: { opacity: [0, 1] }
    },
    transitionOut: {
      duration: 250,
      effect: { opacity: 0 }
    },
    lxlTransition: {
      effect: {
        opacity: [0, 1]
      },
      rate: 25
    }
  },
  registrant: {
    'affinity-engine': {
      'animator': {
        path: 'service:affinity-engine/animator-animejs'
      }
    }
  }
};
