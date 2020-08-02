function slugify(txt) {
  return [
    // special letters
    [new RegExp('[àáâãäå]', 'g'), 'a'],
    [new RegExp('[èéêë]', 'g'), 'e'],
    [new RegExp('[òóôõö]', 'g'), 'o'],
    [new RegExp('[ìíîï]', 'g'), 'i'],
    [new RegExp('[ùúûü]', 'g'), 'u'],
    [new RegExp('[æ]', 'g'), 'ae'],
    // url ending in '-/'
    [new RegExp('-/$'), '/'],
    // all non standard chars
    [/[^\x20-\x7E]+/g, '-'],
    // spaces
    [/ +/g, '-'],
    // punctuation
    [/\.+/g, '-'],
    [/,+/g, '-'],
    [/:+/g, '-'],
    [/;+/g, '-'],
    // quotation marks
    [/"+/g, '-'],
    [/'+/g, '-'],
    [/`+/g, '-'],
    [/’+/g, ''],
    // keyboard symbols
    [/\++/g, '-'],
    [/\|+/g, '-'],
    [/–+/g, '-'],
    [/\?+/g, '-'],
    [/!+/g, '-'],
    [/\*+/g, '-'],
    [/&+/g, '-'],
    [/\(+/g, '-'],
    [/\)+/g, '-'],
    [/\t+/g, '-'],
    [/°+/g, '-'],
    // '-/' & '/-' occurrences
    [/-\/+/g, '-'],
    [/\/-+/g, '/'],
    // multiple dash occurrences
    [/-+/g, '-'],
  ].reduce((buf, item) => buf.replace(item[0], item[1]), txt);
}
export default slugify;
