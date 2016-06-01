import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return[
      {
        title: 'Favorite Things',
        items: [
          { content: 'Cats'},
          { content: 'Dogs'},
          { content: 'Cthulu'},
          { content: 'Scotch'},
        ]

      }, {
        title: 'TODOS',
        items: [
          { content: 'Learn Javascript'},
          { content: 'Learn Ember' },
          { content: 'Learn Express'}
        ]
      }
    ];
  },
});
