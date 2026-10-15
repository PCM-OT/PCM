// ==UserScript==
// @name         TitanSystem 🚀
// @namespace    http://tampermonkey.net/
// @version      8.4
// @description  Otimiza e automatiza o fluxo de trabalho de Ordens de Serviço no sistema Titan, desde a criação até o fechamento.
// @author       PCM - OTAMERICA
// @run-at       document-idle
// @match        */albatros/admin.php*seccion=titan_trabajos_ordenes*
// @match        */albatros/admin.php*seccion=titan_trabajos_pedidos*
// @exclude      */albatros/admin.php*seccion=titan_planes_de_mantenimiento&id_reg*
// @exclude      */albatros/admin.php*seccion=titan_planes_programacion&id_reg*
// @match        */albatros/admin.php*seccion=titan_planes_de_mantenimiento*
// @match        */albatros/admin.php*seccion=titan_planes_programacion*
// @match        */albatros/admin.php*seccion=titan_equipos*
// @exclude      */albatros/admin.php*seccion=titan_trabajos_ordenes&id_reg*
// @exclude      */albatros/admin.php*seccion=titan_trabajos_pedidos&id_reg*
// @updateURL    https://raw.githubusercontent.com/PCM-OT/PCM/main/titan.user.js
// @downloadURL  https://raw.githubusercontent.com/PCM-OT/PCM/main/titan.user.js
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @connect      self
// @connect      pcmtitansystem.vercel.app
// @connect      raw.githubusercontent.com
// @require      https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js
// ==/UserScript==
(async function () {
  'use strict';
  history.replaceState(null, '', window.location['href']);

  // Página de Equipamentos: o TitanSystem não atua aqui. Só corrige as
  // funções de navegação do TITAN, que montam a URL com '&amp;' literal e
  // deixam a tela branca ao clicar em 'remover', e encerra em seguida —
  // sem autenticação, sem painel, sem estilos.
  if (new URLSearchParams(window.location.search).get('seccion') === 'titan_equipos') {
    try {
      const _correcao = document.createElement('script');
      _correcao.textContent = '\n            (function () {\n                \'use strict\';\n                var ALVOS = [\'ejecutar_accion\', \'ejecutar_accion_via_subseccion\', \'ejecutar_accion_via_subseccion_newop\'];\n                var corrigidas = [];\n                function tentar() {\n                    var achouAlguma = false;\n                    for (var i = 0; i < ALVOS.length; i++) {\n                        var nome = ALVOS[i];\n                        var fn = window[nome];\n                        if (typeof fn !== \'function\') continue;\n                        achouAlguma = true;\n                        if (corrigidas.indexOf(nome) !== -1) continue;\n                        var fonte = fn.toString();\n                        if (fonte.indexOf(\'&amp;\') === -1) { corrigidas.push(nome); continue; }\n                        try {\n                            window[nome] = new Function(\'return (\' + fonte.split(\'&amp;\').join(\'&\') + \')\')();\n                            corrigidas.push(nome);\n                            console.log(\'[TitanSystem] \' + nome + \': URL corrigida (&amp; -> &).\');\n                        } catch (e) {\n                            console.error(\'[TitanSystem] falha ao corrigir \' + nome + \':\', e);\n                        }\n                    }\n                    return achouAlguma;\n                }\n                if (!tentar()) {\n                    var voltas = 0;\n                    var t = setInterval(function () {\n                        voltas++;\n                        if (tentar() || voltas > 100) clearInterval(t);\n                    }, 50);\n                }\n            })();\n        ';
      (document.head || document.documentElement).appendChild(_correcao);
      _correcao.remove();
    } catch (_e) {
      console.error('[TitanSystem] falha ao injetar a correção de URL em Equipamentos:', _e);
    }
  }


  function _0x8dd5d2() {
    try {
      const _0x3c38d5 = document.createElement("script");
      _0x3c38d5.textContent = "\n            window.confirm = function(message) {\n                console.log('[✅ Popup de confirmação bloqueado via injeção]:', message);\n                return true;\n            };\n        ", (document.head || document.documentElement)['appendChild'](_0x3c38d5), _0x3c38d5.remove();
    } catch (_0x3ea9fb) {
      console.error("Falha ao injetar bloqueador de popup:", _0x3ea9fb);
    }
  }
  _0x8dd5d2();

  function _0x2786ff(_0x42c8d7, _0x5888b3 = "success", _0x43f732 = 0xfa0) {
    const _0x4dcd44 = document.createElement("div");
    _0x4dcd44.innerHTML = _0x42c8d7;
    const _0x45c366 = {
        'success': "#28a745"
        , 'error': "#dc3545"
        , 'info': "#3366ff"
        , 'warning': "#ffc107"
      }
      , _0x5d52c6 = _0x45c366[_0x5888b3] || _0x45c366.info
      , _0x8f1f8e = _0x5888b3 === 'warning' ? 'black' : "white";
    _0x4dcd44['style'].cssText = "\n        position: fixed;\n        bottom: 20px;\n        right: 20px;\n        background-color: " + _0x5d52c6 + ";\n        color: " + _0x8f1f8e + ";\n        padding: 15px;\n        border-radius: 5px;\n        z-index: 10002;\n        font-size: 16px;\n        box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n        opacity: 0;\n        transition: opacity 0.5s, transform 0.5s;\n        transform: translateX(100%);\n    ", document.body.appendChild(_0x4dcd44), setTimeout(() => {
      _0x4dcd44.style.opacity = '1', _0x4dcd44['style'].transform = "translateX(0)";
    }, 0x64), setTimeout(() => {
      _0x4dcd44['style'].opacity = '0', _0x4dcd44.style.transform = "translateX(100%)", setTimeout(() => document.body.removeChild(_0x4dcd44), 0x1f4);
    }, _0x43f732);
  }

  function _0x1241ed(_0x13c557, _0xbb8420 = 0x1d4c0) {
    const _0x4ddd2a = "titanflow-progress-toast";
    let _0x3d3e65 = document['getElementById'](_0x4ddd2a);
    !_0x3d3e65 && (_0x3d3e65 = document.createElement("div"), _0x3d3e65['id'] = _0x4ddd2a, _0x3d3e65.style.cssText = "\n            position: fixed; bottom: 20px; right: 20px;\n            background-color: #3366ff; /* Cor de informação */\n            color: white;\n            padding: 15px; border-radius: 5px; z-index: 10002;\n            font-size: 16px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n            opacity: 0; transition: opacity 0.5s, transform 0.5s;\n            transform: translateX(100%);\n        ", document.body['appendChild'](_0x3d3e65), setTimeout(() => {
      _0x3d3e65.style.opacity = '1', _0x3d3e65.style['transform'] = "translateX(0)";
    }, 0x64)), _0x3d3e65.textContent = _0x13c557, window['titanFlowProgressToastTimer'] && clearTimeout(window.titanFlowProgressToastTimer), window.titanFlowProgressToastTimer = setTimeout(() => {
      document.body['contains'](_0x3d3e65) && (_0x3d3e65.style.opacity = '0', _0x3d3e65.style.transform = "translateX(100%)", setTimeout(() => document.body.removeChild(_0x3d3e65), 0x1f4));
    }, _0xbb8420);
  }

  function _0x1c9560(_0x29cd80) {
    return new Promise(_0x36008d => {
      const _0x80e882 = (_0x3ae093, _0x5005f5) => {
          Object.assign(_0x3ae093.style, {
            'padding': "8px 16px"
            , 'border': "none"
            , 'borderRadius': '5px'
            , 'backgroundColor': _0x5005f5
            , 'color': "white"
            , 'fontWeight': "bold"
            , 'cursor': "pointer"
            , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
            , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
          }), _0x3ae093.addEventListener('mouseenter', () => {
            _0x3ae093.style['filter'] = "brightness(110%)", _0x3ae093['style'].transform = "translateY(-2px)", _0x3ae093.style['boxShadow'] = "0 4px 8px rgba(0,0,0,0.20)";
          }), _0x3ae093.addEventListener("mouseleave", () => {
            _0x3ae093.style['filter'] = "brightness(100%)", _0x3ae093.style.transform = "translateY(0px)", _0x3ae093['style'].boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
          }), _0x3ae093.addEventListener("mousedown", () => {
            _0x3ae093['style'].transform = 'translateY(1px)', _0x3ae093.style.boxShadow = "none";
          }), _0x3ae093['addEventListener']("mouseup", () => {
            _0x3ae093.style.transform = 'translateY(-2px)';
          });
        }, _0x6ee27e = _0x492c2f => {
          Object.assign(_0x492c2f.style, {
            'width': "100%"
            , 'padding': "10px"
            , 'boxSizing': "border-box"
            , 'border': '1px\x20solid\x20#ced4da'
            , 'borderRadius': "5px"
            , 'boxShadow': "0 1px 2px rgba(0,0,0,0.07) inset"
            , 'transition': "border-color 0.2s ease, box-shadow 0.2s ease"
          }), _0x492c2f.addEventListener("focus", () => {
            _0x492c2f.style.borderColor = "#80bdff", _0x492c2f.style['boxShadow'] = "0 0 0 0.2rem rgba(0,123,255,.25)";
          }), _0x492c2f.addEventListener('blur', () => {
            _0x492c2f.style['borderColor'] = "#ced4da", _0x492c2f['style'].boxShadow = "0 1px 2px rgba(0,0,0,0.07) inset";
          });
        }, _0x4ed642 = document.createElement("div");
      _0x4ed642['id'] = "painel-login-titan", Object.assign(_0x4ed642.style, {
        'position': "fixed"
        , 'top': '10px'
        , 'left': "10px"
        , 'width': '280px'
        , 'backgroundColor': '#ffffff'
        , 'border': "none"
        , 'borderRadius': "8px"
        , 'padding': "20px"
        , 'zIndex': "10001"
        , 'boxShadow': "0 8px 25px rgba(0,0,0,0.15)"
        , 'fontFamily': "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
        , 'opacity': '0'
        , 'transform': "translateY(-10px)"
        , 'transition': 'opacity\x200.3s\x20ease,\x20transform\x200.3s\x20ease'
      });
      const _0x494fba = document.createElement('h3');
      _0x494fba.textContent = "Autenticação Necessária 🔑", Object['assign'](_0x494fba.style, {
        'color': '#333'
        , 'margin': "0 0 8px 0"
        , 'fontSize': "18px"
        , 'fontWeight': "600"
      }), _0x4ed642.appendChild(_0x494fba);
      const _0x2dd235 = document.createElement('div');
      _0x2dd235['textContent'] = _0x29cd80, Object.assign(_0x2dd235.style, {
        'marginBottom': "15px"
        , 'fontSize': "14px"
        , 'color': "#6c757d"
        , 'lineHeight': "1.5"
      }), _0x4ed642.appendChild(_0x2dd235);
      const _0x27d5b3 = document.createElement('input');
      _0x27d5b3['type'] = "password", _0x27d5b3.placeholder = "Sua senha aqui...", _0x6ee27e(_0x27d5b3), _0x4ed642['appendChild'](_0x27d5b3);
      const _0x4e418d = document.createElement('div');
      Object.assign(_0x4e418d.style, {
        'display': "flex"
        , 'justifyContent': "flex-end"
        , 'gap': "10px"
        , 'marginTop': "20px"
      });
      const _0x34ab1f = document['createElement']("button");
      _0x34ab1f.textContent = "Fechar", _0x80e882(_0x34ab1f, "#6c757d"), _0x34ab1f.onclick = () => {
        document.body['removeChild'](_0x4ed642), _0x36008d(null);
      }, _0x4e418d.appendChild(_0x34ab1f);
      const _0x4b5399 = document.createElement("button");
      _0x4b5399.textContent = "Entrar", _0x80e882(_0x4b5399, "#28a745"), _0x4b5399.onclick = () => {
        const _0xf2f3b0 = _0x27d5b3.value;
        document.body.removeChild(_0x4ed642), _0x36008d(_0xf2f3b0);
      }, _0x4e418d.appendChild(_0x4b5399), _0x4ed642.appendChild(_0x4e418d), document['body'].appendChild(_0x4ed642), _0x27d5b3['focus'](), setTimeout(() => {
        _0x4ed642.style.opacity = '1', _0x4ed642.style.transform = "translateY(0)";
      }, 0xa), _0x27d5b3['addEventListener']("keydown", _0x58cd44 => {
        if (_0x58cd44['key'] === "Enter") _0x4b5399.click();
        else {
          if (_0x58cd44.key === 'Escape') _0x34ab1f['click']();
        }
      });
    });
  }

  function _0x15e7d4(_0x25681f, _0x2db7db, _0x1f77dc) {
    return new Promise(_0x17ae86 => {
      const _0x553c62 = (_0x38e14a, _0x5e934c) => {
          Object.assign(_0x38e14a.style, {
            'padding': "8px 16px"
            , 'border': "none"
            , 'borderRadius': '5px'
            , 'backgroundColor': _0x5e934c
            , 'color': "white"
            , 'fontWeight': 'bold'
            , 'cursor': "pointer"
            , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
            , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
          }), _0x38e14a.addEventListener('mouseenter', () => {
            _0x38e14a['style']['filter'] = 'brightness(110%)', _0x38e14a.style.transform = "translateY(-2px)", _0x38e14a.style['boxShadow'] = "0 4px 8px rgba(0,0,0,0.20)";
          }), _0x38e14a['addEventListener']('mouseleave', () => {
            _0x38e14a.style.filter = 'brightness(100%)', _0x38e14a['style'].transform = "translateY(0px)", _0x38e14a.style.boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
          }), _0x38e14a['addEventListener']('mousedown', () => {
            _0x38e14a.style.transform = "translateY(1px)", _0x38e14a.style.boxShadow = "none";
          }), _0x38e14a.addEventListener("mouseup", () => {
            _0x38e14a.style.transform = "translateY(-2px)";
          });
        }, _0x1acf6d = _0xce7dd7 => {
          Object.assign(_0xce7dd7.style, {
            'width': "100%"
            , 'padding': '10px'
            , 'boxSizing': "border-box"
            , 'border': "1px solid #ced4da"
            , 'borderRadius': "5px"
            , 'boxShadow': "0 1px 2px rgba(0,0,0,0.07) inset"
            , 'transition': "border-color 0.2s ease, box-shadow 0.2s ease"
            , 'resize': "vertical"
            , 'minHeight': "80px"
          }), _0xce7dd7.addEventListener("focus", () => {
            _0xce7dd7.style.borderColor = "#80bdff", _0xce7dd7['style']['boxShadow'] = "0 0 0 0.2rem rgba(0,123,255,.25)";
          }), _0xce7dd7.addEventListener("blur", () => {
            _0xce7dd7.style.borderColor = '#ced4da', _0xce7dd7.style.boxShadow = "0 1px 2px rgba(0,0,0,0.07) inset";
          });
        }, _0x571aca = document.createElement('div');
      Object.assign(_0x571aca.style, {
        'position': "fixed"
        , 'top': "50%"
        , 'left': '50%'
        , 'transform': 'translate(-50%,\x20-50%)'
        , 'width': "400px"
        , 'backgroundColor': "#ffffff"
        , 'border': "none"
        , 'borderRadius': '8px'
        , 'padding': "20px"
        , 'zIndex': "10002"
        , 'boxShadow': "0 8px 25px rgba(0,0,0,0.15)"
        , 'fontFamily': "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
        , 'opacity': '0'
        , 'transform': 'translate(-50%,\x20-45%)'
        , 'transition': "opacity 0.3s ease, transform 0.3s ease"
      });
      const _0x48c9cc = document.createElement('h3');
      _0x48c9cc.textContent = _0x25681f, Object.assign(_0x48c9cc.style, {
        'color': '#333'
        , 'margin': '0\x200\x208px\x200'
        , 'fontSize': "18px"
        , 'fontWeight': "600"
      }), _0x571aca.appendChild(_0x48c9cc);
      const _0x435066 = document.createElement("div");
      _0x435066.textContent = _0x2db7db, Object.assign(_0x435066.style, {
        'marginBottom': "15px"
        , 'fontSize': "14px"
        , 'color': "#6c757d"
        , 'lineHeight': "1.5"
      }), _0x571aca.appendChild(_0x435066);
      const _0x19a99d = document.createElement('textarea');
      _0x19a99d.placeholder = _0x1f77dc, _0x1acf6d(_0x19a99d), _0x571aca.appendChild(_0x19a99d);
      const _0xbfcf98 = document.createElement("div");
      Object.assign(_0xbfcf98['style'], {
        'display': 'flex'
        , 'justifyContent': 'flex-end'
        , 'gap': "10px"
        , 'marginTop': '20px'
      });
      const _0x5c15fa = document.createElement("button");
      _0x5c15fa.textContent = 'Cancelar', _0x553c62(_0x5c15fa, '#6c757d'), _0x5c15fa.onclick = () => {
        document.body['removeChild'](_0x571aca), _0x17ae86(null);
      }, _0xbfcf98.appendChild(_0x5c15fa);
      const _0x540062 = document.createElement("button");
      _0x540062.textContent = "Confirmar", _0x553c62(_0x540062, "#dc3545"), _0x540062['onclick'] = () => {
        const _0x35f1a8 = _0x19a99d.value;
        document.body['removeChild'](_0x571aca), _0x17ae86(_0x35f1a8);
      }, _0xbfcf98['appendChild'](_0x540062), _0x571aca.appendChild(_0xbfcf98), document['body']['appendChild'](_0x571aca), _0x19a99d.focus(), setTimeout(() => {
        _0x571aca.style.opacity = '1', _0x571aca.style.transform = 'translate(-50%,\x20-50%)';
      }, 0xa), _0x19a99d.addEventListener("keydown", _0x905e32 => {
        if (_0x905e32['key'] === "Enter" && _0x905e32.ctrlKey) _0x540062.click();
        else _0x905e32['key'] === 'Escape' && _0x5c15fa.click();
      });
    });
  }
  const _0x3968dd = 'https://controle-licencas-git-main-ryans-projects-461d7d2a.vercel.app/licencas.json'
    , _0x46fcb7 = 'dar92f8b3d_1c4e7a9fb2d5e8f1a3c6'
    , _0x464719 = "nome_computador";
  let _0x4458b3 = null
    , _0x195c9c = {
      'maoDeObra': ![]
      , 'reprogramacao': ![]
      , 'execucao': ![]
      , 'fechamento': ![]
      , 'ativacao': ![]
    }
    , _0x27b91a = []
    , _0x34e176 = [];
  async function _0x24d21e() {
    // Licenciamento removido por autorização do autor: perfis sempre ativos
    return {
      'sucesso': true
      , 'perfis': {
        'administrador': {
          'senha': 'toilM'
          , 'validade': '2100-12-31'
          , 'features': {
            'maoDeObra': true
            , 'reprogramacao': true
            , 'execucao': true
            , 'fechamento': true
            , 'ativacao': true
          }
        }
        , 'tecnico': {
          'senha': 'tecnicos'
          , 'validade': '2100-12-31'
          , 'features': {
            'maoDeObra': true
            , 'reprogramacao': false
            , 'execucao': true
            , 'fechamento': false
            , 'ativacao': false
          }
        }
      }
    };
  }
  try {
    const _0x16bf96 = await _0x24d21e();
    if (!_0x16bf96.sucesso) {
      console['error']("Validação de licença falhou:", _0x16bf96.erro);
      return;
    }
    const _0x4780ae = await _0x3c1f83(_0x16bf96.perfis);
    if (!_0x4780ae) return;
    _0x5e6f8d();
  } catch (_0x483c3d) {
    console['error']("❌ Erro GERAL na inicialização do TitanSystem:", _0x483c3d);
  }
  async function _0x3c1f83(_0x297efe) {
    const _0x3b0d35 = localStorage.getItem("senhaTitan");
    if (_0x3b0d35) {
      const _0x10310c = await _0x5a7223(_0x297efe, _0x3b0d35, !![]);
      if (_0x10310c) return !![];
      else console.warn("⚠️ Falha na re-autenticação silenciosa. Solicitando senha novamente."), _0x2786ff("⚠️ Login expirado ou senha incorreta. Digite novamente.", "warning", 0x1388);
    }
    return await _0x5a7223(_0x297efe);
  }
  async function _0x5a7223(_0x156da0, _0x16e166 = null, _0x30f700 = ![]) {
    let _0x52f034 = _0x16e166;
    if (!_0x16e166) {
      _0x52f034 = await _0x1c9560("Digite a senha do seu perfil:");
      if (_0x52f034 === null || _0x52f034 === '') return _0x2786ff("Senha obrigatória! Abortando.", "error"), ![];
    }
    let _0x133833 = null;
    for (const _0x5b1999 in _0x156da0) {
      if (_0x156da0[_0x5b1999].senha === _0x52f034) {
        _0x133833 = {
          'nome': _0x5b1999
          , 'validade': _0x156da0[_0x5b1999]['validade']
          , 'features': _0x156da0[_0x5b1999].features
        };
        break;
      }
    }
    if (!_0x133833) {
      if (!_0x30f700) _0x2786ff('🚫\x20Senha\x20inválida.\x20Fale\x20com\x20o\x20administrador.', "error");
      return localStorage.removeItem('perfilTitan'), localStorage.removeItem("senhaTitan"), ![];
    }
    return _0x4458b3 = _0x133833['nome'], _0x195c9c = Object['assign']({}, _0x133833.features), !_0x30f700 && (localStorage.setItem("perfilTitan", _0x4458b3), localStorage['setItem']("senhaTitan", _0x52f034), _0x51f98b(!![])), console.log("✅ Perfil autenticado: " + _0x4458b3, _0x195c9c), !![];
  }

  function _0x162bd8() {
    try {
      const _0x225b18 = document.querySelectorAll("span.nota11");
      let _0x573620 = null;
      for (const _0xa550b2 of _0x225b18) {
        if (_0xa550b2.innerHTML.includes('<b>Operador:</b>')) {
          for (const _0x1d7c21 of _0xa550b2.childNodes) {
            if (_0x1d7c21.nodeType === 0x3 && _0x1d7c21.textContent['includes'](',')) {
              _0x573620 = _0x1d7c21;
              break;
            }
          }
          if (_0x573620) break;
        }
      }
      if (!_0x573620) return null;
      const _0x2b59a3 = _0x573620.textContent.trim()
        , _0x19dcfe = _0x2b59a3.split(',');
      if (_0x19dcfe.length < 0x2) return _0x2b59a3;
      const _0x49fc7f = _0x19dcfe[0x1].split('[')[0x0];
      return _0x49fc7f.trim();
    } catch (_0x15f97b) {
      return console.error('[TitanSystem]\x20Erro\x20ao\x20extrair\x20nome:', _0x15f97b), null;
    }
  }

  function _0x51f98b(_0x2fd4c6 = ![]) {
    const _0x1ed107 = new Date()['toISOString']().split('T')[0x0], _0x15e05d = 'titanflow_bemvindo_exibido_em', _0x14a973 = localStorage.getItem(_0x15e05d) === _0x1ed107;
    if (_0x14a973 && !_0x2fd4c6) return;
    const _0x4230ae = _0x162bd8();
    if (_0x4230ae) {
      const _0x3757d8 = _0x4230ae.toLowerCase();
      let _0x5d5549 = ''
        , _0x3324a0 = [];
      if (_0x3757d8 === "luis") _0x3324a0 = ["O planejador mais querido (e barrigudo) da firma chegou! Bem-vindo!", "Bem-vindo, Luis! O treino de hoje já compensou os doces de ontem?", "Chegou o homem com um plano pra tudo, até pros treinos! Bem-vindo, barrigudo!", "Bem-vindo, Luis! Já planejou a pausa estratégica para o docinho de hoje? 🍬", "O terror dos doces (e agora dos halteres) está na área! Bem-vindo, Luis!", "Açúcar, planejamento e um pouco de suor. A receita do sucesso! Bem-vindo, Luis!", "Bem-vindo, Luis! A planilha de doces da semana já está pronta?", "Chegou o homem que levanta pesos na academia e processos no sistema! Bem-vindo!", 'A\x20academia\x20que\x20lute!\x20O\x20mestre\x20dos\x20doces\x20e\x20dos\x20planos\x20chegou!\x20Bem-vindo,\x20Luis!', "Bem-vindo, Luis! Só não esquece de planejar o \"dia do lixo\" na dieta, hein barrigudo!"], _0x5d5549 = _0x3324a0[Math.floor(Math['random']() * _0x3324a0.length)];
      else {
        if (_0x3757d8 === "dlleon") _0x3324a0 = ["A lenda do SAP e agora da academia! Desse jeito não sobra pra ninguém! Bem-vindo, Dlleandro!", 'E\x20aí,\x20Dlleandro!\x20Essa\x20força\x20toda\x20pra\x20aprovar\x20RC\x20é\x20natural\x20ou\x20já\x20tá\x20no\x20suco?\x20😉', "Bem-vindo, Dlleandro! O projeto verão tá vindo com força total, hein? Tá gigante!", "Chegou o monstro! Meio homem, meio SAP, totalmente focado no treino! Bem-vindo, Dlleandro!", 'Daqui\x20a\x20pouco\x20vai\x20precisar\x20de\x20uma\x20RC\x20pra\x20comprar\x20whey...\x20ou\x20outras\x20coisas.\x20💉\x20Bem-vindo,\x20Dlleandro!', "Cuidado pra não quebrar o teclado com essa força toda, Dlleandro! Bem-vindo!", "É o suco da sabedoria ou da academia? Na dúvida, é o Dlleandro! Bem-vindo!", 'Mais\x20focado\x20que\x20o\x20SAP\x20em\x20dia\x20de\x20fechamento!\x20Bem-vindo,\x20Dlleandro!', "O Dlleandro chegou! Metade do tempo criando RC, a outra metade destruindo no supino!", "É um pássaro? É um avião? Não, é o Dlleandro finalizando mais um processo no SAP! Bem-vindo!"], _0x5d5549 = _0x3324a0[Math.floor(Math.random() * _0x3324a0.length)];
        else {
          if (_0x3757d8 === "danthon") _0x3324a0 = ["A corporação inteira te saúda! Bem-vindo, Danthamerica! 🏢", "O próprio Danthamerica em pessoa! Tenha um ótimo dia!", "Bem-vindo, Danthonamerica! O sistema já está até mais alinhado.", "Chegou o embaixador da Danthamerica! Bem-vindo!", "Saudações, Danthonamerica! Pronto para mais um dia de conquistas?", "Reportando para o serviço, Capitão Danthamerica! Bem-vindo a bordo.", "O CEO da Danthamerica chegou para a reunião. Bem-vindo!", "A marca Danthamerica se valoriza mais a cada login seu. Bem-vindo!", "Pode entrar, o escritório da presidência da Danthamerica é todo seu. Bem-vindo!", "Ordem do dia da Danthamerica: ter um dia excelente. Cumpra-se! Bem-vindo."], _0x5d5549 = _0x3324a0[Math['floor'](Math['random']() * _0x3324a0.length)];
          else {
            const _0xbfe167 = ['Olá,\x20' + _0x4230ae + '!', 'Bem-vindo(a)\x20de\x20volta,\x20' + _0x4230ae + '!', "E aí, " + _0x4230ae + '!', "Que bom te ver, " + _0x4230ae + '!', 'Pronto\x20para\x20começar,\x20' + _0x4230ae + '?', "Saudações, " + _0x4230ae + '!', "Fala, " + _0x4230ae + "! Bora pra mais um dia!", 'Bem-vindo(a)\x20a\x20bordo,\x20' + _0x4230ae + '!']
              , _0x5c6149 = new Date();
            _0x5c6149.getDay() === 0x1 && _0xbfe167.push("Uma ótima Segunda-feira para você, " + _0x4230ae + '!');
            const _0x5b266d = ['Que\x20seu\x20dia\x20seja\x20produtivo.\x20🚀', "Vamos fazer acontecer! ✨", "Tenha um ótimo dia de trabalho! 👍", "Que a força esteja com você. 💪", "Hora de otimizar os processos! ⚙️", "Foco, força e cafeína!", "Vamos deixar tudo em ordem. 📋", 'Missão\x20do\x20dia:\x20ser\x20incrível.', 'Que\x20a\x20lógica\x20esteja\x20sempre\x20a\x20seu\x20favor.']
              , _0x2afcdc = _0xbfe167[Math.floor(Math.random() * _0xbfe167['length'])]
              , _0x48d456 = _0x5b266d[Math.floor(Math.random() * _0x5b266d.length)];
            _0x5d5549 = _0x2afcdc + '\x20' + _0x48d456;
          }
        }
      }
      _0x2786ff(_0x5d5549, "info", 0x1b58), localStorage.setItem(_0x15e05d, _0x1ed107);
    }
  }

  function _0x2cf14e() {
    const _0x567766 = new Date().toISOString().split('T')[0x0], _0x208ced = "titanflow_bemvindo_exibido_em";
    if (localStorage.getItem(_0x208ced) === _0x567766) return;
    const _0xac57b3 = _0x162bd8();
    if (_0xac57b3) {
      const _0x4a296e = "Olá, " + _0xac57b3 + "! Que seu dia seja produtivo. 👋";
      _0x2786ff(_0x4a296e, "info", 0x2710), localStorage.setItem(_0x208ced, _0x567766);
    }
  }

  function _0x5e6f8d() {
    _0x51f98b(![]), _0x2fd0e7(), _0x670dab(), _0x9324e5();
    const _0x5e82e6 = sessionStorage['getItem']('titanflow_session_planos');
    _0x5e82e6 && (_0x27b91a = JSON.parse(_0x5e82e6));
    const _0x37d9c8 = sessionStorage.getItem("titanflow_session_equipamentos" + '_v2');
    _0x37d9c8 && (_0x34e176 = JSON.parse(_0x37d9c8));

    function _0x9324e5() {
      const _0x1724ef = sessionStorage.getItem("titanflow_toast");
      if (_0x1724ef) try {
        const _0xd66a42 = JSON.parse(_0x1724ef);
        _0x2786ff(_0xd66a42.message, _0xd66a42['type'], 0x1770), sessionStorage.removeItem("titanflow_toast");
      } catch (_0x276e9a) {
        console['error']("Erro ao processar toast da sessão:", _0x276e9a), sessionStorage.removeItem("titanflow_toast");
      }
    }
    const _0x121499 = typeof GM_info !== "undefined" ? GM_info.script['version'] : "?.?"
      , _0x3ba919 = {
        'storageKey': (new URLSearchParams(location.search).get('seccion') === 'titan_trabajos_pedidos' ? 'titanflow_selecao_pedidos' : 'titanflow_selecao_ordenes')
        , 'configStorageKey': "config_tecnicos"
        , 'textoBotao': "👷  Definir Mão de Obra"
        , 'horasPadrao': "01:00"
        , 'debug': !![]
      };
    try { localStorage.removeItem('ordens_selecionadas'); } catch (_0xe) {}

    // --- INÍCIO DA ETAPA 1 (VERSÃO CORRIGIDA: TABELA 'table_source_personas') ---

    var _0x3c3cfc = JSON.parse(localStorage.getItem('titan_tecnicos_cache') || '[]');

    if (_0x3c3cfc.length === 0) {
        _0x3c3cfc = [
            { 'id': '', 'nome': '-- Abra uma OS e clique em Atualizar --', 'empresaId': '', 'empresaNome': '' }
        ];
    }

    // Função de varredura (mantida porque a tabela está dentro de um iframe)
    function encontrarTabelaEmIframes(janela, idTabela) {
        try {
            // 1. Verifica na janela atual
            if (janela.document.getElementById(idTabela)) {
                return janela.document;
            }

            // 2. Verifica nos iframes
            const iframes = janela.document.querySelectorAll('iframe, frame');
            for (let i = 0; i < iframes.length; i++) {
                try {
                    const docInterno = iframes[i].contentDocument || iframes[i].contentWindow.document;
                    if (docInterno) {
                        if (docInterno.getElementById(idTabela)) return docInterno;

                        // Nível 2 de profundidade
                        const iframesFilhos = docInterno.querySelectorAll('iframe, frame');
                        for (let j = 0; j < iframesFilhos.length; j++) {
                             const docNeto = iframesFilhos[j].contentDocument || iframesFilhos[j].contentWindow.document;
                             if (docNeto && docNeto.getElementById(idTabela)) return docNeto;
                        }
                    }
                } catch (e) {}
            }
        } catch (e) {}
        return null;
    }

    async function _0xAtualizarTecnicosReais() {
        const btn = document.getElementById('btn-update-tecnicos');
        if(btn) { btn.innerHTML = '⏳ Lendo Tabelas...'; btn.disabled = true; }

        try {
            // --- PARTE 1: PESSOAS ---
            const ID_TABELA_PESSOAS = 'table_source_personas';
            const docPessoas = encontrarTabelaEmIframes(window, ID_TABELA_PESSOAS);

            if (docPessoas) {
                const tabela = docPessoas.getElementById(ID_TABELA_PESSOAS);
                const linhas = tabela.querySelectorAll('td.texto11');
                const novaLista = [];

                linhas.forEach(celula => {
                    const nomeCru = celula.innerText.trim();
                    const onclickTexto = celula.getAttribute('onclick');
                    const matchID = onclickTexto ? onclickTexto.match(/,\s*(\d+)\s*\)/) : null;

                    if (matchID && matchID[1]) {
                        const idTecnico = matchID[1];
                        let nomeFormatado = nomeCru;
                        if (nomeCru.includes(',')) {
                            const partes = nomeCru.split(',');
                            if (partes.length === 2) nomeFormatado = partes[1].trim() + ' ' + partes[0].trim();
                        }
                        novaLista.push({ 'id': idTecnico, 'nome': nomeFormatado });
                    }
                });

                if (novaLista.length > 0) {
                    localStorage.setItem('titan_tecnicos_cache', JSON.stringify(novaLista));
                }
            }

            // --- PARTE 2: EMPRESAS (NOVO) ---
            const ID_TABELA_EMPRESAS = 'table_source_empresas';
            const docEmpresas = encontrarTabelaEmIframes(window, ID_TABELA_EMPRESAS); // Usa a mesma lógica de busca

            if (docEmpresas) {
                const tabelaEmp = docEmpresas.getElementById(ID_TABELA_EMPRESAS);
                // A classe das células de empresa costuma ser a mesma ou apenas td dentro da tr
                const linhasEmp = tabelaEmp.querySelectorAll('td');
                const listaEmpresas = [];

                linhasEmp.forEach(celula => {
                    const nomeEmp = celula.innerText.trim();
                    // O onclick da empresa geralmente é: eventoOnClickAdd(..., id)
                    const onclickTexto = celula.getAttribute('onclick');

                    // Regex genérico para pegar o último número do onclick
                    const matchIDEmp = onclickTexto ? onclickTexto.match(/,\s*(\d+)\s*\)/) : null;

                    // Filtra cabeçalhos ou células vazias
                    if (matchIDEmp && matchIDEmp[1] && nomeEmp.length > 2) {
                        listaEmpresas.push({ 'id': matchIDEmp[1], 'nome': nomeEmp });
                    }
                });

                if (listaEmpresas.length > 0) {
                    // Remove duplicatas baseado no ID
                    const unicos = listaEmpresas.filter((v,i,a)=>a.findIndex(t=>(t.id===v.id))===i);
                    localStorage.setItem('titan_empresas_cache', JSON.stringify(unicos));
                    console.log(`[TitanSystem] ${unicos.length} empresas encontradas.`);
                }
            }

            _0x2786ff(`Dados atualizados com sucesso!`, 'success');
            setTimeout(() => location.reload(), 1000);

        } catch (e) {
            console.error(e);
            alert('Erro ao processar tabelas: ' + e.message);
        }

        if(btn) { btn.innerHTML = '🔄 Atualizar Listas'; btn.disabled = false; }
    }
    // --- FIM DA ETAPA 1 ---
    let _0x2b7552 = []
      , _0x5b5dcd = ![]
      , _0x2029e5 = null
      , _0x2db1a3 = {
        'tecnicos': ['', '', '', '', '', '', '', '', '', '']
      };
    const _0x319428 = (_0x25d7ef, _0x7152cd) => {
      const _0x4972c0 = setInterval(() => {
        const _0x19253e = document.querySelector(_0x25d7ef);
        _0x19253e && (clearInterval(_0x4972c0), _0x7152cd(_0x19253e));
      }, 0x64);
    };

    function _0xb11661(..._0x5e4c72) {
      _0x3ba919.debug && console.log("[Automação Ordens]", ..._0x5e4c72);
    }

    function _0x3b4bec() {
      try {
        const _0x197a6f = document['createElement']("script");
        _0x197a6f.textContent = "\n            (function() {\n                'use strict';\n\n                const waitForFunction = (functionName, callback) => {\n                    const interval = setInterval(() => {\n                        if (typeof window[functionName] === 'function') {\n                            clearInterval(interval);\n                            callback();\n                        }\n                    }, 50);\n                };\n\n                waitForFunction('mostrar_acciones_disponibles', () => {\n\n                    function getSESID() {\n                        const match = window.location.href.match(/SESID=([^&]*)/);\n                        return match ? match[1] : null;\n                    }\n\n                    async function verificarManoDeObraAsync() {\n                        if (!window.ot_selected) return;\n                        const url = `./admin.php?SESID=${getSESID()}&seccion=titan_trabajos_ordenes&id_reg=${window.ot_selected}&show=accion&action=internal-mano_de_obra_verificar`;\n                        try {\n                            const response = await fetch(url);\n                            const resultCode = await response.text();\n                            window.otras_indicaciones_mano_de_obra = '';\n                            if (resultCode !== '1') {\n                                window.otras_indicaciones_mano_de_obra = '[No posee mano de obra asignada]';\n                                const actionActivar = document.getElementById('action_activar');\n                                if (actionActivar) actionActivar.style.display = 'none';\n                            }\n                            if (typeof window.otrasIndicaciones === 'function') window.otrasIndicaciones();\n                        } catch (error) { console.error(\"Erro ao verificar mão de obra:\", error); }\n                    }\n\n                    async function verificarEnParteBorradorAsync() {\n                        if (!window.ot_selected) return;\n                        const url = `./admin.php?SESID=${getSESID()}&seccion=titan_trabajos_ordenes&id_reg=${window.ot_selected}&show=accion&action=internal-en_parte_borrador_verificar`;\n                        try {\n                            const response = await fetch(url);\n                            const resultCode = await response.text();\n                            window.otras_indicaciones_parte_borrador = '';\n                            if (resultCode === '1') {\n                                window.otras_indicaciones_parte_borrador = '[En parte borrador]';\n                                ['action_cancel', 'action_end', 'action_reprogramar'].forEach(id => {\n                                    const actionElement = document.getElementById(id);\n                                    if (actionElement) actionElement.style.display = 'none';\n                                });\n                            }\n                            if (typeof window.otrasIndicaciones === 'function') window.otrasIndicaciones();\n                        } catch (error) { console.error(\"Erro ao verificar parte borrador:\", error); }\n                    }\n\n                    const original_mostrar_acciones = window.mostrar_acciones_disponibles;\n\n                    function urlVerificacao(acao) {\n                        return './admin.php?SESID=' + getSESID() + '&seccion=titan_trabajos_ordenes&id_reg=' + encodeURIComponent(window.ot_selected) + '&show=accion&action=' + acao;\n                    }\n                    \n                    function consultaSincrona(acao) {\n                        try {\n                            const req = new XMLHttpRequest();\n                            req.open('GET', urlVerificacao(acao), false);\n                            req.send(null);\n                            return (req.responseText || '').trim();\n                        } catch (erro) {\n                            console.error('[TitanSystem] Falha na verificacao ' + acao + ':', erro);\n                            return null;\n                        }\n                    }\n                    \n                    // O TITAN passou a liberar Ativar/Terminar pelo RETORNO destas funcoes.\n                    // Anuladas (() => {}) elas devolviam undefined: Ativar caia sempre no alert\n                    // e Terminar furava a trava de parte borrador. Aqui devolvem o booleano.\n                    window.verificarManoDeObra = function (tr) {\n                        if (!window.ot_selected) { window.otras_indicaciones_mano_de_obra = ''; return false; }\n                        const codigo = consultaSincrona('internal-mano_de_obra_verificar');\n                        if (codigo === null) return false;\n                        const temMaoDeObra = (codigo === '1');\n                        window.otras_indicaciones_mano_de_obra = temMaoDeObra ? '' : '[No posee mano de obra asignada]';\n                        if (!temMaoDeObra) {\n                            const botao = document.getElementById('action_activar');\n                            if (botao) botao.style.display = 'none';\n                        }\n                        if (typeof window.otrasIndicaciones === 'function') window.otrasIndicaciones();\n                        return temMaoDeObra;\n                    };\n                    \n                    window.verificarEnParteBorrador = function (tr) {\n                        if (!window.ot_selected) { window.otras_indicaciones_parte_borrador = ''; return false; }\n                        const codigo = consultaSincrona('internal-en_parte_borrador_verificar');\n                        if (codigo === null) return false;\n                        const emParteBorrador = (codigo === '1');\n                        window.otras_indicaciones_parte_borrador = emParteBorrador ? '[En parte borrador]' : '';\n                        if (emParteBorrador) {\n                            ['action_cancel', 'action_end', 'action_reprogramar'].forEach(function (id) {\n                                const botao = document.getElementById(id);\n                                if (botao) botao.style.display = 'none';\n                            });\n                        }\n                        if (typeof window.otrasIndicaciones === 'function') window.otrasIndicaciones();\n                        return emParteBorrador;\n                    };\n                    \n                    // Contorno de bug do TITAN: '&amp;subseccion=activar' aparece dentro de um\n                    // bloco <script>, onde a entidade nao e decodificada, e o PHP acaba lendo o\n                    // parametro como 'amp;subseccion'. Refazemos a chamada com o '&' correto.\n                    // Quando o TI corrigir a origem, este trecho continua correto e inofensivo.\n                    if (typeof window.accion_activar_chequeo === 'function' && typeof window.ejecutar_accion_via_subseccion === 'function') {\n                        window.accion_activar_chequeo = function () {\n                            if (window.verificarManoDeObra(window.tr_selected)) window.ejecutar_accion_via_subseccion('&subseccion=activar');\n                            else alert('A ordem nao possui mao de obra associada.');\n                        };\n                    }\n\n                    window.mostrar_acciones_disponibles = function(tr, orden_id, actions) {\n                        original_mostrar_acciones(tr, orden_id, actions);\n\n                        // A função original, ao desselecionar, define window.ot_selected como 0.\n                        if (window.ot_selected > 0) {\n                            // CASO 1: UMA ORDEM É SELECIONADA\n                            // Dispara nossas verificações em segundo plano.\n                            verificarManoDeObraAsync();\n                            verificarEnParteBorradorAsync();\n                        } else {\n                            // --- CORREÇÃO AQUI ---\n                            // CASO 2: A ORDEM É DESSELECIONADA\n                            // Limpamos manualmente as variáveis de mensagem e atualizamos a tela.\n                            window.otras_indicaciones_mano_de_obra = '';\n                            window.otras_indicaciones_parte_borrador = '';\n                            if (typeof window.otrasIndicaciones === 'function') {\n                                window.otrasIndicaciones();\n                            }\n                        }\n                    };\n                });\n            })();\n        ", (document.head || document.documentElement).appendChild(_0x197a6f), _0x197a6f.remove();
      } catch (_0x9bd46b) {
        console.error("Falha ao injetar script de otimização de clique:", _0x9bd46b);
      }
    }

    function _0x2dff9d() {
      const _0x145caf = (_0xcd7841, _0x59e520) => {
          const _0x5b10a5 = setInterval(() => {
            const _0x2164b2 = document.querySelector(_0xcd7841);
            _0x2164b2 && (clearInterval(_0x5b10a5), _0x59e520(_0x2164b2));
          }, 0x64);
        };
      _0x145caf("#resultado table tr", () => {
        if (document.querySelector('.titanflow-add-btn')) return;
        GM_addStyle("\n            .titanflow-add-btn {\n                background-color: #28a745;\n                color: white;\n                border: none;\n                border-radius: 50%;\n                width: 20px;\n                height: 20px;\n                font-size: 15px;\n                line-height: 20px;\n                font-weight: bold;\n                cursor: pointer;\n                transition: transform 0.1s;\n\n                /* A chave para o alinhamento correto sem quebrar o layout */\n                vertical-align: middle;\n                margin-right: 6px;\n            }\n            .titanflow-add-btn:hover {\n                transform: scale(1.1);\n            }\n        ");

        function _0x452f4b(_0x1429e4) {
          if (_0x2b7552.includes(_0x1429e4)) {
            _0x2786ff("Ordem " + _0x1429e4 + " já está na lista.", 'info', 0x7d0);
            return;
          }
          _0x2b7552['push'](_0x1429e4), _0x13d195(), _0x5f5540();
          const _0x142ee2 = document.getElementById('ordens-input');
          _0x142ee2 && (_0x142ee2.value = _0x2b7552.join('\x0a') + '\x0a', _0x142ee2.dispatchEvent(new Event("input"))), _0x2786ff('Ordem\x20' + _0x1429e4 + " adicionada!", "success", 0x7d0);
        }
        const _0x32b23f = document['querySelectorAll']('#resultado\x20table\x20tr.bgcolor0,\x20#resultado\x20table\x20tr.bgcolor1');
        _0x32b23f.forEach(_0x9f4685 => {
          const _0x2bc9de = _0x9f4685.cells[0x0], _0x3f8442 = _0x2bc9de?.['textContent'].trim();
          if (_0x3f8442 && /^\d+$/ .test(_0x3f8442)) {
            const _0x1cc5cb = document['createElement']("button");
            _0x1cc5cb.className = "titanflow-add-btn", _0x1cc5cb.textContent = '+', _0x1cc5cb.title = 'Adicionar\x20OT\x20' + _0x3f8442 + " à lista", _0x1cc5cb.addEventListener("click", _0x15136c => {
              _0x15136c.stopPropagation(), _0x452f4b(_0x3f8442);
            }), _0x2bc9de.prepend(_0x1cc5cb);
          }
        });
      });
    }

    function _0x493e8f() {
      // A página de Equipamentos não compartilha nada do fluxo de Ordens e
      // Planos: lá mostrar_acciones_disponibles tem outra assinatura e as
      // verificações de mão de obra e parte borrador não existem. Por isso
      // ela tem caminho próprio, e só para administrador.
      if (new URLSearchParams(window.location.search).get('seccion') === 'titan_equipos') {
        if (_0x4458b3 === 'administrador') { _0x56ca07(); _painelEquipamentos(); }
        return;
      }
      _0x3b4bec(), _0x365d4e(), _0x2dff9d(), _0x56ca07();
      const _0xfad1a6 = new URLSearchParams(window.location.search)
        , _0xac3e73 = _0xfad1a6.get("seccion");
      if (_0xac3e73 === "titan_trabajos_ordenes" || _0xac3e73 === "titan_trabajos_pedidos") _0xc4d1f2(), _0x3b5be5(), _0x483135(), _0x239759(), _0x21ab2c(), _0x1d4458(), _0x3d29a5();
      else(_0xac3e73 === "titan_planes_de_mantenimiento" || _0xac3e73 === "titan_planes_programacion") && (_0x4458b3 !== "tecnico" && _0x2ebe4b());
    }

    function _0x3909dc() {
      GM_addStyle("\n        .titanflow-modal-overlay {\n            position: fixed; top: 0; left: 0; width: 100%; height: 100%;\n            background-color: rgba(0, 0, 0, 0.6); z-index: 10003;\n            display: flex; justify-content: center; align-items: center;\n            opacity: 0; transition: opacity 0.3s ease;\n        }\n        .titanflow-modal-content {\n            background-color: #ffffff; padding: 25px; border-radius: 8px;\n            box-shadow: 0 5px 15px rgba(0,0,0,0.3); width: 90%; max-width: 680px; /* Largura ajustada */\n            transform: scale(0.9); transition: transform 0.3s ease;\n            font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n            max-height: 70vh; /* Adiciona altura máxima para permitir rolagem */\n            overflow-y: auto; /* Adiciona a barra de rolagem quando necessário */\n        }\n        .titanflow-modal-header {\n            display: flex; justify-content: space-between; align-items: center;\n            border-bottom: 1px solid #e9ecef; padding-bottom: 15px; margin-bottom: 15px;\n        }\n        .titanflow-modal-header h3 { margin: 0; font-size: 20px; color: #333; }\n        .titanflow-modal-close {\n            background: none; border: none; font-size: 24px; cursor: pointer; color: #888; padding: 0 5px;\n        }\n\n        .titanflow-hotkey-item {\n            display: flex; align-items: flex-start; margin-bottom: 12px;\n        }\n        .titanflow-hotkey-key {\n            background-color: #e9ecef; border: 1px solid #dee2e6; border-radius: 4px;\n            padding: 4px 8px; font-weight: bold; font-size: 16px; margin-right: 15px; color: #495057;\n        }\n        .titanflow-hotkey-desc p { margin: 0; color: #333; font-weight: 500; }\n        .titanflow-hotkey-desc small { color: #6c757d; font-style: italic; }\n\n        /* --- NOVOS ESTILOS PARA O PAINEL ÚNICO --- */\n        .modal-section-title {\n            font-size: 18px;\n            font-weight: 600;\n            color: #333;\n            margin-top: 25px;\n            margin-bottom: 15px;\n            padding-bottom: 10px;\n            border-bottom: 2px solid #e9ecef;\n        }\n        .tutorial-container {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Layout responsivo */\n            gap: 20px;\n        }\n        .tutorial-method {\n            padding: 15px;\n            border: 1px solid #e9ecef;\n            border-radius: 8px;\n            background-color: #f8f9fa;\n        }\n        .tutorial-method h4 {\n            margin: 0 0 15px 0;\n            color: #333;\n            border-bottom: 1px solid #dee2e6;\n            padding-bottom: 10px;\n        }\n        .tutorial-steps {\n            padding-left: 20px;\n            margin: 0;\n            color: #495057;\n            line-height: 1.6;\n            font-size: 14px;\n        }\n        .tutorial-steps li { margin-bottom: 10px; }\n        .tutorial-steps code {\n            background-color: #e9ecef;\n            padding: 2px 5px;\n            border-radius: 4px;\n            font-family: monospace;\n        }\n        .update-link-container { margin-top: 15px; }\n        .update-link-container a {\n            display: block; /* Ocupa a largura toda */\n            text-decoration: none;\n            padding: 10px 12px;\n            border-radius: 5px;\n            text-align: center;\n            font-weight: bold;\n            transition: all 0.2s ease;\n            background-color: #28a745;\n            color: white;\n            border: 1px solid #28a745;\n        }\n        .update-link-container a:hover { filter: brightness(110%); }\n    ");
    }

    function _0x3861f3() {
      !document['querySelector'](".titanflow-modal-overlay") && _0x3909dc();
      const _0x454274 = typeof GM_info !== "undefined" ? GM_info['script'].version : "?.?";
      let _0x695c90 = [{
        'key': '1'
        , 'desc': 'Ir\x20para\x20a\x20aba\x20\x22Seleção\x22'
        , 'example': "Acessa rapidamente a aba principal de seleção de ordens."
      }, {
        'key': '3'
        , 'desc': "Ir para a aba \"Execução\""
        , 'example': "Acessa a aba para preencher dados de execução e fechamento."
      }, {
        'key': 'S'
        , 'desc': "Salvar Seleção de Ordens"
        , 'example': "Salva as ordens digitadas na caixa de texto."
      }, {
        'key': 'C'
        , 'desc': "Capturar Ordens Visíveis"
        , 'example': "Adiciona todas as ordens da tela à sua lista."
      }, {
        'key': 'X'
        , 'desc': "Limpar Seleção de Ordens"
        , 'example': 'Limpa\x20todas\x20as\x20ordens\x20da\x20sua\x20lista.'
      }, {
        'key': 'Z'
        , 'desc': "Ocultar/Mostrar Painel"
        , 'example': "Alterna a visibilidade do painel do TitanSystem."
      }];
      _0x4458b3 !== "tecnico" && (_0x695c90['push']({
        'key': '2'
        , 'desc': "Ir para a aba \"Reprogramação\""
        , 'example': "Vai direto para a aba de reprogramar datas e descrições."
      }), _0x695c90.push({
        'key': '4'
        , 'desc': "Ir para a aba \"Pedidos\""
        , 'example': "Abre a aba para criar novos pedidos ou emitir ordens."
      }), _0x695c90.sort((_0x216cd5, _0x1f8a51) => _0x216cd5.key.localeCompare(_0x1f8a51['key'], undefined, {
        'numeric': !![]
        , 'sensitivity': "base"
      })));
      let _0x38ba2b = '';
      _0x4458b3 === "tecnico" ? _0x38ba2b = "\n                    <h4 class=\"modal-section-title\">Como Usar o Painel Principal 📋</h4>\n                    <p>O painel flutuante é seu centro de comando para automatizar tarefas. Pressione <b>Z</b> para ocultá-lo ou mostrá-lo.</p>\n\n                    <h5>Aba 1: Seleção</h5>\n                    <p>É aqui que você informa para quais ordens o TitanSystem deve trabalhar. Liste as OSs na caixa de texto ou use o botão <b>\"Capturar Ordens Visíveis\"</b> para pegar todas da tela.</p>\n\n                    <h5>Aba 3: Execução e Fechamento</h5>\n                    <p>Após selecionar as ordens, venha para esta aba. Preencha os campos (Problema, Causa, etc.) uma única vez e clique em <b>\"Executar em Massa\"</b> para aplicar a todas as ordens da sua lista.</p>\n                " : _0x38ba2b = "\n                    <h4 class=\"modal-section-title\">Como Usar o Painel Principal 📋</h4>\n                    <p>O painel flutuante é seu centro de comando. Pressione <b>Z</b> para ocultá-lo ou mostrá-lo. Use as abas para realizar ações em massa nas ordens listadas na <b>Aba 1: Seleção</b>.</p>\n\n                    <h5>Aba 1: Seleção (O Coração do Script)</h5>\n                    <p>Liste as OSs na caixa de texto ou use <b>\"Capturar Ordens Visíveis\"</b>. Depois, use as ações em massa:</p>\n                    <ul class=\"tutorial-steps\" style=\"padding-left: 25px;\">\n                      <li><b>Definir Mão de Obra:</b> Adiciona os técnicos selecionados a todas as OSs.</li>\n                      <li><b>Remover Mão de Obra:</b> Remove todos os técnicos de todas as OSs.</li>\n                      <li><b>Ativar em Massa:</b> Ativa todas as ordens que já possuem mão de obra.</li>\n                    </ul>\n\n                    <h5>Aba 2: Reprogramação</h5>\n                    <p>Mude a data e/ou a descrição de todas as ordens da sua lista de uma só vez.</p>\n\n                    <h5>Aba 3: Execução e Fechamento</h5>\n                    <p>Preencha os campos (Problema, Causa, etc.) uma vez e clique em <b>\"Executar em Massa\"</b>. Para finalizar, escolha uma <b>Calificación</b> e clique em <b>\"Fechar em Massa\"</b>.</p>\n\n                    <h5>Aba 4: Pedidos</h5>\n                    <p>Crie novos Pedidos de Trabalho rapidamente para um ou mais equipamentos da lista.</p>\n\n                    <h5>Painel de Planejamento</h5>\n                    <p>Nas telas de \"Planificação\", um painel diferente aparece para criar e programar Planos de Manutenção de forma massiva.</p>\n                ";
      const _0x36dd51 = typeof GM_info !== "undefined" ? GM_info.script.downloadURL : 'https://raw.githubusercontent.com/Heaven0016/controle-licencas/main/public/titan.user.js'
        , _0x4d737c = document.createElement("div");
      _0x4d737c['className'] = "titanflow-modal-overlay", _0x4d737c.innerHTML = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Ajuda\x20do\x20TitanSystem\x20🚀</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22titanflow-modal-close\x22>&times;</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-body\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x38ba2b + "\n\n                <h4 class=\"modal-section-title\">Atalhos de Teclado ⌨️</h4>\n                " + _0x695c90.map(_0x104a4c => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-hotkey-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-hotkey-key\x22>' + _0x104a4c.key + "</div>\n                        <div class=\"titanflow-hotkey-desc\">\n                            <p>" + _0x104a4c['desc'] + "</p>\n                            <small>" + _0x104a4c.example + "</small>\n                        </div>\n                    </div>\n                ")['join']('') + "\n                <h4 class=\"modal-section-title\">Como Atualizar o Script 🔄</h4>\n                <div class=\"tutorial-container\">\n                    <div class=\"tutorial-method\">\n                        <h4>Método 1: Pela Extensão (Recomendado)</h4>\n                        <ol class=\"tutorial-steps\">\n                            <li>Clique no ícone da extensão <b>Tampermonkey</b> no seu navegador.</li>\n                            <li>No menu, clique em <code>Utilitários</code> e depois em <code>Verificar atualização de scripts</code>.</li>\n                            <li>Se houver uma nova versão, um botão para atualizar aparecerá.</li>\n                            <li>Recarregue a página do Titan (F5). Sua versão atual é a <b>v" + _0x454274 + '</b>.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ol>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tutorial-method\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4>Método\x202:\x20Link\x20Direto\x20(Manual)</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ol\x20class=\x22tutorial-steps\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Clique\x20no\x20botão\x20\x22Abrir\x20Link\x20de\x20Atualização\x22\x20abaixo.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>O\x20Tampermonkey\x20mostrará\x20as\x20informações\x20do\x20script.\x20Clique\x20em\x20<b>\x22Reinstalar\x22</b>\x20ou\x20<b>\x22Atualizar\x22</b>.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Volte\x20para\x20a\x20página\x20do\x20Titan\x20e\x20atualize-a\x20(F5).</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ol>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22update-link-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22' + _0x36dd51 + "\" target=\"_blank\">Abrir Link de Atualização</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ", document.body.appendChild(_0x4d737c);
      const _0xeca06 = _0x4d737c.querySelector(".titanflow-modal-content");
      setTimeout(() => {
        _0x4d737c.style.opacity = '1', _0xeca06.style.transform = "scale(1)";
      }, 0xa);
      const _0x2c14ca = () => {
        _0x4d737c.style.opacity = '0', _0xeca06.style.transform = "scale(0.9)", setTimeout(() => {
          document.body.contains(_0x4d737c) && document.body['removeChild'](_0x4d737c);
        }, 0x12c);
      };
      _0x4d737c.querySelector(".titanflow-modal-close")['onclick'] = _0x2c14ca, _0x4d737c.addEventListener('click', _0x5a5f4e => {
        if (_0x5a5f4e.target === _0x4d737c) _0x2c14ca();
      }), document.addEventListener('keydown', function _0x89a323(_0x27a77a) {
        _0x27a77a['key'] === 'Escape' && (_0x2c14ca(), document.removeEventListener('keydown', _0x89a323));
      });
    }
    async function _0x51ee14(_0x552dd7, _0x23f598, _0x4ec315) {
      console.log("[animarBotaoPlanejamento] Iniciando animação...");
      try {
        const _0x916a40 = document['getElementById']("painel-planejamento");
        if (!_0x916a40) {
          console.error('[animarBotaoPlanejamento]\x20ERRO:\x20Painel\x20#painel-planejamento\x20não\x20encontrado!'), await _0x4ec315(() => {});
          return;
        }
        console['log']("[animarBotaoPlanejamento] Animação será executada no painel: #" + _0x916a40['id']);
        const _0x23d749 = window['getComputedStyle'](_0x552dd7).backgroundColor
          , _0x361546 = window.getComputedStyle(_0x552dd7)
          , _0x159846 = _0x552dd7.getBoundingClientRect()
          , _0x281720 = _0x23f598['getBoundingClientRect']()
          , _0x3c93fb = _0x916a40.getBoundingClientRect()
          , _0x24fe64 = document['createElement']('div');
        _0x24fe64.className = 'titanflow-action-btn', _0x24fe64.innerHTML = "<span class=\"btn-text\"></span><span class=\"btn-progress-fill\"></span>", Object.assign(_0x24fe64.style, {
          'position': "absolute"
          , 'top': _0x159846.top - _0x3c93fb.top + 'px'
          , 'left': _0x159846.left - _0x3c93fb.left + 'px'
          , 'width': _0x159846.width + 'px'
          , 'height': _0x159846.height + 'px'
          , 'backgroundColor': _0x23d749
          , 'borderRadius': _0x361546.borderRadius
          , 'zIndex': '10000'
          , 'color': "white"
          , 'fontWeight': "bold"
          , 'fontSize': _0x361546.fontSize
          , 'transition': "width 0.4s ease-in-out, left 0.4s ease-in-out, border-radius 0.4s ease-in-out"
        }), _0x916a40.appendChild(_0x24fe64), _0x23f598.style.visibility = "hidden";
        const _0x3ff0eb = _0x24fe64.querySelector('.btn-progress-fill')
          , _0x420bb6 = _0x24fe64.querySelector('.btn-text');
        setTimeout(() => {
          Object.assign(_0x24fe64.style, {
            'left': _0x281720.left - _0x3c93fb.left + 'px'
            , 'width': _0x281720.width + 'px'
            , 'borderRadius': '8px'
          });
        }, 0xa);
        let _0x1d7256 = null
          , _0x864769 = 0x0
          , _0x373538 = 0x0
          , _0x5bbb80 = ![]
          , _0x4e75e3 = null;
        try {
          await new Promise(_0x298e0b => setTimeout(_0x298e0b, 0x190)), _0x420bb6['textContent'] = '0%', _0x4e75e3 = setInterval(() => {
            if (_0x864769 > 0x0 || _0x5bbb80) {
              clearInterval(_0x4e75e3);
              return;
            }
            if (_0x373538 < 0.15) {
              _0x373538 += 0.002;
              const _0x3ac328 = Math.floor(_0x373538 * 0x64);
              _0x3ff0eb['style'].width = _0x3ac328 + '%', _0x420bb6['textContent'] = _0x3ac328 + '%';
            }
          }, 0x1e);
          const _0x3ccae1 = _0x5bfec0 => {
            if (_0x4e75e3) clearInterval(_0x4e75e3);
            _0x864769 = Math.max(_0x5bfec0, _0x864769);
          };
          _0x1d7256 = setInterval(() => {
            let _0x39c75f = _0x864769;
            if (_0x5bbb80) {
              _0x39c75f = 0x1;
              if (_0x373538 > 0.995) _0x373538 = 0x1;
            }
            _0x864769 > 0x0 && (_0x373538 += (_0x39c75f - _0x373538) * 0.1);
            if (_0x864769 > 0x0 || _0x5bbb80) {
              const _0x5f5683 = Math.floor(_0x373538 * 0x64);
              _0x3ff0eb['style']['width'] = _0x5f5683 + '%', _0x420bb6.textContent = _0x5f5683 + '%';
            }
            _0x373538 >= 0x1 && (_0x373538 = 0x1, _0x3ff0eb.style['width'] = "100%", _0x420bb6.textContent = "Concluído!", clearInterval(_0x1d7256));
          }, 0x14), await _0x4ec315(_0x3ccae1), _0x5bbb80 = !![];
        } catch (_0x4685c3) {
          if (_0x4e75e3) clearInterval(_0x4e75e3);
          if (_0x1d7256) clearInterval(_0x1d7256);
          console.error("[animarBotaoPlanejamento] Erro durante o processamento:", _0x4685c3), _0x420bb6['textContent'] = "Erro!", _0x5bbb80 = !![];
        }
        setTimeout(() => {
          if (_0x4e75e3) clearInterval(_0x4e75e3);
          if (_0x1d7256) clearInterval(_0x1d7256);
          Object.assign(_0x24fe64.style, {
            'left': _0x159846.left - _0x3c93fb['left'] + 'px'
            , 'width': _0x159846['width'] + 'px'
            , 'borderRadius': _0x361546.borderRadius
          }), _0x420bb6.style.opacity = '0', _0x3ff0eb.style.opacity = '0', setTimeout(() => {
            _0x916a40.removeChild(_0x24fe64), _0x23f598['style'].visibility = "visible";
          }, 0x190);
        }, 0x5dc);
      } catch (_0x53935e) {
        console.error("[animarBotaoPlanejamento] Erro inesperado na configuração:", _0x53935e);
        if (_0x23f598) _0x23f598.style['visibility'] = "visible";
      }
    }


    // ===== Aba "Equipamentos": criação de equipamentos =====================
      // Espelha o formulário nativo (titan_equipos&op=a) num iframe oculto:
      // as listas saem dele e o envio é feito por ele, então a cascata
      // Categoria->Classe continua sendo a do TITAN e nunca desatualiza.
      async function _abaEquipamentos(_cont) {
        const _urlForm = '/albatros/admin.php?SESID=' + _0x2012f5() +
          '&seccion=titan_equipos&op=a&in=10&n2=202&n1=200';

        _cont.innerHTML =
          '<div class="titanflow-grid">' +
            '<div class="titanflow-titulo-secao"><span>Novo Equipamento</span>' +
              '<button id="titanflow-equip-limpar" title="Limpar todos os campos">\u{1F9F9} Limpar</button></div>' +
            '<div><label for="titanflow-equip-tag">Tag:</label><input type="text" id="titanflow-equip-tag" placeholder="Ex: BP-1001"></div>' +
            '<div><label for="titanflow-equip-nombre">Nome:</label><input type="text" id="titanflow-equip-nombre" placeholder="Nome do equipamento"></div>' +
            '<div><label for="titanflow-equip-cat">Categoria:</label><select id="titanflow-equip-cat"><option value="">-- Carregando... --</option></select></div>' +
            '<div><label for="titanflow-equip-clase">Classe:</label><select id="titanflow-equip-clase" disabled><option value="">-- Primeiro escolha a Categoria --</option></select></div>' +
            '<div><label for="titanflow-equip-crit">Criticidade:</label><select id="titanflow-equip-crit"></select></div>' +
            '<div><label for="titanflow-equip-marca">Marca:</label><input type="text" id="titanflow-equip-marca"></div>' +
            '<div><label for="titanflow-equip-estado">Estado:</label><select id="titanflow-equip-estado"></select></div>' +
            '<div><label for="titanflow-equip-tipo">Tipo:</label><select id="titanflow-equip-tipo"></select></div>' +
            '<div><label for="titanflow-equip-modelo">Modelo:</label><input type="text" id="titanflow-equip-modelo"></div>' +
            '<div><label for="titanflow-equip-serie">N\u00ba de S\u00e9rie:</label><input type="text" id="titanflow-equip-serie"></div>' +
            '<div><label for="titanflow-equip-valor">Valor USD:</label><input type="text" id="titanflow-equip-valor"></div>' +
            '<div class="titanflow-full-width"><label for="titanflow-equip-datos">Dados T\u00e9cnicos:</label>' +
              '<textarea id="titanflow-equip-datos" rows="3" style="width:100%;"></textarea></div>' +
            '<div class="titanflow-titulo-secao" style="margin-top:6px;"><span>Hierarquia</span></div>' +
            '<div class="titanflow-full-width" style="position:relative;">' +
              '<label for="titanflow-equip-padre-busca">Padre (opcional):</label>' +
              '<input type="text" id="titanflow-equip-padre-busca" placeholder="Buscar por tag ou nome do equipamento pai...">' +
              '<button type="button" id="titanflow-equip-padre-arvore" title="Ver a árvore completa de equipamentos" style="margin-top:4px;width:100%;padding:6px;border:1px solid #3366ff;border-radius:5px;background:#fff;color:#3366ff;font-weight:bold;cursor:pointer;font-size:12px;">🌳 Ver árvore completa</button>' +
              '<div id="titanflow-equip-padre-resultados" class="eq-busca-resultados"></div>' +
              '<div id="titanflow-equip-padre-selecionado" style="display:none;margin-top:6px;font-size:12px;background:#eef3ff;border:1px solid #cfe0ff;border-radius:5px;padding:6px 8px;">' +
                '<span id="titanflow-equip-padre-texto"></span>' +
                '<button type="button" id="titanflow-equip-padre-limpar" title="Remover pai" style="float:right;background:none;border:none;color:#c0392b;font-weight:bold;cursor:pointer;">\u2715</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div style="margin-top:12px;">' +
            '<button id="btn-criar-equipamento" style="width:100%;padding:10px;border:none;border-radius:5px;background-color:#27ae60;color:white;font-weight:bold;cursor:pointer;">' +
              '\u2795 Criar Equipamento</button>' +
            '<div id="titanflow-equip-status" style="font-size:12px;color:#888;margin-top:8px;text-align:center;">Carregando dados do TITAN\u2026</div>' +
          '</div>';

        const _acha = (id) => document.getElementById(id);
        const _status = (txto, cor) => {
          const e = _acha('titanflow-equip-status');
          if (e) { e.textContent = txto; e.style.color = cor || '#888'; }
        };

        // --- iframe com o formulário real -------------------------------
        const _antigo = _acha('titanflow-equip-iframe');
        if (_antigo) _antigo.remove();
        const _quadro = document.createElement('iframe');
        _quadro.id = 'titanflow-equip-iframe';
        _quadro.style.display = 'none';
        document.body.appendChild(_quadro);

        const _docTitan = () => { try { return _quadro.contentDocument; } catch (_e) { return null; } };

        const _esperarForm = () => new Promise((ok, falha) => {
          let voltas = 0;
          const t = setInterval(() => {
            voltas++;
            const d = _docTitan();
            if (d && d.readyState === 'complete' && d.getElementById('formDatos')) { clearInterval(t); ok(d); }
            else if (voltas > 200) { clearInterval(t); falha(new Error('Timeout ao carregar o formul\u00e1rio de equipamentos.')); }
          }, 100);
        });

        const _recarregarForm = () => { _quadro.src = _urlForm; return _esperarForm(); };

        const _clonar = (origem, destino, textoVazio) => {
          if (!origem || !destino) return;
          destino.innerHTML = '';
          const vazio = document.createElement('option');
          vazio.value = ''; vazio.textContent = '-- ' + textoVazio + ' --';
          destino.appendChild(vazio);
          for (const o of origem.options) {
            if (o.value === '') continue;
            const n = document.createElement('option');
            n.value = o.value; n.textContent = o.text;
            destino.appendChild(n);
          }
        };

        let _titan = null;
        try {
          _titan = await _recarregarForm();
        } catch (erro) {
          console.error('[TitanSystem][Equipamentos]', erro);
          _status('N\u00e3o foi poss\u00edvel carregar o formul\u00e1rio do TITAN. Recarregue a p\u00e1gina.', '#e74c3c');
          return;
        }

        const _cat = _acha('titanflow-equip-cat');
        const _classe = _acha('titanflow-equip-clase');
        _clonar(_titan.getElementById('dummy_cat'), _cat, 'Selecione a Categoria');
        _clonar(_titan.getElementById('key__equipos_criticidad__id'), _acha('titanflow-equip-crit'), 'Selecione a Criticidade');
        _clonar(_titan.getElementById('key__equipos_estados__id'), _acha('titanflow-equip-estado'), 'Selecione o Estado');
        _clonar(_titan.getElementById('key__equipos_tipos__id'), _acha('titanflow-equip-tipo'), 'Selecione o Tipo');
        _status('Pronto.');

        // --- Padre (hierárquico) ------------------------------------
        // Reaproveita a mesma lista de equipamentos carregada para a OS
        // MARINE (_0x34e176/_0x3a1f53); se ainda não foi carregada nesta
        // sessão (usuário entrou direto em Equipamentos), carrega agora.
        if (_0x34e176.length === 0) {
          try { await _0x3a1f53(); } catch (_e) { console.error('[TitanSystem][Equipamentos] falha ao carregar lista para o Padre:', _e); }
        }
        let _padreId = '';
        const _padreBusca = _acha('titanflow-equip-padre-busca');
        const _padreResultados = _acha('titanflow-equip-padre-resultados');
        const _padreBox = _acha('titanflow-equip-padre-selecionado');
        const _padreTexto = _acha('titanflow-equip-padre-texto');
        const _limparPadre = () => {
          _padreId = '';
          if (_padreBox) _padreBox.style.display = 'none';
          if (_padreBusca) _padreBusca.value = '';
          if (_padreResultados) _padreResultados.style.display = 'none';
        };
        const _escolherPadre = (equip) => {
          _padreId = String(equip.id);
          _padreTexto.textContent = (equip.tag || '') + ' \u2014 ' + (equip.nome || '');
          _padreBox.style.display = 'block';
          _padreBusca.value = '';
          _padreResultados.style.display = 'none';
        };
        if (_acha('titanflow-equip-padre-limpar')) _acha('titanflow-equip-padre-limpar').onclick = _limparPadre;
        if (_padreBusca) _padreBusca.oninput = () => {
          const termo = _0x360915(_padreBusca.value.trim());
          if (!termo) { _padreResultados.style.display = 'none'; return; }
          const achados = _0x34e176.filter((eq) => _0x360915(eq.nome || '').includes(termo) || _0x360915(eq.tag || '').includes(termo)).slice(0, 20);
          _padreResultados.innerHTML = achados.length
            ? achados.map((eq) => '<div class="eq-busca-item" data-id="' + eq.id + '"><b>' + (eq.tag || '') + '</b> ' + (eq.nome || '') + '</div>').join('')
            : '<div style="padding:8px;color:#888;font-size:12px;">Nenhum equipamento encontrado.</div>';
          _padreResultados.style.display = 'block';
        };
        if (_padreResultados) _padreResultados.onclick = (ev) => {
          const item = ev.target.closest('.eq-busca-item');
          if (!item) return;
          const equip = _0x34e176.find((e) => String(e.id) === item.dataset.id);
          if (equip) _escolherPadre(equip);
        };
        if (!window.__titanflowPadreClickHandlerInstalado) {
          window.__titanflowPadreClickHandlerInstalado = true;
          document.addEventListener('click', (ev) => {
            const busca = document.getElementById('titanflow-equip-padre-busca');
            const resultados = document.getElementById('titanflow-equip-padre-resultados');
            if (busca && resultados && !busca.contains(ev.target) && !resultados.contains(ev.target)) {
              resultados.style.display = 'none';
            }
          });
        }


        // --- árvore completa de equipamentos (estilo Sentinel) ----------
        // Reaproveita _0x34e176 (agora com o campo pai, extraído da própria
        // página nativa) — não guarda nada estático: toda vez que a aba
        // abre, reconstrói a árvore a partir da lista carregada na sessão.
        const _arvoreFilhos = new Map();
        for (const _eq of _0x34e176) {
          const _chave = _eq.pai || '';
          if (!_arvoreFilhos.has(_chave)) _arvoreFilhos.set(_chave, []);
          _arvoreFilhos.get(_chave).push(_eq);
        }
        const _escaparHtml = (_s) => (_s || '').toString()
          .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;');
        const _construirArvoreHtml = (_paiId) => {
          const _filhos = (_arvoreFilhos.get(_paiId) || []).slice()
            .sort((a, b) => (a.nome || '').localeCompare(b.nome || '', 'pt-BR'));
          if (!_filhos.length) return '';
          return '<ul>' + _filhos.map((_eq) => {
            const _temFilhos = (_arvoreFilhos.get(String(_eq.id)) || []).length > 0;
            return '<li class="eq-arvore-item">' +
              '<span class="eq-arvore-linha">' +
                '<span class="eq-arvore-toggle' + (_temFilhos ? '' : ' eq-arvore-toggle-vazio') + '">▶</span>' +
                '<span class="eq-arvore-rotulo" data-id="' + _escaparHtml(_eq.id) + '"><b>' + _escaparHtml(_eq.tag) + '</b> ' + _escaparHtml(_eq.nome) + '</span>' +
              '</span>' +
              (_temFilhos ? _construirArvoreHtml(String(_eq.id)) : '') +
              '</li>';
          }).join('') + '</ul>';
        };
        let _arvoreOverlay = document.getElementById('eq-arvore-overlay');
        if (!_arvoreOverlay) {
          _arvoreOverlay = document.createElement('div');
          _arvoreOverlay.id = 'eq-arvore-overlay';
          _arvoreOverlay.className = 'eq-arvore-overlay';
          _arvoreOverlay.style.display = 'none';
          _arvoreOverlay.innerHTML =
            '<div class="eq-arvore-modal">' +
              '<div class="eq-arvore-cabecalho">' +
                '<h3>Árvore de Equipamentos 🌳</h3>' +
                '<button type="button" id="eq-arvore-fechar" class="eq-arvore-fechar">×</button>' +
              '</div>' +
              '<input type="text" id="eq-arvore-filtro" placeholder="Filtrar por tag ou nome...">' +
              '<div id="eq-arvore-lista" class="eq-arvore-lista"></div>' +
            '</div>';
          document.body.appendChild(_arvoreOverlay);
        }
        const _arvoreLista = document.getElementById('eq-arvore-lista');
        const _arvoreFiltro = document.getElementById('eq-arvore-filtro');
        let _arvoreConstruida = false;
        const _fecharArvore = () => { _arvoreOverlay.style.display = 'none'; };
        const _filtrarArvore = (_termoBruto) => {
          const _termo = _0x360915((_termoBruto || '').trim());
          const _itens = _arvoreLista.querySelectorAll('.eq-arvore-item');
          if (!_termo) {
            _itens.forEach((_li) => {
              _li.style.display = '';
              _li.classList.remove('aberto');
              const _t = _li.querySelector(':scope > .eq-arvore-linha .eq-arvore-toggle');
              if (_t && !_t.classList.contains('eq-arvore-toggle-vazio')) _t.textContent = '▶';
            });
            return;
          }
          _itens.forEach((_li) => { _li.style.display = 'none'; });
          _itens.forEach((_li) => {
            const _rotulo = _li.querySelector(':scope > .eq-arvore-linha .eq-arvore-rotulo');
            const _texto = _0x360915(_rotulo ? _rotulo.textContent : '');
            if (!_texto.includes(_termo)) return;
            let _atual = _li;
            while (_atual && _atual.classList && _atual.classList.contains('eq-arvore-item')) {
              _atual.style.display = '';
              _atual.classList.add('aberto');
              const _t = _atual.querySelector(':scope > .eq-arvore-linha .eq-arvore-toggle');
              if (_t && !_t.classList.contains('eq-arvore-toggle-vazio')) _t.textContent = '▼';
              _atual = _atual.parentElement && _atual.parentElement.closest('.eq-arvore-item');
            }
          });
        };
        const _abrirArvore = () => {
          if (!_arvoreConstruida) {
            _arvoreLista.innerHTML = _construirArvoreHtml('');
            _arvoreConstruida = true;
          }
          _arvoreOverlay.style.display = 'flex';
          _arvoreFiltro.value = '';
          _filtrarArvore('');
          _arvoreFiltro.focus();
        };
        _arvoreLista.onclick = (ev) => {
          const _toggle = ev.target.closest('.eq-arvore-toggle');
          if (_toggle && !_toggle.classList.contains('eq-arvore-toggle-vazio')) {
            const _item = _toggle.closest('.eq-arvore-item');
            _item.classList.toggle('aberto');
            _toggle.textContent = _item.classList.contains('aberto') ? '▼' : '▶';
            return;
          }
          const _rotulo = ev.target.closest('.eq-arvore-rotulo');
          if (_rotulo) {
            const _equip = _0x34e176.find((_e) => String(_e.id) === _rotulo.dataset.id);
            if (_equip) { _escolherPadre(_equip); _fecharArvore(); }
          }
        };
        _arvoreFiltro.oninput = () => _filtrarArvore(_arvoreFiltro.value);
        _arvoreOverlay.onclick = (ev) => { if (ev.target === _arvoreOverlay) _fecharArvore(); };
        document.getElementById('eq-arvore-fechar').onclick = _fecharArvore;
        if (_acha('titanflow-equip-padre-arvore')) {
          _acha('titanflow-equip-padre-arvore').onclick = (ev) => { ev.preventDefault(); _abrirArvore(); };
        }


        // --- cascata: quem monta a lista de classes é o populate() do TITAN
        // Duas etapas separadas de propósito. Espelhar no painel recria o
        // <select> e portanto zera o que o usuário escolheu, então na hora de
        // enviar só se popula o formulário do TITAN — sem tocar no painel.
        const _popularClassesNoTitan = () => {
          const alvo = _titan.getElementById('dummy_cat');
          if (!alvo) return;
          alvo.value = _cat.value;
          try {
            const jan = _quadro.contentWindow;
            if (jan && typeof jan.populate === 'function') jan.populate(alvo, 'key__equipos_clases__id');
          } catch (_e) { console.error('[TitanSystem][Equipamentos] populate falhou:', _e); }
        };
        const _espelharClasses = () => {
          _popularClassesNoTitan();
          _clonar(_titan.getElementById('key__equipos_clases__id'), _classe, 'Selecione a Classe');
          _classe.disabled = !_cat.value;
        };
        _cat.onchange = _espelharClasses;

        _acha('titanflow-equip-limpar').onclick = () => {
          ['tag','nombre','marca','modelo','serie','valor','datos'].forEach((s) => {
            const e = _acha('titanflow-equip-' + s); if (e) e.value = '';
          });
          ['cat','clase','crit','estado','tipo'].forEach((s) => {
            const e = _acha('titanflow-equip-' + s); if (e) e.value = '';
          });
          _classe.disabled = true;
          if (typeof _limparPadre === 'function') _limparPadre();
          _status('Campos limpos.');
        };

        // --- criação -----------------------------------------------------
        const OBRIGATORIOS = [
          ['titanflow-equip-tag', 'Tag'],
          ['titanflow-equip-nombre', 'Nome'],
          ['titanflow-equip-clase', 'Classe'],
          ['titanflow-equip-crit', 'Criticidade'],
          ['titanflow-equip-marca', 'Marca'],
          ['titanflow-equip-estado', 'Estado'],
          ['titanflow-equip-tipo', 'Tipo'],
          ['titanflow-equip-modelo', 'Modelo']
        ];

        const _botao = _acha('btn-criar-equipamento');
        _botao.onclick = async () => {
          for (const par of OBRIGATORIOS) {
            const campo = _acha(par[0]);
            if (!campo) {
              _0x2786ff('Erro interno: o campo "' + par[1] + '" n\u00e3o existe no painel (' + par[0] + ').', 'error', 10000);
              return;
            }
            if (!campo.value) {
              _0x2786ff('Erro: O campo "' + par[1] + '" \u00e9 obrigat\u00f3rio.', 'error', 8000);
              try {
                campo.scrollIntoView({ block: 'center', behavior: 'smooth' });
                const antes = campo.style.outline;
                campo.style.outline = '3px solid #e74c3c';
                campo.style.outlineOffset = '2px';
                setTimeout(function () { campo.style.outline = antes; campo.style.outlineOffset = ''; }, 4000);
                campo.focus({ preventScroll: true });
              } catch (_e) {}
              return;
            }
          }

          // guardado ANTES de mexer na cascata, que reconstrói o <select>
          const _classeEscolhida = _classe.value;

          _botao.disabled = true;
          _status('Criando\u2026');
          try {
            const d = _docTitan();
            if (!d || !d.getElementById('formDatos')) throw new Error('Formul\u00e1rio do TITAN indispon\u00edvel.');

            // a lista de classes só existe no form do TITAN depois da cascata
            _popularClassesNoTitan();
            const por = (id, valor) => { const e = d.getElementById(id); if (e) e.value = valor; };
            por('tag', _acha('titanflow-equip-tag').value);
            por('nombre', _acha('titanflow-equip-nombre').value);
            por('key__equipos_clases__id', _classeEscolhida);
            por('key__equipos_criticidad__id', _acha('titanflow-equip-crit').value);
            por('marca', _acha('titanflow-equip-marca').value);
            por('key__equipos_estados__id', _acha('titanflow-equip-estado').value);
            por('key__equipos_tipos__id', _acha('titanflow-equip-tipo').value);
            por('modelo', _acha('titanflow-equip-modelo').value);
            por('numero_de_serie', _acha('titanflow-equip-serie').value);
            por('valor_u$s', _acha('titanflow-equip-valor').value);
            por('datos_tecnicos', _acha('titanflow-equip-datos').value);
            if (_padreId) por('padre_key__equipos__id', _padreId);

            const enviar = d.getElementById('bEnviar');
            if (!enviar) throw new Error('Bot\u00e3o de envio do TITAN n\u00e3o encontrado.');
            enviar.click();

            // o formulário some da página quando o envio conclui
            await new Promise((ok) => {
              let voltas = 0;
              const t = setInterval(() => {
                voltas++;
                const doc = _docTitan();
                if (!doc || !doc.getElementById('formDatos') || voltas > 100) { clearInterval(t); ok(); }
              }, 100);
            });

            _0x2786ff('Equipamento "' + _acha('titanflow-equip-tag').value + '" enviado ao TITAN.', 'success', 6000);
            _status('Criado. Confira em Equipamentos > Consultar.', '#27ae60');
            _titan = await _recarregarForm();
            _espelharClasses();
            if (typeof _limparPadre === 'function') _limparPadre();
          } catch (erro) {
            console.error('[TitanSystem][Equipamentos] Falha ao criar:', erro);
            _0x2786ff('Falha ao criar o equipamento: ' + erro.message, 'error', 8000);
            _status('Falhou. Veja o console (F12).', '#e74c3c');
          } finally {
            _botao.disabled = false;
          }
        };
      }


    // ===== Painel próprio da página de Equipamentos (só administrador) =====
    // Mesma posição, cores e mecânica de mostrar/ocultar do painel de
    // Planejamento (#painel-planejamento / titanflow-toggle-planejamento-btn),
    // para o TitanSystem parecer um só sistema em qualquer tela do TITAN.
    async function _painelEquipamentos() {
      if (document.getElementById('painel-equipamentos')) return;

      GM_addStyle(
        '#painel-equipamentos { position: fixed; top: 40px; left: 10px; width: 480px;' +
        ' background-color: #f0f0f0; border: 1px solid #3366ff; border-radius: 8px; padding: 15px;' +
        ' z-index: 9999; box-shadow: 0 4px 12px rgba(0,0,0,0.15);' +
        ' font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }' +
        '#painel-equipamentos .titanflow-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }' +
        '#painel-equipamentos .titanflow-full-width { grid-column: 1 / -1; }' +
        '#painel-equipamentos label { display: block; font-weight: 600; font-size: 13px; color: #333; margin-bottom: 5px; }' +
        '#painel-equipamentos input, #painel-equipamentos select, #painel-equipamentos textarea {' +
        ' width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }' +
        '#painel-equipamentos input:disabled { background-color: #e9ecef; cursor: not-allowed; }' +
        '#painel-equipamentos .titanflow-titulo-secao { font-size: 16px; font-weight: bold; color: #3366ff;' +
        ' border-bottom: 2px solid #e9ecef; padding-bottom: 8px; margin: 15px 0 10px 0; grid-column: 1 / -1;' +
        ' display: flex; justify-content: space-between; align-items: center; }' +
        '.titanflow-tab-container { display: flex; gap: 2px; margin-bottom: 10px; }' +
        '.titanflow-tab-btn { background-color: #6c757d; color: white; border: none; padding: 8px 12px;' +
        ' border-radius: 5px; cursor: pointer; font-weight: bold; transition: all 0.2s ease;' +
        ' box-shadow: 0 2px 4px rgba(0,0,0,0.15); }' +
        '.titanflow-tab-btn.active { background-color: #3366ff; transform: translateY(-2px); }' +
        '#painel-equipamentos .eq-linha { display: flex; align-items: center; gap: 8px; padding: 4px 2px;' +
        ' border-bottom: 1px solid #f0f0f0; font-size: 12px; }' +
        '#painel-equipamentos .eq-linha input[type=checkbox] { width: auto; margin: 0; }' +
        '#painel-equipamentos .eq-linha.bloqueada { color: #aaa; }' +
        '#painel-equipamentos .eq-lista { max-height: 240px; overflow-y: auto; border: 1px solid #ddd;' +
        ' border-radius: 5px; padding: 4px 8px; }' +
        '#painel-equipamentos .eq-busca-resultados { display: none; max-height: 180px; overflow-y: auto; border: 1px solid #ccc; border-top: none; background: #fff; position: absolute; width: 100%; z-index: 50; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; }' +
        '#painel-equipamentos .eq-busca-item { padding: 6px 10px; cursor: pointer; font-size: 12px; border-bottom: 1px solid #f0f0f0; }' +
        '#painel-equipamentos .eq-busca-item:hover { background-color: #f5f5f5; }' +
        '.eq-arvore-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 10005; display: flex; justify-content: center; align-items: center; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }' +
        '.eq-arvore-modal { background: #fff; border-radius: 8px; width: 90%; max-width: 520px; max-height: 80vh; display: flex; flex-direction: column; padding: 18px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); box-sizing: border-box; }' +
        '.eq-arvore-cabecalho { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }' +
        '.eq-arvore-cabecalho h3 { margin: 0; color: #3366ff; font-size: 17px; }' +
        '.eq-arvore-fechar { background: none; border: none; font-size: 22px; cursor: pointer; color: #888; }' +
        '#eq-arvore-filtro { width: 100%; box-sizing: border-box; padding: 7px; border: 1px solid #ccc; border-radius: 5px; margin-bottom: 10px; }' +
        '.eq-arvore-lista { overflow-y: auto; flex: 1; border: 1px solid #eee; border-radius: 5px; padding: 6px; }' +
        '.eq-arvore-lista ul { list-style: none; margin: 0; padding: 0; }' +
        '.eq-arvore-lista li > ul { padding-left: 18px; display: none; }' +
        '.eq-arvore-item.aberto > ul { display: block; }' +
        '.eq-arvore-linha { display: flex; align-items: center; gap: 4px; padding: 3px 4px; cursor: pointer; border-radius: 4px; font-size: 13px; }' +
        '.eq-arvore-linha:hover { background: #f0f4ff; }' +
        '.eq-arvore-toggle { width: 14px; display: inline-block; color: #3366ff; font-size: 11px; cursor: pointer; user-select: none; }' +
        '.eq-arvore-toggle-vazio { visibility: hidden; }'
      );

      const _p = document.createElement('div');
      _p.id = 'painel-equipamentos';
      _p.innerHTML =
        '<div id="eq-painel-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; cursor:move; user-select:none;" title="Arraste para mover. Duplo clique para restaurar a posi\u00e7\u00e3o.">' +
          '<h3 style="color:#3366ff; margin:0;">TitanSystem Equipamentos \u{1F527}</h3>' +
          '<span style="font-size:12px; color:#888;">v' + GM_info.script.version + '</span>' +
        '</div>' +
        '<div class="titanflow-tab-container">' +
          '<button id="eq-tab-criar" class="titanflow-tab-btn">Criar</button>' +
          '<button id="eq-tab-baixa" class="titanflow-tab-btn">Baixa</button>' +
          '<button id="eq-tab-editar" class="titanflow-tab-btn">Editar</button>' +
          '<button id="eq-tab-prefixo" class="titanflow-tab-btn">Prefixo</button>' +
        '</div>' +
        '<div id="eq-conteudo"></div>';
      document.body.appendChild(_p);

      (function () {
        const topSalvo = localStorage.getItem('titanflow_equip_panel_top');
        const leftSalvo = localStorage.getItem('titanflow_equip_panel_left');
        if (topSalvo && leftSalvo) { _p.style.top = topSalvo; _p.style.left = leftSalvo; }
        const cabecalho = document.getElementById('eq-painel-header');
        let arrastando = false, dx = 0, dy = 0;
        const mover = (ev) => {
          if (!arrastando) return;
          const x = Math.max(0, Math.min(ev.clientX - dx, window.innerWidth - _p.offsetWidth));
          const y = Math.max(0, Math.min(ev.clientY - dy, window.innerHeight - _p.offsetHeight));
          _p.style.left = x + 'px';
          _p.style.top = y + 'px';
        };
        const soltar = () => {
          if (!arrastando) return;
          arrastando = false;
          document.removeEventListener('mousemove', mover);
          document.removeEventListener('mouseup', soltar);
          localStorage.setItem('titanflow_equip_panel_top', _p.style.top);
          localStorage.setItem('titanflow_equip_panel_left', _p.style.left);
        };
        cabecalho.addEventListener('mousedown', (ev) => {
          ev.preventDefault();
          arrastando = true;
          dx = ev.clientX - _p.offsetLeft;
          dy = ev.clientY - _p.offsetTop;
          document.addEventListener('mousemove', mover);
          document.addEventListener('mouseup', soltar);
        });
        cabecalho.addEventListener('dblclick', () => {
          _p.style.top = '40px';
          _p.style.left = '10px';
          localStorage.removeItem('titanflow_equip_panel_top');
          localStorage.removeItem('titanflow_equip_panel_left');
        });
      })();

      const _cont = document.getElementById('eq-conteudo');
      const _btCriar = document.getElementById('eq-tab-criar');
      const _btBaixa = document.getElementById('eq-tab-baixa');
      const _btPrefixo = document.getElementById('eq-tab-prefixo');
      const _btEditar = document.getElementById('eq-tab-editar');

      const _abrir = async (qual) => {
        _btCriar.classList.toggle('active', qual === 'criar');
        _btBaixa.classList.toggle('active', qual === 'baixa');
        _btPrefixo.classList.toggle('active', qual === 'prefixo');
        _btEditar.classList.toggle('active', qual === 'editar');
        localStorage.setItem('titanflow_equip_ultima_aba', qual);
        if (qual === 'criar') await _abaEquipamentos(_cont);
        else if (qual === 'prefixo') _abaPrefixoEquipamentos(_cont);
        else if (qual === 'editar') await _abaEditarEquipamentos(_cont);
        else _abaBaixaEquipamentos(_cont);
      };
      _btCriar.onclick = () => _abrir('criar');
      _btBaixa.onclick = () => _abrir('baixa');
      _btPrefixo.onclick = () => _abrir('prefixo');
      _btEditar.onclick = () => _abrir('editar');
      await _abrir(localStorage.getItem('titanflow_equip_ultima_aba') || 'criar');

      _criarBotaoAlternarEquipamentos();
    }

    // Réplica do botão flutuante do painel de Planejamento (mesma posição,
    // mesmas cores por estado, mesmo texto), para esconder/mostrar o painel
    // de Equipamentos com a mesma mecânica em toda a aplicação.
    function _criarBotaoAlternarEquipamentos() {
      if (document.getElementById('titanflow-toggle-equipamentos-btn')) return;
      const _btn = document.createElement('button');
      _btn.id = 'titanflow-toggle-equipamentos-btn';
      Object.assign(_btn.style, {
        position: 'fixed', top: '10px', left: '10px', color: 'white', border: 'none',
        borderRadius: '5px', padding: '6px 12px', cursor: 'pointer', zIndex: '10000',
        fontWeight: 'bold', fontSize: '13px', boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
        transition: 'all 0.2s ease'
      });
      _btn.addEventListener('mouseenter', () => {
        _btn.style.transform = 'translateY(-2px)'; _btn.style.filter = 'brightness(110%)';
      });
      _btn.addEventListener('mouseleave', () => {
        _btn.style.transform = 'translateY(0px)'; _btn.style.filter = 'brightness(100%)';
      });
      const _painel = document.getElementById('painel-equipamentos');
      const _atualizar = () => {
        if (_painel.style.display === 'none') {
          _btn.innerHTML = '\u{1F441}\uFE0F Mostrar Painel'; _btn.style.backgroundColor = '#28a745';
        } else {
          _btn.innerHTML = '\u{1F648} Ocultar Painel'; _btn.style.backgroundColor = '#3366ff';
        }
      };
      _btn.onclick = () => {
        const _oculto = _painel.style.display === 'none';
        _painel.style.display = _oculto ? 'block' : 'none';
        localStorage.setItem('titanflow_equip_painel_visivel', _oculto ? 'true' : 'false');
        _atualizar();
      };
      document.body.appendChild(_btn);
      if (localStorage.getItem('titanflow_equip_painel_visivel') === 'false') _painel.style.display = 'none';
      _atualizar();
    }

    // Lê as linhas da tabela de resultados da página de Equipamentos.
    // Cada <tr> traz onclick="mostrar_acciones_disponibles(this, <id>, '<bits>')";
    // o bitmap é (editar, baja), pdf, listado, imprimir, então bits[1] diz se
    // aquele equipamento aceita baixa.
    function _lerEquipamentosDaTela() {
      const achados = [];
      for (const tr of document.querySelectorAll('tr[onclick]')) {
        const m = /mostrar_acciones_disponibles\(\s*this\s*,\s*(\d+)\s*,\s*'([01]+)'/.exec(tr.getAttribute('onclick') || '');
        if (!m) continue;
        const tds = tr.querySelectorAll('td');
        achados.push({
          id: m[1],
          podeBaixa: m[2].charAt(1) === '1',
          podeEditar: m[2].charAt(0) === '1',
          tag: tds[0] ? tds[0].textContent.trim() : m[1],
          nome: tds[2] ? tds[2].textContent.trim() : ''
        });
      }
      return achados;
    }

    function _abaBaixaEquipamentos(_cont) {
      const _lista = _lerEquipamentosDaTela();

      _cont.innerHTML =
        '<div class="titanflow-titulo-secao"><span>Baixa de Equipamentos</span>' +
          '<span style="font-size:12px;font-weight:normal;color:#888;">' + _lista.length + ' na tela</span></div>' +
        (_lista.length === 0
          ? '<p style="font-size:13px;color:#888;">Nenhum equipamento na tela. Fa\u00e7a uma busca em Equipamentos &gt; Consultar e o painel lista aqui.</p>'
          : '<label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:#333;margin-bottom:4px;cursor:pointer;">' +
              '<input type="checkbox" id="eq-selecionar-todos" style="width:auto;margin:0;"> Selecionar todos' +
            '</label>' +
            '<div class="eq-lista" id="eq-lista"></div>' +
            '<div style="margin-top:10px;">' +
              '<label for="eq-motivo">Motivo da Baixa (obrigat\u00f3rio):</label>' +
              '<textarea id="eq-motivo" rows="3" placeholder="Ex: equipamento sucateado, substitu\u00eddo por ..."></textarea>' +
            '</div>' +
            '<button id="eq-btn-baixa" style="width:100%;margin-top:10px;padding:10px;border:none;border-radius:5px;' +
              'background-color:#dc3545;color:white;font-weight:bold;cursor:pointer;">Dar baixa nos selecionados</button>' +
            '<div id="eq-status" style="font-size:12px;color:#888;margin-top:8px;text-align:center;"></div>');

      if (_lista.length === 0) return;

      const _cx = document.getElementById('eq-lista');
      for (const eq of _lista) {
        const linha = document.createElement('label');
        linha.className = 'eq-linha' + (eq.podeBaixa ? '' : ' bloqueada');
        linha.innerHTML =
          '<input type="checkbox" value="' + eq.id + '"' + (eq.podeBaixa ? '' : ' disabled') + '>' +
          '<b>' + eq.tag + '</b><span style="flex:1;">' + eq.nome + '</span>' +
          (eq.podeBaixa ? '' : '<span title="O TITAN n\u00e3o libera baixa para este">\u{1F512}</span>');
        _cx.appendChild(linha);
      }

      const _todos = document.getElementById('eq-selecionar-todos');
      const _checkboxes = () => [..._cx.querySelectorAll('input[type=checkbox]:not(:disabled)')];
      _todos.onchange = () => { _checkboxes().forEach((c) => { c.checked = _todos.checked; }); };
      _cx.addEventListener('change', (ev) => {
        if (!ev.target.matches('input[type=checkbox]')) return;
        const cbs = _checkboxes();
        _todos.checked = cbs.length > 0 && cbs.every((c) => c.checked);
        _todos.indeterminate = cbs.some((c) => c.checked) && !_todos.checked;
      });

      const _status = (t, cor) => {
        const e = document.getElementById('eq-status');
        if (e) { e.textContent = t; e.style.color = cor || '#888'; }
      };

      document.getElementById('eq-btn-baixa').onclick = async () => {
        const marcados = [..._cx.querySelectorAll('input[type=checkbox]:checked')].map((c) => c.value);
        const motivo = document.getElementById('eq-motivo').value.trim();

        if (marcados.length === 0) { _0x2786ff('Selecione ao menos um equipamento.', 'warning'); return; }
        if (!motivo) {
          _0x2786ff('Erro: o Motivo da Baixa \u00e9 obrigat\u00f3rio.', 'error', 8000);
          const m = document.getElementById('eq-motivo');
          m.style.outline = '3px solid #e74c3c';
          setTimeout(() => { m.style.outline = ''; }, 4000);
          m.focus();
          return;
        }

        const escolhidos = _lista.filter((e) => marcados.indexOf(e.id) !== -1);
        const resumo = escolhidos.map((e) => '  \u2022 ' + e.tag + (e.nome ? ' \u2014 ' + e.nome : '')).join('\n');
        if (!confirm('Dar baixa em ' + escolhidos.length + ' equipamento(s)?\n\n' + resumo +
            '\n\nMotivo: ' + motivo + '\n\nEsta a\u00e7\u00e3o marca os registros como dados baixa no TITAN.')) return;

        const botao = document.getElementById('eq-btn-baixa');
        botao.disabled = true;
        let ok = 0;
        const falhas = [];

        for (let i = 0; i < escolhidos.length; i++) {
          const eq = escolhidos[i];
          _status('Dando baixa ' + (i + 1) + ' de ' + escolhidos.length + ' (' + eq.tag + ')\u2026');
          try {
            await _darBaixaEquipamento(eq.id, motivo);
            ok++;
          } catch (erro) {
            console.error('[TitanSystem][Equipamentos] falha na baixa de ' + eq.tag + ':', erro);
            falhas.push(eq.tag);
          }
        }

        botao.disabled = false;
        if (falhas.length === 0) {
          _0x2786ff(ok + ' equipamento(s) com baixa. Atualizando\u2026', 'success', 5000);
          _status('Conclu\u00eddo.', '#27ae60');
          setTimeout(() => location.reload(), 1500);
        } else {
          _0x2786ff(ok + ' com baixa, ' + falhas.length + ' falharam: ' + falhas.join(', '), 'error', 10000);
          _status('Falhas em: ' + falhas.join(', '), '#e74c3c');
        }
      };
    }

    // Abre o formulário de baixa do TITAN num iframe oculto, preenche o motivo
    // e submete. É o mesmo caminho do bot\u00e3o "remover" da p\u00e1gina.
    function _abaPrefixoEquipamentos(_cont) {
      const _lista = _lerEquipamentosDaTela();

      _cont.innerHTML =
        '<div class="titanflow-titulo-secao"><span>Prefixo em Massa</span>' +
          '<span style="font-size:12px;font-weight:normal;color:#888;">' + _lista.length + ' na tela</span></div>' +
        (_lista.length === 0
          ? '<p style="font-size:13px;color:#888;">Nenhum equipamento na tela. Faça uma busca em Equipamentos &gt; Consultar e o painel lista aqui.</p>'
          : '<label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:#333;margin-bottom:4px;cursor:pointer;">' +
              '<input type="checkbox" id="eq-selecionar-todos-prefixo" style="width:auto;margin:0;"> Selecionar todos' +
            '</label>' +
            '<div class="eq-lista" id="eq-lista-prefixo"></div>' +
            '<div style="margin-top:10px;">' +
              '<label for="eq-prefixo-texto">Prefixo:</label>' +
              '<input type="text" id="eq-prefixo-texto" placeholder="Ex: [DESATIVADO] ">' +
            '</div>' +
            '<div style="margin-top:10px;">' +
              '<label for="eq-prefixo-modo">Ação:</label>' +
              '<select id="eq-prefixo-modo">' +
                '<option value="adicionar">Adicionar prefixo</option>' +
                '<option value="remover">Remover prefixo</option>' +
              '</select>' +
            '</div>' +
            '<button id="eq-btn-prefixo" style="width:100%;margin-top:10px;padding:10px;border:none;border-radius:5px;' +
              'background-color:#3366ff;color:white;font-weight:bold;cursor:pointer;">Aplicar aos selecionados</button>' +
            '<div id="eq-status-prefixo" style="font-size:12px;color:#888;margin-top:8px;text-align:center;"></div>');

      if (_lista.length === 0) return;

      const _cx = document.getElementById('eq-lista-prefixo');
      for (const eq of _lista) {
        const linha = document.createElement('label');
        linha.className = 'eq-linha' + (eq.podeEditar ? '' : ' bloqueada');
        linha.innerHTML =
          '<input type="checkbox" value="' + eq.id + '"' + (eq.podeEditar ? '' : ' disabled') + '>' +
          '<b>' + eq.tag + '</b><span style="flex:1;">' + eq.nome + '</span>' +
          (eq.podeEditar ? '' : '<span title="O TITAN não libera edição para este">🔒</span>');
        _cx.appendChild(linha);
      }

      const _todos = document.getElementById('eq-selecionar-todos-prefixo');
      const _checkboxes = () => [..._cx.querySelectorAll('input[type=checkbox]:not(:disabled)')];
      _todos.onchange = () => { _checkboxes().forEach((c) => { c.checked = _todos.checked; }); };
      _cx.addEventListener('change', (ev) => {
        if (!ev.target.matches('input[type=checkbox]')) return;
        const cbs = _checkboxes();
        _todos.checked = cbs.length > 0 && cbs.every((c) => c.checked);
        _todos.indeterminate = cbs.some((c) => c.checked) && !_todos.checked;
      });

      const _status = (t, cor) => {
        const e = document.getElementById('eq-status-prefixo');
        if (e) { e.textContent = t; e.style.color = cor || '#888'; }
      };

      document.getElementById('eq-btn-prefixo').onclick = async () => {
        const marcados = [..._cx.querySelectorAll('input[type=checkbox]:checked')].map((c) => c.value);
        const prefixo = document.getElementById('eq-prefixo-texto').value;
        const modo = document.getElementById('eq-prefixo-modo').value;

        if (marcados.length === 0) { _0x2786ff('Selecione ao menos um equipamento.', 'warning'); return; }
        if (!prefixo) {
          _0x2786ff('Erro: informe o Prefixo.', 'error', 8000);
          const p = document.getElementById('eq-prefixo-texto');
          p.style.outline = '3px solid #e74c3c';
          setTimeout(() => { p.style.outline = ''; }, 4000);
          p.focus();
          return;
        }

        const escolhidos = _lista.filter((e) => marcados.indexOf(e.id) !== -1);
        const alteracoes = escolhidos.map((eq) => {
          let novoNome;
          if (modo === 'adicionar') novoNome = eq.nome.startsWith(prefixo) ? null : (prefixo + eq.nome);
          else novoNome = eq.nome.startsWith(prefixo) ? eq.nome.slice(prefixo.length) : null;
          return { eq, novoNome };
        }).filter((a) => a.novoNome !== null && a.novoNome !== '');

        if (alteracoes.length === 0) {
          _0x2786ff(modo === 'adicionar'
            ? 'Todos os selecionados já têm esse prefixo.'
            : 'Nenhum selecionado começa com esse prefixo.', 'info', 6000);
          return;
        }

        const resumo = alteracoes.map((a) => '  • ' + a.eq.tag + ': "' + a.eq.nome + '" -> "' + a.novoNome + '"').join('\n');
        const ignorados = escolhidos.length - alteracoes.length;
        if (!confirm((modo === 'adicionar' ? 'Adicionar' : 'Remover') + ' prefixo em ' + alteracoes.length + ' equipamento(s)?\n\n' + resumo +
            (ignorados > 0 ? '\n\n(' + ignorados + ' selecionado(s) ignorado(s) por o prefixo já não se aplicar)' : ''))) return;

        const botao = document.getElementById('eq-btn-prefixo');
        botao.disabled = true;
        _0x56ca07();
        _0x4e25b2();
        let ok = 0;
        const falhas = [];

        for (let i = 0; i < alteracoes.length; i++) {
          const { eq, novoNome } = alteracoes[i];
          _status('Alterando ' + (i + 1) + ' de ' + alteracoes.length + ' (' + eq.tag + ')…');
          try {
            await _alterarNomeEquipamento(eq.id, novoNome);
            ok++;
            _0x43b9e6(i + 1, alteracoes.length, eq.tag + ': "' + eq.nome + '" -> "' + novoNome + '"');
          } catch (erro) {
            console.error('[TitanSystem][Equipamentos] falha ao alterar nome de ' + eq.tag + ':', erro);
            falhas.push(eq.tag);
            _0x43b9e6(i + 1, alteracoes.length, eq.tag + ': falhou (' + erro.message + ')', true);
          }
        }

        botao.disabled = false;
        if (falhas.length === 0) {
          _0x1dbb42(ok + ' equipamento(s) alterado(s). Atualizando…', 1500);
          _status('Concluído.', '#27ae60');
          setTimeout(() => location.reload(), 1500);
        } else {
          _0x1dbb42(ok + ' alterado(s), ' + falhas.length + ' falharam.', 3000);
          _0x2786ff(ok + ' alterado(s), ' + falhas.length + ' falharam: ' + falhas.join(', '), 'error', 10000);
          _status('Falhas em: ' + falhas.join(', '), '#e74c3c');
        }
      };
    }

    function _darBaixaEquipamento(idReg, motivo) {
      return new Promise((pronto, falhou) => {
        const url = './admin.php?SESID=' + _0x2012f5() +
          '&n1=200&n2=202&in=10&seccion=titan_equipos&op=c&subseccion=eliminar&op=m&id_reg=' + idReg;
        const quadro = document.createElement('iframe');
        quadro.style.display = 'none';
        document.body.appendChild(quadro);
        const limpar = () => { if (document.body.contains(quadro)) document.body.removeChild(quadro); };

        let voltas = 0;
        const t = setInterval(() => {
          voltas++;
          let d = null;
          try { d = quadro.contentDocument; } catch (_e) { d = null; }
          if (d && d.readyState === 'complete' && d.getElementById('formDatos')) {
            clearInterval(t);
            const causa = d.getElementById('eliminacion_causa');
            const enviar = d.getElementById('bEnviar');
            if (!causa || !enviar) { limpar(); falhou(new Error('Formul\u00e1rio de baixa inesperado para o id ' + idReg + '.')); return; }
            causa.value = motivo;
            // o onsubmit do TITAN chama confirm(); já confirmamos na lista
            try { d.forms.formDatos.onsubmit = null; } catch (_e) {}
            enviar.click();
            let esperas = 0;
            const t2 = setInterval(() => {
              esperas++;
              let d2 = null;
              try { d2 = quadro.contentDocument; } catch (_e) { d2 = null; }
              if (!d2 || !d2.getElementById('eliminacion_causa') || esperas > 100) {
                clearInterval(t2); limpar(); pronto();
              }
            }, 100);
          } else if (voltas > 200) {
            clearInterval(t); limpar();
            falhou(new Error('Timeout ao abrir a baixa do id ' + idReg + '.'));
          }
        }, 100);

        quadro.src = url;
      });
    }
// Abre a edição do TITAN (a mesma URL do botão editar nativo) num
    // iframe oculto e troca só o nome — o resto do registro não é tocado.
    // Mesmo caminho/idioma de _darBaixaEquipamento (poll -> preenche ->
    // clica -> poll de novo), adaptado para op=m em vez de subseccion=eliminar.
    function _alterarNomeEquipamento(idReg, novoNome) {
      return new Promise((pronto, falhou) => {
        const url = './admin.php?SESID=' + _0x2012f5() +
          '&n1=200&n2=202&in=10&seccion=titan_equipos&op=m&id_reg=' + idReg;
        const quadro = document.createElement('iframe');
        quadro.style.display = 'none';
        document.body.appendChild(quadro);
        const limpar = () => { if (document.body.contains(quadro)) document.body.removeChild(quadro); };

        let voltas = 0;
        const t = setInterval(() => {
          voltas++;
          let d = null;
          try { d = quadro.contentDocument; } catch (_e) { d = null; }
          if (d && d.readyState === 'complete' && d.getElementById('formDatos')) {
            clearInterval(t);
            const nome = d.getElementById('nombre');
            const enviar = d.getElementById('bEnviar');
            if (!nome || !enviar) { limpar(); falhou(new Error('Formulário de edição inesperado para o id ' + idReg + '.')); return; }
            nome.value = novoNome;
            // pula required_fields_check/confirm() do TITAN (mesmo caminho de
            // _darBaixaEquipamento) — só o nome muda, os demais campos
            // obrigatórios já estão preenchidos no registro existente
            try { d.forms.formDatos.onsubmit = null; } catch (_e) {}
            enviar.click();
            let esperas = 0;
            const t2 = setInterval(() => {
              esperas++;
              let d2 = null;
              try { d2 = quadro.contentDocument; } catch (_e) { d2 = null; }
              if (!d2 || !d2.getElementById('formDatos') || esperas > 100) {
                clearInterval(t2); limpar(); pronto();
              }
            }, 100);
          } else if (voltas > 200) {
            clearInterval(t); limpar();
            falhou(new Error('Timeout ao abrir a edição do id ' + idReg + '.'));
          }
        }, 100);

        quadro.src = url;
      });
    }

    async function _abaEditarEquipamentos(_cont) {
      const _acha = (id) => document.getElementById(id);
      const _status = (txto, cor) => {
        const e = _acha('titanflow-editar-status');
        if (e) { e.textContent = txto; e.style.color = cor || '#888'; }
      };

      _cont.innerHTML =
        '<div class="titanflow-grid">' +
          '<div class="titanflow-titulo-secao"><span>Editar Equipamento</span></div>' +
          '<div class="titanflow-full-width" style="position:relative;">' +
            '<label for="titanflow-editar-busca">Buscar equipamento:</label>' +
            '<input type="text" id="titanflow-editar-busca" placeholder="Buscar por tag ou nome...">' +
            '<div id="titanflow-editar-resultados" class="eq-busca-resultados"></div>' +
          '</div>' +
        '</div>' +
        '<div id="titanflow-editar-status" style="font-size:12px;color:#888;margin-top:8px;text-align:center;">Digite para buscar o equipamento.</div>';

      if (_0x34e176.length === 0) {
        try { await _0x3a1f53(); } catch (_e) { console.error('[TitanSystem][Equipamentos] falha ao carregar lista para editar:', _e); }
      }

      const _busca = _acha('titanflow-editar-busca');
      const _resultados = _acha('titanflow-editar-resultados');
      _busca.oninput = () => {
        const termo = _0x360915(_busca.value.trim());
        if (!termo) { _resultados.style.display = 'none'; return; }
        const achados = _0x34e176.filter((eq) => _0x360915(eq.nome || '').includes(termo) || _0x360915(eq.tag || '').includes(termo)).slice(0, 20);
        _resultados.innerHTML = achados.length
          ? achados.map((eq) => '<div class="eq-busca-item" data-id="' + eq.id + '"><b>' + (eq.tag || '') + '</b> ' + (eq.nome || '') + '</div>').join('')
          : '<div style="padding:8px;color:#888;font-size:12px;">Nenhum equipamento encontrado.</div>';
        _resultados.style.display = 'block';
      };
      _resultados.onclick = (ev) => {
        const item = ev.target.closest('.eq-busca-item');
        if (!item) return;
        const equip = _0x34e176.find((e) => String(e.id) === item.dataset.id);
        if (equip) _carregarParaEditar(equip.id);
      };
      if (!window.__titanflowEditarClickHandlerInstalado) {
        window.__titanflowEditarClickHandlerInstalado = true;
        document.addEventListener('click', (ev) => {
          const b = document.getElementById('titanflow-editar-busca');
          const r = document.getElementById('titanflow-editar-resultados');
          if (b && r && !b.contains(ev.target) && !r.contains(ev.target)) r.style.display = 'none';
        });
      }

      async function _carregarParaEditar(idReg) {
        _status('Carregando equipamento…');
        const antigo = _acha('titanflow-editar-iframe');
        if (antigo) antigo.remove();
        const quadro = document.createElement('iframe');
        quadro.id = 'titanflow-editar-iframe';
        quadro.style.display = 'none';
        document.body.appendChild(quadro);

        const docTitan = () => { try { return quadro.contentDocument; } catch (_e) { return null; } };
        const esperarForm = () => new Promise((ok, falha) => {
          let voltas = 0;
          const t = setInterval(() => {
            voltas++;
            const d = docTitan();
            if (d && d.readyState === 'complete' && d.getElementById('formDatos')) { clearInterval(t); ok(d); }
            else if (voltas > 200) { clearInterval(t); falha(new Error('Timeout ao carregar o equipamento.')); }
          }, 100);
        });

        let titanDoc;
        try {
          quadro.src = '/albatros/admin.php?SESID=' + _0x2012f5() + '&seccion=titan_equipos&op=m&id_reg=' + idReg + '&in=10&n2=202&n1=200';
          titanDoc = await esperarForm();
        } catch (erro) {
          console.error('[TitanSystem][Equipamentos]', erro);
          _status('Não foi possível carregar o equipamento. Tente de novo.', '#e74c3c');
          return;
        }

        _montarFormularioEdicao(titanDoc, quadro);
      }

      function _montarFormularioEdicao(_titan, _quadro) {
        const g = (id) => { const e = _titan.getElementById(id); return e ? e.value : ''; };
        const classeAtualTexto = (() => {
          const s = _titan.getElementById('key__equipos_clases__id');
          return s && s.selectedIndex >= 0 ? s.options[s.selectedIndex].text : '';
        })();

        _cont.innerHTML =
          '<div class="titanflow-grid">' +
            '<div class="titanflow-titulo-secao"><span>Editando: ' + g('tag') + '</span>' +
              '<button id="titanflow-editar-voltar" title="Voltar à busca">‹ Voltar</button></div>' +
            '<div><label for="titanflow-editar-tag">Tag:</label><input type="text" id="titanflow-editar-tag"></div>' +
            '<div><label for="titanflow-editar-nome">Nome:</label><input type="text" id="titanflow-editar-nome"></div>' +
            '<div class="titanflow-full-width" style="font-size:12px;background:#f8f9fa;border:1px solid #ddd;border-radius:5px;padding:6px 8px;">' +
              '<b>Classe atual:</b> <span id="titanflow-editar-classe-atual-texto"></span>' +
              '<button type="button" id="titanflow-editar-trocar-classe" style="float:right;background:none;border:none;color:#3366ff;font-weight:bold;cursor:pointer;">Trocar categoria/classe</button>' +
            '</div>' +
            '<div class="titanflow-full-width" id="titanflow-editar-classe-nova-box" style="display:none;">' +
              '<div><label for="titanflow-editar-cat">Categoria:</label><select id="titanflow-editar-cat"></select></div>' +
              '<div><label for="titanflow-editar-clase">Classe:</label><select id="titanflow-editar-clase" disabled><option value="">-- Primeiro escolha a Categoria --</option></select></div>' +
            '</div>' +
            '<div><label for="titanflow-editar-crit">Criticidade:</label><select id="titanflow-editar-crit"></select></div>' +
            '<div><label for="titanflow-editar-marca">Marca:</label><input type="text" id="titanflow-editar-marca"></div>' +
            '<div><label for="titanflow-editar-estado">Estado:</label><select id="titanflow-editar-estado"></select></div>' +
            '<div><label for="titanflow-editar-tipo">Tipo:</label><select id="titanflow-editar-tipo"></select></div>' +
            '<div><label for="titanflow-editar-modelo">Modelo:</label><input type="text" id="titanflow-editar-modelo"></div>' +
            '<div><label for="titanflow-editar-serie">Nº de Série:</label><input type="text" id="titanflow-editar-serie"></div>' +
            '<div><label for="titanflow-editar-valor">Valor USD:</label><input type="text" id="titanflow-editar-valor"></div>' +
            '<div class="titanflow-full-width"><label for="titanflow-editar-datos">Dados Técnicos:</label><textarea id="titanflow-editar-datos" rows="3" style="width:100%;"></textarea></div>' +
            '<div class="titanflow-titulo-secao" style="margin-top:6px;"><span>Hierarquia</span></div>' +
            '<div class="titanflow-full-width" style="position:relative;">' +
              '<label for="titanflow-editar-padre-busca">Padre (opcional):</label>' +
              '<input type="text" id="titanflow-editar-padre-busca" placeholder="Buscar por tag ou nome do equipamento pai...">' +
              '<button type="button" id="titanflow-editar-padre-arvore" title="Ver a árvore completa de equipamentos" style="margin-top:4px;width:100%;padding:6px;border:1px solid #3366ff;border-radius:5px;background:#fff;color:#3366ff;font-weight:bold;cursor:pointer;font-size:12px;">🌳 Ver árvore completa</button>' +
              '<div id="titanflow-editar-padre-resultados" class="eq-busca-resultados"></div>' +
              '<div id="titanflow-editar-padre-selecionado" style="display:none;margin-top:6px;font-size:12px;background:#eef3ff;border:1px solid #cfe0ff;border-radius:5px;padding:6px 8px;">' +
                '<span id="titanflow-editar-padre-texto"></span>' +
                '<button type="button" id="titanflow-editar-padre-limpar" title="Remover pai" style="float:right;background:none;border:none;color:#c0392b;font-weight:bold;cursor:pointer;">✕</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div style="margin-top:12px;">' +
            '<button id="btn-salvar-edicao" style="width:100%;padding:10px;border:none;border-radius:5px;background-color:#3366ff;color:white;font-weight:bold;cursor:pointer;">💾 Salvar Alterações</button>' +
            '<div id="titanflow-editar-status2" style="font-size:12px;color:#888;margin-top:8px;text-align:center;">Pronto.</div>' +
          '</div>';

        const _status2 = (txto, cor) => {
          const e = _acha('titanflow-editar-status2');
          if (e) { e.textContent = txto; e.style.color = cor || '#888'; }
        };

        _acha('titanflow-editar-voltar').onclick = () => _abaEditarEquipamentos(_cont);

        _acha('titanflow-editar-tag').value = g('tag');
        _acha('titanflow-editar-nome').value = g('nombre');
        _acha('titanflow-editar-marca').value = g('marca');
        _acha('titanflow-editar-modelo').value = g('modelo');
        _acha('titanflow-editar-serie').value = g('numero_de_serie');
        _acha('titanflow-editar-valor').value = g('valor_u$s');
        _acha('titanflow-editar-datos').value = g('datos_tecnicos');
        _acha('titanflow-editar-classe-atual-texto').textContent = classeAtualTexto || '(nenhuma)';

        const _clonar = (origem, destino, textoVazio) => {
          if (!origem || !destino) return;
          destino.innerHTML = '';
          const vazio = document.createElement('option');
          vazio.value = ''; vazio.textContent = '-- ' + textoVazio + ' --';
          destino.appendChild(vazio);
          for (const o of origem.options) {
            if (o.value === '') continue;
            const n = document.createElement('option');
            n.value = o.value; n.textContent = o.text;
            destino.appendChild(n);
          }
        };
        const _clonarComValor = (origem, destino, textoVazio) => {
          _clonar(origem, destino, textoVazio);
          if (origem) destino.value = origem.value;
        };
        _clonarComValor(_titan.getElementById('key__equipos_criticidad__id'), _acha('titanflow-editar-crit'), 'Selecione a Criticidade');
        _clonarComValor(_titan.getElementById('key__equipos_estados__id'), _acha('titanflow-editar-estado'), 'Selecione o Estado');
        _clonarComValor(_titan.getElementById('key__equipos_tipos__id'), _acha('titanflow-editar-tipo'), 'Selecione o Tipo');

        // Categoria/Classe só é tocada se o usuário pedir para trocar (ver
        // nota no topo do patch sobre por que não dá para confiar no valor
        // atual desses dois campos sem essa ação explícita).
        let _trocandoClasse = false;
        const _cat = _acha('titanflow-editar-cat');
        const _classe = _acha('titanflow-editar-clase');
        const _popularClassesNoTitan = () => {
          const alvo = _titan.getElementById('dummy_cat');
          if (!alvo) return;
          alvo.value = _cat.value;
          try {
            const jan = _quadro.contentWindow;
            if (jan && typeof jan.populate === 'function') jan.populate(alvo, 'key__equipos_clases__id');
          } catch (_e) { console.error('[TitanSystem][Equipamentos] populate falhou:', _e); }
        };
        _cat.onchange = () => {
          _popularClassesNoTitan();
          _clonar(_titan.getElementById('key__equipos_clases__id'), _classe, 'Selecione a Classe');
          _classe.disabled = !_cat.value;
        };
        _acha('titanflow-editar-trocar-classe').onclick = () => {
          _trocandoClasse = true;
          _acha('titanflow-editar-classe-nova-box').style.display = 'block';
          _acha('titanflow-editar-trocar-classe').style.display = 'none';
          _clonar(_titan.getElementById('dummy_cat'), _cat, 'Selecione a Categoria');
        };

        // --- Padre: mesma busca da criação, pré-preenchida com o pai atual --
        // (_0x34e176 já foi garantida carregada por _abaEditarEquipamentos
        // antes de chegar aqui, então não precisa recarregar)
        let _padreId = g('padre_key__equipos__id');
        const _padreBusca = _acha('titanflow-editar-padre-busca');
        const _padreResultados = _acha('titanflow-editar-padre-resultados');
        const _padreBox = _acha('titanflow-editar-padre-selecionado');
        const _padreTexto = _acha('titanflow-editar-padre-texto');
        const _padreResultInicial = g('padre_key__equipos__id_result');
        if (_padreId && _padreResultInicial) {
          _padreTexto.textContent = _padreResultInicial;
          _padreBox.style.display = 'block';
        }
        const _limparPadre = () => {
          _padreId = '';
          _padreBox.style.display = 'none';
          _padreBusca.value = '';
          _padreResultados.style.display = 'none';
        };
        const _escolherPadre = (equip) => {
          _padreId = String(equip.id);
          _padreTexto.textContent = (equip.tag || '') + ' — ' + (equip.nome || '');
          _padreBox.style.display = 'block';
          _padreBusca.value = '';
          _padreResultados.style.display = 'none';
        };
        _acha('titanflow-editar-padre-limpar').onclick = _limparPadre;
        _padreBusca.oninput = () => {
          const termo = _0x360915(_padreBusca.value.trim());
          if (!termo) { _padreResultados.style.display = 'none'; return; }
          const achados = _0x34e176.filter((eq) => _0x360915(eq.nome || '').includes(termo) || _0x360915(eq.tag || '').includes(termo)).slice(0, 20);
          _padreResultados.innerHTML = achados.length
            ? achados.map((eq) => '<div class="eq-busca-item" data-id="' + eq.id + '"><b>' + (eq.tag || '') + '</b> ' + (eq.nome || '') + '</div>').join('')
            : '<div style="padding:8px;color:#888;font-size:12px;">Nenhum equipamento encontrado.</div>';
          _padreResultados.style.display = 'block';
        };
        _padreResultados.onclick = (ev) => {
          const item = ev.target.closest('.eq-busca-item');
          if (!item) return;
          const equip = _0x34e176.find((e) => String(e.id) === item.dataset.id);
          if (equip) _escolherPadre(equip);
        };
        if (!window.__titanflowEditarPadreClickHandlerInstalado) {
          window.__titanflowEditarPadreClickHandlerInstalado = true;
          document.addEventListener('click', (ev) => {
            const busca = document.getElementById('titanflow-editar-padre-busca');
            const resultados = document.getElementById('titanflow-editar-padre-resultados');
            if (busca && resultados && !busca.contains(ev.target) && !resultados.contains(ev.target)) {
              resultados.style.display = 'none';
            }
          });
        }

        // --- árvore completa (compartilhada com a aba Criar) -------------
        const _arvoreFilhos = new Map();
        for (const _eq of _0x34e176) {
          const _chave = _eq.pai || '';
          if (!_arvoreFilhos.has(_chave)) _arvoreFilhos.set(_chave, []);
          _arvoreFilhos.get(_chave).push(_eq);
        }
        const _escaparHtml = (_s) => (_s || '').toString()
          .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;');
        const _construirArvoreHtml = (_paiId) => {
          const _filhos = (_arvoreFilhos.get(_paiId) || []).slice()
            .sort((a, b) => (a.nome || '').localeCompare(b.nome || '', 'pt-BR'));
          if (!_filhos.length) return '';
          return '<ul>' + _filhos.map((_eq) => {
            const _temFilhos = (_arvoreFilhos.get(String(_eq.id)) || []).length > 0;
            return '<li class="eq-arvore-item">' +
              '<span class="eq-arvore-linha">' +
                '<span class="eq-arvore-toggle' + (_temFilhos ? '' : ' eq-arvore-toggle-vazio') + '">▶</span>' +
                '<span class="eq-arvore-rotulo" data-id="' + _escaparHtml(_eq.id) + '"><b>' + _escaparHtml(_eq.tag) + '</b> ' + _escaparHtml(_eq.nome) + '</span>' +
              '</span>' +
              (_temFilhos ? _construirArvoreHtml(String(_eq.id)) : '') +
              '</li>';
          }).join('') + '</ul>';
        };
        let _arvoreOverlay = document.getElementById('eq-arvore-overlay');
        if (!_arvoreOverlay) {
          _arvoreOverlay = document.createElement('div');
          _arvoreOverlay.id = 'eq-arvore-overlay';
          _arvoreOverlay.className = 'eq-arvore-overlay';
          _arvoreOverlay.style.display = 'none';
          _arvoreOverlay.innerHTML =
            '<div class="eq-arvore-modal">' +
              '<div class="eq-arvore-cabecalho">' +
                '<h3>Árvore de Equipamentos 🌳</h3>' +
                '<button type="button" id="eq-arvore-fechar" class="eq-arvore-fechar">×</button>' +
              '</div>' +
              '<input type="text" id="eq-arvore-filtro" placeholder="Filtrar por tag ou nome...">' +
              '<div id="eq-arvore-lista" class="eq-arvore-lista"></div>' +
            '</div>';
          document.body.appendChild(_arvoreOverlay);
        }
        const _arvoreLista = document.getElementById('eq-arvore-lista');
        const _arvoreFiltro = document.getElementById('eq-arvore-filtro');
        let _arvoreConstruida = false;
        const _fecharArvore = () => { _arvoreOverlay.style.display = 'none'; };
        const _filtrarArvore = (_termoBruto) => {
          const _termo = _0x360915((_termoBruto || '').trim());
          const _itens = _arvoreLista.querySelectorAll('.eq-arvore-item');
          if (!_termo) {
            _itens.forEach((_li) => {
              _li.style.display = '';
              _li.classList.remove('aberto');
              const _t = _li.querySelector(':scope > .eq-arvore-linha .eq-arvore-toggle');
              if (_t && !_t.classList.contains('eq-arvore-toggle-vazio')) _t.textContent = '▶';
            });
            return;
          }
          _itens.forEach((_li) => { _li.style.display = 'none'; });
          _itens.forEach((_li) => {
            const _rotulo = _li.querySelector(':scope > .eq-arvore-linha .eq-arvore-rotulo');
            const _texto = _0x360915(_rotulo ? _rotulo.textContent : '');
            if (!_texto.includes(_termo)) return;
            let _atual = _li;
            while (_atual && _atual.classList && _atual.classList.contains('eq-arvore-item')) {
              _atual.style.display = '';
              _atual.classList.add('aberto');
              const _t = _atual.querySelector(':scope > .eq-arvore-linha .eq-arvore-toggle');
              if (_t && !_t.classList.contains('eq-arvore-toggle-vazio')) _t.textContent = '▼';
              _atual = _atual.parentElement && _atual.parentElement.closest('.eq-arvore-item');
            }
          });
        };
        const _abrirArvore = () => {
          if (!_arvoreConstruida) {
            _arvoreLista.innerHTML = _construirArvoreHtml('');
            _arvoreConstruida = true;
          }
          _arvoreOverlay.style.display = 'flex';
          _arvoreFiltro.value = '';
          _filtrarArvore('');
          _arvoreFiltro.focus();
        };
        _arvoreLista.onclick = (ev) => {
          const _toggle = ev.target.closest('.eq-arvore-toggle');
          if (_toggle && !_toggle.classList.contains('eq-arvore-toggle-vazio')) {
            const _item = _toggle.closest('.eq-arvore-item');
            _item.classList.toggle('aberto');
            _toggle.textContent = _item.classList.contains('aberto') ? '▼' : '▶';
            return;
          }
          const _rotulo = ev.target.closest('.eq-arvore-rotulo');
          if (_rotulo) {
            const _equip = _0x34e176.find((_e) => String(_e.id) === _rotulo.dataset.id);
            if (_equip) { _escolherPadre(_equip); _fecharArvore(); }
          }
        };
        _arvoreFiltro.oninput = () => _filtrarArvore(_arvoreFiltro.value);
        _arvoreOverlay.onclick = (ev) => { if (ev.target === _arvoreOverlay) _fecharArvore(); };
        document.getElementById('eq-arvore-fechar').onclick = _fecharArvore;
        _acha('titanflow-editar-padre-arvore').onclick = (ev) => { ev.preventDefault(); _abrirArvore(); };

        // --- salvar -----------------------------------------------------
        _acha('btn-salvar-edicao').onclick = async () => {
          const botao = _acha('btn-salvar-edicao');

          const _campos = [
            ['titanflow-editar-tag', 'Tag'],
            ['titanflow-editar-nome', 'Nome'],
            ['titanflow-editar-crit', 'Criticidade'],
            ['titanflow-editar-marca', 'Marca'],
            ['titanflow-editar-estado', 'Estado'],
            ['titanflow-editar-tipo', 'Tipo'],
            ['titanflow-editar-modelo', 'Modelo'],
          ];
          for (const [id, rotulo] of _campos) {
            const campo = _acha(id);
            if (!campo.value) {
              _0x2786ff('Erro: o campo "' + rotulo + '" é obrigatório.', 'error', 8000);
              try {
                campo.scrollIntoView({ block: 'center', behavior: 'smooth' });
                const antes = campo.style.outline;
                campo.style.outline = '3px solid #e74c3c';
                campo.style.outlineOffset = '2px';
                setTimeout(() => { campo.style.outline = antes; campo.style.outlineOffset = ''; }, 4000);
                campo.focus({ preventScroll: true });
              } catch (_e) {}
              return;
            }
          }
          if (_trocandoClasse && !_classe.value) {
            _0x2786ff('Erro: escolha a nova Classe, ou clique de novo em Trocar categoria/classe para desistir.', 'error', 8000);
            return;
          }

          botao.disabled = true;
          _status2('Salvando…');
          try {
            const por = (id, valor) => { const e = _titan.getElementById(id); if (e) e.value = valor; };
            por('tag', _acha('titanflow-editar-tag').value);
            por('nombre', _acha('titanflow-editar-nome').value);
            por('key__equipos_criticidad__id', _acha('titanflow-editar-crit').value);
            por('marca', _acha('titanflow-editar-marca').value);
            por('key__equipos_estados__id', _acha('titanflow-editar-estado').value);
            por('key__equipos_tipos__id', _acha('titanflow-editar-tipo').value);
            por('modelo', _acha('titanflow-editar-modelo').value);
            por('numero_de_serie', _acha('titanflow-editar-serie').value);
            por('valor_u$s', _acha('titanflow-editar-valor').value);
            por('datos_tecnicos', _acha('titanflow-editar-datos').value);
            por('padre_key__equipos__id', _padreId);
            if (_trocandoClasse && _classe.value) por('key__equipos_clases__id', _classe.value);

            const enviar = _titan.getElementById('bEnviar');
            if (!enviar) throw new Error('Botão de envio do TITAN não encontrado.');
            // pula required_fields_check/confirm() do TITAN (mesmo caminho de
            // _darBaixaEquipamento/_alterarNomeEquipamento) — já validamos
            // os campos obrigatórios acima, e um confirm() dentro do iframe
            // oculto travaria a automação sem jeito de responder.
            try { _titan.forms.formDatos.onsubmit = null; } catch (_e) {}
            enviar.click();

            await new Promise((ok) => {
              let voltas = 0;
              const t = setInterval(() => {
                voltas++;
                let doc = null;
                try { doc = _quadro.contentDocument; } catch (_e) { doc = null; }
                if (!doc || !doc.getElementById('formDatos') || voltas > 100) { clearInterval(t); ok(); }
              }, 100);
            });

            _0x2786ff('Equipamento "' + _acha('titanflow-editar-tag').value + '" atualizado.', 'success', 6000);
            _status2('Salvo. Volte à busca para editar outro.', '#27ae60');
          } catch (erro) {
            console.error('[TitanSystem][Equipamentos] Falha ao editar:', erro);
            _0x2786ff('Falha ao salvar: ' + erro.message, 'error', 8000);
            _status2('Falhou. Veja o console (F12).', '#e74c3c');
          } finally {
            botao.disabled = false;
          }
        };
      }
    }

    function _0x2ebe4b() {
      const _0x57a46a = {
          '17': {
            'nome': "Control"
            , 'classes': [{
              'id': '206'
              , 'nome': "Computador de Flujo"
            }, {
              'id': '211'
              , 'nome': 'Computadora\x20Industrial'
            }, {
              'id': '207'
              , 'nome': "Controlador Lógico Programable (PLC)"
            }, {
              'id': "210"
              , 'nome': "Estación I/O"
            }, {
              'id': "209"
              , 'nome': "Fibra Óptica (FO)"
            }, {
              'id': "213"
              , 'nome': "Panel de Control"
            }, {
              'id': "212"
              , 'nome': "Servidor de Datos"
            }, {
              'id': "205"
              , 'nome': "Software"
            }]
          }
          , '14': {
            'nome': "Eléctrico"
            , 'classes': [{
              'id': '74'
              , 'nome': "Actuador Eléctrico"
            }, {
              'id': "171"
              , 'nome': 'Arrancador\x20Suave'
            }, {
              'id': "169"
              , 'nome': "Cable de Potencia"
            }, {
              'id': '170'
              , 'nome': 'Convertidor\x20de\x20Frecuencia\x20(VFD)'
            }, {
              'id': "173"
              , 'nome': "Fuente Eléctrica de Alimentación (UPS)"
            }, {
              'id': "174"
              , 'nome': "Interruptor Eléctrico"
            }, {
              'id': "176"
              , 'nome': "Panel Fotovoltáico"
            }, {
              'id': "175"
              , 'nome': 'Seccionador\x20Eléctrico'
            }, {
              'id': "217"
              , 'nome': "Sistema de Calefacción Eléctrico"
            }, {
              'id': '216'
              , 'nome': "Sistema de Protección Catódica (PCAT)"
            }, {
              'id': "215"
              , 'nome': "Sistema de Puesta a Tierra (PAT)"
            }, {
              'id': "172"
              , 'nome': "Tablero de Distribución"
            }, {
              'id': '87'
              , 'nome': "Transformador"
            }]
          }
          , '7': {
            'nome': "Infraestructura"
            , 'classes': [{
              'id': "203"
              , 'nome': "Área Endicada"
            }, {
              'id': '202'
              , 'nome': "Calle"
            }, {
              'id': "204"
              , 'nome': "Campo Abierto"
            }, {
              'id': '201'
              , 'nome': 'Edificio'
            }, {
              'id': '199'
              , 'nome': 'Estación'
            }, {
              'id': "208"
              , 'nome': "Estructura Metálica"
            }, {
              'id': '134'
              , 'nome': "Sistema"
            }, {
              'id': '168'
              , 'nome': "Terminal / Planta"
            }, {
              'id': "133"
              , 'nome': "Unidad"
            }]
          }
          , '15': {
            'nome': "Instrumentos"
            , 'classes': [{
              'id': "125"
              , 'nome': "Dispositivo Sensor de Corrosión"
            }, {
              'id': "182"
              , 'nome': "Dispositivo Sensor de Densidad"
            }, {
              'id': "183"
              , 'nome': "Dispositivo Sensor de Flujo"
            }, {
              'id': "214"
              , 'nome': "Dispositivo Sensor de H2S"
            }, {
              'id': '184'
              , 'nome': 'Dispositivo\x20Sensor\x20de\x20Nivel'
            }, {
              'id': "185"
              , 'nome': "Dispositivo Sensor de Peso"
            }, {
              'id': "186"
              , 'nome': "Dispositivo Sensor de PH"
            }, {
              'id': "187"
              , 'nome': "Dispositivo Sensor de Presión"
            }, {
              'id': "188"
              , 'nome': "Dispositivo Sensor de Temperatura"
            }, {
              'id': "189"
              , 'nome': "Dispositivo Sensor de Vibración"
            }, {
              'id': "190"
              , 'nome': "Muestreador"
            }]
          }
          , '19': {
            'nome': "Marítimo"
            , 'classes': [{
              'id': '191'
              , 'nome': "Equipo de Amarre"
            }, {
              'id': "192"
              , 'nome': 'Equipo\x20de\x20Anclaje'
            }, {
              'id': "193"
              , 'nome': "Manguera"
            }, {
              'id': "178"
              , 'nome': 'Monoboya'
            }]
          }
          , '13': {
            'nome': 'Mecánico'
            , 'classes': [{
              'id': "180"
              , 'nome': "Brazo de Carga"
            }, {
              'id': "181"
              , 'nome': "Caldera"
            }, {
              'id': "154"
              , 'nome': "Cañería"
            }, {
              'id': '150'
              , 'nome': "Equipo de Izaje"
            }, {
              'id': "158"
              , 'nome': 'Filtro'
            }, {
              'id': "151"
              , 'nome': "Intercambiador de Calor"
            }, {
              'id': '153'
              , 'nome': 'Recipiente\x20Sometido\x20a\x20Presión'
            }, {
              'id': '221'
              , 'nome': "Separador Agua/Aceite"
            }, {
              'id': "156"
              , 'nome': 'Tanque\x20Atmosférico'
            }, {
              'id': "218"
              , 'nome': "Torre de Lavado de Gases"
            }, {
              'id': "159"
              , 'nome': "Válvula"
            }]
          }
          , '18': {
            'nome': "Otros"
            , 'classes': [{
              'id': '107'
              , 'nome': "HVAC"
            }, {
              'id': '1'
              , 'nome': "Sin Definir"
            }]
          }
          , '12': {
            'nome': "Rotante"
            , 'classes': [{
              'id': "149"
              , 'nome': "Bomba"
            }, {
              'id': "146"
              , 'nome': 'Compresor'
            }, {
              'id': "147"
              , 'nome': "Generador Eléctrico"
            }, {
              'id': "145"
              , 'nome': "Motor a Combustión"
            }, {
              'id': '85'
              , 'nome': 'Motor\x20Eléctrico'
            }, {
              'id': "148"
              , 'nome': "Turbina a Gas"
            }]
          }
          , '16': {
            'nome': "Seguridad"
            , 'classes': [{
              'id': "219"
              , 'nome': "Arrestallama"
            }, {
              'id': "194"
              , 'nome': 'Central\x20de\x20Alarma'
            }, {
              'id': "195"
              , 'nome': "Detector de Fuego"
            }, {
              'id': '196'
              , 'nome': "Detector de Gas"
            }, {
              'id': "197"
              , 'nome': "Detector de Humo"
            }, {
              'id': "198"
              , 'nome': "Equipo de Lucha Contra Incendio"
            }]
          }
        }, _0x369381 = {
          'tipoTrabalho': [{
            'v': '7'
            , 't': "Mantenimiento Detectivo"
          }, {
            'v': '6'
            , 't': 'Mantenimiento\x20Predictivo'
          }, {
            'v': '5'
            , 't': "Mantenimiento Preventivo"
          }, {
            'v': '8'
            , 't': 'Mantenimientos\x20Menores'
          }]
          , 'taller': [{
            'v': '8'
            , 't': 'Caldeiraria'
          }, {
            'v': '14'
            , 't': 'Civil'
          }, {
            'v': '2'
            , 't': 'Elétrico'
          }, {
            'v': '11'
            , 't': "Externa"
          }, {
            'v': '7'
            , 't': "Geral"
          }, {
            'v': '10'
            , 't': "HSSE"
          }, {
            'v': '18'
            , 't': "Instrumentação"
          }, {
            'v': '9'
            , 't': "Limpeza"
          }, {
            'v': '1'
            , 't': "Mecânica"
          }, {
            'v': '6'
            , 't': "Pintura"
          }, {
            'v': '15'
            , 't': "Predial"
          }, {
            'v': '16'
            , 't': "Refrigeração"
          }, {
            'v': '12'
            , 't': "Sinalização"
          }, {
            'v': '17'
            , 't': "Solda"
          }]
          , 'condicao': [{
            'v': '1'
            , 't': "En Servicio"
          }, {
            'v': '2'
            , 't': 'Fuera\x20de\x20Servicio'
          }, {
            'v': '5'
            , 't': 'Parada\x20de\x20Planta'
          }]
          , 'contratista': [{
            'v': '5'
            , 't': "Brasanitas"
          }, {
            'v': '16'
            , 't': "Camposcal"
          }, {
            'v': '14'
            , 't': "CM Couto"
          }, {
            'v': '11'
            , 't': "Cummins"
          }, {
            'v': '17'
            , 't': "Engeatec"
          }, {
            'v': '8'
            , 't': "Ferroport"
          }, {
            'v': '7'
            , 't': "Imune Guerra"
          }, {
            'v': '4'
            , 't': 'Marine'
          }, {
            'v': '6'
            , 't': "Mills"
          }, {
            'v': '9'
            , 't': "MSR do Brasil"
          }, {
            'v': '1'
            , 't': 'Otamerica'
          }, {
            'v': '18'
            , 't': "Ozean"
          }, {
            'v': '20'
            , 't': "Petrovera"
          }, {
            'v': '15'
            , 't': 'Schneider'
          }, {
            'v': '10'
            , 't': "Sotreq/Caterpillar"
          }, {
            'v': '13'
            , 't': "Sparrows BSM"
          }, {
            'v': '12'
            , 't': "Versada"
          }]
          , 'especialidade': [{
            'v': '3'
            , 't': "Civil"
          }, {
            'v': '14'
            , 't': "CONTRATISTA"
          }, {
            'v': '2'
            , 't': "Eletricista"
          }, {
            'v': '17'
            , 't': "Geral"
          }, {
            'v': '4'
            , 't': "Instrumentista"
          }, {
            'v': '1'
            , 't': "Mecânico"
          }, {
            'v': '23'
            , 't': "Metalurgico"
          }, {
            'v': '18'
            , 't': "Pintor Industrial"
          }]
        }, _0x4f98d9 = "titanflow_estado_planejamento", _0x3a0af5 = "titanflow_planejamento_visivel", _0x19c9c0 = "titanflow_planejamento_ultima_aba";
      let _0x2ee372 = null;
      const _0x58806a = async (_0x29a5cb, _0x124abb) => {
        const _0xf41861 = JSON.parse(localStorage.getItem("titanflow_config_programacoes_selecionadas") || '[]');
        if (_0xf41861.length === 0x0) {
          _0x2786ff("Nenhuma programação selecionada!", 'warning');
          throw new Error("Nenhuma programação selecionada.");
        }
        let _0x1f6db6 = {};
        if (_0x29a5cb === "programar") {
          const _0x2c672b = document['getElementById']("titanflow-prog-tipo").value;
          if (!_0x2c672b) {
            _0x2786ff("Por favor, selecione um Tipo de Programação.", "error");
            throw new Error("Tipo de programação não selecionado.");
          }
          _0x1f6db6 = {
            'programacion_tipo': _0x2c672b
            , 'fecha_comienzo': document.getElementById("titanflow-prog-data-inicio").value.split('-').reverse().join('/')
            , 'horizonte_de_llamada': document.getElementById("titanflow-prog-horizonte-num")['value']
            , 'programacion_diaria_dias': document.getElementById("titanflow-prog-diaria-dias").value
            , 'programacion_semanal_semanas': document.getElementById("titanflow-prog-semanal-semanas").value
            , 'programacion_semanal_dia': document.getElementById("titanflow-prog-semanal-dia").value
            , 'dummy6': document.getElementById("titanflow-prog-mensal-mes").value
            , 'yearsIN': new Date(document['getElementById']('titanflow-prog-data-inicio').value).getFullYear()
            , 'programacion_mensual2_dia_del_mes': '1'
            , 'programacion_mensual2_cada': document.getElementById("titanflow-prog-mensal-cada").value
          };
        }
        _0x5b5dcd = !![];
        let _0x5d003a = 0x0
          , _0x1f810f = 0x0;
        for (const _0x121a35 of _0xf41861) {
          if (!_0x5b5dcd) break;
          try {
            _0x29a5cb === "programar" ? await _0x8bec5c(_0x121a35['id'], _0x1f6db6) : await _0x342ee9(_0x121a35['id'], _0x29a5cb);
          } catch (_0x3ea03e) {
            _0x5d003a++, console.error("Falha ao " + _0x29a5cb + " a programação " + _0x121a35['id'] + ':', _0x3ea03e);
          }
          _0x1f810f++;
          if (_0x124abb) _0x124abb(_0x1f810f / _0xf41861['length']);
        }
        _0x5b5dcd = ![];
        const _0x53bb19 = {
            'programar': "programadas"
            , 'activar': "ativadas"
            , 'desactivar': 'desativadas'
          }
          , _0x520cf4 = _0x53bb19[_0x29a5cb] || "processadas"
          , _0x452aac = "Concluído! " + (_0xf41861['length'] - _0x5d003a) + '\x20programações\x20' + _0x520cf4 + '.\x20' + _0x5d003a + '\x20falharam.';
        _0x2786ff(_0x452aac, _0x5d003a > 0x0 ? 'warning' : "success", 0x1770), _0x5d003a === 0x0 && _0xf41861.length > 0x0 && setTimeout(() => location.reload(), 0x1f4);
      }, _0x3ea34b = _0x5ae3b0 => {
        _0x5ae3b0.addEventListener("mouseenter", () => {
          !_0x5ae3b0.disabled && (_0x5ae3b0.style.transform = "translateY(-2px)", _0x5ae3b0['style']['filter'] = "brightness(110%)", _0x5ae3b0.style.boxShadow = '0\x204px\x208px\x20rgba(0,0,0,0.2)');
        }), _0x5ae3b0.addEventListener("mouseleave", () => {
          !_0x5ae3b0.disabled && (_0x5ae3b0.style.transform = 'translateY(0px)', _0x5ae3b0['style'].filter = "brightness(100%)", _0x5ae3b0.style.boxShadow = '0\x202px\x204px\x20rgba(0,0,0,0.15)');
        }), _0x5ae3b0.addEventListener("mousedown", () => {
          !_0x5ae3b0.disabled && (_0x5ae3b0['style']['transform'] = "translateY(1px)", _0x5ae3b0['style'].boxShadow = "none");
        }), _0x5ae3b0.addEventListener("mouseup", () => {
          !_0x5ae3b0['disabled'] && _0x5ae3b0.matches(":hover") && (_0x5ae3b0.style.transform = "translateY(-2px)");
        });
      };

      function _0x5b1121() {
        if (!_0x27b91a || _0x27b91a.length === 0x0) {
          console.warn("[TitanSystem] Lista de planos vazia. Não foi possível definir o próximo ID.");
          return;
        }
        const _0x34e70f = _0x27b91a.reduce((_0x26443e, _0xa974c5) => {
            const _0x521745 = _0xa974c5['tag']['match'](/TOIL-MNT-(\d+)/i);
            if (_0x521745 && _0x521745[0x1]) {
              const _0x22a7b4 = parseInt(_0x521745[0x1], 0xa);
              return Math.max(_0x26443e, _0x22a7b4);
            }
            return _0x26443e;
          }, 0x0)
          , _0x147116 = _0x34e70f + 0x1
          , _0x422ec8 = document.getElementById("titanflow-tag-numero");
        _0x422ec8 && (_0x422ec8.value = _0x147116, console.log('[TitanSystem]\x20Próximo\x20ID\x20de\x20plano\x20sugerido:\x20' + _0x147116), _0x39afb0());
      }

      function _0x39afb0() {
        const _0x1efb64 = {
            'idNumero': document.getElementById('titanflow-tag-numero').value
            , 'nome': document['getElementById']('titanflow-nombre').value
            , 'tipoTrabalho': document.getElementById("titanflow-key__trabajos_tipos__id").value
            , 'taller': document.getElementById("titanflow-key__talleres__id").value
            , 'categoria': document.getElementById("titanflow-dummy_cat").value
            , 'classe': document.getElementById("titanflow-key__equipos_clases__id")['value']
            , 'condicao': document.getElementById("titanflow-key__planes_de_mantenimiento_equipos_condiciones__id").value, 'proposito': (document.getElementById('titanflow-key__trabajos_tipos_propositos__id') || {}).value || ''
            , 'contratista': document.getElementById('titanflow-key__empresas__id').value
            , 'especialidades': []
          };
        for (let _0x461ec4 = 0x1; _0x461ec4 <= 0x4; _0x461ec4++) {
          const _0x8b22f5 = document.getElementById("titanflow-esp-id-" + _0x461ec4);
          _0x8b22f5 && _0x1efb64['especialidades']['push']({
            'id': _0x8b22f5['value']
            , 'rec': document['getElementById']("titanflow-esp-rec-" + _0x461ec4).value
            , 'hh': document.getElementById('titanflow-esp-hh-' + _0x461ec4).value
          });
        }
        localStorage.setItem(_0x4f98d9, JSON.stringify(_0x1efb64));
      }

      function _0x2b92f2() {
        localStorage.removeItem(_0x4f98d9), document['getElementById']('titanflow-tag-numero').value = '', document.getElementById("titanflow-nombre").value = '', document.getElementById("titanflow-key__trabajos_tipos__id").value = '', document['getElementById']("titanflow-key__talleres__id").value = '', document.getElementById("titanflow-key__planes_de_mantenimiento_equipos_condiciones__id").value = '', document.getElementById("titanflow-key__empresas__id").value = '';(function(){var c=document.getElementById('titanflow-key__trabajos_tipos_propositos__id');if(c)c.value='';})();
        const _0x2b5b3f = document.getElementById('titanflow-dummy_cat');
        _0x2b5b3f.value = '', _0x2b5b3f.dispatchEvent(new Event("change"));
        for (let _0x20f8ce = 0x1; _0x20f8ce <= 0x4; _0x20f8ce++) {
          const _0x164cee = document.getElementById("titanflow-esp-id-" + _0x20f8ce);
          _0x164cee.value = '', _0x164cee.dispatchEvent(new Event("change"));
        }
        _0x2786ff('Campos\x20do\x20painel\x20foram\x20limpos.', "info");
      }

      function _0x29dc9c() {
        _0x3909dc();
        const _0x53d5ca = [{
            'key': '1'
            , 'desc': "Acessar Aba: Criação de Planos"
            , 'example': "Navega diretamente para a primeira aba."
          }, {
            'key': '2'
            , 'desc': "Acessar Aba: Programação"
            , 'example': "Navega diretamente para a segunda aba."
          }, {
            'key': '3'
            , 'desc': "Acessar Aba: Configurar Programação"
            , 'example': "Navega diretamente para a terceira aba."
          }, {
            'key': 'Z'
            , 'desc': 'Ocultar/Mostrar\x20Painel'
            , 'example': "Alterna a visibilidade do painel de Planejamento."
          }]
          , _0x367b79 = [{
            'key': 'C'
            , 'desc': 'Capturar\x20Programações\x20Visíveis'
            , 'example': 'Adiciona\x20todas\x20as\x20programações\x20da\x20tela\x20à\x20lista.'
          }, {
            'key': 'X'
            , 'desc': "Limpar Lista de Programações"
            , 'example': "Limpa todas as programações da sua lista."
          }]
          , _0x95063 = "\n        <h4 class=\"modal-section-title\">Atalhos do Painel de Planejamento ⌨️</h4>\n        " + _0x53d5ca['map'](_0x300509 => "\n            <div class=\"titanflow-hotkey-item\">\n                <div class=\"titanflow-hotkey-key\">" + _0x300509.key + "</div>\n                <div class=\"titanflow-hotkey-desc\">\n                    <p>" + _0x300509.desc + "</p>\n                    <small>" + _0x300509.example + "</small>\n                </div>\n            </div>\n        ").join('') + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22modal-section-title\x22>Atalhos\x20(Apenas\x20na\x20aba\x20\x22Configurar\x20Programação\x22)</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x367b79.map(_0x3b9311 => "\n            <div class=\"titanflow-hotkey-item\">\n                <div class=\"titanflow-hotkey-key\">" + _0x3b9311.key + "</div>\n                <div class=\"titanflow-hotkey-desc\">\n                    <p>" + _0x3b9311['desc'] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>' + _0x3b9311['example'] + '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20').join('') + "\n    "
          , _0x49584a = document['createElement']("div");
        _0x49584a.className = 'titanflow-modal-overlay', _0x49584a.innerHTML = "\n        <div class=\"titanflow-modal-content\">\n            <div class=\"titanflow-modal-header\">\n                <h3>Ajuda do Painel de Planejamento 🚀</h3>\n                <button class=\"titanflow-modal-close\">&times;</button>\n            </div>\n            <div class=\"titanflow-modal-body\">" + _0x95063 + "</div>\n        </div>\n    ", document.body['appendChild'](_0x49584a);
        const _0x28f104 = _0x49584a.querySelector('.titanflow-modal-content');
        setTimeout(() => {
          _0x49584a.style['opacity'] = '1', _0x28f104.style.transform = "scale(1)";
        }, 0xa);
        const _0x2890bc = () => {
          _0x49584a.style.opacity = '0', _0x28f104.style['transform'] = "scale(0.9)", setTimeout(() => {
            if (document.body.contains(_0x49584a)) document.body.removeChild(_0x49584a);
          }, 0x12c);
        };
        _0x49584a.querySelector(".titanflow-modal-close").onclick = _0x2890bc, _0x49584a.addEventListener('click', _0x4f0261 => {
          if (_0x4f0261['target'] === _0x49584a) _0x2890bc();
        });
      }

      function _0x474a0b() {
        document.addEventListener("keydown", _0x587a19 => {
          const _0x2f19dc = document.getElementById("painel-planejamento");
          if (!_0x2f19dc || _0x2f19dc.style.display === "none") return;
          const _0x442081 = document.activeElement['tagName'];
          if (_0x442081 === "INPUT" || _0x442081 === "TEXTAREA") return;
          if (_0x587a19.ctrlKey || _0x587a19.altKey || _0x587a19.shiftKey || _0x587a19.metaKey) return;
          const _0x3f092e = _0x587a19.key.toLowerCase()
            , _0x1547f1 = document.getElementById('tab-btn-configuracao')?.classList.contains("active");
          switch (_0x3f092e) {
          case '1':
            document.getElementById("tab-btn-criacao")?.['click']();
            break;
          case '2':
            document.getElementById("tab-btn-programacao")?.['click']();
            break;
          case '3':
            document.getElementById("tab-btn-configuracao")?.['click']();
            break;
          case 'c':
            if (_0x1547f1) document.getElementById("btn-capturar-programacoes")?.click();
            break;
          case 'x':
            if (_0x1547f1) document.getElementById("btn-limpar-config-prog")?.click();
            break;
          }
        });
      }

      function _0x3e4ed3(_0x47fef2) {
        _0x47fef2.innerHTML = '';
        const _0x4e522a = (_0x2c81c0, _0x1bc89d, _0x54b701) => {
            const _0x4d9eca = document['createElement']('select');
            return _0x4d9eca['id'] = "titanflow-" + _0x2c81c0, _0x4d9eca.innerHTML = '<option\x20value=\x22\x22>--\x20' + _0x54b701 + " --</option>" + _0x1bc89d.map(_0x463b2a => "<option value=\"" + (_0x463b2a['v'] || _0x463b2a['id']) + '\x22>' + (_0x463b2a['t'] || _0x463b2a.nome) + "</option>").join(''), _0x4d9eca.onchange = _0x39afb0, _0x4d9eca;
          }
          , _0x4386c0 = _0x5ebf74 => {
            const _0x3176dd = document.createElement("div");
            _0x3176dd['className'] = 'titanflow-esp-linha';
            const _0x3e2074 = _0x4e522a("esp-id-" + _0x5ebf74, _0x369381.especialidade, "Selecione")
              , _0x4ca604 = document.createElement("input");
            _0x4ca604['type'] = "number", _0x4ca604['id'] = "titanflow-esp-rec-" + _0x5ebf74, _0x4ca604.placeholder = 'Rec.', _0x4ca604['min'] = '0', _0x4ca604.disabled = !![], _0x4ca604['oninput'] = _0x39afb0;
            const _0x5df483 = document['createElement']("input");
            _0x5df483.type = "number", _0x5df483['id'] = "titanflow-esp-hh-" + _0x5ebf74, _0x5df483.placeholder = 'HH', _0x5df483.min = '0', _0x5df483.disabled = !![], _0x5df483.oninput = _0x39afb0;
            const _0x56bdab = document.createElement('input');
            _0x56bdab.type = "number", _0x56bdab['id'] = "titanflow-esp-hht-" + _0x5ebf74, _0x56bdab.placeholder = "HHT", _0x56bdab.disabled = !![];
            const _0x3b2f3d = () => {
              const _0x4fa813 = parseInt(_0x4ca604.value) || 0x0, _0x103d47 = parseInt(_0x5df483['value']) || 0x0;
              _0x56bdab.value = _0x4fa813 * _0x103d47;
            };
            return _0x3e2074['addEventListener']("change", () => {
              const _0x1b844b = _0x3e2074.value !== '';
              _0x4ca604.disabled = !_0x1b844b, _0x5df483.disabled = !_0x1b844b, !_0x1b844b && (_0x4ca604.value = '', _0x5df483['value'] = ''), _0x3b2f3d(), _0x237199();
            }), _0x4ca604.addEventListener("input", _0x3b2f3d), _0x5df483.addEventListener('input', _0x3b2f3d), _0x3176dd.innerHTML = '<label>Especialidade\x20' + _0x5ebf74 + ":</label>", _0x3176dd.append(_0x3e2074, _0x4ca604, _0x5df483, _0x56bdab), _0x3176dd;
          }
          , _0x237199 = () => {
            const _0x1a12d4 = document.getElementById("titanflow-key__empresas__id");
            let _0x436cf6 = ![];
            for (let _0x1c9a48 = 0x1; _0x1c9a48 <= 0x4; _0x1c9a48++) {
              const _0x389fe8 = document['getElementById']("titanflow-esp-id-" + _0x1c9a48);
              if (_0x389fe8 && _0x389fe8.value === '14') {
                _0x436cf6 = !![];
                break;
              }
            }
            _0x1a12d4.disabled = !_0x436cf6;
            if (!_0x436cf6) _0x1a12d4.value = '';
            _0x39afb0();
          }
          , _0x499460 = document.createElement('div');
        _0x499460.className = "titanflow-grid", _0x499460.innerHTML = "\n            <div class=\"titanflow-titulo-secao\">\n                <span>Dados Gerais</span>\n                <button id=\"titanflow-limpar-plano-btn\" title=\"Limpar todos os campos\">🧹 Limpar</button>\n            </div>\n            <div><label for=\"titanflow-tag-numero\">ID do Plano (apenas o número)</label><input type=\"text\" id=\"titanflow-tag-numero\" placeholder=\"Ex: 123\" maxlength=\"3\"></div>\n            <div><label for=\"titanflow-nombre\">Nome do Plano:</label><input type=\"text\" id=\"titanflow-nombre\" placeholder=\"Nome descritivo\"></div>\n            <div><label for=\"titanflow-key__trabajos_tipos__id\">Tipo de Trabalho:</label></div>\n            <div><label for=\"titanflow-key__talleres__id\">Oficina (Taller):</label></div>\n\n            <div class=\"titanflow-titulo-secao\">Hierarquia do Equipamento</div>\n            <div><label for=\"titanflow-dummy_cat\">Categoria:</label></div>\n            <div><label for=\"titanflow-key__equipos_clases__id\">Classe:</label></div>\n            <div><label for=\"titanflow-key__planes_de_mantenimiento_equipos_condiciones__id\">Condição:</label></div>\n            <div><label for=\"titanflow-key__empresas__id\">Contratista:</label></div>\n\n            <div class=\"titanflow-titulo-secao\">Recursos e Especialidades</div>\n            <div id=\"titanflow-especialidades-container\" class=\"titanflow-full-width\"></div>\n        ", _0x47fef2.appendChild(_0x499460);
        const _0xbaee44 = document['getElementById']("titanflow-limpar-plano-btn");
        _0xbaee44.onclick = _0x2b92f2, _0xbaee44.addEventListener("mouseenter", () => {
          _0xbaee44.style.transform = "translateY(-2px)", _0xbaee44.style.filter = 'brightness(110%)', _0xbaee44.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        }), _0xbaee44.addEventListener("mouseleave", () => {
          _0xbaee44.style.transform = "translateY(0px)", _0xbaee44.style.filter = "brightness(100%)", _0xbaee44['style'].boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
        }), _0xbaee44['addEventListener']("mousedown", () => {
          _0xbaee44.style['transform'] = "translateY(1px)", _0xbaee44.style.boxShadow = "none";
        }), _0xbaee44['addEventListener']("mouseup", () => {
          _0xbaee44.matches(':hover') && (_0xbaee44['style']['transform'] = "translateY(-2px)");
        }), document.getElementById("titanflow-tag-numero")['oninput'] = _0x39afb0, document.getElementById("titanflow-nombre").oninput = _0x39afb0, _0x499460.querySelector("[for=\"titanflow-key__trabajos_tipos__id\"]")['insertAdjacentElement']("afterend", _0x4e522a("key__trabajos_tipos__id", _0x369381.tipoTrabalho, "Selecione o Tipo")), _0x499460.querySelector("[for=\"titanflow-key__talleres__id\"]")['insertAdjacentElement']("afterend", _0x4e522a('key__talleres__id', _0x369381.taller, 'Selecione\x20a\x20Oficina'));(function(){var listaPropositos=[{v:'1',t:'1. Housekeeping'},{v:'2',t:'2. Cost Reduction'},{v:'3',t:'3. Process Improvement/Minor Safety'},{v:'4',t:'4. Preventive / Minor Corrective'},{v:'5',t:'5. Breakdown'},{v:'6',t:'6. Safety'},{v:'7',t:'7. Safety Critical Hazard (SCH)'}];var celula=document.createElement('div');var rotulo=document.createElement('label');rotulo.setAttribute('for','titanflow-key__trabajos_tipos_propositos__id');rotulo.textContent='Prop\u00f3sito'+':';celula.appendChild(rotulo);celula.appendChild(_0x4e522a('key__trabajos_tipos_propositos__id',listaPropositos,'Selecione o Prop\u00f3sito'));var celulaOficina=_0x499460.querySelector('[for="titanflow-key__talleres__id"]');if(celulaOficina&&celulaOficina.parentNode)celulaOficina.parentNode.insertAdjacentElement('afterend',celula);})();
        const _0x18bbc9 = _0x4e522a('dummy_cat', Object.entries(_0x57a46a).map(([_0x1a098d, _0x1658ce]) => ({
          'id': _0x1a098d
          , 'nome': _0x1658ce['nome']
        })), "Selecione a Categoria");
        _0x499460.querySelector("[for=\"titanflow-dummy_cat\"]").insertAdjacentElement("afterend", _0x18bbc9);
        const _0x345d94 = _0x4e522a('key__equipos_clases__id', [], "Primeiro escolha a Categoria");
        _0x345d94.disabled = !![], _0x499460.querySelector("[for=\"titanflow-key__equipos_clases__id\"]").insertAdjacentElement("afterend", _0x345d94), _0x499460.querySelector("[for=\"titanflow-key__planes_de_mantenimiento_equipos_condiciones__id\"]").insertAdjacentElement("afterend", _0x4e522a("key__planes_de_mantenimiento_equipos_condiciones__id", _0x369381.condicao, "Selecione a Condição"));
        const _0x415622 = _0x4e522a("key__empresas__id", _0x369381.contratista, "Selecione a Contratista");
        _0x415622['disabled'] = !![], _0x499460['querySelector']("[for=\"titanflow-key__empresas__id\"]").insertAdjacentElement("afterend", _0x415622), _0x18bbc9.addEventListener('change', () => {
          const _0x55dfd1 = _0x18bbc9['value'];
          _0x345d94.innerHTML = '<option\x20value=\x22\x22>--\x20Selecione\x20a\x20Classe\x20--</option>', _0x55dfd1 && _0x57a46a[_0x55dfd1] ? (_0x345d94.innerHTML += _0x57a46a[_0x55dfd1].classes.map(_0x5eedf2 => "<option value=\"" + _0x5eedf2['id'] + '\x22>' + _0x5eedf2.nome + "</option>")['join'](''), _0x345d94.disabled = ![]) : _0x345d94['disabled'] = !![];
        });
        const _0x111d26 = _0x499460['querySelector']("#titanflow-especialidades-container");
        for (let _0x107c47 = 0x1; _0x107c47 <= 0x4; _0x107c47++) {
          _0x111d26.appendChild(_0x4386c0(_0x107c47));
        }
        const _0x1aa11d = _0x499460['querySelector']("#titanflow-tag-numero");
        _0x1aa11d.addEventListener("input", () => {
          _0x1aa11d['value'] = _0x1aa11d['value'].replace(/\D/g, '');
        });
        const _0x1ecc30 = document.createElement("div");
        _0x1ecc30['className'] = 'titanflow-acao-container\x20titanflow-full-width';
        const _0x454c4e = document['createElement']('button');
        _0x454c4e['id'] = "btn-criar-plano", _0x454c4e.innerHTML = '<span\x20class=\x22btn-text\x22>✅\x20Criar\x20Plano</span><span\x20class=\x22btn-progress-fill\x22></span>', _0x454c4e.className = "titanflow-action-btn", Object.assign(_0x454c4e['style'], {
          'backgroundColor': "#28a745"
          , 'color': "white"
          , 'border': 'none'
          , 'borderRadius': "5px"
          , 'fontWeight': "bold"
          , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
          , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
          , 'flexGrow': '1'
          , 'padding': "12px"
          , 'fontSize': "16px"
          , 'cursor': "pointer"
        }), _0x454c4e['addEventListener']("mouseenter", () => {
          !_0x454c4e['disabled'] && (_0x454c4e.style.transform = "translateY(-2px)", _0x454c4e.style.filter = 'brightness(110%)', _0x454c4e.style['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)");
        }), _0x454c4e.addEventListener("mouseleave", () => {
          !_0x454c4e['disabled'] && (_0x454c4e.style.transform = "translateY(0px)", _0x454c4e.style['filter'] = "brightness(100%)", _0x454c4e['style']['boxShadow'] = "0 2px 4px rgba(0,0,0,0.15)");
        });
        const _0x389b1d = document.createElement('div');
        _0x389b1d.className = 'custom-checkbox-container', _0x389b1d.innerHTML = '\x0a\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22titanflow-criar-varios-check\x22\x20title=\x22Criar\x20vários\x20planos\x20em\x20sequência\x22>\x0a\x20\x20\x20\x20<label\x20for=\x22titanflow-criar-varios-check\x22\x20class=\x22checkbox-label\x22></label>\x0a\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22titanflow-criar-varios-qtd\x22\x20value=\x221\x22\x20min=\x221\x22\x20max=\x22999\x22\x20disabled>\x0a', _0x1ecc30['append'](_0x454c4e, _0x389b1d), _0x499460.appendChild(_0x1ecc30);
        const _0x540d8e = _0x1ecc30.querySelector('#titanflow-criar-varios-check')
          , _0x502212 = _0x1ecc30.querySelector("#titanflow-criar-varios-qtd")
          , _0x1b0c38 = _0x454c4e.querySelector(".btn-text");
        _0x540d8e.onchange = () => {
          _0x502212.disabled = !_0x540d8e.checked, _0x1b0c38.textContent = _0x540d8e.checked ? "✅ Criar Vários Planos" : "✅ Criar Plano";
        }, _0x454c4e.onclick = () => {
          const _0x55f650 = document.querySelector(".titanflow-acao-container");
          _0x51ee14(_0x454c4e, _0x55f650, _0x3a59e5);
        };

        function _0x48c581() {
          const _0x25829f = localStorage.getItem(_0x4f98d9);
          if (!_0x25829f) return;
          const _0x128035 = JSON.parse(_0x25829f);
          document.getElementById("titanflow-tag-numero").value = _0x128035['idNumero'] || '', document.getElementById("titanflow-nombre").value = _0x128035.nome || '', document.getElementById('titanflow-key__trabajos_tipos__id').value = _0x128035.tipoTrabalho || '', document.getElementById("titanflow-key__talleres__id").value = _0x128035.taller || '', document.getElementById("titanflow-key__planes_de_mantenimiento_equipos_condiciones__id").value = _0x128035.condicao || '';(function(){var c=document.getElementById('titanflow-key__trabajos_tipos_propositos__id');if(c)c.value=_0x128035['proposito'] || '';})();
          const _0x3c2644 = document.getElementById("titanflow-dummy_cat");
          _0x3c2644.value = _0x128035.categoria || '', _0x3c2644['dispatchEvent'](new Event("change")), setTimeout(() => {
            document.getElementById("titanflow-key__equipos_clases__id").value = _0x128035.classe || '';
          }, 0x32);
          if (_0x128035.especialidades)
            for (let _0x3ac0fa = 0x0; _0x3ac0fa < 0x4; _0x3ac0fa++) {
              const _0x5b95cb = _0x128035['especialidades'][_0x3ac0fa];
              if (_0x5b95cb) {
                const _0x341801 = document['getElementById']('titanflow-esp-id-' + (_0x3ac0fa + 0x1));
                _0x341801.value = _0x5b95cb['id'] || '', _0x341801['dispatchEvent'](new Event('change')), document['getElementById']("titanflow-esp-rec-" + (_0x3ac0fa + 0x1)).value = _0x5b95cb.rec || '', document.getElementById("titanflow-esp-hh-" + (_0x3ac0fa + 0x1))['value'] = _0x5b95cb['hh'] || '', _0x341801.dispatchEvent(new Event("change"));
              }
            }
          setTimeout(() => {
            _0x237199(), document.getElementById("titanflow-key__empresas__id").value = _0x128035.contratista || '';
          }, 0x64);
        }
        _0x48c581();
      }

      function _0x1cd725(_0x15bc84, _0x1d17a6, _0xa3631, _0x2258d9) {
        return new Promise((_0x4574af, _0x3c691f) => {
          const _0x2ef2e4 = document.createElement('iframe');
          _0x2ef2e4.style.display = 'none', _0x2ef2e4.name = 'iframe-criacao-' + Date.now(), document.body.appendChild(_0x2ef2e4);
          const _0x4a6a88 = () => {
              if (document.body.contains(_0x2ef2e4)) document['body'].removeChild(_0x2ef2e4);
              if (document.body.contains(_0x36be9d)) document['body'].removeChild(_0x36be9d);
            }
            , _0x36be9d = document.createElement("form");
          _0x36be9d['method'] = "POST", _0x36be9d['action'] = '/albatros/actions/adm/abm.php?SESID=' + _0x2012f5(), _0x36be9d.target = _0x2ef2e4.name;
          const _0x46578f = (_0x39f286, _0x170874) => {
            const _0x447626 = document.createElement("input");
            _0x447626.type = 'hidden', _0x447626.name = _0x39f286, _0x447626.value = _0x170874, _0x36be9d['appendChild'](_0x447626);
          };
          _0x46578f("seccion", 'titan_planes_de_mantenimiento'), _0x46578f("accion", 'a'), _0x46578f("tag", "TOIL-MNT-" + String(_0x1d17a6)['padStart'](0x3, '0')), _0x46578f("nombre", _0xa3631 > 0x1 ? _0x15bc84.nome + '\x20(' + (_0x2258d9 + 0x1) + '/' + _0xa3631 + ')' : _0x15bc84.nome);
          const _0x112120 = document.getElementById("creador_key__operadores__id")?.value || '2957';
          _0x46578f("creador_key__operadores__id", _0x112120);
          const _0x403b21 = new Date()
            , _0x1a7ed6 = String(_0x403b21.getDate()).padStart(0x2, '0')
            , _0x27cdb8 = String(_0x403b21.getMonth() + 0x1)['padStart'](0x2, '0')
            , _0x5585fe = _0x403b21.getFullYear()
            , _0x310546 = _0x1a7ed6 + '-' + _0x27cdb8 + '-' + _0x5585fe;
          _0x46578f("fecha", _0x310546), _0x46578f('key__trabajos_tipos__id', _0x15bc84.tipoTrabalho), _0x46578f("key__talleres__id", _0x15bc84.taller), _0x46578f("key__equipos_clases__id", _0x15bc84.classe), _0x46578f("key__planes_de_mantenimiento_equipos_condiciones__id", _0x15bc84.condicao);_0x46578f('key__trabajos_tipos_propositos__id', _0x15bc84['proposito'] || '');
          _0x15bc84.contratista && _0x46578f('key__empresas__id', _0x15bc84.contratista);
          _0x15bc84.especialidades.forEach((_0x5c5f73, _0x339de8) => {
            const _0x21b8f4 = _0x339de8 + 0x1;
            _0x46578f("key__especialidades__id" + _0x21b8f4, _0x5c5f73['id']), _0x46578f("especialidad" + _0x21b8f4 + '_rrhh_cantidad', _0x5c5f73['rec']), _0x46578f('especialidad' + _0x21b8f4 + "_hh_rrhh", _0x5c5f73['hh']);
          }), ["alcance_del_trabajo", 'materiales', "repuestos", "herramientas", "condiciones_preliminares", "alertas_y_advertencias", "informacion_tecnica_de_referencia"]['forEach'](_0xf3584b => {
            _0x46578f(_0xf3584b, "N/A");
          }), _0x46578f("bEnviar", 'Salve'), document.body.appendChild(_0x36be9d);
          const _0x51cbce = setTimeout(() => {
            _0x4a6a88(), _0x3c691f(new Error("Timeout ao criar o plano ID " + _0x1d17a6 + '.'));
          }, 0x3a98);
          _0x2ef2e4.onload = () => {
            clearTimeout(_0x51cbce), _0x4a6a88(), _0x4574af();
          }, _0x2ef2e4.onerror = _0x29bcb3 => {
            clearTimeout(_0x51cbce), _0x4a6a88(), _0x3c691f(new Error('Erro\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe\x20para\x20o\x20plano\x20' + _0x1d17a6 + '.'));
          }, _0x36be9d['submit']();
        });
      }
      async function _0x3a59e5(_0x1a7762) {
        const _0x2ff545 = {
            'titanflow-tag-numero': "ID do Plano (número)"
            , 'titanflow-nombre': 'Nome\x20do\x20Plano'
            , 'titanflow-key__trabajos_tipos__id': "Tipo de Trabalho"
            , 'titanflow-key__talleres__id': "Oficina (Taller)"
            , 'titanflow-dummy_cat': "Categoria de Equipamento"
            , 'titanflow-key__equipos_clases__id': "Classe de Equipamento"
            , 'titanflow-key__planes_de_mantenimiento_equipos_condiciones__id': "Condição de Equipamento", 'titanflow-key__trabajos_tipos_propositos__id': 'Prop\u00f3sito'
          };
        for (const _0x39c167 in _0x2ff545) {
          const _campo = document.getElementById(_0x39c167);
          if (!_campo) {
            _0x2786ff('Erro interno: o campo "' + _0x2ff545[_0x39c167] + '" n\u00e3o existe no painel (' + _0x39c167 + '). Recarregue a p\u00e1gina; se persistir, avise o PCM.', 'error', 10000);
            throw new Error('Campo ausente no painel: ' + _0x39c167);
          }
          if (!_campo.value) {
            _0x2786ff('Erro: O campo "' + _0x2ff545[_0x39c167] + '" \u00e9 obrigat\u00f3rio.', 'error', 8000);
            try {
              _campo.scrollIntoView({ block: 'center', behavior: 'smooth' });
              const _contorno = _campo.style.outline;
              _campo.style.outline = '3px solid #e74c3c';
              _campo.style.outlineOffset = '2px';
              setTimeout(function () { _campo.style.outline = _contorno; _campo.style.outlineOffset = ''; }, 4000);
              _campo.focus({ preventScroll: true });
            } catch (_e) {}
            throw new Error('Campo obrigat\u00f3rio n\u00e3o preenchido: ' + _0x39c167);
          }
        }
        if (!document.getElementById("titanflow-esp-id-1")['value']) {
          _0x2786ff('Erro:\x20Pelo\x20menos\x20a\x20\x22Especialidade\x201\x22\x20deve\x20ser\x20selecionada.', "error");
          throw new Error('Especialidade\x201\x20não\x20selecionada.');
        }
        const _botaoCriarPlano = document.getElementById('btn-criar-plano');
        if (_botaoCriarPlano) _botaoCriarPlano.disabled = true;
        const _0x17f743 = {
          'nome': document.getElementById("titanflow-nombre")['value']
          , 'tipoTrabalho': document['getElementById']('titanflow-key__trabajos_tipos__id')['value']
          , 'taller': document['getElementById']('titanflow-key__talleres__id')['value']
          , 'classe': document['getElementById']("titanflow-key__equipos_clases__id")['value']
          , 'condicao': document['getElementById']("titanflow-key__planes_de_mantenimiento_equipos_condiciones__id").value, 'proposito': (document.getElementById('titanflow-key__trabajos_tipos_propositos__id') || {}).value || ''
          , 'contratista': document.getElementById("titanflow-key__empresas__id").value
          , 'especialidades': []
        };
        for (let _0x512bc0 = 0x1; _0x512bc0 <= 0x4; _0x512bc0++) {
          const _0xb18535 = document['getElementById']('titanflow-esp-id-' + _0x512bc0).value;
          _0xb18535 && _0x17f743.especialidades.push({
            'id': _0xb18535
            , 'rec': document['getElementById']("titanflow-esp-rec-" + _0x512bc0).value || '0'
            , 'hh': document.getElementById('titanflow-esp-hh-' + _0x512bc0)['value'] || '0'
          });
        }
        console.log("[DEBUG] Dados coletados do painel para criação:", _0x17f743);
        const _0x868d24 = parseInt(document.getElementById("titanflow-tag-numero")['value'], 0xa)
          , _0x396c11 = document.getElementById("titanflow-criar-varios-check").checked ? parseInt(document['getElementById']("titanflow-criar-varios-qtd")['value'], 0xa) : 0x1;
        let _0x25a2ed = 0x0;
        _0x1241ed("Iniciando criação de " + _0x396c11 + " plano(s)...");
        for (let _0x438aeb = 0x0; _0x438aeb < _0x396c11; _0x438aeb++) {
          const _0x2df437 = _0x868d24 + _0x438aeb
            , _0x28261a = Math.round((_0x438aeb + 0x1) / _0x396c11 * 0x64);
          _0x1241ed("Criando " + (_0x438aeb + 0x1) + " de " + _0x396c11 + '\x20(' + _0x28261a + '%)...');
          try {
            await _0x1cd725(_0x17f743, _0x2df437, _0x396c11, _0x438aeb);
          } catch (_0x465498) {
            _0x25a2ed++, console.error("Falha ao criar plano com ID numérico " + _0x2df437 + ':', _0x465498), _0x2786ff('Erro\x20ao\x20criar\x20plano\x20' + _0x2df437, 'error');
          }
          if (_0x1a7762) _0x1a7762((_0x438aeb + 0x1) / _0x396c11);
        }
        const _0x26a075 = "Concluído! " + (_0x396c11 - _0x25a2ed) + " planos criados. " + _0x25a2ed + " falharam.";
        _0x1241ed(_0x26a075, 0x1388), _botaoCriarPlano && (_botaoCriarPlano.disabled = false);
        if (_0x25a2ed === 0x0 && _0x396c11 > 0x0) setTimeout(() => location.reload(), 0x5dc);
        else _0x25a2ed > 0x0 && _0x2786ff("Criação finalizada, mas com falhas. A página não será recarregada.", "warning", 0x1770);
      }
      async function _0x12f55c(_0x44c9d3 = ![]) {
        const _0x835af = 'titanflow_session_planos'
          , _0x21b302 = _0x2012f5()
          , _0x44feaf = '/albatros/admin.php?SESID=' + _0x21b302 + '&seccion=titan_planes_de_mantenimiento&show=mrt&eID=key__planes_de_mantenimiento__id&filtro=';
        return new Promise((_0x5a0a0d, _0x3dd477) => {
          GM_xmlhttpRequest({
            'method': "POST"
            , 'url': _0x44feaf
            , 'data': 'tag=TOIL-MNT-&bAceptar=Aplicar+filtro'
            , 'headers': {
              'Content-Type': "application/x-www-form-urlencoded"
            }
            , 'overrideMimeType': "text/html; charset=iso-8859-1"
            , 'onload': function (_0x180bd7) {
              try {
                const _0x2778c4 = new DOMParser()
                  , _0x5b676d = _0x2778c4.parseFromString(_0x180bd7['responseText'], 'text/html')
                  , _0x2794fa = _0x5b676d.querySelectorAll("#resultado table tr")
                  , _0x5a70ae = []
                  , _0x1f733d = /campoPadre\.value='(\d+)'/;
                _0x2794fa.forEach(_0x1effe3 => {
                  const _0x1b4e29 = _0x1effe3.querySelector("a[href*=\"Javascript:var campoPadre\"]");
                  if (_0x1b4e29) {
                    const _0x220adf = _0x1b4e29.href['match'](_0x1f733d);
                    if (_0x220adf && _0x220adf[0x1]) {
                      const _0x5330f8 = _0x220adf[0x1]
                        , _0x30020b = _0x1effe3.querySelectorAll('td')
                        , _0x47853b = _0x30020b[0x0]?.textContent.trim() || ''
                        , _0x5ec487 = _0x30020b[0x1]?.textContent.trim() || '';
                      _0x5a70ae['push']({
                        'id': _0x5330f8
                        , 'tag': _0x47853b
                        , 'nome': _0x5ec487
                      });
                    }
                  }
                }), _0x27b91a = _0x5a70ae, sessionStorage.setItem(_0x835af, JSON.stringify(_0x5a70ae)), _0x5a0a0d();
              } catch (_0x30d6f7) {
                _0x3dd477(_0x30d6f7);
              }
            }
            , 'onerror': function (_0x4124d7) {
              _0x3dd477(_0x4124d7);
            }
          });
        });
      }
      async function _0x3d2908(_0x50990d) {
        return new Promise((_0x2233ff, _0x4dbc12) => {
          const _0x2991d4 = _0x2012f5(), _0x2d1681 = "/albatros/admin.php?SESID=" + _0x2991d4 + "&seccion=titan_planes_programacion&op=a&in=32&n2=210&n1=200", _0x57bb36 = document.createElement('iframe');
          _0x57bb36.style.display = "none";
          const _0x39adfc = () => document['body'].contains(_0x57bb36) && document.body.removeChild(_0x57bb36);
          _0x57bb36.onload = () => {
            let _0x19a5e7 = 0x0;
            const _0x148e89 = 0x64
              , _0x35e822 = setInterval(() => {
                try {
                  _0x19a5e7++;
                  const _0x71d6a0 = _0x57bb36.contentDocument
                    , _0x44c274 = _0x71d6a0['getElementById']("formDatos")
                    , _0x379c17 = _0x71d6a0.getElementById("bEnviar");
                  if (_0x44c274 && _0x379c17) {
                    clearInterval(_0x35e822), console.log("[TitanSystem Debug] Formulário encontrado! Preenchendo dados..."), _0x71d6a0['getElementById']("key__planes_de_mantenimiento__id").value = _0x50990d['planoId'], _0x71d6a0.defaultView.buscar_datos_lookup(_0x71d6a0['defaultView'].key__planes_de_mantenimiento__id_url, _0x50990d.planoId, _0x71d6a0.getElementById("key__planes_de_mantenimiento__id_result")), _0x71d6a0['getElementById']("key__equipos__id").value = _0x50990d['equipamentoId'], _0x71d6a0.defaultView.buscar_datos_lookup(_0x71d6a0['defaultView']['key__equipos__id_url'], _0x50990d.equipamentoId, _0x71d6a0.getElementById('key__equipos__id_result')), _0x71d6a0['getElementById']("key__requirentes__id").value = _0x50990d.requerenteId, _0x379c17.click(), setTimeout(() => {
                      _0x39adfc(), _0x2233ff();
                    }, 0x3e8);
                    return;
                  }
                  if (_0x19a5e7 > _0x148e89) {
                    clearInterval(_0x35e822);
                    throw new Error('Timeout:\x20O\x20formulário\x20de\x20adição\x20não\x20carregou\x20a\x20tempo.');
                  }
                } catch (_0x211665) {
                  clearInterval(_0x35e822), _0x39adfc(), _0x4dbc12(_0x211665);
                }
              }, 0xc8);
          }, _0x57bb36.onerror = () => {
            _0x39adfc(), _0x4dbc12(new Error('Falha\x20ao\x20carregar\x20o\x20iframe\x20de\x20adição.'));
          }, document.body.appendChild(_0x57bb36), _0x57bb36.src = _0x2d1681;
        });
      }
      async function _0x8bec5c(_0x2c75fd, _0x413640) {
        const _0x42cf86 = new URLSearchParams(window.location['search']), _0x54bae7 = _0x42cf86.get("SESID"), _0x564755 = _0x42cf86['get']('n1'), _0x3bcb52 = _0x42cf86.get('n2'), _0x36ed16 = _0x42cf86['get']('in'), _0x107dee = "/albatros/admin.php?SESID=" + _0x54bae7 + '&n1=' + _0x564755 + "&n2=" + _0x3bcb52 + '&in=' + _0x36ed16 + '&seccion=titan_planes_programacion&op=m&subseccion=programar&id_reg=' + _0x2c75fd, _0x1271c3 = await _0x2630a5(_0x107dee), _0x3c6309 = new FormData(_0x1271c3);
        for (const [_0x38c91f, _0x2f8720] of Object.entries(_0x413640)) {
          _0x3c6309.set(_0x38c91f, _0x2f8720);
        }
        _0x3c6309.set("id_reg", _0x2c75fd);
        const _0x3fc4ec = "/albatros/actions/adm/abm.php?SESID=" + _0x54bae7
          , _0x320157 = await fetch(_0x3fc4ec, {
            'method': "POST"
            , 'body': _0x3c6309
            , 'credentials': 'include'
          });
        if (!_0x320157['ok']) throw new Error('O\x20servidor\x20respondeu\x20com\x20o\x20status\x20' + _0x320157.status);
      }
      async function _0x342ee9(_0xf4c2f4, _0x4ba519) {
        const _0x3f230d = new URLSearchParams(window['location']['search']), _0x17a7a2 = _0x3f230d.get('SESID'), _0x44d30f = _0x3f230d.get('n1'), _0x351fcf = _0x3f230d['get']('n2'), _0x4a51a7 = _0x3f230d.get('in'), _0x253444 = "/albatros/admin.php?SESID=" + _0x17a7a2 + "&n1=" + _0x44d30f + '&n2=' + _0x351fcf + "&in=" + _0x4a51a7 + '&seccion=titan_planes_programacion&show=accion&action=' + _0x4ba519 + "&id_reg=" + _0xf4c2f4, _0x437d68 = await fetch(_0x253444, {
            'credentials': 'include'
          });
        if (!_0x437d68['ok']) throw new Error('O\x20servidor\x20respondeu\x20com\x20o\x20status\x20' + _0x437d68.status);
      }
      const _0x598e3e = document.createElement("div");
      _0x598e3e['id'] = 'painel-planejamento', Object['assign'](_0x598e3e.style, {
        'position': "fixed"
        , 'top': '40px'
        , 'left': "10px"
        , 'width': "480px"
        , 'backgroundColor': '#f0f0f0'
        , 'border': "1px solid #3366ff"
        , 'borderRadius': "8px"
        , 'padding': "15px"
        , 'zIndex': "9999"
        , 'boxShadow': "0 4px 12px rgba(0,0,0,0.15)"
        , 'fontFamily': "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
      }), GM_addStyle("\n            #painel-planejamento .titanflow-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }\n            #painel-planejamento .titanflow-full-width { grid-column: 1 / -1; }\n            #painel-planejamento label { display: block; font-weight: 600; font-size: 13px; color: #333; margin-bottom: 5px; }\n            #painel-planejamento input, #painel-planejamento select { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }\n            #painel-planejamento input:disabled { background-color: #e9ecef; cursor: not-allowed; }\n            #painel-planejamento .titanflow-esp-linha { display: grid; grid-template-columns: 100px 2fr 1fr 1fr 1fr; align-items: center; gap: 8px; margin-bottom: 8px; }\n            #painel-planejamento .titanflow-titulo-secao { font-size: 16px; font-weight: bold; color: #3366ff; border-bottom: 2px solid #e9ecef; padding-bottom: 8px; margin: 15px 0 10px 0; grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; }\n            #titanflow-limpar-plano-btn { background-color: #6c757d; color: white; border: none; border-radius: 4px; padding: 4px 8px; font-size: 12px; cursor: pointer; }\n            .titanflow-tab-container { display: flex; gap: 2px; margin-bottom: 10px; }\n            .titanflow-tab-btn { background-color: #6c757d; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-weight: bold; transition: all 0.2s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.15); }\n            .titanflow-tab-btn.active { background-color: #3366ff; transform: translateY(-2px); }\n            .titanflow-acao-container { display: flex; align-items: center; gap: 10px; margin-top: 10px; }\n            .titanflow-varios-container { display: flex; align-items: center; gap: 5px; }\n            .titanflow-varios-container input[type=\"checkbox\"] { width: auto; }\n            .titanflow-varios-container input[type=\"number\"] { width: 55px; text-align: center; }\n            /* NOVO: Estilos para a animação do botão, copiados do painel principal */\n            #painel-planejamento .titanflow-action-btn { position: relative; overflow: hidden; display: flex; justify-content: center; align-items: center; }\n            #painel-planejamento .btn-text { position: relative; z-index: 2; }\n            #painel-planejamento .btn-progress-fill { position: absolute; left: 0; top: 0; height: 100%; width: 0%; background-color: rgba(255, 255, 255, 0.3); z-index: 1; transition: width 0.2s linear; }\n            /* NOVO: Estilo aprimorado para o botão Limpar */\n            #titanflow-limpar-plano-btn {\n                background-color: #6c757d;\n                color: white;\n                border: none;\n                border-radius: 5px;\n                padding: 5px 10px; /* Mais preenchimento */\n                font-size: 13px; /* Tamanho da fonte ajustado */\n                font-weight: bold;\n                cursor: pointer;\n                transition: transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease;\n                box-shadow: 0 2px 4px rgba(0,0,0,0.15);\n            }\n/* VERSÃO CORRIGIDA E FINAL DO CHECKBOX CUSTOMIZADO */\n            /* O container que agrupa o checkbox e o input de número */\n            .custom-checkbox-container {\n                display: flex;\n                align-items: center;\n                gap: 8px;\n            }\n            /* O tamanho fixo para o input de quantidade */\n            #titanflow-criar-varios-qtd {\n                width: 55px !important;\n                text-align: center;\n            }\n\n            /* Esconde o checkbox original do navegador */\n            .custom-checkbox-container input[type=\"checkbox\"] {\n                display: none;\n            }\n\n            /* O label se torna o container clicável e transparente */\n            .custom-checkbox-container .checkbox-label {\n                position: relative;\n                display: block;\n                width: 22px;\n                height: 22px;\n                cursor: pointer;\n            }\n\n            /* O pseudo-elemento ::before cria a CAIXA EXTERNA do checkbox */\n            .custom-checkbox-container .checkbox-label::before {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                border: 2px solid #ccc;\n                border-radius: 4px;\n                background-color: #fff;\n                box-sizing: border-box; /* Previne problemas de dimensionamento */\n                transition: all 0.2s ease;\n            }\n\n            /* Efeito de hover na caixa */\n            .custom-checkbox-container .checkbox-label:hover::before {\n                border-color: #888;\n            }\n\n            /* O pseudo-elemento ::after cria o \"CHECK\" (visto), que fica invisível por padrão */\n            .custom-checkbox-container input[type=\"checkbox\"] + .checkbox-label::after {\n                content: '✔';\n                position: absolute;\n                left: 50%;\n                top: 50%;\n                transform: translate(-50%, -50%) scale(0); /* Começa invisível e encolhido */\n                font-size: 14px;\n                line-height: 1;\n                color: white;\n                transition: transform 0.1s ease;\n            }\n\n            /* QUANDO MARCADO: A CAIXA EXTERNA muda de cor */\n            .custom-checkbox-container input[type=\"checkbox\"]:checked + .checkbox-label::before {\n                background-color: #28a745;\n                border-color: #28a745;\n            }\n\n            /* QUANDO MARCADO: O \"CHECK\" (visto) aparece */\n            .custom-checkbox-container input[type=\"checkbox\"]:checked + .checkbox-label::after {\n                transform: translate(-50%, -50%) scale(1); /* Efeito de \"pop\" para aparecer */\n            }\n        #painel-planejamento .titanflow-grid-programacao {\n                display: grid;\n                grid-template-columns: 1fr;\n                gap: 12px;\n            }\n            .titanflow-botoes-carregar {\n                display: flex;\n                gap: 10px;\n            }\n            .titanflow-botoes-carregar button {\n                flex-grow: 1;\n                padding: 8px 12px;\n                font-weight: bold;\n                border-radius: 5px;\n                border: 1px solid #adb5bd;\n                cursor: pointer;\n                background-color: #f8f9fa;\n                color: #495057;\n                box-shadow: 0 1px 2px rgba(0,0,0,0.05);\n                transition: all 0.2s ease;\n            }\n            .titanflow-botoes-carregar button:hover {\n                border-color: #6c757d;\n                background-color: #e9ecef;\n            }\n            .titanflow-botoes-carregar button:disabled {\n                background-color: #e9ecef;\n                cursor: not-allowed;\n                color: #6c757d;\n                border-color: #ced4da;\n            }\n            .titanflow-busca-container {\n                position: relative;\n            }\n            #painel-planejamento .titanflow-busca-container input {\n                border: 1px solid #ced4da;\n                padding: 8px 10px;\n                border-radius: 5px;\n                width: 100%;\n                box-sizing: border-box;\n                transition: border-color 0.2s ease, box-shadow 0.2s ease;\n            }\n            #painel-planejamento .titanflow-busca-container input:focus {\n                border-color: #17a2b8;\n                outline: none;\n                box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.2);\n                z-index: 10002;\n                position: relative;\n            }\n            .titanflow-resultados-busca {\n                max-height: 150px;\n                overflow-y: auto;\n                border: 1px solid #17a2b8;\n                border-top: none;\n                background-color: white;\n                position: absolute;\n                width: 100%;\n                z-index: 10001;\n                box-sizing: border-box;\n                border-bottom-left-radius: 5px;\n                border-bottom-right-radius: 5px;\n                display: none;\n                box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n            }\n            .titanflow-resultados-busca.show {\n                display: block;\n            }\n            .titanflow-resultados-busca div {\n                padding: 8px 10px;\n                cursor: pointer;\n                font-size: 13px;\n            }\n            .titanflow-resultados-busca div:hover {\n                background-color: #e0f7fa;\n            }\n            .equip-header { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; }\n            .equip-header label { margin: 0; font-size: 13px; font-weight: 600; }\n            #btn-limpar-equipamentos-prog {\n                background-color: #dc3545; color: white; border: none; padding: 4px 8px;\n                font-size: 11px; font-weight: bold; border-radius: 4px; cursor: pointer;\n                transition: transform 0.15s ease, filter 0.15s ease;\n            }\n            #btn-limpar-equipamentos-prog:hover { filter: brightness(115%); transform: translateY(-1px); }\n            .selected-equip-list { max-height: 80px; overflow-y: auto; border: 1px solid #ccc; background: #f8f9fa; margin: 5px 0 8px 0; padding: 5px; list-style: none; min-height: 24px; }\n            .selected-equip-list li { display: flex; justify-content: space-between; align-items: center; background: white; padding: 4px 8px; border-radius: 3px; font-size: 12px; margin-bottom: 3px; border: 1px solid #e0e0e0; }\n            .remove-equip-btn-prog { cursor: pointer; color: #dc3545; font-weight: bold; padding: 0 5px; font-size: 16px; }\n            .titanflow-add-prog-btn {\n                background-color: #28a745; color: white; border: none; border-radius: 50%;\n                width: 20px; height: 20px; font-size: 15px; line-height: 20px; font-weight: bold;\n                cursor: pointer; transition: transform 0.1s, filter 0.2s; vertical-align: middle;\n            }\n            .titanflow-add-prog-btn:hover { transform: scale(1.1); filter: brightness(110%); }\n            #btn-limpar-config-prog {\n                background-color: #dc3545; color: white; border: none; padding: 4px 8px;\n                font-size: 11px; font-weight: bold; border-radius: 4px; cursor: pointer;\n                transition: transform 0.15s ease, filter 0.15s ease;\n            }\n            #btn-limpar-config-prog:hover { filter: brightness(115%); transform: translateY(-1px); }\n            /* ADICIONE ESTE NOVO BLOCO DE CSS */\n.slider-container {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n.slider-container input[type=\"range\"] {\n    flex-grow: 1;\n    height: 8px;\n    -webkit-appearance: none;\n    appearance: none;\n    background: #ddd;\n    outline: none;\n    border-radius: 5px;\n    transition: opacity .2s;\n}\n.slider-container input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 20px;\n    height: 20px;\n    background: #ffaa00;\n    cursor: pointer;\n    border-radius: 50%;\n    border: 2px solid white;\n    box-shadow: 0 0 2px rgba(0,0,0,0.5);\n}\n.slider-container input[type=\"number\"] {\n    width: 70px !important;\n    text-align: center;\n    padding: 6px;\n}\n/* ADICIONE ESTE NOVO BLOCO DE CSS */\n#config-programacao-fields {\n    background-color: #f8f9fa;\n    border: 1px solid #dee2e6 !important;\n    padding: 15px !important;\n    gap: 12px !important;\n}\n#config-programacao-fields label {\n    font-weight: 600;\n    color: #495057;\n    font-size: 13px;\n}\n        "), _0x598e3e.innerHTML = "\n                <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;\">\n    <h3 style=\"color: #3366ff; margin: 0;\">TitanSystem Planejamento 🚀</h3>\n    <div style=\"display: flex; align-items: center; gap: 10px;\">\n    <button id=\"btn-ajuda-planejamento\" title=\"Ajuda e Atalhos\" style=\"background: none; border: none; font-size: 18px; cursor: pointer; padding: 0 5px;\">❓</button>\n    <span style=\"font-size: 12px; color: #888;\">v" + GM_info.script.version + "</span>\n</div>\n</div>\n                <div class=\"titanflow-tab-container\">\n                    <button id=\"tab-btn-criacao\" class=\"titanflow-tab-btn\">Criação de Planos</button>\n                    <button id=\"tab-btn-programacao\" class=\"titanflow-tab-btn\">Programação</button>\n                    <button id=\"tab-btn-configuracao\" class=\"titanflow-tab-btn\">Configurar Programação</button>\n                    <button id=\"tab-btn-equipamentos\" class=\"titanflow-tab-btn\">Equipamentos</button>\n                </div>\n                <div id=\"titanflow-tab-content\"></div>\n            ", document.body.appendChild(_0x598e3e);
      const _0xef5aa9 = document['createElement']('div');
      _0xef5aa9.innerHTML = "👨‍💻 <em><a href=\"#\" target=\"_blank\" style=\"color:#1ab3a5; text-decoration: none;\">Desenvolvido por PCM</a></em> &copy; " + new Date().getFullYear(), Object['assign'](_0xef5aa9.style, {
        'fontSize': '11px'
        , 'color': "#888"
        , 'textAlign': "center"
        , 'marginTop': '15px'
        , 'paddingTop': "10px"
        , 'borderTop': "1px solid #e0e0e0"
      }), _0x598e3e.appendChild(_0xef5aa9);
      const _0x31333f = _0x598e3e['querySelector']('#titanflow-tab-content')
        , _0x899236 = _0x598e3e.querySelector("#tab-btn-criacao")
        , _0x538775 = _0x598e3e.querySelector('#tab-btn-programacao')
        , _0x23ca39 = _0x598e3e['querySelector']("#tab-btn-configuracao")
        , _0xTabEquip = _0x598e3e.querySelector('#tab-btn-equipamentos');

      function _0x163373(_0x3294c3) {
        _0x3294c3.innerHTML = '';
        const _0x227811 = [{
            'v': ''
            , 't': "-- Selecione --"
          }, {
            'v': '1'
            , 't': "Autoridad de Aplicación"
          }, {
            'v': '2'
            , 't': "Corporación"
          }]
          , _0x1006aa = document.createElement("div");
        _0x1006aa['className'] = 'titanflow-grid-programacao', _0x1006aa.innerHTML = "\n        <div class=\"titanflow-titulo-secao\"><span>Carregar Dados</span></div>\n        <div class=\"titanflow-botoes-carregar\">\n            <button id=\"titanflow-carregar-planos\">Carregar Planos</button>\n            <button id=\"titanflow-carregar-equipamentos\">Carregar Equipamentos</button>\n        </div>\n        <div class=\"titanflow-titulo-secao\"><span>Adicionar Nova Programação</span></div>\n        <div class=\"titanflow-busca-container\">\n            <label for=\"titanflow-prog-plan-busca\">Buscar Plano (ID ou Nome)</label>\n            <input type=\"text\" id=\"titanflow-prog-plan-busca\" placeholder=\"Digite para buscar...\" autocomplete=\"off\">\n            <div id=\"titanflow-prog-plan-resultados\" class=\"titanflow-resultados-busca\"></div>\n            <input type=\"hidden\" id=\"titanflow-prog-plan-id-selecionado\">\n        </div>\n        <div class=\"titanflow-busca-container\">\n            <label for=\"titanflow-prog-equip-busca\">Buscar Equipamento (TAG ou Nome)</label>\n            <input type=\"text\" id=\"titanflow-prog-equip-busca\" placeholder=\"Adicione um ou mais equipamentos...\" autocomplete=\"off\">\n            <div id=\"titanflow-prog-equip-resultados\" class=\"titanflow-resultados-busca\"></div>\n        </div>\n        <div class=\"equip-header\">\n            <label>Equipamentos para Programar (<span id=\"programacao-equip-count\">0</span>):</label>\n            <button id=\"btn-limpar-equipamentos-prog\" title=\"Limpar lista de equipamentos\">Limpar Tudo</button>\n        </div>\n        <ul id=\"programacao-equipamentos-lista\" class=\"selected-equip-list\"></ul>\n        <div>\n            <label for=\"titanflow-prog-requerente\">Requerido por</label>\n            <select id=\"titanflow-prog-requerente\">\n                " + _0x227811.map(_0x454c56 => "<option value=\"" + _0x454c56['v'] + '\x22>' + _0x454c56['t'] + "</option>").join('') + "\n            </select>\n        </div>\n    ", _0x3294c3.appendChild(_0x1006aa);
        const _0x5cda29 = document.createElement("div");
        _0x5cda29.className = "titanflow-acao-container titanflow-full-width";
        const _0x111b9d = document.createElement("button");
        _0x111b9d['id'] = "btn-adicionar-programacao", _0x111b9d.innerHTML = "<span class=\"btn-text\">⚙️ Adicionar Programação</span><span class=\"btn-progress-fill\"></span>", _0x111b9d.className = "titanflow-action-btn", Object.assign(_0x111b9d['style'], {
          'backgroundColor': "#17a2b8"
          , 'color': "white"
          , 'border': 'none'
          , 'borderRadius': "5px"
          , 'fontWeight': "bold"
          , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
          , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
          , 'flexGrow': '1'
          , 'padding': "12px"
          , 'fontSize': "16px"
          , 'cursor': "pointer"
        }), _0x111b9d['addEventListener']('mouseenter', () => {
          !_0x111b9d.disabled && (_0x111b9d.style.transform = "translateY(-2px)", _0x111b9d.style.filter = "brightness(110%)", _0x111b9d['style'].boxShadow = '0\x204px\x2010px\x20rgba(0,0,0,0.25)');
        }), _0x111b9d.addEventListener("mouseleave", () => {
          !_0x111b9d['disabled'] && (_0x111b9d.style.transform = "translateY(0px)", _0x111b9d.style.filter = "brightness(100%)", _0x111b9d.style.boxShadow = "0 2px 4px rgba(0,0,0,0.15)");
        }), _0x111b9d.onclick = () => {
          const _0x443bb7 = _0x5cda29;
          _0x51ee14(_0x111b9d, _0x443bb7, _0x531b94);
        }, _0x5cda29.appendChild(_0x111b9d), _0x1006aa.appendChild(_0x5cda29), document.getElementById("btn-limpar-equipamentos-prog")['onclick'] = _0x28a1ef, document.getElementById("titanflow-carregar-planos")['onclick'] = async _0x5c1800 => {
          const _0x421e62 = _0x5c1800['shiftKey'], _0x5b34fa = _0x5c1800.target;
          _0x5b34fa['disabled'] = !![], _0x5b34fa.textContent = "Carregando...";
          try {
            await _0x12f55c(_0x421e62), _0x5b34fa.textContent = 'Planos\x20Carregados';
          } catch (_0xca6011) {
            _0x2786ff('Falha\x20ao\x20carregar\x20planos.', 'error'), _0x5b34fa.textContent = "Erro! Tente Novamente", _0x5b34fa.disabled = ![];
          }
        }, document['getElementById']('titanflow-carregar-equipamentos').onclick = async _0x536657 => {
          const _0x1f1d97 = _0x536657.shiftKey, _0x129fa1 = _0x536657.target;
          _0x129fa1['disabled'] = !![], _0x129fa1.textContent = "Carregando...";
          try {
            _0x34e176 = await _0x3a1f53(_0x1f1d97), _0x129fa1['textContent'] = "Equipamentos Carregados";
          } catch (_0x30d442) {
            _0x2786ff("Falha ao carregar equipamentos.", "error"), _0x129fa1['textContent'] = 'Erro!\x20Tente\x20Novamente', _0x129fa1.disabled = ![];
          }
        };
        const _0x1b9409 = (_0x431487, _0x485e3, _0x4bf2c2, _0x4882be, _0x14ea6d) => {
          const _0x3c7023 = document.getElementById(_0x431487), _0x122cde = document.getElementById(_0x485e3), _0x2ccd1e = _0x4bf2c2 ? document.getElementById(_0x4bf2c2) : null;
          _0x3c7023.addEventListener("input", () => {
            if (_0x2ccd1e) _0x2ccd1e.value = '';
            const _0x37da8b = _0x3c7023.value.toLowerCase().trim();
            _0x122cde.innerHTML = '';
            if (_0x37da8b.length < 0x2) {
              _0x122cde.classList.remove("show");
              return;
            }
            const _0x310728 = _0x4882be()
              , _0x295e12 = _0x310728['filter'](_0x5995c5 => _0x5995c5.tag.toLowerCase().includes(_0x37da8b) || _0x5995c5.nome.toLowerCase()['includes'](_0x37da8b))['slice'](0x0, 0xf);
            _0x295e12['length'] > 0x0 ? (_0x122cde.classList.add('show'), _0x295e12.forEach(_0x2a6c71 => {
              const _0x45a7a7 = document.createElement("div");
              _0x45a7a7['innerHTML'] = "<b>[" + _0x2a6c71.tag + "]</b> " + _0x2a6c71.nome, _0x45a7a7.onclick = () => {
                _0x14ea6d(_0x2a6c71), _0x122cde['innerHTML'] = '', _0x122cde.classList.remove("show");
              }, _0x122cde['appendChild'](_0x45a7a7);
            })) : _0x122cde.classList.remove("show");
          });
        };
        _0x1b9409('titanflow-prog-plan-busca', "titanflow-prog-plan-resultados", 'titanflow-prog-plan-id-selecionado', () => _0x27b91a, _0x23bb89 => {
          document.getElementById("titanflow-prog-plan-busca")['value'] = '[' + _0x23bb89.tag + ']\x20' + _0x23bb89.nome, document.getElementById("titanflow-prog-plan-id-selecionado").value = _0x23bb89['id'];
        }), _0x1b9409('titanflow-prog-equip-busca', 'titanflow-prog-equip-resultados', null, () => _0x34e176, _0x468213), _0x2ee372 = _0x8615d0 => {
          const _0x23d209 = document.getElementById("titanflow-prog-plan-busca").parentElement, _0x483e67 = document['getElementById']("titanflow-prog-equip-busca")['parentElement'];
          _0x23d209 && !_0x23d209.contains(_0x8615d0.target) && document.getElementById("titanflow-prog-plan-resultados").classList.remove("show"), _0x483e67 && !_0x483e67.contains(_0x8615d0['target']) && document.getElementById('titanflow-prog-equip-resultados').classList.remove("show");
        }, document['addEventListener']("click", _0x2ee372);
        if (_0x27b91a.length > 0x0) {
          const _0x43b7c9 = document.getElementById('titanflow-carregar-planos');
          _0x43b7c9.textContent = "Planos Carregados", _0x43b7c9['disabled'] = ![];
        }
        if (_0x34e176.length > 0x0) {
          const _0x23b926 = document.getElementById("titanflow-carregar-equipamentos");
          _0x23b926['textContent'] = 'Equipamentos\x20Carregados', _0x23b926.disabled = ![];
        }
        _0x296722();
      }
      async function _0x531b94(_0x25e6d3) {
        const _0x12d6ef = document['getElementById']('titanflow-prog-plan-id-selecionado').value, _0x5a8030 = JSON.parse(localStorage.getItem('titanflow_prog_equipamentos_selecionados') || '[]'), _0x391c87 = document.getElementById('titanflow-prog-requerente')['value'];
        if (!_0x12d6ef) {
          _0x2786ff('É\x20necessário\x20buscar\x20e\x20selecionar\x20um\x20Plano.', 'error');
          throw new Error("ID do plano não preenchido.");
        }
        if (_0x5a8030.length === 0x0) {
          _0x2786ff("Adicione pelo menos um equipamento à lista.", "error");
          throw new Error("Nenhum equipamento selecionado.");
        }
        _0x5b5dcd = !![];
        let _0x5bc725 = 0x0
          , _0x323314 = 0x0;
        const _0x369913 = _0x5a8030.length;
        for (const _0x31247f of _0x5a8030) {
          if (!_0x5b5dcd) {
            _0x2786ff("Processo interrompido pelo usuário.", "warning");
            throw new Error("Processo interrompido durante a execução.");
          }
          try {
            const _0x2e647e = {
              'planoId': _0x12d6ef
              , 'equipamentoId': _0x31247f['id']
              , 'requerenteId': _0x391c87
            };
            await _0x3d2908(_0x2e647e);
          } catch (_0x3bbf9d) {
            _0x5bc725++, console.error("Falha ao programar para o equipamento " + _0x31247f['tag'] + ':', _0x3bbf9d), _0x2786ff("Erro na programação do equipamento " + _0x31247f.tag, "error");
          }
          _0x323314++;
          if (_0x25e6d3) _0x25e6d3(_0x323314 / _0x369913);
        }
        _0x5b5dcd = ![];
        const _0x1142ac = "Concluído! " + (_0x369913 - _0x5bc725) + " programações criadas. " + _0x5bc725 + " falharam.";
        _0x2786ff(_0x1142ac, _0x5bc725 > 0x0 ? 'warning' : "success", 0x1770), _0x5bc725 === 0x0 && _0x369913 > 0x0 && (_0x28a1ef(), setTimeout(() => {
          const _0x262747 = new URLSearchParams(window.location.search), _0x1fca33 = _0x262747.get("SESID"), _0x12a636 = _0x262747['get']('n1'), _0x578ac5 = _0x262747.get('n2'), _0x4e4f45 = _0x262747['get']('in'), _0x3a1685 = "/albatros/admin.php?SESID=" + _0x1fca33 + "&n1=" + _0x12a636 + "&n2=" + _0x578ac5 + "&in=" + _0x4e4f45 + '&seccion=titan_planes_programacion&op=c&plan_tag=' + _0x12d6ef + "&bAceptar=Aplicar+filtro";
          window.location.href = _0x3a1685;
        }, 0x5dc));
      }

      function _0x3e0009() {
        const _0x5dc44f = document.querySelectorAll("#resultado table tr");
        let _0x13288b = 0x0;
        _0x5dc44f.forEach(_0x1627f3 => {
          const _0x3a9204 = _0x1627f3.getAttribute("onclick");
          if (!_0x3a9204) return;
          const _0x109ae2 = _0x3a9204.match(/mostrar_acciones_disponibles\(this, '(\d+)'/)
            , _0x4035f5 = _0x109ae2 ? _0x109ae2[0x1] : null;
          if (_0x4035f5) {
            const _0x56e8ad = _0x1627f3.cells[0x1]?.innerText.trim() || 'N/A'
              , _0xde625b = _0x1627f3.cells[0x4]?.innerText.trim() || 'N/A';
            _0x14cc5d({
              'id': _0x4035f5
              , 'tag': _0x56e8ad
              , 'equipamentoNome': _0xde625b
            }) && _0x13288b++;
          }
        }), _0x13288b > 0x0 ? _0x2786ff(_0x13288b + " novas programações capturadas!", 'success') : _0x2786ff("Nenhuma programação nova encontrada para capturar.", "info");
      }

      function _0x34ddef() {
        _0x319428('#resultado\x20table\x20tr', () => {
          const _0x4bb2de = document['querySelector']("#resultado table");
          if (!_0x4bb2de || _0x4bb2de.querySelector('.th-titanflow-add')) return;
          const _0x15d5b4 = _0x4bb2de.querySelector('tr');
          if (_0x15d5b4) {
            let _0x45772e = _0x15d5b4.lastElementChild;
            _0x45772e && _0x45772e['textContent']['trim']() !== '' && (_0x45772e = document.createElement('td'), _0x15d5b4.appendChild(_0x45772e)), _0x45772e.className = "col_nombre th-titanflow-add", _0x45772e.style['width'] = '25px';
          }
          const _0x546eb9 = _0x4bb2de.querySelectorAll("tr.bgcolor0, tr.bgcolor1, tr.bgcolorOn");
          _0x546eb9['forEach'](_0x1da086 => {
            const _0x280e81 = _0x1da086.getAttribute("onclick");
            if (!_0x280e81) return;
            const _0x18a6d9 = _0x280e81.match(/mostrar_acciones_disponibles\(this, '(\d+)'/)
              , _0x1ad9fc = _0x18a6d9 ? _0x18a6d9[0x1] : null;
            if (_0x1ad9fc) {
              const _0x4a8896 = _0x1da086.cells[0x1]?.innerText['trim']() || "N/A"
                , _0x6a89aa = _0x1da086.cells[0x4]?.innerText.trim() || "N/A";
              let _0x4d3b6a = _0x1da086.lastElementChild;
              if (_0x4d3b6a && _0x4d3b6a.textContent.trim() === '') {} else _0x4d3b6a = document['createElement']('td'), _0x1da086.appendChild(_0x4d3b6a);
              _0x4d3b6a.innerHTML = '', _0x4d3b6a.className = "texto11", _0x4d3b6a['style'].width = "25px", _0x4d3b6a.style.padding = '0';
              const _0x463b49 = document.createElement("div");
              _0x463b49.style['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
              const _0x46764b = document.createElement("button");
              _0x46764b.className = "titanflow-add-prog-btn", _0x46764b.textContent = '+', _0x46764b.title = "Adicionar [" + _0x6a89aa + "] à lista de configuração", _0x46764b.onclick = _0x18f7c1 => {
                _0x18f7c1.stopPropagation(), _0x14cc5d({
                  'id': _0x1ad9fc
                  , 'tag': _0x4a8896
                  , 'equipamentoNome': _0x6a89aa
                });
              }, _0x463b49.appendChild(_0x46764b), _0x4d3b6a.appendChild(_0x463b49);
            }
          });
        });
      }

      function _0x296722() {
        const _0x5c01ee = JSON.parse(localStorage.getItem('titanflow_prog_equipamentos_selecionados') || '[]'), _0xfbd3d2 = document['getElementById']("programacao-equipamentos-lista"), _0x5d30e2 = document.getElementById("programacao-equip-count");
        if (!_0xfbd3d2 || !_0x5d30e2) return;
        _0xfbd3d2.innerHTML = '', _0x5d30e2.textContent = _0x5c01ee.length, _0x5c01ee.length === 0x0 ? _0xfbd3d2.innerHTML = "<i style=\"font-size:12px; color:#888; padding-left:5px;\">Nenhum equipamento na lista...</i>" : _0x5c01ee['forEach'](_0x444740 => {
          const _0x32f369 = document.createElement('li');
          _0x32f369['innerHTML'] = '<span><b>[' + _0x444740.tag + ']</b>\x20' + _0x444740.nome + "</span>\n                                      <span class=\"remove-equip-btn-prog\" data-id=\"" + _0x444740['id'] + '\x22\x20title=\x22Remover\x22>&times;</span>', _0xfbd3d2['appendChild'](_0x32f369);
        }), document['querySelectorAll'](".remove-equip-btn-prog")['forEach'](_0x757bce => {
          _0x757bce.onclick = _0x4f0640 => _0x12f968(_0x4f0640.currentTarget.dataset['id']);
        });
      }

      function _0x468213(_0x78bf90) {
        let _0x45f473 = JSON.parse(localStorage.getItem("titanflow_prog_equipamentos_selecionados") || '[]');
        const _0x43ec15 = _0x45f473.some(_0x598138 => _0x598138['id'] === _0x78bf90['id']);
        if (_0x43ec15) {
          _0x2786ff('Equipamento\x20[' + _0x78bf90.tag + "] já está na lista.", "info", 0x7d0);
          return;
        }
        _0x45f473['push']({
          'id': _0x78bf90['id']
          , 'tag': _0x78bf90.tag
          , 'nome': _0x78bf90.nome
        }), localStorage['setItem']("titanflow_prog_equipamentos_selecionados", JSON['stringify'](_0x45f473)), document.getElementById("titanflow-prog-equip-busca")['value'] = '', _0x296722();
      }

      function _0x12f968(_0x316b0c) {
        let _0xfc90c6 = JSON.parse(localStorage.getItem("titanflow_prog_equipamentos_selecionados") || '[]');
        _0xfc90c6 = _0xfc90c6.filter(_0x1e3bcc => _0x1e3bcc['id'] !== _0x316b0c), localStorage.setItem('titanflow_prog_equipamentos_selecionados', JSON.stringify(_0xfc90c6)), _0x296722();
      }

      function _0x28a1ef() {
        localStorage.setItem("titanflow_prog_equipamentos_selecionados", JSON['stringify']([])), _0x296722();
      }

      function _0x4f0158(_0x4fddef) {
        _0x4fddef.innerHTML = "\n        <div class=\"titanflow-titulo-secao\"><span>Seleção de Programações</span></div>\n        <button id=\"btn-capturar-programacoes\" class=\"titanflow-action-btn\" style=\"background-color: #3366ff; color: white; width: 100%; margin-bottom: 10px; padding: 8px;\">🔍 Capturar Programações Visíveis</button>\n        <div class=\"equip-header\">\n            <label>Programações na Lista (<span id=\"config-prog-count\">0</span>):</label>\n            <button id=\"btn-limpar-config-prog\" title=\"Limpar lista de programações\">Limpar Tudo</button>\n        </div>\n        <ul id=\"config-programacoes-lista\" class=\"selected-equip-list\" style=\"margin-bottom: 15px;\"></ul>\n\n        <div class=\"titanflow-titulo-secao\"><span>Ações em Massa</span></div>\n\n        <div id=\"config-programacao-fields\" style=\"display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px; border: 1px solid #ccc; padding: 10px; border-radius: 5px;\">\n            <div>\n                <label for=\"titanflow-prog-tipo\">Tipo de Programação:</label>\n                <select id=\"titanflow-prog-tipo\" class=\"full-width-input\">\n                    <option value=\"\">-- Selecione --</option>\n                    <option value=\"diaria\">Diária</option>\n                    <option value=\"semanal\">Semanal</option>\n                    <option value=\"mensual2\">Mensal</option>\n                </select>\n            </div>\n\n            <div id=\"titanflow-prog-diaria-opts\" style=\"display: none;\">\n                <label for=\"titanflow-prog-diaria-dias\">A cada (dias):</label>\n                <input type=\"number\" id=\"titanflow-prog-diaria-dias\" value=\"1\" min=\"1\" class=\"full-width-input\">\n            </div>\n\n            <div id=\"titanflow-prog-semanal-opts\" style=\"display: none; gap: 10px;\">\n                <div style=\"flex:1;\">\n                    <label for=\"titanflow-prog-semanal-semanas\">A cada (semanas):</label>\n                    <input type=\"number\" id=\"titanflow-prog-semanal-semanas\" value=\"1\" min=\"1\" class=\"full-width-input\">\n                </div>\n                <div style=\"flex:2;\">\n                    <label for=\"titanflow-prog-semanal-dia\">No dia da semana:</label>\n                    <select id=\"titanflow-prog-semanal-dia\" class=\"full-width-input\">\n                        <option value=\"lunes\">Segunda-feira</option>\n                        <option value=\"martes\">Terça-feira</option>\n                        <option value=\"miércoles\">Quarta-feira</option>\n                        <option value=\"jueves\">Quinta-feira</option>\n                        <option value=\"viernes\">Sexta-feira</option>\n                        <option value=\"sábado\">Sábado</option>\n                        <option value=\"domingo\">Domingo</option>\n                    </select>\n                </div>\n            </div>\n\n            <div id=\"titanflow-prog-mensal-opts\" style=\"display: none; gap: 10px;\">\n                <div style=\"flex:2;\">\n                     <label for=\"titanflow-prog-mensal-mes\">Mês de Início:</label>\n                     <select id=\"titanflow-prog-mensal-mes\" class=\"full-width-input\"></select>\n                </div>\n                <div style=\"flex:1;\">\n                    <label for=\"titanflow-prog-mensal-cada\">Repetir a cada (meses):</label>\n                    <input type=\"number\" id=\"titanflow-prog-mensal-cada\" value=\"1\" min=\"1\" class=\"full-width-input\">\n                </div>\n            </div>\n\n             <div>\n                <label for=\"titanflow-prog-data-inicio\">Data de Início:</label>\n                <input type=\"date\" id=\"titanflow-prog-data-inicio\" class=\"full-width-input\">\n            </div>\n\n            <div>\n                <label for=\"titanflow-prog-horizonte-num\">Horizonte de Chamada (% da frequência):</label>\n                <div class=\"slider-container\">\n                    <input type=\"range\" id=\"titanflow-prog-horizonte-slider\" value=\"25\" min=\"1\" max=\"100\">\n                    <input type=\"number\" id=\"titanflow-prog-horizonte-num\" value=\"25\" min=\"1\" max=\"100\">\n                </div>\n            </div>\n        </div>\n\n        <div id=\"config-acoes-container\" class=\"titanflow-acao-container\" style=\"flex-direction: column; align-items: stretch;\">\n             <button id=\"btn-programar-massa\" class=\"titanflow-action-btn\" style=\"background-color: #ffaa00; color: white; padding: 10px;\">📅 Programar Selecionadas</button>\n             <hr style=\"margin: 10px 0; border-top: 1px solid #ccc;\">\n             <button id=\"btn-ativar-programacoes\" class=\"titanflow-action-btn\" style=\"background-color: #28a745; color: white; padding: 10px;\">⚡ Ativar Selecionadas</button>\n             <button id=\"btn-desativar-programacoes\" class=\"titanflow-action-btn\" style=\"background-color: #dc3545; color: white; padding: 10px; margin-top: 5px;\">🔌 Desativar Selecionadas</button>\n        </div>\n    ";
        const _0x6dfe77 = document.getElementById("btn-capturar-programacoes");
        _0x3ea34b(_0x6dfe77), _0x6dfe77.onclick = _0x3e0009, document.getElementById("btn-limpar-config-prog").onclick = _0x169473;
        const _0x163fbf = document.getElementById('titanflow-prog-tipo')
          , _0x5dd17b = document.getElementById('titanflow-prog-data-inicio')
          , _0x2c3cd9 = document.getElementById("titanflow-prog-mensal-mes")
          , _0x5500d0 = () => {
            const _0x440a78 = new Date();
            let _0x32e762 = _0x440a78.getFullYear()
              , _0x128526 = parseInt(_0x2c3cd9.value) - 0x1;
            _0x128526 < _0x440a78.getMonth() && _0x32e762++;
            const _0x105153 = new Date(_0x32e762, _0x128526, 0x1)
              , _0x10b424 = _0x105153.toISOString().split('T')[0x0];
            _0x5dd17b.value = _0x10b424;
          };
        _0x163fbf.onchange = () => {
          document.getElementById("titanflow-prog-diaria-opts")['style'].display = "none", document.getElementById("titanflow-prog-semanal-opts").style.display = "none", document.getElementById('titanflow-prog-mensal-opts').style.display = "none";
          if (_0x163fbf.value === "diaria") document['getElementById']("titanflow-prog-diaria-opts").style.display = "block";
          else {
            if (_0x163fbf['value'] === "semanal") document.getElementById('titanflow-prog-semanal-opts').style.display = "flex";
            else _0x163fbf['value'] === "mensual2" && (document.getElementById("titanflow-prog-mensal-opts")['style']['display'] = "flex", _0x5500d0());
          }
        };
        const _0x2252ed = new Date()
          , _0x5d7505 = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", 'Dezembro']
          , _0x3eeb71 = _0x2252ed.getMonth();
        for (let _0x54ba5d = 0x0; _0x54ba5d < 0xc; _0x54ba5d++) {
          const _0x356619 = (_0x3eeb71 + 0x1 + _0x54ba5d) % 0xc
            , _0x4f11b4 = document['createElement']('option');
          _0x4f11b4.value = String(_0x356619 + 0x1).padStart(0x2, '0'), _0x4f11b4.textContent = _0x5d7505[_0x356619], _0x2c3cd9['appendChild'](_0x4f11b4);
        }
        const _0x22d96b = new Date(_0x2252ed['getFullYear'](), _0x2252ed.getMonth() + 0x1, 0x1);
        _0x5dd17b.value = _0x22d96b.toISOString().split('T')[0x0], _0x2c3cd9.onchange = _0x5500d0;
        const _0x4b1280 = document.getElementById("titanflow-prog-horizonte-slider")
          , _0x26827d = document.getElementById("titanflow-prog-horizonte-num");
        _0x4b1280.oninput = () => {
          _0x26827d.value = _0x4b1280.value;
        }, _0x26827d.oninput = () => {
          let _0x469aa5 = parseInt(_0x26827d.value);
          if (isNaN(_0x469aa5) || _0x469aa5 < 0x1) _0x469aa5 = 0x1;
          if (_0x469aa5 > 0x64) _0x469aa5 = 0x64;
          _0x26827d['value'] = _0x469aa5, _0x4b1280.value = _0x469aa5;
        };
        const _0x294cd4 = document.getElementById("btn-programar-massa")
          , _0x579867 = document.getElementById("btn-ativar-programacoes")
          , _0x486bb1 = document.getElementById("btn-desativar-programacoes");
        _0x3ea34b(_0x294cd4), _0x3ea34b(_0x579867), _0x3ea34b(_0x486bb1), _0x294cd4.onclick = () => {
          const _0x554522 = document.getElementById("config-acoes-container");
          _0x51ee14(_0x294cd4, _0x554522, _0x1d36d3 => _0x58806a("programar", _0x1d36d3));
        }, _0x579867.onclick = () => {
          const _0x2cc5e8 = document.getElementById("config-acoes-container");
          _0x51ee14(_0x579867, _0x2cc5e8, _0x3c2cb0 => _0x58806a("activar", _0x3c2cb0));
        }, _0x486bb1.onclick = () => {
          const _0x360553 = document.getElementById("config-acoes-container");
          _0x51ee14(_0x486bb1, _0x360553, _0x20fbd3 => _0x58806a("desactivar", _0x20fbd3));
        }, _0x5d1ad1();
      }

      function _0x5d1ad1() {
        const _0x8eb62e = JSON.parse(localStorage['getItem']("titanflow_config_programacoes_selecionadas") || '[]'), _0x3ebc58 = document.getElementById("config-programacoes-lista"), _0x4e476f = document.getElementById("config-prog-count");
        if (!_0x3ebc58 || !_0x4e476f) return;
        _0x3ebc58['innerHTML'] = '', _0x4e476f['textContent'] = _0x8eb62e['length'], _0x8eb62e['length'] === 0x0 ? _0x3ebc58['innerHTML'] = "<i style=\"font-size:12px; color:#888; padding-left:5px;\">Nenhuma programação na lista...</i>" : _0x8eb62e.forEach(_0x41686e => {
          const _0x3e3c07 = document['createElement']('li');
          _0x3e3c07.innerHTML = "<span><b>[" + _0x41686e.tag + "]</b> " + _0x41686e.equipamentoNome + "</span>\n                  <span class=\"remove-config-prog-btn\" data-id=\"" + _0x41686e['id'] + '\x22\x20title=\x22Remover\x22>&times;</span>', _0x3ebc58['appendChild'](_0x3e3c07);
        }), document.querySelectorAll(".remove-config-prog-btn").forEach(_0x18b7b4 => {
          _0x18b7b4.onclick = _0x438127 => _0x4549b2(_0x438127.currentTarget.dataset['id']);
        });
      }

      function _0x14cc5d(_0x57fa20) {
        let _0x23748d = JSON['parse'](localStorage['getItem']('titanflow_config_programacoes_selecionadas') || '[]');
        if (_0x23748d.some(_0x4039ca => _0x4039ca['id'] === _0x57fa20['id'])) return ![];
        return _0x23748d.push(_0x57fa20), localStorage.setItem('titanflow_config_programacoes_selecionadas', JSON['stringify'](_0x23748d)), _0x5d1ad1(), !![];
      }

      function _0x4549b2(_0x2a826c) {
        let _0x3eec17 = JSON['parse'](localStorage['getItem']("titanflow_config_programacoes_selecionadas") || '[]');
        _0x3eec17 = _0x3eec17['filter'](_0x120c70 => _0x120c70['id'] !== _0x2a826c), localStorage.setItem('titanflow_config_programacoes_selecionadas', JSON['stringify'](_0x3eec17)), _0x5d1ad1();
      }

      function _0x169473() {
        localStorage.setItem('titanflow_config_programacoes_selecionadas', JSON.stringify([])), _0x5d1ad1(), _0x2786ff('Lista\x20de\x20programações\x20foi\x20limpa.', "info");
      }
      const _0x4e5493 = async _0x16424f => {
        _0x2ee372 && (document.removeEventListener('click', _0x2ee372), _0x2ee372 = null);
        localStorage.setItem(_0x19c9c0, _0x16424f), _0x899236.classList.remove("active"), _0x538775.classList.remove('active'), _0x23ca39.classList.remove("active"), _0xTabEquip && _0xTabEquip.classList.remove('active');
        const _0x5a4176 = document.getElementById("titanflow-tab-content");
        if (_0x16424f === "criacao") {
          _0x899236.classList['add']('active'), _0x3e4ed3(_0x5a4176);
          try {
            const _0x41c9b8 = await Promise['allSettled']([_0x12f55c(), _0x3a1f53()]);
            _0x41c9b8[0x0]['status'] === "fulfilled" ? _0x5b1121() : (console['error']('[TitanSystem]\x20Falha\x20ao\x20carregar\x20a\x20lista\x20de\x20planos:', _0x41c9b8[0x0].reason), _0x2786ff("Falha ao sincronizar lista de planos.", 'error')), _0x41c9b8[0x1]['status'] === "rejected" && console.warn("[TitanSystem] Aviso: Falha ao sincronizar a lista de equipamentos.", _0x41c9b8[0x1]['reason']);
          } catch (_0xa418db) {
            console.error("[TitanSystem] Erro geral ao carregar dados:", _0xa418db), _0x2786ff("Ocorreu um erro inesperado. Tente recarregar a página.", 'error');
          }
        } else {
          if (_0x16424f === 'programacao') _0x538775['classList'].add("active"), _0x163373(_0x5a4176);
          else if (_0x16424f === "configuracao") _0x23ca39['classList'].add('active'), _0x4f0158(_0x5a4176);
          else if (_0x16424f === 'equipamentos') _0xTabEquip && _0xTabEquip.classList.add('active'), _abaEquipamentos(_0x5a4176);
        }
      }, _0x248d42 = _0x13dcbd => {
        _0x13dcbd.addEventListener("mouseenter", () => {
          !_0x13dcbd.classList.contains("active") && (_0x13dcbd.style.transform = "translateY(-2px)", _0x13dcbd['style'].filter = "brightness(110%)");
        }), _0x13dcbd['addEventListener']('mouseleave', () => {
          _0x13dcbd.style.transform = "translateY(0px)", _0x13dcbd.style['filter'] = 'brightness(100%)';
        });
      };
      _0x248d42(_0x899236), _0x248d42(_0x538775), _0x248d42(_0x23ca39), _0x899236.onclick = () => _0x4e5493("criacao"), _0x538775.onclick = () => _0x4e5493("programacao"), _0x23ca39.onclick = () => _0x4e5493('configuracao'), _0xTabEquip && (_0x248d42(_0xTabEquip), _0xTabEquip.onclick = () => _0x4e5493('equipamentos')), _0x5db97f();
      const _0x477848 = localStorage['getItem'](_0x19c9c0);
      _0x477848 ? _0x4e5493(_0x477848) : _0x4e5493("criacao");
      _0x34ddef();
      const _0x3073f8 = document['getElementById']('btn-ajuda-planejamento');
      _0x3073f8.onclick = _0x29dc9c, _0x3073f8['addEventListener']("mouseenter", () => {
        _0x3073f8.style.transform = "scale(1.2)";
      }), _0x3073f8.addEventListener("mouseleave", () => {
        _0x3073f8.style.transform = "scale(1)";
      }), _0x474a0b();
    }

    function _0x5db97f() {
      const _0x96cfc8 = document['createElement']("button");
      _0x96cfc8['id'] = "titanflow-toggle-planejamento-btn", Object.assign(_0x96cfc8.style, {
        'position': "fixed"
        , 'top': "10px"
        , 'left': "10px"
        , 'color': "white"
        , 'border': "none"
        , 'borderRadius': "5px"
        , 'padding': "6px 12px"
        , 'cursor': 'pointer'
        , 'zIndex': "10000"
        , 'fontWeight': "bold"
        , 'fontSize': "13px"
        , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
        , 'transition': "all 0.2s ease"
      }), _0x96cfc8.addEventListener('mouseenter', () => {
        _0x96cfc8.style.transform = "translateY(-2px)", _0x96cfc8['style'].filter = "brightness(110%)";
      }), _0x96cfc8['addEventListener']('mouseleave', () => {
        _0x96cfc8.style.transform = "translateY(0px)", _0x96cfc8.style['filter'] = "brightness(100%)";
      });
      const _0x50f87d = (_0x15a15a, _0x5a53d5) => {
        _0x15a15a['style'].display === "none" ? (_0x5a53d5.innerHTML = "👁️ Mostrar Painel", _0x5a53d5.style.backgroundColor = "#28a745") : (_0x5a53d5.innerHTML = '🙈\x20Ocultar\x20Painel', _0x5a53d5['style'].backgroundColor = "#3366ff");
      };
      _0x96cfc8.onclick = function () {
        const _0x40c96b = document.getElementById("painel-planejamento");
        if (_0x40c96b) {
          const _0x2cd4bd = _0x40c96b.style.display === "none";
          _0x40c96b.style['display'] = _0x2cd4bd ? "block" : 'none', localStorage.setItem("painel_planejamento_visivel", _0x2cd4bd ? "true" : "false"), _0x50f87d(_0x40c96b, _0x96cfc8);
        }
      }, document.body['appendChild'](_0x96cfc8);
      const _0x5b52ae = document.getElementById("painel-planejamento");
      localStorage.getItem("painel_planejamento_visivel") === 'false' && (_0x5b52ae.style.display = "none"), _0x50f87d(_0x5b52ae, _0x96cfc8);
    }

    function _0x239759() {
      const _0x14c2fb = {
          'top': "40px"
          , 'left': "10px"
        };
      let _0x5dc5ac = localStorage['getItem']("titanflow_panel_locked") !== "false";
      const _0x43398e = localStorage.getItem('titanflow_panel_top')
        , _0x405019 = localStorage.getItem("titanflow_panel_left")
        , _0x4e7800 = {
          'value': _0x5dc5ac
        };
      GM_addStyle("\n    #titanflow-botoes-acao {\n        display: flex;\n        gap: 5px;\n        width: 100%;\n    }\n\n    .titanflow-action-btn {\n        position: relative;\n        overflow: hidden;\n        flex-grow: 1;\n        flex-basis: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .btn-text {\n        position: relative;\n        z-index: 2;\n    }\n\n    .btn-progress-fill {\n        position: absolute;\n        left: 0;\n        top: 0;\n        height: 100%;\n        width: 0%;\n        background-color: rgba(255, 255, 255, 0.3);\n        z-index: 1;\n        transition: width 0.2s linear;\n    }\n");
      const _0x32a5d7 = document.createElement("div");
      _0x32a5d7['id'] = "painel-selecao-ordens", _0x32a5d7['style'].position = "fixed";
      !_0x5dc5ac && _0x43398e && _0x405019 ? (_0x32a5d7.style['top'] = _0x43398e, _0x32a5d7.style.left = _0x405019) : (_0x32a5d7.style['top'] = _0x14c2fb['top'], _0x32a5d7.style.left = _0x14c2fb.left);
      _0x32a5d7.style.width = _0x4458b3 === 'tecnico' ? "308px" : "300px", _0x32a5d7.style.backgroundColor = "#f0f0f0", _0x32a5d7['style']['border'] = '1px\x20solid\x20#3366ff', _0x32a5d7.style['borderRadius'] = "5px", _0x32a5d7.style.padding = _0x4458b3 === "tecnico" ? '6px' : "10px", _0x32a5d7.style['zIndex'] = "9999", _0x32a5d7.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)", _0x32a5d7.style.maxHeight = "120vh", _0x32a5d7['style']['overflowY'] = "auto", _0x32a5d7['style'].maxHeight = 'calc(105vh\x20-\x20120px)', _0x32a5d7.style['overflowY'] = 'auto', _0x32a5d7.style.backgroundImage = "\n    linear-gradient(rgba(240, 240, 240, 0.9), rgba(240, 240, 240, 0.1)),\n    url('https://www.otamerica.com/img/logo-otamerica.efa7b4a4.png'),\n    url('https://www.otamerica.com/img/logo-otamerica.efa7b4a4.png')\n", _0x32a5d7['style'].backgroundPosition = "center, left top 10px, center bottom 24px", _0x32a5d7.style.backgroundSize = "cover, 250px, 70px", _0x32a5d7.style.backgroundRepeat = "no-repeat";
      const _0x368f37 = document.createElement("div");
      Object.assign(_0x368f37['style'], {
        'display': 'flex'
        , 'justifyContent': "space-between"
        , 'alignItems': "center"
        , 'marginBottom': _0x4458b3 === 'tecnico' ? "1px" : "10px"
        , 'padding': _0x4458b3 === "tecnico" ? "1px 0" : "5px 0"
      });
      const _0x5efc7b = document.createElement('span');
      _0x5efc7b.textContent = "👤 Perfil: " + (_0x4458b3['charAt'](0x0)['toUpperCase']() + _0x4458b3['slice'](0x1)), Object.assign(_0x5efc7b.style, {
        'fontWeight': 'bold'
        , 'fontSize': "15px"
        , 'color': '#343a40'
      }), _0x368f37.appendChild(_0x5efc7b);
      const _0x1af3a8 = document.createElement('div');
      Object.assign(_0x1af3a8.style, {
        'display': "flex"
        , 'alignItems': "center"
        , 'gap': "5px"
      });
      const _0x543cba = document.createElement("button");
      _0x543cba.title = "Travar/Destravar painel", Object.assign(_0x543cba.style, {
        'background': "none"
        , 'border': 'none'
        , 'borderRadius': "5px"
        , 'padding': "4px 8px"
        , 'cursor': 'pointer'
        , 'fontSize': '18px'
        , 'lineHeight': '1'
        , 'transition': 'transform\x200.2s\x20ease'
      });

      function _0x2b26c0() {
        _0x4e7800['value'] = _0x5dc5ac, _0x5dc5ac ? (_0x543cba.textContent = '📌', _0x543cba.style.transform = "rotate(0deg)", _0x368f37.style['cursor'] = "default") : (_0x543cba.textContent = "🖐️", _0x543cba.style['transform'] = "rotate(0deg)", _0x368f37.style.cursor = "move");
      }
      _0x543cba['onclick'] = () => {
        _0x5dc5ac = !_0x5dc5ac, _0x5dc5ac && (_0x32a5d7.style.top = _0x14c2fb.top, _0x32a5d7['style'].left = _0x14c2fb.left, localStorage['removeItem']("titanflow_panel_top"), localStorage['removeItem']("titanflow_panel_left")), localStorage.setItem("titanflow_panel_locked", _0x5dc5ac), _0x2b26c0();
      };
      const _0x329a14 = document.createElement("button");
      _0x329a14.textContent = '🔓', _0x329a14.title = "Sair do perfil", Object.assign(_0x329a14.style, {
        'background': "none"
        , 'border': "none"
        , 'borderRadius': '5px'
        , 'padding': "4px 8px"
        , 'cursor': "pointer"
        , 'fontSize': "18px"
        , 'lineHeight': '1'
        , 'transition': 'background-color\x200.2s\x20ease,\x20transform\x200.1s\x20ease'
      }), _0x329a14.addEventListener('mouseenter', () => {
        _0x329a14['style'].backgroundColor = "rgba(0, 0, 0, 0.05)", _0x329a14['style'].transform = "scale(1.1)";
      }), _0x329a14.addEventListener('mouseleave', () => {
        _0x329a14['style'].backgroundColor = 'transparent', _0x329a14.style['transform'] = "scale(1)";
      }), _0x329a14['onclick'] = () => {
        localStorage.removeItem("perfilTitan"), localStorage.removeItem('senhaTitan'), location.reload();
      };
      const _0x51152d = document.createElement("button");
      _0x51152d.textContent = '❓', _0x51152d.title = 'Ajuda\x20e\x20Atalhos', Object['assign'](_0x51152d.style, {
        'background': "none"
        , 'border': "none"
        , 'borderRadius': "5px"
        , 'padding': "4px 8px"
        , 'cursor': "pointer"
        , 'fontSize': "18px"
        , 'lineHeight': '1'
        , 'transition': 'background-color\x200.2s\x20ease,\x20transform\x200.1s\x20ease'
      }), _0x51152d.addEventListener("mouseenter", () => {
        _0x51152d['style'].backgroundColor = 'rgba(0,\x200,\x200,\x200.05)', _0x51152d.style.transform = "scale(1.1)";
      }), _0x51152d.addEventListener("mouseleave", () => {
        _0x51152d.style.backgroundColor = 'transparent', _0x51152d.style['transform'] = 'scale(1)';
      }), _0x51152d.onclick = _0x3861f3, _0x1af3a8.appendChild(_0x543cba), _0x1af3a8.appendChild(_0x51152d), _0x1af3a8.appendChild(_0x329a14), _0x368f37.appendChild(_0x1af3a8), _0x2b26c0(), _0x32a5d7.appendChild(_0x368f37);
      const _0x376422 = document.createElement("div");
      _0x376422['style'].display = "flex", _0x376422.style['justifyContent'] = 'space-between', _0x376422.style['alignItems'] = "center", _0x376422['style'].marginBottom = _0x4458b3 === "tecnico" ? "2px" : "10px";
      const _0x52b738 = document.createElement('h3');
      _0x52b738['textContent'] = "TitanSystem 🚀", _0x52b738.style['color'] = "#3366ff", _0x52b738['style']['margin'] = 0x0, _0x52b738.style.fontSize = '15px';
      const _0x23c386 = document.createElement("span");
      _0x23c386.textContent = 'v' + _0x121499, _0x23c386.style.fontSize = "12px", _0x23c386.style.color = "#888", _0x23c386.style.fontWeight = "normal";
      const _0xeb53f4 = document.createElement('a');
      _0xeb53f4.href = "https://miro.com/app/board/uXjVMhXTsPE=/", _0xeb53f4['target'] = "_blank", _0xeb53f4.title = "Mapa dos Equipamentos", _0xeb53f4.textContent = "🗺️", Object['assign'](_0xeb53f4.style, {
        'textDecoration': "none"
        , 'marginRight': "8px"
        , 'fontSize': "18px"
        , 'cursor': "pointer"
        , 'transition': 'transform\x200.2s\x20ease'
      }), _0xeb53f4['addEventListener']("mouseenter", () => {
        _0xeb53f4.style.transform = "scale(1.2)";
      }), _0xeb53f4['addEventListener']("mouseleave", () => {
        _0xeb53f4.style.transform = "scale(1)";
      });
      const _0x1ddf10 = document.createElement("div");
      _0x1ddf10.style.display = "flex", _0x1ddf10.style.alignItems = "center", _0x1ddf10.appendChild(_0xeb53f4), _0x1ddf10['appendChild'](_0x23c386), _0x376422.appendChild(_0x52b738), _0x376422.appendChild(_0x1ddf10), _0x32a5d7.appendChild(_0x376422);
      const _0x322bee = document['createElement']('div');
      Object['assign'](_0x322bee.style, {
        'display': "flex"
        , 'gap': "2px"
        , 'marginBottom': "10px"
      });
      const _0x2ce98f = document.createElement("button");
      _0x2ce98f['id'] = "titanflow-btn-selecao", _0x2ce98f.textContent = 'Seleção', Object.assign(_0x2ce98f.style, {
        'backgroundColor': '#3366ff'
        , 'flex': '1'
        , 'color': 'white'
        , 'border': 'none'
        , 'borderRadius': '5px'
        , 'padding': _0x4458b3 === "tecnico" ? "3px 3px" : "8px 5px"
        , 'cursor': "pointer"
        , 'textAlign': "center"
        , 'fontSize': "13px"
        , 'fontWeight': 'bold'
        , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
        , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
      }), _0x2ce98f.addEventListener("mouseenter", () => {
        _0x2ce98f.style.transform = "translateY(-2px)", _0x2ce98f.style.filter = 'brightness(110%)', _0x2ce98f.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
      }), _0x2ce98f.addEventListener("mouseleave", () => {
        _0x2ce98f.style['transform'] = "translateY(0px)", _0x2ce98f.style['filter'] = 'brightness(100%)', _0x2ce98f.style.boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
      });
      const _0x246ef0 = document['createElement']("button");
      _0x246ef0['id'] = "titanflow-btn-reprogramacao", _0x246ef0['textContent'] = "Reprogramação", Object.assign(_0x246ef0.style, {
        'backgroundColor': '#ffaa00'
        , 'flex': '1'
        , 'color': "white"
        , 'border': "none"
        , 'borderRadius': '5px'
        , 'padding': "8px 5px"
        , 'cursor': "pointer"
        , 'textAlign': 'center'
        , 'fontSize': "13px"
        , 'fontWeight': "bold"
        , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
        , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
      }), _0x246ef0.addEventListener("mouseenter", () => {
        _0x246ef0.style['transform'] = 'translateY(-2px)', _0x246ef0['style']['filter'] = "brightness(110%)", _0x246ef0.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
      }), _0x246ef0.addEventListener('mouseleave', () => {
        _0x246ef0.style.transform = "translateY(0px)", _0x246ef0.style['filter'] = "brightness(100%)", _0x246ef0.style.boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
      });
      const _0x32d52e = document.createElement("button");
      _0x32d52e['id'] = "titanflow-btn-execucao", _0x32d52e.textContent = "Execução", Object.assign(_0x32d52e.style, {
        'backgroundColor': "#00aa00"
        , 'flex': '1'
        , 'color': 'white'
        , 'border': "none"
        , 'borderRadius': "5px"
        , 'padding': _0x4458b3 === 'tecnico' ? "3px 3px" : "8px 5px"
        , 'cursor': "pointer"
        , 'textAlign': "center"
        , 'fontSize': "13px"
        , 'fontWeight': "bold"
        , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
        , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
      }), _0x32d52e['addEventListener']("mouseenter", () => {
        _0x32d52e.style.transform = "translateY(-2px)", _0x32d52e.style.filter = "brightness(110%)", _0x32d52e.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
      }), _0x32d52e['addEventListener']('mouseleave', () => {
        _0x32d52e.style.transform = "translateY(0px)", _0x32d52e.style['filter'] = 'brightness(100%)', _0x32d52e.style.boxShadow = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
      });
      const _0xtelaPedidos = new URLSearchParams(location.search).get('seccion') === 'titan_trabajos_pedidos';
      _0x322bee.appendChild(_0x2ce98f);
      if (!_0xtelaPedidos) {
        _0x322bee.appendChild(_0x246ef0);
        _0x322bee.appendChild(_0x32d52e);
      }
      if (_0x4458b3 !== "tecnico") {
        const _0x55bb4d = document['createElement']("button");
        _0x55bb4d['id'] = "titanflow-btn-pedidos", _0x55bb4d.textContent = "Pedidos", Object.assign(_0x55bb4d.style, {
          'backgroundColor': "#0072c6"
          , 'flex': '1'
          , 'color': "white"
          , 'border': "none"
          , 'borderRadius': '5px'
          , 'padding': "8px 5px"
          , 'cursor': 'pointer'
          , 'textAlign': "center"
          , 'fontSize': "13px"
          , 'fontWeight': "bold"
          , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
          , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
        }), _0x55bb4d.addEventListener("mouseenter", () => {
          _0x55bb4d['style']['transform'] = "translateY(-2px)", _0x55bb4d.style.filter = "brightness(110%)", _0x55bb4d.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
        }), _0x55bb4d.addEventListener("mouseleave", () => {
          _0x55bb4d.style['transform'] = 'translateY(0px)', _0x55bb4d.style.filter = "brightness(100%)", _0x55bb4d.style['boxShadow'] = "0 2px 4px rgba(0,0,0,0.15)";
        }), _0x55bb4d['onclick'] = async () => {
          sessionStorage.setItem("lastActiveTitanTab", "pedidos"), _0x4177e2();
          try {
            await _0x3a1f53();
          } catch (_0x1ceb8b) {
            console['error']("[TitanSystem] Falha ao carregar equipamentos para a aba Pedidos:", _0x1ceb8b), _0x2786ff('Falha\x20ao\x20carregar\x20a\x20lista\x20de\x20equipamentos.', "error");
          }
        }, _0xtelaPedidos && _0x322bee.appendChild(_0x55bb4d);
      }

      function _0x1f742f() {
        _0xf02b62.innerHTML = '';

        function _0x544bc3() {
          const _0x24f422 = 0x14;
          this['style'].height = "auto";
          const _0x553ac8 = Math.max(_0x24f422, this.scrollHeight);
          this.style.height = _0x553ac8 + 'px';
        }
        const _0x5b3273 = document.createElement("div");
        Object.assign(_0x5b3273.style, {
          'display': "grid"
          , 'gridTemplateColumns': "1fr 1fr 1fr"
          , 'gap': '30px'
          , 'backgroundColor': '#f8f9fa'
          , 'padding': "5px"
          , 'border': "1px solid #dee2e6"
          , 'borderRadius': "5px"
        });
        const _0x55f28f = (_0x37c8b8, _0xb81c88, _0x19ad5c) => {
            const _0x34c514 = document.createElement("div");
            Object.assign(_0x34c514['style'], {
              'display': "flex"
              , 'flexDirection': "column"
              , 'alignItems': "center"
              , 'gap': "4px"
            });
            const _0x203938 = document.createElement('label');
            _0x203938.textContent = _0x37c8b8, Object['assign'](_0x203938['style'], {
              'fontWeight': '600'
              , 'fontSize': '12px'
              , 'color': "#333"
            });
            const _0x42c502 = document.createElement('input');
            return _0x42c502['id'] = _0xb81c88, _0x42c502.type = 'number', _0x42c502.min = '0', _0x42c502.step = '1', _0x42c502.value = _0x19ad5c, Object['assign'](_0x42c502.style, {
              'width': '90%'
              , 'padding': "5px"
              , 'border': "1px solid #ccc"
              , 'borderRadius': "5px"
              , 'textAlign': "center"
              , 'fontSize': "13px"
            }), _0x34c514.appendChild(_0x203938), _0x34c514.appendChild(_0x42c502), _0x34c514;
          }
          , _0x3f8e8c = _0x55f28f("Recursos", 'input-recursos', parseInt(localStorage.getItem("exec_recursos")) || 0x1)
          , _0xd43711 = _0x55f28f('Duração\x20(H)', 'input-duracion', parseInt(localStorage.getItem("exec_duracao")) || 0x1)
          , _0xd6c33d = _0x55f28f("Total (HH)", "input-total", 0x0)
          , _0x2e25cb = _0x3f8e8c['querySelector']("input")
          , _0x119e2c = _0xd43711.querySelector("input")
          , _0x412d1d = _0xd6c33d['querySelector']("input");
        _0x412d1d.disabled = !![], Object.assign(_0x412d1d.style, {
          'backgroundColor': "#e9ecef"
          , 'color': "#6c757d"
          , 'cursor': "not-allowed"
          , 'fontWeight': "bold"
        }), _0x5b3273['appendChild'](_0x3f8e8c), _0x5b3273['appendChild'](_0xd43711), _0x5b3273['appendChild'](_0xd6c33d);

        function _0x3409d1() {
          const _0x57a1d2 = parseInt(_0x2e25cb.value) || 0x0, _0x2a526a = parseInt(_0x119e2c['value']) || 0x0, _0x3bcca9 = _0x57a1d2 * _0x2a526a;
          _0x412d1d.value = _0x3bcca9, localStorage.setItem("exec_recursos", _0x57a1d2), localStorage.setItem("exec_duracao", _0x2a526a), localStorage.setItem("exec_horas", _0x3bcca9);
        }
        _0x2e25cb.addEventListener("input", _0x3409d1), _0x119e2c.addEventListener("input", _0x3409d1), _0x3409d1(), _0xf02b62.appendChild(_0x5b3273);
        const _0x4cd352 = [{
          'id': 'campo_exec_problema'
          , 'label': 'Problema:'
          , 'key': "exec_problema"
        }, {
          'id': "campo_exec_causa"
          , 'label': "Causa:"
          , 'key': "exec_causa"
        }, {
          'id': 'campo_exec_acao'
          , 'label': "Ação:"
          , 'key': 'exec_acao'
        }, {
          'id': "campo_exec_recomendacao"
          , 'label': "Recomendação:"
          , 'key': "exec_recomendacao"
        }];
        _0x4cd352.forEach(_0x48b9b1 => {
          const _0x5f084c = document.createElement('label');
          _0x5f084c.textContent = _0x48b9b1['label'], Object['assign'](_0x5f084c.style, {
            'display': "block"
            , 'marginTop': "10px"
            , 'marginBottom': "5px"
            , 'color': "#333"
            , 'fontSize': "13px"
            , 'fontWeight': '600'
          }), _0xf02b62.appendChild(_0x5f084c);
          const _0x32c0d1 = document.createElement('textarea');
          _0x32c0d1['id'] = _0x48b9b1['id'], _0x32c0d1.value = localStorage.getItem(_0x48b9b1.key) || "N/A", Object.assign(_0x32c0d1.style, {
            'width': "100%"
            , 'height': "30px"
            , 'padding': "8px"
            , 'border': '1px\x20solid\x20#ccc'
            , 'borderRadius': "5px"
            , 'boxSizing': "border-box"
            , 'resize': 'none'
            , 'fontSize': "14px"
            , 'fontFamily': "sans-serif"
            , 'transition': "border-color 0.2s ease, box-shadow 0.2s ease, height 0.1s ease"
            , 'overflowY': "hidden"
          }), _0x32c0d1.addEventListener('focus', () => {
            _0x32c0d1.style.borderColor = "#00aa00", _0x32c0d1.style.boxShadow = '0\x200\x200\x203px\x20rgba(0,\x20170,\x200,\x200.2)', _0x32c0d1['style']['outline'] = "none";
          }), _0x32c0d1.addEventListener("blur", () => {
            _0x32c0d1['style'].borderColor = "#ccc", _0x32c0d1.style.boxShadow = "none";
          }), _0x32c0d1.oninput = () => {
            localStorage.setItem(_0x48b9b1.key, _0x32c0d1.value);
          }, _0x32c0d1.addEventListener("input", _0x544bc3), _0xf02b62.appendChild(_0x32c0d1), _0x544bc3.call(_0x32c0d1);
        });
        const _0x32d4fc = document.createElement("div");
        _0x32d4fc['id'] = 'titanflow-execucao-container', Object.assign(_0x32d4fc['style'], {
          'display': "flex"
          , 'position': "relative"
          , 'width': "100%"
          , 'marginTop': "10px"
          , 'marginBottom': '7px'
        });
        const _0x53c9a5 = document['createElement']("button");
        _0x53c9a5['innerHTML'] = '<span\x20class=\x22btn-text\x22>Executar\x20em\x20Massa</span><span\x20class=\x22btn-progress-fill\x22></span>', _0x53c9a5.classList.add("titanflow-action-btn"), Object.assign(_0x53c9a5.style, {
          'width': "100%"
          , 'backgroundColor': "#00aa00"
          , 'color': "white"
          , 'border': "none"
          , 'borderRadius': "5px"
          , 'padding': "10px 5px"
          , 'cursor': "pointer"
          , 'textAlign': "center"
          , 'fontSize': "14px"
          , 'fontWeight': "bold"
          , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
          , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
        }), _0x53c9a5.addEventListener("mouseenter", () => {
          _0x53c9a5['style'].transform = 'translateY(-2px)', _0x53c9a5['style']['filter'] = 'brightness(110%)', _0x53c9a5.style['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)";
        }), _0x53c9a5['addEventListener']('mouseleave', () => {
          _0x53c9a5.style.transform = 'translateY(0px)', _0x53c9a5['style']['filter'] = "brightness(100%)", _0x53c9a5.style.boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
        }), _0x53c9a5.onclick = () => {
          if (_0x2b7552['length'] === 0x0) {
            _0x2786ff("Nenhuma ordem selecionada para executar!", 'warning');
            return;
          }
          _0xc0586b(_0x53c9a5, _0x32d4fc, _0x2cdb6a);
        }, _0x32d4fc.appendChild(_0x53c9a5), _0xf02b62['appendChild'](_0x32d4fc);
        if (_0x4458b3 !== "tecnico") {
          const _0x47276c = document.createElement("label");
          _0x47276c.textContent = "Calificación para fechamento:", Object.assign(_0x47276c.style, {
            'display': "block"
            , 'marginTop': "10px"
            , 'marginBottom': "5px"
            , 'color': "#333"
            , 'fontSize': "13px"
            , 'fontWeight': '600'
          }), _0xf02b62.appendChild(_0x47276c);
          const _0x4598b6 = document['createElement']("select");
          _0x4598b6['id'] = "select_calificacion", Object.assign(_0x4598b6['style'], {
            'width': "100%"
            , 'padding': "8px"
            , 'marginBottom': "10px"
            , 'border': "1px solid #ccc"
            , 'borderRadius': '5px'
            , 'boxSizing': "border-box"
            , 'fontSize': '14px'
            , 'fontFamily': "sans-serif"
            , 'transition': 'border-color\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
            , 'appearance': "none"
            , 'backgroundImage': 'url(\x27data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\x27)'
            , 'backgroundRepeat': "no-repeat"
            , 'backgroundPosition': "right .7em top 50%"
            , 'backgroundSize': '.65em\x20auto'
          }), _0x4598b6['addEventListener']("focus", () => {
            _0x4598b6.style.borderColor = "#aa0000", _0x4598b6['style'].boxShadow = '0\x200\x200\x203px\x20rgba(170,\x200,\x200,\x200.2)', _0x4598b6.style['outline'] = 'none';
          }), _0x4598b6.addEventListener("blur", () => {
            _0x4598b6.style.borderColor = "#ccc", _0x4598b6.style.boxShadow = 'none';
          });
          const _0x2d41d9 = [{
            'valor': ''
            , 'texto': '--\x20Selecione\x20--'
          }, {
            'valor': '3'
            , 'texto': "Bueno"
          }, {
            'valor': '4'
            , 'texto': "Muy bueno"
          }, {
            'valor': '5'
            , 'texto': "Excelente"
          }, {
            'valor': '6'
            , 'texto': 'Sin\x20calificar'
          }];
          _0x2d41d9['forEach'](_0x16a820 => {
            const _0x36035a = document.createElement("option");
            _0x36035a['value'] = _0x16a820['valor'], _0x36035a.textContent = _0x16a820.texto, _0x4598b6.appendChild(_0x36035a);
          }), _0xf02b62.appendChild(_0x4598b6);
          const _0x10bc55 = document['createElement']("div");
          _0x10bc55['id'] = "titanflow-fechamento-container", Object.assign(_0x10bc55.style, {
            'display': "flex"
            , 'marginTop': "1px"
            , 'marginBottom': "6px"
          });
          const _0x5ee67b = document.createElement("button");
          _0x5ee67b['id'] = "botao-fechamento-massa", _0x5ee67b['innerHTML'] = '<span\x20class=\x22btn-text\x22>Fechar\x20em\x20Massa</span><span\x20class=\x22btn-progress-fill\x22></span>', _0x5ee67b['classList']['add']("titanflow-action-btn"), Object.assign(_0x5ee67b.style, {
            'width': "100%"
            , 'backgroundColor': "#aa0000"
            , 'color': 'white'
            , 'border': "none"
            , 'borderRadius': '5px'
            , 'padding': "10px 5px"
            , 'cursor': "pointer"
            , 'textAlign': "center"
            , 'fontSize': "14px"
            , 'fontWeight': 'bold'
            , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
            , 'boxShadow': '0\x202px\x204px\x20rgba(0,0,0,0.15)'
          }), _0x5ee67b.addEventListener('mouseenter', () => {
            _0x5ee67b.style.transform = "translateY(-2px)", _0x5ee67b.style.filter = "brightness(110%)", _0x5ee67b.style.boxShadow = '0\x204px\x2010px\x20rgba(0,0,0,0.25)';
          }), _0x5ee67b['addEventListener']("mouseleave", () => {
            _0x5ee67b.style.transform = "translateY(0px)", _0x5ee67b['style'].filter = "brightness(100%)", _0x5ee67b['style'].boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
          }), _0x5ee67b.onclick = () => {
            if (_0x2b7552.length === 0x0) {
              _0x2786ff("Nenhuma ordem selecionada para fechar!", "warning");
              return;
            }
            const _0x306980 = document.getElementById("select_calificacion").value;
            if (!_0x306980) {
              _0x2786ff("Por favor, selecione uma \"Calificación para fechamento\".", "warning");
              return;
            }
            _0xc0586b(_0x5ee67b, _0x10bc55, _0x1e1e0a);
          }, _0x10bc55['appendChild'](_0x5ee67b), _0xf02b62.appendChild(_0x10bc55);
        }
      }
      _0x32d52e.onclick = () => {
        sessionStorage['setItem']("lastActiveTitanTab", 'execucao'), _0x1f742f();
      }, _0x32a5d7.appendChild(_0x322bee);
      const _0xf02b62 = document['createElement']("div");
      _0xf02b62['id'] = "conteudo-abas", _0x32a5d7.appendChild(_0xf02b62);
      const _0x38017c = document['createElement']("div");
      _0x38017c['id'] = "titanflow-botoes-acao", Object.assign(_0x38017c['style'], {
        'display': "flex"
        , 'gap': '5px'
        , 'marginBottom': '10px'
      });
      const _0x3034e5 = document['createElement']("button");
      _0x3034e5['id'] = "titanflow-btn-salvar-selecao", _0x3034e5['innerHTML'] = "<span class=\"btn-text\">📋 Salvar Seleção</span><span class=\"btn-progress-fill\"></span>", _0x3034e5['classList'].add("titanflow-action-btn"), Object['assign'](_0x3034e5['style'], {
        'backgroundColor': '#3366ff'
        , 'color': 'white'
        , 'border': "none"
        , 'borderRadius': '5px'
        , 'padding': _0x4458b3 === "tecnico" ? '3px\x203px' : "5px 5px"
        , 'cursor': "pointer"
        , 'textAlign': "center"
        , 'fontSize': "12px"
        , 'fontWeight': "bold"
        , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
        , 'boxShadow': '0\x202px\x204px\x20rgba(0,0,0,0.15)'
      }), _0x3034e5.addEventListener("mouseenter", () => {
        _0x3034e5.style.transform = 'translateY(-2px)', _0x3034e5.style.filter = "brightness(110%)", _0x3034e5.style.boxShadow = '0\x204px\x2010px\x20rgba(0,0,0,0.25)';
      }), _0x3034e5.addEventListener("mouseleave", () => {
        _0x3034e5.style.transform = "translateY(0px)", _0x3034e5.style['filter'] = "brightness(100%)", _0x3034e5.style.boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
      }), _0x3034e5['addEventListener']("mousedown", () => {
        _0x3034e5.style['transform'] = "translateY(1px)", _0x3034e5.style['boxShadow'] = 'none';
      }), _0x3034e5.addEventListener("mouseup", () => {
        _0x3034e5.matches(":hover") && (_0x3034e5['style'].transform = "translateY(-2px)", _0x3034e5.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)");
      }), _0x3034e5.onclick = _0x5907ab, _0x38017c.appendChild(_0x3034e5);
      const _0x564675 = document.createElement('button');
      _0x564675['innerHTML'] = "<span class=\"btn-text\">🧹 Limpar Seleção</span><span class=\"btn-progress-fill\"></span>", _0x564675.classList.add('titanflow-action-btn'), Object['assign'](_0x564675.style, {
        'backgroundColor': "#999999"
        , 'color': "white"
        , 'border': "none"
        , 'borderRadius': "5px"
        , 'padding': _0x4458b3 === "tecnico" ? '3px\x203px' : "5px 5px"
        , 'cursor': "pointer"
        , 'textAlign': 'center'
        , 'fontSize': "12px"
        , 'fontWeight': "bold"
        , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
        , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
      }), _0x564675.addEventListener('mouseenter', () => {
        _0x564675.style.transform = "translateY(-2px)", _0x564675['style']['filter'] = "brightness(110%)", _0x564675.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
      }), _0x564675.addEventListener("mouseleave", () => {
        _0x564675['style'].transform = "translateY(0px)", _0x564675.style.filter = "brightness(100%)", _0x564675.style['boxShadow'] = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
      }), _0x564675.addEventListener("mousedown", () => {
        _0x564675.style.transform = "translateY(1px)", _0x564675['style'].boxShadow = "none";
      }), _0x564675.addEventListener("mouseup", () => {
        _0x564675.matches(":hover") && (_0x564675['style'].transform = 'translateY(-2px)', _0x564675.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)");
      }), _0x564675.onclick = _0x5b9e12, _0x38017c.appendChild(_0x564675);
      if (_0x4458b3 !== "tecnico") {
        const _0x50d985 = document.createElement('button');
        _0x50d985.innerHTML = "<span class=\"btn-text\">👷 Definir Mão de Obra</span><span class=\"btn-progress-fill\"></span>", _0x50d985['classList']['add']("titanflow-action-btn"), Object['assign'](_0x50d985.style, {
          'backgroundColor': "#ff3366"
          , 'color': "white"
          , 'border': "none"
          , 'borderRadius': '5px'
          , 'padding': "5px 5px"
          , 'cursor': "pointer"
          , 'textAlign': "center"
          , 'fontSize': "12px"
          , 'fontWeight': "bold"
          , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
          , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
        }), _0x50d985.addEventListener('mouseenter', () => {
          _0x50d985.style.transform = "translateY(-2px)", _0x50d985.style['filter'] = "brightness(110%)", _0x50d985.style['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)";
        }), _0x50d985.addEventListener("mouseleave", () => {
          _0x50d985.style.transform = "translateY(0px)", _0x50d985['style'].filter = "brightness(100%)", _0x50d985['style'].boxShadow = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
        }), _0x50d985.addEventListener("mousedown", () => {
          _0x50d985.style.transform = "translateY(1px)", _0x50d985.style.boxShadow = "none";
        }), _0x50d985['addEventListener']("mouseup", () => {
          _0x50d985.matches(':hover') && (_0x50d985['style'].transform = "translateY(-2px)", _0x50d985['style'].boxShadow = '0\x204px\x2010px\x20rgba(0,0,0,0.25)');
        }), _0x50d985['onclick'] = () => {
          if (_0x2b7552['length'] === 0x0) {
            _0x2786ff("Nenhuma ordem selecionada para definir a mão de obra!", "warning");
            return;
          }
          const _0x249b05 = document.getElementById('titanflow-botoes-acao');
          _0xc0586b(_0x50d985, _0x249b05, _0x55e3a8);
        }, _0x38017c.appendChild(_0x50d985);
        const _0xef7eab = document.createElement("button");
        _0xef7eab.innerHTML = '<span\x20class=\x22btn-text\x22>❌\x20Remover\x20Mão\x20de\x20Obra</span><span\x20class=\x22btn-progress-fill\x22></span>', _0xef7eab.classList.add("titanflow-action-btn"), Object.assign(_0xef7eab['style'], {
          'backgroundColor': '#ff3300'
          , 'color': "white"
          , 'border': 'none'
          , 'borderRadius': "5px"
          , 'padding': "5px 5px"
          , 'cursor': "pointer"
          , 'textAlign': 'center'
          , 'fontSize': "12px"
          , 'fontWeight': 'bold'
          , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
          , 'boxShadow': '0\x202px\x204px\x20rgba(0,0,0,0.15)'
        }), _0xef7eab['addEventListener']("mouseenter", () => {
          _0xef7eab['style']['transform'] = "translateY(-2px)", _0xef7eab.style.filter = 'brightness(110%)', _0xef7eab.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
        }), _0xef7eab.addEventListener('mouseleave', () => {
          _0xef7eab.style.transform = "translateY(0px)", _0xef7eab['style'].filter = "brightness(100%)", _0xef7eab.style.boxShadow = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
        }), _0xef7eab.addEventListener("mousedown", () => {
          _0xef7eab.style.transform = "translateY(1px)", _0xef7eab.style.boxShadow = "none";
        }), _0xef7eab.addEventListener("mouseup", () => {
          _0xef7eab['matches'](':hover') && (_0xef7eab.style.transform = "translateY(-2px)", _0xef7eab.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)");
        }), _0xef7eab.onclick = () => {
          if (_0x2b7552['length'] === 0x0) {
            _0x2786ff('Nenhuma\x20ordem\x20selecionada\x20para\x20remover\x20a\x20mão\x20de\x20obra!', "warning");
            return;
          }
          const _0x25b081 = document['getElementById']("titanflow-botoes-acao");
          _0xc0586b(_0xef7eab, _0x25b081, _0x5583cc);
        }, _0x38017c['appendChild'](_0xef7eab);
        const _0xa0b891 = document.createElement("button");
        _0xa0b891.innerHTML = '<span\x20class=\x22btn-text\x22>⚡\x20Ativar\x20em\x20Massa</span><span\x20class=\x22btn-progress-fill\x22></span>', _0xa0b891.classList.add("titanflow-action-btn"), Object.assign(_0xa0b891.style, {
          'backgroundColor': "#28a745"
          , 'color': 'white'
          , 'border': "none"
          , 'borderRadius': "5px"
          , 'padding': "5px 5px"
          , 'cursor': 'pointer'
          , 'textAlign': "center"
          , 'fontSize': '12px'
          , 'fontWeight': "bold"
          , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
          , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
        }), _0xa0b891.addEventListener("mouseenter", () => {
          _0xa0b891.style.transform = "translateY(-2px)", _0xa0b891['style']['filter'] = "brightness(110%)", _0xa0b891.style['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)";
        }), _0xa0b891['addEventListener']("mouseleave", () => {
          _0xa0b891['style'].transform = "translateY(0px)", _0xa0b891['style'].filter = "brightness(100%)", _0xa0b891.style.boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
        }), _0xa0b891.addEventListener('mousedown', () => {
          _0xa0b891.style.transform = 'translateY(1px)', _0xa0b891.style.boxShadow = "none";
        }), _0xa0b891.addEventListener('mouseup', () => {
          _0xa0b891.matches(':hover') && (_0xa0b891.style.transform = "translateY(-2px)", _0xa0b891['style'].boxShadow = '0\x204px\x2010px\x20rgba(0,0,0,0.25)');
        }), _0xa0b891.onclick = () => {
          if (_0x2b7552.length === 0x0) {
            _0x2786ff("Nenhuma ordem selecionada para ativar!", "warning");
            return;
          }
          const _0x58dd8d = document.getElementById("titanflow-botoes-acao");
          _0xc0586b(_0xa0b891, _0x58dd8d, _0x224161);
        }, _0x38017c['appendChild'](_0xa0b891);
      }
      const _0x15cf9a = document.createElement('hr');
      Object.assign(_0x15cf9a['style'], {
        'margin': _0x4458b3 === 'tecnico' ? "0px 0" : "5px 0"
        , 'border': '0'
        , 'borderTop': _0x4458b3 === "tecnico" ? "0px" : "2px solid #e9ecef"
      });
      const _0x480f64 = document.createElement("div");
      Object.assign(_0x480f64.style, {
        'display': 'flex'
        , 'justifyContent': 'space-between'
        , 'alignItems': 'center'
        , 'paddingBottom': "8px"
        , 'borderBottom': "1px solid #ccc"
        , 'marginBottom': "10px"
      });
      const _0x106efb = document.createElement('h3');
      _0x106efb.textContent = "Mão de Obra", Object['assign'](_0x106efb.style, {
        'color': "#3366ff"
        , 'margin': 0x0
        , 'fontSize': "16px"
        , 'fontWeight': "600"
      });
     // --- BOTÃO LIMPAR (❌) ATUALIZADO (Sem confirmação e cor original) ---

      const _0x14ddf1 = document.createElement('div');
      _0x14ddf1.innerHTML = '❌';
      // Title mais direto já que não tem confirmação
      _0x14ddf1.title = "Clique para limpar toda a seleção imediatamente";

      // Estilos do botão
      Object.assign(_0x14ddf1.style, {
          // VOLTANDO PARA A COR NEUTRA ORIGINAL (Amarelo em vez de vermelho)
          backgroundColor: '#ffc222',
          color: 'yellow',
          border: '1px solid #ffc222',

          // Resto dos estilos padrão
          borderRadius: '5px',
          padding: '3px 6px',
          fontSize: '12px',
          fontWeight: 'bold',
          cursor: 'pointer',
          lineHeight: '1.2',
          boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto'
      });

      // Efeitos de Mouse (Hover)
      _0x14ddf1.onmouseenter = () => {
          _0x14ddf1.style.transform = 'translateY(-2px)';
          _0x14ddf1.style.filter = 'brightness(110%)'; // Fica ligeiramente mais claro ao passar o mouse
          _0x14ddf1.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      };
      _0x14ddf1.onmouseleave = () => {
          _0x14ddf1.style.transform = 'translateY(0)';
          _0x14ddf1.style.filter = 'brightness(100%)';
          _0x14ddf1.style.boxShadow = '0 2px 4px rgba(0,0,0,0.15)';
      };
      _0x14ddf1.onmousedown = () => {
          _0x14ddf1.style.transform = 'translateY(1px)';
          _0x14ddf1.style.boxShadow = 'none';
      };

        // Solta o Clique: Volta para cima (estado de Hover)
            _0x14ddf1.onmouseup = () => {
                _0x14ddf1.style.transform = 'translateY(-2px)';
                _0x14ddf1.style.boxShadow = '0 4px 8px rgba(0,0,0,0.25)';
            };

            // Ação Final
            _0x14ddf1.onclick = () => {
                _0x2db1a3.tecnicos = [];
                _0x2db1a3.empresas = [];
                _0x13dd7d();
                compPessoas.renderizar();
                compEmpresas.renderizar();
                _0x2786ff('Seleção limpa.', 'success');
            };

      // --- AÇÃO AO CLICAR (DIRETO, SEM PERGUNTAR) ---
      _0x14ddf1.onclick = () => {
          // 1. Zera a lista na memória imediatamente
          _0x2db1a3.tecnicos = [];

          // 2. Salva a lista vazia no navegador
          _0x13dd7d();

          // 3. Atualiza a tela para remover os "checks" visuais
          // (Usa o valor atual do filtro para manter a pesquisa se houver)
          renderizarListaSimples(inputFiltro.value);

          // 4. Feedback visual rápido e discreto de que foi limpo
          _0x2786ff('Seleção limpa.', 'success');
      };

      // Adiciona os elementos ao cabeçalho
      _0x480f64.appendChild(_0x106efb); // Título
      _0x480f64.appendChild(_0x14ddf1); // Botão X

      // --- FIM DO BOTÃO ---
      const _0x11972b = document.createElement('p');
      _0x11972b.textContent = "Selecione as pessoas que serão atribuídas às ordens:", Object.assign(_0x11972b['style'], {
        'margin': "0 0 5px 0"
        , 'fontSize': "14px"
        , 'color': "#6c757d"
        , 'lineHeight': '1.4'
      });
    /// --- VERSÃO FINAL: LISTAS DE PESSOAS E EMPRESAS ---

      /// --- VERSÃO FINAL OTIMIZADA: LISTAS LADO A LADO ---

      const _0x2ef9f0 = [];

      // Garante que os arrays existam na memória
      if (!Array.isArray(_0x2db1a3.tecnicos)) _0x2db1a3.tecnicos = [];
      if (!Array.isArray(_0x2db1a3.empresas)) _0x2db1a3.empresas = [];

      // --- FUNÇÃO GERADORA DE LISTA (Com Estilo Compacto) ---
      function criarComponenteSelecao(titulo, cacheKey, arrayMemoriaKey, placeholderBusca) {
          const wrapper = document.createElement('div');
          // Flex 1 faz ocupar metade do espaço disponível
          Object.assign(wrapper.style, { flex: '1', display: 'flex', flexDirection: 'column' });

          // Título
          const lbl = document.createElement('div');
          lbl.innerHTML = `<b>${titulo}</b>`;
          lbl.style.fontSize = '13px';
          lbl.style.marginBottom = '3px';
          lbl.style.color = '#333';
          wrapper.appendChild(lbl);

          // Campo de Busca
          const input = document.createElement('input');
          input.placeholder = placeholderBusca;
          Object.assign(input.style, {
              width: '100%',
              padding: '4px',
              marginBottom: '3px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '12px',
              boxSizing: 'border-box' // Importante para não quebrar o layout lado a lado
          });

          // Container da Lista com Scroll
          const container = document.createElement('div');
          Object.assign(container.style, {
              height: '140px', // Altura fixa confortável
              overflowY: 'auto',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              borderRadius: '4px',
              padding: '4px'
          });

          // Função de Renderizar
          function render(termo = "") {
              container.innerHTML = '';
              const cache = JSON.parse(localStorage.getItem(cacheKey) || '[]');

              const itens = cache.sort((a, b) => a.nome.localeCompare(b.nome));

              if (itens.length === 0) {
                   container.innerHTML = '<div style="padding:10px; text-align:center; color:#999; font-size:10px;">Vazio.<br>Clique "Atualizar".</div>';
                   return;
              }

              itens.forEach(item => {
                  if (termo && !item.nome.toLowerCase().includes(termo.toLowerCase())) return;

                  const linha = document.createElement('div');
                  Object.assign(linha.style, { display: 'flex', alignItems: 'center', padding: '2px 0', borderBottom: '1px solid #f0f0f0' });

                  const chk = document.createElement('input');
                  chk.type = 'checkbox';
                  chk.value = item.id;
                  chk.style.marginRight = '5px';
                  chk.style.cursor = 'pointer';

                  if (_0x2db1a3[arrayMemoriaKey].includes(item.id)) chk.checked = true;

                  chk.onchange = function() {
                      if (this.checked) {
                          if (!_0x2db1a3[arrayMemoriaKey].includes(this.value)) _0x2db1a3[arrayMemoriaKey].push(this.value);
                      } else {
                          _0x2db1a3[arrayMemoriaKey] = _0x2db1a3[arrayMemoriaKey].filter(id => id !== this.value);
                      }
                      _0x13dd7d();
                  };

                  const texto = document.createElement('span');
                  texto.innerText = item.nome;
                  texto.style.fontSize = '12px'; // Fonte menor para caber melhor
                  texto.style.cursor = 'pointer';
                  texto.style.flex = '1';
                  texto.style.whiteSpace = 'nowrap'; // Evita quebra de linha feia
                  texto.style.overflow = 'hidden';
                  texto.style.textOverflow = 'ellipsis'; // Adiciona "..." se o nome for muito longo
                  texto.title = item.nome; // Mostra nome completo ao passar o mouse

                  texto.onclick = () => chk.click();

                  linha.appendChild(chk);
                  linha.appendChild(texto);
                  container.appendChild(linha);
              });
          }

          input.oninput = function() { render(this.value); };
          render();

          wrapper.renderizar = () => render(input.value);

          wrapper.appendChild(input);
          wrapper.appendChild(container);

          return wrapper;
      }

      // --- CRIAÇÃO DO CONTAINER LADO A LADO ---
      const containerDuplo = document.createElement('div');
      Object.assign(containerDuplo.style, {
          display: 'flex',
          gap: '8px',         // Espaço entre as duas listas
          marginBottom: '10px'
      });

      // 1. Cria componente de PESSOAS
      const compPessoas = criarComponenteSelecao('Técnicos', 'titan_tecnicos_cache', 'tecnicos', 'Buscar...');

      // 2. Cria componente de EMPRESAS
      const compEmpresas = criarComponenteSelecao('Empresas', 'titan_empresas_cache', 'empresas', 'Buscar...');

      // Adiciona ambos ao container lado a lado
      containerDuplo.appendChild(compPessoas);
      containerDuplo.appendChild(compEmpresas);

      // Adiciona o container duplo à lista principal do painel
      _0x2ef9f0.push(containerDuplo);


      // Conecta o botão de atualizar globalmente
      const oldFuncao = window._0xAtualizarTecnicosReais || function(){};
      window._0xAtualizarTecnicosReais = async function() {
           await oldFuncao();
           compPessoas.renderizar();
           compEmpresas.renderizar();
      };

      // --- CORREÇÃO DO BOTÃO "X" (LIMPAR TUDO) ---
      setTimeout(() => {
          const divs = _0xf02b62.getElementsByTagName('div');
          for(let div of divs) {
              if(div.innerHTML === '❌') {
                  div.onclick = function() { {
                          _0x2db1a3.tecnicos = [];
                          _0x2db1a3.empresas = [];
                          _0x13dd7d();
                          compPessoas.renderizar();
                          compEmpresas.renderizar();
                          _0x2786ff('Seleção limpa.', 'success');
                      }
                  };
                  div.title = "Limpar todas as seleções";
              }
          }
      }, 800);
      // --- FIM ---

     function _0x415963() {
 // Mantém a referência do seu código original

        // Lógica original de preparação dos dados
        _0x43e2ff.value = _0x2b7552.join('\x0a');
        _0x43e2ff['dispatchEvent'](new Event("input"));
        _0xf02b62.innerHTML = '';
        _0xf02b62.appendChild(_0x4d9c32);
        _0xf02b62['appendChild'](_0xef89ae);
        _0xf02b62.appendChild(_0x43e2ff);
        _0xf02b62.appendChild(_0x38017c);

        _0x2029e5 = document.createElement("div");
        _0x2029e5['id'] = "contador-ordens";

        Object.assign(_0x2029e5.style, {
          'backgroundColor': '#e9ecef',
          'color': "#495057",
          'border': '1px solid #dee2e6',
          'borderRadius': "6px",
          'padding': _0x4458b3 === "tecnico" ? "3px" : "10px",
          'fontWeight': '600',
          'textAlign': "center",
          'fontSize': "14px",
          'marginBottom': _0x4458b3 === 'tecnico' ? "0px" : "10px"
        });

        _0xf02b62.appendChild(_0x2029e5);
        _0x5f5540();
        _0xf02b62['appendChild'](_0x15cf9a);

        // --- AQUI COMEÇA A MUDANÇA DA ETAPA 2 ---
        // Verifica se NÃO é o perfil técnico (para mostrar a seleção de pessoas)
        if (_0x4458b3 !== "tecnico") {

            // Adiciona elementos anteriores
            _0xf02b62.appendChild(_0x480f64);

            // 1. CRIA O CONTAINER DO CABEÇALHO (Título + Botão)
            const _0xHeaderPessoas = document.createElement('div');
            _0xHeaderPessoas.style.display = 'flex';
            _0xHeaderPessoas.style.justifyContent = 'space-between';
            _0xHeaderPessoas.style.alignItems = 'center';
            _0xHeaderPessoas.style.marginBottom = '5px';
            _0xHeaderPessoas.style.marginTop = '10px';

            // 2. CRIA O TÍTULO "Seleção de Pessoas" (Reaproveitando _0x11972b original ou criando novo)
            // No seu código original era _0x11972b. Vamos recriar limpo aqui:
            const _0xTituloLabel = document.createElement('p');
            _0xTituloLabel.textContent = 'Seleção de Recursos:';
            Object.assign(_0xTituloLabel.style, {
                'margin': '0',
                'fontSize': '15px',
                'color': '#333',
                'fontWeight': 'bold'
            });

            // 3. CRIA O BOTÃO DE ATUALIZAR (COM EFEITOS VISUAIS)
            const _0xBtnUpdate = document.createElement('button');
            _0xBtnUpdate.id = 'btn-update-tecnicos';
            _0xBtnUpdate.innerHTML = '🔄 Atualizar Listas';
            _0xBtnUpdate.title = 'Buscar recursos atuais do sistema Titan';

            // Estilos Base (Iniciais)
            Object.assign(_0xBtnUpdate.style, {
                'backgroundColor': '#800000', // Cor Teal
                'color': 'white',
                'border': 'none',
                'borderRadius': '4px',
                'padding': '4px 8px',
                'cursor': 'pointer',
                'fontSize': '11px',
                'fontWeight': 'bold',
                'boxShadow': '0 2px 4px rgba(0,0,0,0.15)', // Sombra inicial
                'transition': 'transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease' // Animação suave
            });

            // Efeito: Mouse entra (Levanta e Brilha)
            _0xBtnUpdate.onmouseenter = () => {
                _0xBtnUpdate.style.transform = 'translateY(-2px)';
                _0xBtnUpdate.style.filter = 'brightness(115%)';
                _0xBtnUpdate.style.boxShadow = '0 4px 8px rgba(0,0,0,0.25)';
            };

            // Efeito: Mouse sai (Volta ao normal)
            _0xBtnUpdate.onmouseleave = () => {
                _0xBtnUpdate.style.transform = 'translateY(0)';
                _0xBtnUpdate.style.filter = 'brightness(100%)';
                _0xBtnUpdate.style.boxShadow = '0 2px 4px rgba(0,0,0,0.15)';
            };

            // Efeito: Clique (Afunda)
            _0xBtnUpdate.onmousedown = () => {
                _0xBtnUpdate.style.transform = 'translateY(1px)';
                _0xBtnUpdate.style.boxShadow = 'none';
            };

            // Solta o Clique: Volta para cima (estado de Hover)
            _0xBtnUpdate.onmouseup = () => {
                _0xBtnUpdate.style.transform = 'translateY(-2px)';
                _0xBtnUpdate.style.boxShadow = '0 4px 8px rgba(0,0,0,0.25)';
            };

            // Ação Final
            _0xBtnUpdate.onclick = (e) => {
                e.preventDefault();
                _0xAtualizarTecnicosReais();
            };

            // Conecta à função de atualização
            _0xBtnUpdate.onclick = (e) => {
                e.preventDefault();
                _0xAtualizarTecnicosReais();
            };

            // Monta o cabeçalho
            _0xHeaderPessoas.appendChild(_0xTituloLabel);
            _0xHeaderPessoas.appendChild(_0xBtnUpdate);

            // Adiciona o cabeçalho ao painel
            _0xf02b62.appendChild(_0xHeaderPessoas);

            // 4. ADICIONA OS DROPDOWNS (Loop original)
            // _0x2ef9f0 é o array que contém os selects de Pessoa 1, Pessoa 2, etc.
            _0x2ef9f0.forEach(_0x341420 => {
                _0xf02b62.appendChild(_0x341420);
            });
        }
        // --- FIM DA MUDANÇA ---
      }
      const _0x4d9c32 = document['createElement']("button");
      _0x4d9c32.textContent = (new URLSearchParams(location.search).get('seccion') === 'titan_trabajos_pedidos' ? '🔍 Capturar Pedidos Visíveis' : '🔍 Capturar Ordens Visíveis'), Object['assign'](_0x4d9c32['style'], {
        'width': '100%'
        , 'backgroundColor': "#3366ff"
        , 'color': "white"
        , 'border': "none"
        , 'borderRadius': "5px"
        , 'padding': _0x4458b3 === "tecnico" ? '3px\x203px' : '5px\x205px'
        , 'marginBottom': "10px"
        , 'cursor': "pointer"
        , 'textAlign': 'center'
        , 'fontSize': "14px"
        , 'fontWeight': 'bold'
        , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
        , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
      }), _0x4d9c32.addEventListener("mouseenter", () => {
        _0x4d9c32.style['transform'] = 'translateY(-2px)', _0x4d9c32.style.filter = 'brightness(110%)', _0x4d9c32.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
      }), _0x4d9c32.addEventListener('mouseleave', () => {
        _0x4d9c32.style.transform = 'translateY(0px)', _0x4d9c32.style['filter'] = 'brightness(100%)', _0x4d9c32.style.boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
      }), _0x4d9c32.addEventListener("mousedown", () => {
        _0x4d9c32.style['transform'] = 'translateY(1px)', _0x4d9c32.style.boxShadow = "none";
      }), _0x4d9c32.addEventListener('mouseup', () => {
        _0x4d9c32['matches'](':hover') && (_0x4d9c32['style']['transform'] = "translateY(-2px)", _0x4d9c32.style['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)");
      }), _0x4d9c32.onclick = _0x39b14b;
      const _0xef89ae = document.createElement("label");
      _0xef89ae.textContent = 'Ordens:\x20(uma\x20ordem\x20por\x20linha):', Object.assign(_0xef89ae.style, {
        'display': 'flex'
        , 'justifyContent': 'space-between'
        , 'marginBottom': _0x4458b3 === 'tecnico' ? "8px" : '10px'
        , 'color': "#333"
        , 'fontSize': "13px"
        , 'fontWeight': "600"
      });
      const _0x42a92e = document.createElement("span");
      _0x42a92e['id'] = "live-order-counter", _0x42a92e.textContent = "0 ordens", Object.assign(_0x42a92e['style'], {
        'color': "#3366ff"
        , 'fontWeight': "normal"
        , 'fontSize': "12px"
      }), _0xef89ae.appendChild(_0x42a92e);
      const _0x43e2ff = document['createElement']("textarea");
      _0x43e2ff['id'] = "ordens-input", _0x43e2ff.placeholder = "Digite ou cole as ordens aqui...\nEx: 12345", Object.assign(_0x43e2ff.style, {
        'width': "100%"
        , 'height': _0x4458b3 === "tecnico" ? "60px" : "100px"
        , 'marginBottom': "10px"
        , 'padding': _0x4458b3 === "tecnico" ? "5px 5px" : '8px\x205px'
        , 'border': "1px solid #ccc"
        , 'borderRadius': '5px'
        , 'boxSizing': "border-box"
        , 'resize': "vertical"
        , 'fontSize': "14px"
        , 'fontFamily': "sans-serif"
        , 'transition': "border-color 0.2s ease, box-shadow 0.2s ease"
      });
      const _0x91544c = () => {
        const _0x2a6207 = _0x43e2ff.value.split('\x0a'), _0x599037 = _0x2a6207.map(_0x3d25e0 => {
            const _0x2114eb = _0x3d25e0.replace(/\D/g, '');
            return _0x2114eb.slice(0x0, 0x6);
          });
        _0x43e2ff.value = _0x599037.join('\x0a');
        const _0x5df5f8 = _0x599037['filter'](_0x1cc4c9 => _0x1cc4c9['trim']() !== '').length;
        _0x42a92e.textContent = _0x5df5f8 + " ordens";
      };
      _0x43e2ff['addEventListener']("input", _0x91544c), _0x43e2ff['addEventListener']('paste', _0x5e7b6d => {
        _0x5e7b6d.preventDefault();
        const _0x23f57f = (_0x5e7b6d.clipboardData || window.clipboardData).getData("text")
          , _0x19f76c = _0x23f57f['replace'](/[,;\s]+/g, '\x0a')
          , _0x445e93 = _0x43e2ff.selectionStart
          , _0xd1ed99 = _0x43e2ff.selectionEnd;
        _0x43e2ff.value = _0x43e2ff['value'].substring(0x0, _0x445e93) + _0x19f76c + _0x43e2ff.value.substring(_0xd1ed99), _0x91544c();
      }), _0x43e2ff.addEventListener("focus", () => {
        _0x43e2ff.style.borderColor = "#3366ff", _0x43e2ff.style.boxShadow = "0 0 0 3px rgba(51, 102, 255, 0.2)", _0x43e2ff.style['outline'] = "none";
      }), _0x43e2ff.addEventListener('blur', () => {
        _0x43e2ff.style.borderColor = "#ccc", _0x43e2ff.style.boxShadow = "none";
      });
      _0x2b7552.length > 0x0 && (_0x43e2ff.value = _0x2b7552.join('\x0a'), _0x91544c());

      function _0xf4af04() {
        _0xf02b62.innerHTML = '';
        const _0x27d346 = _0x16cd8c => {
            Object.assign(_0x16cd8c['style'], {
              'width': "100%"
              , 'height': "60px"
              , 'padding': "8px"
              , 'border': '1px\x20solid\x20#ccc'
              , 'borderRadius': "5px"
              , 'boxSizing': "border-box"
              , 'resize': "vertical"
              , 'fontSize': "14px"
              , 'fontFamily': "sans-serif"
              , 'transition': "border-color 0.2s ease, box-shadow 0.2s ease"
            }), _0x16cd8c.addEventListener('focus', () => {
              _0x16cd8c.style['borderColor'] = "#ffaa00", _0x16cd8c['style'].boxShadow = "0 0 0 3px rgba(255, 170, 0, 0.2)", _0x16cd8c.style.outline = "none";
            }), _0x16cd8c.addEventListener("blur", () => {
              _0x16cd8c.style['borderColor'] = "#ccc", _0x16cd8c.style['boxShadow'] = "none";
            });
          }
          , _0x227e9c = (_0x187434, _0x120179 = '#28a745') => {
            return Object['assign'](_0x187434['style'], {
              'width': "100%"
              , 'padding': "6px"
              , 'marginTop': '5px'
              , 'backgroundColor': '#6c757d'
              , 'color': "white"
              , 'border': "none"
              , 'borderRadius': "5px"
              , 'cursor': "pointer"
              , 'fontWeight': "bold"
              , 'transition': "filter 0.2s ease"
            }), _0x187434.addEventListener("mouseenter", () => _0x187434.style['filter'] = 'brightness(110%)'), _0x187434.addEventListener('mouseleave', () => _0x187434.style['filter'] = "brightness(100%)"), (_0x3dcf6b, _0x762d21, _0x1ff783) => {
              _0x3dcf6b.disabled = ![], _0x3dcf6b.placeholder = _0x762d21, _0x3dcf6b['style']['backgroundColor'] = "#fff", _0x3dcf6b.style.cursor = 'text', _0x3dcf6b.focus(), _0x187434.textContent = _0x1ff783, _0x187434['style'].backgroundColor = _0x120179, _0x187434.disabled = !![], _0x187434['style'].cursor = "default", _0x187434['style'].filter = "brightness(100%)";
            };
          }
          , _0x435c8a = document['createElement']("label");
        _0x435c8a.textContent = 'Nova\x20Data\x20(dd/mm/aaaa):', _0x435c8a.style['display'] = "block", _0xf02b62.appendChild(_0x435c8a);
        const _0x5bb377 = document['createElement']("input");
        _0x5bb377.type = "date", _0x5bb377['id'] = "input-nova-data";
        const _0x56d23b = new Date()['toISOString']().split('T')[0x0];
        _0x5bb377.min = _0x56d23b, _0x5bb377['style'].cssText = "width: 95%; margin-bottom: 10px; padding: 6px; border-radius: 5px; border: 1px solid #ccc;", _0x5bb377.value = _0x56d23b, _0xf02b62.appendChild(_0x5bb377);
        const _0x9360cc = document.createElement("label");
        _0x9360cc.textContent = "Causa da Reprogramação:", _0x9360cc.style.display = "block", _0xf02b62.appendChild(_0x9360cc);
        const _0x34fb17 = document.createElement('textarea');
        _0x34fb17['id'] = 'input-causa';

        function _0x5c21a7() {
          const _0x5c1356 = _0x5bb377.value;
          if (_0x5c1356) {
            const _0x25569b = _0x5c1356.split('-')
              , _0x2c25cd = _0x25569b[0x2] + '/' + _0x25569b[0x1] + '/' + _0x25569b[0x0];
            _0x34fb17.value = "Reprogramada para a data de execução! (" + _0x2c25cd + ')';
          } else _0x34fb17['value'] = "Reprogramada para a data de execução!";
        }
        _0x5bb377['addEventListener']('input', _0x5c21a7), _0x5c21a7(), _0x27d346(_0x34fb17), _0xf02b62.appendChild(_0x34fb17);
        const _0x571709 = document.createElement('hr');
        Object.assign(_0x571709['style'], {
          'margin': "15px 0"
          , 'border': '0'
          , 'borderTop': "1px solid #ccc"
        }), _0xf02b62.appendChild(_0x571709);
        const _0x58dd02 = document.createElement("label");
        _0x58dd02['textContent'] = "Forçar Alteração de Descrição (Opcional):", Object['assign'](_0x58dd02.style, {
          'display': 'block'
          , 'fontWeight': "bold"
        }), _0xf02b62.appendChild(_0x58dd02);
        const _0x1da354 = document.createElement('textarea');
        _0x1da354['id'] = "input-nova-descricao", _0x1da354.placeholder = "Clique em \"Desbloquear\" para editar...", _0x1da354['disabled'] = !![], _0x27d346(_0x1da354), Object.assign(_0x1da354.style, {
          'height': "80px"
          , 'marginTop': "5px"
          , 'backgroundColor': "#e9ecef"
          , 'cursor': "not-allowed"
        }), _0xf02b62.appendChild(_0x1da354);
        const _0x3cd7b3 = document.createElement("button");
        _0x3cd7b3['id'] = "btn-desbloquear-descricao", _0x3cd7b3.textContent = "🔒 Desbloquear Edição de Descrição";
        const _0x4248da = _0x227e9c(_0x3cd7b3);
        _0x3cd7b3.onclick = () => _0x4248da(_0x1da354, "Digite a nova descrição aqui...", "✅ Descrição Desbloqueada"), _0xf02b62['appendChild'](_0x3cd7b3);
        const _0x50cf7d = document['createElement']("label");
        _0x50cf7d['textContent'] = "Adicionar Código de Falha ao Final da Descrição:", Object.assign(_0x50cf7d.style, {
          'display': "block"
          , 'fontWeight': "bold"
          , 'marginTop': "15px"
        }), _0xf02b62.appendChild(_0x50cf7d);
        const _0x57aca7 = document.createElement("input");
        _0x57aca7['type'] = "text", _0x57aca7['id'] = 'input-codigo-falha', _0x57aca7.placeholder = "Clique em \"Desbloquear\" para editar...", _0x57aca7.disabled = !![], _0x27d346(_0x57aca7), Object.assign(_0x57aca7['style'], {
          'height': "auto"
          , 'marginTop': '5px'
          , 'backgroundColor': "#e9ecef"
          , 'cursor': 'not-allowed'
        }), _0xf02b62.appendChild(_0x57aca7);
        const _0x550397 = document.createElement('button');
        _0x550397['id'] = "btn-desbloquear-codigo", _0x550397.textContent = "🔒 Desbloquear Edição de Código";
        const _0x402b85 = _0x227e9c(_0x550397);
        _0x550397.onclick = () => _0x402b85(_0x57aca7, 'Digite\x20o\x20código\x20de\x20falha\x20aqui\x20(ex:\x20E001)', "✅ Código Desbloqueado"), _0xf02b62.appendChild(_0x550397);
        const _0x186106 = document.createElement("div");
        _0x186106['id'] = "titanflow-reprog-container", Object.assign(_0x186106.style, {
          'display': 'flex'
          , 'marginTop': "15px"
          , 'marginBottom': "7px"
        });
        const _0x44c9eb = document['createElement']("button");
        _0x44c9eb['innerHTML'] = '<span\x20class=\x22btn-text\x22>Executar\x20Reprogramação</span><span\x20class=\x22btn-progress-fill\x22></span>', _0x44c9eb.classList.add("titanflow-action-btn"), Object.assign(_0x44c9eb.style, {
          'width': "100%"
          , 'backgroundColor': "#ffaa00"
          , 'color': "white"
          , 'border': "none"
          , 'borderRadius': "5px"
          , 'padding': '10px\x205px'
          , 'cursor': "pointer"
          , 'textAlign': "center"
          , 'fontSize': "14px"
          , 'fontWeight': "bold"
          , 'transition': "transform 0.1s ease, filter 0.2s ease, box-shadow 0.2s ease"
          , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
        }), _0x44c9eb.addEventListener('mouseenter', () => {
          _0x44c9eb['style'].transform = 'translateY(-2px)', _0x44c9eb['style'].filter = "brightness(110%)", _0x44c9eb.style['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)";
        }), _0x44c9eb.addEventListener("mouseleave", () => {
          _0x44c9eb.style.transform = "translateY(0px)", _0x44c9eb.style['filter'] = "brightness(100%)", _0x44c9eb.style.boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
        }), _0x44c9eb.onclick = () => {
          if (_0x2b7552.length === 0x0) {
            _0x2786ff("Nenhuma ordem selecionada para reprogramar!", "warning");
            return;
          }
          _0xc0586b(_0x44c9eb, _0x186106, _0x1116da);
        };
        const _0x444b7f = document.createElement("button");
        _0x444b7f.innerHTML = "<span class=\"btn-text\">Cancelar Ordens</span><span class=\"btn-progress-fill\"></span>", _0x444b7f.classList.add('titanflow-action-btn'), Object['assign'](_0x444b7f.style, {
          'width': "100%"
          , 'backgroundColor': "#dc3545"
          , 'color': 'white'
          , 'border': 'none'
          , 'borderRadius': "5px"
          , 'padding': "10px 5px"
          , 'cursor': "pointer"
          , 'textAlign': "center"
          , 'fontSize': "14px"
          , 'fontWeight': "bold"
          , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
          , 'boxShadow': '0\x202px\x204px\x20rgba(0,0,0,0.15)'
        }), _0x444b7f.addEventListener('mouseenter', () => {
          _0x444b7f.style.transform = "translateY(-2px)", _0x444b7f.style['filter'] = 'brightness(110%)', _0x444b7f.style['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)";
        }), _0x444b7f['addEventListener']("mouseleave", () => {
          _0x444b7f.style.transform = 'translateY(0px)', _0x444b7f.style.filter = 'brightness(100%)', _0x444b7f.style.boxShadow = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
        }), _0x444b7f.onclick = () => {
          if (_0x2b7552.length === 0x0) {
            _0x2786ff("Nenhuma ordem selecionada para cancelar!", 'warning');
            return;
          }
          _0xc0586b(_0x444b7f, _0x186106, _0x497030);
        }, _0x186106.appendChild(_0x44c9eb), _0x186106.appendChild(_0x444b7f), _0xf02b62.appendChild(_0x186106);
      }
      _0x2ce98f['onclick'] = () => {
        sessionStorage.setItem('lastActiveTitanTab', "mao_de_obra"), _0x415963();
      }, _0x246ef0['onclick'] = () => {
        sessionStorage.setItem('lastActiveTitanTab', 'reprogramacao'), _0xf4af04();
      };
      const _0x1d9786 = document.createElement('div');
      _0x1d9786.innerHTML = '👨‍💻\x20<em><a\x20href=\x22#\x22\x20target=\x22_blank\x22\x20style=\x22color:#1ab3a5;\x20text-decoration:\x20none;\x22>Desenvolvido\x20por\x20PCM</a></em>\x20&copy;\x20' + new Date().getFullYear(), _0x1d9786.style.fontSize = "11px", _0x1d9786.style.color = "#888", _0x1d9786['style'].textAlign = "center", _0x1d9786.style.marginTop = "22px", _0x32a5d7.appendChild(_0x1d9786);

      function _0x334b85() {
        _tfInstalarBotaoHistorico();
        const _0x15764 = sessionStorage.getItem("lastActiveTitanTab");
        switch ((() => {
          const _0xp = new URLSearchParams(location.search).get('seccion') === 'titan_trabajos_pedidos';
          if (_0xp && (_0x15764 === 'reprogramacao' || _0x15764 === 'execucao')) return 'mao_de_obra';
          if (!_0xp && _0x15764 === 'pedidos') return 'mao_de_obra';
          return _0x15764;
        })()) {
        case "reprogramacao":
          _0xf4af04();
          break;
        case "execucao":
          _0x1f742f();
          break;
        case 'pedidos':
          _0x4177e2();
          break;
        case 'mao_de_obra':
        default:
          _0x415963();
          break;
        }
      }
      document.body.appendChild(_0x32a5d7), _0x334b85(), _0x5f5540(), _0x5ede4f(_0x32a5d7, _0x368f37, _0x4e7800);

      function _0x5ede4f(_0xd87bc6, _0x4ef3f5, _0x136ca8) {
        let _0x2635d5, _0x589c84, _0x31941c = ![];

        function _0x2aabbc(_0x3d61d8) {
          if (!_0x31941c) return;
          _0xd87bc6.style['position'] = "fixed", _0xd87bc6.style.left = _0x3d61d8.clientX - _0x2635d5 + 'px', _0xd87bc6['style'].top = _0x3d61d8.clientY - _0x589c84 + 'px';
        }

        function _0x1710cc() {
          if (!_0x31941c) return;
          _0x31941c = ![], document.removeEventListener("mousemove", _0x2aabbc), document['removeEventListener']("mouseup", _0x1710cc), !_0x136ca8['value'] && (localStorage.setItem('titanflow_panel_top', _0xd87bc6['style'].top), localStorage.setItem("titanflow_panel_left", _0xd87bc6.style.left));
        }
        _0x4ef3f5.addEventListener('mousedown', _0x509f7b => {
          if (_0x136ca8['value']) return;
          _0x509f7b.preventDefault(), _0x31941c = !![], _0x2635d5 = _0x509f7b.clientX - _0xd87bc6.offsetLeft, _0x589c84 = _0x509f7b.clientY - _0xd87bc6.offsetTop, document.addEventListener("mousemove", _0x2aabbc), document['addEventListener']("mouseup", _0x1710cc);
        });
      }
      const _0x1b42c6 = document['createElement']("button");
      _0x1b42c6['id'] = "titanflow-toggle-ordens-btn", Object.assign(_0x1b42c6.style, {
        'position': "fixed"
        , 'top': '10px'
        , 'left': "10px"
        , 'color': "white"
        , 'border': "none"
        , 'borderRadius': '5px'
        , 'padding': "6px 12px"
        , 'cursor': "pointer"
        , 'zIndex': "10000"
        , 'fontWeight': "bold"
        , 'fontSize': "13px"
        , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
        , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease,\x20background-color\x200.2s\x20ease'
      }), _0x1b42c6.addEventListener('mouseenter', () => {
        _0x1b42c6.style.transform = "translateY(-2px)", _0x1b42c6.style['filter'] = 'brightness(110%)', _0x1b42c6['style']['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)";
      }), _0x1b42c6.addEventListener("mouseleave", () => {
        _0x1b42c6.style['transform'] = "translateY(0px)", _0x1b42c6.style['filter'] = "brightness(100%)", _0x1b42c6.style.boxShadow = "0 2px 4px rgba(0,0,0,0.15)";
      }), _0x1b42c6.addEventListener('mousedown', () => {
        _0x1b42c6.style.transform = "translateY(1px)", _0x1b42c6['style']['boxShadow'] = "none";
      }), _0x1b42c6['addEventListener']("mouseup", () => {
        _0x1b42c6.matches(":hover") && (_0x1b42c6.style['transform'] = "translateY(-2px)", _0x1b42c6.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)");
      }), _0x1b42c6.onclick = function () {
        const _0x4d16b6 = document['getElementById']("painel-selecao-ordens");
        if (_0x4d16b6) {
          const _0x557bfc = _0x4d16b6.style.display === "none";
          _0x4d16b6.style.display = _0x557bfc ? 'block' : 'none', localStorage.setItem("painel_visivel", _0x557bfc ? "true" : "false"), _0x288fe4(_0x4d16b6, _0x1b42c6);
        }
      }, document.body['appendChild'](_0x1b42c6);
      const _0x128ff7 = localStorage.getItem("painel_visivel");
      _0x128ff7 === 'false' && (_0x32a5d7['style']['display'] = "none"), _0x288fe4(_0x32a5d7, _0x1b42c6), !_0x195c9c['maoDeObra'] && (_0x2ce98f.style['display'] = 'none'), !_0x195c9c.reprogramacao && (_0x246ef0['style'].display = 'none'), !_0x195c9c.execucao && (_0x32d52e['style'].display = "none"), document['addEventListener']('click', _0x4018d4 => {
        const _0x1110bb = document.getElementById("input-busca-equipamentos"), _0x519f4f = document.getElementById("resultados-busca-equipamentos");
        if (!_0x1110bb || !_0x519f4f) return;
        !_0x1110bb.contains(_0x4018d4['target']) && !_0x519f4f['contains'](_0x4018d4['target']) && (_0x519f4f.innerHTML = '');
      });
    }

    function _0x21ab2c() {
      const _0x3088cc = document.createElement('button');
      _0x3088cc['id'] = 'botao-parada-emergencia', _0x3088cc.textContent = "PARAR PROCESSAMENTO", Object.assign(_0x3088cc.style, {
        'position': "fixed"
        , 'top': "11px"
        , 'left': '150px'
        , 'backgroundColor': "#dc3545"
        , 'color': 'white'
        , 'border': 'none'
        , 'borderRadius': "5px"
        , 'padding': "7px 13px"
        , 'fontWeight': "bold"
        , 'fontSize': "12px"
        , 'cursor': "pointer"
        , 'zIndex': "10000"
        , 'boxShadow': "0 2px 4px rgba(0,0,0,0.15)"
        , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
      }), _0x3088cc.addEventListener("mouseenter", () => {
        _0x3088cc.style.transform = "translateY(-2px)", _0x3088cc['style'].filter = 'brightness(110%)', _0x3088cc.style['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)";
      }), _0x3088cc.addEventListener("mouseleave", () => {
        _0x3088cc.style.transform = "translateY(0px)", _0x3088cc.style['filter'] = "brightness(100%)", _0x3088cc.style.boxShadow = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
      }), _0x3088cc.addEventListener("mousedown", () => {
        _0x3088cc['style'].transform = "translateY(1px)", _0x3088cc.style.boxShadow = "none";
      }), _0x3088cc.addEventListener("mouseup", () => {
        _0x3088cc.matches(":hover") && (_0x3088cc.style.transform = "translateY(-2px)", _0x3088cc.style['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)");
      }), _0x3088cc['onclick'] = _0x132a29, document['body'].appendChild(_0x3088cc);
    }

    function _0x1d4458() {
      if (document.getElementById("painel-planejamento")) return;
      document.addEventListener('keydown', function (_0x1148d7) {
        const _0x23654e = document.activeElement['tagName'];
        if (_0x23654e === "INPUT" || _0x23654e === "TEXTAREA") return;
        if (_0x1148d7.ctrlKey || _0x1148d7.altKey || _0x1148d7.shiftKey || _0x1148d7.metaKey) return;
        const _0x6229e4 = _0x1148d7.key['toLowerCase']();
        switch (_0x6229e4) {
        case '1':
          document.getElementById("titanflow-btn-selecao")?.['click']();
          break;
        case '2':
          _0x4458b3 !== "tecnico" && document.getElementById('titanflow-btn-reprogramacao')?.click();
          break;
        case '3':
          document.getElementById("titanflow-btn-execucao")?.['click']();
          break;
        case '4':
          _0x4458b3 !== 'tecnico' && document['getElementById']('titanflow-btn-pedidos')?.['click']();
          break;
        case 's':
          document.getElementById("titanflow-btn-salvar-selecao")?.click();
          break;
        case 'c':
          _0x39b14b();
          break;
        case 'x':
          _0x5b9e12();
          break;
        }
      });
    }

    function _0x670dab() {
      document.addEventListener("keydown", function (_0x257025) {
        const _0x3222da = document['activeElement']['tagName'];
        if (_0x3222da === "INPUT" || _0x3222da === "TEXTAREA") return;
        const _0xe9fac9 = _0x257025['key'].toLowerCase();
        if (_0xe9fac9 === 'z') {
          const _0x7ad096 = document['getElementById']("titanflow-toggle-ordens-btn")
            , _0x2fa8d3 = document.getElementById("titanflow-toggle-planejamento-btn");
          if (_0x7ad096) _0x7ad096.click();
          else _0x2fa8d3 && _0x2fa8d3['click']();
        }
      });
    }

    function _0x3d29a5() {
      const _0x46f2aa = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Define\x20a\x20animação\x20chamada\x20\x27decolagem-foguete\x27\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20decolagem-foguete\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Ponto\x20de\x20partida\x20da\x20animação\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(62px,\x2042px)\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Na\x20metade\x20da\x20animação,\x20ele\x20estará\x20bem\x20maior\x20e\x20mais\x20alto\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20VALORES\x20AJUSTADOS:\x20Menos\x20movimento\x20para\x20o\x20lado,\x20mais\x20para\x20cima\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20VALOR\x20AUMENTADO:\x20O\x20foguete\x20ficará\x208x\x20maior\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(220px,\x20-400px)\x20scale(18);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20No\x20final,\x20ele\x20sai\x20da\x20tela,\x20gigante\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20VALORES\x20AJUSTADOS:\x20Menos\x20movimento\x20para\x20o\x20lado,\x20muito\x20mais\x20para\x20cima\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20VALOR\x20AUMENTADO:\x20O\x20foguete\x20terminará\x2016x\x20maior\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(3000px,\x20-800px)\x20scale(80);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20A\x20aparência\x20do\x20foguete\x20não\x20muda,\x20apenas\x20a\x20animação\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.foguete-animado\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20decolagem-foguete\x202.5s\x20ease-in-out\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x2d2df7 = document.createElement("style");
      _0x2d2df7.textContent = _0x46f2aa, document.head.appendChild(_0x2d2df7);
    }

    function _0x36cec0(_0x4309c4) {
      const _0xdb730 = _0x4309c4.getBoundingClientRect(), _0x1385d9 = document.getElementById("painel-selecao-ordens")['getBoundingClientRect'](), _0x3035d1 = document.createElement("span");
      _0x3035d1.textContent = '🚀', _0x3035d1.className = "foguete-animado", _0x3035d1.style['fontSize'] = window.getComputedStyle(_0x4309c4).fontSize, _0x3035d1.style.left = _0xdb730['left'] - _0x1385d9.left + 0x5 + 'px', _0x3035d1.style.top = _0xdb730.top - _0x1385d9.top + 0x2 + 'px', document.getElementById("painel-selecao-ordens")['appendChild'](_0x3035d1), setTimeout(() => {
        _0x3035d1['remove']();
      }, 0x9c4);
    }

    function _0x132a29() {
      _0xb11661("Processamento interrompido pelo usuário"), _0x5b5dcd = ![], _0x2786ff("🛑 Todos os processos em andamento foram interrompidos.", "error"), _0x97e034();
      const _0x1b8cbc = document.getElementById("botao-parada-emergencia");
      _0x1b8cbc && (_0x1b8cbc.style.backgroundColor = "#999999", _0x1b8cbc.textContent = "PROCESSAMENTO PARADO", setTimeout(() => {
        _0x1b8cbc.style['backgroundColor'] = '#dc3545', _0x1b8cbc.textContent = "PARAR PROCESSAMENTO";
      }, 0x5dc));
    }

    function _0x13dd7d() {
      localStorage.setItem(_0x3ba919['configStorageKey'], JSON.stringify(_0x2db1a3));
    }

    function _0x483135() {
      const _0x37dd77 = localStorage.getItem(_0x3ba919.configStorageKey);
      _0x37dd77 && (_0x2db1a3 = JSON.parse(_0x37dd77));
    }

    function _0x39b14b() {
      _0xb11661("Iniciando captura de ordens visíveis");
      const _0x48b0be = document['getElementsByTagName']("table");
      let _0x3f3126 = null;
      for (let _0x1416a7 = 0x0; _0x1416a7 < _0x48b0be.length; _0x1416a7++) {
        const _0x2b07bb = _0x48b0be[_0x1416a7].querySelector('tr');
        if (_0x2b07bb && (_0x2b07bb['textContent'] || '').includes("OT Nº")) {
          _0x3f3126 = _0x48b0be[_0x1416a7];
          break;
        }
      }
      if (!_0x3f3126) {
        _0x2786ff("Não foi possível encontrar a tabela de ordens.", 'error');
        return;
      }
      const _0x321ebd = _0x3f3126.querySelectorAll("tr.bgcolor0, tr.bgcolor1, tr.bgcolorOn")
        , _0x463571 = [];
      _0x321ebd.forEach(_0x69cb9b => {
        const _0x18eb65 = _0x69cb9b.cells[0x0];
        if (_0x18eb65) {
          const _0x18c060 = (_0x18eb65['textContent'] || '').replace('+', '').trim();
          _0x18c060 && /^\d+$/ .test(_0x18c060) && _0x463571['push'](_0x18c060);
        }
      });
      if (_0x463571['length'] === 0x0) {
        _0x2786ff('Nenhuma\x20ordem\x20foi\x20encontrada\x20na\x20tabela.', 'info');
        return;
      }
      const _0x801bd8 = _0x463571.filter(_0x237b0a => !_0x2b7552.includes(_0x237b0a))
        , _0x650a60 = _0x801bd8['length']
        , _0x1d80b5 = [...new Set([..._0x2b7552, ..._0x463571])];
      _0x2b7552 = _0x1d80b5, _0x13d195();
      const _0xbd216d = document.getElementById("ordens-input");
      _0xbd216d && (_0xbd216d.value = _0x2b7552.join('\x0a')), _0x5f5540(), _0xbd216d && _0xbd216d.dispatchEvent(new Event("input")), _0x650a60 > 0x0 ? _0x2786ff('✅\x20' + _0x650a60 + " novas ordens adicionadas! Total na lista: " + _0x2b7552.length + '.', "success") : _0x2786ff("ℹ️ Nenhuma ordem nova para adicionar. A lista já está atualizada.", "info");
    }

    function _0x5907ab() {
      const _0x24703a = document.getElementById("ordens-input");
      if (!_0x24703a) return;
      _0x2b7552 = [];
      const _0x32609f = _0x24703a.value.split('\x0a');
      for (const _0x3cd2fc of _0x32609f) {
        const _0x3bd749 = _0x3cd2fc.trim();
        _0x3bd749 && !_0x2b7552.includes(_0x3bd749) && _0x2b7552.push(_0x3bd749);
      }
      _0x13d195(), _0x5f5540(_0x2b7552.length), _0x2786ff("📋 Seleção salva! " + _0x2b7552['length'] + '\x20ordens\x20selecionadas.', 'success');
    }

    function _0x5b9e12() {
      const _0x5752f7 = document.getElementById("ordens-input");
      _0x5752f7 && (_0x5752f7.value = '', _0x5752f7.dispatchEvent(new Event("input"))), _0x2b7552 = [], _0x13d195(), _0x5f5540(), _0x2786ff("🧹 Seleção de ordens limpa com sucesso!", "info");
    }

    function _0x13d195() {
      localStorage.setItem(_0x3ba919.storageKey, JSON.stringify(_0x2b7552));
    }

    function _0x3b5be5() {
      const _0x5e9e79 = localStorage.getItem(_0x3ba919.storageKey);
      _0x5e9e79 && (_0x2b7552 = JSON.parse(_0x5e9e79));
    }

    function _0x5f5540() {
      _0x2029e5 && (_0x2029e5.textContent = "Ordens salvas: " + _0x2b7552.length);
    }

    function _0x56ca07() {
      if (document['getElementById']('painel-progresso-massa')) return;
      GM_addStyle("\n        #painel-progresso-massa {\n            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);\n            width: 500px; background-color: #fff; border-radius: 8px;\n            box-shadow: 0 5px 15px rgba(0,0,0,0.3); z-index: 10003;\n            border: 1px solid #ccc; display: none; flex-direction: column;\n            font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n        }\n        #progresso-header {\n            padding: 15px; background-color: #f7f7f7; border-bottom: 1px solid #ddd;\n            border-top-left-radius: 8px; border-top-right-radius: 8px;\n        }\n        #progresso-header h3 { margin: 0; font-size: 18px; color: #333; }\n        #progresso-body { padding: 20px; }\n        #progresso-status-texto {\n            font-size: 14px; color: #555; margin-bottom: 10px;\n            text-align: center;\n        }\n        #progresso-barra-container {\n            width: 100%; background-color: #e9ecef; border-radius: .25rem;\n            height: 20px; overflow: hidden;\n        }\n        #progresso-barra-valor {\n            height: 100%; width: 0%; background-color: #28a745;\n            transition: width 0.3s ease-in-out; text-align: center;\n            color: white; font-weight: bold; line-height: 20px; font-size: 12px;\n        }\n        #progresso-log {\n            margin-top: 15px; height: 100px; overflow-y: auto;\n            border: 1px solid #ddd; padding: 10px; font-size: 12px;\n            background-color: #f8f9fa; list-style: none; margin-left: 0; padding-left: 10px;\n        }\n        #progresso-log li.error { color: #dc3545; font-weight: bold; }\n        #progresso-footer {\n            padding: 15px; border-top: 1px solid #ddd; text-align: right;\n        }\n        #progresso-botao-fechar {\n            padding: 8px 16px; background-color: #6c757d; color: white;\n            border: none; border-radius: 5px; cursor: pointer;\n        }\n    ");
      const _0x28dfc1 = "\n        <div id=\"painel-progresso-massa\" style=\"display: none;\">\n            <div id=\"progresso-header\"><h3>Processamento em Massa</h3></div>\n            <div id=\"progresso-body\">\n                <div id=\"progresso-status-texto\">Iniciando...</div>\n                <div id=\"progresso-barra-container\"><div id=\"progresso-barra-valor\">0%</div></div>\n                <ul id=\"progresso-log\"></ul>\n            </div>\n            <div id=\"progresso-footer\">\n                <button id=\"progresso-botao-fechar\" disabled>Aguarde</button>\n            </div>\n        </div>\n    ";
      document['body'].insertAdjacentHTML('beforeend', _0x28dfc1), document.getElementById("progresso-botao-fechar")['onclick'] = _0x97e034;
    }

    function _0x4e25b2() {
      const _0x586d37 = document['getElementById']("painel-progresso-massa");
      if (_0x586d37) {
        _0x586d37['style'].display = "flex", document['getElementById']("progresso-status-texto").textContent = 'Iniciando...';
        const _0x428f5d = document.getElementById('progresso-barra-valor');
        _0x428f5d.style.width = '0%', _0x428f5d.textContent = '0%', document['getElementById']("progresso-log").innerHTML = '';
        const _0x276a4f = document['getElementById']("progresso-botao-fechar");
        _0x276a4f.disabled = !![], _0x276a4f.textContent = "Aguarde", _0x276a4f.style.backgroundColor = "#6c757d";
      }
    }

    function _0x43b9e6(_0x429346, _0x2e2d34, _0x41b278 = '', _0x593b18 = ![]) {
      if (_0x2e2d34 === 0x0) return;
      const _0x1ae0cc = Math['round'](_0x429346 / _0x2e2d34 * 0x64);
      document['getElementById']("progresso-status-texto")['textContent'] = "Processando " + _0x429346 + '\x20de\x20' + _0x2e2d34 + " ordens...";
      const _0x3962c3 = document.getElementById("progresso-barra-valor");
      _0x3962c3.style['width'] = _0x1ae0cc + '%', _0x3962c3['textContent'] = _0x1ae0cc + '%';
      if (_0x41b278) {
        const _0x4cbd7d = document.getElementById("progresso-log")
          , _0x125e4e = document.createElement('li');
        _0x125e4e.textContent = _0x41b278;
        if (_0x593b18) _0x125e4e.className = 'error';
        _0x4cbd7d.appendChild(_0x125e4e), _0x4cbd7d.scrollTop = _0x4cbd7d['scrollHeight'];
      }
    }

    function _0x1dbb42(_0x13cd57, _0x2802c1 = 0x5dc) {
      document['getElementById']("progresso-status-texto")['textContent'] = _0x13cd57;
      const _0x45c888 = document.getElementById('progresso-botao-fechar');
      _0x45c888.textContent = "Concluído!", _0x45c888.style.backgroundColor = "#28a745", _0x45c888.disabled = !![], setTimeout(() => {
        _0x97e034();
      }, _0x2802c1);
    }

    function _0x97e034() {
      const _0xa860f9 = document.getElementById("painel-progresso-massa");
      if (_0xa860f9) _0xa860f9.style.display = 'none';
    }
    function _tfHoje() {
      const d = new Date();
      return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + d.getFullYear();
    }
    function _tfEsperar(ms) {
      return new Promise((ok) => setTimeout(ok, ms));
    }
    async function _tfBaixarPagina(url) {
      const resp = await fetch(url, { credentials: 'include' });
      if (!resp.ok) throw new Error('O TITAN respondeu ' + resp.status + ' ao consultar a listagem.');
      const bytes = await resp.arrayBuffer();
      return new DOMParser().parseFromString(new TextDecoder('windows-1252').decode(bytes), 'text/html');
    }
    function _tfLinhasDoDoc(doc) {
      const out = [];
      doc.querySelectorAll('#resultado table tr').forEach((tr) => {
        const m = /\(this,\s*\'(\d+)\'/.exec(tr.getAttribute('onclick') || '');
        if (m) out.push({ id: m[1], texto: _tfNormalizar(tr.textContent) });
      });
      return out;
    }
    async function _tfPrimeiroPedidoDaLista() {
      const doc = await _tfBaixarPagina('/albatros/admin.php?SESID=' + _0x2012f5() + '&n1=200&n2=202&in=20&seccion=titan_trabajos_pedidos');
      const linhas = _tfLinhasDoDoc(doc);
      return linhas.length ? linhas[0] : null;
    }
    async function _tfCriarPedidoIdentificado(item, idAntes) {
      await _0x4158d4({ equipamentoId: item.equipamentoId, descricao: item.descricao, tallerId: item.taller, tipoTrabalhoId: item.tipoTrabalho, propositoId: item.proposito, dataRequerida: _tfHoje() }, 1, 1);
      const marcaEquip = _tfNormalizar(item.tag || item.nome);
      const marcaDesc = _tfNormalizar(item.descricao).slice(0, 30);
      for (let t = 0; t < 4; t++) {
        const novo = await _tfPrimeiroPedidoDaLista();
        if (novo && Number(novo.id) > Number(idAntes || 0) && novo.texto.includes(marcaEquip) && novo.texto.includes(marcaDesc)) return novo.id;
        await _tfEsperar(700);
      }
      throw new Error('O Pedido foi salvo, mas não apareceu na 1ª linha da listagem de Pedidos com este equipamento e descrição (outro Pedido criado ao mesmo tempo, ou filtro da tela). Nada mais foi feito com ele.');
    }
    function _tfEmitirCapturandoOrdem(pedidoId, dados) {
      return new Promise((resolver, rejeitar) => {
        const fr = document.createElement('iframe');
        fr.style.display = 'none';
        const limpar = () => document.body.contains(fr) && document.body.removeChild(fr);
        let n = 0;
        const passo1 = setInterval(() => {
          n++;
          try {
            const d = fr.contentDocument;
            if (d && d.readyState === 'complete' && d.getElementById('formDatos')) {
              clearInterval(passo1);
              const href = fr.contentWindow.location.href;
              const m = /[?&]id_reg=(\d+)/.exec(href);
              if (!/seccion=titan_trabajos_ordenes/.test(href) || !/[?&]op=m(&|$)/.test(href) || !m) {
                limpar();
                return rejeitar(new Error('A emissão não abriu o formulário de uma Ordem nova. Nada foi salvo.'));
              }
              const ordemId = m[1];
              d.getElementById('key__backlog_categorias__id').value = dados.estadoPlan;
              d.getElementById('plan_de_trabajo').value = 'N/A';
              d.getElementById('repuestos').value = 'N/A';
              d.getElementById('materiales').value = 'N/A';
              d.getElementById('herramientas').value = 'N/A';
              if (dados.especialidades.length > 0) {
                const esp = dados.especialidades[0], sel = d.getElementById('key__especialidades__id1');
                if (sel) {
                  sel.value = esp.id;
                  sel.dispatchEvent(new Event('change'));
                  d.getElementById('especialidad1_rrhh_cantidad').value = esp.pessoas;
                  d.getElementById('especialidad1_hh_rrhh').value = esp.horas;
                }
              }
              if (typeof d.defaultView.actualizar_totales_especialidades === 'function') d.defaultView.actualizar_totales_especialidades();
              let k = 0;
              const passo2 = setInterval(() => {
                k++;
                try {
                  const d2 = fr.contentDocument;
                  if (d2 && d2.readyState === 'complete' && !d2.getElementById('formDatos')) {
                    clearInterval(passo2);
                    const msg = d2.getElementById('informacion_mensaje');
                    const ok = msg && /modificad/i.test(msg.textContent || '');
                    limpar();
                    if (ok) resolver(ordemId);
                    else rejeitar(new Error('Ordem ' + ordemId + ' aberta, mas o TITAN não confirmou a gravação da emissão.'));
                  } else if (k > 120) {
                    clearInterval(passo2);
                    limpar();
                    rejeitar(new Error('Timeout: a emissão da Ordem ' + ordemId + ' não confirmou.'));
                  }
                } catch (e) {
                  clearInterval(passo2);
                  limpar();
                  rejeitar(e);
                }
              }, 250);
              d.getElementById('bEnviar').click();
              return;
            }
            if (d && d.readyState === 'complete' && fr.contentWindow.location.href !== 'about:blank' && !/action=emitir_ot/.test(fr.contentWindow.location.href)) {
              clearInterval(passo1);
              limpar();
              return rejeitar(new Error('A emissão não abriu o formulário de uma Ordem nova. Nada foi salvo.'));
            }
            if (n > 120) {
              clearInterval(passo1);
              limpar();
              rejeitar(new Error('Timeout: o formulário de emissão não apareceu.'));
            }
          } catch (e) {
            clearInterval(passo1);
            limpar();
            rejeitar(e);
          }
        }, 250);
        fr.onerror = () => { clearInterval(passo1); limpar(); rejeitar(new Error('Falha de rede ao abrir a emissão.')); };
        document.body.appendChild(fr);
        fr.src = '/albatros/admin.php?SESID=' + _0x2012f5() + '&n1=200&n2=202&in=20&seccion=titan_trabajos_pedidos&show=accion&action=emitir_ot&id_reg=' + pedidoId;
      });
    }
    function _tfEtapasFluxo() {
      return [
        { id: 'criar', nome: 'Criar Pedido' },
        { id: 'emitir', nome: 'Emitir Ordem' },
        { id: 'maodeobra', nome: 'Mão de obra' },
        { id: 'ativar', nome: 'Ativar' },
        { id: 'executar', nome: 'Executar' },
        { id: 'fechar', nome: 'Fechar' },
      ];
    }
    function _tfDadosEmissaoDoPainel() {
      const v = (id) => ((document.getElementById(id) || {}).value || '');
      const dados = { estadoPlan: v('emissao-estado-plan'), especialidades: [] };
      if (v('esp-id-1')) dados.especialidades.push({ id: v('esp-id-1'), pessoas: v('esp-pessoas-1') || '0', horas: v('esp-horas-1') || '0' });
      return dados;
    }
    function _tfDadosExecucaoSalvos() {
      const g = (k, p) => localStorage.getItem(k) || p;
      return { problema: g('exec_problema', 'N/A'), causa: g('exec_causa', 'N/A'), acao: g('exec_acao', 'N/A'), recomendacao: g('exec_recomendacao', 'N/A'), recursos: g('exec_recursos', '1'), duracao: g('exec_duracao', '1'), total: g('exec_horas', '1') };
    }
    async function _tfRodarFluxo(itens, ate, calificacao, aoMudar) {
      const etapas = _tfEtapasFluxo();
      const ultima = etapas.findIndex((e) => e.id === ate);
      if (_tfTela() !== 'pedidos') {
        _0x2786ff('O Fluxo completo começa criando Pedidos: use na tela de Pedidos. Nada foi feito.', 'error', 0x1770);
        throw new Error('Fluxo completo fora da tela de Pedidos.');
      }
      if (ultima < 0) throw new Error('Etapa final desconhecida: ' + ate);
      if (!itens.length || itens.length > 3) throw new Error('O Fluxo completo roda de 1 a 3 itens por vez.');
      if (ultima >= 2 && !(_0x2db1a3.tecnicos || []).some((t) => t && String(t).trim())) throw new Error('Nenhum técnico configurado para Mão de obra (configure na tela de Ordens).');
      if (ultima >= 5 && !calificacao) throw new Error('Escolha a Calificación para fechar.');
      if (_0x5b5dcd) throw new Error('Já existe um processamento em andamento.');
      const sesid = _0x2012f5();
      const dadosEmissao = _tfDadosEmissaoDoPainel();
      const dadosExec = _tfDadosExecucaoSalvos();
      const resultado = itens.map(() => ({ pedido: null, ordem: null, feitas: [], erro: null, etapaErro: null }));
      let interrompido = false;
      _0x5b5dcd = true;
      try {
        let idAntes = null;
        const primeiro = await _tfPrimeiroPedidoDaLista();
        idAntes = primeiro ? primeiro.id : '0';
        for (let i = 0; i < itens.length; i++) {
          const it = itens[i], r = resultado[i];
          for (let e = 0; e <= ultima; e++) {
            if (!_0x5b5dcd) { interrompido = true; break; }
            const etapa = etapas[e].id;
            aoMudar && aoMudar(i, etapa, 'andamento', r);
            try {
              if (etapa === 'criar') { r.pedido = await _tfCriarPedidoIdentificado(it, idAntes); idAntes = r.pedido; }
              else if (etapa === 'emitir') r.ordem = await _tfEmitirCapturandoOrdem(r.pedido, dadosEmissao);
              else if (etapa === 'maodeobra') await _0x5a90c8(r.ordem, sesid);
              else if (etapa === 'ativar') await _0x1ca2cd(r.ordem, sesid, '200', '202', '30', _tfHoje());
              else if (etapa === 'executar') await _0x368aea('/albatros/admin.php?SESID=' + sesid + '&n1=200&n2=202&in=30&seccion=titan_trabajos_ordenes&subseccion=terminar&op=m&id_reg=' + r.ordem, dadosExec);
              else if (etapa === 'fechar') await _0x2ab23f(r.ordem, calificacao);
              r.feitas.push(etapa);
              aoMudar && aoMudar(i, etapa, 'ok', r);
            } catch (err) {
              r.erro = (err && err.message) || String(err);
              r.etapaErro = etapa;
              aoMudar && aoMudar(i, etapa, 'erro', r);
              break;
            }
          }
          if (interrompido) break;
        }
      } finally {
        _0x5b5dcd = false;
      }
      const rotulo = (r, k) => (r.pedido || ('item ' + (k + 1))) + (r.ordem ? ' → ' + r.ordem : '');
      const nomeEtapa = (id) => (etapas.find((x) => x.id === id) || {}).nome || id;
      _tfHistGravar({
        quando: new Date().toISOString(),
        operacao: 'Fluxo completo (até ' + etapas[ultima].nome + ')',
        tela: 'pedidos',
        semRefazer: true,
        ids: resultado.map(rotulo),
        falhas: resultado.map((r, k) => r.erro ? { id: rotulo(r, k), motivo: nomeEtapa(r.etapaErro) + ': ' + r.erro } : null).filter(Boolean),
        interrompido,
        ok: interrompido ? null : resultado.filter((r) => !r.erro).map(rotulo),
      });
      return { resultado, interrompido };
    }
    function _tfItensDoTexto(texto) {
      const t = String(texto || '').trim();
      let brutos, erros = [];
      if (t.startsWith('[')) {
        try { brutos = JSON.parse(t); } catch (e) { return { itens: [], erros: ['JSON inválido: ' + e.message] }; }
        if (!Array.isArray(brutos)) return { itens: [], erros: ['O JSON precisa ser uma lista [ ... ].'] };
      } else {
        const r = _tfPlanilhaParaPedidos(t, _tfOpcoesDoPainel());
        brutos = r.pedidos;
        erros = r.erros;
      }
      const propPainel = ((document.getElementById('pedido-proposito') || {}).value || '');
      const itens = [];
      brutos.forEach((b, k) => {
        const alvo = _0x360915(b.equipamento);
        const eq = _0x34e176.find((x) => _0x360915(x.nome) === alvo || _0x360915(x.tag) === alvo);
        const n = k + 1;
        if (!eq) { erros.push('Item ' + n + ': equipamento não encontrado no TITAN: "' + b.equipamento + '".'); return; }
        const descricao = (String(b.descricao || '') + ' ' + (b.codigoFalha || '')).trim();
        const proposito = String(b.proposito || propPainel || '');
        if (!descricao) { erros.push('Item ' + n + ': descrição vazia.'); return; }
        if (!b.taller || !b.tipoTrabalho || !proposito) { erros.push('Item ' + n + ': falta oficina, tipo ou propósito.'); return; }
        itens.push({ equipamentoId: eq.id, tag: eq.tag, nome: eq.nome, descricao, taller: String(b.taller), tipoTrabalho: String(b.tipoTrabalho), proposito });
      });
      if (itens.length > 3) erros.push('São ' + itens.length + ' itens: nesta versão o Fluxo completo roda no máximo 3 por vez.');
      return { itens, erros };
    }
    function _tfAbrirFluxo() {
      const etapas = _tfEtapasFluxo();
      const tecnicos = (_0x2db1a3.tecnicos || []).filter((t) => t && String(t).trim()).length;
      const exec = _tfDadosExecucaoSalvos();
      const html = '<p style="margin:0 0 6px 0">Cole a <b>planilha</b> (com cabeçalho) ou o <b>JSON da OS MARINE</b>. Máximo de <b>3 itens</b> por rodada. Cada item roda em série; se uma etapa falhar, aquele item para ali.</p>'
        + '<textarea id="tf-fluxo-texto" style="width:100%;height:110px;box-sizing:border-box;font-family:monospace;font-size:12px"></textarea>'
        + '<div style="display:flex;gap:12px;flex-wrap:wrap;margin:8px 0">'
        + '<label>Ir até: <select id="tf-fluxo-ate">' + etapas.map((e) => '<option value="' + e.id + '"' + (e.id === 'ativar' ? ' selected' : '') + '>' + e.nome + '</option>').join('') + '</select></label>'
        + '<label>Calificación (para fechar): <select id="tf-fluxo-calif"><option value="">-- Selecione --</option><option value="3">Bueno</option><option value="4">Muy bueno</option><option value="5">Excelente</option><option value="6">Sin calificar</option></select></label>'
        + '</div>'
        + '<div style="font-size:12px;color:#555;margin-bottom:6px">Usa o que já está configurado: técnicos da Mão de obra (<b>' + tecnicos + '</b>, editáveis na tela de Ordens) · dados de execução (problema: ' + _tfEscapar(exec.problema) + ', horas: ' + _tfEscapar(exec.total) + ') · estado do plano e especialidade da Emissão (campos desta aba).</div>'
        + '<div id="tf-fluxo-resultado"></div>';
      let itens = null, confirmarFechar = false, rodando = false;
      const corpo = () => document.getElementById('tf-fluxo-resultado');
      const ate = () => document.getElementById('tf-fluxo-ate').value;
      const desenhar = (lista) => {
        const ult = etapas.findIndex((e) => e.id === ate());
        corpo().innerHTML = '<table id="tf-fluxo-tabela" style="width:100%;border-collapse:collapse;font-size:12px"><tr style="background:#f2f3f5"><th style="text-align:left;padding:4px">Equipamento</th><th style="text-align:left;padding:4px">Descrição</th>'
          + etapas.slice(0, ult + 1).map((e) => '<th style="padding:4px">' + e.nome + '</th>').join('') + '</tr>'
          + lista.map((it, i) => '<tr data-i="' + i + '" style="border-bottom:1px solid #eee"><td style="padding:4px">' + _tfEscapar(it.tag + ' — ' + it.nome) + '</td><td style="padding:4px">' + _tfEscapar(it.descricao) + '</td>'
            + etapas.slice(0, ult + 1).map((e) => '<td class="tf-etapa" data-etapa="' + e.id + '" style="padding:4px;text-align:center;color:#999">·</td>').join('') + '</tr>').join('') + '</table>';
      };
      const marcar = (i, etapa, estado, r) => {
        const td = document.querySelector('#tf-fluxo-tabela tr[data-i="' + i + '"] td[data-etapa="' + etapa + '"]');
        if (!td) return;
        if (estado === 'andamento') { td.textContent = '⏳'; td.style.color = '#333'; }
        if (estado === 'ok') { td.textContent = etapa === 'criar' ? '✅ ' + r.pedido : (etapa === 'emitir' ? '✅ ' + r.ordem : '✅'); td.style.color = '#080'; }
        if (estado === 'erro') { td.textContent = '❌'; td.title = r.erro; td.style.color = '#c00'; }
      };
      const conferir = async (_f, caixa) => {
        if (rodando) return;
        confirmarFechar = false;
        caixa.querySelector('#tf-fluxo-rodar').textContent = 'Executar fluxo';
        if (!_0x34e176.length) {
          try { await _0x3a1f53(); } catch (e) { corpo().innerHTML = '<p style="color:#c00">Falha ao carregar a lista de equipamentos: ' + _tfEscapar(e.message) + '</p>'; return; }
        }
        const r = _tfItensDoTexto(caixa.querySelector('#tf-fluxo-texto').value);
        if (r.erros.length) {
          itens = null;
          corpo().innerHTML = '<div id="tf-fluxo-erros" style="padding:8px;background:#f8d7da;border:1px solid #f5c2c7;border-radius:4px"><b>Corrija antes de rodar:</b><ul style="margin:4px 0 0 18px;padding:0">' + r.erros.map((e) => '<li>' + _tfEscapar(e) + '</li>').join('') + '</ul></div>';
          return;
        }
        itens = r.itens;
        desenhar(itens);
      };
      const rodar = async (_f, caixa) => {
        if (rodando) return;
        if (!itens) { _0x2786ff('Clique em Conferir primeiro.', 'warning'); return; }
        const botao = caixa.querySelector('#tf-fluxo-rodar');
        if (ate() === 'fechar' && !confirmarFechar) {
          confirmarFechar = true;
          botao.textContent = 'Confirmar: criar e FECHAR ' + itens.length + ' (irreversível)';
          return;
        }
        rodando = true;
        botao.disabled = true;
        caixa.querySelector('#tf-fluxo-conferir').disabled = true;
        desenhar(itens);
        try {
          const { resultado, interrompido } = await _tfRodarFluxo(itens, ate(), document.getElementById('tf-fluxo-calif').value, marcar);
          const ok = resultado.filter((x) => !x.erro).length;
          const resumo = document.createElement('p');
          resumo.id = 'tf-fluxo-resumo';
          resumo.style.margin = '8px 0 0 0';
          resumo.innerHTML = '<b>' + ok + ' de ' + resultado.length + '</b> concluídos' + (interrompido ? ' (interrompido)' : '') + '. '
            + resultado.map((x) => x.erro ? '<br>❌ ' + _tfEscapar((x.pedido || 'sem Pedido') + (x.ordem ? ' → ' + x.ordem : '')) + ': ' + _tfEscapar(x.erro) : '').join('')
            + '<br><small>Tudo registrado no Histórico (🕘).</small>';
          corpo().appendChild(resumo);
        } catch (e) {
          _0x2786ff(e.message, 'error', 0x1770);
          corpo().insertAdjacentHTML('beforeend', '<p id="tf-fluxo-resumo" style="color:#c00">' + _tfEscapar(e.message) + '</p>');
        } finally {
          rodando = false;
          botao.disabled = false;
          caixa.querySelector('#tf-fluxo-conferir').disabled = false;
          itens = null;
          botao.textContent = 'Executar fluxo';
        }
      };
      const promessa = _tfModal('⚙️ Fluxo completo', html, [
        { id: 'tf-fluxo-fechar', texto: 'Fechar janela', valor: null },
        { id: 'tf-fluxo-conferir', texto: 'Conferir', cor: '#3366ff', acao: conferir },
        { id: 'tf-fluxo-rodar', texto: 'Executar fluxo', cor: '#28a745', acao: rodar },
      ]);
      const invalidar = () => { if (!rodando) { itens = null; confirmarFechar = false; const b = document.getElementById('tf-fluxo-rodar'); if (b) b.textContent = 'Executar fluxo'; } };
      document.getElementById('tf-fluxo-texto').addEventListener('input', invalidar);
      document.getElementById('tf-fluxo-ate').addEventListener('change', invalidar);
      return promessa;
    }
    function _tfTela() {
      const s = new URLSearchParams(location.search).get('seccion');
      return s === 'titan_trabajos_pedidos' ? 'pedidos' : (s === 'titan_trabajos_ordenes' ? 'ordens' : 'outra');
    }
    function _tfNomeTela(t) {
      return t === 'pedidos' ? 'Pedidos' : (t === 'ordens' ? 'Ordens' : 'outra tela');
    }
    function _tfEscapar(s) {
      return String(s == null ? '' : s).replace(/[&<>\"\']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
    }
    function _tfNormalizar(s) {
      return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
    }
    function _tfLinhasDaTela() {
      const mapa = new Map();
      document.querySelectorAll('#resultado table tr').forEach((tr) => {
        const c = tr.cells;
        if (!c || !c.length) return;
        const id = (c[0].textContent || '').replace('+', '').trim();
        if (!/^\d+$/.test(id)) return;
        const textos = [];
        for (let i = 1; i < c.length && textos.length < 4; i++) {
          const x = (c[i].textContent || '').replace(/\s+/g, ' ').trim();
          if (x) textos.push(x.length > 90 ? x.slice(0, 90) + '…' : x);
        }
        mapa.set(id, textos);
      });
      return mapa;
    }
    function _tfModal(titulo, corpoHtml, botoes) {
      return new Promise((resolver) => {
        const fundo = document.createElement('div');
        fundo.id = 'tf-modal';
        Object.assign(fundo.style, { position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.55)', zIndex: '100000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' });
        const caixa = document.createElement('div');
        Object.assign(caixa.style, { background: '#fff', borderRadius: '8px', padding: '18px 20px', width: 'min(860px, 92vw)', maxHeight: '82vh', display: 'flex', flexDirection: 'column', boxShadow: '0 6px 24px rgba(0,0,0,0.35)' });
        caixa.innerHTML = '<h3 style="margin:0 0 10px 0;font-size:18px;color:#222">' + _tfEscapar(titulo) + '</h3>'
          + '<div class="tf-corpo" style="overflow:auto;flex:1;font-size:13px;color:#333">' + corpoHtml + '</div>'
          + '<div class="tf-botoes" style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px"></div>';
        const fechar = (v) => { fundo.remove(); resolver(v); };
        for (const b of botoes) {
          const el = document.createElement('button');
          el.id = b.id;
          el.textContent = b.texto;
          Object.assign(el.style, { padding: '8px 16px', border: 'none', borderRadius: '5px', color: '#fff', fontWeight: 'bold', cursor: 'pointer', background: b.cor || '#6c757d' });
          el.onclick = () => (b.acao ? b.acao(fechar, caixa) : fechar(b.valor));
          caixa.querySelector('.tf-botoes').appendChild(el);
        }
        fundo.appendChild(caixa);
        document.body.appendChild(fundo);
      });
    }
    function _tfPrevisualizar(operacao, ids) {
      const tela = _tfTela();
      const linhas = _tfLinhasDaTela();
      const fora = ids.filter((id) => !linhas.has(id));
      let html = '<p style="margin:0 0 8px 0"><b>' + _tfEscapar(operacao) + '</b> em <b>' + ids.length + '</b> '
        + (tela === 'pedidos' ? 'pedido(s)' : 'ordem(ns)') + ' — tela de <b>' + _tfNomeTela(tela) + '</b>.</p>';
      if (fora.length) {
        html += '<p id="tf-prev-aviso" style="margin:0 0 8px 0;padding:8px;background:#fff3cd;border:1px solid #ffc107;border-radius:4px">⚠️ '
          + fora.length + ' número(s) não aparecem na listagem desta tela. Confira antes de continuar: ' + _tfEscapar(fora.join(', ')) + '</p>';
      }
      html += '<table id="tf-prev-tabela" style="width:100%;border-collapse:collapse">';
      for (const id of ids) {
        const t = linhas.get(id);
        html += '<tr data-id="' + _tfEscapar(id) + '" style="border-bottom:1px solid #eee' + (t ? '' : ';background:#fff3cd') + '">'
          + '<td style="padding:4px 6px;font-weight:bold;white-space:nowrap">' + _tfEscapar(id) + '</td>'
          + '<td style="padding:4px 6px">' + (t ? _tfEscapar(t.join(' · ')) : '<i>não está nesta tela</i>') + '</td></tr>';
      }
      html += '</table>';
      return _tfModal('Conferir antes de executar', html, [
        { id: 'tf-prev-voltar', texto: 'Voltar', valor: false },
        { id: 'tf-prev-continuar', texto: 'Continuar com ' + ids.length, valor: true, cor: '#dc3545' },
      ]);
    }
    function _tfHistLer() {
      try { return JSON.parse(localStorage.getItem('titanflow_historico') || '[]'); } catch (_e) { return []; }
    }
    function _tfHistGravar(entrada) {
      const h = _tfHistLer();
      h.unshift(entrada);
      try { localStorage.setItem('titanflow_historico', JSON.stringify(h.slice(0, 100))); } catch (_e) {}
    }
    async function _tfExecutarRegistrando(operacao, ids, executar) {
      const falhas = [];
      const errOriginal = console.error;
      console.error = function (...args) {
        try {
          const m = typeof args[0] === 'string' ? /^Falha ao .*?(\d+)\s*:\s*$/.exec(args[0]) : null;
          if (m) falhas.push({ id: m[1], motivo: args[1] && args[1].message ? args[1].message : String(args[1] == null ? '' : args[1]) });
        } catch (_e) {}
        return errOriginal.apply(this, args);
      };
      let terminou = false, viuRodando = false, interrompido = false, erro = null;
      const vigia = setInterval(() => {
        if (_0x5b5dcd) viuRodando = true;
        else if (viuRodando && !terminou) interrompido = true;
      }, 100);
      try {
        await executar();
      } catch (e) {
        erro = e;
      } finally {
        terminou = true;
        clearInterval(vigia);
        console.error = errOriginal;
      }
      if (viuRodando || falhas.length) {
        const idsFalha = new Set(falhas.map((f) => f.id));
        _tfHistGravar({
          quando: new Date().toISOString(), operacao, tela: _tfTela(), ids, falhas, interrompido,
          ok: interrompido ? null : ids.filter((id) => !idsFalha.has(id)),
        });
        if (falhas.length) _0x2786ff('🕘 ' + falhas.length + ' falha(s) registrada(s) no Histórico, com o motivo de cada uma.', 'warning', 0x1b58);
      }
      if (erro) throw erro;
    }
    function _tfSelecionarIds(ids) {
      _0x2b7552 = [...ids];
      _0x13d195();
      const campo = document.getElementById('ordens-input');
      if (campo) {
        campo.value = _0x2b7552.join('\n');
        campo.dispatchEvent(new Event('input'));
      }
      _0x5f5540();
    }
    function _tfExportarHistorico() {
      const h = _tfHistLer();
      const linhas = [['quando', 'operacao', 'tela', 'numero', 'resultado', 'motivo']];
      for (const e of h) {
        const motivoPor = new Map(e.falhas.map((f) => [f.id, f.motivo]));
        for (const id of e.ids) {
          const res = motivoPor.has(id) ? 'falhou' : (e.interrompido ? 'nao confirmado (interrompido)' : 'ok');
          linhas.push([e.quando, e.operacao, e.tela, id, res, motivoPor.get(id) || '']);
        }
      }
      const csv = linhas.map((l) => l.map((v) => '"' + String(v).replace(/\"/g, '""') + '"').join(';')).join('\r\n');
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }));
      a.download = 'titansystem-historico-' + new Date().toISOString().slice(0, 10) + '.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
    function _tfAbrirHistorico() {
      const h = _tfHistLer(), tela = _tfTela();
      let html = h.length ? '' : '<p>Nenhuma operação registrada ainda.</p>';
      h.forEach((e, i) => {
        const okTxt = e.interrompido ? '<b style="color:#b36b00">interrompida</b>' : (e.ok ? e.ok.length + ' sem erro' : '');
        html += '<div class="tf-hist-item" style="border:1px solid #ddd;border-radius:6px;padding:8px 10px;margin-bottom:8px">'
          + '<div><b>' + _tfEscapar(e.operacao) + '</b> · ' + _tfNomeTela(e.tela) + ' · ' + _tfEscapar(new Date(e.quando).toLocaleString('pt-BR')) + '</div>'
          + '<div style="color:#555">' + e.ids.length + ' selecionado(s) · ' + okTxt + ' · <span style="color:' + (e.falhas.length ? '#c00' : '#080') + '">' + e.falhas.length + ' falha(s)</span></div>';
        if (e.falhas.length) {
          html += '<ul style="margin:6px 0 4px 18px;padding:0">' + e.falhas.map((f) => '<li><b>' + _tfEscapar(f.id) + '</b>: ' + _tfEscapar(f.motivo) + '</li>').join('') + '</ul>';
          html += e.tela === tela && !e.semRefazer
            ? '<button class="tf-hist-refazer" data-i="' + i + '" style="padding:5px 10px;border:none;border-radius:4px;background:#ffaa00;color:#fff;font-weight:bold;cursor:pointer">Selecionar só estas ' + e.falhas.length + ' falhas</button>'
            : '<small style="color:#888">Para refazer, abra a tela de ' + _tfNomeTela(e.tela) + '.</small>';
        }
        html += '</div>';
      });
      const promessa = _tfModal('🕘 Histórico de operações', html, [
        { id: 'tf-hist-exportar', texto: 'Exportar CSV', cor: '#3366ff', acao: () => _tfExportarHistorico() },
        { id: 'tf-hist-fechar', texto: 'Fechar', valor: null },
      ]);
      document.querySelectorAll('#tf-modal .tf-hist-refazer').forEach((b) => {
        b.onclick = () => {
          const e = h[Number(b.dataset.i)];
          _tfSelecionarIds(e.falhas.map((f) => f.id));
          _0x2786ff('📋 ' + e.falhas.length + ' item(ns) que falharam selecionado(s). Confira e rode a operação de novo.', 'info');
          const m = document.getElementById('tf-modal');
          if (m) m.remove();
        };
      });
      return promessa;
    }
    function _tfInstalarBotaoHistorico() {
      if (document.getElementById('tf-btn-historico')) return;
      const abaSelecao = document.getElementById('titanflow-btn-selecao');
      if (!abaSelecao || !abaSelecao.parentElement) {
        if (!_tfInstalarBotaoHistorico.tentou) {
          _tfInstalarBotaoHistorico.tentou = true;
          setTimeout(_tfInstalarBotaoHistorico, 500);
        }
        return;
      }
      const b = document.createElement('button');
      b.id = 'tf-btn-historico';
      b.title = 'Histórico das operações em massa';
      b.textContent = '🕘 Histórico';
      b.textContent = '🕘';
      Object.assign(b.style, { flex: '0 0 auto', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', padding: '8px 10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' });
      b.onclick = () => _tfAbrirHistorico();
      abaSelecao.parentElement.appendChild(b);
    }
    function _tfPlanilhaParaPedidos(texto, opcoes) {
      const linhas = String(texto || '').replace(/\r/g, '').split('\n').filter((l) => l.trim() !== '');
      if (linhas.length < 2) return { pedidos: [], erros: ['Cole a planilha com a linha de cabeçalho e pelo menos uma linha de dados.'] };
      const sep = linhas[0].includes('\t') ? '\t' : (linhas[0].includes(';') ? ';' : ',');
      const cab = linhas[0].split(sep).map(_tfNormalizar);
      const acha = (nomes) => cab.findIndex((c) => nomes.includes(c));
      const col = {
        equipamento: acha(['equipamento', 'tag', 'equipo']),
        descricao: acha(['descricao', 'descripcion', 'problema']),
        oficina: acha(['oficina', 'taller']),
        tipo: acha(['tipo', 'tipo de trabalho', 'tipo trabalho', 'tipo de trabajo']),
        proposito: acha(['proposito']),
        codigo: acha(['codigo', 'codigo de falha', 'codigo falha']),
      };
      const erros = [];
      if (col.equipamento < 0) erros.push('Falta a coluna "equipamento" (ou "tag").');
      if (col.descricao < 0) erros.push('Falta a coluna "descricao".');
      if (erros.length) return { pedidos: [], erros };
      const resolver = (campo, bruto, n) => {
        const o = opcoes[campo];
        const v = String(bruto == null ? '' : bruto).trim();
        if (!v) return o.atual || '';
        const porValor = o.lista.find((x) => x.valor === v);
        if (porValor) return porValor.valor;
        const alvo = _tfNormalizar(v);
        const porTexto = o.lista.find((x) => _tfNormalizar(x.texto) === alvo);
        if (porTexto) return porTexto.valor;
        erros.push('Linha ' + n + ': ' + o.rotulo + ' "' + v + '" não existe na lista do TITAN.');
        return null;
      };
      const pedidos = [];
      linhas.slice(1).forEach((l, k) => {
        const n = k + 2;
        const c = l.split(sep);
        const pega = (i) => (i >= 0 ? (c[i] || '').trim() : '');
        const equipamento = pega(col.equipamento), descricao = pega(col.descricao);
        if (!equipamento) { erros.push('Linha ' + n + ': equipamento vazio.'); return; }
        if (!descricao) { erros.push('Linha ' + n + ': descrição vazia.'); return; }
        const taller = resolver('taller', pega(col.oficina), n);
        const tipo = resolver('tipo', pega(col.tipo), n);
        const proposito = resolver('proposito', pega(col.proposito), n);
        if (taller === null || tipo === null || proposito === null) return;
        if (!taller) { erros.push('Linha ' + n + ': sem oficina (preencha a coluna ou escolha uma no painel).'); return; }
        if (!tipo) { erros.push('Linha ' + n + ': sem tipo de trabalho (preencha a coluna ou escolha um no painel).'); return; }
        const p = { equipamento, descricao, taller, tipoTrabalho: tipo };
        if (proposito) p.proposito = proposito;
        const cod = pega(col.codigo);
        if (cod) p.codigoFalha = cod;
        pedidos.push(p);
      });
      return { pedidos, erros };
    }
    function _tfOpcoesDoPainel() {
      const ler = (id, rotulo) => {
        const s = document.getElementById(id);
        return {
          rotulo, atual: s ? s.value : '',
          lista: s ? [...s.options].filter((o) => o.value).map((o) => ({ valor: o.value, texto: o.textContent.trim() })) : [],
        };
      };
      return { taller: ler('pedido-taller', 'Oficina'), tipo: ler('pedido-tipo-trabalho', 'Tipo de trabalho'), proposito: ler('pedido-proposito', 'Propósito') };
    }
    function _tfAbrirPlanilha() {
      const html = '<p style="margin:0 0 6px 0">Copie as linhas do Excel <b>com o cabeçalho</b> e cole abaixo. Obrigatórias: <b>equipamento</b> (nome ou TAG) e <b>descricao</b>. '
        + 'Opcionais: <b>oficina</b>, <b>tipo</b>, <b>proposito</b>, <b>codigo</b> — pelo nome que aparece no TITAN ou pelo número. Coluna vazia usa o que está escolhido no painel.</p>'
        + '<textarea id="tf-planilha-texto" style="width:100%;height:170px;box-sizing:border-box;font-family:monospace;font-size:12px"></textarea>'
        + '<div id="tf-planilha-resultado" style="margin-top:8px"></div>';
      let convertido = null;
      const conferir = (_f, caixa) => {
        const opcoes = _tfOpcoesDoPainel();
        const r = _tfPlanilhaParaPedidos(caixa.querySelector('#tf-planilha-texto').value, opcoes);
        const nome = (campo, v) => { const o = opcoes[campo].lista.find((x) => x.valor === v); return o ? o.texto : (v || ''); };
        let out = '';
        if (r.erros.length) {
          out += '<div id="tf-planilha-erros" style="padding:8px;background:#f8d7da;border:1px solid #f5c2c7;border-radius:4px;margin-bottom:8px"><b>Corrija antes de criar:</b><ul style="margin:4px 0 0 18px;padding:0">'
            + r.erros.map((e) => '<li>' + _tfEscapar(e) + '</li>').join('') + '</ul></div>';
        }
        if (r.pedidos.length) {
          out += '<table id="tf-planilha-tabela" style="width:100%;border-collapse:collapse"><tr style="background:#f2f3f5"><th style="text-align:left;padding:4px">Equipamento</th><th style="text-align:left;padding:4px">Descrição</th><th style="text-align:left;padding:4px">Oficina</th><th style="text-align:left;padding:4px">Tipo</th><th style="text-align:left;padding:4px">Propósito</th></tr>'
            + r.pedidos.map((p) => '<tr style="border-bottom:1px solid #eee"><td style="padding:4px">' + _tfEscapar(p.equipamento) + '</td><td style="padding:4px">' + _tfEscapar(p.descricao + (p.codigoFalha ? ' ' + p.codigoFalha : ''))
              + '</td><td style="padding:4px">' + _tfEscapar(nome('taller', p.taller)) + '</td><td style="padding:4px">' + _tfEscapar(nome('tipo', p.tipoTrabalho))
              + '</td><td style="padding:4px">' + _tfEscapar(p.proposito ? nome('proposito', p.proposito) : '(o do painel)') + '</td></tr>').join('') + '</table>';
        }
        caixa.querySelector('#tf-planilha-resultado').innerHTML = out;
        convertido = r.erros.length ? null : r.pedidos;
        const criar = caixa.querySelector('#tf-planilha-criar');
        criar.textContent = convertido ? 'Criar ' + convertido.length + ' pedido(s)' : 'Criar pedidos';
      };
      const promessa = _tfModal('📊 Criar Pedidos a partir de planilha', html, [
        { id: 'tf-planilha-cancelar', texto: 'Cancelar', valor: null },
        { id: 'tf-planilha-conferir', texto: 'Conferir', cor: '#3366ff', acao: conferir },
        { id: 'tf-planilha-criar', texto: 'Criar pedidos', cor: '#28a745', acao: (fechar) => {
          if (!convertido || !convertido.length) { _0x2786ff('Clique em Conferir e corrija os erros primeiro.', 'warning'); return; }
          const lote = convertido;
          fechar(null);
          _0x2a8a19(JSON.stringify(lote));
        } },
      ]);
      const campo = document.getElementById('tf-planilha-texto');
      if (campo) campo.addEventListener('input', () => { convertido = null; });
      return promessa;
    }
    async function _0xc0586b(_0x25e494, _0x5103e7, _0x3ab493) {
      const _tfUsaLista = _0x3ab493 !== _0x565b94;
      const _tfOperacao = ((_0x25e494 && (_0x25e494.querySelector('.btn-text') || _0x25e494).textContent) || 'Operação').trim();
      const _tfIds = [..._0x2b7552];
      if (_tfUsaLista && _tfIds.length && !(await _tfPrevisualizar(_tfOperacao, _tfIds))) return;
      const _0x65170d = window.getComputedStyle(_0x25e494)['backgroundColor'], _0x5b1b2f = window['getComputedStyle'](_0x25e494), _0x563672 = _0x25e494.getBoundingClientRect(), _0x581a07 = _0x5103e7.getBoundingClientRect(), _0x47f02c = document.getElementById("painel-selecao-ordens"), _0x2193a5 = _0x47f02c.getBoundingClientRect(), _0x290f3c = document.createElement("div");
      _0x290f3c.className = "titanflow-action-btn", _0x290f3c.innerHTML = "<span class=\"btn-text\"></span><span class=\"btn-progress-fill\"></span>", Object.assign(_0x290f3c['style'], {
        'position': 'absolute'
        , 'top': _0x563672.top - _0x2193a5['top'] + 'px'
        , 'left': _0x563672.left - _0x2193a5.left + 'px'
        , 'width': _0x563672['width'] + 'px'
        , 'height': _0x563672.height + 'px'
        , 'backgroundColor': _0x65170d
        , 'borderRadius': _0x5b1b2f.borderRadius
        , 'zIndex': "10000"
        , 'color': 'white'
        , 'fontWeight': "bold"
        , 'fontSize': _0x5b1b2f.fontSize
        , 'transition': 'width\x200.4s\x20ease-in-out,\x20left\x200.4s\x20ease-in-out,\x20border-radius\x200.4s\x20ease-in-out'
      }), _0x47f02c.appendChild(_0x290f3c), _0x5103e7['style'].visibility = "hidden";
      const _0x222ac5 = _0x290f3c.querySelector(".btn-progress-fill")
        , _0x3c91b7 = _0x290f3c.querySelector(".btn-text");
      setTimeout(() => {
        Object.assign(_0x290f3c.style, {
          'left': _0x581a07.left - _0x2193a5.left + 'px'
          , 'width': _0x581a07['width'] + 'px'
          , 'borderRadius': "8px"
        });
      }, 0xa);
      let _0x1f4e3e = null
        , _0x3be5c5 = 0x0
        , _0x51303d = 0x0
        , _0x2f8d6b = ![];
      const _0x4dce06 = 0xc
        , _0x775fea = 0x32
        , _0x282bbf = _0x2b7552.length > 0x0 ? _0x2b7552['length'] : 0x1;
      try {
        await new Promise(_0x35fac8 => setTimeout(_0x35fac8, 0x190)), _0x3c91b7.textContent = '0%';
        const _0x1fc913 = _0x1f3501 => {
          _0x3be5c5 = Math.max(_0x1f3501, _0x3be5c5);
        };
        _0x1f4e3e = setInterval(() => {
          let _0x5c61fd = _0x3be5c5 + 0x1 / _0x282bbf;
          _0x2f8d6b && (_0x5c61fd = 0x1);
          const _0x1a332d = _0x5c61fd - _0x51303d
            , _0x108490 = _0x4dce06 * 0x3e8 / _0x775fea
            , _0x1b78f3 = _0x1a332d / _0x108490;
          _0x51303d < _0x5c61fd && (_0x51303d += _0x1b78f3);
          _0x51303d = Math.max(_0x51303d, _0x3be5c5), _0x51303d = Math['min'](_0x51303d, 0x1);
          const _0x3d4ce6 = Math['floor'](_0x51303d * 0x64);
          _0x222ac5.style['width'] = _0x3d4ce6 + '%', _0x3c91b7['textContent'] = _0x3d4ce6 + '%', _0x51303d >= 0x1 && _0x2f8d6b && (_0x3c91b7.textContent = 'Concluído!', clearInterval(_0x1f4e3e));
        }, _0x775fea), await (_tfUsaLista ? _tfExecutarRegistrando(_tfOperacao, _tfIds, () => _0x3ab493(_0x1fc913)) : _0x3ab493(_0x1fc913)), _0x2f8d6b = !![];
      } catch (_0x38fd06) {
        if (_0x1f4e3e) clearInterval(_0x1f4e3e);
        console['error']("Erro durante o processamento animado:", _0x38fd06), _0x3c91b7.textContent = 'Erro!', _0x2f8d6b = !![];
      }
      setTimeout(() => {
        if (_0x1f4e3e) clearInterval(_0x1f4e3e);
        Object.assign(_0x290f3c.style, {
          'left': _0x563672['left'] - _0x2193a5.left + 'px'
          , 'width': _0x563672.width + 'px'
          , 'borderRadius': _0x5b1b2f.borderRadius
        }), _0x3c91b7.style.opacity = '0', _0x222ac5.style.opacity = '0', setTimeout(() => {
          if (_0x47f02c.contains(_0x290f3c)) _0x47f02c.removeChild(_0x290f3c);
          _0x5103e7.style.visibility = 'visible';
        }, 0x190);
      }, 0x5dc);
    }

    function _0x510cd0(_0x52aaae, _0x36738) {
      return new Promise((_0x1761a7, _0x37cc3e) => {
        const _0x24dcbe = document['createElement']('iframe');
        _0x24dcbe.style['display'] = "none";
        const _0x17d97d = () => document.body.contains(_0x24dcbe) && document.body.removeChild(_0x24dcbe)
          , _0x4d735d = _0x2012f5();
        if (!_0x4d735d) return _0x37cc3e(new Error('SESID\x20não\x20encontrado.'));
        const _0x4dc6a7 = '/albatros/admin.php?SESID=' + _0x4d735d + "&seccion=titan_trabajos_ordenes&show=accion&action=emitir_pt&id_reg=" + _0x52aaae;
        let _0x514048 = ![];
        _0x24dcbe.onload = () => {
          if (_0x514048) {
            _0xb11661('Reload\x20do\x20iframe\x20detectado,\x20ignorando\x20para\x20evitar\x20duplicatas.');
            return;
          }
          _0x514048 = !![];
          let _0x4dc6f9 = 0x0;
          const _0x1987a5 = 0x64
            , _0x2a7c6e = setInterval(() => {
              try {
                _0x4dc6f9++;
                const _0x569605 = _0x24dcbe.contentDocument
                  , _0x39b7de = _0x24dcbe.contentWindow.location.href;
                if (_0x39b7de.includes("subseccion=editar_restringido")) {
                  const _0x9f91b6 = _0x569605['getElementById']("formDatos")
                    , _0x5b2119 = _0x569605.getElementById("bEnviar");
                  if (_0x9f91b6 && _0x5b2119) {
                    clearInterval(_0x2a7c6e), _0xb11661('Formulário\x20de\x20edição\x20carregado.\x20Preenchendo\x20dados...'), _0x569605.getElementById("fecha_deseable").value = _0x36738['dataRequerida'], _0x569605.getElementById("problema").value = _0x36738['descricao'], _0x569605.getElementById("key__talleres__id").value = _0x36738['tallerId'], _0x569605.getElementById('key__trabajos_tipos__id').value = _0x36738.tipoTrabalhoId,
                        // --- COPIE DEQUI ---
_0x569605.getElementById('key__trabajos_tipos__id').value = _0x36738.tipoTrabalhoId,

(function(){
    // DIAGNÓSTICO: Vamos ver o que está acontecendo
    console.log('--- TENTATIVA DE PREENCHER PROPÓSITO ---');

    // 1. Verifica se o valor veio do Passo 2
    var valorVindoDoPainel = _0x36738['propositoId'];
    console.log('Valor recebido do painel:', valorVindoDoPainel);

    if (!valorVindoDoPainel) {
        console.error('ERRO: O valor está vazio! Verifique o Passo 2.');
        return;
    }

    // 2. Tenta achar o campo no formulário
    var campo = _0x569605.getElementById('key__trabajos_tipos_propositos__id');
    console.log('Campo encontrado no HTML?', campo);

    if (campo) {
        campo.value = valorVindoDoPainel;
        campo.dispatchEvent(new Event('change'));
        console.log('SUCESSO: Valor preenchido!');
    } else {
        console.error('ERRO: O campo não foi encontrado no HTML (ID incorreto?)');
    }
    console.log('------------------------------------------');
})(),

_0x5b2119['click']();
// --- ATÉ AQUI ---
                    let _0xe3ce5a = 0x0;
                    const _0x2be41f = setInterval(() => {
                      try {
                        !_0x24dcbe.contentDocument['getElementById']("formDatos") && (clearInterval(_0x2be41f), _0xb11661("Submissão do formulário concluída com sucesso!"), _0x17d97d(), _0x1761a7(_0x9f91b6['id_reg']['value']));
                        if (_0xe3ce5a++ > _0x1987a5) {
                          clearInterval(_0x2be41f);
                          throw new Error("Timeout esperando a submissão do formulário.");
                        }
                      } catch (_0x2a1e89) {
                        clearInterval(_0x2be41f), _0x17d97d(), _0x1761a7(_0x9f91b6.id_reg.value);
                      }
                    }, 0xc8);
                    return;
                  }
                }
                if (_0x4dc6f9 > _0x1987a5) {
                  clearInterval(_0x2a7c6e);
                  throw new Error("Timeout: A página de edição do pedido não carregou.");
                }
              } catch (_0x379039) {
                clearInterval(_0x2a7c6e), _0x17d97d(), _0x37cc3e(_0x379039);
              }
            }, 0xc8);
        }, _0x24dcbe.onerror = _0x30c2a9 => {
          _0x17d97d(), _0x37cc3e(new Error('Falha\x20ao\x20carregar\x20o\x20iframe\x20inicial.'));
        }, document.body.appendChild(_0x24dcbe), _0x24dcbe['src'] = _0x4dc6a7;
      });
    }
    async function _0x574ba0() {
      if (_0x5b5dcd) {
        _0x2786ff("Aguarde, outro processo está em andamento.", "warning");
        return;
      }
      const _0x41cb7f = document['getElementById']('input-acao-valor')
        , _0x1172e1 = _0x41cb7f.value['trim']();
      if (!_0x1172e1 || !/^\d{1,7}$/ .test(_0x1172e1)) {
        _0x2786ff('Por\x20favor,\x20digite\x20um\x20número\x20de\x20OT\x20válido.', 'error'), _0x41cb7f['focus']();
        return;
      }
      const _0x125d3e = document.getElementById("pedido-descricao").value;
      if (!_0x125d3e.trim()) {
        _0x2786ff("O campo \"Descrição do Pedido\" é obrigatório.", "error"), document.getElementById("pedido-descricao").focus();
        return;
      }
     const _0x88d7df = {
    'dataRequerida': document['getElementById']("pedido-data-requerida").value.split('-')['reverse']().join('/'),
    'tallerId': document['getElementById']("pedido-taller").value,
    'tipoTrabalhoId': document.getElementById('pedido-tipo-trabalho').value,

    // --- LINHA NOVA AQUI: ---
    'propositoId': document.getElementById('pedido-proposito').value,
    // ------------------------

    'descricao': _0x125d3e['trim']()
};
      _0x5b5dcd = !![], _0x2786ff("Iniciando emissão para OT " + _0x1172e1 + "...", 'info');
      const _0x552c08 = document.getElementById("btn-principal-acao");
      _0x552c08['disabled'] = !![], _0x552c08.innerHTML = "<span>Processando...</span>";
      try {
        const _0x594739 = await _0x510cd0(_0x1172e1, _0x88d7df)
          , _0x4f491e = {
            'message': "✅ Sucesso! Pedido #" + _0x594739 + " criado a partir da OT " + _0x1172e1 + '.'
            , 'type': "success"
          };
        sessionStorage.setItem("titanflow_toast", JSON.stringify(_0x4f491e)), setTimeout(() => {
          const _0x54ac6d = _0x2012f5(), _0x3e6fa8 = "/albatros/admin.php?SESID=" + _0x54ac6d + "&n1=200&n2=202&in=20&seccion=titan_trabajos_pedidos";
          window.location.href = _0x3e6fa8;
        }, 0x12c);
      } catch (_0x2d8e81) {
        console.error("Erro ao emitir ordem filha:", _0x2d8e81), _0x2786ff("❌ Falha ao emitir: " + _0x2d8e81.message, "error", 0x1f40), _0x5b5dcd = ![], _0x552c08['disabled'] = ![], typeof atualizarInterfaceAcao === "function" && atualizarInterfaceAcao();
      }
    }
    async function _0x5a90c8(_0x432805, _0x4c08d5) {

     // 1. Prepara as listas (filtros vazios)
     const listaPessoas = (_0x2db1a3['tecnicos'] || []).filter(id => id && id.trim() !== '');
     const listaEmpresas = (_0x2db1a3['empresas'] || []).filter(id => id && id.trim() !== '');

     if (listaPessoas.length === 0 && listaEmpresas.length === 0) return;

     // Cálculo do horário (mantido do original)
     const _0x45a292 = _0x3ba919.horasPadrao.split(':');
     const _0x33d60a = parseInt(_0x45a292[0x0], 0xa) * 0x3c + parseInt(_0x45a292[0x1], 0xa);

     const urlsParaExecutar = new Set();

     // 2. Loop para adicionar PESSOAS
     for (const pessoaId of listaPessoas) {
       // Adiciona URL de Pessoa
       urlsParaExecutar.add('./admin.php?SESID=' + _0x4c08d5 + "&seccion=titan_trabajos_ordenes&id_reg=" + _0x432805 + "&show=accion&persona_id=" + pessoaId + "&empresa_id=0&duracion=" + _0x33d60a + "&action=recurso_agregar");
     }

     // 3. Loop para adicionar EMPRESAS (NOVO)
     // A URL de empresa é: &show=accion&action=recurso_agregar&persona_id=0&empresa_id=ID
     for (const empresaId of listaEmpresas) {
        const urlEmpresa = `./admin.php?SESID=${_0x4c08d5}&seccion=titan_trabajos_ordenes&id_reg=${_0x432805}&show=accion&action=recurso_agregar&persona_id=0&empresa_id=${empresaId}&duracion=${_0x33d60a}&tipo=1`;
        urlsParaExecutar.add(urlEmpresa);
     }

     // 4. Executa todas as requisições
     const _0x1e2efe = Array.from(urlsParaExecutar).map(url => fetch(url, {
       'credentials': "include"
     }).then(response => {
       if (!response.ok) throw new Error("Falha ao adicionar recurso. Status: " + response.status);
     }));

     await Promise.all(_0x1e2efe);
   }
    async function _0x55e3a8(_0x1af47e) {
      if (new URLSearchParams(location.search).get('seccion') !== 'titan_trabajos_ordenes') {
        _0x2786ff('Definir Mão de Obra é uma operação de Ordens: use na tela de Ordens. Nada foi feito.', 'error', 0x1770);
        throw new Error('Definir Mão de Obra fora da tela de Ordens.');
      }
      const _0x1ec95a = _0x2db1a3.tecnicos.filter(_0x1e80c2 => _0x1e80c2 && _0x1e80c2.trim() !== '');
      if (_0x1ec95a.length === 0) {
        _0x2786ff('Nenhum técnico selecionado. Escolha ao menos um.', 'warning');
        return;
      }
      _0x5b5dcd = true;
      const CONCORRENCIA_ORDENS = 3;
      const _0x2a0ccc = [..._0x2b7552]
        , _0x49d8a5 = _0x2a0ccc.length;
      let _0x3919b3 = 0
        , _0x120a7b = 0
        , _0xcursorMaoObra = 0;
      const _0x44fbad = []
        , _0x467368 = _0x2012f5();
      _0x2786ff('🚀 Iniciando adição de mão de obra para ' + _0x49d8a5 + ' ordens...', 'info');
      const _0xtrabalhadorMaoObra = async () => {
        while (_0xcursorMaoObra < _0x49d8a5) {
          if (!_0x5b5dcd) break;
          const _0xminhaVez = _0xcursorMaoObra++;
          const _0x25531e = _0x2a0ccc[_0xminhaVez];
          try {
            await _0x5a90c8(_0x25531e, _0x467368);
            _0x44fbad.push(_0x25531e);
          } catch (_0x5f16ea) {
            _0x120a7b++;
            console.error('Falha ao adicionar mão de obra na ordem ' + _0x25531e + ':', _0x5f16ea);
          }
          _0x3919b3++;
          if (_0x1af47e) _0x1af47e(_0x3919b3 / _0x49d8a5);
        }
      };
      const _0xpoolMaoObra = [];
      for (let _0xi = 0; _0xi < Math.min(CONCORRENCIA_ORDENS, _0x49d8a5); _0xi++) _0xpoolMaoObra.push(_0xtrabalhadorMaoObra());
      await Promise.all(_0xpoolMaoObra);
      if (!_0x5b5dcd) _0x2786ff('Processo interrompido.', 'warning');
      _0x5b5dcd = false;
      const _0xe23b8f = 'Concluído! ' + _0x44fbad.length + ' ordens processadas. ' + _0x120a7b + ' falharam.';
      _0x2786ff(_0xe23b8f, _0x120a7b > 0 ? 'warning' : 'success', 0x1770), _0x120a7b === 0 && _0x49d8a5 > 0 && (_0x2786ff('Sucesso total! Atualizando a página...', 'info'), setTimeout(() => {
        location.reload();
      }, 0x1f4));
    }
    async function _0x591d76(_0x178f21, _0x1393ee, _0x30db03, _0x48e07e, _0x9a4ec2) {
      const _0x22b21b = "/albatros/admin.php?SESID=" + _0x1393ee + "&n1=" + _0x30db03 + "&n2=" + _0x48e07e + '&in=' + _0x9a4ec2 + "&seccion=titan_trabajos_ordenes&op=gen&id_reg=" + _0x178f21, _0x130fac = await fetch(_0x22b21b, {
          'credentials': "include"
        });
      if (!_0x130fac['ok']) throw new Error('Não\x20foi\x20possível\x20carregar\x20a\x20página\x20da\x20ordem\x20' + _0x178f21 + '.');
      const _0x51e5f0 = await _0x130fac.text()
        , _0x50d690 = new DOMParser()
        , _0x5ce905 = _0x50d690.parseFromString(_0x51e5f0, "text/html")
        , _0x23358a = new Set()
        , _0x1eec99 = /eventoOnClickDelete\([^,]+,\s*[^,]+,\s*[^,]+,\s*(\d+),\s*(\d+)\s*\)/
        , _0x3fc8dc = _0x5ce905.querySelectorAll("td[onclick*=\"eventoOnClickDelete\"]");
      if (_0x3fc8dc['length'] === 0x0) return;
      _0x3fc8dc.forEach(_0x26728e => {
        const _0x4b2ed1 = _0x26728e.getAttribute('onclick'), _0x1ebd53 = _0x4b2ed1.match(_0x1eec99);
        if (_0x1ebd53 && _0x1ebd53[0x1] && _0x1ebd53[0x2]) {
          const _0x5263a7 = _0x1ebd53[0x1]
            , _0x2d41b2 = _0x1ebd53[0x2]
            , _0x35c6ee = _0x26728e.closest("table")
            , _0x2acad2 = _0x35c6ee && _0x35c6ee['id'] === "table_target_empresas"
            , _0x4b6ec9 = _0x2acad2 ? '0' : _0x5263a7
            , _0x542add = _0x2acad2 ? _0x5263a7 : '0'
            , _0x27ca47 = "./admin.php?SESID=" + _0x1393ee + "&seccion=titan_trabajos_ordenes&id_reg=" + _0x178f21 + "&show=accion&persona_id=" + _0x4b6ec9 + "&empresa_id=" + _0x542add + "&duracion=" + _0x2d41b2 + "&action=recurso_eliminar";
          _0x23358a.add(_0x27ca47);
        }
      });
      if (_0x23358a.size === 0x0) return;
      const _0x3b3677 = Array.from(_0x23358a).map(_0x547a0f => fetch(_0x547a0f, {
        'credentials': 'include'
      }).then(_0x7fe4df => {
        if (!_0x7fe4df['ok']) throw new Error('Falha\x20na\x20remoção\x20do\x20recurso:\x20' + _0x547a0f);
      }));
      await Promise.all(_0x3b3677);
    }
    async function _0x5583cc(_0x4a8fe8) {
      if (new URLSearchParams(location.search).get('seccion') !== 'titan_trabajos_ordenes') {
        _0x2786ff('Remover Mão de Obra é uma operação de Ordens: use na tela de Ordens. Nada foi feito.', 'error', 0x1770);
        throw new Error('Remover Mão de Obra fora da tela de Ordens.');
      }
      if (_0x2b7552.length === 0) {
        _0x2786ff('Nenhuma ordem selecionada para remover a mão de obra!', 'warning');
        return;
      }
      _0x5b5dcd = true;
      const CONCORRENCIA_ORDENS = 3;
      const _0x2c8838 = [..._0x2b7552]
        , _0x4df10a = _0x2c8838.length;
      let _0x3d71eb = 0
        , _0x237678 = 0
        , _0xcursorRemoverMaoObra = 0;
      const _0x2f5c86 = []
        , _0x21ebf3 = new URLSearchParams(window.location.search)
        , _0x4ff13e = _0x21ebf3.get('SESID')
        , _0x388ad2 = _0x21ebf3.get('n1')
        , _0x13d684 = _0x21ebf3.get('n2')
        , _0x581df6 = _0x21ebf3.get('in');
      _0x2786ff('🚀 Iniciando remoção de mão de obra para ' + _0x4df10a + ' ordens...', 'info');
      const _0xtrabalhadorRemoverMaoObra = async () => {
        while (_0xcursorRemoverMaoObra < _0x4df10a) {
          if (!_0x5b5dcd) break;
          const _0xminhaVez = _0xcursorRemoverMaoObra++;
          const _0x23fe7b = _0x2c8838[_0xminhaVez];
          try {
            await _0x591d76(_0x23fe7b, _0x4ff13e, _0x388ad2, _0x13d684, _0x581df6);
            _0x2f5c86.push(_0x23fe7b);
          } catch (_0xdf4d17) {
            _0x237678++;
            console.error('Falha ao remover mão de obra da ordem ' + _0x23fe7b + ':', _0xdf4d17);
          }
          _0x3d71eb++;
          if (_0x4a8fe8) _0x4a8fe8(_0x3d71eb / _0x4df10a);
        }
      };
      const _0xpoolRemoverMaoObra = [];
      for (let _0xi = 0; _0xi < Math.min(CONCORRENCIA_ORDENS, _0x4df10a); _0xi++) _0xpoolRemoverMaoObra.push(_0xtrabalhadorRemoverMaoObra());
      await Promise.all(_0xpoolRemoverMaoObra);
      if (!_0x5b5dcd) _0x2786ff('Processo interrompido.', 'warning');
      _0x5b5dcd = false;
      const _0x1938c5 = 'Concluído! Mão de obra de ' + _0x2f5c86.length + ' ordens removida. ' + _0x237678 + ' falharam.';
      _0x2786ff(_0x1938c5, _0x237678 > 0 ? 'warning' : 'success', 0x1770), _0x237678 === 0 && _0x4df10a > 0 && (_0x2786ff('Sucesso total! Atualizando a página...', 'info'), setTimeout(() => {
        location.reload();
      }, 0x1f4));
    }

    function _0x2ab23f(_0x251a21, _0x524d86) {
      return new Promise((_0x55fbbf, _0x556f0d) => {
        const _0x369840 = document.createElement("iframe");
        _0x369840.style.display = "none";
        const _0x1a0e57 = () => document.body['contains'](_0x369840) && document['body'].removeChild(_0x369840)
          , _0x1c10a0 = _0x2012f5();
        if (!_0x1c10a0) return _0x556f0d(new Error("Não foi possível encontrar o SESID."));
        const _0x262178 = "/albatros/admin.php?SESID=" + _0x1c10a0 + "&n1=200&n2=202&in=30&seccion=titan_trabajos_ordenes&subseccion=cerrar&op=m&id_reg=" + _0x251a21;
        let _0xa9eb6e = 0x0;
        const _0x520f48 = 0x96
          , _0x16574f = 0x64
          , _0xa4e505 = setInterval(() => {
            _0xa9eb6e++;
            try {
              const _0x28ba79 = _0x369840['contentDocument'];
              if (_0x28ba79 && _0x28ba79['readyState'] === "complete") {
                const _0x2c9a92 = _0x28ba79.getElementById("formDatos")
                  , _0x8e267a = _0x28ba79.getElementById("bEnviar");
                if (_0x2c9a92 && _0x8e267a) {
                  clearInterval(_0xa4e505);
                  const _0x1f25f7 = _0x28ba79.getElementById("cierre_key__calificaciones__id");
                  if (_0x1f25f7) _0x1f25f7.value = _0x524d86;
                  else throw new Error("Campo 'Calificación' não encontrado no iframe.");
                  _0x8e267a['click']();
                  let _0xe2366f = 0x0;
                  const _0x183f12 = setInterval(() => {
                    _0xe2366f++;
                    try {
                      if (!_0x369840.contentDocument?.getElementById("formDatos")) clearInterval(_0x183f12), _0x1a0e57(), _0x55fbbf(_0x251a21);
                      else {
                        if (_0xe2366f > _0x520f48) {
                          clearInterval(_0x183f12);
                          throw new Error("Timeout: A página não mudou após o clique em Salvar.");
                        }
                      }
                    } catch (_0x4719f0) {
                      clearInterval(_0x183f12), _0x1a0e57(), _0x55fbbf(_0x251a21);
                    }
                  }, _0x16574f);
                  return;
                }
              }
              if (_0xa9eb6e > _0x520f48) {
                clearInterval(_0xa4e505);
                throw new Error("Timeout: O formulário de fechamento não foi encontrado dentro do iframe.");
              }
            } catch (_0x52c87c) {
              clearInterval(_0xa4e505), _0x1a0e57(), _0x556f0d(_0x52c87c);
            }
          }, _0x16574f);
        _0x369840.onerror = _0x4dcc78 => {
          clearInterval(_0xa4e505), _0x1a0e57(), _0x556f0d(new Error('Falha\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe\x20para\x20a\x20ordem\x20' + _0x251a21 + '.'));
        }, document['body']['appendChild'](_0x369840), _0x369840['src'] = _0x262178;
      });
    }
    async function _0x1e1e0a(_0x295993) {
      if (new URLSearchParams(location.search).get('seccion') !== 'titan_trabajos_ordenes') {
        _0x2786ff('Fechar em Massa é uma operação de Ordens: use na tela de Ordens. Nada foi feito.', 'error', 0x1770);
        throw new Error('Fechar em Massa fora da tela de Ordens.');
      }
      const _0x23069d = document.getElementById('select_calificacion').value;
      if (!_0x23069d) {
        _0x2786ff('Por favor, selecione uma "Calificación para fechamento".', 'warning');
        throw new Error('Qualificação não selecionada.');
      }
      _0x5b5dcd = true;
      const CONCORRENCIA_FECHAMENTO = 3;
      const _0x50c3c1 = [..._0x2b7552]
        , _0x4b3e5c = _0x50c3c1.length;
      let _0x5c7660 = []
        , _0x5e23c3 = []
        , _0xconcluidas = 0
        , _0xcursor = 0;
      _0x2786ff('🚀 Iniciando fechamento (até ' + CONCORRENCIA_FECHAMENTO + ' em paralelo) para ' + _0x4b3e5c + ' ordens...', 'info');

      const _0xtrabalhadorFechamento = async () => {
        while (_0xcursor < _0x4b3e5c) {
          if (!_0x5b5dcd) break;
          const _0xminhaVez = _0xcursor++;
          const _0x5c8fcc = _0x50c3c1[_0xminhaVez];
          try {
            await _0x2ab23f(_0x5c8fcc, _0x23069d);
            _0x5c7660.push(_0x5c8fcc);
          } catch (_0x324e2d) {
            _0x5e23c3.push(_0x5c8fcc);
            console.error('Falha ao fechar ordem ' + _0x5c8fcc + ':', _0x324e2d);
          }
          _0xconcluidas++;
          _0x295993 && _0x295993(_0xconcluidas / _0x4b3e5c);
        }
      };

      const _0xpoolFechamento = [];
      for (let _0xi = 0; _0xi < Math.min(CONCORRENCIA_FECHAMENTO, _0x4b3e5c); _0xi++) _0xpoolFechamento.push(_0xtrabalhadorFechamento());
      await Promise.all(_0xpoolFechamento);

      if (!_0x5b5dcd) _0x2786ff('Processo interrompido pelo usuário.', 'warning');
      if (_0x295993) _0x295993(1);
      _0x5b5dcd = false, _0x2b7552 = _0x2b7552.filter(_0x16f828 => !_0x5c7660.includes(_0x16f828)), _0x13d195(), _0x5f5540();
      const _0x4b625e = _0x5c7660.length + ' ordens fechadas. ' + _0x5e23c3.length + ' falharam.';
      _0x2786ff(_0x4b625e, _0x5e23c3.length > 0 ? 'warning' : 'success', 0x1770);
      if (_0x5e23c3.length === 0 && _0x4b3e5c > 0) _0x2786ff('Sucesso total! Atualizando a página...', 'info'), setTimeout(() => {
        location.reload();
      }, 0x1f4);
      else _0x5e23c3.length > 0 && _0x2786ff('Algumas ordens falharam. A página não será recarregada.', 'error', 0x1770);
    }

    function _0x2630a5(_0xd937c2) {
      return new Promise((_0x17fdbc, _0x2a6c88) => {
        console.log("[Debug TitanSystem] Iniciando raspagem da URL:", _0xd937c2);
        const _0x2057fa = document.createElement("iframe");
        _0x2057fa['style'].display = "none";
        const _0x4f2ddc = () => document.body.contains(_0x2057fa) && document.body.removeChild(_0x2057fa);
        let _0x33f149 = 0x0;
        const _0x151581 = 0x82
          , _0x36e962 = 0x1e
          , _0x341cfc = setInterval(() => {
            _0x33f149++;
            try {
              const _0x46b0bb = _0x2057fa.contentDocument;
              _0x33f149 % 0x14 === 0x0 && console.log("[Debug TitanSystem] Tentativa #" + _0x33f149 + ". Estado do iframe: " + (_0x46b0bb ? _0x46b0bb.readyState : " inacessível"));
              if (_0x46b0bb && _0x46b0bb.readyState === 'complete') {
                const _0x3a0e3d = _0x46b0bb.getElementById('formDatos');
                if (_0x3a0e3d) {
                  console.log('[Debug\x20TitanSystem]\x20✅\x20Sucesso!\x20Formulário\x20\x22formDatos\x22\x20encontrado.'), clearInterval(_0x341cfc), _0x4f2ddc(), _0x17fdbc(_0x3a0e3d);
                  return;
                }
              }
              _0x33f149 > _0x151581 && (console.error("[Debug TitanSystem] ❌ Erro: Timeout! O formulário não foi encontrado a tempo."), clearInterval(_0x341cfc), _0x4f2ddc(), _0x2a6c88(new Error('Timeout:\x20O\x20formulário\x20modelo\x20não\x20foi\x20encontrado\x20na\x20página.')));
            } catch (_0x2ef6ad) {
              console.error("[Debug TitanSystem] ❌ Erro inesperado durante a raspagem:", _0x2ef6ad), clearInterval(_0x341cfc), _0x4f2ddc(), _0x2a6c88(_0x2ef6ad);
            }
          }, _0x36e962);
        _0x2057fa['onerror'] = _0x222765 => {
          console['error']("[Debug TitanSystem] ❌ Erro: O Iframe falhou ao carregar (evento onerror)."), clearInterval(_0x341cfc), _0x4f2ddc(), _0x2a6c88(new Error('Falha\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe.'));
        }, document['body'].appendChild(_0x2057fa), _0x2057fa.src = _0xd937c2, console.log("[Debug TitanSystem] Iframe adicionado à página. Aguardando carregamento...");
      });
    }

    function _0x3822d5(_0x36700b, _0x43e2a4, _0x1b6118, _0x4d932c, _0x2ffce9) {
      return new Promise((_0x12e946, _0xcaf748) => {
        const _0x4254e9 = document.createElement('iframe');
        _0x4254e9.style.display = 'none';
        const _0x288396 = () => document['body']['contains'](_0x4254e9) && document.body['removeChild'](_0x4254e9);
        let _0x27bc54 = 0x0;
        const _0x178ba1 = 0xc8
          , _0x9b85c0 = 0x4b
          , _0x46e3b3 = setInterval(() => {
            _0x27bc54++;
            try {
              const _0x24dcf1 = _0x4254e9.contentDocument;
              if (!_0x24dcf1 || !_0x24dcf1.body) {
                if (_0x27bc54 > 0x32) throw new Error("Não foi possível acessar o conteúdo do iframe.");
                return;
              }
              if (_0x24dcf1['readyState'] === "complete") {
                const _0x52c810 = _0x24dcf1.getElementById("formDatos")
                  , _0x1ccfb2 = _0x24dcf1.getElementById("bEnviar");
                if (_0x52c810 && _0x1ccfb2) {
                  clearInterval(_0x46e3b3);
                  const _0x537390 = _0x24dcf1.getElementById("fecha_programacion")
                    , _0x586964 = _0x24dcf1.getElementById("reprogramacion_causa")
                    , _0xe1758c = _0x24dcf1.getElementById('problema');
                  if (!_0x537390 || !_0x586964 || !_0xe1758c) return _0x288396(), _0xcaf748(new Error("Campos de data/causa/problema não encontrados no formulário."));
                  _0x537390.value = _0x43e2a4, _0x586964.value = _0x1b6118, _0xe1758c.removeAttribute("readonly");
                  if (_0x4d932c) _0xe1758c['value'] = _0x4d932c;
                  else {
                    if (_0x2ffce9) {
                      const _0x2e3841 = _0xe1758c.value['trim']()
                        , _0x43c96e = (_0x2e3841 + '\x20' + _0x2ffce9).trim();
                      _0xe1758c.value = _0x43c96e;
                    }
                  }
                  let _0x43287f = 0x0;
                  const _0xfce57f = setInterval(() => {
                    _0x43287f++;
                    try {
                      if (!_0x4254e9.contentDocument?.getElementById("formDatos")) clearInterval(_0xfce57f), _0x288396(), _0x12e946();
                      else _0x43287f > _0x178ba1 && (clearInterval(_0xfce57f), _0x288396(), _0xcaf748(new Error("Timeout: A página não mudou após o clique em Salvar.")));
                    } catch (_0x5c3527) {
                      clearInterval(_0xfce57f), _0x288396(), _0x12e946();
                    }
                  }, _0x9b85c0);
                  _0x1ccfb2.click();
                  return;
                }
              }
              _0x27bc54 > _0x178ba1 && (clearInterval(_0x46e3b3), console.error("====== INÍCIO DO CONTEÚDO DO IFRAME (DEBUG) ======"), console['error']("URL que falhou:", _0x4254e9['src']), console.error('Conteúdo\x20recebido\x20do\x20servidor:', _0x24dcf1.body.innerHTML), console.error('======\x20FIM\x20DO\x20CONTEÚDO\x20DO\x20IFRAME\x20(DEBUG)\x20======'), _0x288396(), _0xcaf748(new Error("Timeout: Formulário de reprogramação (ou botão Salvar) não foi encontrado.")));
            } catch (_0x2d8a4d) {
              clearInterval(_0x46e3b3), _0x288396(), _0xcaf748(_0x2d8a4d);
            }
          }, _0x9b85c0);
        _0x4254e9['onerror'] = _0x29c54a => {
          clearInterval(_0x46e3b3), _0x288396(), _0xcaf748(new Error("Falha de rede ao carregar o iframe de reprogramação."));
        }, document.body.appendChild(_0x4254e9), _0x4254e9.src = _0x36700b;
      });
    }

    function _0x368aea(_0x33b3c0, _0x2a23ab) {
      return new Promise((_0x469183, _0x7e5786) => {
        const _0x658ed4 = document.createElement('iframe');
        _0x658ed4.style['display'] = "none";
        const _0x3ebb13 = () => document.body.contains(_0x658ed4) && document.body.removeChild(_0x658ed4);
        let _0x4a33c9 = 0x0;
        const _0x385874 = 0x82
          , _0x3c3ccf = 0x4b
          , _0x429c9c = setInterval(() => {
            _0x4a33c9++;
            try {
              const _0x8fad9 = _0x658ed4.contentDocument;
              if (_0x8fad9 && _0x8fad9['readyState'] === 'complete') {
                const _0x4745e8 = _0x8fad9['getElementById']('formDatos');
                if (_0x4745e8) {
                  clearInterval(_0x429c9c);
                  try {
                    const _0x2effd1 = _0x8fad9.createElement("script");
                    _0x2effd1.textContent = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.confirm\x20=\x20function(message)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27[✅\x20Popup\x20de\x20confirmação\x20bloqueado\x20DENTRO\x20DO\x20IFRAME]:\x27,\x20message);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x8fad9['head'].appendChild(_0x2effd1), _0xb11661("Popup blocker injetado no iframe para a ordem em execução.");
                  } catch (_0x2aa11a) {
                    console.error("Falha ao injetar o bloqueador de popup no iframe:", _0x2aa11a);
                  }
                  const _0x3052e8 = {
                    'problema': _0x8fad9.getElementById("terminacion_problema")
                    , 'causa': _0x8fad9['getElementById']("terminacion_causa")
                    , 'acao': _0x8fad9.getElementById("terminacion_accion")
                    , 'recomendacao': _0x8fad9['getElementById']('terminacion_recomendacion')
                    , 'recursos': _0x8fad9.getElementById("rrhh_propios_cantidad")
                    , 'duracao': _0x8fad9.getElementById("rrhh_propios_duracion_hh")
                    , 'total': _0x8fad9['getElementById']('duracion_total')
                    , 'submitBtn': _0x8fad9.getElementById("bEnviar")
                  };
                  if (Object.values(_0x3052e8).some(_0x33a139 => !_0x33a139)) return _0x3ebb13(), _0x7e5786(new Error("Um ou mais campos de execução não foram encontrados no iframe."));
                  _0x3052e8.problema && !_0x3052e8['problema'].readOnly && (_0x3052e8.problema.value = _0x2a23ab.problema);
                  _0x3052e8.causa && !_0x3052e8.causa['readOnly'] && (_0x3052e8.causa['value'] = _0x2a23ab['causa']);
                  _0x3052e8['acao'] && !_0x3052e8.acao.readOnly && (_0x3052e8['acao'].value = _0x2a23ab['acao']);
                  _0x3052e8.recomendacao && !_0x3052e8.recomendacao.readOnly && (_0x3052e8['recomendacao']['value'] = _0x2a23ab.recomendacao);
                  _0x3052e8['recursos'].value = _0x2a23ab['recursos'], _0x3052e8['duracao'].value = _0x2a23ab.duracao, _0x3052e8.total.value = _0x2a23ab.total, _0x3052e8.submitBtn.click();
                  let _0x50ab6f = 0x0;
                  const _0x5e4b76 = setInterval(() => {
                    _0x50ab6f++;
                    try {
                      if (!_0x658ed4.contentDocument?.getElementById('formDatos')) clearInterval(_0x5e4b76), _0x3ebb13(), _0x469183();
                      else _0x50ab6f > _0x385874 && (clearInterval(_0x5e4b76), _0x3ebb13(), _0x7e5786(new Error("Timeout: A página não mudou após o clique em Salvar.")));
                    } catch (_0x4fda3d) {
                      clearInterval(_0x5e4b76), _0x3ebb13(), _0x469183();
                    }
                  }, _0x3c3ccf);
                  return;
                }
              }
              _0x4a33c9 > _0x385874 && (clearInterval(_0x429c9c), _0x3ebb13(), _0x7e5786(new Error("Timeout: Formulário de execução não foi encontrado.")));
            } catch (_0x5b90d9) {
              clearInterval(_0x429c9c), _0x3ebb13(), _0x7e5786(_0x5b90d9);
            }
          }, _0x3c3ccf);
        _0x658ed4.onerror = _0x57cf2a => {
          clearInterval(_0x429c9c), _0x3ebb13(), _0x7e5786(new Error("Falha de rede ao carregar o iframe de execução."));
        }, document.body.appendChild(_0x658ed4), _0x658ed4.src = _0x33b3c0;
      });
    }
    function _tfFila3(tarefa) {
      _tfFila3.ativas = _tfFila3.ativas || 0;
      _tfFila3.espera = _tfFila3.espera || [];
      return new Promise((resolver, rejeitar) => {
        const iniciar = () => {
          _tfFila3.ativas++;
          Promise.resolve().then(tarefa).then(resolver, rejeitar).finally(() => {
            _tfFila3.ativas--;
            const proxima = _tfFila3.espera.shift();
            if (proxima) proxima();
          });
        };
        if (_tfFila3.ativas < 3) iniciar(); else _tfFila3.espera.push(iniciar);
      });
    }
    async function _0x2cdb6a(_0xc7246e) {
      if (new URLSearchParams(location.search).get('seccion') !== 'titan_trabajos_ordenes') {
        _0x2786ff('Executar em Massa é uma operação de Ordens: use na tela de Ordens. Nada foi feito.', 'error', 0x1770);
        throw new Error('Executar em Massa fora da tela de Ordens.');
      }
      _0x5b5dcd = !![];
      const _0x27c0e2 = {
          'problema': localStorage.getItem("exec_problema") || "N/A"
          , 'causa': localStorage.getItem("exec_causa") || 'N/A'
          , 'acao': localStorage.getItem("exec_acao") || "N/A"
          , 'recomendacao': localStorage.getItem("exec_recomendacao") || "N/A"
          , 'recursos': localStorage.getItem("exec_recursos") || '1'
          , 'duracao': localStorage.getItem("exec_duracao") || '1'
          , 'total': localStorage.getItem("exec_horas") || '1'
        }
        , _0x25c291 = new URLSearchParams(window['location']['search'])
        , _0x1f98df = _0x25c291.get("SESID")
        , _0x3fe143 = _0x25c291['get']('n1')
        , _0x29df64 = _0x25c291.get('n2')
        , _0x4fbc41 = _0x25c291['get']('in');
      if (!_0x1f98df || !_0x3fe143 || !_0x29df64 || !_0x4fbc41) {
        _0x5b5dcd = ![], _0x2786ff("Erro: Parâmetros de navegação não encontrados.", "error");
        throw new Error("Parâmetros de navegação não encontrados.");
      }
      const _0x31e4c8 = [..._0x2b7552]
        , _0x247787 = _0x31e4c8.length;
      let _0x31d94a = 0x0;
      _0x2786ff('🚀\x20Disparando\x20execução\x20para\x20' + _0x247787 + " ordens em paralelo...", 'info');
      const _0x175c92 = _0x31e4c8.map(_0x579575 => _tfFila3(() => {
          if (!_0x5b5dcd) return Promise['resolve']({
            'status': 'cancelled'
          });
          const _0x5bd939 = "/albatros/admin.php?SESID=" + _0x1f98df + "&n1=" + _0x3fe143 + '&n2=' + _0x29df64 + "&in=" + _0x4fbc41 + '&seccion=titan_trabajos_ordenes&subseccion=terminar&op=m&id_reg=' + _0x579575;
          return _0x368aea(_0x5bd939, _0x27c0e2).then(() => {
            _0x31d94a++;
            if (_0xc7246e) _0xc7246e(_0x31d94a / _0x247787);
            return {
              'status': "fulfilled"
              , 'value': _0x579575
            };
          })["catch"](_0x42eb42 => {
            _0x31d94a++;
            if (_0xc7246e) _0xc7246e(_0x31d94a / _0x247787);
            return console.error("Falha ao executar ordem " + _0x579575 + ':', _0x42eb42), {
              'status': 'rejected'
              , 'reason': _0x42eb42['message']
              , 'orderId': _0x579575
            };
          });
        }))
        , _0x5935bf = await Promise.all(_0x175c92)
        , _0x2a99a3 = _0x5935bf.filter(_0x197a43 => _0x197a43.status === 'fulfilled').map(_0x44eaac => _0x44eaac['value'])
        , _0x469883 = _0x5935bf.filter(_0x322a05 => _0x322a05.status === "rejected").length;
      _0x13d195(), _0x5f5540(), _0x5b5dcd = ![];
      const _0x25b42b = _0x2a99a3.length + " ordens executadas com sucesso. " + _0x469883 + '\x20falharam.';
      _0x2786ff(_0x25b42b, _0x469883 > 0x0 ? "warning" : "success", 0x1770);
      if (_0x4458b3 === "tecnico" && _0x469883 === 0x0 && _0x247787 > 0x0) {
        _0x2b7552 = [], _0x13d195(), _0x5f5540();
        const _0x5725ad = document.getElementById("ordens-input");
        _0x5725ad && (_0x5725ad.value = '', _0x5725ad.dispatchEvent(new Event('input')));
      }
      if (_0x469883 === 0x0 && _0x247787 > 0x0) _0x2786ff("Sucesso total! Atualizando a página...", 'info'), setTimeout(() => {
        location.reload();
      }, 0x1f4);
      else _0x469883 > 0x0 && _0x2786ff("Algumas ordens falharam. A página não será recarregada.", "error", 0x1770);
    }
    async function _0x1ca2cd(_0x168275, _0x23ed5e, _0x503fb7, _0xcaca9e, _0x105e5, _0x150c36) {
      const _0xe2f63a = "/albatros/admin.php?SESID=" + _0x23ed5e + "&n1=" + _0x503fb7 + "&n2=" + _0xcaca9e + "&in=" + _0x105e5 + "&seccion=titan_trabajos_ordenes&subseccion=activar&op=m&id_reg=" + _0x168275, _0x504f7a = await _0x2630a5(_0xe2f63a), _0x9422e1 = new FormData(_0x504f7a);
      _0x9422e1.set("fecha_programacion", _0x150c36), _0x9422e1['set']('id_reg', _0x168275);
      const _0x45889d = "/albatros/actions/adm/abm.php?SESID=" + _0x23ed5e
        , _0x23e352 = await fetch(_0x45889d, {
          'method': "POST"
          , 'body': _0x9422e1
          , 'credentials': 'include'
        });
      if (!_0x23e352['ok']) throw new Error("Servidor rejeitou a ativação (status " + _0x23e352.status + "). Verifique se a OS tem mão de obra.");
    }
    async function _0x224161(_0x459c40) {
      if (new URLSearchParams(location.search).get('seccion') !== 'titan_trabajos_ordenes') {
        _0x2786ff('Ativar em Massa é uma operação de Ordens: use na tela de Ordens. Nada foi feito.', 'error', 0x1770);
        throw new Error('Ativar em Massa fora da tela de Ordens.');
      }
      if (_0x5b5dcd) {
        _0x2786ff('Já existe um processamento em andamento.', 'warning');
        return;
      }
      _0x5b5dcd = true;
      const CONCORRENCIA_ORDENS = 3;
      const _0x14c9c5 = new URLSearchParams(window.location.search)
        , _0x25ee28 = _0x14c9c5.get('SESID')
        , _0x4db118 = _0x14c9c5.get('n1')
        , _0x1bcff2 = _0x14c9c5.get('n2')
        , _0x47772b = _0x14c9c5.get('in');
      if (!_0x25ee28 || !_0x4db118 || !_0x1bcff2 || !_0x47772b) {
        _0x5b5dcd = false;
        throw new Error('Parâmetros de navegação não encontrados na URL.');
      }
      const _0x4f376f = new Date()
        , _0x14394e = String(_0x4f376f.getDate()).padStart(2, '0')
        , _0xb9ddb4 = String(_0x4f376f.getMonth() + 1).padStart(2, '0')
        , _0x35107b = _0x4f376f.getFullYear()
        , _0x24ec9b = _0x14394e + '/' + _0xb9ddb4 + '/' + _0x35107b
        , _0x499fec = [..._0x2b7552]
        , _0x126aac = _0x499fec.length;
      let _0x5167af = 0
        , _0x1a1ae3 = 0
        , _0xcursorAtivar = 0;
      const _0x469da6 = [];
      _0x2786ff('🚀 Iniciando ativação para ' + _0x126aac + ' ordens em fila...', 'info');
      const _0xtrabalhadorAtivar = async () => {
        while (_0xcursorAtivar < _0x126aac) {
          if (!_0x5b5dcd) break;
          const _0xminhaVez = _0xcursorAtivar++;
          const _0x573e4b = _0x499fec[_0xminhaVez];
          try {
            await _0x1ca2cd(_0x573e4b, _0x25ee28, _0x4db118, _0x1bcff2, _0x47772b, _0x24ec9b);
            _0x469da6.push(_0x573e4b);
          } catch (_0x28c2b8) {
            _0x1a1ae3++;
            console.error('Falha ao ativar ordem ' + _0x573e4b + ':', _0x28c2b8);
          }
          _0x5167af++;
          if (_0x459c40) _0x459c40(_0x5167af / _0x126aac);
        }
      };
      const _0xpoolAtivar = [];
      for (let _0xi = 0; _0xi < Math.min(CONCORRENCIA_ORDENS, _0x126aac); _0xi++) _0xpoolAtivar.push(_0xtrabalhadorAtivar());
      await Promise.all(_0xpoolAtivar);
      if (!_0x5b5dcd) _0x2786ff('Processo interrompido.', 'warning');
      _0x5b5dcd = false;
      const _0x1ac4ba = 'Concluído! ' + _0x469da6.length + ' ordens ativadas com sucesso. ' + _0x1a1ae3 + ' falharam.';
      _0x2786ff(_0x1ac4ba, _0x1a1ae3 > 0 ? 'warning' : 'success', 0x1770);
      if (_0x1a1ae3 === 0 && _0x126aac > 0) _0x2786ff('Sucesso total! Atualizando a página...', 'info'), setTimeout(() => {
        location.reload();
      }, 0x1f4);
      else _0x1a1ae3 > 0 && _0x2786ff('Algumas ordens falharam. A página não será recarregada.', 'error', 0x1770);
    }
    async function _0x1116da(_0x1c30cd) {
      if (new URLSearchParams(location.search).get('seccion') !== 'titan_trabajos_ordenes') {
        _0x2786ff('Reprogramar em Massa é uma operação de Ordens: use na tela de Ordens. Nada foi feito.', 'error', 0x1770);
        throw new Error('Reprogramar em Massa fora da tela de Ordens.');
      }
      const _0x17fb61 = _0x5e0ee9(document.getElementById("input-nova-data")['value']), _0x3a3192 = document['getElementById']('input-causa').value, _0x5a0be1 = document.getElementById("input-nova-descricao"), _0x3b5195 = _0x5a0be1 && !_0x5a0be1.disabled ? _0x5a0be1.value.trim() : '', _0x2e2119 = document['getElementById']("input-codigo-falha"), _0xfeec5e = _0x2e2119 && !_0x2e2119.disabled ? _0x2e2119['value'].trim() : '';
      if (!_0x17fb61 || !_0x3a3192.trim()) return _0x2786ff("A Nova Data e a Causa são obrigatórias para reprogramar.", 'warning');
      if (_0x3b5195 !== '' && _0xfeec5e !== '') return _0x2786ff("Erro: Você não pode \"Forçar Alteração\" e \"Adicionar Código\" ao mesmo tempo. Escolha apenas uma opção.", 'error', 0x1770);
      else {
        if (_0x3b5195 !== '') {
          if (!confirm("ATENÇÃO!\n\nVocê está prestes a SUBSTITUIR A DESCRIÇÃO para:\n\"" + _0x3b5195 + '\x22\x0aem\x20TODAS\x20as\x20' + _0x2b7552.length + " ordens selecionadas.\nDeseja continuar?")) return _0x2786ff("Operação cancelada pelo usuário.", 'info');
        } else {
          if (_0xfeec5e !== '') {
            if (!confirm("ATENÇÃO!\n\nVocê está prestes a ADICIONAR O CÓDIGO:\n\"" + _0xfeec5e + "\"\nao final da descrição de TODAS as " + _0x2b7552.length + " ordens selecionadas.\nDeseja continuar?")) return _0x2786ff("Operação cancelada pelo usuário.", "info");
          }
        }
      }
      _0x5b5dcd = !![];
      const _0x54a1dc = new URLSearchParams(window.location['search'])
        , _0x588f32 = _0x54a1dc['get']("SESID")
        , _0x3856c3 = _0x54a1dc.get('n1')
        , _0x396f57 = _0x54a1dc.get('n2')
        , _0x13ee81 = _0x54a1dc.get('in');
      if (!_0x588f32 || !_0x3856c3 || !_0x396f57 || !_0x13ee81) {
        _0x5b5dcd = ![], _0x2786ff("Erro: Parâmetros de navegação não encontrados.", "error");
        return;
      }
      const _0x5b3746 = [..._0x2b7552]
        , _0x5f4060 = _0x5b3746.length;
      let _0x5d59be = 0x0;
      _0x2786ff("🚀 Disparando reprogramação para " + _0x5f4060 + " ordens em paralelo...", "info");
      const _0x26b470 = _0x5b3746.map(_0x15ed4a => _tfFila3(() => {
          if (!_0x5b5dcd) return Promise.resolve({
            'status': "cancelled"
          });
          const _0x2792b4 = "/albatros/admin.php?SESID=" + _0x588f32 + "&n1=" + _0x3856c3 + "&n2=" + _0x396f57 + '&in=' + _0x13ee81 + "&seccion=titan_trabajos_ordenes&subseccion=reprogramar&op=m&id_reg=" + _0x15ed4a;
          return _0x3822d5(_0x2792b4, _0x17fb61, _0x3a3192, _0x3b5195, _0xfeec5e).then(() => {
            _0x5d59be++;
            if (_0x1c30cd) _0x1c30cd(_0x5d59be / _0x5f4060);
            return {
              'status': "fulfilled"
              , 'value': _0x15ed4a
            };
          })["catch"](_0x2fe499 => {
            _0x5d59be++;
            if (_0x1c30cd) _0x1c30cd(_0x5d59be / _0x5f4060);
            return console.error("Falha ao reprogramar ordem " + _0x15ed4a + ':', _0x2fe499), {
              'status': "rejected"
              , 'reason': _0x2fe499['message']
              , 'orderId': _0x15ed4a
            };
          });
        }))
        , _0x5de023 = await Promise.all(_0x26b470)
        , _0xc14037 = _0x5de023['filter'](_0xc02100 => _0xc02100.status === 'fulfilled').map(_0x4bb425 => _0x4bb425.value)
        , _0x2793ea = _0x5de023.filter(_0x5a45b7 => _0x5a45b7.status === 'rejected').length;
      _0x13d195(), _0x5f5540(), _0x5b5dcd = ![];
      const _0x589821 = "Concluído! " + _0xc14037['length'] + " ordens processadas. " + _0x2793ea + " falharam.";
      _0x2786ff(_0x589821, _0x2793ea > 0x0 ? "warning" : "success", 0x1770);
      if (_0x2793ea === 0x0 && _0x5f4060 > 0x0) _0x2786ff("Sucesso total! Atualizando a página...", "info"), setTimeout(() => {
        location['reload']();
      }, 0x1f4);
      else _0x2793ea > 0x0 && _0x2786ff("Algumas ordens falharam. A página não será recarregada.", 'error', 0x1770);
    }

    function _0x507d86(_0x207a01, _0x5f24f8) {
      const CANCELAMENTO_CONFIRMADO_PELO_TITAN = /modificad/i;
      return new Promise((_0x9e5c40, _0x2d8dc1) => {
        const _0x36f2f9 = document.createElement('iframe');
        _0x36f2f9.style.display = 'none';
        const _0x785356 = () => document.body.contains(_0x36f2f9) && document.body.removeChild(_0x36f2f9);
        let _0x489021 = 0;
        const _0x15a24f = 200
          , _0x4f362b = 75
          , _0xfb4d81 = setInterval(() => {
            _0x489021++;
            try {
              const _0x31f45d = _0x36f2f9.contentDocument;
              if (_0x31f45d && _0x31f45d.readyState === 'complete') {
                const _0x2910b5 = _0x31f45d.getElementById('formDatos')
                  , _0x506f7b = _0x31f45d.getElementById('bEnviar');
                if (_0x2910b5 && _0x506f7b) {
                  clearInterval(_0xfb4d81);
                  const _0x2b15d8 = _0x31f45d.getElementById('cancelacion_causa');
                  if (!_0x2b15d8) return _0x785356(), _0x2d8dc1(new Error("Campo 'Razón' (cancelacion_causa) não encontrado no formulário."));
                  _0x2b15d8.value = _0x5f24f8;
                  _0x506f7b.click();
                  let _0x1f1ef2 = 0;
                  const _0x4898d7 = setInterval(() => {
                    _0x1f1ef2++;
                    const _0xfim = (_0xerro) => {
                      clearInterval(_0x4898d7);
                      _0x785356();
                      _0xerro ? _0x2d8dc1(_0xerro) : _0x9e5c40();
                    };
                    try {
                      const _0xdoc = _0x36f2f9.contentDocument;
                      const _0xavisoErro = _0xdoc && _0xdoc.getElementById('informacion_mensaje_aux');
                      if (_0xavisoErro && _0xavisoErro.style.display === 'block') return _0xfim(new Error('O TITAN recusou o cancelamento: ' + (_0xavisoErro.textContent || '').trim()));
                      if (_0xdoc && _0xdoc.readyState === 'complete' && !_0xdoc.getElementById('formDatos')) {
                        const _0xmsg = _0xdoc.getElementById('informacion_mensaje');
                        if (_0xmsg && CANCELAMENTO_CONFIRMADO_PELO_TITAN.test(_0xmsg.textContent || '')) return _0xfim();
                        return _0xfim(new Error('O TITAN não confirmou o cancelamento: a página seguinte veio sem o aviso de dados modificados.'));
                      }
                      if (_0x1f1ef2 > _0x15a24f) _0xfim(new Error('Timeout: A página não mudou após o clique em Salvar.'));
                    } catch (_0xe) {
                      _0xfim(new Error('Não foi possível conferir o resultado do cancelamento: ' + _0xe.message));
                    }
                  }, _0x4f362b);
                  return;
                }
              }
              _0x489021 > _0x15a24f && (clearInterval(_0xfb4d81), _0x785356(), _0x2d8dc1(new Error('Timeout: Formulário de cancelamento não foi encontrado.')));
            } catch (_0x3aba25) {
              clearInterval(_0xfb4d81), _0x785356(), _0x2d8dc1(_0x3aba25);
            }
          }, _0x4f362b);
        _0x36f2f9.onerror = () => {
          clearInterval(_0xfb4d81), _0x785356(), _0x2d8dc1(new Error('Falha de rede ao carregar o iframe de cancelamento.'));
        };
        document.body.appendChild(_0x36f2f9);
        _0x36f2f9.src = _0x207a01;
      });
    }
    async function _0x497030(_0x5bbcf8) {
      const _0x33584d = new URLSearchParams(window.location.search)
        , _0xehPedidos = _0x33584d.get('seccion') === 'titan_trabajos_pedidos'
        , _0xsecaoCancelar = _0xehPedidos ? 'titan_trabajos_pedidos' : 'titan_trabajos_ordenes'
        , _0xitens = _0xehPedidos ? 'pedidos' : 'ordens'
        , _0xitem = _0xehPedidos ? 'pedido' : 'ordem';
      const _0x4036e4 = await _0x15e7d4(_0xehPedidos ? 'Cancelar Pedidos em Massa 🛑' : 'Cancelar Ordens em Massa 🛑', 'Digite a causa do cancelamento que será aplicada ' + (_0xehPedidos ? 'a todos os ' : 'a todas as ') + _0x2b7552.length + ' ' + _0xitens + (_0xehPedidos ? ' selecionados.' : ' selecionadas.'), 'Ex: Duplicidade, solicitação do cliente, etc.');
      if (_0x4036e4 === null || _0x4036e4.trim() === '') {
        _0x2786ff('Cancelamento abortado. A causa é obrigatória.', 'warning');
        throw new Error('Operação cancelada pelo usuário.');
      }
      _0x5b5dcd = true;
      const CONCORRENCIA_ORDENS = 3;
      const _0x5a7e0c = _0x33584d.get('SESID')
        , _0x214b2a = _0x33584d.get('n1')
        , _0x28c54d = _0x33584d.get('n2')
        , _0x7236b6 = _0x33584d.get('in');
      if (!_0x5a7e0c || !_0x214b2a || !_0x28c54d || !_0x7236b6) {
        _0x5b5dcd = false;
        _0x2786ff('Erro: Parâmetros de navegação não encontrados.', 'error');
        throw new Error('Parâmetros de navegação não encontrados.');
      }
      const _0x527376 = [..._0x2b7552]
        , _0x4c558e = _0x527376.length;
      let _0x38701d = 0
        , _0xa98364 = 0
        , _0x260442 = []
        , _0xcursorCancelar = 0;
      _0x2786ff('🚀 Iniciando cancelamento para ' + _0x4c558e + ' ' + _0xitens + '...', 'info');
      const _0xtrabalhadorCancelar = async () => {
        while (_0xcursorCancelar < _0x4c558e) {
          if (!_0x5b5dcd) break;
          const _0xminhaVez = _0xcursorCancelar++;
          const _0x262fc7 = _0x527376[_0xminhaVez];
          const _0x2e4613 = '/albatros/admin.php?SESID=' + _0x5a7e0c + '&n1=' + _0x214b2a + '&n2=' + _0x28c54d + '&in=' + _0x7236b6 + '&seccion=' + _0xsecaoCancelar + '&subseccion=cancelar&op=m&id_reg=' + _0x262fc7;
          try {
            await _0x507d86(_0x2e4613, _0x4036e4);
            _0x260442.push(_0x262fc7);
          } catch (_0x27531a) {
            _0xa98364++;
            console.error('Falha ao cancelar ' + _0xitem + ' ' + _0x262fc7 + ':', _0x27531a);
          }
          _0x38701d++;
          if (_0x5bbcf8) _0x5bbcf8(_0x38701d / _0x4c558e);
        }
      };
      const _0xpoolCancelar = [];
      for (let _0xi = 0; _0xi < Math.min(CONCORRENCIA_ORDENS, _0x4c558e); _0xi++) _0xpoolCancelar.push(_0xtrabalhadorCancelar());
      await Promise.all(_0xpoolCancelar);
      if (!_0x5b5dcd) _0x2786ff('Processo interrompido.', 'warning');
      _0x5b5dcd = false, _0x2b7552 = _0x2b7552.filter(_0x45cd78 => !_0x260442.includes(_0x45cd78)), _0x13d195(), _0x5f5540();
      const _0x226334 = 'Concluído! ' + _0x260442.length + ' ' + _0xitens + (_0xehPedidos ? ' cancelados. ' : ' canceladas. ') + _0xa98364 + ' falharam.';
      _0x2786ff(_0x226334, _0xa98364 > 0 ? 'warning' : 'success', 0x1770);
      if (_0xa98364 === 0 && _0x4c558e > 0) _0x2786ff('Sucesso total! Atualizando a página...', 'info'), setTimeout(() => {
        location.reload();
      }, 0x1f4);
      else _0xa98364 > 0 && _0x2786ff('Alguns cancelamentos falharam (detalhes no console, F12). A página não será recarregada.', 'error', 0x1770);
    }

    function _0x4158d4(_0x20b1ca, _0x38e819, _0x68c2b1) {
      return new Promise((_0x4b89a7, _0x25dadf) => {
        const _0x2b04a3 = document.createElement("iframe");
        _0x2b04a3.style.display = 'none';
        const _0x435e35 = () => document.body.contains(_0x2b04a3) && document.body.removeChild(_0x2b04a3)
          , _0x4d34ae = _0x2012f5()
          , _0x46f7b6 = "/albatros/admin.php?SESID=" + _0x4d34ae + "&seccion=titan_trabajos_pedidos&op=a&in=20&n2=202&n1=200"
          , _0x588ef1 = setInterval(() => {
            try {
              const _0x3b9341 = _0x2b04a3['contentDocument'];
              if (_0x3b9341 && _0x3b9341.readyState === "complete") {
                const _0x335031 = _0x3b9341.getElementById('formDatos');
                if (_0x335031 && typeof _0x3b9341.defaultView.buscar_datos_lookup === 'function') {
                  clearInterval(_0x588ef1);
                  const _0xc09667 = _0x3b9341.getElementById('key__equipos__id_result');
                  _0x3b9341.getElementById('key__equipos__id')['value'] = _0x20b1ca.equipamentoId, _0x3b9341.defaultView.buscar_datos_lookup(_0x3b9341.defaultView.key__equipos__id_url, _0x20b1ca.equipamentoId, _0xc09667);
                  let _0x27fce9 = 0x0;
                  const _0x11ffcc = setInterval(() => {
                    _0x27fce9++;
                    if (_0xc09667.value['trim']() !== '') {
                      clearInterval(_0x11ffcc);
                      const _0x20c578 = _0x68c2b1 > 0x1 ? _0x20b1ca.descricao + '\x20(' + _0x38e819 + '/' + _0x68c2b1 + ')' : _0x20b1ca.descricao;
                      _0x3b9341['getElementById']("problema").value = _0x20c578, _0x3b9341.getElementById("key__talleres__id")['value'] = _0x20b1ca['tallerId'], _0x3b9341['getElementById']("key__trabajos_tipos__id").value = _0x20b1ca.tipoTrabalhoId, _0x3b9341.getElementById("key__trabajos_tipos__id").dispatchEvent(new Event("change", {
                        'bubbles': !![]
                      })), _0x3b9341.getElementById("fecha_deseable").value = _0x20b1ca.dataRequerida, // --- CÓDIGO NOVO (PASSO 3 - VERSÃO ROBÔ B) ---
(function(){
    try {
        // _0x3b9341 é o documento do iframe aqui
        var cp = _0x3b9341.getElementById('key__trabajos_tipos_propositos__id');
        // _0x20b1ca são os dados do pedido aqui
        if (cp && _0x20b1ca.propositoId) {
            cp.value = _0x20b1ca.propositoId;
            cp.dispatchEvent(new Event('change', { 'bubbles': true }));
        }
    } catch(e) { console.error('Erro Robo B:', e); }
})(),

_0x3b9341.getElementById("bEnviar")['click']();
                      let _tentativasEnvio = 0x0;
                      const _pollEnvio = setInterval(() => {
                        _tentativasEnvio++;
                        try {
                          if (!_0x2b04a3.contentDocument?.getElementById('formDatos')) {
                            clearInterval(_pollEnvio), _0x435e35(), _0x4b89a7();
                          } else if (_tentativasEnvio > 0x3c) {
                            clearInterval(_pollEnvio), _0x435e35();
                            _0x25dadf(new Error('Timeout: a p\u00e1gina n\u00e3o mudou ap\u00f3s o clique em Salvar (poss\u00edvel campo obrigat\u00f3rio vazio, como Prop\u00f3sito).'));
                          }
                        } catch (_erroPollEnvio) {
                          clearInterval(_pollEnvio), _0x435e35(), _0x4b89a7();
                        }
                      }, 0xc8);
                    } else _0x27fce9 > 0x32 && (clearInterval(_0x11ffcc), _0x435e35(), _0x25dadf(new Error("Timeout: A validação do equipamento demorou demais.")));
                  }, 0xc8);
                  return;
                }
              }
            } catch (_0x4d8027) {
              clearInterval(_0x588ef1), _0x435e35(), _0x25dadf(_0x4d8027);
            }
          }, 0x1f4);
        _0x2b04a3.onerror = _0x37adce => {
          clearInterval(_0x588ef1), _0x435e35(), _0x25dadf(new Error('Falha\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe.'));
        }, document.body.appendChild(_0x2b04a3), _0x2b04a3['src'] = _0x46f7b6;
      });
    }
    async function _0x565b94(_0x464fae) {
      const _0x541001 = JSON.parse(localStorage.getItem("titanflow_equipamentos_selecionados") || '[]');
      if (_0x541001.length === 0x0) {
        _0x2786ff('Nenhum\x20equipamento\x20na\x20lista\x20para\x20criar\x20pedidos!', "error");
        throw new Error('Lista\x20de\x20equipamentos\x20vazia.');
      }
      const _0x21c2c5 = {
        'dataRequerida': document.getElementById("pedido-data-requerida").value.split('-').reverse().join('/')
        , 'tallerId': document.getElementById('pedido-taller').value
        , 'tipoTrabalhoId': document.getElementById("pedido-tipo-trabalho").value
        , 'descricao': document['getElementById']("pedido-descricao")['value']
        , 'propositoId': document.getElementById('pedido-proposito').value
        , 'quantidadePorEquipamento': parseInt(document.getElementById('input-quantidade-pedidos').value, 0xa) || 0x1
      };
      if (!_0x21c2c5.descricao.trim()) {
        _0x2786ff("O campo \"Descrição do Pedido\" é obrigatório.", "error");
        throw new Error("Descrição vazia.");
      }
      if (!_0x21c2c5.propositoId) {
        _0x2786ff('O campo "Prop\u00f3sito" \u00e9 obrigat\u00f3rio.', 'error');
        throw new Error('Prop\u00f3sito n\u00e3o selecionado.');
      }
      _0x5b5dcd = !![], localStorage.setItem("pedido_ultimo_taller", _0x21c2c5.tallerId), localStorage.setItem("pedido_ultimo_tipo_trabalho", _0x21c2c5.tipoTrabalhoId);
      let _0x4aa092 = 0x0;
      const _0x14c297 = _0x541001.length * _0x21c2c5['quantidadePorEquipamento'];
      let _0x3797a1 = 0x0;
      for (const _0x4d7779 of _0x541001) {
        if (!_0x5b5dcd) break;
        for (let _0x1d1be6 = 0x1; _0x1d1be6 <= _0x21c2c5.quantidadePorEquipamento; _0x1d1be6++) {
          if (!_0x5b5dcd) break;
          try {
            const _0x2abfc6 = {
              ..._0x21c2c5
              , 'equipamentoId': _0x4d7779['id']
            };
            await _0x4158d4(_0x2abfc6, _0x1d1be6, _0x21c2c5.quantidadePorEquipamento);
          } catch (_0x4b03dc) {
            _0x4aa092++, console.error("Falha ao criar pedido " + _0x1d1be6 + " para " + _0x4d7779['tag'] + ':', _0x4b03dc);
          }
          _0x3797a1++;
          const _0x4fc1ad = _0x3797a1 / _0x14c297;
          if (_0x464fae) _0x464fae(_0x4fc1ad);
        }
      }
      _0x5b5dcd = ![];
      const _0x29bb8e = 'Concluído!\x20' + (_0x14c297 - _0x4aa092) + '\x20pedidos\x20criados.\x20' + _0x4aa092 + '\x20falharam.';
      _0x2786ff(_0x29bb8e, _0x4aa092 > 0x0 ? "warning" : 'success', 0x1770), document['getElementById']("pedido-descricao").value = '', localStorage.removeItem('titanflow_pedido_descricao_salva'), _0x4bf71a(), setTimeout(() => {
        location.reload();
      }, 0x5dc);
    }

    function _0x19fdd7(_0x4f77a0, _0xa8c39e) {
      return new Promise((_0x1adcc7, _0x3d7c27) => {
        const _0x53824b = document['createElement']("iframe");
        _0x53824b['style'].display = 'none';
        const _0x4cdafe = () => document.body.contains(_0x53824b) && document['body'].removeChild(_0x53824b)
          , _0x2cb421 = _0x2012f5()
          , _0x3e98d6 = "./admin.php?SESID=" + _0x2cb421 + "&seccion=titan_trabajos_pedidos&show=accion&action=emitir_ot&id_reg=" + _0x4f77a0;
        let _0x48bcc5 = 0x0;
        const _0x3d0b3e = 0x3c
          , _0x3305fd = setInterval(() => {
            _0x48bcc5++;
            try {
              const _0x5449b5 = _0x53824b.contentDocument;
              if (_0x5449b5 && _0x5449b5.readyState === "complete") {
                const _0x20c416 = _0x5449b5.getElementById("formDatos");
                if (_0x20c416) {
                  clearInterval(_0x3305fd), _0x5449b5.getElementById("key__backlog_categorias__id").value = _0xa8c39e.estadoPlan, _0x5449b5.getElementById("plan_de_trabajo")['value'] = "N/A", _0x5449b5.getElementById('repuestos').value = 'N/A', _0x5449b5.getElementById("materiales").value = 'N/A', _0x5449b5.getElementById('herramientas').value = 'N/A';
                  if (_0xa8c39e.especialidades.length > 0x0) {
                    const _0xfc3e6a = _0xa8c39e.especialidades[0x0]
                      , _0x23b441 = _0x5449b5['getElementById']("key__especialidades__id1");
                    _0x23b441 && (_0x23b441.value = _0xfc3e6a['id'], _0x23b441.dispatchEvent(new Event("change")), _0x5449b5.getElementById("especialidad1_rrhh_cantidad").value = _0xfc3e6a.pessoas, _0x5449b5['getElementById']('especialidad1_hh_rrhh').value = _0xfc3e6a['horas']);
                  }
                  typeof _0x5449b5.defaultView.actualizar_totales_especialidades === 'function' && _0x5449b5['defaultView']['actualizar_totales_especialidades']();
                  let _0x522a3c = 0x0;
                  const _0x3bf997 = setInterval(() => {
                    _0x522a3c++;
                    try {
                      if (!_0x53824b.contentDocument?.getElementById("formDatos")) clearInterval(_0x3bf997), _0x4cdafe(), _0x1adcc7();
                      else _0x522a3c > _0x3d0b3e && (clearInterval(_0x3bf997), _0x4cdafe(), _0x3d7c27(new Error("Timeout: A página não mudou após o clique em Salvar.")));
                    } catch (_0x3fc8ad) {
                      clearInterval(_0x3bf997), _0x4cdafe(), _0x1adcc7();
                    }
                  }, 0x1f4);
                  _0x5449b5.getElementById('bEnviar')['click']();
                  return;
                }
              }
              _0x48bcc5 > _0x3d0b3e && (clearInterval(_0x3305fd), _0x4cdafe(), _0x3d7c27(new Error('Timeout:\x20Formulário\x20de\x20emissão\x20não\x20foi\x20encontrado.')));
            } catch (_0x2e412b) {
              clearInterval(_0x3305fd), _0x4cdafe(), _0x3d7c27(_0x2e412b);
            }
          }, 0x1f4);
        _0x53824b['onerror'] = _0x411295 => {
          clearInterval(_0x3305fd), _0x4cdafe(), _0x3d7c27(new Error("Falha de rede ao carregar o iframe de emissão."));
        }, document.body.appendChild(_0x53824b), _0x53824b['src'] = _0x3e98d6;
      });
    }
    async function _0x3872cf(_0x32bb8a) {
      if (new URLSearchParams(location.search).get('seccion') !== 'titan_trabajos_pedidos') {
        _0x2786ff('Emitir em Massa é uma operação de Pedidos: use na tela de Pedidos. Nada foi feito.', 'error', 0x1770);
        throw new Error('Emitir em Massa fora da tela de Pedidos.');
      }
      const _0x508842 = {
          'estadoPlan': document.getElementById('emissao-estado-plan').value
          , 'especialidades': []
        }
        , _0x362f55 = document.getElementById('esp-id-1').value;
      _0x362f55 && _0x508842.especialidades.push({
        'id': _0x362f55
        , 'pessoas': document.getElementById('esp-pessoas-1').value || '0'
        , 'horas': document.getElementById('esp-horas-1').value || '0'
      });
      _0x5b5dcd = true;
      const CONCORRENCIA_ORDENS = 3;
      const _0x3dd970 = [..._0x2b7552];
      let _0x485905 = 0
        , _0x443de4 = 0
        , _0xcursorEmitir = 0;
      const _0x141187 = _0x3dd970.length;
      _0x2786ff('🚀 Iniciando emissão para ' + _0x141187 + ' ordens...', 'info');
      const _0xtrabalhadorEmitir = async () => {
        while (_0xcursorEmitir < _0x141187) {
          if (!_0x5b5dcd) break;
          const _0xminhaVez = _0xcursorEmitir++;
          const _0x17cd34 = _0x3dd970[_0xminhaVez];
          try {
            await _0x19fdd7(_0x17cd34, _0x508842);
          } catch (_0x121f0c) {
            _0x485905++;
            console.error('Falha ao emitir ordem ' + _0x17cd34 + ':', _0x121f0c);
          }
          _0x443de4++;
          if (_0x32bb8a) _0x32bb8a(_0x443de4 / _0x141187);
        }
      };
      const _0xpoolEmitir = [];
      for (let _0xi = 0; _0xi < Math.min(CONCORRENCIA_ORDENS, _0x141187); _0xi++) _0xpoolEmitir.push(_0xtrabalhadorEmitir());
      await Promise.all(_0xpoolEmitir);
      if (!_0x5b5dcd) _0x2786ff('Processo interrompido.', 'warning');
      _0x5b5dcd = false, _0x13d195(), _0x5f5540();
      const _0x3e37d5 = 'Concluído! ' + (_0x141187 - _0x485905) + ' ordens emitidas. ' + _0x485905 + ' falharam.';
      _0x2786ff(_0x3e37d5, _0x485905 > 0 ? 'warning' : 'success', 0x1770);
      if (_0x485905 === 0 && _0x141187 > 0) {
        _0x2b7552 = [], _0x13d195(), _0x5f5540();
        const _0x5bb99b = document.getElementById('ordens-input');
        _0x5bb99b && (_0x5bb99b.value = '', _0x5bb99b.dispatchEvent(new Event('input'))), _0x2786ff('Atualizando a página em 500ms...', 'info', 0x3e8), setTimeout(() => {
          location.reload();
        }, 0x1f4);
      }
    }

    function _0x2012f5() {
      const _0x2f546c = window.location.href.match(/SESID=([^&]*)/);
      return _0x2f546c ? _0x2f546c[0x1] : '';
    }

    function _0x5e0ee9(_0x2256f8) {
      const _0x3be17e = _0x2256f8['split']('-');
      if (_0x3be17e.length === 0x3) return _0x3be17e[0x2] + '/' + _0x3be17e[0x1] + '/' + _0x3be17e[0x0];
      return '';
    }

    function _0x288fe4(_0x3158de, _0x4e451e) {
      _0x3158de.style.display === 'none' ? (_0x4e451e.innerHTML = '👁️\x20Mostrar\x20Painel', _0x4e451e.title = "Clique para mostrar o painel de automação", _0x4e451e.style.backgroundColor = '#28a745') : (_0x4e451e.innerHTML = "🙈 Ocultar Painel", _0x4e451e.title = "Clique para ocultar o painel de automação", _0x4e451e.style.backgroundColor = '#3366ff');
    }

    function _0x4177e2() {
      const _0x5f4c9f = document.getElementById("conteudo-abas");
      if (!_0x5f4c9f) return;
      const _0x24658e = JSON.parse(localStorage['getItem']("emissao_saved_data") || '{}')
        , _0x119bf0 = [{
          'valor': '6'
          , 'texto': "Lista para programar"
        }, {
          'valor': '1'
          , 'texto': "Esperando planejamento"
        }, {
          'valor': '4'
          , 'texto': 'Esperando\x20evento'
        }, {
          'valor': '5'
          , 'texto': "Esperando engenharia"
        }, {
          'valor': '2'
          , 'texto': "Esperando materiais"
        }, {
          'valor': '3'
          , 'texto': 'Esperando\x20serviços'
        }, {
          'valor': ''
          , 'texto': '--\x20Nenhum\x20--'
        }]
        , _0x1397cd = [{
          'valor': ''
          , 'texto': "-- Selecione --"
        }, {
          'valor': '1'
          , 'texto': "Mecânico"
        }, {
          'valor': '2'
          , 'texto': "Eletricista"
        }, {
          'valor': '3'
          , 'texto': "Civil"
        }, {
          'valor': '4'
          , 'texto': "Instrumentista"
        }, {
          'valor': '14'
          , 'texto': "CONTRATISTA"
        }, {
          'valor': '17'
          , 'texto': "Geral"
        }, {
          'valor': '18'
          , 'texto': "Pintor Industrial"
        }, {
          'valor': '23'
          , 'texto': "Metalurgico"
        }]
        , _0x1d7d49 = localStorage.getItem('pedido_ultimo_taller') || '8'
        , _0x3d8391 = localStorage.getItem("pedido_ultimo_tipo_trabalho") || '3'
        , _0x53a57e = [{
          'valor': '8'
          , 'texto': 'Caldeiraria'
        }, {
          'valor': '14'
          , 'texto': "Civil"
        }, {
          'valor': '2'
          , 'texto': 'Elétrico'
        }, {
          'valor': '11'
          , 'texto': "Externa"
        }, {
          'valor': '7'
          , 'texto': "Geral"
        }, {
          'valor': '10'
          , 'texto': "HSSE"
        }, {
          'valor': '18'
          , 'texto': "Instrumentação"
        }, {
          'valor': '9'
          , 'texto': "Limpeza"
        }, {
          'valor': '1'
          , 'texto': "Mecânica"
        }, {
          'valor': '6'
          , 'texto': "Pintura"
        }, {
          'valor': '15'
          , 'texto': "Predial"
        }, {
          'valor': '16'
          , 'texto': "Refrigeração"
        }, {
          'valor': '12'
          , 'texto': 'Sinalização'
        }, {
          'valor': '17'
          , 'texto': "Solda"
        }]
        , _0x3d107d = [{
          'valor': '3'
          , 'texto': "Manutenção Corretiva"
        }, {
          'valor': '1'
          , 'texto': "Manutenção de Emergência"
        }, {
          'valor': '7'
          , 'texto': "Manutenção Detectiva"
        }, {
          'valor': '6'
          , 'texto': "Manutenção Preditiva"
        }, {
          'valor': '5'
          , 'texto': "Manutenção Preventiva"
        }, {
          'valor': '8'
          , 'texto': "Manutenções Menores"
        }, {
          'valor': '9'
          , 'texto': "Modificações e Melhorias"
        }, {
          'valor': '2'
          , 'texto': "Serviços Gerais"
        }, {
          'valor': '10'
          , 'texto': "Assistência a Projetos"
        }, {
          'valor': '4'
          , 'texto': "Redesenho"
        }];
      _0x5f4c9f.innerHTML = "\n        <input type=\"text\" id=\"input-busca-equipamentos\" placeholder=\"Buscar por TAG ou nome...\" class=\"full-width-input\">\n        <div id=\"resultados-busca-equipamentos\" class=\"search-results\"></div>\n        <div class=\"equip-header\">\n    <div style=\"display: flex; align-items: center; gap: 8px;\">\n        <label>Equipamentos na Lista (<span id=\"equip-count\">0</span>):</label>\n        <button id=\"btn-os-marine\" title=\"Criar múltiplos pedidos via script JSON\">OS MARINE</button>\n    </div>\n    <button id=\"btn-limpar-equipamentos\" title=\"Limpar lista de equipamentos\">Limpar Tudo</button>\n</div>\n<ul id=\"equipamentos-selecionados-lista\" class=\"selected-equip-list\"></ul>\n        <label>Data Requerida:</label>\n        <input type=\"date\" id=\"pedido-data-requerida\" class=\"full-width-input\">\n        <div class=\"form-row\">\n            <div class=\"form-group\"><label>Taller (Oficina):</label><select id=\"pedido-taller\">" + _0x53a57e['map'](_0x18a256 => "<option value=\"" + _0x18a256.valor + '\x22\x20' + (_0x18a256['valor'] === _0x1d7d49 ? "selected" : '') + '>' + _0x18a256.texto + "</option>").join('') + "</select></div>\n            <div class=\"form-group\"><label>Tipo de Trabalho:</label><select id=\"pedido-tipo-trabalho\">" + _0x3d107d.map(_0x28a201 => '<option\x20value=\x22' + _0x28a201.valor + '\x22\x20' + (_0x28a201.valor === _0x3d8391 ? "selected" : '') + '>' + _0x28a201.texto + '</option>').join('') + "</select></div>\n        </div>\n        <label>Descrição do Pedido:</label>\n        <textarea id=\"pedido-descricao\" style=\"width:100%; height:45px;\"></textarea>\n\n<div class=\"action-row\">\n            <button id=\"btn-principal-acao\" class=\"action-btn create-btn\">✅ Criar Pedido</button>\n            <input type=\"number\" id=\"input-acao-valor\" value=\"1\" min=\"1\" title=\"Quantidade ou Nº da OT\" disabled>\n            <div class=\"multi-control-group\">\n                <div class=\"control-option\">\n                    <input type=\"checkbox\" id=\"check-criar-varios\">\n                    <label for=\"check-criar-varios\">Vários Pedidos</label>\n                </div>\n                <div class=\"control-option\">\n                    <input type=\"checkbox\" id=\"check-ordem-filha\">\n                    <label for=\"check-ordem-filha\">Ordem filha</label>\n                </div>\n            </div>\n        </div>\n        <input type=\"hidden\" id=\"input-quantidade-pedidos\" value=\"1\">\n\n        <hr class=\"section-divider\">\n        <label>Estado da Planificação:</label>\n        <select id=\"emissao-estado-plan\" class=\"full-width-input\">" + _0x119bf0.map(_0x1a7909 => "<option value=\"" + _0x1a7909.valor + '\x22\x20' + (_0x24658e.estadoPlan === _0x1a7909.valor ? "selected" : '') + '>' + _0x1a7909.texto + "</option>")['join']('') + "</select>\n        <div id=\"emissao-especialidades-container\"></div>\n        <div id=\"titanflow-emissao-container\" style=\"display: flex; margin-top: 1px; margin-bottom: 0px;\">\n            <button id=\"btn-iniciar-emissao\" class=\"full-width-btn action-btn emit-btn titanflow-action-btn\">\n                <span class=\"btn-text\">🚀 Iniciar Emissão em Massa</span><span class=\"btn-progress-fill\"></span>\n            </button>\n        </div>\n    ";
      const _0x3545c6 = document['createElement']("style");
      _0x3545c6.textContent = "\n        .section-title { font-weight: bold; font-size: 14px; color: #3366ff; margin: 12px 0 8px 0; }\n        #conteudo-abas input[type=\"text\"], #conteudo-abas input[type=\"date\"], #conteudo-abas input[type=\"number\"], #conteudo-abas select, #conteudo-abas textarea { width: 100%; padding: 6px; margin: 2px 0; border: 1px solid #ccc; border-radius: 3px; background-color: #fff; box-sizing: border-box; transition: border-color 0.2s ease, box-shadow 0.2s ease; font-size: 13px; -webkit-appearance: none; -moz-appearance: none; appearance: none; }\n        #conteudo-abas select { background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'); background-repeat: no-repeat; background-position: right .7em top 50%; background-size: .65em auto; padding-right: 2em; }\n        #conteudo-abas input:focus, #conteudo-abas select:focus, #conteudo-abas textarea:focus { border-color: #3366ff; outline: none; box-shadow: 0 0 0 2px rgba(51, 102, 255, 0.2); }\n        .search-results {\n    max-height: 250px;\n    overflow-y: auto;\n    border: 1px solid #ccc;\n    border-top: none;\n    background: white;\n    position: absolute;\n    width: calc(100% - 20px);\n    z-index: 100;\n    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n        .selected-item-display { padding: 6px; border: 1px solid #ccc; background: #e9e9e9; margin-bottom: 8px; min-height: 18px; font-size: 12px; }\n        .form-row { display: flex; gap: 3px; margin-top: 1px; }\n        .form-group { flex: 1; }\n        .form-group label { display: block; margin-bottom: 2px; }\n        .full-width-btn, .action-btn { display: inline-flex; align-items: center; justify-content: center; border: none; font-weight: bold; cursor: pointer; border-radius: 4px; color: white; box-shadow: 0 1px 2px rgba(0,0,0,0.15); transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease; }\n        .full-width-btn { padding: 6px; width: 100%; margin-bottom: 5px; box-sizing: border-box; }\n        .action-btn { padding: 8px 10px; width: 100%;}\n        .full-width-btn:hover, .action-btn:hover { filter: brightness(110%); transform: translateY(-2px); box-shadow: 0 3px 6px rgba(0,0,0,0.20); }\n        .full-width-btn:active, .action-btn:active { filter: brightness(100%); transform: translateY(1px); box-shadow: none; }\n        #btn-atualizar-equipamentos { background-color: #495057; }\n        .create-btn { background-color: #28a745; flex-grow: 1; }\n        .emit-btn { background-color: #17a2b8; margin-top: 1px; margin-bottom: 5px; }\n        .section-divider { margin: 5px 0; border: 0; border-top: 1px solid #ccc; }\n        .specialty-group { border: 1px solid #ddd; border-radius: 4px; padding: 8px; margin-bottom: 2px; }\n        .specialty-group-row { display: flex; gap: 10px; margin-top: 4px; }\n        .specialty-group-row > div { flex: 1; }\n        label { font-size: 12px; display: block; margin-top: 5px; margin-bottom: 1px; }\n\n.action-row { display: flex; align-items: center; gap: 8px; margin-top: 4px; }\n        #btn-principal-acao { flex-grow: 1; }\n        .multi-control-group { display: flex; flex-direction: column; gap: 4px; }\n        .control-option { display: flex; align-items: center; gap: 5px; }\n        .control-option label { font-size: 11px; margin: 0; cursor: pointer; user-select: none; }\n        .control-option input[type=\"checkbox\"] { width: auto; margin: 0; cursor: pointer; }\n\n #input-acao-valor {\n            width: 45px !important; /\n            text-align: center;\n            padding: 8px 4px;\n            transition: width 0.3s ease-in-out;\n        }\n        #input-acao-valor.expanded {\n            width: 95px !important; /\n        }\n        #btn-principal-acao.emit-mode { background-color: #0072c6; }\n        /* Estilos MÍNIMOS e necessários para a lista de equipamentos */\n    .equip-header { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; }\n    .equip-header label { margin: 0; font-size: 13px; font-weight: 600; }\n    #btn-limpar-equipamentos {\n    background-color: #dc3545;\n    color: white;\n    border: none;\n    padding: 4px 8px;\n    font-size: 11px;\n    font-weight: bold;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: transform 0.15s ease, filter 0.15s ease;\n}\n#btn-limpar-equipamentos:hover {\n    filter: brightness(115%);\n    transform: translateY(-1px);\n}\n#btn-limpar-equipamentos:active {\n    transform: translateY(0px);\n    filter: brightness(100%);\n}\n    .selected-equip-list { max-height: 80px; overflow-y: auto; border: 1px solid #ccc; background: #f8f9fa; margin: 5px 0 8px 0; padding: 5px; list-style: none; min-height: 6px; }\n    .selected-equip-list li { display: flex; justify-content: space-between; align-items: center; background: white; padding: 4px 8px; border-radius: 3px; font-size: 12px; margin-bottom: 3px; border: 1px solid #e0e0e0; }\n    .remove-equip-btn { cursor: pointer; color: #dc3545; font-weight: bold; padding: 0 5px; font-size: 16px; }\n    .result-item {\n    padding: 8px 12px;\n    cursor: pointer;\n    font-size: 13px;\n    border-bottom: 1px solid #f0f0f0;\n    transition: background-color 0.2s ease;\n}\n.result-item:last-child {\n    border-bottom: none;\n}\n.result-item:hover {\n    background-color: #f5f5f5;\n}\n.result-tag {\n    font-weight: bold;\n    color: #0056b3;\n    margin-right: 8px;\n}\n.highlight {\n    font-weight: bold;\n}\n/* --- ESTILOS PARA A LISTA DE EQUIPAMENTOS SELECIONADOS --- */\n.selected-equip-list {\n    max-height: 120px; /* Um pouco mais de altura */\n    border: 1px solid #dee2e6; /* Borda mais suave */\n    border-radius: 4px;\n    padding: 6px; /* Espaçamento interno */\n    transition: box-shadow 0.2s ease;\n}\n.selected-equip-list:focus-within {\n     box-shadow: 0 0 0 2px rgba(51, 102, 255, 0.2); /* Efeito de foco */\n}\n.selected-equip-list li {\n    background-color: #fff;\n    border: 1px solid #e9ecef;\n    padding: 6px 10px;\n    margin-bottom: 2px;\n    transition: border-color 0.2s ease, box-shadow 0.15s ease;\n}\n.selected-equip-list li:hover {\n    border-color: #007bff; /* Borda azul ao passar o mouse */\n    box-shadow: 0 1px 3px rgba(0,0,0,0.08);\n}\n.selected-equip-list .item-tag {\n    font-weight: bold;\n    color: #0056b3;\n    margin-right: 3px;\n}\n.remove-equip-btn {\n    font-size: 20px;\n    line-height: 1;\n    font-weight: bold;\n    color: #adb5bd; /* Cor cinza, mais discreta */\n    transition: color 0.2s ease, transform 0.2s ease;\n}\n.remove-equip-btn:hover {\n    color: #dc3545; /* Fica vermelho ao passar o mouse */\n    transform: scale(1.2); /* Aumenta um pouco de tamanho */\n}\n.empty-list-message {\n    font-size: 12px;\n    color: #6c757d;\n    text-align: center;\n    padding: 2px 0;\n}\n#btn-os-marine {\n    background-color: #005A9C; /* Azul marinho */\n    color: white;\n    border: none;\n    padding: 4px 4px;\n    font-size: 11px;\n    font-weight: bold;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: transform 0.15s ease, filter 0.15s ease;\n}\n#btn-os-marine:hover {\n    filter: brightness(115%);\n    transform: translateY(-1px);\n}\n    ", _0x5f4c9f['prepend'](_0x3545c6);
      const _0x17abf4 = document.getElementById('pedido-taller')
        , _0x995319 = document.getElementById("pedido-tipo-trabalho");
// --- CÓDIGO NOVO (PASSO 1 - VERSÃO VISUAL MELHORADO) ---
// 1. Cria a lista de opções
const listaPropositos = [
    {v: '', t: '-- Selecione --'},
    {v: '1', t: '1. Housekeeping'},
    {v: '2', t: '2. Cost Reduction'},
    {v: '3', t: '3. Process Improvement/Minor Safety'},
    {v: '4', t: '4. Preventive / Minor Corrective'},
    {v: '5', t: '5. Breakdown'},
    {v: '6', t: '6. Safety'},
    {v: '7', t: '7. Safety Critical Hazard (SCH)'}
];

// 2. Cria a LINHA (Row) e o GRUPO (Group) para usar o estilo nativo do script
const rowProposito = document.createElement('div');
rowProposito.className = 'form-row'; // Classe nativa para linha
rowProposito.style.marginTop = '8px'; // Espaçamento para não grudar

rowProposito.innerHTML =
    '<div class="form-group">' + // Classe nativa para agrupamento
        '<label style="font-size: 12px; font-weight: 600; color: #333;">Propósito:</label>' +
        '<select id="pedido-proposito" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px; background-color: #fff;">' +
            listaPropositos.map(p => '<option value="' + p.v + '">' + p.t + '</option>').join('') +
        '</select>' +
    '</div>';

// 3. Injeta LOGO ABAIXO da linha onde estão "Oficina" e "Tipo"
// _0x995319 é o campo "Tipo de Trabalho". O "pai do pai" dele é a linha inteira.
const campoTipo = _0x995319 || document.getElementById('pedido-tipo-trabalho');

if (campoTipo && campoTipo.parentNode && campoTipo.parentNode.parentNode) {
    // Inserimos DEPOIS da linha atual, criando uma nova linha só para o Propósito
    campoTipo.parentNode.parentNode.insertAdjacentElement('afterend', rowProposito);
}
// --- FIM DO CÓDIGO NOVO ---
      _0x17abf4['addEventListener']("change", () => {
        localStorage.setItem('pedido_ultimo_taller', _0x17abf4.value), _0xb11661("Último Taller salvo:", _0x17abf4.value);
      }), _0x995319.addEventListener('change', () => {
        localStorage.setItem("pedido_ultimo_tipo_trabalho", _0x995319.value), _0xb11661("Último Tipo de Trabalho salvo:", _0x995319.value);
      });
      const _0x1a3c59 = document.getElementById("pedido-data-requerida");
      _0x1a3c59.value = new Date().toISOString().split('T')[0x0], _0x1a3c59.min = _0x1a3c59.value, document.getElementById("input-busca-equipamentos").oninput = _0x4761f2;
      const _0x4ddf92 = document['getElementById']("emissao-especialidades-container")
        , _0x29f31a = _0x24658e.especialidades && _0x24658e.especialidades[0x0] || {};
      _0x4ddf92.innerHTML = "\n        <div class=\"specialty-group\">\n            <label>Especialidade:</label>\n            <select id=\"esp-id-1\">" + _0x1397cd.map(_0x1964c6 => "<option value=\"" + _0x1964c6.valor + '\x22\x20' + (_0x29f31a['id'] === _0x1964c6.valor ? "selected" : '') + '>' + _0x1964c6.texto + "</option>").join('') + "</select>\n            <div class=\"specialty-group-row\">\n                <div><label>Pessoas:</label><input type=\"number\" id=\"esp-pessoas-1\" min=\"0\" value=\"" + (_0x29f31a.pessoas || 0x0) + "\" disabled></div>\n                <div><label>Horas:</label><input type=\"number\" id=\"esp-horas-1\" min=\"0\" value=\"" + (_0x29f31a['horas'] || 0x0) + "\" disabled></div>\n            </div>\n        </div>", document.getElementById("btn-iniciar-emissao").onclick = () => {
        _0x36cec0(event.currentTarget);
        if (_0x2b7552.length === 0x0) {
          _0x2786ff("Nenhum pedido/ordem selecionado para emissão!", "warning");
          return;
        }
        const _0x3b4e41 = document.getElementById("titanflow-emissao-container");
        _0xc0586b(document['getElementById']("btn-iniciar-emissao"), _0x3b4e41, _0x3872cf);
      };
      (() => {
        const _0xcont = document.getElementById('titanflow-emissao-container');
        if (!_0xcont || document.getElementById('btn-cancelar-pedidos') || !(new URLSearchParams(location.search).get('seccion') === 'titan_trabajos_pedidos')) return;
        const _0xbt = document.createElement('button');
        _0xbt.id = 'btn-cancelar-pedidos';
        _0xbt.className = 'full-width-btn action-btn titanflow-action-btn';
        _0xbt.innerHTML = '<span class="btn-text">🛑 Cancelar Pedidos</span><span class="btn-progress-fill"></span>';
        Object.assign(_0xbt.style, { backgroundColor: '#dc3545', color: 'white', marginLeft: '5px' });
        _0xcont.appendChild(_0xbt);
        _0xbt.onclick = () => {
          if (_0x2b7552.length === 0) {
            _0x2786ff('Nenhum pedido selecionado para cancelar!', 'warning');
            return;
          }
          _0xc0586b(_0xbt, _0xcont, _0x497030);
        };
      })();
      (() => {
        const marine = document.getElementById('btn-os-marine');
        if (!marine || document.getElementById('tf-btn-planilha') || _tfTela() !== 'pedidos') return;
        const b = document.createElement('button');
        b.id = 'tf-btn-planilha';
        b.title = 'Criar vários pedidos colando linhas do Excel';
        b.textContent = '📊 Planilha';
        b.className = marine.className;
        b.style.cssText = marine.style.cssText;
        b.style.marginLeft = '5px';
        b.onclick = (ev) => { ev.preventDefault(); _tfAbrirPlanilha(); };
        marine.insertAdjacentElement('afterend', b);
      })();
      (() => {
        const planilha = document.getElementById('tf-btn-planilha');
        if (!planilha || document.getElementById('tf-btn-fluxo') || _tfTela() !== 'pedidos') return;
        const b = document.createElement('button');
        b.id = 'tf-btn-fluxo';
        b.title = 'Criar, emitir, mão de obra, ativar, executar e fechar em sequência';
        b.textContent = '⚙️ Fluxo completo';
        b.className = planilha.className;
        b.style.cssText = planilha.style.cssText;
        b.onclick = (ev) => { ev.preventDefault(); _tfAbrirFluxo(); };
        planilha.insertAdjacentElement('afterend', b);
      })();
      const _0x55d0b7 = () => {
        const _0x3359ca = {
            'estadoPlan': document.getElementById("emissao-estado-plan").value
            , 'especialidades': [{
              'id': document['getElementById']("esp-id-1").value
              , 'pessoas': document.getElementById("esp-pessoas-1")['value']
              , 'horas': document.getElementById("esp-horas-1").value
            }]
          };
        localStorage.setItem("emissao_saved_data", JSON['stringify'](_0x3359ca));
      };
      document.getElementById("emissao-estado-plan")['onchange'] = _0x55d0b7, document.getElementById("esp-pessoas-1").oninput = _0x55d0b7, document['getElementById']("esp-horas-1").oninput = _0x55d0b7;
      const _0x33bb3d = document.getElementById('esp-id-1');
      _0x33bb3d.onchange = () => {
        const _0x7c0fcb = _0x33bb3d.value !== '';
        document['getElementById']("esp-pessoas-1").disabled = !_0x7c0fcb, document['getElementById']('esp-horas-1').disabled = !_0x7c0fcb, !_0x7c0fcb && (document.getElementById('esp-pessoas-1').value = 0x0, document.getElementById("esp-horas-1")['value'] = 0x0), _0x55d0b7();
      }, _0x33bb3d['dispatchEvent'](new Event("change"));
      const _0x5e06d3 = document.getElementById("check-criar-varios")
        , _0x3560d9 = document['getElementById']("check-ordem-filha")
        , _0x3b9f98 = document.getElementById("input-acao-valor")
        , _0xaab39b = document.getElementById('btn-principal-acao');

      function _0x2a4909() {
        const _0xd7b475 = _0x5e06d3['checked'], _0x534e8e = _0x3560d9.checked;
        _0x3b9f98['disabled'] = !_0xd7b475 && !_0x534e8e;
        if (_0x534e8e) {
          _0x3b9f98.type = "text", _0xaab39b.innerHTML = '<span>Emitir\x20Pedido\x20(Filha)</span>', _0xaab39b.classList.add("emit-mode"), _0x3b9f98['classList']['add']('expanded'), _0x3b9f98.placeholder = "Nº da OT";
          if (_0x3b9f98['value'].length < 0x3) _0x3b9f98['value'] = '';
        } else {
          _0x3b9f98.type = "number", _0xaab39b.innerHTML = '✅\x20Criar\x20Pedido', _0xaab39b.classList['remove']('emit-mode'), _0x3b9f98.classList.remove("expanded"), _0x3b9f98['placeholder'] = "Qtd";
          if (!_0x3b9f98.value || parseInt(_0x3b9f98.value) < 0x1) _0x3b9f98.value = '1';
        }
      }
      _0x5e06d3.addEventListener("change", () => {
        _0x5e06d3.checked ? _0x3560d9.checked = ![] : _0x3b9f98.value = '1', _0x2a4909();
      }), _0x3560d9.addEventListener('change', () => {
        _0x3560d9.checked ? _0x5e06d3.checked = ![] : _0x3b9f98['value'] = '1', _0x2a4909();
      }), _0x2a4909(), _0xaab39b.onclick = () => {
        if (_0x3560d9['checked']) _0x574ba0();
        else {
          const _0x3b29ba = JSON.parse(localStorage['getItem']("titanflow_equipamentos_selecionados") || '[]')
            , _0x249679 = document.getElementById('pedido-descricao')['value'];
          if (_0x3b29ba.length === 0x0) return _0x2786ff("Erro: Nenhum equipamento foi selecionado!", 'error');
          if (!_0x249679.trim()) return _0x2786ff("Erro: O campo \"Descrição do Pedido\" é obrigatório.", 'error');
          const _0x56c565 = _0x5e06d3['checked'] ? parseInt(_0x3b9f98.value, 0xa) || 0x1 : 0x1;
          document.getElementById("input-quantidade-pedidos").value = _0x56c565;
          const _0x5ea36e = document.querySelector(".action-row");
          typeof _0xc0586b === 'function' ? _0xc0586b(_0xaab39b, _0x5ea36e, _0x565b94) : _0x565b94(null);
        }
      }, _0x3b9f98['addEventListener']("input", () => {
        let _0x4932d3 = _0x3b9f98.value.replace(/\D/g, '');
        const _0x14ac79 = _0x3560d9.checked ? 0x7 : 0x2;
        _0x4932d3.length > _0x14ac79 && (_0x4932d3 = _0x4932d3.slice(0x0, _0x14ac79)), _0x3b9f98.value = _0x4932d3;
      }), document.getElementById("btn-limpar-equipamentos").onclick = _0x4bf71a, _0x162603();
      const _0x27b47f = document['getElementById']("pedido-descricao")
        , _0x26775c = "titanflow_pedido_descricao_salva"
        , _0x302e48 = localStorage.getItem(_0x26775c);
      _0x302e48 && (_0x27b47f.value = _0x302e48);
      _0x27b47f['addEventListener']("input", () => {
        localStorage.setItem(_0x26775c, _0x27b47f.value);
      }), _0x27b47f.style.resize = "vertical", _0x27b47f.style.transition = "height 0.2s ease";

      function _0x4f4dbe() {
        const _0x47a7cc = 0x2d;
        this.style.height = 'auto';
        const _0x4ad9d1 = Math.max(_0x47a7cc, this.scrollHeight);
        this.style['height'] = _0x4ad9d1 + 'px';
      }
      _0x27b47f.addEventListener('input', _0x4f4dbe, ![]), _0x4f4dbe.call(_0x27b47f), document.getElementById("btn-os-marine").onclick = _0x595ad3;
    }
    async function _0x3a1f53(_0x32c1a7 = ![]) {
      const _0x5c0643 = "titanflow_session_equipamentos" + '_v2';
      return new Promise((_0x5391d5, _0x23a4e0) => {
        const _0x5be383 = _0x2012f5();
        if (!_0x5be383) return alert("ERRO: SESID não encontrado."), _0x23a4e0(new Error("SESID não encontrado."));
        const _0x2e8f77 = document.createElement("iframe");
        _0x2e8f77.style['display'] = 'none', _0x2e8f77.src = '/albatros/admin.php?SESID=' + _0x5be383 + "&show=mr&seccion=titan_equipos_arbol&id_reg=0", _0x2e8f77.onload = () => {
          try {
            const _0x378fbf = _0x2e8f77['contentDocument']['body'].innerText
              , _0x50d029 = _0x554d69(_0x378fbf);
            if (_0x50d029.length > 0x0) _0x34e176 = _0x50d029, sessionStorage['setItem'](_0x5c0643, JSON.stringify(_0x50d029)), localStorage['setItem']('lista_equipamentos_titan', JSON['stringify'](_0x50d029)), _0x5391d5(_0x50d029);
            else throw new Error('Não\x20foi\x20possível\x20extrair\x20nenhum\x20equipamento.');
          } catch (_0x26112f) {
            _0x23a4e0(_0x26112f);
          } finally {
            document.body.removeChild(_0x2e8f77);
          }
        }, _0x2e8f77['onerror'] = () => {
          document.body.removeChild(_0x2e8f77), _0x23a4e0(new Error("Erro crítico ao carregar a página de equipamentos."));
        }, document.body.appendChild(_0x2e8f77);
      });
    }

    function _0x554d69(_0x402617) {
      const _0x85c9c6 = [], _0x2fd7e0 = /node(\d+)\s+node(\d+)\s+\[(.*?)\]\s+(.*?)\s+showData\(".*?",\s*"(\d+)"\)/g, _0x52aa29 = _0x402617.matchAll(_0x2fd7e0);
      for (const _0x55571a of _0x52aa29) {
        _0x85c9c6['push']({
          'tag': _0x55571a[0x3]
          , 'nome': _0x55571a[0x4].trim()
          , 'id': _0x55571a[0x5]
          , 'pai': _0x55571a[0x2] === '0' ? '' : _0x55571a[0x2]
        });
      }
      return _0x85c9c6;
    }

    function _0x360915(_0x20cbb8) {
      if (!_0x20cbb8) return '';
      return _0x20cbb8['toString']().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/ç/g, 'c');
    }

    function _0xc2fe5f(_0x2329b8, _0x5cac47) {
      const _0x4db129 = /^[0-9.]+$/, _0x2cb46d = _0x4db129.test(_0x2329b8.tag), _0x50f0a5 = _0x4db129.test(_0x5cac47.tag);
      if (_0x2cb46d && !_0x50f0a5) return -0x1;
      if (!_0x2cb46d && _0x50f0a5) return 0x1;
      if (_0x2cb46d && _0x50f0a5) {
        const _0x4d0c0c = _0x2329b8.tag.split('.')['map'](Number)
          , _0x6250b4 = _0x5cac47.tag['split']('.').map(Number)
          , _0x496f90 = Math.max(_0x4d0c0c['length'], _0x6250b4.length);
        for (let _0x524dae = 0x0; _0x524dae < _0x496f90; _0x524dae++) {
          const _0x113782 = _0x4d0c0c[_0x524dae] || 0x0
            , _0xeed7db = _0x6250b4[_0x524dae] || 0x0;
          if (_0x113782 < _0xeed7db) return -0x1;
          if (_0x113782 > _0xeed7db) return 0x1;
        }
        return _0x4d0c0c.length - _0x6250b4.length;
      }
      return _0x2329b8.tag.localeCompare(_0x5cac47.tag);
    }

    function _0x4761f2(_0x49d07a) {
      const _0x21df64 = _0x360915(_0x49d07a.target.value), _0x23ebb1 = JSON.parse(localStorage.getItem("lista_equipamentos_titan") || '[]'), _0x3b8c82 = document.getElementById("resultados-busca-equipamentos");
      _0x3b8c82.innerHTML = '';
      if (_0x21df64.length < 0x2) return;
      const _0x4cc99f = _0x23ebb1['filter'](_0xde0bb8 => _0x360915(_0xde0bb8.tag).includes(_0x21df64) || _0x360915(_0xde0bb8.nome).includes(_0x21df64));
      _0x4cc99f.sort(_0xc2fe5f), _0x4cc99f.slice(0x0, 0x32)['forEach'](_0x5b46a1 => {
        const _0x209494 = document.createElement("div");
        _0x209494.style['padding'] = "5px", _0x209494.style.cursor = 'pointer', _0x209494.innerHTML = "<b>[" + _0x5b46a1.tag + "]</b> " + _0x5b46a1.nome, _0x209494.onmouseover = () => _0x209494.style.backgroundColor = '#f0f0f0', _0x209494.onmouseout = () => _0x209494.style.backgroundColor = 'transparent', _0x209494.onclick = () => _0x279f1c(_0x5b46a1), _0x3b8c82.appendChild(_0x209494);
      });
    }

    function _0x279f1c(_0xe7df2d) {
      let _0x4c4dbe = JSON.parse(localStorage.getItem("titanflow_equipamentos_selecionados") || '[]');
      const _0x507351 = _0x4c4dbe.some(_0x549033 => _0x549033['id'] === _0xe7df2d['id']);
      if (_0x507351) {
        _0x2786ff("Equipamento [" + _0xe7df2d.tag + ']\x20já\x20está\x20na\x20lista.', 'info', 0x7d0);
        return;
      }
      _0x4c4dbe['push']({
        'id': _0xe7df2d['id']
        , 'tag': _0xe7df2d['tag']
        , 'nome': _0xe7df2d['nome']
      }), localStorage.setItem("titanflow_equipamentos_selecionados", JSON['stringify'](_0x4c4dbe)), _0x162603();
    }

    function _0x162603() {
      const _0x29b1e5 = JSON.parse(localStorage.getItem("titanflow_equipamentos_selecionados") || '[]'), _0x2f8ef4 = document.getElementById("equipamentos-selecionados-lista"), _0x4ba011 = document.getElementById('equip-count');
      if (!_0x2f8ef4 || !_0x4ba011) return;
      _0x2f8ef4.innerHTML = '', _0x4ba011['textContent'] = _0x29b1e5.length, _0x29b1e5.length === 0x0 ? _0x2f8ef4['innerHTML'] = "<div class=\"empty-list-message\">Nenhum equipamento na lista...</div>" : _0x29b1e5.forEach(_0x3cd720 => {
        const _0x3391f5 = document.createElement('li');
        _0x3391f5['innerHTML'] = "<span><span class=\"item-tag\">[" + _0x3cd720['tag'] + "]</span> " + _0x3cd720.nome + "</span>\n                              <span class=\"remove-equip-btn\" data-id=\"" + _0x3cd720['id'] + '\x22\x20title=\x22Remover\x22>&times;</span>', _0x2f8ef4.appendChild(_0x3391f5);
      }), document.querySelectorAll(".remove-equip-btn")['forEach'](_0x271906 => {
        _0x271906.onclick = _0x4b164c => _0x58b6b9(_0x4b164c['currentTarget'].dataset['id']);
      });
    }

    function _0x58b6b9(_0x59d2f3) {
      let _0x1a7e44 = JSON.parse(localStorage.getItem('titanflow_equipamentos_selecionados') || '[]');
      _0x1a7e44 = _0x1a7e44['filter'](_0x4318bf => _0x4318bf['id'] !== _0x59d2f3), localStorage.setItem('titanflow_equipamentos_selecionados', JSON.stringify(_0x1a7e44)), _0x162603();
    }

    function _0x4bf71a() {
      localStorage['setItem']("titanflow_equipamentos_selecionados", JSON.stringify([])), _0x162603();
    }

    function _0xc4d1f2() {
      if (_0x4458b3 === "tecnico") return;

      function _0x347847(_0x3e5fc5) {
        if (!_0x3e5fc5) return '';
        return _0x3e5fc5.toString()['toLowerCase']().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
      }
      const _0x1bf94b = "titanflow_dashboard_filters";

      function _0x1bee9c() {
        const _0x584286 = {
            'ot': document.getElementById('filtro-ot').value
            , 'equipamento': document.getElementById("filtro-equipamento")['value']
            , 'descricao': document.getElementById("filtro-descricao")['value']
            , 'oficina': document.getElementById("filtro-oficina").value
            , 'tipoTrabalho': document['getElementById']("filtro-tipo-trabalho").value
            , 'tipoData': document.getElementById("filtro-tipo-data")['value']
            , 'dataDesde': document.getElementById("filtro-data-desde").value
            , 'dataAte': document.getElementById("filtro-data-ate")['value']
            , 'status': Array.from(document['querySelectorAll']('.filtro-status-btn.selected'))['map'](_0x39b083 => _0x39b083['dataset'].value)
          };
        localStorage.setItem(_0x1bf94b, JSON.stringify(_0x584286));
      }

      function _0x3f56fe() {
        const _0x3ee22b = JSON.parse(localStorage.getItem(_0x1bf94b) || '{}');
        if (Object.keys(_0x3ee22b)['length'] === 0x0) return;
        document.getElementById('filtro-ot').value = _0x3ee22b['ot'] || '', document.getElementById("filtro-equipamento").value = _0x3ee22b['equipamento'] || '', document.getElementById("filtro-descricao").value = _0x3ee22b.descricao || '', document['getElementById']("filtro-oficina").value = _0x3ee22b.oficina || '', document.getElementById("filtro-tipo-trabalho").value = _0x3ee22b.tipoTrabalho || '', document.getElementById("filtro-tipo-data")['value'] = _0x3ee22b['tipoData'] || '', document.getElementById("filtro-data-desde")['value'] = _0x3ee22b['dataDesde'] || '', document.getElementById("filtro-data-ate").value = _0x3ee22b['dataAte'] || '', _0x3ee22b.status && _0x3ee22b['status'].length > 0x0 && document['querySelectorAll'](".filtro-status-btn").forEach(_0x449c7b => {
          _0x3ee22b.status['includes'](_0x449c7b['dataset'].value) && _0x449c7b.classList['add']("selected");
        });
      }

      function _0x393cb9() {
        localStorage.removeItem(_0x1bf94b), document.getElementById('filtro-ot').value = '', document.getElementById('filtro-equipamento').value = '', document['getElementById']("filtro-descricao")['value'] = '', document.getElementById("filtro-oficina").value = '', document['getElementById']("filtro-tipo-trabalho").value = '', document.getElementById('filtro-data-desde')['value'] = '', document.getElementById("filtro-data-ate").value = '', document.querySelectorAll(".filtro-status-btn.selected")['forEach'](_0x498c1a => _0x498c1a.classList['remove']('selected')), _0x2786ff('Filtros\x20limpos!', 'info');
      }

      function _0x3f64d7() {

        function _0x426fd1(_0x1074aa) {
          const _0xd9385 = _0x1074aa['querySelector']("#resultado table");
          if (!_0xd9385) {
            const _0x4c3e8a = _0x1074aa.querySelector(".texto11 font[color=\"red\"]");
            return _0x4c3e8a && !_0x4c3e8a.innerText.includes("filtro activo") && alert('A\x20busca\x20não\x20retornou\x20resultados.\x20Mensagem\x20do\x20sistema:\x20\x22' + _0x4c3e8a.innerText['trim']() + '\x22'), [];
          }
          const _0x43f688 = _0xd9385.querySelectorAll('tr')
            , _0x511794 = [];
          return _0x43f688['forEach'](_0x5adcca => {
            const _0x33b1ff = _0x5adcca.querySelectorAll('td');
            if (_0x33b1ff.length < 0xb) return;
            const _0x3c2ad3 = _0x5adcca.getAttribute("onclick")
              , _0x3ef859 = _0x3c2ad3 ? _0x3c2ad3['match'](/mostrar_acciones_disponibles\(this, '(\d+)'/) : null
              , _0x2fc0db = _0x3ef859 ? _0x3ef859[0x1] : "temp_" + Math.random();
            _0x511794.push({
              'id': _0x2fc0db
              , 'numeroOT': _0x33b1ff[0x0].innerText.trim()
              , 'status': _0x33b1ff[0x1].querySelector("img")?.title || "N/A"
              , 'tag': _0x33b1ff[0x2].innerText.trim()
              , 'equipamento': _0x33b1ff[0x3].innerText.trim()
              , 'descricao': _0x33b1ff[0x4].innerText.trim()
              , 'emissao': _0x33b1ff[0x5]['innerText'].trim()
              , 'solicitada': _0x33b1ff[0x6]['innerText']['trim']()
              , 'prog': _0x33b1ff[0x7]['innerText'].trim()
              , 'tipoTrabalho': _0x33b1ff[0x8].innerText.trim()
              , 'prioridade': _0x33b1ff[0x9].innerText.trim()
              , 'oficina': _0x33b1ff[0xa].innerText.trim()
            });
          }), _0x511794;
        }
        GM_addStyle("\n.btn-pdf-grupo { background-color: #dc3545; color: white; border: none; border-radius: 3px; padding: 4px 8px; font-size: 11px; cursor: pointer; margin-right: 10px; }\n#painel-custom {\n    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);\n    width: 95%; max-width: 1500px;\n    height: 85vh; background-color: #f0f2f5;\n    border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);\n    z-index: 99990; display: none; flex-direction: column; padding: 20px; font-family: Arial, sans-serif;\n}\n#painel-custom-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #ddd; }\n#painel-custom-header h2 { margin: 0; color: #1c1e21; }\n#busca-avancada { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-bottom: 15px; align-items: flex-end; }\n#busca-avancada input, #busca-avancada select { padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 100%; box-sizing: border-box; }\n.filtro-grupo { display: flex; flex-direction: column; gap: 5px; }\n.filtro-actions-wrapper {\n    grid-column: 1 / -1;\n    display: flex;\n    gap: 15px;\n    align-items: flex-end;\n}\n.filtro-status-container {\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 5px;\n    background: white;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n}\n.filtro-status-btn {\n    background-color: #e4e6eb;\n    border: 1px solid #ccd0d5;\n    border-radius: 5px;\n    padding: 6px 12px;\n    cursor: pointer;\n    font-size: 13px;\n    transition: all 0.2s ease-in-out;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n.filtro-status-btn:hover { background-color: #d8dbdf; }\n.filtro-status-btn .check-icon { display: none; color: white; }\n\n.filtro-status-btn.selected {\n    background-color: #1877f2;\n    color: white;\n    border-color: #1567d1;\n    /* A propriedade font-weight foi removida para garantir que o botão não mude de tamanho */\n}\n.filtro-status-btn.selected .check-icon {\n    display: inline;\n}\n\n#botao-buscar {\n    padding: 8px 25px;\n    background-color: #28a745;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: bold;\n    height: 100%;\n    white-space: nowrap;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.15);\n    transition: transform 0.15s ease, filter 0.15s ease, box-shadow 0.15s ease;\n}\n#botao-buscar:hover {\n    transform: translateY(-2px);\n    filter: brightness(110%);\n    box-shadow: 0 4px 8px rgba(0,0,0,0.25);\n}\n#botao-buscar:active {\n    transform: translateY(1px);\n    filter: brightness(100%);\n    box-shadow: none;\n}\n#botao-limpar-filtros {\n    padding: 8px 25px;\n    background-color: #6c757d; /* Cinza para diferenciar de \"Buscar\" */\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: bold;\n    height: 100%;\n    white-space: nowrap;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.15);\n    transition: transform 0.15s ease, filter 0.15s ease, box-shadow 0.15s ease;\n}\n#botao-limpar-filtros:hover {\n    transform: translateY(-2px);\n    filter: brightness(110%);\n    box-shadow: 0 4px 8px rgba(0,0,0,0.25);\n}\n#botao-limpar-filtros:active {\n    transform: translateY(1px);\n    filter: brightness(100%);\n    box-shadow: none;\n}\n#painel-custom-conteudo { flex-grow: 1; overflow-y: auto; border: 1px solid #ddd; position: relative; background-color: #fff; padding: 10px; }\n.loading-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255, 255, 255, 0.8); display: none; justify-content: center; align-items: center; font-size: 20px; font-weight: bold; color: #333; }\n.botao-nova-interface { position: fixed; top: 10px; right: 10px; z-index: 999998; background-color: #42b72a; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.2); font-weight: bold; transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease; }\n.total-summary { display: flex; flex-wrap: wrap; gap: 20px; padding: 12px; margin-bottom: 15px; background-color: #e9ecef; border: 1px solid #ced4da; border-radius: 5px; font-size: 14px; }\n.summary-item b { color: #000; }\n\n/* Botão Voltar ao Topo agora se posiciona relativo ao #painel-custom */\n.btn-scroll-top {\n    position: absolute;\n    bottom: 20px;\n    right: 30px;\n    background-color: #1877f2;\n    color: white;\n    border: none;\n    border-radius: 50%;\n    width: 45px;\n    height: 45px;\n    font-size: 24px;\n    cursor: pointer;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n    z-index: 10;\n    transition: background-color 0.2s, transform 0.2s;\n}\n.btn-scroll-top:hover {\n    background-color: #1567d1;\n    transform: scale(1.1);\n}\n.grupo-equipamento { background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); overflow: hidden; transition: box-shadow 0.3s ease; }\n.grupo-equipamento:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n.grupo-equipamento-header { background-color: #f7f7f7; padding: 12px 15px; font-weight: bold; cursor: pointer; border-bottom: 1px solid #e0e0e0; display: flex; justify-content: space-between; align-items: center; font-size: 16px; color: #333; }\n.grupo-equipamento-header .header-titulo { display: flex; align-items: center; gap: 10px; }\n.grupo-equipamento-header .header-controles { display: flex; align-items: center; gap: 15px; }\n.grupo-equipamento-header .contador-badge { background-color: #1877f2; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: bold; }\n.grupo-equipamento-header .toggle-icon { font-size: 16px; transition: transform 0.3s ease; color: #606770; }\n.grupo-equipamento-header.aberto .toggle-icon { transform: rotate(180deg); }\n.grupo-equipamento-conteudo { display: none; padding: 15px; background-color: #fff; }\n.equipamento-dashboard { padding: 10px; background: #f5f6f7; border-radius: 4px; margin-bottom: 10px; }\n.chart-container { width: 100%; display: flex; flex-direction: column; gap: 4px; margin-top: 5px; }\n.chart-bar-wrapper { display: flex; align-items: center; gap: 8px; }\n.chart-label { font-size: 12px; width: 80px; text-align: right; color: #606770; }\n.chart-bar { height: 20px; color: white; font-size: 11px; font-weight: bold; line-height: 20px; text-align: right; padding-right: 5px; border-radius: 3px; white-space: nowrap; transition: width 0.5s ease-in-out; }\n.tabela-ordens-moderna { width: 100%; border-collapse: collapse; margin-top: 15px; }\n.tabela-ordens-moderna th, .tabela-ordens-moderna td { padding: 12px 8px; text-align: left; border-bottom: 1px solid #e9e9e9; font-size: 13px; color: #333; }\n.tabela-ordens-moderna th { background-color: #f2f3f5; font-weight: bold; color: #606770; font-size: 12px; text-transform: uppercase; }\n.tabela-ordens-moderna tbody tr:nth-child(even) { background-color: #f7f8fa; }\n.tabela-ordens-moderna tbody tr:hover { background-color: #e9ebee; }\n        .dashboard-assinatura {\n    position: absolute;\n    bottom: 4px; /* Distância da parte de baixo do painel */\n    left: 50%;\n    transform: translateX(-50%); /* Centraliza horizontalmente */\n    font-size: 11px;\n    color: #888;\n    text-align: center;\n    z-index: 11; /* Garante que fique acima do botão 'Voltar ao Topo' */\n}\n\n        ");
        const _0x1bb58a = '\x0a\x20\x20\x20\x20<div\x20id=\x22painel-custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22painel-custom-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>Dashboard\x20de\x20Ordens\x20<span\x20id=\x22contador-ordens\x22></span></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22busca-avancada\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>OT\x20Nº:</label><input\x20type=\x22text\x22\x20id=\x22filtro-ot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Equipamento:</label><input\x20type=\x22text\x22\x20id=\x22filtro-equipamento\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Descrição:</label><input\x20type=\x22text\x22\x20id=\x22filtro-descricao\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Oficina:</label><select\x20id=\x22filtro-oficina\x22></select></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Tipo\x20Trabalho:</label><select\x20id=\x22filtro-tipo-trabalho\x22></select></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Tipo\x20de\x20Data:</label><select\x20id=\x22filtro-tipo-data\x22></select></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Desde:</label><input\x20type=\x22date\x22\x20id=\x22filtro-data-desde\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Até:</label><input\x20type=\x22date\x22\x20id=\x22filtro-data-ate\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-actions-wrapper\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22\x20style=\x22flex-grow:1;\x22><label>Status:</label><div\x20id=\x22filtro-status-container\x22\x20class=\x22filtro-status-container\x22></div></div>\x0a\x20\x20\x20\x20<button\x20id=\x22botao-limpar-filtros\x22>Limpar\x20Filtros</button>\x0a\x20\x20\x20\x20<button\x20id=\x22botao-buscar\x22>Buscar</button>\x0a</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22painel-custom-conteudo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22loading-overlay\x22>Carregando...</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22grupos-container\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20BOTÃO\x20MOVIDO\x20PARA\x20CÁ\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-scroll-top\x22>▲</button>\x0a\x20\x20\x20\x20</div>\x0a';
        document.body.insertAdjacentHTML('beforeend', _0x1bb58a);
        const _0x447817 = document.createElement("button");
        _0x447817['className'] = "botao-nova-interface", _0x447817['innerHTML'] = '🚀\x20Abrir\x20Dashboard', document['body']['appendChild'](_0x447817), _0x447817.addEventListener("mouseenter", () => {
          _0x447817.style['transform'] = "translateY(-2px)", _0x447817['style'].filter = 'brightness(110%)', _0x447817.style['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)";
        }), _0x447817.addEventListener("mouseleave", () => {
          _0x447817.style.transform = "translateY(0px)", _0x447817.style['filter'] = "brightness(100%)", _0x447817.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
        }), _0x447817.addEventListener("mousedown", () => {
          _0x447817.style.transform = 'translateY(1px)', _0x447817.style['boxShadow'] = "none";
        }), _0x447817.addEventListener("mouseup", () => {
          _0x447817.matches(":hover") && (_0x447817.style.transform = 'translateY(-2px)', _0x447817['style']['boxShadow'] = "0 4px 10px rgba(0,0,0,0.25)");
        });
        const _0x2e3e78 = document.getElementById('painel-custom');
        _0x2e3e78['addEventListener']("keydown", function (_0x937382) {
          _0x937382['key'] === 'Enter' && _0x937382.target.tagName !== "TEXTAREA" && (_0x937382.preventDefault(), document.getElementById("botao-buscar").click());
        });
        const _0xf64908 = document.createElement('div');
        _0xf64908.className = "dashboard-assinatura", _0xf64908['innerHTML'] = '👨‍💻\x20<em><a\x20href=\x22#\x22\x20target=\x22_blank\x22\x20style=\x22color:#1ab3a5;\x20text-decoration:\x20none;\x22>Desenvolvido\x20por\x20PCM</a></em>\x20&copy;\x20' + new Date().getFullYear(), _0x2e3e78['appendChild'](_0xf64908);
        const _0x523d8a = document.getElementById("grupos-container")
          , _0x967029 = _0x2e3e78.querySelector('.loading-overlay')
          , _0x522434 = document.getElementById("contador-ordens");
        let _0x475abd = [];
        const _0x1780b6 = document.getElementById('painel-custom-conteudo')
          , _0x4e31a1 = _0x2e3e78['querySelector'](".btn-scroll-top");
        _0x1780b6.addEventListener('scroll', () => {
          _0x1780b6.scrollTop > 0x12c ? _0x4e31a1.style.display = "flex" : _0x4e31a1.style.display = "none";
        }), _0x4e31a1['addEventListener']("click", () => {
          _0x1780b6.scrollTo({
            'top': 0x0
            , 'behavior': 'smooth'
          });
        });

        function _0x4d242a() {
          const _0x5bd6fd = (_0x1e6966, _0x3ec9ba, _0x5f4d74) => {
              const _0x480f8a = document.querySelector(_0x1e6966), _0x3320db = document['getElementById'](_0x3ec9ba);
              if (_0x480f8a && _0x3320db) {
                _0x3320db.innerHTML = _0x480f8a.innerHTML;
                if (_0x5f4d74) {
                  const _0xe470ce = document.createElement('option');
                  _0xe470ce['value'] = '', _0xe470ce.text = _0x5f4d74, _0x3320db.insertBefore(_0xe470ce, _0x3320db.firstChild), _0x3320db.value = '';
                }
              }
            }, _0x1b22c2 = document.getElementById("filtro-status-container"), _0x13ef87 = document.querySelector("select[name=\"estado_id\"]");
          _0x13ef87 && Array.from(_0x13ef87.options).forEach(_0xa0818d => {
            if (_0xa0818d.value) {
              const _0x28c840 = document.createElement("button");
              _0x28c840.className = "filtro-status-btn", _0x28c840.dataset.value = _0xa0818d.value, _0x28c840.dataset.status = _0xa0818d.text, _0x28c840['innerHTML'] = "<span class=\"check-icon\">✔ </span>" + _0xa0818d.text, _0x28c840.onclick = () => _0x28c840.classList['toggle']("selected"), _0x1b22c2.appendChild(_0x28c840);
            }
          }), _0x5bd6fd("select[name=\"taller_id\"]", "filtro-oficina", 'Todas\x20Oficinas'), _0x5bd6fd('select[name=\x22trabajo_tipo_id\x22]', "filtro-tipo-trabalho", "Todos Tipos"), _0x5bd6fd("select[name=\"tipo_fecha1\"]", "filtro-tipo-data", '');
        }

        function _0x13e91c(_0x45a561, _0x3de05e) {
          const _0x159cac = document['querySelector'](".btn-pdf-grupo[data-equipamento-nome=\"" + _0x45a561 + '\x22]');
          _0x159cac && (_0x159cac['disabled'] = !![], _0x159cac.textContent = "Gerando...");
          try {
            const {
              jsPDF: _0x231a18
            } = window.jspdf, _0xd2d78 = new _0x231a18({
              'orientation': "landscape"
            }), _0x462ac9 = "{totalPages}", _0x181835 = () => {
              _0xd2d78.setFontSize(0xe), _0xd2d78.setFont("helvetica", "bold"), _0xd2d78.text("Terminal Açu Serviços", 0xe, 0xa), _0xd2d78.text("OTAMERICA", _0xd2d78.internal.pageSize['width'] - 0xe, 0xa, {
                'align': "right"
              }), _0xd2d78['setLineWidth'](0.5), _0xd2d78.rect(0xe, 0xf, _0xd2d78['internal']['pageSize'].width - 0x1c, 0xa), _0xd2d78.setFontSize(0xc), _0xd2d78['text']("LISTA DE ORDENS DE SERVIÇO", _0xd2d78.internal.pageSize['width'] / 0x2, 0x16, {
                'align': "center"
              });
            }, _0x2d4909 = _0x1c1329 => {
              const _0x34f0d7 = _0x1c1329['pageNumber'];
              _0xd2d78.setFontSize(0x8);
              const _0x21d66b = new Date().toLocaleString("pt-BR", {
                'day': "2-digit"
                , 'month': '2-digit'
                , 'year': "numeric"
                , 'hour': "2-digit"
                , 'minute': "2-digit"
              });
              _0xd2d78.text(_0x21d66b, 0xe, _0xd2d78.internal['pageSize'].height - 0xa), _0xd2d78.text('Quantidade\x20de\x20registos:\x20' + _0x3de05e['length'], _0xd2d78['internal'].pageSize.width / 0x2, _0xd2d78.internal.pageSize.height - 0xa, {
                'align': "center"
              });
              const _0x406207 = "Página " + _0x34f0d7 + " de " + _0x462ac9;
              _0xd2d78['text'](_0x406207, _0xd2d78.internal.pageSize.width - 0xe, _0xd2d78.internal.pageSize['height'] - 0xa, {
                'align': "right"
              });
            }, _0x39fdea = [
              ["OT.Nº", 'Situação', 'Tag', "Equipamento", "Descrição", 'Emissão', "Solicitada", "Prog.", "Trabalho [tipo]", 'P.', "Oficina"]
            ], _0x1ce5bb = _0x3de05e.map(_0x40f2e6 => [_0x40f2e6.numeroOT, _0x40f2e6.status, _0x40f2e6.tag, _0x40f2e6['equipamento'], _0x40f2e6['descricao'], _0x40f2e6.emissao, _0x40f2e6.solicitada, _0x40f2e6.prog, _0x40f2e6.tipoTrabalho, _0x40f2e6.prioridade, _0x40f2e6['oficina']]);
            _0xd2d78.autoTable({
              'head': _0x39fdea
              , 'body': _0x1ce5bb
              , 'startY': 0x1b
              , 'didDrawPage': _0x50cee1 => {
                _0x181835(), _0x2d4909(_0x50cee1);
              }
              , 'margin': {
                'top': 0x1b
                , 'bottom': 0xf
              }
              , 'styles': {
                'fontSize': 0x7
                , 'cellPadding': 1.5
                , 'overflow': "linebreak"
              }
              , 'headStyles': {
                'fillColor': [0x16, 0x16, 0x16]
                , 'textColor': [0xff, 0xff, 0xff]
                , 'fontStyle': "bold"
              }
              , 'columnStyles': {
                0x0: {
                  'cellWidth': 0xc
                  , 'halign': "center"
                }
                , 0x1: {
                  'cellWidth': 0xf
                  , 'halign': "left"
                }
                , 0x2: {
                  'cellWidth': 0x14
                  , 'halign': "left"
                }
                , 0x3: {
                  'cellWidth': 0x28
                  , 'halign': "left"
                }
                , 0x4: {
                  'cellWidth': 0x41
                  , 'halign': 'left'
                }
                , 0x5: {
                  'cellWidth': 0xf
                  , 'halign': "center"
                }
                , 0x6: {
                  'cellWidth': 0xf
                  , 'halign': "center"
                }
                , 0x7: {
                  'cellWidth': 0xf
                  , 'halign': "center"
                }
                , 0x8: {
                  'cellWidth': 0x19
                  , 'halign': "left"
                }
                , 0x9: {
                  'cellWidth': 0x5
                  , 'halign': 'center'
                }
                , 0xa: {
                  'cellWidth': "auto"
                  , 'halign': "left"
                }
              }
            });
            typeof _0xd2d78.putTotalPages === 'function' && _0xd2d78.putTotalPages(_0x462ac9);
            const _0x3b8cf6 = "Relatorio_" + _0x45a561.replace(/[^a-z0-9]/gi, '_') + ".pdf";
            _0xd2d78['save'](_0x3b8cf6);
          } catch (_0x3e4e36) {
            console['error']("Erro ao gerar PDF:", _0x3e4e36), alert("Ocorreu uma falha ao gerar o PDF. Verifique o console (F12) para mais detalhes.");
          } finally {
            _0x159cac && (_0x159cac.disabled = ![], _0x159cac['textContent'] = "📄 PDF");
          }
        }

        function _0x1e1dc3(_0x26fa1) {
          const _0xd1e406 = {
              'Ativa': '#007bff'
              , 'Aberta': "#ffc107"
              , 'Cerrada': "#28a745"
              , 'Cancelada': "#dc3545"
              , 'Terminada': '#6c757d'
            }, _0x26a526 = Object['values'](_0x26fa1)['reduce']((_0x444b8f, _0x2008ad) => _0x444b8f + _0x2008ad, 0x0);
          if (_0x26a526 === 0x0) return '';
          let _0x2383c7 = "<div class=\"chart-container\">";
          for (const [_0x4664f7, _0x437f77] of Object.entries(_0x26fa1)) {
            const _0x7346d6 = (_0x437f77 / _0x26a526 * 0x64).toFixed(0x1)
              , _0x519087 = _0xd1e406[_0x4664f7] || "#6c757d";
            _0x2383c7 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chart-bar-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chart-label\x22>' + _0x4664f7 + "</div>\n                        <div class=\"chart-bar\" style=\"width: " + _0x7346d6 + "%; background-color: " + _0x519087 + ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x437f77 + '\x20(' + _0x7346d6 + "%)\n                        </div>\n                    </div>\n                ";
          }
          return _0x2383c7 += "</div>", _0x2383c7;
        }

        function _0x2aecad(_0x4c8409) {
          _0x523d8a['innerHTML'] = '', _0x522434.textContent = '(' + _0x4c8409['length'] + " ordens encontradas)";
          if (_0x4c8409.length === 0x0) {
            _0x523d8a.innerHTML = '<p\x20style=\x22text-align:center;\x20color:#888;\x20padding:\x2020px;\x22>Nenhuma\x20ordem\x20encontrada\x20para\x20os\x20filtros\x20selecionados.</p>';
            return;
          }
          const _0x123001 = _0x4c8409.reduce((_0x1a9ad5, _0x4dc781) => {
            return _0x1a9ad5[_0x4dc781.status] = (_0x1a9ad5[_0x4dc781.status] || 0x0) + 0x1, _0x1a9ad5;
          }, {});
          let _0x2409e3 = "<div class=\"total-summary\">";
          for (const [_0x2cf0e2, _0x42eb8d] of Object.entries(_0x123001)) {
            _0x2409e3 += '<div\x20class=\x22summary-item\x22><b>' + _0x2cf0e2 + ":</b> " + _0x42eb8d + "</div>";
          }
          _0x2409e3 += '</div>', _0x523d8a['innerHTML'] = _0x2409e3;
          const _0x3c6604 = _0x4c8409.reduce((_0x5b8746, _0x431adb) => {
              const _0x1bc6f1 = _0x431adb.equipamento || "Equipamento não especificado";
              if (!_0x5b8746[_0x1bc6f1]) _0x5b8746[_0x1bc6f1] = [];
              return _0x5b8746[_0x1bc6f1].push(_0x431adb), _0x5b8746;
            }, {})
            , _0x1f8cf3 = Object.entries(_0x3c6604)['sort']((_0x451193, _0x5a4c37) => _0x5a4c37[0x1]['length'] - _0x451193[0x1].length);
          for (const [_0x163303, _0x4a3b9e] of _0x1f8cf3) {
            const _0x251528 = 'grupo-' + _0x163303.replace(/[^a-zA-Z0-9]/g, '')
              , _0x3a4bb3 = _0x4a3b9e['reduce']((_0x364275, _0x17965e) => {
                return _0x364275[_0x17965e.status] = (_0x364275[_0x17965e['status']] || 0x0) + 0x1, _0x364275;
              }, {})
              , _0x153d9c = _0x1e1dc3(_0x3a4bb3)
              , _0x361840 = "\n            <div class=\"grupo-equipamento\">\n                <div class=\"grupo-equipamento-header\" data-target=\"" + _0x251528 + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-titulo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toggle-icon\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + _0x163303 + "</span>\n                    </div>\n                    <div class=\"header-controles\">\n                        <button class=\"btn-pdf-grupo\" data-equipamento-nome=\"" + _0x163303 + "\">📄 PDF</button>\n                        <span class=\"contador-badge\">" + _0x4a3b9e.length + " ordem(s)</span>\n                    </div>\n                </div>\n                <div class=\"grupo-equipamento-conteudo\" id=\"" + _0x251528 + "\">\n                    <div class=\"equipamento-dashboard\">" + _0x153d9c + "</div>\n                    <table class=\"tabela-ordens-moderna\">\n                        <thead>\n                            <tr>\n                                <th>OT Nº</th>\n                                <th>Status</th>\n                                <th>Tag</th>\n                                <th>Descrição</th>\n                                <th>Oficina</th>\n                                <th>Emissão</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            " + _0x4a3b9e.map(_0x122320 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x122320['numeroOT'] + "</td>\n                                    <td>" + _0x122320.status + "</td>\n                                    <td>" + _0x122320.tag + "</td>\n                                    <td>" + _0x122320.descricao + "</td>\n                                    <td>" + _0x122320.oficina + "</td>\n                                    <td>" + _0x122320.emissao + "</td>\n                                </tr>").join('') + "\n                        </tbody>\n                    </table>\n                </div>\n            </div>";
            _0x523d8a.insertAdjacentHTML("beforeend", _0x361840);
          }
          document.querySelectorAll(".grupo-equipamento-header")['forEach'](_0x3a7892 => {
            _0x3a7892.addEventListener('click', _0x1b0b19 => {
              if (_0x1b0b19.target.closest('.btn-pdf-grupo')) return;
              const _0x22199c = _0x3a7892.dataset.target
                , _0x44552f = document.getElementById(_0x22199c);
              _0x44552f.style.display === "block" ? (_0x44552f.style.display = "none", _0x3a7892['classList']['remove']("aberto")) : (_0x44552f.style['display'] = "block", _0x3a7892.classList['add']("aberto"));
            });
          }), document.querySelectorAll(".btn-pdf-grupo").forEach(_0x3377a2 => {
            _0x3377a2.addEventListener("click", _0x145e11 => {
              _0x145e11.stopPropagation();
              const _0x707b6c = _0x145e11.currentTarget.dataset.equipamentoNome
                , _0x50db5f = _0x1f8cf3.find(([_0x5ac8b8]) => _0x5ac8b8 === _0x707b6c);
              if (_0x50db5f) {
                const _0xd8df6f = _0x50db5f[0x1];
                _0x13e91c(_0x707b6c, _0xd8df6f);
              }
            });
          });
        }

        function _0x484fd9() {
          _0x967029.style.display = "flex";
          const _0x286ccf = window.location.search.match(/SESID=([a-zA-Z0-9]+)/);
          if (!_0x286ccf) {
            alert("Erro: Não foi possível encontrar o ID da Sessão (SESID)."), _0x967029.style['display'] = "none";
            return;
          }
          const _0x22d0bd = _0x286ccf[0x1]
            , _0x501cbb = '/albatros/admin.php?SESID=' + _0x22d0bd + '&n1=200&n2=202&in=30&seccion=titan_trabajos_ordenes&op=c'
            , _0x5dc2b0 = Array.from(document['querySelectorAll'](".filtro-status-btn.selected")).map(_0x259dd3 => _0x259dd3.dataset.value)
            , _0x5ed684 = _0x5dc2b0.length > 0x0 ? _0x5dc2b0 : ['']
            , _0x3af9a6 = _0x5ed684.map(_0x474634 => {
              return new Promise((_0x43401f, _0x13ec43) => {
                const _0xbf8725 = new URLSearchParams();
                _0xbf8725.append("orden_id", document.getElementById("filtro-ot").value), _0xbf8725.append("equipo_nombre", document.getElementById("filtro-equipamento").value), _0xbf8725.append("estado_id", _0x474634), _0xbf8725.append('taller_id', document['getElementById']("filtro-oficina").value), _0xbf8725.append("trabajo_tipo_id", document.getElementById("filtro-tipo-trabalho").value);
                const _0x570b0e = document.getElementById("filtro-data-desde").value
                  , _0x295ff2 = document['getElementById']("filtro-data-ate").value;
                if (_0x570b0e) _0xbf8725.append("fecha_desde", _0x570b0e.split('-').reverse().join('/'));
                if (_0x295ff2) _0xbf8725.append("fecha_hasta", _0x295ff2.split('-').reverse()['join']('/'));
                _0xbf8725.append("tipo_fecha1", document.getElementById("filtro-tipo-data").value), _0xbf8725['append']('bAceptar', 'Aplicar\x20filtro'), GM_xmlhttpRequest({
                  'method': 'POST'
                  , 'url': _0x501cbb
                  , 'data': _0xbf8725.toString()
                  , 'headers': {
                    'Content-Type': "application/x-www-form-urlencoded"
                  }
                  , 'overrideMimeType': "text/html; charset=iso-8859-1"
                  , 'onload': _0xb7a190 => {
                    const _0x3c7952 = new DOMParser(), _0x34d8bb = _0x3c7952['parseFromString'](_0xb7a190.responseText, "text/html");
                    _0x43401f(_0x426fd1(_0x34d8bb));
                  }
                  , 'onerror': _0x16b488 => _0x13ec43(_0x16b488)
                });
              });
            });
          Promise.all(_0x3af9a6).then(_0xe2c67e => {
            const _0x1ac744 = new Map();
            _0xe2c67e.flat().forEach(_0x5342a7 => _0x1ac744.set(_0x5342a7['id'], _0x5342a7));
            let _0x36cbf9 = Array.from(_0x1ac744.values());
            const _0x232c14 = document.getElementById("filtro-descricao").value;
            if (_0x232c14.trim()) {
              const _0x4bad93 = _0x232c14.split('*').map(_0x4b881c => _0x347847(_0x4b881c['trim']()))['filter'](_0x4a0331 => _0x4a0331);
              _0x4bad93['length'] > 0x0 && (_0x36cbf9 = _0x36cbf9['filter'](_0x10c6e7 => {
                const _0x1a5612 = _0x347847(_0x10c6e7.descricao);
                return _0x4bad93['every'](_0x1ca552 => _0x1a5612.includes(_0x1ca552));
              }));
            }
            _0x475abd = _0x36cbf9, _0x2aecad(_0x475abd);
          })["catch"](_0x2b8298 => {
            console.error("[Interface Albatros] Erro em uma das buscas:", _0x2b8298), alert("Ocorreu um erro ao buscar as ordens. Verifique o console (F12).");
          }).finally(() => {
            _0x967029.style.display = "none";
          });
        }
        document.getElementById('botao-buscar').addEventListener("click", _0x484fd9);
        const _0x443fda = () => {
          const _0x5ebb4e = _0x2e3e78.style.display === 'flex';
          _0x5ebb4e ? (_0x2e3e78['style'].display = "none", _0x447817.innerHTML = "🚀 Abrir Dashboard") : (_0x475abd.length === 0x0 && (_0x475abd = _0x426fd1(document), _0x2aecad(_0x475abd)), _0x2e3e78['style'].display = "flex", _0x447817.innerHTML = "🙈 Ocultar Dashboard");
        };
        _0x447817['addEventListener']("click", _0x443fda), _0x4d242a(), _0x3f56fe();
        const _0x5ad607 = ["filtro-ot", "filtro-equipamento", "filtro-descricao", 'filtro-oficina', "filtro-tipo-trabalho", "filtro-tipo-data", "filtro-data-desde", "filtro-data-ate"];
        _0x5ad607.forEach(_0x362d4b => {
          document.getElementById(_0x362d4b).addEventListener("input", _0x1bee9c);
        }), document.querySelectorAll(".filtro-status-btn").forEach(_0x17e5d8 => {
          _0x17e5d8.addEventListener("click", _0x1bee9c);
        }), document['getElementById']("botao-limpar-filtros").addEventListener("click", _0x393cb9);
      }
      _0x3f64d7();
    }

    function _0x365d4e() {
      const _0x44f027 = new MutationObserver(_0x48b0e7 => {
          for (const _0x5ebf31 of _0x48b0e7) {
            if (_0x5ebf31.type === "childList") {
              const _0x92161d = document.getElementById('iframe_popup');
              _0x92161d && (_0x92161d.onload = () => {
                try {
                  const _0x283e25 = _0x92161d.contentDocument;
                  if (!_0x283e25) return;
                  const _0x3a7a15 = _0x283e25.querySelector("a[onclick*=\"seccion=tocica_reportes\"]");
                  if (_0x3a7a15) {
                    const _0x386bf8 = parseInt(_0x3a7a15.textContent.trim(), 0xa);
                    if (_0x386bf8 > 0xc350) {
                      const _0x311e0b = 'https://tocica.otamerica.net/editar_reporte/' + _0x386bf8;
                      _0x3a7a15['href'] = _0x311e0b, _0x3a7a15.target = "_blank", _0x3a7a15.removeAttribute("onclick"), _0x3a7a15.style.color = '#007bff', _0x3a7a15.style.textDecoration = "underline", _0x3a7a15['title'] = 'Link\x20modificado\x20pelo\x20TitanSystem\x20para:\x20' + _0x311e0b, console.log("[TitanSystem] Link do TOCICA Nº " + _0x386bf8 + " foi modificado.");
                    }
                  }
                } catch (_0x401a07) {
                  console.error('[TitanSystem]\x20Erro\x20ao\x20tentar\x20modificar\x20o\x20link\x20do\x20TOCICA:', _0x401a07);
                }
              });
            }
          }
        });
      _0x44f027['observe'](document.body, {
        'childList': !![]
        , 'subtree': !![]
      });
    }

   // --- FUNÇÃO DE ATUALIZAÇÃO (VISUAL NOVO: DARK/PREMIUM) ---
    function _0x564a29(novaVersao, urlDownload) {
        // 1. CSS do Novo Design (Injetado)
        const styles = `
            .titanflow-update-overlay {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background-color: rgba(2, 6, 23, 0.85); /* Fundo escuro profundo */
                backdrop-filter: blur(8px); /* Desfoque no fundo */
                z-index: 10003;
                display: flex; justify-content: center; align-items: center;
                font-family: 'Poppins', sans-serif;
                animation: fadeIn 0.3s ease-out;
            }
            .titanflow-update-card {
                background: linear-gradient(180deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.15);
                border-radius: 20px;
                width: 90%; max-width: 450px;
                overflow: hidden;
                position: relative;
                color: #f8fafc;
                text-align: center;
            }
            /* Borda brilhante no topo */
            .titanflow-update-card::before {
                content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
                background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
            }
            .update-header {
                padding: 30px 20px 10px;
            }
            .update-icon {
                width: 60px; height: 60px;
                background: rgba(59, 130, 246, 0.1);
                border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                margin: 0 auto 20px;
                border: 1px solid rgba(59, 130, 246, 0.3);
                box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
                color: #3b82f6;
            }
            .update-title {
                font-size: 1.8rem; font-weight: 700; margin: 0;
                background: linear-gradient(90deg, #14b8a6 0%, #3b82f6 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .update-body { padding: 10px 30px 20px; }
            .update-text { font-size: 1rem; color: #94a3b8; line-height: 1.6; margin-bottom: 20px; }

            .version-pill {
                display: inline-block; padding: 6px 16px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 50px;
                font-size: 0.9rem; color: #e2e8f0;
                margin-bottom: 10px;
            }
            .version-highlight { color: #14b8a6; font-weight: 700; }

            .update-actions {
                padding: 20px 30px 30px;
                display: flex; gap: 15px;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
            }
            .btn-update-action {
                flex: 1; padding: 12px; border-radius: 10px;
                font-weight: 600; cursor: pointer; border: none;
                font-size: 0.95rem; transition: all 0.2s ease;
                text-decoration: none; display: flex; justify-content: center; align-items: center;
            }
            .btn-later {
                background: transparent; color: #94a3b8;
                border: 1px solid rgba(148, 163, 184, 0.2);
            }
            .btn-later:hover { background: rgba(255, 255, 255, 0.05); color: #fff; }

            .btn-now {
                background: linear-gradient(90deg, #14b8a6, #3b82f6);
                color: white;
                box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
            }
            .btn-now:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
            }

            @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        `;
        GM_addStyle(styles);

        // 2. Estrutura HTML do Novo Design
        const overlay = document.createElement('div');
        overlay.className = 'titanflow-update-overlay';

        const cardHTML = `
            <div class="titanflow-update-card">
                <div class="update-header">
                    <div class="update-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path><line x1="21" y1="5" x2="12.5" y2="13.5"></line></svg>
                    </div>
                    <h2 class="update-title">Atualização Disponível</h2>
                </div>

                <div class="update-body">
                    <p class="update-text">Uma nova versão do <strong>TitanSystem</strong> foi lançada com melhorias de performance e novos recursos.</p>
                    <div class="version-pill">
                        Nova Versão: <span class="version-highlight">v${novaVersao}</span>
                    </div>
                </div>

                <div class="update-actions">
                    <button class="btn-update-action btn-later close-button">Depois</button>
                    <a href="${urlDownload}" target="_blank" class="btn-update-action btn-now">
                        🚀 Atualizar Agora
                    </a>
                </div>
            </div>
        `;

        overlay.innerHTML = cardHTML;
        document.body.appendChild(overlay);

        // 3. Lógica de Fechamento
        const closeBtn = overlay.querySelector('.close-button');
        const removeOverlay = () => {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                if(document.body.contains(overlay)) document.body.removeChild(overlay);
            }, 300);
        };

        closeBtn.onclick = removeOverlay;
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) removeOverlay();
        });
    }

    function _0x2fd0e7() {
      console['log']('[TitanSystem\x20Update]\x20Iniciando\x20verificação\x20de\x20atualização...');
      const _0x2349e9 = (_0x4ceaee, _0x1c4d74) => {
        const _0x14a69b = _0x4ceaee.split('.')['map'](Number), _0x1b86c1 = _0x1c4d74.split('.').map(Number), _0x3a7b51 = Math.max(_0x14a69b['length'], _0x1b86c1.length);
        for (let _0x41b0b2 = 0x0; _0x41b0b2 < _0x3a7b51; _0x41b0b2++) {
          const _0x198e3f = _0x14a69b[_0x41b0b2] || 0x0
            , _0x4f7659 = _0x1b86c1[_0x41b0b2] || 0x0;
          if (_0x198e3f > _0x4f7659) return 0x1;
          if (_0x198e3f < _0x4f7659) return -0x1;
        }
        return 0x0;
      };
      try {
        const _0xe31050 = GM_info.script.version
          , _0x5adce3 = GM_info.script['updateURL']
          , _0x373f72 = GM_info['script']['downloadURL'];
        if (!_0x5adce3) {
          console.error("[TitanSystem Update] @updateURL não encontrada no cabeçalho do script.");
          return;
        }
        console['log']("[TitanSystem Update] Versão atual: " + _0xe31050 + ". Verificando em: " + _0x5adce3), GM_xmlhttpRequest({
          'method': "GET"
          , 'url': _0x5adce3
          , 'onload': function (_0x22b262) {
            console.log("[TitanSystem Update] Resposta recebida do GitHub.");
            if (_0x22b262['status'] >= 0xc8 && _0x22b262.status < 0x12c) {
              const _0x19dff6 = _0x22b262.responseText.match(/@version\s+([\d.]+)/);
              if (_0x19dff6 && _0x19dff6[0x1]) {
                const _0x33cc73 = _0x19dff6[0x1];
                console.log("[TitanSystem Update] Versão encontrada no GitHub: " + _0x33cc73), _0x2349e9(_0x33cc73, _0xe31050) > 0x0 ? (console.log("[TitanSystem Update] Nova versão detectada! Exibindo popup."), _0x564a29(_0x33cc73, _0x373f72)) : console.log("[TitanSystem Update] Script já está na versão mais recente.");
              } else console.error("[TitanSystem Update] Não foi possível encontrar a tag @version no arquivo do GitHub.");
            } else console.error("[TitanSystem Update] GitHub respondeu com status: " + _0x22b262.status);
          }
          , 'onerror': function (_0x24639f) {
            console['error']('[TitanSystem\x20Update]\x20Erro\x20de\x20rede\x20ao\x20tentar\x20verificar\x20atualização.\x20Verifique\x20a\x20permissão\x20@connect\x20para\x20raw.githubusercontent.com.', _0x24639f);
          }
        });
      } catch (_0x2ea704) {
        console.error("[TitanSystem Update] Erro inesperado na função checkForUpdates:", _0x2ea704);
      }
    }

    function _0x595ad3() {
      GM_addStyle("\n        .titanflow-modal-overlay-marine {\n            position: fixed; top: 0; left: 0; width: 100%; height: 100%;\n            background: rgba(0,0,0,0.6); z-index: 10004; display: flex;\n            justify-content: center; align-items: center; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n        }\n        .titanflow-modal-content-marine {\n            background: #fff; border-radius: 8px; width: 90%; max-width: 600px;\n            padding: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); animation: titanflow-fade-in 0.3s ease-out;\n        }\n        .titanflow-modal-content-marine h3 { margin-top: 0; color: #005A9C; }\n        .titanflow-modal-content-marine textarea {\n            width: 100%; height: 300px; box-sizing: border-box; resize: vertical;\n            border: 1px solid #ccc; border-radius: 5px; padding: 10px; font-family: monospace; font-size: 13px;\n        }\n        .titanflow-modal-content-marine .modal-actions {\n            display: flex; justify-content: flex-end; gap: 10px; margin-top: 15px;\n        }\n        @keyframes titanflow-fade-in {\n            from { opacity: 0; transform: scale(0.95); }\n            to { opacity: 1; transform: scale(1); }\n        }\n    ");
      const _0x161077 = "\n        <div class=\"titanflow-modal-overlay-marine\">\n            <div class=\"titanflow-modal-content-marine\">\n                <h3>🤖 Automação OS MARINE</h3>\n                <p>Cole o script JSON no formato de array de objetos abaixo. O campo \"proposito\" é opcional: se omitido, usa o Propósito selecionado ao lado (em \"Criar Pedido\").</p>\n                <textarea id=\"textarea-os-marine\" placeholder=\"[\n  {\n    \"equipamento\": \"NOME EXATO DO EQUIPAMENTO OU TAG\",\n    \"descricao\": \"Descrição do serviço...\",\n    \"codigoFalha\": \"#CODIGO\",\n    \"taller\": \"6\",\n    \"tipoTrabalho\": \"5\",\n    \"proposito\": \"6\"\n  }\n]\"></textarea>\n                <div class=\"modal-actions\">\n                    <button id=\"btn-cancelar-marine\" class=\"action-btn\" style=\"background-color: #6c757d;\">Cancelar</button>\n                    <button id=\"btn-processar-marine\" class=\"action-btn create-btn\">Processar Script</button>\n                </div>\n            </div>\n        </div>\n    ";
      document.body.insertAdjacentHTML("beforeend", _0x161077);
      const _0x31ec52 = document.querySelector(".titanflow-modal-overlay-marine")
        , _0x542b68 = () => document['body'].contains(_0x31ec52) && document.body['removeChild'](_0x31ec52);
      document.getElementById("btn-cancelar-marine").onclick = _0x542b68, document.getElementById("btn-processar-marine").onclick = () => {
        const _0x33694a = document['getElementById']('textarea-os-marine').value;
        _0x542b68(), _0x2a8a19(_0x33694a);
      }, _0x31ec52['addEventListener']('click', _0x4b8e65 => {
        if (_0x4b8e65.target === _0x31ec52) _0x542b68();
      });
    }
    async function _0x2a8a19(_0x11e030) {
      if (!_0x11e030['trim']()) {
        _0x2786ff("O script não pode estar vazio.", "warning");
        return;
      }
      let _0x3fb358;
      try {
        _0x3fb358 = JSON.parse(_0x11e030);
        if (!Array.isArray(_0x3fb358)) throw new Error("O script deve ser um array JSON (começar com '[' e terminar com ']').");
      } catch (_0x2daf78) {
        _0x2786ff("Erro no formato JSON: " + _0x2daf78.message, 'error', 0x1770);
        return;
      }
      _0x2786ff('Validando\x20script\x20e\x20equipamentos...', "info");
      if (_0x34e176['length'] === 0x0) try {
        await _0x3a1f53();
      } catch (_0x443286) {
        _0x2786ff('Falha\x20ao\x20carregar\x20a\x20lista\x20de\x20equipamentos\x20para\x20validação.', "error");
        return;
      }
      const _0x24c330 = []
        , _0x4736b1 = [];
      for (const [_0x26a61e, _0xa8c722] of _0x3fb358.entries()) {
        const _0x57d21b = _0x360915(_0xa8c722['equipamento'])
          , _0x7f3027 = _0x34e176.find(_0x4750f2 => _0x360915(_0x4750f2.nome) === _0x57d21b || _0x360915(_0x4750f2.tag) === _0x57d21b);
        if (!_0x7f3027) {
          _0x4736b1.push("Linha " + (_0x26a61e + 0x1) + ": Equipamento não encontrado: \"" + _0xa8c722.equipamento + '\x22');
          continue;
        }
        const _propositoLinha = (_0xa8c722.proposito != null && String(_0xa8c722.proposito).trim() !== '')
          ? String(_0xa8c722.proposito).trim()
          : ((document.getElementById('pedido-proposito') || {}).value || '');
        if (!_propositoLinha) {
          _0x4736b1.push('Linha ' + (_0x26a61e + 0x1) + ': Prop\u00f3sito n\u00e3o informado (adicione "proposito" no JSON ou selecione um no painel).');
          continue;
        }
        _0x24c330.push({
          'equipamentoId': _0x7f3027['id']
          , 'descricao': (_0xa8c722.descricao + '\x20' + (_0xa8c722.codigoFalha || '')).trim()
          , 'tallerId': _0xa8c722.taller
          , 'tipoTrabalhoId': _0xa8c722.tipoTrabalho
          , 'propositoId': _propositoLinha
          , 'dataRequerida': new Date().toISOString().split('T')[0x0].split('-').reverse().join('/')
        });
      }
      if (_0x4736b1['length'] > 0x0) {
        alert("Ocorreram erros na validação do script:\n\n" + _0x4736b1['join']('\x0a')), _0x2786ff(_0x4736b1.length + '\x20erros\x20encontrados.\x20Nenhuma\x20ordem\x20foi\x20criada.', "error");
        return;
      }
      if (_0x24c330['length'] === 0x0) {
        _0x2786ff("Nenhuma ordem válida para criar após a validação.", "warning");
        return;
      }
      _0x5b5dcd = !![];
      let _0x204dcf = 0x0
        , _0x2021e1 = 0x0;
      const _0x23dc82 = _0x24c330['length'];
      _0x1241ed('Iniciando\x20criação\x20de\x20' + _0x23dc82 + '\x20ordens\x20via\x20script...');
      for (const _0x53baeb of _0x24c330) {
        if (!_0x5b5dcd) break;
        try {
          await _0x4158d4(_0x53baeb, 0x1, 0x1), _0x2021e1++;
        } catch (_0x236d77) {
          _0x204dcf++, console['error']("Falha ao criar pedido para equipamento ID " + _0x53baeb.equipamentoId + ':', _0x236d77);
        }
        _0x1241ed("Criando " + _0x2021e1 + " de " + _0x23dc82 + "... (" + Math['round'](_0x2021e1 / _0x23dc82 * 0x64) + '%)');
      }
      _0x5b5dcd = ![];
      const _0x29a9c5 = "Concluído! " + _0x2021e1 + '\x20pedidos\x20criados.\x20' + _0x204dcf + '\x20falharam.';
      _0x1241ed(_0x29a9c5, 0x1388), _0x204dcf === 0x0 && _0x23dc82 > 0x0 && setTimeout(() => location['reload'](), 0x5dc);
    }
    _0x493e8f();
  }
})();
