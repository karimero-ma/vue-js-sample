//var Vue = require('vue')

// register the grid component
Vue.component('list-view', {
  template: '#list-view-template',
  props: {
    data: Array,
    filterKey: String
  },
  data: function () {
    var items = {}
    return {
      name: this.data
    }
  },
  computed: {
    doFilterName: function () {
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      return data
    }
  },
  methods: {
    showPgName: function () {
      alert(this.name);
    }
  }
});

Vue.component('list-view2', {
  template: '#list-view-template2',
  props: {
    data: Array,
    filterKey: String
  },
  data: function () {
    var items = {}

    return {
      name: this.data
    }
  },
  computed: {
    doFilterName: function () {
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      return data
    }
  },
  methods: {
    showPgName: function (index) {
      alert(this.data[index].name);
    }
  }
});

new Vue({
  el: '#seachItems',
  data: {
    template: 'template1',
    filterText: '',
    items: [
      { name: 'Java', description: 'Java（ジャバ）は、狭義ではオブジェクト指向プログラミング言語Javaであり、広義ではプログラミング言語Javaのプログラムの実行環境および開発環境をいう。', match: true },
      { name: 'C', description: 'C言語（シーげんご）は、1972年にAT&Tベル研究所のデニス・リッチーが主体となって開発したプログラミング言語である。', match: false },
      { name: 'PHP', description: 'PHP（ピー・エイチ・ピー）は "The PHP Development Team" によってコミュニティベースで開発されているオープンソースの汎用プログラミング言語であり、特にサーバーサイドで動的なウェブページ作成するための機能を多く備える。 ', match: true },
      { name: 'Ruby', description: 'Ruby（ルビー）は、まつもとゆきひろ（通称 Matz）により開発されたオブジェクト指向スクリプト言語であり、スクリプト言語が用いられてきた領域でのオブジェクト指向プログラミングを実現する。', match: true },
      { name: 'Perl', description: 'Perl（パール）とは、ラリー・ウォールによって開発されたプログラミング言語である。実用性と多様性を重視しており、C言語やsed、awk、シェルスクリプトなど他のプログラミング言語の優れた機能を取り入れている。', match: false },
      { name: 'JavaScript', description: 'JavaScriptとは、プログラミング言語のひとつである。Javaと名前が似ているが、異なるプログラミング言語である（後述の#歴史を参照）', match: true },
      { name: 'Python', description: 'Python（パイソン）は、汎用のプログラミング言語である。コードがシンプルで扱いやすく設計され、C言語などに比べて、さまざまなプログラムを分かりやすく、少ないコード行数で書けるといった特徴がある。', match: true },
      { name: 'C#', description: 'C#（シーシャープ）とは、マイクロソフトが開発したマルチパラダイムプログラミング言語。強い型付け、命令型、宣言型、手続き型、関数型、ジェネリック、オブジェクト指向の要素を持つ。', match: false },
      { name: 'Visual Basic', description: 'Microsoft Visual Basic （マイクロソフト ヴィジュアル ベーシック）はマイクロソフトが1990年代に開発していたプログラミング言語およびその処理系。', match: true },
    ]
  },
  methods: {
    changeTemplete1: function () {
      this.template = 'template1'
    },
    changeTemplete2: function () {
      this.template = 'template2'
    }
  }
});
