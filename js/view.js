//var Vue = require('vue')
new Vue({
  el: '#seachItems',
  data: {
    filterText: '',
    items: [
      { name: 'Java', match: true },
      { name: 'C', match: false },
      { name: 'PHP', match: true },
      { name: 'Ruby', match: true },
      { name: 'Perl', match: false },
      { name: 'JavaScript', match: true },
      { name: 'Python', match: true },
      { name: 'C#', match: false },
      { name: 'Visual Basic', match: true },
    ]
  },

  computed: {
    doFilterName: function () {
      console.log(this.filterText);

      for (var item of this.items) {
        if (this.filterText === '') {
          item.match = true;
        } else {
          var upperName = item.name.toUpperCase();
          item.match = upperName.indexOf(this.filterText.toUpperCase()) >= 0;
        }
      }
      return this.items;
    }
  }
});
