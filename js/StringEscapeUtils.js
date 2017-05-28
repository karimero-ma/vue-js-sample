var StringEscapeUtils = {};
var seu = StringEscapeUtils;

/**
 * 正規表現の予約語をエスケープして返す。
 * 
 * @returns エスケープ後の文字列。null、空文字列の場合は、空の文字列を返す。
 */
seu.escapeRegExp = function (str) {
  if (!str) {
    return '';
  }
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

/**
 * 正規表現の予約語をエスケープして返す。
 * 
 * @returns エスケープ後の文字列。null、空文字列の場合は、空の文字列を返す。
 */
function escapeRegExp(str) {
  if (!str) {
    return '';
  }
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};



seu.escapeHtml = function (str) {
  if (!str) {
    return '';
  }

  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '&quot;');
  str = str.replace(/'/g, '&#39;');
  return str;
}
