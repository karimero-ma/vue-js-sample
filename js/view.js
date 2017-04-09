//var Vue = require('vue')

new Vue({
  el: '#seachItems',
  data: {
    filterText: '',
    type: 'all',
    items: [
      { name: 'Java', type: 'compiler' },
      { name: 'C', type: 'compiler' },
      { name: 'PHP', type: 'script' },
      { name: 'Ruby', type: 'script' },
      { name: 'Perl', type: 'script' },
      { name: 'JavaScript', type: 'script' },
      { name: 'Python', type: 'script' },
      { name: 'C#', type: 'compiler' },
      { name: 'Visual Basic', type: 'compiler' },
    ]
  },

  computed: {
    doFilterName: function () {
      var type = this.type;
      var filterText = this.filterText;
      return this.items.filter(function (item) {
        var filter = item.name.toUpperCase().indexOf(filterText.toUpperCase()) > -1;

        var isType = type === 'all' || type === item.type;
        return filter && isType;
      })
    }
  },

  methods: {
    filterTextClear: function () {
      this.filterText = '';
      this.type = 'all';
    }
  }
});
