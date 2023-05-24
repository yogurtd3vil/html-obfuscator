(function() {
  let r = function(e) {
    let n = a(e);
    let i = `<script language="javascript">`;
    i += `document.write(unescape('${n}'))`;
    i += ` // yogurtd3vil `;
    i += `</script>`;
    return i;
  };

  function a(t) {
    let e = '';
    for (let n = 0; n < t.length; n++) {
      e += `%${o(t.charCodeAt(n))}`;
    }
    return e;
  }

  function o(t) {
    if (t > 65535) {
      throw new Error("erro: hexFromDec");
    }
    let e = Math.round(t / 4096 - 0.5);
    let n = t - e * 4096;
    let i = Math.round(n / 256 - 0.5);
    let r = n - i * 256;
    let a = Math.round(r / 16 - 0.5);
    let o = r - a * 16;
    return `${u(a)}${u(o)}`;
  }

  function u(t) {
    if (t < 10) {
      return t.toString();
    } else {
      if (t === 10) {
        return "A";
      } else if (t === 11) {
        return "B";
      } else if (t === 12) {
        return "C";
      } else if (t === 13) {
        return "D";
      } else if (t === 14) {
        return "E";
      } else if (t === 15) {
        return "F";
      }
    }
    throw new Error("número invalido");
  }

  module.exports = r;
})();
