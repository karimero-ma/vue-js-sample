var StringEscapeUtils = {};

/**
 * 正規表現の予約語をエスケープして返す。
 * 
 * @returns エスケープ後の文字列。null、空文字列の場合は、空の文字列を返す。
 */
StringEscapeUtils.escapeRegExp = function (str) {
  if (!str) {
    return '';
  }
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
