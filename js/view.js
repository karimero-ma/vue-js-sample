var highlight = function (text, words, tag) {
  text = StringEscapeUtils.escapeHtml(text);
  tag = tag || 'span';

  var re = new RegExp(
    StringEscapeUtils.escapeHtml(
      StringEscapeUtils.escapeRegExp(words)), 'gi');

  if (re.test(text)) {
    text = text.replace(re, '<' + tag + ' class="highlight">$&</' + tag + '>');
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
      { name: 'Visual *Basic', type: 'compiler' },
      { name: 'Visual ?Basic', type: 'compiler' },
      { name: 'Visual ¥¥Basic', type: 'compiler' },
      { name: '<a href="http://yahoo.co.jp">yahoo</a>', type: 'compiler' },
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
        var before = StringEscapeUtils.escapeHtml(item.name);
        var after = highlight(item.name, filterText);
        if (before !== after) {
          item.highlight = after;
          return true;
        } else {
          return false;
        }
      });
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
        return StringEscapeUtils.escapeHtml(item.name);
      }
    }
  }
});
