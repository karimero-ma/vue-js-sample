//var Vue = require('vue')
var highlight = function (text, words, tag) {

  // Default tag if no tag is provided
  tag = tag || 'span';

  var len = words.length
  for (var i = 0; i < len; i++) {
    // Global regex to highlights all matches
    var re = new RegExp(StringEscapeUtils.escapeRegExp(words[i]), 'gi');
    // var re = new RegExp(words[i], 'gi');
    if (re.test(text)) {
      text = text.replace(re, '<' + tag + ' class="highlight">$&</' + tag + '>');
    }
  }
  return text;
}


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
      { name: 'Visual ^Basic', type: 'compiler' },
      { name: 'Visual ¥¥Basic', type: 'compiler' },
    ]
  },

  computed: {
    doFilterName: function () {
      var type = this.type;
      var filterText = this.filterText;
      var items = this.items;

      if (!filterText || filterText === '') {
        return items;
      }
      return items.filter(function (item) {
        var before = item.name;
        var after = highlight(item.name, filterText.split(' '));
        if (before !== after) {
          item.highlight = after;
          return true;
        } else {
          return false;
        }
      })
    },

  },
  methods: {
    filterTextClear: function () {
      this.filterText = '';
      this.type = 'all';
    },
    highlight: function (item) {
      if (this.filterText.length > 0 && item.highlight && item.highlight.length > 0) {
        return item.highlight;
      } else {
        return item.name;
      }
    }
  }
});
