// ==UserScript==
// @name         TitanSystem 🚀
// @namespace    http://tampermonkey.net/
// @version      4.1
// @description  Otimiza e automatiza o fluxo de trabalho de Ordens de Serviço no sistema Titan, desde a criação até o fechamento.
// @author       PCM - OTAMERICA
// @run-at       document-idle
// @match        */albatros/admin.php*seccion=titan_trabajos_ordenes*
// @match        */albatros/admin.php*seccion=titan_trabajos_pedidos*
// @exclude      */albatros/admin.php*seccion=titan_planes_de_mantenimiento&id_reg*
// @exclude      */albatros/admin.php*seccion=titan_planes_programacion&id_reg*
// @match        */albatros/admin.php*seccion=titan_planes_de_mantenimiento*
// @match        */albatros/admin.php*seccion=titan_planes_programacion*
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

function _0x46f7() {
  const _0x6d5507 = ['top', 'numeric', 'Equipo\x20de\x20Izaje', 'boxShadow', '[Interface\x20Albatros]\x20Erro\x20em\x20uma\x20das\x20buscas:', '.btn-pdf-grupo[data-equipamento-nome=\x22', 'filtro-equipamento', 'pageSize', 'Todos\x20Tipos', 'valor', 'white', 'length', 'Oficina\x20(Taller)', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22painel-progresso-massa\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22progresso-header\x22><h3>Processamento\x20em\x20Massa</h3></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22progresso-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22progresso-status-texto\x22>Iniciando...</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22progresso-barra-container\x22><div\x20id=\x22progresso-barra-valor\x22>0%</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22progresso-log\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22progresso-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22progresso-botao-fechar\x22\x20disabled>Aguarde</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'input-acao-valor', '<span><b>[', 'name', 'Erro\x20no\x20formato\x20JSON:\x20', 'titanflow-prog-equip-busca', 'luis', 'progresso-barra-valor', '20px', '\x22\x20é\x20obrigatório.', 'Erro!', '.filtro-status-btn', '<div\x20class=\x22total-summary\x22>', 'textAlign', '173', 'cells', 'titanflow-prog-tipo', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Ajuda\x20do\x20Painel\x20de\x20Planejamento\x20🚀</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22titanflow-modal-close\x22>&times;</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-body\x22>', 'Timeout:\x20Formulário\x20de\x20cancelamento\x20não\x20foi\x20encontrado.', 'titanflow-criar-varios-qtd', '186', 'Timeout\x20ao\x20criar\x20o\x20plano\x20ID\x20', 'Erro:\x20O\x20campo\x20\x22', 'Chegou\x20o\x20homem\x20que\x20levanta\x20pesos\x20na\x20academia\x20e\x20processos\x20no\x20sistema!\x20Bem-vindo!', 'Erro\x20ao\x20processar\x20toast\x20da\x20sessão:', '&in=', 'Cuidado\x20pra\x20não\x20quebrar\x20o\x20teclado\x20com\x20essa\x20força\x20toda,\x20Dlleandro!\x20Bem-vindo!', '[Debug\x20TitanSystem]\x20Iframe\x20adicionado\x20à\x20página.\x20Aguardando\x20carregamento...', 'Descrição', '\x0a\x20\x20\x20\x20linear-gradient(rgba(240,\x20240,\x20240,\x200.9),\x20rgba(240,\x20240,\x20240,\x200.1)),\x0a\x20\x20\x20\x20url(\x27https://www.otamerica.com/img/logo-otamerica.efa7b4a4.png\x27),\x0a\x20\x20\x20\x20url(\x27https://www.otamerica.com/img/logo-otamerica.efa7b4a4.png\x27)\x0a', '1099281JRRyqG', 'no-repeat', 'reprogramacion_causa', 'titanflow-prog-mensal-cada', '400px', 'Nenhuma\x20ordem\x20selecionada\x20para\x20cancelar!', '5px', 'campo_exec_recomendacao', '[TitanSystem\x20Update]\x20Erro\x20inesperado\x20na\x20função\x20checkForUpdates:', '\x0a\x20\x20\x20\x20', 'titanflow-grid', 'dashboard-assinatura', 'Nenhuma\x20ordem\x20selecionada\x20para\x20definir\x20a\x20mão\x20de\x20obra!', 'Julho', 'semanal', '.pdf', 'appendChild', 'lista_equipamentos_titan', '[for=\x22titanflow-key__trabajos_tipos__id\x22]', '4138888whRXev', 'include', '4px', 'move', 'Campo\x20\x27Razón\x27\x20(cancelacion_causa)\x20não\x20encontrado\x20no\x20formulário.', 'O\x20terror\x20dos\x20doces\x20(e\x20agora\x20dos\x20halteres)\x20está\x20na\x20área!\x20Bem-vindo,\x20Luis!', 'status', 'exec_problema', '#tab-btn-configuracao', '✅\x20Criar\x20Vários\x20Planos', 'Falha\x20ao\x20reprogramar\x20ordem\x20', 'Control', 'HSSE', 'O\x20planejador\x20mais\x20querido\x20(e\x20barrigudo)\x20da\x20firma\x20chegou!\x20Bem-vindo!', 'Iniciando\x20criação\x20de\x20', 'titan_planes_programacion', 'isArray', 'titanflow-limpar-plano-btn', 'AES', 'label', 'Engeatec', 'Acessar\x20Aba:\x20Criação\x20de\x20Planos', 'En\x20Servicio', '188', 'alcance_del_trabajo', 'Erro:\x20Você\x20não\x20pode\x20\x22Forçar\x20Alteração\x22\x20e\x20\x22Adicionar\x20Código\x22\x20ao\x20mesmo\x20tempo.\x20Escolha\x20apenas\x20uma\x20opção.', 'tecnico-', 'criacao', '9999', '🗺️', '<span\x20class=\x22btn-text\x22>Cancelar\x20Ordens</span><span\x20class=\x22btn-progress-fill\x22></span>', 'HHT', 'titanflow-fechamento-container', 'CONTRATISTA', 'key__planes_de_mantenimiento_equipos_condiciones__id', 'translateY(-10px)', 'getFullYear', 'Turbina\x20a\x20Gas', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(function()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27use\x20strict\x27;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20waitForFunction\x20=\x20(functionName,\x20callback)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20interval\x20=\x20setInterval(()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(typeof\x20window[functionName]\x20===\x20\x27function\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clearInterval(interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20callback();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x2050);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20waitForFunction(\x27mostrar_acciones_disponibles\x27,\x20()\x20=>\x20{\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20function\x20getSESID()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20match\x20=\x20window.location.href.match(/SESID=([^&]*)/);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20match\x20?\x20match[1]\x20:\x20null;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20async\x20function\x20verificarManoDeObraAsync()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(!window.ot_selected)\x20return;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20url\x20=\x20`./admin.php?SESID=${getSESID()}&seccion=titan_trabajos_ordenes&id_reg=${window.ot_selected}&show=accion&action=internal-mano_de_obra_verificar`;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20response\x20=\x20await\x20fetch(url);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20resultCode\x20=\x20await\x20response.text();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.otras_indicaciones_mano_de_obra\x20=\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(resultCode\x20!==\x20\x271\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.otras_indicaciones_mano_de_obra\x20=\x20\x27[No\x20posee\x20mano\x20de\x20obra\x20asignada]\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20actionActivar\x20=\x20document.getElementById(\x27action_activar\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(actionActivar)\x20actionActivar.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(typeof\x20window.otrasIndicaciones\x20===\x20\x27function\x27)\x20window.otrasIndicaciones();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(error)\x20{\x20console.error(\x22Erro\x20ao\x20verificar\x20mão\x20de\x20obra:\x22,\x20error);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20async\x20function\x20verificarEnParteBorradorAsync()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(!window.ot_selected)\x20return;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20url\x20=\x20`./admin.php?SESID=${getSESID()}&seccion=titan_trabajos_ordenes&id_reg=${window.ot_selected}&show=accion&action=internal-en_parte_borrador_verificar`;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20response\x20=\x20await\x20fetch(url);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20resultCode\x20=\x20await\x20response.text();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.otras_indicaciones_parte_borrador\x20=\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(resultCode\x20===\x20\x271\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.otras_indicaciones_parte_borrador\x20=\x20\x27[En\x20parte\x20borrador]\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[\x27action_cancel\x27,\x20\x27action_end\x27,\x20\x27action_reprogramar\x27].forEach(id\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20actionElement\x20=\x20document.getElementById(id);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(actionElement)\x20actionElement.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(typeof\x20window.otrasIndicaciones\x20===\x20\x27function\x27)\x20window.otrasIndicaciones();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(error)\x20{\x20console.error(\x22Erro\x20ao\x20verificar\x20parte\x20borrador:\x22,\x20error);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20original_mostrar_acciones\x20=\x20window.mostrar_acciones_disponibles;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.verificarManoDeObra\x20=\x20()\x20=>\x20{};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.verificarEnParteBorrador\x20=\x20()\x20=>\x20{};\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.mostrar_acciones_disponibles\x20=\x20function(tr,\x20orden_id,\x20actions)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20original_mostrar_acciones(tr,\x20orden_id,\x20actions);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20A\x20função\x20original,\x20ao\x20desselecionar,\x20define\x20window.ot_selected\x20como\x200.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(window.ot_selected\x20>\x200)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20CASO\x201:\x20UMA\x20ORDEM\x20É\x20SELECIONADA\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Dispara\x20nossas\x20verificações\x20em\x20segundo\x20plano.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20verificarManoDeObraAsync();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20verificarEnParteBorradorAsync();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20---\x20CORREÇÃO\x20AQUI\x20---\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20CASO\x202:\x20A\x20ORDEM\x20É\x20DESSELECIONADA\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Limpamos\x20manualmente\x20as\x20variáveis\x20de\x20mensagem\x20e\x20atualizamos\x20a\x20tela.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.otras_indicaciones_mano_de_obra\x20=\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.otras_indicaciones_parte_borrador\x20=\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(typeof\x20window.otrasIndicaciones\x20===\x20\x27function\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.otrasIndicaciones();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20})();\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'accion', '&seccion=titan_trabajos_ordenes&subseccion=reprogramar&op=m&id_reg=', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22remove-equip-btn\x22\x20data-id=\x22', '[Debug\x20TitanSystem]\x20Iniciando\x20raspagem\x20da\x20URL:', 'log', 'Fibra\x20Óptica\x20(FO)', 'filtro-status-btn', 'features', 'painel-planejamento', 'offsetTop', '======\x20INÍCIO\x20DO\x20CONTEÚDO\x20DO\x20IFRAME\x20(DEBUG)\x20======', 'prioridade', 'translateY(-2px)', 'Refrigeração', '\x20novas\x20programações\x20capturadas!', 'Acessar\x20Aba:\x20Configurar\x20Programação', 'table', 'planoId', 'add', 'Terminal\x20/\x20Planta', 'date', 'titanflow-', 'Muestreador', 'taller', 'equipamentos-selecionados-lista', 'button', 'Predial', 'filtro-tipo-data', 'form', 'Autenticação\x20Necessária\x20🔑', 'categoria', 'getMonth', '&seccion=titan_planes_programacion&op=a&in=32&n2=210&n1=200', '195', 'scale(1.2)', 'script', 'false', '10000', '185', 'Selecione\x20as\x20pessoas\x20que\x20serão\x20atribuídas\x20às\x20ordens:', 'childList', 'Sistema\x20de\x20Calefacción\x20Eléctrico', 'shiftKey', 'botao-buscar', 'ID\x20do\x20Plano\x20(número)', '10001', 'senhaTitan', 'translateX(100%)', '2957', 'error', 'addEventListener', 'filter', 'processadas', '-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20Helvetica,\x20Arial,\x20sans-serif', '158', 'Março', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-overlay-marine\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-content-marine\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>🤖\x20Automação\x20OS\x20MARINE</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Cole\x20o\x20script\x20JSON\x20no\x20formato\x20de\x20array\x20de\x20objetos\x20abaixo:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22textarea-os-marine\x22\x20placeholder=\x22[\x0a\x20\x20{\x0a\x20\x20\x20\x20\x22equipamento\x22:\x20\x22NOME\x20EXATO\x20DO\x20EQUIPAMENTO\x20OU\x20TAG\x22,\x0a\x20\x20\x20\x20\x22descricao\x22:\x20\x22Descrição\x20do\x20serviço...\x22,\x0a\x20\x20\x20\x20\x22codigoFalha\x22:\x20\x22#CODIGO\x22,\x0a\x20\x20\x20\x20\x22taller\x22:\x20\x226\x22,\x0a\x20\x20\x20\x20\x22tipoTrabalho\x22:\x20\x225\x22\x0a\x20\x20}\x0a]\x22></textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-cancelar-marine\x22\x20class=\x22action-btn\x22\x20style=\x22background-color:\x20#6c757d;\x22>Cancelar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-processar-marine\x22\x20class=\x22action-btn\x20create-btn\x22>Processar\x20Script</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'Falha\x20ao\x20injetar\x20bloqueador\x20de\x20popup:', 'Nenhuma\x20ordem\x20selecionada\x20para\x20reprogramar!', 'Primeiro\x20escolha\x20a\x20Categoria', 'Equipo\x20de\x20Lucha\x20Contra\x20Incendio', '#titanflow-especialidades-container', 'pedido-descricao', '5px\x200', '\x22>📄\x20PDF</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22contador-badge\x22>', 'Carlos\x20Brito', '8px', 'Último\x20Tipo\x20de\x20Trabalho\x20salvo:', 'filtro-descricao', '\x20criado\x20a\x20partir\x20da\x20OT\x20', 'nodeType', '[TitanSystem]\x20Falha\x20ao\x20carregar\x20equipamentos\x20para\x20a\x20aba\x20Pedidos:', 'Dispositivo\x20Sensor\x20de\x20Peso', 'Falha\x20de\x20rede\x20ou\x20descriptografia.', 'Nenhuma\x20programação\x20nova\x20encontrada\x20para\x20capturar.', 'Manutenção\x20Preventiva', 'Popup\x20blocker\x20injetado\x20no\x20iframe\x20para\x20a\x20ordem\x20em\x20execução.', 'orden_id', 'internal', 'configuracao', '</select></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-group\x22><label>Tipo\x20de\x20Trabalho:</label><select\x20id=\x22pedido-tipo-trabalho\x22>', 'translateX(0)', 'values', '&action=recurso_eliminar', 'Adicionar\x20[', '#ffc107', 'rrhh_propios_cantidad', 'titanflow-carregar-planos', 'Iniciando\x20captura\x20de\x20ordens\x20visíveis', 'titanflow-prog-mensal-mes', '4012100rJJzAs', 'Já\x20existe\x20um\x20processamento\x20em\x20andamento.', 'input-quantidade-pedidos', 'Validação\x20de\x20licença\x20falhou:', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22modal-section-title\x22>Atalhos\x20do\x20Painel\x20de\x20Planejamento\x20⌨️</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'senha', 'Travar/Destravar\x20painel', '16px', '600', 'Motor\x20a\x20Combustión', 'Actuador\x20Eléctrico', '205', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22equipamento-dashboard\x22>', 'herramientas', 'tallerId', 'Um\x20ou\x20mais\x20campos\x20de\x20execução\x20não\x20foram\x20encontrados\x20no\x20iframe.', 'setItem', '[DEBUG]\x20Dados\x20coletados\x20do\x20painel\x20para\x20criação:', 'keydown', 'titanflow-emissao-container', 'filtro-ot', 'Instrumentação', '✅\x20Descrição\x20Desbloqueada', 'titanflow-nombre', 'Sair\x20do\x20perfil', 'exec_recomendacao', 'password', '10px', '[animarBotaoPlanejamento]\x20Erro\x20inesperado\x20na\x20configuração:', '❌\x20Falha\x20ao\x20emitir:\x20', '12px', '6px\x2014px', 'Qualificação\x20não\x20selecionada.', 'toLocaleString', 'pedido-data-requerida', 'Sin\x20Definir', 'btn-capturar-programacoes', 'width', 'Aguarde', 'Falha\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe\x20de\x20reprogramação.', 'Cable\x20de\x20Potencia', 'Ex:\x20Duplicidade,\x20solicitação\x20do\x20cliente,\x20etc.', 'currentTarget', '</option>', '\x20ordens\x20executadas\x20com\x20sucesso.\x20', '.texto11\x20font[color=\x22red\x22]', 'key__equipos__id_url', '2938', 'Clique\x20para\x20ocultar\x20o\x20painel\x20de\x20automação', '480px', 'SESID', 'className', 'backgroundImage', 'Software', 'warning', '📋\x20Seleção\x20salva!\x20', 'Concluído!\x20', '0px', '\x20ordens\x20canceladas.\x20', '#80bdff', 'checked', 'cierre_key__calificaciones__id', 'storageKey', '&show=accion&persona_id=', 'defaultView', 'outline', 'Falha\x20ao\x20carregar\x20ou\x20descriptografar\x20licenças:', 'querySelector', 'Entrar', '100%', '&n1=200&n2=202&in=20&seccion=titan_trabajos_pedidos', '.titanflow-modal-overlay-marine', 'key__backlog_categorias__id', 'plan_de_trabajo', 'contratista', 'reverse', 'Campos\x20de\x20data/causa/problema\x20não\x20encontrados\x20no\x20formulário.', 'Linha\x20', 'titanflow_panel_locked', '.remove-config-prog-btn', '&empresa_id=0&duracion=', 'Erro\x20ao\x20buscar\x20licenças:\x20', 'ATENÇÃO!\x0a\x0aVocê\x20está\x20prestes\x20a\x20SUBSTITUIR\x20A\x20DESCRIÇÃO\x20para:\x0a\x22', 'A\x20marca\x20Danthamerica\x20se\x20valoriza\x20mais\x20a\x20cada\x20login\x20seu.\x20Bem-vindo!', 'especialidad', '.\x20Estado\x20do\x20iframe:\x20', 'activar', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20margin-bottom:\x2010px;\x22>\x0a\x20\x20\x20\x20<h3\x20style=\x22color:\x20#3366ff;\x20margin:\x200;\x22>TitanSystem\x20Planejamento\x20🚀</h3>\x0a\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x2010px;\x22>\x0a\x20\x20\x20\x20<button\x20id=\x22btn-ajuda-planejamento\x22\x20title=\x22Ajuda\x20e\x20Atalhos\x22\x20style=\x22background:\x20none;\x20border:\x20none;\x20font-size:\x2018px;\x20cursor:\x20pointer;\x20padding:\x200\x205px;\x22>❓</button>\x0a\x20\x20\x20\x20<span\x20style=\x22font-size:\x2012px;\x20color:\x20#888;\x22>v', 'bEnviar', '✅\x20Sucesso!\x20Pedido\x20#', 'Dispositivo\x20Sensor\x20de\x20Vibración', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-controles\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-pdf-grupo\x22\x20data-equipamento-nome=\x22', 'scrollTop', 'Criação\x20finalizada,\x20mas\x20com\x20falhas.\x20A\x20página\x20não\x20será\x20recarregada.', '190', 'reload', 'tipoTrabalho', 'brightness(115%)', 'Danilo\x20Cortes\x20De\x20Carvalho\x20(Brasanitas)', '0\x204px\x208px\x20rgba(0,0,0,0.20)', '.remove-equip-btn-prog', 'dlleon', '1px\x200', ']</span>\x20', '✅\x20Criar\x20Plano', 'Ação:', 'Dispositivo\x20Sensor\x20de\x20Presión', 'insertAdjacentElement', '🙈\x20Ocultar\x20Dashboard', 'Sucesso\x20total!\x20Atualizando\x20a\x20página...', 'Erro\x20durante\x20o\x20processamento\x20animado:', '🚀\x20Iniciando\x20fechamento\x20sequencial\x20para\x20', 'height\x200.2s\x20ease', 'Mapa\x20dos\x20Equipamentos', 'afterend', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22tabela-ordens-moderna\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>OT\x20Nº</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Tag</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Descrição</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Oficina</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Emissão</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'fixed', 'btn-programar-massa', 'emissao_saved_data', 'preventDefault', '\x20ordens...', 'select', 'decrypt', 'exec_acao', 'Gerando...', '</b>\x20&nbsp;&nbsp;→&nbsp;&nbsp;\x20Nova\x20versão:\x20<b>', 'textContent', 'Modificações\x20e\x20Melhorias', '\x20ordens\x20encontradas)', 'Relatorio_', 'warn', '16px\x2012px', 'Cancelamento\x20abortado.\x20A\x20causa\x20é\x20obrigatória.', 'Campo\x20\x27Calificación\x27\x20não\x20encontrado\x20no\x20iframe.', '!\x20Bora\x20pra\x20mais\x20um\x20dia!', 'filter\x200.2s\x20ease', '👷\x20\x20Definir\x20Mão\x20de\x20Obra', 'Adiciona\x20todas\x20as\x20ordens\x20da\x20tela\x20à\x20sua\x20lista.', 'contains', '</span>\x0a</div>\x0a</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-tab-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tab-btn-criacao\x22\x20class=\x22titanflow-tab-btn\x22>Criação\x20de\x20Planos</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tab-btn-programacao\x22\x20class=\x22titanflow-tab-btn\x22>Programação</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tab-btn-configuracao\x22\x20class=\x22titanflow-tab-btn\x22>Configurar\x20Programação</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22titanflow-tab-content\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'tagName', 'titanflow-esp-rec-', 'btn-criar-plano', 'transform', 'Ferroport', 'Oficina', '11px', 'tab-btn-criacao', 'Bem-vindo,\x20Luis!\x20Já\x20planejou\x20a\x20pausa\x20estratégica\x20para\x20o\x20docinho\x20de\x20hoje?\x20🍬', 'esp-horas-1', 'mousedown', 'Bomba', 'texto11', 'Intercambiador\x20de\x20Calor', 'GET', '#f0f0f0', 'scale(0.9)', 'Ordem\x20', 'Selecione\x20o\x20Tipo', 'esp-pessoas-1', 'map', 'pessoas', 'Dispositivo\x20Sensor\x20de\x20PH', 'statusText', '</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22emissao-especialidades-container\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22titanflow-emissao-container\x22\x20style=\x22display:\x20flex;\x20margin-top:\x201px;\x20margin-bottom:\x200px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-iniciar-emissao\x22\x20class=\x22full-width-btn\x20action-btn\x20emit-btn\x20titanflow-action-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22btn-text\x22>🚀\x20Iniciar\x20Emissão\x20em\x20Massa</span><span\x20class=\x22btn-progress-fill\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', '&seccion=titan_trabajos_ordenes&subseccion=activar&op=m&id_reg=', 'options', 'helvetica', 'oficina', 'perfis', 'Timeout:\x20O\x20formulário\x20de\x20fechamento\x20não\x20foi\x20encontrado\x20dentro\x20do\x20iframe.', 'Página\x20', 'titanflow-prog-data-inicio', 'Causa\x20da\x20Reprogramação:', 'Planos\x20Carregados', '.grupo-equipamento-header', '🚀\x20Abrir\x20Dashboard', 'filtro-data-ate', 'removeItem', 'filtro\x20activo', '15px\x200', 'filtro-status-container', 'Sparrows\x20BSM', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-hotkey-desc\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>', 'all\x200.2s\x20ease', 'programacao-equip-count', '<span\x20class=\x22btn-text\x22>📋\x20Salvar\x20Seleção</span><span\x20class=\x22btn-progress-fill\x22></span>', '[TitanSystem\x20Update]\x20Não\x20foi\x20possível\x20encontrar\x20a\x20tag\x20@version\x20no\x20arquivo\x20do\x20GitHub.', 'titanflow-key__trabajos_tipos__id', 'relative', 'Eberson\x20Da\x20Fonseca', 'prepend', '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22modal-section-title\x22>Atalhos\x20de\x20Teclado\x20⌨️</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'emissao', 'programacao', 'Equipo\x20de\x20Amarre', 'terminacion_problema', 'Falha\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe\x20de\x20execução.', '🔍\x20Capturar\x20Ordens\x20Visíveis', 'example', '[TitanSystem\x20Update]\x20Versão\x20encontrada\x20no\x20GitHub:\x20', '\x20programações\x20criadas.\x20', 'td[onclick*=\x22eventoOnClickDelete\x22]', 'Navega\x20diretamente\x20para\x20a\x20segunda\x20aba.', 'normalize', '_blank', 'responseText', 'Ir\x20para\x20a\x20aba\x20\x22Pedidos\x22', 'querySelectorAll', 'titanflow-toggle-planejamento-btn', 'titanflow-btn-pedidos', 'Descrição\x20vazia.', 'select[name=\x22tipo_fecha1\x22]', 'POST', 'input-codigo-falha', '0\x204px\x2010px\x20rgba(0,0,0,0.25)', '55KrPIjD', 'Adicione\x20pelo\x20menos\x20um\x20equipamento\x20à\x20lista.', 'setFont', '&empresa_id=', '<div\x20class=\x22chart-container\x22>', 'titanflow_config_programacoes_selecionadas', 'titanflow-dummy_cat', 'all', '</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22specialty-group-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><label>Pessoas:</label><input\x20type=\x22number\x22\x20id=\x22esp-pessoas-1\x22\x20min=\x220\x22\x20value=\x22', '</div>', '#28a745', 'backgroundColor', 'random', 'Salvar\x20Seleção\x20de\x20Ordens', '5368302pNHVEj', 'Ozean', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22specialty-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Especialidade:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22esp-id-1\x22>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', '219', 'Manutenções\x20Menores', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010002;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x208px\x20rgba(0,0,0,0.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.5s,\x20transform\x200.5s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(100%);\x0a\x20\x20\x20\x20', 'Eletricista', 'brightness(100%)', 'painel_planejamento_visivel', 'URL\x20que\x20falhou:', 'visible', 'Versada', 'Falha\x20ao\x20criar\x20plano\x20com\x20ID\x20numérico\x20', '203', '%)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20', '100px', 'Erro\x20ao\x20emitir\x20ordem\x20filha:', 'color', '1px', 'Falha\x20ao\x20injetar\x20o\x20bloqueador\x20de\x20popup\x20no\x20iframe:', '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'Lista\x20para\x20programar', 'cancelled', '[for=\x22titanflow-key__equipos_clases__id\x22]', '\x20falharam.', 'titanflow-prog-diaria-opts', '145', 'onerror', 'keys', '<div\x20class=\x22empty-list-message\x22>Nenhum\x20equipamento\x20na\x20lista...</div>', 'getBoundingClientRect', 'Limpar\x20Lista\x20de\x20Programações', 'scrollTo', 'repuestos', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20', '15px', '0\x200\x200\x203px\x20rgba(255,\x20170,\x200,\x200.2)', 'Dispositivo\x20Sensor\x20de\x20Flujo', 'textDecoration', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>', 'backgroundPosition', 'absolute', 'Não\x20foi\x20possível\x20encontrar\x20o\x20SESID.', 'set', 'Chegou\x20o\x20monstro!\x20Meio\x20homem,\x20meio\x20SAP,\x20totalmente\x20focado\x20no\x20treino!\x20Bem-vindo,\x20Dlleandro!', 'auto', '169', '\x22\x20target=\x22_blank\x22\x20class=\x22popup-button\x20update-button\x22>Atualizar\x20Agora</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[animarBotaoPlanejamento]\x20Animação\x20será\x20executada\x20no\x20painel:\x20#', 'parse', 'Alterna\x20a\x20visibilidade\x20do\x20painel\x20do\x20TitanSystem.', 'toFixed', 'Externa', 'classList', 'ℹ️\x20Nenhuma\x20ordem\x20nova\x20para\x20adicionar.\x20A\x20lista\x20já\x20está\x20atualizada.', 'text/html;\x20charset=iso-8859-1', 'Esperando\x20materiais', 'titanflow-reprog-container', 'reduce', '...\x20(', 'titanFlowProgressToastTimer', 'Camposcal', 'marginTop', '10002', 'scale(1)', 'Reportando\x20para\x20o\x20serviço,\x20Capitão\x20Danthamerica!\x20Bem-vindo\x20a\x20bordo.', '<b>[', 'terminacion_causa', 'Seguridad', 'Uma\x20ótima\x20Segunda-feira\x20para\x20você,\x20', 'right', 'Sistema', 'rect', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>', 'rrhh_propios_duracion_hh', 'fontWeight', 'autoTable', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', '.btn-pdf-grupo', 'offsetLeft', '1px\x20solid\x20#e0e0e0', 'key__especialidades__id', '2658', 'replaceState', 'estadoPlan', 'https://miro.com/app/board/uXjVMhXTsPE=/', 'selectionEnd', 'Limpa\x20todas\x20as\x20programações\x20da\x20sua\x20lista.', 'stopPropagation', 'stringify', 'btn-iniciar-emissao', 'btn-desbloquear-descricao', 'MSR\x20do\x20Brasil', 'especialidad1_rrhh_cantidad', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x20bottom:\x2020px;\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#3366ff;\x20/*\x20Cor\x20de\x20informação\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x20border-radius:\x205px;\x20z-index:\x2010002;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x20box-shadow:\x200\x204px\x208px\x20rgba(0,0,0,0.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x20transition:\x20opacity\x200.5s,\x20transform\x200.5s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'Não\x20foi\x20possível\x20encontrar\x20a\x20tabela\x20de\x20ordens.', 'center,\x20left\x20top\x2010px,\x20center\x20bottom\x2024px', '#dc3545', '[for=\x22titanflow-key__talleres__id\x22]', '\x0a\x20\x20\x20\x20#titanflow-botoes-acao\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gap:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.titanflow-action-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-grow:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-basis:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.btn-text\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x202;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.btn-progress-fill\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x200%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x200.2s\x20linear;\x0a\x20\x20\x20\x20}\x0a', '\x22\x0aao\x20final\x20da\x20descrição\x20de\x20TODAS\x20as\x20', 'message', 'getAttribute', 'btn-ativar-programacoes', 'contentWindow', '.\x20Verificando\x20em:\x20', 'btn-cancelar-marine', 'Bem-vindo,\x20Dlleandro!\x20O\x20projeto\x20verão\x20tá\x20vindo\x20com\x20força\x20total,\x20hein?\x20Tá\x20gigante!', 'diaria', 'Clique\x20para\x20mostrar\x20o\x20painel\x20de\x20automação', 'includes', 'then', 'Açúcar,\x20planejamento\x20e\x20um\x20pouco\x20de\x20suor.\x20A\x20receita\x20do\x20sucesso!\x20Bem-vindo,\x20Luis!', 'height', '9677934DnyXaM', 'É\x20um\x20pássaro?\x20É\x20um\x20avião?\x20Não,\x20é\x20o\x20Dlleandro\x20finalizando\x20mais\x20um\x20processo\x20no\x20SAP!\x20Bem-vindo!', 'titanflow-acao-container\x20titanflow-full-width', '.btn-progress-fill', '2660', 'titanflow-progress-toast', 'Vamos\x20fazer\x20acontecer!\x20✨', 'Tenha\x20um\x20ótimo\x20dia\x20de\x20trabalho!\x20👍', 'removeChild', 'key__planes_de_mantenimiento__id', 'btn-desativar-programacoes', 'titanflow-key__equipos_clases__id', '\x20plano(s)...', '🚀\x20Iniciando\x20remoção\x20de\x20mão\x20de\x20obra\x20para\x20', 'equipamentoId', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22modal-section-title\x22>Como\x20Usar\x20o\x20Painel\x20Principal\x20📋</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>O\x20painel\x20flutuante\x20é\x20seu\x20centro\x20de\x20comando\x20para\x20automatizar\x20tarefas.\x20Pressione\x20<b>Z</b>\x20para\x20ocultá-lo\x20ou\x20mostrá-lo.</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5>Aba\x201:\x20Seleção</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>É\x20aqui\x20que\x20você\x20informa\x20para\x20quais\x20ordens\x20o\x20TitanSystem\x20deve\x20trabalhar.\x20Liste\x20as\x20OSs\x20na\x20caixa\x20de\x20texto\x20ou\x20use\x20o\x20botão\x20<b>\x22Capturar\x20Ordens\x20Visíveis\x22</b>\x20para\x20pegar\x20todas\x20da\x20tela.</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5>Aba\x203:\x20Execução\x20e\x20Fechamento</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Após\x20selecionar\x20as\x20ordens,\x20venha\x20para\x20esta\x20aba.\x20Preencha\x20os\x20campos\x20(Problema,\x20Causa,\x20etc.)\x20uma\x20única\x20vez\x20e\x20clique\x20em\x20<b>\x22Executar\x20em\x20Massa\x22</b>\x20para\x20aplicar\x20a\x20todas\x20as\x20ordens\x20da\x20sua\x20lista.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'complete', 'Processo\x20interrompido.', 'Saudações,\x20Danthonamerica!\x20Pronto\x20para\x20mais\x20um\x20dia\x20de\x20conquistas?', 'rgba(0,\x200,\x200,\x200.05)', 'Processo\x20interrompido\x20pelo\x20usuário.', 'Dispositivo\x20Sensor\x20de\x20H2S', 'O\x20CEO\x20da\x20Danthamerica\x20chegou\x20para\x20a\x20reunião.\x20Bem-vindo!', 'key__trabajos_tipos__id', 'check-ordem-filha', 'Aguarde,\x20outro\x20processo\x20está\x20em\x20andamento.', 'Detector\x20de\x20Humo', '187', '0\x208px\x2025px\x20rgba(0,0,0,0.15)', '2850', 'Nº\x20da\x20OT', 'tag', 'toISOString', 'titanflow-prog-horizonte-num', '#ff3366', 'finally', '[TitanSystem\x20Update]\x20GitHub\x20respondeu\x20com\x20status:\x20', '213', 'Parâmetros\x20de\x20navegação\x20não\x20encontrados.', 'key__planes_de_mantenimiento__id_url', 'Instrumentos', '.btn-scroll-top', 'col_nombre\x20th-titanflow-add', '208', 'Tablero\x20de\x20Distribución', 'border-color\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease', 'getItem', 'Autoridad\x20de\x20Aplicación', 'input-total', 'Janeiro', 'grid', 'Por\x20favor,\x20selecione\x20um\x20Tipo\x20de\x20Programação.', '125', 'Alterna\x20a\x20visibilidade\x20do\x20painel\x20de\x20Planejamento.', 'input-nova-descricao', '[animarBotaoPlanejamento]\x20Erro\x20durante\x20o\x20processamento:', 'Metalurgico', 'Sidney\x20Pereira\x20(Marine)', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-modal-overlay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x20top:\x200;\x20left:\x200;\x20width:\x20100%;\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.6);\x20z-index:\x2010003;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x20justify-content:\x20center;\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x20transition:\x20opacity\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#ffffff;\x20padding:\x2025px;\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x205px\x2015px\x20rgba(0,0,0,0.3);\x20width:\x2090%;\x20max-width:\x20680px;\x20/*\x20Largura\x20ajustada\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(0.9);\x20transition:\x20transform\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20Helvetica,\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x2070vh;\x20/*\x20Adiciona\x20altura\x20máxima\x20para\x20permitir\x20rolagem\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x20/*\x20Adiciona\x20a\x20barra\x20de\x20rolagem\x20quando\x20necessário\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#e9ecef;\x20padding-bottom:\x2015px;\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-modal-header\x20h3\x20{\x20margin:\x200;\x20font-size:\x2020px;\x20color:\x20#333;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-modal-close\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20none;\x20border:\x20none;\x20font-size:\x2024px;\x20cursor:\x20pointer;\x20color:\x20#888;\x20padding:\x200\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-hotkey-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x20align-items:\x20flex-start;\x20margin-bottom:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-hotkey-key\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#e9ecef;\x20border:\x201px\x20solid\x20#dee2e6;\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x204px\x208px;\x20font-weight:\x20bold;\x20font-size:\x2016px;\x20margin-right:\x2015px;\x20color:\x20#495057;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-hotkey-desc\x20p\x20{\x20margin:\x200;\x20color:\x20#333;\x20font-weight:\x20500;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-hotkey-desc\x20small\x20{\x20color:\x20#6c757d;\x20font-style:\x20italic;\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20---\x20NOVOS\x20ESTILOS\x20PARA\x20O\x20PAINEL\x20ÚNICO\x20---\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.modal-section-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2025px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x202px\x20solid\x20#e9ecef;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tutorial-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20grid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20grid-template-columns:\x20repeat(auto-fit,\x20minmax(250px,\x201fr));\x20/*\x20Layout\x20responsivo\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tutorial-method\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#e9ecef;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f8f9fa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tutorial-method\x20h4\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x200\x2015px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#dee2e6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tutorial-steps\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-left:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#495057;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tutorial-steps\x20li\x20{\x20margin-bottom:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tutorial-steps\x20code\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#e9ecef;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.update-link-container\x20{\x20margin-top:\x2015px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.update-link-container\x20a\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x20/*\x20Ocupa\x20a\x20largura\x20toda\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#28a745;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#28a745;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.update-link-container\x20a:hover\x20{\x20filter:\x20brightness(110%);\x20}\x0a\x20\x20\x20\x20', 'titanflow-prog-plan-resultados', '151', '308px', 'Falha\x20ao\x20adicionar\x20recurso.\x20Status:\x20', 'perfilTitan', 'Geral', '22px', '[TitanSystem\x20Update]\x20@updateURL\x20não\x20encontrada\x20no\x20cabeçalho\x20do\x20script.', '.btn-text', '\x22\x20target=\x22_blank\x22>Abrir\x20Link\x20de\x20Atualização</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'Manguera', 'titanflow-action-btn', 'Terminal\x20Açu\x20Serviços', 'parentElement', '9BxnEkc', 'borderColor', 'altKey', '&seccion=titan_trabajos_pedidos&show=accion&action=emitir_ot&id_reg=', 'Ryan\x20Da\x20Silva', 'configStorageKey', 'titanflow_session_equipamentos', 'painel_visivel', '#resultado\x20table\x20tr', '\x22\x20disabled></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', '[TitanSystem\x20Update]\x20Versão\x20atual:\x20', 'resolve', 'especialidade', 'Mills', 'Brasanitas', 'matches', 'pointer', 'formDatos', 'documentElement', 'fecha_hasta', 'downloadURL', 'key__equipos__id', 'Cañería', '\x0a.btn-pdf-grupo\x20{\x20background-color:\x20#dc3545;\x20color:\x20white;\x20border:\x20none;\x20border-radius:\x203px;\x20padding:\x204px\x208px;\x20font-size:\x2011px;\x20cursor:\x20pointer;\x20margin-right:\x2010px;\x20}\x0a#painel-custom\x20{\x0a\x20\x20\x20\x20position:\x20fixed;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20width:\x2095%;\x20max-width:\x201500px;\x0a\x20\x20\x20\x20height:\x2085vh;\x20background-color:\x20#f0f2f5;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x20border-radius:\x208px;\x20box-shadow:\x200\x204px\x2012px\x20rgba(0,0,0,0.2);\x0a\x20\x20\x20\x20z-index:\x2099990;\x20display:\x20none;\x20flex-direction:\x20column;\x20padding:\x2020px;\x20font-family:\x20Arial,\x20sans-serif;\x0a}\x0a#painel-custom-header\x20{\x20display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20margin-bottom:\x2015px;\x20padding-bottom:\x2015px;\x20border-bottom:\x201px\x20solid\x20#ddd;\x20}\x0a#painel-custom-header\x20h2\x20{\x20margin:\x200;\x20color:\x20#1c1e21;\x20}\x0a#busca-avancada\x20{\x20display:\x20grid;\x20grid-template-columns:\x20repeat(auto-fit,\x20minmax(180px,\x201fr));\x20gap:\x2015px;\x20margin-bottom:\x2015px;\x20align-items:\x20flex-end;\x20}\x0a#busca-avancada\x20input,\x20#busca-avancada\x20select\x20{\x20padding:\x208px;\x20border:\x201px\x20solid\x20#ccc;\x20border-radius:\x204px;\x20width:\x20100%;\x20box-sizing:\x20border-box;\x20}\x0a.filtro-grupo\x20{\x20display:\x20flex;\x20flex-direction:\x20column;\x20gap:\x205px;\x20}\x0a.filtro-actions-wrapper\x20{\x0a\x20\x20\x20\x20grid-column:\x201\x20/\x20-1;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20gap:\x2015px;\x0a\x20\x20\x20\x20align-items:\x20flex-end;\x0a}\x0a.filtro-status-container\x20{\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20background:\x20white;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20flex-wrap:\x20wrap;\x0a\x20\x20\x20\x20gap:\x205px;\x0a}\x0a.filtro-status-btn\x20{\x0a\x20\x20\x20\x20background-color:\x20#e4e6eb;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ccd0d5;\x0a\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20padding:\x206px\x2012px;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease-in-out;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20gap:\x205px;\x0a}\x0a.filtro-status-btn:hover\x20{\x20background-color:\x20#d8dbdf;\x20}\x0a.filtro-status-btn\x20.check-icon\x20{\x20display:\x20none;\x20color:\x20white;\x20}\x0a\x0a.filtro-status-btn.selected\x20{\x0a\x20\x20\x20\x20background-color:\x20#1877f2;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20border-color:\x20#1567d1;\x0a\x20\x20\x20\x20/*\x20A\x20propriedade\x20font-weight\x20foi\x20removida\x20para\x20garantir\x20que\x20o\x20botão\x20não\x20mude\x20de\x20tamanho\x20*/\x0a}\x0a.filtro-status-btn.selected\x20.check-icon\x20{\x0a\x20\x20\x20\x20display:\x20inline;\x0a}\x0a\x0a#botao-buscar\x20{\x0a\x20\x20\x20\x20padding:\x208px\x2025px;\x0a\x20\x20\x20\x20background-color:\x20#28a745;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x204px\x20rgba(0,0,0,0.15);\x0a\x20\x20\x20\x20transition:\x20transform\x200.15s\x20ease,\x20filter\x200.15s\x20ease,\x20box-shadow\x200.15s\x20ease;\x0a}\x0a#botao-buscar:hover\x20{\x0a\x20\x20\x20\x20transform:\x20translateY(-2px);\x0a\x20\x20\x20\x20filter:\x20brightness(110%);\x0a\x20\x20\x20\x20box-shadow:\x200\x204px\x208px\x20rgba(0,0,0,0.25);\x0a}\x0a#botao-buscar:active\x20{\x0a\x20\x20\x20\x20transform:\x20translateY(1px);\x0a\x20\x20\x20\x20filter:\x20brightness(100%);\x0a\x20\x20\x20\x20box-shadow:\x20none;\x0a}\x0a#botao-limpar-filtros\x20{\x0a\x20\x20\x20\x20padding:\x208px\x2025px;\x0a\x20\x20\x20\x20background-color:\x20#6c757d;\x20/*\x20Cinza\x20para\x20diferenciar\x20de\x20\x22Buscar\x22\x20*/\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x204px\x20rgba(0,0,0,0.15);\x0a\x20\x20\x20\x20transition:\x20transform\x200.15s\x20ease,\x20filter\x200.15s\x20ease,\x20box-shadow\x200.15s\x20ease;\x0a}\x0a#botao-limpar-filtros:hover\x20{\x0a\x20\x20\x20\x20transform:\x20translateY(-2px);\x0a\x20\x20\x20\x20filter:\x20brightness(110%);\x0a\x20\x20\x20\x20box-shadow:\x200\x204px\x208px\x20rgba(0,0,0,0.25);\x0a}\x0a#botao-limpar-filtros:active\x20{\x0a\x20\x20\x20\x20transform:\x20translateY(1px);\x0a\x20\x20\x20\x20filter:\x20brightness(100%);\x0a\x20\x20\x20\x20box-shadow:\x20none;\x0a}\x0a#painel-custom-conteudo\x20{\x20flex-grow:\x201;\x20overflow-y:\x20auto;\x20border:\x201px\x20solid\x20#ddd;\x20position:\x20relative;\x20background-color:\x20#fff;\x20padding:\x2010px;\x20}\x0a.loading-overlay\x20{\x20position:\x20absolute;\x20top:\x200;\x20left:\x200;\x20right:\x200;\x20bottom:\x200;\x20background:\x20rgba(255,\x20255,\x20255,\x200.8);\x20display:\x20none;\x20justify-content:\x20center;\x20align-items:\x20center;\x20font-size:\x2020px;\x20font-weight:\x20bold;\x20color:\x20#333;\x20}\x0a.botao-nova-interface\x20{\x20position:\x20fixed;\x20top:\x2010px;\x20right:\x2010px;\x20z-index:\x20999998;\x20background-color:\x20#42b72a;\x20color:\x20white;\x20padding:\x2010px\x2015px;\x20border:\x20none;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x20box-shadow:\x200\x202px\x205px\x20rgba(0,0,0,0.2);\x20font-weight:\x20bold;\x20transition:\x20transform\x200.15s\x20ease,\x20box-shadow\x200.15s\x20ease,\x20filter\x200.15s\x20ease;\x20}\x0a.total-summary\x20{\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x20gap:\x2020px;\x20padding:\x2012px;\x20margin-bottom:\x2015px;\x20background-color:\x20#e9ecef;\x20border:\x201px\x20solid\x20#ced4da;\x20border-radius:\x205px;\x20font-size:\x2014px;\x20}\x0a.summary-item\x20b\x20{\x20color:\x20#000;\x20}\x0a\x0a/*\x20Botão\x20Voltar\x20ao\x20Topo\x20agora\x20se\x20posiciona\x20relativo\x20ao\x20#painel-custom\x20*/\x0a.btn-scroll-top\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x2020px;\x0a\x20\x20\x20\x20right:\x2030px;\x0a\x20\x20\x20\x20background-color:\x20#1877f2;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20width:\x2045px;\x0a\x20\x20\x20\x20height:\x2045px;\x0a\x20\x20\x20\x20font-size:\x2024px;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.3);\x0a\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20transition:\x20background-color\x200.2s,\x20transform\x200.2s;\x0a}\x0a.btn-scroll-top:hover\x20{\x0a\x20\x20\x20\x20background-color:\x20#1567d1;\x0a\x20\x20\x20\x20transform:\x20scale(1.1);\x0a}\x0a.grupo-equipamento\x20{\x20background-color:\x20#ffffff;\x20border:\x201px\x20solid\x20#e0e0e0;\x20border-radius:\x208px;\x20margin-bottom:\x2015px;\x20box-shadow:\x200\x202px\x204px\x20rgba(0,0,0,0.05);\x20overflow:\x20hidden;\x20transition:\x20box-shadow\x200.3s\x20ease;\x20}\x0a.grupo-equipamento:hover\x20{\x20box-shadow:\x200\x204px\x2012px\x20rgba(0,0,0,0.1);\x20}\x0a.grupo-equipamento-header\x20{\x20background-color:\x20#f7f7f7;\x20padding:\x2012px\x2015px;\x20font-weight:\x20bold;\x20cursor:\x20pointer;\x20border-bottom:\x201px\x20solid\x20#e0e0e0;\x20display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20font-size:\x2016px;\x20color:\x20#333;\x20}\x0a.grupo-equipamento-header\x20.header-titulo\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20gap:\x2010px;\x20}\x0a.grupo-equipamento-header\x20.header-controles\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20gap:\x2015px;\x20}\x0a.grupo-equipamento-header\x20.contador-badge\x20{\x20background-color:\x20#1877f2;\x20color:\x20white;\x20padding:\x204px\x208px;\x20border-radius:\x2012px;\x20font-size:\x2012px;\x20font-weight:\x20bold;\x20}\x0a.grupo-equipamento-header\x20.toggle-icon\x20{\x20font-size:\x2016px;\x20transition:\x20transform\x200.3s\x20ease;\x20color:\x20#606770;\x20}\x0a.grupo-equipamento-header.aberto\x20.toggle-icon\x20{\x20transform:\x20rotate(180deg);\x20}\x0a.grupo-equipamento-conteudo\x20{\x20display:\x20none;\x20padding:\x2015px;\x20background-color:\x20#fff;\x20}\x0a.equipamento-dashboard\x20{\x20padding:\x2010px;\x20background:\x20#f5f6f7;\x20border-radius:\x204px;\x20margin-bottom:\x2010px;\x20}\x0a.chart-container\x20{\x20width:\x20100%;\x20display:\x20flex;\x20flex-direction:\x20column;\x20gap:\x204px;\x20margin-top:\x205px;\x20}\x0a.chart-bar-wrapper\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20gap:\x208px;\x20}\x0a.chart-label\x20{\x20font-size:\x2012px;\x20width:\x2080px;\x20text-align:\x20right;\x20color:\x20#606770;\x20}\x0a.chart-bar\x20{\x20height:\x2020px;\x20color:\x20white;\x20font-size:\x2011px;\x20font-weight:\x20bold;\x20line-height:\x2020px;\x20text-align:\x20right;\x20padding-right:\x205px;\x20border-radius:\x203px;\x20white-space:\x20nowrap;\x20transition:\x20width\x200.5s\x20ease-in-out;\x20}\x0a.tabela-ordens-moderna\x20{\x20width:\x20100%;\x20border-collapse:\x20collapse;\x20margin-top:\x2015px;\x20}\x0a.tabela-ordens-moderna\x20th,\x20.tabela-ordens-moderna\x20td\x20{\x20padding:\x2012px\x208px;\x20text-align:\x20left;\x20border-bottom:\x201px\x20solid\x20#e9e9e9;\x20font-size:\x2013px;\x20color:\x20#333;\x20}\x0a.tabela-ordens-moderna\x20th\x20{\x20background-color:\x20#f2f3f5;\x20font-weight:\x20bold;\x20color:\x20#606770;\x20font-size:\x2012px;\x20text-transform:\x20uppercase;\x20}\x0a.tabela-ordens-moderna\x20tbody\x20tr:nth-child(even)\x20{\x20background-color:\x20#f7f8fa;\x20}\x0a.tabela-ordens-moderna\x20tbody\x20tr:hover\x20{\x20background-color:\x20#e9ebee;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.dashboard-assinatura\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x204px;\x20/*\x20Distância\x20da\x20parte\x20de\x20baixo\x20do\x20painel\x20*/\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x20/*\x20Centraliza\x20horizontalmente\x20*/\x0a\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20color:\x20#888;\x0a\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20z-index:\x2011;\x20/*\x20Garante\x20que\x20fique\x20acima\x20do\x20botão\x20\x27Voltar\x20ao\x20Topo\x27\x20*/\x0a}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'Estructura\x20Metálica', 'Cummins', '183', 'Corporación', 'Falha\x20ao\x20emitir\x20ordem\x20', 'OTAMERICA', 'Reprogramação', '0\x200\x205px\x200', 'Ir\x20para\x20a\x20aba\x20\x22Reprogramação\x22', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-hotkey-desc\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>', 'Foco,\x20força\x20e\x20cafeína!', ']\x20à\x20lista\x20de\x20configuração', 'PROCESSAMENTO\x20PARADO', '156', 'texto', 'fecha_programacion', 'Digite\x20a\x20senha\x20do\x20seu\x20perfil:', 'Abre\x20a\x20aba\x20para\x20criar\x20novos\x20pedidos\x20ou\x20emitir\x20ordens.', 'live-order-counter', 'cursor', 'title', 'erro', 'Rodrigo\x20Fernandes', '🚀\x20Disparando\x20reprogramação\x20para\x20', '[TitanSystem]\x20Lista\x20de\x20planos\x20vazia.\x20Não\x20foi\x20possível\x20definir\x20o\x20próximo\x20ID.', 'trim', '1.5', '60px', 'TEXTAREA', '/albatros/actions/adm/abm.php?SESID=', '\x20inacessível', 'NFD', 'vertical', 'none', 'Criando\x20', '📄\x20PDF', '176', 'Falha\x20ao\x20programar\x20para\x20o\x20equipamento\x20', 'Fala,\x20', 'execucao', 'maxHeight', 'underline', 'display', 'Falha\x20ao\x20ativar\x20ordem\x20', 'Falha\x20ao\x20executar\x20ordem\x20', '.titanflow-modal-content', '\x20ordens\x20selecionadas.\x0aDeseja\x20continuar?', 'clientX', 'reprogramacao', 'backgroundSize', 'PARAR\x20PROCESSAMENTO', '👨‍💻\x20<em><a\x20href=\x22#\x22\x20target=\x22_blank\x22\x20style=\x22color:#1ab3a5;\x20text-decoration:\x20none;\x22>Desenvolvido\x20por\x20PCM</a></em>\x20&copy;\x20', 'flat', '✅\x20Perfil\x20autenticado:\x20', ':</label>', 'setFontSize', '\x20planos\x20criados.\x20', 'config-prog-count', 'Processamento\x20interrompido\x20pelo\x20usuário', 'oninput', 'dataRequerida', '[Debug\x20TitanSystem]\x20Tentativa\x20#', 'duracao', 'Erro:\x20Não\x20foi\x20possível\x20encontrar\x20o\x20ID\x20da\x20Sessão\x20(SESID).', 'pedido_ultimo_taller', 'Prog.', 'btn-limpar-equipamentos-prog', 'Que\x20a\x20força\x20esteja\x20com\x20você.\x20💪', 'rec', 'subseccion=editar_restringido', 'Nenhum\x20equipamento\x20selecionado.', 'mao_de_obra', 'btn-limpar-equipamentos', 'Luis\x20Azevedo', 'Sistema\x20de\x20Puesta\x20a\x20Tierra\x20(PAT)', '&id_reg=', 'onchange', 'titanflow-key__planes_de_mantenimiento_equipos_condiciones__id', '0\x20ordens', 'Acessar\x20Aba:\x20Programação', 'Falha\x20na\x20descriptografia.\x20Chave\x20secreta\x20inválida?', 'painel-progresso-massa', 'terminacion_accion', 'rejected', 'Pessoa\x20', '/albatros/admin.php?SESID=', 'titan_planes_de_mantenimiento', '154', '&seccion=titan_trabajos_ordenes&id_reg=', 'Panel\x20Fotovoltáico', '148', 'pedido_ultimo_tipo_trabalho', '✅\x20Código\x20Desbloqueado', 'botao-limpar-filtros', 'Dispositivo\x20Sensor\x20de\x20Temperatura', 'Selecione\x20a\x20Contratista', 'Generador\x20Eléctrico', '🔒\x20Desbloquear\x20Edição\x20de\x20Código', 'onmouseover', 'TitanSystem\x20🚀', 'catch', 'emissao-especialidades-container', 'nombre', 'titanflow_planejamento_ultima_aba', 'Ordens\x20salvas:\x20', '2px', 'location', '2nDAbsq', 'Bem-vindo,\x20Danthonamerica!\x20O\x20sistema\x20já\x20está\x20até\x20mais\x20alinhado.', 'getComputedStyle', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22grupo-equipamento\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22grupo-equipamento-header\x22\x20data-target=\x22', '50%', 'Falha\x20ao\x20adicionar\x20mão\x20de\x20obra\x20na\x20ordem\x20', 'fecha', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.confirm\x20=\x20function(message)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27[✅\x20Popup\x20de\x20confirmação\x20bloqueado\x20via\x20injeção]:\x27,\x20message);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'Erro!\x20Tente\x20Novamente', 'Manutenção\x20Corretiva', '0\x204px\x208px\x20rgba(0,0,0,0.2)', ']</b>\x20', '193', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22remove-config-prog-btn\x22\x20data-id=\x22', 'exec_horas', '🚀\x20Iniciando\x20ativação\x20para\x20', 'exec_causa', 'text/html', '175', 'Pode\x20entrar,\x20o\x20escritório\x20da\x20presidência\x20da\x20Danthamerica\x20é\x20todo\x20seu.\x20Bem-vindo!', '...', 'Categoria\x20de\x20Equipamento', '<span>Processando...</span>', '217', 'position', 'Nenhuma\x20ordem\x20válida\x20para\x20criar\x20após\x20a\x20validação.', '3px\x203px', 'Caldera', 'progresso-status-texto', '0\x201px\x202px\x20rgba(0,0,0,0.07)\x20inset', 'firstChild', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>', '6px', 'Wdson\x20Fidelis', '[TitanSystem]\x20Link\x20do\x20TOCICA\x20Nº\x20', '23514aKjeSe', 'href', 'lastActiveTitanTab', '#tab-btn-criacao', '<span><span\x20class=\x22item-tag\x22>[', 'Processando\x20', 'submitBtn', '01:00', '[Debug\x20TitanSystem]\x20❌\x20Erro:\x20O\x20Iframe\x20falhou\x20ao\x20carregar\x20(evento\x20onerror).', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-titulo-secao\x22><span>Carregar\x20Dados</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-botoes-carregar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22titanflow-carregar-planos\x22>Carregar\x20Planos</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22titanflow-carregar-equipamentos\x22>Carregar\x20Equipamentos</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-titulo-secao\x22><span>Adicionar\x20Nova\x20Programação</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-busca-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-plan-busca\x22>Buscar\x20Plano\x20(ID\x20ou\x20Nome)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22titanflow-prog-plan-busca\x22\x20placeholder=\x22Digite\x20para\x20buscar...\x22\x20autocomplete=\x22off\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22titanflow-prog-plan-resultados\x22\x20class=\x22titanflow-resultados-busca\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20id=\x22titanflow-prog-plan-id-selecionado\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-busca-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-equip-busca\x22>Buscar\x20Equipamento\x20(TAG\x20ou\x20Nome)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22titanflow-prog-equip-busca\x22\x20placeholder=\x22Adicione\x20um\x20ou\x20mais\x20equipamentos...\x22\x20autocomplete=\x22off\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22titanflow-prog-equip-resultados\x22\x20class=\x22titanflow-resultados-busca\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22equip-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Equipamentos\x20para\x20Programar\x20(<span\x20id=\x22programacao-equip-count\x22>0</span>):</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-limpar-equipamentos-prog\x22\x20title=\x22Limpar\x20lista\x20de\x20equipamentos\x22>Limpar\x20Tudo</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22programacao-equipamentos-lista\x22\x20class=\x22selected-equip-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-requerente\x22>Requerido\x20por</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22titanflow-prog-requerente\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'Erro\x20crítico\x20ao\x20carregar\x20a\x20página\x20de\x20equipamentos.', 'Esperando\x20planejamento', 'Condição\x20de\x20Equipamento', '0\x202px\x204px\x20rgba(0,0,0,0.15)', 'Execução', '[TitanSystem\x20Update]\x20Script\x20já\x20está\x20na\x20versão\x20mais\x20recente.', 'conteudo-abas', 'titanflow-esp-id-', 'titanflow-criar-varios-check', '--\x20Selecione\x20--', '\x20ordens\x20processadas.\x20', 'Mecânico', 'Detector\x20de\x20Gas', 'append', 'push', 'resize', '14px', 'rotate(0deg)', 'find', 'innerText', 'tab-btn-programacao', 'backgroundRepeat', 'titanflow-btn-salvar-selecao', '&duracion=', '30px', 'condiciones_preliminares', 'titanflow-esp-hht-', '5px\x205px', 'Total\x20(HH)', 'Junho', 'titanflow-btn-selecao', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-modal-overlay-marine\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x20top:\x200;\x20left:\x200;\x20width:\x20100%;\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,0,0,0.6);\x20z-index:\x2010004;\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x20align-items:\x20center;\x20font-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20Helvetica,\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-modal-content-marine\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x20border-radius:\x208px;\x20width:\x2090%;\x20max-width:\x20600px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x20box-shadow:\x200\x205px\x2015px\x20rgba(0,0,0,0.3);\x20animation:\x20titanflow-fade-in\x200.3s\x20ease-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-modal-content-marine\x20h3\x20{\x20margin-top:\x200;\x20color:\x20#005A9C;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-modal-content-marine\x20textarea\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x20height:\x20300px;\x20box-sizing:\x20border-box;\x20resize:\x20vertical;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x20border-radius:\x205px;\x20padding:\x2010px;\x20font-family:\x20monospace;\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-modal-content-marine\x20.modal-actions\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x20justify-content:\x20flex-end;\x20gap:\x2010px;\x20margin-top:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20titanflow-fade-in\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x200;\x20transform:\x20scale(0.95);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x201;\x20transform:\x20scale(1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', 'titanflow-modal-overlay', '198', 'Interruptor\x20Eléctrico', 'putTotalPages', '1px\x20solid\x20#3366ff', '178', '194', '1fr\x201fr\x201fr', 'replace', 'titanflow-prog-diaria-dias', '🛑\x20Todos\x20os\x20processos\x20em\x20andamento\x20foram\x20interrompidos.', 'mouseup', '189', 'titanflow_panel_left', 'sans-serif', 'Limpar\x20Seleção\x20de\x20Ordens', 'round', 'block', 'ATENÇÃO!\x0a\x0aVocê\x20está\x20prestes\x20a\x20ADICIONAR\x20O\x20CÓDIGO:\x0a\x22', 'scale(1.1)', 'desc', '&seccion=titan_trabajos_pedidos&op=a&in=20&n2=202&n1=200', 'titanflow-prog-semanal-semanas', 'substring', '\x22\x20disabled></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><label>Horas:</label><input\x20type=\x22number\x22\x20id=\x22esp-horas-1\x22\x20min=\x220\x22\x20value=\x22', 'actualizar_totales_especialidades', '<option\x20value=\x22', 'a[onclick*=\x22seccion=tocica_reportes\x22]', 'btn-processar-marine', 'Servidor\x20de\x20Datos', 'Equipamento\x20[', 'call', 'contentDocument', 'Nenhuma\x20ordem\x20selecionada\x20para\x20fechar!', 'some', 'pt-BR', 'beforeend', '.action-row', 'descricao', '1px\x20solid\x20#ccc', '❌\x20Erro\x20crítico\x20de\x20licença.\x20Fale\x20com\x20o\x20administrador.', 'aberto', 'titanflow-key__empresas__id', 'Falha\x20ao\x20criar\x20pedido\x20', 'type', '181', 'tipoTrabalhoId', 'width\x200.4s\x20ease-in-out,\x20left\x200.4s\x20ease-in-out,\x20border-radius\x200.4s\x20ease-in-out', 'Nenhum\x20pedido/ordem\x20selecionado\x20para\x20emissão!', 'Concluído!\x20Mão\x20de\x20obra\x20de\x20', 'key__talleres__id', 'brightness(110%)', '#ffffff', '🖐️', '⚠️\x20Login\x20expirado\x20ou\x20senha\x20incorreta.\x20Digite\x20novamente.', 'Fevereiro', '#17a2b8', 'programadas', 'painel-selecao-ordens', 'Serviços\x20Gerais', 'titanflow-prog-plan-id-selecionado', 'selected', 'fecha_deseable', 'version', 'key__requirentes__id', 'Reprogramada\x20para\x20a\x20data\x20de\x20execução!\x20(', 'id_reg', 'right\x20.7em\x20top\x2050%', 'Ocorreu\x20um\x20erro\x20inesperado.\x20Tente\x20recarregar\x20a\x20página.', 'alertas_y_advertencias', 'botao-parada-emergencia', '[Automação\x20Ordens]', 'ID\x20do\x20plano\x20não\x20preenchido.', 'exec_recursos', '4px\x208px', 'tecnico', '174', 'true', ':hover', '#343a40', 'informacion_tecnica_de_referencia', ':\x20Equipamento\x20não\x20encontrado:\x20\x22', 'click', 'Campo\x20Abierto', 'matchAll', 'causa', '<span\x20class=\x22btn-text\x22>🧹\x20Limpar\x20Seleção</span><span\x20class=\x22btn-progress-fill\x22></span>', 'titanflow-prog-semanal-dia', 'campo_exec_causa', '[for=\x22titanflow-key__planes_de_mantenimiento_equipos_condiciones__id\x22]', '<span\x20class=\x22btn-text\x22></span><span\x20class=\x22btn-progress-fill\x22></span>', 'visibility', 'Mantenimiento\x20Detectivo', '[TitanSystem]\x20Erro\x20geral\x20ao\x20carregar\x20dados:', 'translateY(0)', 'Arrestallama', 'CM\x20Couto', 'temp_', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-add-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#28a745;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.1s;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20A\x20chave\x20para\x20o\x20alinhamento\x20correto\x20sem\x20quebrar\x20o\x20layout\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vertical-align:\x20middle;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-add-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'Sotreq/Caterpillar', 'titanflow-esp-id-1', 'Manutenção\x20Detectiva', 'key__especialidades__id1', '#resultado\x20table', 'Enter', 'btn-adicionar-programacao', 'OT\x20Nº', 'Pintura', 'linebreak', 'text', 'target', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22input-busca-equipamentos\x22\x20placeholder=\x22Buscar\x20por\x20TAG\x20ou\x20nome...\x22\x20class=\x22full-width-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22resultados-busca-equipamentos\x22\x20class=\x22search-results\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22equip-header\x22>\x0a\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label>Equipamentos\x20na\x20Lista\x20(<span\x20id=\x22equip-count\x22>0</span>):</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-os-marine\x22\x20title=\x22Criar\x20múltiplos\x20pedidos\x20via\x20script\x20JSON\x22>OS\x20MARINE</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<button\x20id=\x22btn-limpar-equipamentos\x22\x20title=\x22Limpar\x20lista\x20de\x20equipamentos\x22>Limpar\x20Tudo</button>\x0a</div>\x0a<ul\x20id=\x22equipamentos-selecionados-lista\x22\x20class=\x22selected-equip-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label>Data\x20Requerida:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22date\x22\x20id=\x22pedido-data-requerida\x22\x20class=\x22full-width-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-group\x22><label>Taller\x20(Oficina):</label><select\x20id=\x22pedido-taller\x22>', 'max', 'onload', 'titanflow-prog-mensal-opts', '<i\x20style=\x22font-size:12px;\x20color:#888;\x20padding-left:5px;\x22>Nenhum\x20equipamento\x20na\x20lista...</i>', 'problema', 'Recursos', 'O\x20script\x20deve\x20ser\x20um\x20array\x20JSON\x20(começar\x20com\x20\x27[\x27\x20e\x20terminar\x20com\x20\x27]\x27).', 'Timeout:\x20A\x20página\x20de\x20edição\x20do\x20pedido\x20não\x20carregou.', 'img', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>', '🔒\x20Desbloquear\x20Edição\x20de\x20Descrição', '210', 'Forçar\x20Alteração\x20de\x20Descrição\x20(Opcional):', 'activeElement', 'titanflow-toggle-ordens-btn', 'titanflow_estado_planejamento', 'N/A', 'A\x20corporação\x20inteira\x20te\x20saúda!\x20Bem-vindo,\x20Danthamerica!\x20🏢', 'Marítimo', 'titanflow-tab-content', 'Petrovera', 'Bem-vindo,\x20Luis!\x20A\x20planilha\x20de\x20doces\x20da\x20semana\x20já\x20está\x20pronta?', 'border-color\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease,\x20height\x200.1s\x20ease', 'Digite\x20ou\x20cole\x20as\x20ordens\x20aqui...\x0aEx:\x2012345', 'filtro-tipo-trabalho', '[Debug\x20TitanSystem]\x20❌\x20Erro:\x20Timeout!\x20O\x20formulário\x20não\x20foi\x20encontrado\x20a\x20tempo.', 'emit-mode', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-titulo-secao\x22><span>Seleção\x20de\x20Programações</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-capturar-programacoes\x22\x20class=\x22titanflow-action-btn\x22\x20style=\x22background-color:\x20#3366ff;\x20color:\x20white;\x20width:\x20100%;\x20margin-bottom:\x2010px;\x20padding:\x208px;\x22>🔍\x20Capturar\x20Programações\x20Visíveis</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22equip-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Programações\x20na\x20Lista\x20(<span\x20id=\x22config-prog-count\x22>0</span>):</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-limpar-config-prog\x22\x20title=\x22Limpar\x20lista\x20de\x20programações\x22>Limpar\x20Tudo</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22config-programacoes-lista\x22\x20class=\x22selected-equip-list\x22\x20style=\x22margin-bottom:\x2015px;\x22></ul>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-titulo-secao\x22><span>Ações\x20em\x20Massa</span></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22config-programacao-fields\x22\x20style=\x22display:\x20flex;\x20flex-direction:\x20column;\x20gap:\x208px;\x20margin-bottom:\x2010px;\x20border:\x201px\x20solid\x20#ccc;\x20padding:\x2010px;\x20border-radius:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-tipo\x22>Tipo\x20de\x20Programação:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22titanflow-prog-tipo\x22\x20class=\x22full-width-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22\x22>--\x20Selecione\x20--</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22diaria\x22>Diária</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22semanal\x22>Semanal</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22mensual2\x22>Mensal</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22titanflow-prog-diaria-opts\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-diaria-dias\x22>A\x20cada\x20(dias):</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22titanflow-prog-diaria-dias\x22\x20value=\x221\x22\x20min=\x221\x22\x20class=\x22full-width-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22titanflow-prog-semanal-opts\x22\x20style=\x22display:\x20none;\x20gap:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:1;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-semanal-semanas\x22>A\x20cada\x20(semanas):</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22titanflow-prog-semanal-semanas\x22\x20value=\x221\x22\x20min=\x221\x22\x20class=\x22full-width-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:2;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-semanal-dia\x22>No\x20dia\x20da\x20semana:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22titanflow-prog-semanal-dia\x22\x20class=\x22full-width-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lunes\x22>Segunda-feira</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22martes\x22>Terça-feira</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22miércoles\x22>Quarta-feira</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22jueves\x22>Quinta-feira</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22viernes\x22>Sexta-feira</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sábado\x22>Sábado</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22domingo\x22>Domingo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22titanflow-prog-mensal-opts\x22\x20style=\x22display:\x20none;\x20gap:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:2;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-mensal-mes\x22>Mês\x20de\x20Início:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22titanflow-prog-mensal-mes\x22\x20class=\x22full-width-input\x22></select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:1;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-mensal-cada\x22>Repetir\x20a\x20cada\x20(meses):</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22titanflow-prog-mensal-cada\x22\x20value=\x221\x22\x20min=\x221\x22\x20class=\x22full-width-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-data-inicio\x22>Data\x20de\x20Início:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22date\x22\x20id=\x22titanflow-prog-data-inicio\x22\x20class=\x22full-width-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22titanflow-prog-horizonte-num\x22>Horizonte\x20de\x20Chamada\x20(%\x20da\x20frequência):</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22titanflow-prog-horizonte-slider\x22\x20value=\x2225\x22\x20min=\x221\x22\x20max=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22titanflow-prog-horizonte-num\x22\x20value=\x2225\x22\x20min=\x221\x22\x20max=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22config-acoes-container\x22\x20class=\x22titanflow-acao-container\x22\x20style=\x22flex-direction:\x20column;\x20align-items:\x20stretch;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-programar-massa\x22\x20class=\x22titanflow-action-btn\x22\x20style=\x22background-color:\x20#ffaa00;\x20color:\x20white;\x20padding:\x2010px;\x22>📅\x20Programar\x20Selecionadas</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style=\x22margin:\x2010px\x200;\x20border-top:\x201px\x20solid\x20#ccc;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-ativar-programacoes\x22\x20class=\x22titanflow-action-btn\x22\x20style=\x22background-color:\x20#28a745;\x20color:\x20white;\x20padding:\x2010px;\x22>⚡\x20Ativar\x20Selecionadas</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-desativar-programacoes\x22\x20class=\x22titanflow-action-btn\x22\x20style=\x22background-color:\x20#dc3545;\x20color:\x20white;\x20padding:\x2010px;\x20margin-top:\x205px;\x22>🔌\x20Desativar\x20Selecionadas</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'Mantenimiento\x20Preventivo', 'Adicionar\x20Código\x20de\x20Falha\x20ao\x20Final\x20da\x20Descrição:', '[Debug\x20TitanSystem]\x20❌\x20Erro\x20inesperado\x20durante\x20a\x20raspagem:', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22modal-section-title\x22>Como\x20Atualizar\x20o\x20Script\x20🔄</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tutorial-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tutorial-method\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4>Método\x201:\x20Pela\x20Extensão\x20(Recomendado)</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ol\x20class=\x22tutorial-steps\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Clique\x20no\x20ícone\x20da\x20extensão\x20<b>Tampermonkey</b>\x20no\x20seu\x20navegador.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>No\x20menu,\x20clique\x20em\x20<code>Utilitários</code>\x20e\x20depois\x20em\x20<code>Verificar\x20atualização\x20de\x20scripts</code>.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Se\x20houver\x20uma\x20nova\x20versão,\x20um\x20botão\x20para\x20atualizar\x20aparecerá.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Recarregue\x20a\x20página\x20do\x20Titan\x20(F5).\x20Sua\x20versão\x20atual\x20é\x20a\x20<b>v', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'Clique\x20em\x20\x22Desbloquear\x22\x20para\x20editar...', '🙈\x20Ocultar\x20Painel', '#ced4da', 'Falha\x20ao\x20remover\x20mão\x20de\x20obra\x20da\x20ordem\x20', 'translateY(0px)', 'Pedidos', 'filtro-oficina', 'titanflow-prog-semanal-opts', 'Agosto', 'function', 'cancelacion_causa', 'Selecione\x20a\x20Categoria', '&n2=', 'Falha\x20ao\x20', 'Timeout:\x20Formulário\x20de\x20execução\x20não\x20foi\x20encontrado.', 'Dispositivo\x20Sensor\x20de\x20Corrosión', 'slice', '.titanflow-acao-container', 'Selecione', 'debug', 'Tipo\x20de\x20Trabalho', 'Infraestructura', '204', 'esp-id-', 'Concluído!', 'programar', 'show', '80px', 'titanflow_equipamentos_selecionados', '8px\x205px', '#ffaa00', 'O\x20Dlleandro\x20chegou!\x20Metade\x20do\x20tempo\x20criando\x20RC,\x20a\x20outra\x20metade\x20destruindo\x20no\x20supino!', 'Timeout:\x20Formulário\x20de\x20reprogramação\x20(ou\x20botão\x20Salvar)\x20não\x20foi\x20encontrado.', 'danthon', 'titanflow_prog_equipamentos_selecionados', 'Vamos\x20deixar\x20tudo\x20em\x20ordem.\x20📋', 'bold', 'Válvula', '215', 'style', 'titan_trabajos_pedidos', 'input-busca-equipamentos', 'success', '172', 'fontSize', '2-digit', 'getData', '\x20ordem(s)</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22grupo-equipamento-conteudo\x22\x20id=\x22', 'programacao-equipamentos-lista', 'Ocultar/Mostrar\x20Painel', 'Digite\x20a\x20nova\x20descrição\x20aqui...', 'titanflow_bemvindo_exibido_em', 'titanflow-add-prog-btn', '#888', 'O\x20próprio\x20Danthamerica\x20em\x20pessoa!\x20Tenha\x20um\x20ótimo\x20dia!', '<i\x20style=\x22font-size:12px;\x20color:#888;\x20padding-left:5px;\x22>Nenhuma\x20programação\x20na\x20lista...</i>', 'titanflow-prog-horizonte-slider', 'Ocorreu\x20uma\x20falha\x20ao\x20gerar\x20o\x20PDF.\x20Verifique\x20o\x20console\x20(F12)\x20para\x20mais\x20detalhes.', 'Falha\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe\x20de\x20emissão.', 'sucesso', '197', 'Abril', 'getDay', 'match', 'Parâmetros\x20de\x20navegação\x20não\x20encontrados\x20na\x20URL.', 'table_target_empresas', '146', '13px', 'Brazo\x20de\x20Carga', 'Assistência\x20a\x20Projetos', 'alignItems', 'equipamento', 'tab-btn-configuracao', 'translateY(1px)', 'column', 'Bem-vindo,\x20Luis!\x20O\x20treino\x20de\x20hoje\x20já\x20compensou\x20os\x20doces\x20de\x20ontem?', 'removeEventListener', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20.titanflow-grid\x20{\x20display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20.titanflow-full-width\x20{\x20grid-column:\x201\x20/\x20-1;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20label\x20{\x20display:\x20block;\x20font-weight:\x20600;\x20font-size:\x2013px;\x20color:\x20#333;\x20margin-bottom:\x205px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20input,\x20#painel-planejamento\x20select\x20{\x20width:\x20100%;\x20padding:\x208px;\x20border:\x201px\x20solid\x20#ccc;\x20border-radius:\x205px;\x20box-sizing:\x20border-box;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20input:disabled\x20{\x20background-color:\x20#e9ecef;\x20cursor:\x20not-allowed;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20.titanflow-esp-linha\x20{\x20display:\x20grid;\x20grid-template-columns:\x20100px\x202fr\x201fr\x201fr\x201fr;\x20align-items:\x20center;\x20gap:\x208px;\x20margin-bottom:\x208px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20.titanflow-titulo-secao\x20{\x20font-size:\x2016px;\x20font-weight:\x20bold;\x20color:\x20#3366ff;\x20border-bottom:\x202px\x20solid\x20#e9ecef;\x20padding-bottom:\x208px;\x20margin:\x2015px\x200\x2010px\x200;\x20grid-column:\x201\x20/\x20-1;\x20display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#titanflow-limpar-plano-btn\x20{\x20background-color:\x20#6c757d;\x20color:\x20white;\x20border:\x20none;\x20border-radius:\x204px;\x20padding:\x204px\x208px;\x20font-size:\x2012px;\x20cursor:\x20pointer;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-tab-container\x20{\x20display:\x20flex;\x20gap:\x202px;\x20margin-bottom:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-tab-btn\x20{\x20background-color:\x20#6c757d;\x20color:\x20white;\x20border:\x20none;\x20padding:\x208px\x2012px;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x20font-weight:\x20bold;\x20transition:\x20all\x200.2s\x20ease;\x20box-shadow:\x200\x202px\x204px\x20rgba(0,0,0,0.15);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-tab-btn.active\x20{\x20background-color:\x20#3366ff;\x20transform:\x20translateY(-2px);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-acao-container\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20gap:\x2010px;\x20margin-top:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-varios-container\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20gap:\x205px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-varios-container\x20input[type=\x22checkbox\x22]\x20{\x20width:\x20auto;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-varios-container\x20input[type=\x22number\x22]\x20{\x20width:\x2055px;\x20text-align:\x20center;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20NOVO:\x20Estilos\x20para\x20a\x20animação\x20do\x20botão,\x20copiados\x20do\x20painel\x20principal\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20.titanflow-action-btn\x20{\x20position:\x20relative;\x20overflow:\x20hidden;\x20display:\x20flex;\x20justify-content:\x20center;\x20align-items:\x20center;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20.btn-text\x20{\x20position:\x20relative;\x20z-index:\x202;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20.btn-progress-fill\x20{\x20position:\x20absolute;\x20left:\x200;\x20top:\x200;\x20height:\x20100%;\x20width:\x200%;\x20background-color:\x20rgba(255,\x20255,\x20255,\x200.3);\x20z-index:\x201;\x20transition:\x20width\x200.2s\x20linear;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20NOVO:\x20Estilo\x20aprimorado\x20para\x20o\x20botão\x20Limpar\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#titanflow-limpar-plano-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#6c757d;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px\x2010px;\x20/*\x20Mais\x20preenchimento\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x20/*\x20Tamanho\x20da\x20fonte\x20ajustado\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x204px\x20rgba(0,0,0,0.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a/*\x20VERSÃO\x20CORRIGIDA\x20E\x20FINAL\x20DO\x20CHECKBOX\x20CUSTOMIZADO\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20O\x20container\x20que\x20agrupa\x20o\x20checkbox\x20e\x20o\x20input\x20de\x20número\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.custom-checkbox-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20O\x20tamanho\x20fixo\x20para\x20o\x20input\x20de\x20quantidade\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#titanflow-criar-varios-qtd\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2055px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Esconde\x20o\x20checkbox\x20original\x20do\x20navegador\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.custom-checkbox-container\x20input[type=\x22checkbox\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20O\x20label\x20se\x20torna\x20o\x20container\x20clicável\x20e\x20transparente\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.custom-checkbox-container\x20.checkbox-label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2022px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2022px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20O\x20pseudo-elemento\x20::before\x20cria\x20a\x20CAIXA\x20EXTERNA\x20do\x20checkbox\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.custom-checkbox-container\x20.checkbox-label::before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x20/*\x20Previne\x20problemas\x20de\x20dimensionamento\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Efeito\x20de\x20hover\x20na\x20caixa\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.custom-checkbox-container\x20.checkbox-label:hover::before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#888;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20O\x20pseudo-elemento\x20::after\x20cria\x20o\x20\x22CHECK\x22\x20(visto),\x20que\x20fica\x20invisível\x20por\x20padrão\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.custom-checkbox-container\x20input[type=\x22checkbox\x22]\x20+\x20.checkbox-label::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x27✔\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%)\x20scale(0);\x20/*\x20Começa\x20invisível\x20e\x20encolhido\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.1s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20QUANDO\x20MARCADO:\x20A\x20CAIXA\x20EXTERNA\x20muda\x20de\x20cor\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.custom-checkbox-container\x20input[type=\x22checkbox\x22]:checked\x20+\x20.checkbox-label::before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#28a745;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#28a745;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20QUANDO\x20MARCADO:\x20O\x20\x22CHECK\x22\x20(visto)\x20aparece\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.custom-checkbox-container\x20input[type=\x22checkbox\x22]:checked\x20+\x20.checkbox-label::after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%)\x20scale(1);\x20/*\x20Efeito\x20de\x20\x22pop\x22\x20para\x20aparecer\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20.titanflow-grid-programacao\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20grid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20grid-template-columns:\x201fr;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-botoes-carregar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-botoes-carregar\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-grow:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#adb5bd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f8f9fa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#495057;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x201px\x202px\x20rgba(0,0,0,0.05);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-botoes-carregar\x20button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#6c757d;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#e9ecef;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-botoes-carregar\x20button:disabled\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#e9ecef;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20not-allowed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#6c757d;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#ced4da;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-busca-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20.titanflow-busca-container\x20input\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ced4da;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20border-color\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#painel-planejamento\x20.titanflow-busca-container\x20input:focus\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#17a2b8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200\x203px\x20rgba(23,\x20162,\x20184,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010002;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-resultados-busca\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#17a2b8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010001;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom-left-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom-right-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x206px\x20rgba(0,0,0,0.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-resultados-busca.show\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-resultados-busca\x20div\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-resultados-busca\x20div:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#e0f7fa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.equip-header\x20{\x20display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20margin-top:\x208px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.equip-header\x20label\x20{\x20margin:\x200;\x20font-size:\x2013px;\x20font-weight:\x20600;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#btn-limpar-equipamentos-prog\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#dc3545;\x20color:\x20white;\x20border:\x20none;\x20padding:\x204px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x20font-weight:\x20bold;\x20border-radius:\x204px;\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.15s\x20ease,\x20filter\x200.15s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#btn-limpar-equipamentos-prog:hover\x20{\x20filter:\x20brightness(115%);\x20transform:\x20translateY(-1px);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.selected-equip-list\x20{\x20max-height:\x2080px;\x20overflow-y:\x20auto;\x20border:\x201px\x20solid\x20#ccc;\x20background:\x20#f8f9fa;\x20margin:\x205px\x200\x208px\x200;\x20padding:\x205px;\x20list-style:\x20none;\x20min-height:\x2024px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.selected-equip-list\x20li\x20{\x20display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20background:\x20white;\x20padding:\x204px\x208px;\x20border-radius:\x203px;\x20font-size:\x2012px;\x20margin-bottom:\x203px;\x20border:\x201px\x20solid\x20#e0e0e0;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.remove-equip-btn-prog\x20{\x20cursor:\x20pointer;\x20color:\x20#dc3545;\x20font-weight:\x20bold;\x20padding:\x200\x205px;\x20font-size:\x2016px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-add-prog-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#28a745;\x20color:\x20white;\x20border:\x20none;\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x20height:\x2020px;\x20font-size:\x2015px;\x20line-height:\x2020px;\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x20transition:\x20transform\x200.1s,\x20filter\x200.2s;\x20vertical-align:\x20middle;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-add-prog-btn:hover\x20{\x20transform:\x20scale(1.1);\x20filter:\x20brightness(110%);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#btn-limpar-config-prog\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#dc3545;\x20color:\x20white;\x20border:\x20none;\x20padding:\x204px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x20font-weight:\x20bold;\x20border-radius:\x204px;\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.15s\x20ease,\x20filter\x200.15s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#btn-limpar-config-prog:hover\x20{\x20filter:\x20brightness(115%);\x20transform:\x20translateY(-1px);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20ADICIONE\x20ESTE\x20NOVO\x20BLOCO\x20DE\x20CSS\x20*/\x0a.slider-container\x20{\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20gap:\x2010px;\x0a}\x0a.slider-container\x20input[type=\x22range\x22]\x20{\x0a\x20\x20\x20\x20flex-grow:\x201;\x0a\x20\x20\x20\x20height:\x208px;\x0a\x20\x20\x20\x20-webkit-appearance:\x20none;\x0a\x20\x20\x20\x20appearance:\x20none;\x0a\x20\x20\x20\x20background:\x20#ddd;\x0a\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20transition:\x20opacity\x20.2s;\x0a}\x0a.slider-container\x20input[type=\x22range\x22]::-webkit-slider-thumb\x20{\x0a\x20\x20\x20\x20-webkit-appearance:\x20none;\x0a\x20\x20\x20\x20appearance:\x20none;\x0a\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20background:\x20#ffaa00;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20white;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x202px\x20rgba(0,0,0,0.5);\x0a}\x0a.slider-container\x20input[type=\x22number\x22]\x20{\x0a\x20\x20\x20\x20width:\x2070px\x20!important;\x0a\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20padding:\x206px;\x0a}\x0a/*\x20ADICIONE\x20ESTE\x20NOVO\x20BLOCO\x20DE\x20CSS\x20*/\x0a#config-programacao-fields\x20{\x0a\x20\x20\x20\x20background-color:\x20#f8f9fa;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#dee2e6\x20!important;\x0a\x20\x20\x20\x20padding:\x2015px\x20!important;\x0a\x20\x20\x20\x20gap:\x2012px\x20!important;\x0a}\x0a#config-programacao-fields\x20label\x20{\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20color:\x20#495057;\x0a\x20\x20\x20\x20font-size:\x2013px;\x0a}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'mousemove', '\x20a\x20programação\x20', 'base', 'progresso-botao-fechar', 'Ordem\x20do\x20dia\x20da\x20Danthamerica:\x20ter\x20um\x20dia\x20excelente.\x20Cumpra-se!\x20Bem-vindo.', '#00aa00', 'entries', 'cssText', 'config-programacoes-lista', '#6c757d', 'localeCompare', 'titanflow-carregar-equipamentos', 'Timeout\x20esperando\x20a\x20submissão\x20do\x20formulário.', 'Estación\x20I/O', 'estado_id', 'tecnicos', '\x20para\x20', 'sort', '6px\x2012px', 'Processo\x20interrompido\x20durante\x20a\x20execução.', 'input', 'Transformador', '.titanflow-modal-overlay', 'clipboardData', 'readyState', 'Eléctrico', 'tr.bgcolor0,\x20tr.bgcolor1,\x20tr.bgcolorOn', 'closest', '#fff', 'Unidad', 'Erro:\x20Nenhum\x20equipamento\x20foi\x20selecionado!', '[TitanSystem\x20Debug]\x20Formulário\x20encontrado!\x20Preenchendo\x20dados...', 'exec_duracao', 'Imune\x20Guerra', 'pedido-taller', 'Falha\x20ao\x20cancelar\x20ordem\x20', '8px\x2016px', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.section-title\x20{\x20font-weight:\x20bold;\x20font-size:\x2014px;\x20color:\x20#3366ff;\x20margin:\x2012px\x200\x208px\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#conteudo-abas\x20input[type=\x22text\x22],\x20#conteudo-abas\x20input[type=\x22date\x22],\x20#conteudo-abas\x20input[type=\x22number\x22],\x20#conteudo-abas\x20select,\x20#conteudo-abas\x20textarea\x20{\x20width:\x20100%;\x20padding:\x206px;\x20margin:\x202px\x200;\x20border:\x201px\x20solid\x20#ccc;\x20border-radius:\x203px;\x20background-color:\x20#fff;\x20box-sizing:\x20border-box;\x20transition:\x20border-color\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease;\x20font-size:\x2013px;\x20-webkit-appearance:\x20none;\x20-moz-appearance:\x20none;\x20appearance:\x20none;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#conteudo-abas\x20select\x20{\x20background-image:\x20url(\x27data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\x27);\x20background-repeat:\x20no-repeat;\x20background-position:\x20right\x20.7em\x20top\x2050%;\x20background-size:\x20.65em\x20auto;\x20padding-right:\x202em;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#conteudo-abas\x20input:focus,\x20#conteudo-abas\x20select:focus,\x20#conteudo-abas\x20textarea:focus\x20{\x20border-color:\x20#3366ff;\x20outline:\x20none;\x20box-shadow:\x200\x200\x200\x202px\x20rgba(51,\x20102,\x20255,\x200.2);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.search-results\x20{\x0a\x20\x20\x20\x20max-height:\x20250px;\x0a\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20border-top:\x20none;\x0a\x20\x20\x20\x20background:\x20white;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20width:\x20calc(100%\x20-\x2020px);\x0a\x20\x20\x20\x20z-index:\x20100;\x0a\x20\x20\x20\x20box-shadow:\x200\x204px\x208px\x20rgba(0,0,0,0.1);\x0a\x20\x20\x20\x20border-bottom-left-radius:\x204px;\x0a\x20\x20\x20\x20border-bottom-right-radius:\x204px;\x0a}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.selected-item-display\x20{\x20padding:\x206px;\x20border:\x201px\x20solid\x20#ccc;\x20background:\x20#e9e9e9;\x20margin-bottom:\x208px;\x20min-height:\x2018px;\x20font-size:\x2012px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.form-row\x20{\x20display:\x20flex;\x20gap:\x203px;\x20margin-top:\x201px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.form-group\x20{\x20flex:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.form-group\x20label\x20{\x20display:\x20block;\x20margin-bottom:\x202px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.full-width-btn,\x20.action-btn\x20{\x20display:\x20inline-flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20border:\x20none;\x20font-weight:\x20bold;\x20cursor:\x20pointer;\x20border-radius:\x204px;\x20color:\x20white;\x20box-shadow:\x200\x201px\x202px\x20rgba(0,0,0,0.15);\x20transition:\x20transform\x200.15s\x20ease,\x20box-shadow\x200.15s\x20ease,\x20filter\x200.15s\x20ease;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.full-width-btn\x20{\x20padding:\x206px;\x20width:\x20100%;\x20margin-bottom:\x205px;\x20box-sizing:\x20border-box;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.action-btn\x20{\x20padding:\x208px\x2010px;\x20width:\x20100%;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.full-width-btn:hover,\x20.action-btn:hover\x20{\x20filter:\x20brightness(110%);\x20transform:\x20translateY(-2px);\x20box-shadow:\x200\x203px\x206px\x20rgba(0,0,0,0.20);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.full-width-btn:active,\x20.action-btn:active\x20{\x20filter:\x20brightness(100%);\x20transform:\x20translateY(1px);\x20box-shadow:\x20none;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#btn-atualizar-equipamentos\x20{\x20background-color:\x20#495057;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.create-btn\x20{\x20background-color:\x20#28a745;\x20flex-grow:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.emit-btn\x20{\x20background-color:\x20#17a2b8;\x20margin-top:\x201px;\x20margin-bottom:\x205px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.section-divider\x20{\x20margin:\x205px\x200;\x20border:\x200;\x20border-top:\x201px\x20solid\x20#ccc;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.specialty-group\x20{\x20border:\x201px\x20solid\x20#ddd;\x20border-radius:\x204px;\x20padding:\x208px;\x20margin-bottom:\x202px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.specialty-group-row\x20{\x20display:\x20flex;\x20gap:\x2010px;\x20margin-top:\x204px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.specialty-group-row\x20>\x20div\x20{\x20flex:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20label\x20{\x20font-size:\x2012px;\x20display:\x20block;\x20margin-top:\x205px;\x20margin-bottom:\x201px;\x20}\x0a\x0a.action-row\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20gap:\x208px;\x20margin-top:\x204px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#btn-principal-acao\x20{\x20flex-grow:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.multi-control-group\x20{\x20display:\x20flex;\x20flex-direction:\x20column;\x20gap:\x204px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.control-option\x20{\x20display:\x20flex;\x20align-items:\x20center;\x20gap:\x205px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.control-option\x20label\x20{\x20font-size:\x2011px;\x20margin:\x200;\x20cursor:\x20pointer;\x20user-select:\x20none;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.control-option\x20input[type=\x22checkbox\x22]\x20{\x20width:\x20auto;\x20margin:\x200;\x20cursor:\x20pointer;\x20}\x0a\x0a\x20#input-acao-valor\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2045px\x20!important;\x20/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x200.3s\x20ease-in-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#input-acao-valor.expanded\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2095px\x20!important;\x20/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#btn-principal-acao.emit-mode\x20{\x20background-color:\x20#0072c6;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Estilos\x20MÍNIMOS\x20e\x20necessários\x20para\x20a\x20lista\x20de\x20equipamentos\x20*/\x0a\x20\x20\x20\x20.equip-header\x20{\x20display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20margin-top:\x208px;\x20}\x0a\x20\x20\x20\x20.equip-header\x20label\x20{\x20margin:\x200;\x20font-size:\x2013px;\x20font-weight:\x20600;\x20}\x0a\x20\x20\x20\x20#btn-limpar-equipamentos\x20{\x0a\x20\x20\x20\x20background-color:\x20#dc3545;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20padding:\x204px\x208px;\x0a\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20transition:\x20transform\x200.15s\x20ease,\x20filter\x200.15s\x20ease;\x0a}\x0a#btn-limpar-equipamentos:hover\x20{\x0a\x20\x20\x20\x20filter:\x20brightness(115%);\x0a\x20\x20\x20\x20transform:\x20translateY(-1px);\x0a}\x0a#btn-limpar-equipamentos:active\x20{\x0a\x20\x20\x20\x20transform:\x20translateY(0px);\x0a\x20\x20\x20\x20filter:\x20brightness(100%);\x0a}\x0a\x20\x20\x20\x20.selected-equip-list\x20{\x20max-height:\x2080px;\x20overflow-y:\x20auto;\x20border:\x201px\x20solid\x20#ccc;\x20background:\x20#f8f9fa;\x20margin:\x205px\x200\x208px\x200;\x20padding:\x205px;\x20list-style:\x20none;\x20min-height:\x206px;\x20}\x0a\x20\x20\x20\x20.selected-equip-list\x20li\x20{\x20display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20background:\x20white;\x20padding:\x204px\x208px;\x20border-radius:\x203px;\x20font-size:\x2012px;\x20margin-bottom:\x203px;\x20border:\x201px\x20solid\x20#e0e0e0;\x20}\x0a\x20\x20\x20\x20.remove-equip-btn\x20{\x20cursor:\x20pointer;\x20color:\x20#dc3545;\x20font-weight:\x20bold;\x20padding:\x200\x205px;\x20font-size:\x2016px;\x20}\x0a\x20\x20\x20\x20.result-item\x20{\x0a\x20\x20\x20\x20padding:\x208px\x2012px;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#f0f0f0;\x0a\x20\x20\x20\x20transition:\x20background-color\x200.2s\x20ease;\x0a}\x0a.result-item:last-child\x20{\x0a\x20\x20\x20\x20border-bottom:\x20none;\x0a}\x0a.result-item:hover\x20{\x0a\x20\x20\x20\x20background-color:\x20#f5f5f5;\x0a}\x0a.result-tag\x20{\x0a\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20color:\x20#0056b3;\x0a\x20\x20\x20\x20margin-right:\x208px;\x0a}\x0a.highlight\x20{\x0a\x20\x20\x20\x20font-weight:\x20bold;\x0a}\x0a/*\x20---\x20ESTILOS\x20PARA\x20A\x20LISTA\x20DE\x20EQUIPAMENTOS\x20SELECIONADOS\x20---\x20*/\x0a.selected-equip-list\x20{\x0a\x20\x20\x20\x20max-height:\x20120px;\x20/*\x20Um\x20pouco\x20mais\x20de\x20altura\x20*/\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#dee2e6;\x20/*\x20Borda\x20mais\x20suave\x20*/\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20padding:\x206px;\x20/*\x20Espaçamento\x20interno\x20*/\x0a\x20\x20\x20\x20transition:\x20box-shadow\x200.2s\x20ease;\x0a}\x0a.selected-equip-list:focus-within\x20{\x0a\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200\x202px\x20rgba(51,\x20102,\x20255,\x200.2);\x20/*\x20Efeito\x20de\x20foco\x20*/\x0a}\x0a.selected-equip-list\x20li\x20{\x0a\x20\x20\x20\x20background-color:\x20#fff;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#e9ecef;\x0a\x20\x20\x20\x20padding:\x206px\x2010px;\x0a\x20\x20\x20\x20margin-bottom:\x202px;\x0a\x20\x20\x20\x20transition:\x20border-color\x200.2s\x20ease,\x20box-shadow\x200.15s\x20ease;\x0a}\x0a.selected-equip-list\x20li:hover\x20{\x0a\x20\x20\x20\x20border-color:\x20#007bff;\x20/*\x20Borda\x20azul\x20ao\x20passar\x20o\x20mouse\x20*/\x0a\x20\x20\x20\x20box-shadow:\x200\x201px\x203px\x20rgba(0,0,0,0.08);\x0a}\x0a.selected-equip-list\x20.item-tag\x20{\x0a\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20color:\x20#0056b3;\x0a\x20\x20\x20\x20margin-right:\x203px;\x0a}\x0a.remove-equip-btn\x20{\x0a\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20line-height:\x201;\x0a\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20color:\x20#adb5bd;\x20/*\x20Cor\x20cinza,\x20mais\x20discreta\x20*/\x0a\x20\x20\x20\x20transition:\x20color\x200.2s\x20ease,\x20transform\x200.2s\x20ease;\x0a}\x0a.remove-equip-btn:hover\x20{\x0a\x20\x20\x20\x20color:\x20#dc3545;\x20/*\x20Fica\x20vermelho\x20ao\x20passar\x20o\x20mouse\x20*/\x0a\x20\x20\x20\x20transform:\x20scale(1.2);\x20/*\x20Aumenta\x20um\x20pouco\x20de\x20tamanho\x20*/\x0a}\x0a.empty-list-message\x20{\x0a\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20color:\x20#6c757d;\x0a\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20padding:\x202px\x200;\x0a}\x0a#btn-os-marine\x20{\x0a\x20\x20\x20\x20background-color:\x20#005A9C;\x20/*\x20Azul\x20marinho\x20*/\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20padding:\x204px\x204px;\x0a\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20transition:\x20transform\x200.15s\x20ease,\x20filter\x200.15s\x20ease;\x0a}\x0a#btn-os-marine:hover\x20{\x0a\x20\x20\x20\x20filter:\x20brightness(115%);\x0a\x20\x20\x20\x20transform:\x20translateY(-1px);\x0a}\x0a\x20\x20\x20\x20', '2985', 'key__empresas__id', '&n1=200&n2=202&in=30&seccion=titan_trabajos_ordenes&subseccion=cerrar&op=m&id_reg=', 'Equipamento', 'toString', 'split', '0\x201px\x202px\x20rgba(0,0,0,0.07)', 'Por\x20favor,\x20selecione\x20uma\x20\x22Calificación\x20para\x20fechamento\x22.', '\x20ordens\x20removida.\x20', 'LISTA\x20DE\x20ORDENS\x20DE\x20SERVIÇO', ').\x20Verifique\x20se\x20a\x20OS\x20tem\x20mão\x20de\x20obra.', 'fecha_desde', '3px', 'Chegou\x20o\x20embaixador\x20da\x20Danthamerica!\x20Bem-vindo!', 'Setembro', 'Separador\x20Agua/Aceite', 'not-allowed', '#aa0000', 'Torre\x20de\x20Lavado\x20de\x20Gases', 'span', 'Computador\x20de\x20Flujo', 'getDate', '0\x200\x200\x200.2rem\x20rgba(0,123,255,.25)', '\x20ordens\x20em\x20paralelo...', 'Sinalização', 'prog', 'getElementById', 'especialidades', 'Outubro', 'Civil', 'from', 'O\x20campo\x20\x22Descrição\x20do\x20Pedido\x22\x20é\x20obrigatório.', 'lastElementChild', 'width:\x2095%;\x20margin-bottom:\x2010px;\x20padding:\x206px;\x20border-radius:\x205px;\x20border:\x201px\x20solid\x20#ccc;', 'Bueno', 'Sua\x20senha\x20aqui...', 'desactivar', 'dispatchEvent', 'Marine', '\x20ordens\x20em\x20fila...', '&seccion=titan_trabajos_ordenes&op=gen&id_reg=', 'Sistema\x20de\x20Protección\x20Catódica\x20(PCAT)', '147', '_hh_rrhh', 'innerHTML', 'Servidor\x20rejeitou\x20a\x20ativação\x20(status\x20', '\x20novas\x20ordens\x20adicionadas!\x20Total\x20na\x20lista:\x20', 'ativadas', 'solicitada', ']\x20já\x20está\x20na\x20lista.', 'placeholder', '0px\x200', '#ccc', 'titanflow-prog-plan-busca', '&action=recurso_agregar', '209', 'Esperando\x20engenharia', 'onclick', 'Rotante', 'Limpeza', 'seccion', 'active', 'change', 'numeroOT', './admin.php?SESID=', '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'Otros', 'Ir\x20para\x20a\x20aba\x20\x22Execução\x22', 'join', 'Chegou\x20o\x20homem\x20com\x20um\x20plano\x20pra\x20tudo,\x20até\x20pros\x20treinos!\x20Bem-vindo,\x20barrigudo!', 'Calificación\x20para\x20fechamento:', 'equipo_nombre', 'application/x-www-form-urlencoded', 'Pintor\x20Industrial', '#e9ecef', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-titulo-secao\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Dados\x20Gerais</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22titanflow-limpar-plano-btn\x22\x20title=\x22Limpar\x20todos\x20os\x20campos\x22>🧹\x20Limpar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><label\x20for=\x22titanflow-tag-numero\x22>ID\x20do\x20Plano\x20(apenas\x20o\x20número)</label><input\x20type=\x22text\x22\x20id=\x22titanflow-tag-numero\x22\x20placeholder=\x22Ex:\x20123\x22\x20maxlength=\x223\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><label\x20for=\x22titanflow-nombre\x22>Nome\x20do\x20Plano:</label><input\x20type=\x22text\x22\x20id=\x22titanflow-nombre\x22\x20placeholder=\x22Nome\x20descritivo\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><label\x20for=\x22titanflow-key__trabajos_tipos__id\x22>Tipo\x20de\x20Trabalho:</label></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><label\x20for=\x22titanflow-key__talleres__id\x22>Oficina\x20(Taller):</label></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-titulo-secao\x22>Hierarquia\x20do\x20Equipamento</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><label\x20for=\x22titanflow-dummy_cat\x22>Categoria:</label></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><label\x20for=\x22titanflow-key__equipos_clases__id\x22>Classe:</label></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><label\x20for=\x22titanflow-key__planes_de_mantenimiento_equipos_condiciones__id\x22>Condição:</label></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><label\x20for=\x22titanflow-key__empresas__id\x22>Contratista:</label></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-titulo-secao\x22>Recursos\x20e\x20Especialidades</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22titanflow-especialidades-container\x22\x20class=\x22titanflow-full-width\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'now', '10px\x205px', 'head', 'emissao-estado-plan', '0\x200\x2010px\x20rgba(0,0,0,0.2)', '\x20--</option>', 'Dispositivo\x20Sensor\x20de\x20Densidad', '180', 'metaKey', 'Erro\x20na\x20programação\x20do\x20equipamento\x20', '212', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22modal-section-title\x22>Como\x20Usar\x20o\x20Painel\x20Principal\x20📋</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>O\x20painel\x20flutuante\x20é\x20seu\x20centro\x20de\x20comando.\x20Pressione\x20<b>Z</b>\x20para\x20ocultá-lo\x20ou\x20mostrá-lo.\x20Use\x20as\x20abas\x20para\x20realizar\x20ações\x20em\x20massa\x20nas\x20ordens\x20listadas\x20na\x20<b>Aba\x201:\x20Seleção</b>.</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5>Aba\x201:\x20Seleção\x20(O\x20Coração\x20do\x20Script)</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Liste\x20as\x20OSs\x20na\x20caixa\x20de\x20texto\x20ou\x20use\x20<b>\x22Capturar\x20Ordens\x20Visíveis\x22</b>.\x20Depois,\x20use\x20as\x20ações\x20em\x20massa:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22tutorial-steps\x22\x20style=\x22padding-left:\x2025px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><b>Definir\x20Mão\x20de\x20Obra:</b>\x20Adiciona\x20os\x20técnicos\x20selecionados\x20a\x20todas\x20as\x20OSs.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><b>Remover\x20Mão\x20de\x20Obra:</b>\x20Remove\x20todos\x20os\x20técnicos\x20de\x20todas\x20as\x20OSs.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><b>Ativar\x20em\x20Massa:</b>\x20Ativa\x20todas\x20as\x20ordens\x20que\x20já\x20possuem\x20mão\x20de\x20obra.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5>Aba\x202:\x20Reprogramação</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Mude\x20a\x20data\x20e/ou\x20a\x20descrição\x20de\x20todas\x20as\x20ordens\x20da\x20sua\x20lista\x20de\x20uma\x20só\x20vez.</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5>Aba\x203:\x20Execução\x20e\x20Fechamento</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Preencha\x20os\x20campos\x20(Problema,\x20Causa,\x20etc.)\x20uma\x20vez\x20e\x20clique\x20em\x20<b>\x22Executar\x20em\x20Massa\x22</b>.\x20Para\x20finalizar,\x20escolha\x20uma\x20<b>Calificación</b>\x20e\x20clique\x20em\x20<b>\x22Fechar\x20em\x20Massa\x22</b>.</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5>Aba\x204:\x20Pedidos</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Crie\x20novos\x20Pedidos\x20de\x20Trabalho\x20rapidamente\x20para\x20um\x20ou\x20mais\x20equipamentos\x20da\x20lista.</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5>Painel\x20de\x20Planejamento</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Nas\x20telas\x20de\x20\x22Planificação\x22,\x20um\x20painel\x20diferente\x20aparece\x20para\x20criar\x20e\x20programar\x20Planos\x20de\x20Manutenção\x20de\x20forma\x20massiva.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'Falha\x20ao\x20carregar\x20equipamentos.', 'Timeout:\x20A\x20página\x20não\x20mudou\x20após\x20o\x20clique\x20em\x20Salvar.', 'clientY', 'SESID\x20não\x20encontrado.', '171', '25px', 'painel-login-titan', '\x20ordens', 'titanflow-add-btn', 'INPUT', 'Falha\x20ao\x20criar\x20pedido\x20para\x20equipamento\x20ID\x20', 'padStart', 'buscar_datos_lookup', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22remove-equip-btn-prog\x22\x20data-id=\x22', 'Timeout:\x20A\x20validação\x20do\x20equipamento\x20demorou\x20demais.', '1px\x20solid\x20#dee2e6', 'reason', 'foguete-animado', 'marginBottom', '149', '\x20de\x20', 'Equipamentos\x20Carregados', 'Classe\x20de\x20Equipamento', 'Ocorreu\x20um\x20erro\x20ao\x20buscar\x20as\x20ordens.\x20Verifique\x20o\x20console\x20(F12).', 'ctrlKey', 'titanflow_pedido_descricao_salva', 'Capturar\x20Ordens\x20Visíveis', 'Navega\x20diretamente\x20para\x20a\x20terceira\x20aba.', 'div', 'space-between', 'select[name=\x22estado_id\x22]', 'Ocorreram\x20erros\x20na\x20validação\x20do\x20script:\x0a\x0a', 'onmouseout', '384190pqZybs', 'src', '#999999', 'search', 'botao-nova-interface', 'option', 'btn-principal-acao', 'Erro\x20ao\x20gerar\x20PDF:', 'Saudações,\x20', 'acao', '\x20já\x20está\x20na\x20lista.', '182', '\x20ordens\x20fechadas.\x20', 'pedidos', '2986', 'Equipamento\x20não\x20especificado', 'HVAC', '192', '2px\x20solid\x20#e9ecef', 'progresso-log', 'Falha\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe\x20de\x20cancelamento.', 'config_tecnicos', 'default', 'horasPadrao', 'O\x20script\x20não\x20pode\x20estar\x20vazio.', 'Acessa\x20a\x20aba\x20para\x20preencher\x20dados\x20de\x20execução\x20e\x20fechamento.', 'Operação\x20cancelada\x20pelo\x20usuário.', 'get', 'ordens-input', 'Nenhuma\x20ordem\x20selecionada\x20para\x20ativar!', 'borderRadius', 'toLowerCase', 'insertBefore', 'Fechar', '--\x20Nenhum\x20--', '40px', '2962', 'Que\x20bom\x20te\x20ver,\x20', 'assign', 'Causa:', 'readOnly', 'titanflow-tag-numero', '🧹\x20Seleção\x20de\x20ordens\x20limpa\x20com\x20sucesso!', 'btn-os-marine', 'Falha\x20ao\x20injetar\x20script\x20de\x20otimização\x20de\x20clique:', 'classes', 'Nenhuma\x20programação\x20selecionada!', 'requerenteId', 'Erro:\x20Parâmetros\x20de\x20navegação\x20não\x20encontrados.', '\x20ordens\x20emitidas.\x20', 'opacity', '&show=mr&seccion=titan_equipos_arbol&id_reg=0', 'Instrumentista', 'Mecânica', '👤\x20Perfil:\x20', 'hidden', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-hotkey-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-hotkey-key\x22>', '{totalPages}', 'Redesenho', 'iframe', 'Solda', 'Manutenção\x20Preditiva', '.titanflow-modal-close', '[for=\x22titanflow-dummy_cat\x22]', 'parseFromString', 'Seleção\x20de\x20Pessoas', '133', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20titanflow-fade-in\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x200;\x20transform:\x20translate(-50%,\x20-50%)\x20scale(0.95);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x201;\x20transform:\x20translate(-50%,\x20-50%)\x20scale(1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-overlay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x20top:\x200;\x20left:\x200;\x20width:\x20100%;\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.7);\x20z-index:\x2010003;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x20justify-content:\x20center;\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20Helvetica,\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x2010px\x2030px\x20rgba(0,0,0,0.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2090%;\x20max-width:\x20420px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x20/*\x20Usamos\x20fixed\x20para\x20centralização\x20precisa\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20titanflow-fade-in\x200.3s\x20ease-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x20/*\x20Garante\x20que\x20os\x20cantos\x20arredondados\x20sejam\x20aplicados\x20em\x20tudo\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.popup-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f7f9fc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#e9ecef;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.popup-header\x20.icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#007bff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.popup-header\x20h3\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x20font-size:\x2024px;\x20color:\x20#212529;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.popup-body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2025px\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.popup-body\x20p\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x200\x2020px\x200;\x20font-size:\x2016px;\x20color:\x20#495057;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.popup-body\x20.version-info\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#e9ecef;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#495057;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.popup-body\x20.version-info\x20b\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.popup-footer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f7f9fc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x201px\x20solid\x20#e9ecef;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.popup-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-grow:\x201;\x20/*\x20Faz\x20os\x20botões\x20ocuparem\x20o\x20espaço\x20igualmente\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x20/*\x20Para\x20centralizar\x20o\x20texto\x20perfeitamente\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.update-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#28a745;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x205px\x20rgba(40,\x20167,\x2069,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.update-button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-2px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2010px\x20rgba(40,\x20167,\x2069,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.close-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#6c757d;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x205px\x20rgba(108,\x20117,\x20125,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.titanflow-update-popup\x20.close-button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-2px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2010px\x20rgba(108,\x20117,\x20125,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'focus', 'createElement', 'padding', 'Acessa\x20rapidamente\x20a\x20aba\x20principal\x20de\x20seleção\x20de\x20ordens.', 'trabajo_tipo_id', 'total', 'quantidadePorEquipamento', '🚀\x20Iniciando\x20cancelamento\x20para\x20', '544orOQzs', 'Recomendação:', 'esp-id-1', 'blur', 'insertAdjacentHTML', '#495057', 'Utf8', 'key__planes_de_mantenimiento__id_result', 'contador-ordens', 'key', 'recomendacao', 'floor', 'A\x20Nova\x20Data\x20e\x20a\x20Causa\x20são\x20obrigatórias\x20para\x20reprogramar.', '#titanflow-criar-varios-qtd', 'remove', 'materiales', '%;\x20background-color:\x20', 'resultados-busca-equipamentos', 'Novembro', '#titanflow-tag-numero', 'selectionStart', 'body', 'span.nota11', 'key__equipos_clases__id', 'flex-end', 'jspdf', 'nome_computador', 'codigoFalha', 'Excelente', '2699', 'titanflow_toast', 'Iniciando\x20emissão\x20para\x20OT\x20', 'check-criar-varios', 'Nenhuma\x20programação\x20selecionada.', '👁️\x20Mostrar\x20Painel', 'creador_key__operadores__id', 'border-box', 'filtro-data-desde', 'removeAttribute', '</b>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22popup-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22popup-button\x20close-button\x22>Lembrar\x20Depois</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22', 'textarea', 'classe', 'OT.Nº', 'titan_trabajos_ordenes', 'Ruan\x20Santos', '7px\x2013px', 'titanflow_panel_top', 'mouseleave', 'Submissão\x20do\x20formulário\x20concluída\x20com\x20sucesso!', '&seccion=titan_trabajos_ordenes&subseccion=cancelar&op=m&id_reg=', '#3366ff', '[TitanSystem\x20Update]\x20Resposta\x20recebida\x20do\x20GitHub.', '&seccion=titan_trabajos_ordenes&show=accion&action=emitir_pt&id_reg=', 'flex', '218', '?.?', 'disabled', 'nome', 'Nenhuma\x20ordem\x20selecionada\x20para\x20executar!', 'Hora\x20de\x20otimizar\x20os\x20processos!\x20⚙️', 'Olá,\x20', 'expanded', 'Reprogramada\x20para\x20a\x20data\x20de\x20execução!', '[for=\x22titanflow-key__empresas__id\x22]', 'Panel\x20de\x20Control', '1px\x20solid\x20#ced4da', 'empresaId', '#0072c6', 'btn-desbloquear-codigo', '0\x204px\x2012px\x20rgba(0,0,0,0.15)', 'test', 'titanflow_planejamento_visivel', 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease', '!\x20Que\x20seu\x20dia\x20seja\x20produtivo.\x20👋', '❌\x20Erro\x20GERAL\x20na\x20inicialização\x20do\x20TitanSystem:', 'readonly', 'Manutenção\x20de\x20Emergência', 'Muy\x20bueno', 'number', ':</b>\x20', 'center', '\x20foi\x20modificado.', '.close-button', 'info', '\x20à\x20lista', 'transition', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20#painel-progresso-massa\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20500px;\x20background-color:\x20#fff;\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x205px\x2015px\x20rgba(0,0,0,0.3);\x20z-index:\x2010003;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x20display:\x20none;\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20Helvetica,\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#progresso-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x20background-color:\x20#f7f7f7;\x20border-bottom:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top-left-radius:\x208px;\x20border-top-right-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#progresso-header\x20h3\x20{\x20margin:\x200;\x20font-size:\x2018px;\x20color:\x20#333;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#progresso-body\x20{\x20padding:\x2020px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#progresso-status-texto\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x20color:\x20#555;\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#progresso-barra-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x20background-color:\x20#e9ecef;\x20border-radius:\x20.25rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#progresso-barra-valor\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x20width:\x200%;\x20background-color:\x20#28a745;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x200.3s\x20ease-in-out;\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x20font-weight:\x20bold;\x20line-height:\x2020px;\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#progresso-log\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2015px;\x20height:\x20100px;\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x20padding:\x2010px;\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f8f9fa;\x20list-style:\x20none;\x20margin-left:\x200;\x20padding-left:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#progresso-log\x20li.error\x20{\x20color:\x20#dc3545;\x20font-weight:\x20bold;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#progresso-footer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x20border-top:\x201px\x20solid\x20#ddd;\x20text-align:\x20right;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#progresso-botao-fechar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2016px;\x20background-color:\x20#6c757d;\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', 'cover,\x20250px,\x2070px', '&n1=', 'condicao', 'select[name=\x22taller_id\x22]', 'Digite\x20a\x20causa\x20do\x20cancelamento\x20que\x20será\x20aplicada\x20a\x20todas\x20as\x20', 'Calle', 'Vai\x20direto\x20para\x20a\x20aba\x20de\x20reprogramar\x20datas\x20e\x20descrições.', '.filtro-status-btn.selected', 'childNodes', 'Falha\x20ao\x20sincronizar\x20lista\x20de\x20planos.', '[TitanSystem]\x20Aviso:\x20Falha\x20ao\x20sincronizar\x20a\x20lista\x20de\x20equipamentos.', '[animarBotaoPlanejamento]\x20Iniciando\x20animação...', '⚠️\x20Falha\x20na\x20re-autenticação\x20silenciosa.\x20Solicitando\x20senha\x20novamente.', 'Detector\x20de\x20Fuego', 'div-tecnico-', 'Qtd', '.remove-equip-btn', 'step', 'Trabalho\x20[tipo]', 'input-nova-data', 'titanflow-key__talleres__id', 'titanflow_dashboard_filters', 'Senha\x20obrigatória!\x20Abortando.', 'Área\x20Endicada', 'enc', '#333', '[TitanSystem\x20Update]\x20Nova\x20versão\x20detectada!\x20Exibindo\x20popup.', 'Maio', 'Navega\x20diretamente\x20para\x20a\x20primeira\x20aba.', '<span\x20class=\x22btn-text\x22>👷\x20Definir\x20Mão\x20de\x20Obra</span><span\x20class=\x22btn-progress-fill\x22></span>', '\x20adicionada!', 'Erro:\x20O\x20campo\x20\x22Descrição\x20do\x20Pedido\x22\x20é\x20obrigatório.', 'select_calificacion', 'TOIL-MNT-', '120vh', '<span\x20class=\x22check-icon\x22>✔\x20</span>', 'Confirmar', 'size', 'Tipo\x20de\x20programação\x20não\x20selecionado.', '300px', '&bAceptar=Aplicar+filtro', 'tipo_fecha1', 'É\x20o\x20suco\x20da\x20sabedoria\x20ou\x20da\x20academia?\x20Na\x20dúvida,\x20é\x20o\x20Dlleandro!\x20Bem-vindo!', 'equipamentoNome', '0\x200\x200\x203px\x20rgba(51,\x20102,\x20255,\x200.2)', 'dataset', 'Otamerica', 'botao-fechamento-massa', 'a[href*=\x22Javascript:var\x20campoPadre\x22]', 'scrollHeight', 'forEach', 'fulfilled', '159', 'Fuente\x20Eléctrica\x20de\x20Alimentación\x20(UPS)', 'mouseenter', 'ERRO:\x20SESID\x20não\x20encontrado.', 'titanflow-btn-reprogramacao', 'left', 'Solicitada', '<span\x20class=\x22btn-text\x22>⚙️\x20Adicionar\x20Programação</span><span\x20class=\x22btn-progress-fill\x22></span>', 'Controlador\x20Lógico\x20Programable\x20(PLC)', 'opacity\x200.3s\x20ease,\x20transform\x200.3s\x20ease', '214', 'landscape', 'Selecione\x20a\x20Condição', '18px', 'Último\x20Taller\x20salvo:', 'titanflow-esp-hh-', 'grupos-container', 'titanflow-botoes-acao', 'index', 'A\x20lenda\x20do\x20SAP\x20e\x20agora\x20da\x20academia!\x20Desse\x20jeito\x20não\x20sobra\x20pra\x20ninguém!\x20Bem-vindo,\x20Dlleandro!', 'min', 'Bem-vindo,\x20Luis!\x20Só\x20não\x20esquece\x20de\x20planejar\x20o\x20\x22dia\x20do\x20lixo\x22\x20na\x20dieta,\x20hein\x20barrigudo!', 'Salva\x20as\x20ordens\x20digitadas\x20na\x20caixa\x20de\x20texto.', 'titanflow-btn-execucao', 'Carregando...', 'value', 'pedido-tipo-trabalho', 'Falha\x20ao\x20fechar\x20ordem\x20', 'btn-limpar-config-prog', '0\x200\x208px\x200', 'undefined', 'normal', 'Algumas\x20ordens\x20falharam.\x20A\x20página\x20não\x20será\x20recarregada.', 'config-acoes-container', 'Não\x20foi\x20possível\x20acessar\x20o\x20conteúdo\x20do\x20iframe.', 'E\x20aí,\x20', '</select></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label>Descrição\x20do\x20Pedido:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22pedido-descricao\x22\x20style=\x22width:100%;\x20height:45px;\x22></textarea>\x0a\x0a<div\x20class=\x22action-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn-principal-acao\x22\x20class=\x22action-btn\x20create-btn\x22>✅\x20Criar\x20Pedido</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22input-acao-valor\x22\x20value=\x221\x22\x20min=\x221\x22\x20title=\x22Quantidade\x20ou\x20Nº\x20da\x20OT\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22multi-control-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22control-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22check-criar-varios\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22check-criar-varios\x22>Vários\x20Pedidos</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22control-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22check-ordem-filha\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22check-ordem-filha\x22>Ordem\x20filha</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20id=\x22input-quantidade-pedidos\x22\x20value=\x221\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20class=\x22section-divider\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label>Estado\x20da\x20Planificação:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22emissao-estado-plan\x22\x20class=\x22full-width-input\x22>', '0\x202px\x205px\x20rgba(0,0,0,0.2)', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chart-bar\x22\x20style=\x22width:\x20', 'mensual2', '7px', '0\x204px\x208px\x20rgba(0,0,0,0.25)'];
  _0x46f7 = function () {
    return _0x6d5507;
  };
  return _0x46f7();
}

function _0x3bcd(_0x98d76a, _0x256af0) {
  const _0x46f7dc = _0x46f7();
  return _0x3bcd = function (_0x3bcd02, _0x3e1727) {
    _0x3bcd02 = _0x3bcd02 - 0xf3;
    let _0x2558ac = _0x46f7dc[_0x3bcd02];
    return _0x2558ac;
  }, _0x3bcd(_0x98d76a, _0x256af0);
}(function (_0x595250, _0x26c465) {
  const _0x262096 = _0x3bcd
    , _0x1bc568 = _0x595250();
  while (!![]) {
    try {
      const _0x26393f = parseInt(_0x262096(0x590)) / 0x1 * (-parseInt(_0x262096(0x299)) / 0x2) + parseInt(_0x262096(0x2bc)) / 0x3 * (parseInt(_0x262096(0x4b0)) / 0x4) + -parseInt(_0x262096(0x624)) / 0x5 + parseInt(_0x262096(0x159)) / 0x6 + parseInt(_0x262096(0x1cd)) / 0x7 + -parseInt(_0x262096(0x5a3)) / 0x8 * (parseInt(_0x262096(0x216)) / 0x9) + parseInt(_0x262096(0x464)) / 0xa * (-parseInt(_0x262096(0x14b)) / 0xb);
      if (_0x26393f === _0x26c465) break;
      else _0x1bc568['push'](_0x1bc568['shift']());
    } catch (_0x5c6076) {
      _0x1bc568['push'](_0x1bc568['shift']());
    }
  }
}(_0x46f7, 0xb2bba), (async function () {
  'use strict';
  const _0x2255fb = _0x3bcd;
  history[_0x2255fb(0x1ae)](null, '', window[_0x2255fb(0x298)]['href']);

  function _0x8dd5d2() {
    const _0x176da0 = _0x2255fb;
    try {
      const _0x3c38d5 = document[_0x176da0(0x4a9)](_0x176da0(0x5ed));
      _0x3c38d5[_0x176da0(0x6a2)] = _0x176da0(0x2a0), (document[_0x176da0(0x439)] || document[_0x176da0(0x228)])['appendChild'](_0x3c38d5), _0x3c38d5[_0x176da0(0x4be)]();
    } catch (_0x3ea9fb) {
      console[_0x176da0(0x5fb)](_0x176da0(0x603), _0x3ea9fb);
    }
  }
  _0x8dd5d2();

  function _0x2786ff(_0x42c8d7, _0x5888b3 = _0x2255fb(0x3a1), _0x43f732 = 0xfa0) {
    const _0x2e1b31 = _0x2255fb
      , _0x4dcd44 = document[_0x2e1b31(0x4a9)](_0x2e1b31(0x45f));
    _0x4dcd44[_0x2e1b31(0x417)] = _0x42c8d7;
    const _0x45c366 = {
        'success': _0x2e1b31(0x155)
        , 'error': _0x2e1b31(0x1bc)
        , 'info': _0x2e1b31(0x4e2)
        , 'warning': _0x2e1b31(0x61f)
      }
      , _0x5d52c6 = _0x45c366[_0x5888b3] || _0x45c366[_0x2e1b31(0x503)]
      , _0x8f1f8e = _0x5888b3 === 'warning' ? 'black' : _0x2e1b31(0x56f);
    _0x4dcd44['style'][_0x2e1b31(0x3cc)] = _0x2e1b31(0x169) + _0x5d52c6 + _0x2e1b31(0x17d) + _0x8f1f8e + _0x2e1b31(0x15f), document[_0x2e1b31(0x4c5)][_0x2e1b31(0x5a0)](_0x4dcd44), setTimeout(() => {
      const _0x7d06a9 = _0x2e1b31;
      _0x4dcd44[_0x7d06a9(0x39e)][_0x7d06a9(0x496)] = '1', _0x4dcd44['style'][_0x7d06a9(0x102)] = _0x7d06a9(0x61b);
    }, 0x64), setTimeout(() => {
      const _0x40bca7 = _0x2e1b31;
      _0x4dcd44['style'][_0x40bca7(0x496)] = '0', _0x4dcd44[_0x40bca7(0x39e)][_0x40bca7(0x102)] = _0x40bca7(0x5f9), setTimeout(() => document[_0x40bca7(0x4c5)][_0x40bca7(0x1d5)](_0x4dcd44), 0x1f4);
    }, _0x43f732);
  }

  function _0x1241ed(_0x13c557, _0xbb8420 = 0x1d4c0) {
    const _0x286f44 = _0x2255fb
      , _0x4ddd2a = _0x286f44(0x1d2);
    let _0x3d3e65 = document['getElementById'](_0x4ddd2a);
    !_0x3d3e65 && (_0x3d3e65 = document[_0x286f44(0x4a9)](_0x286f44(0x45f)), _0x3d3e65['id'] = _0x4ddd2a, _0x3d3e65[_0x286f44(0x39e)][_0x286f44(0x3cc)] = _0x286f44(0x1b9), document[_0x286f44(0x4c5)]['appendChild'](_0x3d3e65), setTimeout(() => {
      const _0x59d1f5 = _0x286f44;
      _0x3d3e65[_0x59d1f5(0x39e)][_0x59d1f5(0x496)] = '1', _0x3d3e65[_0x59d1f5(0x39e)]['transform'] = _0x59d1f5(0x61b);
    }, 0x64)), _0x3d3e65[_0x286f44(0x6a2)] = _0x13c557, window['titanFlowProgressToastTimer'] && clearTimeout(window[_0x286f44(0x197)]), window[_0x286f44(0x197)] = setTimeout(() => {
      const _0x231681 = _0x286f44;
      document[_0x231681(0x4c5)]['contains'](_0x3d3e65) && (_0x3d3e65[_0x231681(0x39e)][_0x231681(0x496)] = '0', _0x3d3e65[_0x231681(0x39e)][_0x231681(0x102)] = _0x231681(0x5f9), setTimeout(() => document[_0x231681(0x4c5)][_0x231681(0x1d5)](_0x3d3e65), 0x1f4));
    }, _0xbb8420);
  }

  function _0x1c9560(_0x29cd80) {
    return new Promise(_0x36008d => {
      const _0x34bb01 = _0x3bcd
        , _0x80e882 = (_0x3ae093, _0x5005f5) => {
          const _0x53d97a = _0x3bcd;
          Object[_0x53d97a(0x48a)](_0x3ae093[_0x53d97a(0x39e)], {
            'padding': _0x53d97a(0x3e9)
            , 'border': _0x53d97a(0x24f)
            , 'borderRadius': '5px'
            , 'backgroundColor': _0x5005f5
            , 'color': _0x53d97a(0x56f)
            , 'fontWeight': _0x53d97a(0x39b)
            , 'cursor': _0x53d97a(0x226)
            , 'boxShadow': _0x53d97a(0x2c9)
            , 'transition': _0x53d97a(0x4f8)
          }), _0x3ae093[_0x53d97a(0x5fc)]('mouseenter', () => {
            const _0x33f5af = _0x53d97a;
            _0x3ae093[_0x33f5af(0x39e)]['filter'] = _0x33f5af(0x319), _0x3ae093['style'][_0x33f5af(0x102)] = _0x33f5af(0x5d6), _0x3ae093[_0x33f5af(0x39e)]['boxShadow'] = _0x33f5af(0x687);
          }), _0x3ae093[_0x53d97a(0x5fc)](_0x53d97a(0x4df), () => {
            const _0x2a9bec = _0x53d97a;
            _0x3ae093[_0x2a9bec(0x39e)]['filter'] = _0x2a9bec(0x161), _0x3ae093[_0x2a9bec(0x39e)][_0x2a9bec(0x102)] = _0x2a9bec(0x37b), _0x3ae093['style'][_0x2a9bec(0x568)] = _0x2a9bec(0x2c9);
          }), _0x3ae093[_0x53d97a(0x5fc)](_0x53d97a(0x109), () => {
            const _0x106d75 = _0x53d97a;
            _0x3ae093['style'][_0x106d75(0x102)] = 'translateY(1px)', _0x3ae093[_0x106d75(0x39e)][_0x106d75(0x568)] = _0x106d75(0x24f);
          }), _0x3ae093['addEventListener'](_0x53d97a(0x2f1), () => {
            const _0x32184e = _0x53d97a;
            _0x3ae093[_0x32184e(0x39e)][_0x32184e(0x102)] = 'translateY(-2px)';
          });
        }
        , _0x6ee27e = _0x492c2f => {
          const _0x37a627 = _0x3bcd;
          Object[_0x37a627(0x48a)](_0x492c2f[_0x37a627(0x39e)], {
            'width': _0x37a627(0x669)
            , 'padding': _0x37a627(0x63f)
            , 'boxSizing': _0x37a627(0x4d4)
            , 'border': '1px\x20solid\x20#ced4da'
            , 'borderRadius': _0x37a627(0x596)
            , 'boxShadow': _0x37a627(0x2b6)
            , 'transition': _0x37a627(0x1fa)
          }), _0x492c2f[_0x37a627(0x5fc)](_0x37a627(0x4a8), () => {
            const _0x19f65e = _0x37a627;
            _0x492c2f[_0x19f65e(0x39e)][_0x19f65e(0x217)] = _0x19f65e(0x65f), _0x492c2f[_0x19f65e(0x39e)]['boxShadow'] = _0x19f65e(0x401);
          }), _0x492c2f[_0x37a627(0x5fc)]('blur', () => {
            const _0x1a4ecd = _0x37a627;
            _0x492c2f[_0x1a4ecd(0x39e)]['borderColor'] = _0x1a4ecd(0x379), _0x492c2f['style'][_0x1a4ecd(0x568)] = _0x1a4ecd(0x2b6);
          });
        }
        , _0x4ed642 = document[_0x34bb01(0x4a9)](_0x34bb01(0x45f));
      _0x4ed642['id'] = _0x34bb01(0x449), Object[_0x34bb01(0x48a)](_0x4ed642[_0x34bb01(0x39e)], {
        'position': _0x34bb01(0x698)
        , 'top': '10px'
        , 'left': _0x34bb01(0x63f)
        , 'width': '280px'
        , 'backgroundColor': '#ffffff'
        , 'border': _0x34bb01(0x24f)
        , 'borderRadius': _0x34bb01(0x60c)
        , 'padding': _0x34bb01(0x57a)
        , 'zIndex': _0x34bb01(0x5f7)
        , 'boxShadow': _0x34bb01(0x1e9)
        , 'fontFamily': _0x34bb01(0x5ff)
        , 'opacity': '0'
        , 'transform': _0x34bb01(0x5c6)
        , 'transition': 'opacity\x200.3s\x20ease,\x20transform\x200.3s\x20ease'
      });
      const _0x494fba = document[_0x34bb01(0x4a9)]('h3');
      _0x494fba[_0x34bb01(0x6a2)] = _0x34bb01(0x5e7), Object['assign'](_0x494fba[_0x34bb01(0x39e)], {
        'color': '#333'
        , 'margin': _0x34bb01(0x558)
        , 'fontSize': _0x34bb01(0x548)
        , 'fontWeight': _0x34bb01(0x62c)
      }), _0x4ed642[_0x34bb01(0x5a0)](_0x494fba);
      const _0x2dd235 = document[_0x34bb01(0x4a9)]('div');
      _0x2dd235['textContent'] = _0x29cd80, Object[_0x34bb01(0x48a)](_0x2dd235[_0x34bb01(0x39e)], {
        'marginBottom': _0x34bb01(0x17e)
        , 'fontSize': _0x34bb01(0x2d6)
        , 'color': _0x34bb01(0x3ce)
        , 'lineHeight': _0x34bb01(0x248)
      }), _0x4ed642[_0x34bb01(0x5a0)](_0x2dd235);
      const _0x27d5b3 = document[_0x34bb01(0x4a9)]('input');
      _0x27d5b3['type'] = _0x34bb01(0x63e), _0x27d5b3[_0x34bb01(0x41d)] = _0x34bb01(0x40e), _0x6ee27e(_0x27d5b3), _0x4ed642['appendChild'](_0x27d5b3);
      const _0x4e418d = document[_0x34bb01(0x4a9)]('div');
      Object[_0x34bb01(0x48a)](_0x4e418d[_0x34bb01(0x39e)], {
        'display': _0x34bb01(0x4e5)
        , 'justifyContent': _0x34bb01(0x4c8)
        , 'gap': _0x34bb01(0x63f)
        , 'marginTop': _0x34bb01(0x57a)
      });
      const _0x34ab1f = document['createElement'](_0x34bb01(0x5e3));
      _0x34ab1f[_0x34bb01(0x6a2)] = _0x34bb01(0x485), _0x80e882(_0x34ab1f, _0x34bb01(0x3ce)), _0x34ab1f[_0x34bb01(0x424)] = () => {
        const _0x426d0a = _0x34bb01;
        document[_0x426d0a(0x4c5)]['removeChild'](_0x4ed642), _0x36008d(null);
      }, _0x4e418d[_0x34bb01(0x5a0)](_0x34ab1f);
      const _0x4b5399 = document[_0x34bb01(0x4a9)](_0x34bb01(0x5e3));
      _0x4b5399[_0x34bb01(0x6a2)] = _0x34bb01(0x668), _0x80e882(_0x4b5399, _0x34bb01(0x155)), _0x4b5399[_0x34bb01(0x424)] = () => {
        const _0x296197 = _0x34bb01
          , _0xf2f3b0 = _0x27d5b3[_0x296197(0x554)];
        document[_0x296197(0x4c5)][_0x296197(0x1d5)](_0x4ed642), _0x36008d(_0xf2f3b0);
      }, _0x4e418d[_0x34bb01(0x5a0)](_0x4b5399), _0x4ed642[_0x34bb01(0x5a0)](_0x4e418d), document['body'][_0x34bb01(0x5a0)](_0x4ed642), _0x27d5b3['focus'](), setTimeout(() => {
        const _0x35d543 = _0x34bb01;
        _0x4ed642[_0x35d543(0x39e)][_0x35d543(0x496)] = '1', _0x4ed642[_0x35d543(0x39e)][_0x35d543(0x102)] = _0x35d543(0x344);
      }, 0xa), _0x27d5b3['addEventListener'](_0x34bb01(0x636), _0x58cd44 => {
        const _0x5b7a85 = _0x34bb01;
        if (_0x58cd44['key'] === _0x5b7a85(0x34e)) _0x4b5399[_0x5b7a85(0x338)]();
        else {
          if (_0x58cd44[_0x5b7a85(0x4b9)] === 'Escape') _0x34ab1f['click']();
        }
      });
    });
  }

  function _0x15e7d4(_0x25681f, _0x2db7db, _0x1f77dc) {
    return new Promise(_0x17ae86 => {
      const _0x386946 = _0x3bcd
        , _0x553c62 = (_0x38e14a, _0x5e934c) => {
          const _0x47b19d = _0x3bcd;
          Object[_0x47b19d(0x48a)](_0x38e14a[_0x47b19d(0x39e)], {
            'padding': _0x47b19d(0x3e9)
            , 'border': _0x47b19d(0x24f)
            , 'borderRadius': '5px'
            , 'backgroundColor': _0x5e934c
            , 'color': _0x47b19d(0x56f)
            , 'fontWeight': 'bold'
            , 'cursor': _0x47b19d(0x226)
            , 'boxShadow': _0x47b19d(0x2c9)
            , 'transition': _0x47b19d(0x4f8)
          }), _0x38e14a[_0x47b19d(0x5fc)]('mouseenter', () => {
            const _0x30d681 = _0x47b19d;
            _0x38e14a['style']['filter'] = 'brightness(110%)', _0x38e14a[_0x30d681(0x39e)][_0x30d681(0x102)] = _0x30d681(0x5d6), _0x38e14a[_0x30d681(0x39e)]['boxShadow'] = _0x30d681(0x687);
          }), _0x38e14a['addEventListener']('mouseleave', () => {
            const _0x48a523 = _0x47b19d;
            _0x38e14a[_0x48a523(0x39e)][_0x48a523(0x5fd)] = 'brightness(100%)', _0x38e14a['style'][_0x48a523(0x102)] = _0x48a523(0x37b), _0x38e14a[_0x48a523(0x39e)][_0x48a523(0x568)] = _0x48a523(0x2c9);
          }), _0x38e14a['addEventListener']('mousedown', () => {
            const _0x1752ac = _0x47b19d;
            _0x38e14a[_0x1752ac(0x39e)][_0x1752ac(0x102)] = _0x1752ac(0x3c0), _0x38e14a[_0x1752ac(0x39e)][_0x1752ac(0x568)] = _0x1752ac(0x24f);
          }), _0x38e14a[_0x47b19d(0x5fc)](_0x47b19d(0x2f1), () => {
            const _0x2fec85 = _0x47b19d;
            _0x38e14a[_0x2fec85(0x39e)][_0x2fec85(0x102)] = _0x2fec85(0x5d6);
          });
        }
        , _0x1acf6d = _0xce7dd7 => {
          const _0x287287 = _0x3bcd;
          Object[_0x287287(0x48a)](_0xce7dd7[_0x287287(0x39e)], {
            'width': _0x287287(0x669)
            , 'padding': '10px'
            , 'boxSizing': _0x287287(0x4d4)
            , 'border': _0x287287(0x4f1)
            , 'borderRadius': _0x287287(0x596)
            , 'boxShadow': _0x287287(0x2b6)
            , 'transition': _0x287287(0x1fa)
            , 'resize': _0x287287(0x24e)
            , 'minHeight': _0x287287(0x392)
          }), _0xce7dd7[_0x287287(0x5fc)](_0x287287(0x4a8), () => {
            const _0x4a739f = _0x287287;
            _0xce7dd7[_0x4a739f(0x39e)][_0x4a739f(0x217)] = _0x4a739f(0x65f), _0xce7dd7['style']['boxShadow'] = _0x4a739f(0x401);
          }), _0xce7dd7[_0x287287(0x5fc)](_0x287287(0x4b3), () => {
            const _0x3f6f8e = _0x287287;
            _0xce7dd7[_0x3f6f8e(0x39e)][_0x3f6f8e(0x217)] = '#ced4da', _0xce7dd7[_0x3f6f8e(0x39e)][_0x3f6f8e(0x568)] = _0x3f6f8e(0x2b6);
          });
        }
        , _0x571aca = document[_0x386946(0x4a9)]('div');
      Object[_0x386946(0x48a)](_0x571aca[_0x386946(0x39e)], {
        'position': _0x386946(0x698)
        , 'top': _0x386946(0x29d)
        , 'left': '50%'
        , 'transform': 'translate(-50%,\x20-50%)'
        , 'width': _0x386946(0x594)
        , 'backgroundColor': _0x386946(0x31a)
        , 'border': _0x386946(0x24f)
        , 'borderRadius': '8px'
        , 'padding': _0x386946(0x57a)
        , 'zIndex': _0x386946(0x19a)
        , 'boxShadow': _0x386946(0x1e9)
        , 'fontFamily': _0x386946(0x5ff)
        , 'opacity': '0'
        , 'transform': 'translate(-50%,\x20-45%)'
        , 'transition': _0x386946(0x544)
      });
      const _0x48c9cc = document[_0x386946(0x4a9)]('h3');
      _0x48c9cc[_0x386946(0x6a2)] = _0x25681f, Object[_0x386946(0x48a)](_0x48c9cc[_0x386946(0x39e)], {
        'color': '#333'
        , 'margin': '0\x200\x208px\x200'
        , 'fontSize': _0x386946(0x548)
        , 'fontWeight': _0x386946(0x62c)
      }), _0x571aca[_0x386946(0x5a0)](_0x48c9cc);
      const _0x435066 = document[_0x386946(0x4a9)](_0x386946(0x45f));
      _0x435066[_0x386946(0x6a2)] = _0x2db7db, Object[_0x386946(0x48a)](_0x435066[_0x386946(0x39e)], {
        'marginBottom': _0x386946(0x17e)
        , 'fontSize': _0x386946(0x2d6)
        , 'color': _0x386946(0x3ce)
        , 'lineHeight': _0x386946(0x248)
      }), _0x571aca[_0x386946(0x5a0)](_0x435066);
      const _0x19a99d = document[_0x386946(0x4a9)]('textarea');
      _0x19a99d[_0x386946(0x41d)] = _0x1f77dc, _0x1acf6d(_0x19a99d), _0x571aca[_0x386946(0x5a0)](_0x19a99d);
      const _0xbfcf98 = document[_0x386946(0x4a9)](_0x386946(0x45f));
      Object[_0x386946(0x48a)](_0xbfcf98['style'], {
        'display': 'flex'
        , 'justifyContent': 'flex-end'
        , 'gap': _0x386946(0x63f)
        , 'marginTop': '20px'
      });
      const _0x5c15fa = document[_0x386946(0x4a9)](_0x386946(0x5e3));
      _0x5c15fa[_0x386946(0x6a2)] = 'Cancelar', _0x553c62(_0x5c15fa, '#6c757d'), _0x5c15fa[_0x386946(0x424)] = () => {
        const _0x31f37e = _0x386946;
        document[_0x31f37e(0x4c5)]['removeChild'](_0x571aca), _0x17ae86(null);
      }, _0xbfcf98[_0x386946(0x5a0)](_0x5c15fa);
      const _0x540062 = document[_0x386946(0x4a9)](_0x386946(0x5e3));
      _0x540062[_0x386946(0x6a2)] = _0x386946(0x52b), _0x553c62(_0x540062, _0x386946(0x1bc)), _0x540062['onclick'] = () => {
        const _0x1b5641 = _0x386946
          , _0x35f1a8 = _0x19a99d[_0x1b5641(0x554)];
        document[_0x1b5641(0x4c5)]['removeChild'](_0x571aca), _0x17ae86(_0x35f1a8);
      }, _0xbfcf98['appendChild'](_0x540062), _0x571aca[_0x386946(0x5a0)](_0xbfcf98), document['body']['appendChild'](_0x571aca), _0x19a99d[_0x386946(0x4a8)](), setTimeout(() => {
        const _0x7179c3 = _0x386946;
        _0x571aca[_0x7179c3(0x39e)][_0x7179c3(0x496)] = '1', _0x571aca[_0x7179c3(0x39e)][_0x7179c3(0x102)] = 'translate(-50%,\x20-50%)';
      }, 0xa), _0x19a99d[_0x386946(0x5fc)](_0x386946(0x636), _0x905e32 => {
        const _0x55b2cf = _0x386946;
        if (_0x905e32['key'] === _0x55b2cf(0x34e) && _0x905e32[_0x55b2cf(0x45b)]) _0x540062[_0x55b2cf(0x338)]();
        else _0x905e32['key'] === 'Escape' && _0x5c15fa[_0x55b2cf(0x338)]();
      });
    });
  }
  const _0x3968dd = 'https://controle-licencas-git-main-ryans-projects-461d7d2a.vercel.app/licencas.json'
    , _0x46fcb7 = 'dar92f8b3d_1c4e7a9fb2d5e8f1a3c6'
    , _0x464719 = _0x2255fb(0x4ca);
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
    if (!_0x16bf96[_0x2255fb(0x3b2)]) {
      console['error'](_0x2255fb(0x627), _0x16bf96[_0x2255fb(0x243)]);
      return;
    }
    const _0x4780ae = await _0x3c1f83(_0x16bf96[_0x2255fb(0x11c)]);
    if (!_0x4780ae) return;
    _0x5e6f8d();
  } catch (_0x483c3d) {
    console['error'](_0x2255fb(0x4fa), _0x483c3d);
  }
  async function _0x3c1f83(_0x297efe) {
    const _0x5df369 = _0x2255fb
      , _0x3b0d35 = localStorage[_0x5df369(0x1fb)](_0x5df369(0x5f8));
    if (_0x3b0d35) {
      const _0x10310c = await _0x5a7223(_0x297efe, _0x3b0d35, !![]);
      if (_0x10310c) return !![];
      else console[_0x5df369(0xf5)](_0x5df369(0x513)), _0x2786ff(_0x5df369(0x31c), _0x5df369(0x65a), 0x1388);
    }
    return await _0x5a7223(_0x297efe);
  }
  async function _0x5a7223(_0x156da0, _0x16e166 = null, _0x30f700 = ![]) {
    const _0x5a6184 = _0x2255fb;
    let _0x52f034 = _0x16e166;
    if (!_0x16e166) {
      _0x52f034 = await _0x1c9560(_0x5a6184(0x23e));
      if (_0x52f034 === null || _0x52f034 === '') return _0x2786ff(_0x5a6184(0x51d), _0x5a6184(0x5fb)), ![];
    }
    let _0x133833 = null;
    for (const _0x5b1999 in _0x156da0) {
      if (_0x156da0[_0x5b1999][_0x5a6184(0x629)] === _0x52f034) {
        _0x133833 = {
          'nome': _0x5b1999
          , 'validade': _0x156da0[_0x5b1999]['validade']
          , 'features': _0x156da0[_0x5b1999][_0x5a6184(0x5d1)]
        };
        break;
      }
    }
    if (!_0x133833) {
      if (!_0x30f700) _0x2786ff('🚫\x20Senha\x20inválida.\x20Fale\x20com\x20o\x20administrador.', _0x5a6184(0x5fb));
      return localStorage[_0x5a6184(0x125)]('perfilTitan'), localStorage[_0x5a6184(0x125)](_0x5a6184(0x5f8)), ![];
    }
    return _0x4458b3 = _0x133833['nome'], _0x195c9c = Object['assign']({}, _0x133833[_0x5a6184(0x5d1)]), !_0x30f700 && (localStorage[_0x5a6184(0x634)](_0x5a6184(0x20c), _0x4458b3), localStorage['setItem'](_0x5a6184(0x5f8), _0x52f034), _0x51f98b(!![])), console[_0x5a6184(0x5ce)](_0x5a6184(0x263) + _0x4458b3, _0x195c9c), !![];
  }

  function _0x162bd8() {
    const _0xe986b9 = _0x2255fb;
    try {
      const _0x225b18 = document[_0xe986b9(0x143)](_0xe986b9(0x4c6));
      let _0x573620 = null;
      for (const _0xa550b2 of _0x225b18) {
        if (_0xa550b2[_0xe986b9(0x417)][_0xe986b9(0x1c9)]('<b>Operador:</b>')) {
          for (const _0x1d7c21 of _0xa550b2[_0xe986b9(0x50f)]) {
            if (_0x1d7c21[_0xe986b9(0x610)] === 0x3 && _0x1d7c21[_0xe986b9(0x6a2)]['includes'](',')) {
              _0x573620 = _0x1d7c21;
              break;
            }
          }
          if (_0x573620) break;
        }
      }
      if (!_0x573620) return null;
      const _0x2b59a3 = _0x573620[_0xe986b9(0x6a2)][_0xe986b9(0x247)]()
        , _0x19dcfe = _0x2b59a3[_0xe986b9(0x3f0)](',');
      if (_0x19dcfe[_0xe986b9(0x570)] < 0x2) return _0x2b59a3;
      const _0x49fc7f = _0x19dcfe[0x1][_0xe986b9(0x3f0)]('[')[0x0];
      return _0x49fc7f[_0xe986b9(0x247)]();
    } catch (_0x15f97b) {
      return console[_0xe986b9(0x5fb)]('[TitanSystem]\x20Erro\x20ao\x20extrair\x20nome:', _0x15f97b), null;
    }
  }

  function _0x51f98b(_0x2fd4c6 = ![]) {
    const _0x55aced = _0x2255fb
      , _0x1ed107 = new Date()['toISOString']()[_0x55aced(0x3f0)]('T')[0x0]
      , _0x15e05d = 'titanflow_bemvindo_exibido_em'
      , _0x14a973 = localStorage[_0x55aced(0x1fb)](_0x15e05d) === _0x1ed107;
    if (_0x14a973 && !_0x2fd4c6) return;
    const _0x4230ae = _0x162bd8();
    if (_0x4230ae) {
      const _0x3757d8 = _0x4230ae[_0x55aced(0x483)]();
      let _0x5d5549 = ''
        , _0x3324a0 = [];
      if (_0x3757d8 === _0x55aced(0x578)) _0x3324a0 = [_0x55aced(0x5b0), _0x55aced(0x3c2), _0x55aced(0x430), _0x55aced(0x107), _0x55aced(0x5a8), _0x55aced(0x1cb), _0x55aced(0x36b), _0x55aced(0x589), 'A\x20academia\x20que\x20lute!\x20O\x20mestre\x20dos\x20doces\x20e\x20dos\x20planos\x20chegou!\x20Bem-vindo,\x20Luis!', _0x55aced(0x550)], _0x5d5549 = _0x3324a0[Math[_0x55aced(0x4bb)](Math['random']() * _0x3324a0[_0x55aced(0x570)])];
      else {
        if (_0x3757d8 === _0x55aced(0x689)) _0x3324a0 = [_0x55aced(0x54e), 'E\x20aí,\x20Dlleandro!\x20Essa\x20força\x20toda\x20pra\x20aprovar\x20RC\x20é\x20natural\x20ou\x20já\x20tá\x20no\x20suco?\x20😉', _0x55aced(0x1c6), _0x55aced(0x187), 'Daqui\x20a\x20pouco\x20vai\x20precisar\x20de\x20uma\x20RC\x20pra\x20comprar\x20whey...\x20ou\x20outras\x20coisas.\x20💉\x20Bem-vindo,\x20Dlleandro!', _0x55aced(0x58c), _0x55aced(0x531), 'Mais\x20focado\x20que\x20o\x20SAP\x20em\x20dia\x20de\x20fechamento!\x20Bem-vindo,\x20Dlleandro!', _0x55aced(0x396), _0x55aced(0x1ce)], _0x5d5549 = _0x3324a0[Math[_0x55aced(0x4bb)](Math[_0x55aced(0x157)]() * _0x3324a0[_0x55aced(0x570)])];
        else {
          if (_0x3757d8 === _0x55aced(0x398)) _0x3324a0 = [_0x55aced(0x367), _0x55aced(0x3ad), _0x55aced(0x29a), _0x55aced(0x3f8), _0x55aced(0x1df), _0x55aced(0x19c), _0x55aced(0x1e3), _0x55aced(0x677), _0x55aced(0x2ac), _0x55aced(0x3c9)], _0x5d5549 = _0x3324a0[Math['floor'](Math['random']() * _0x3324a0[_0x55aced(0x570)])];
          else {
            const _0xbfe167 = ['Olá,\x20' + _0x4230ae + '!', 'Bem-vindo(a)\x20de\x20volta,\x20' + _0x4230ae + '!', _0x55aced(0x55e) + _0x4230ae + '!', _0x55aced(0x489) + _0x4230ae + '!', 'Pronto\x20para\x20começar,\x20' + _0x4230ae + '?', _0x55aced(0x46c) + _0x4230ae + '!', _0x55aced(0x254) + _0x4230ae + _0x55aced(0xf9), 'Bem-vindo(a)\x20a\x20bordo,\x20' + _0x4230ae + '!']
              , _0x5c6149 = new Date();
            _0x5c6149[_0x55aced(0x3b5)]() === 0x1 && _0xbfe167[_0x55aced(0x2d4)](_0x55aced(0x1a0) + _0x4230ae + '!');
            const _0x5b266d = ['Que\x20seu\x20dia\x20seja\x20produtivo.\x20🚀', _0x55aced(0x1d3), _0x55aced(0x1d4), _0x55aced(0x271), _0x55aced(0x4eb), _0x55aced(0x238), _0x55aced(0x39a), 'Missão\x20do\x20dia:\x20ser\x20incrível.', 'Que\x20a\x20lógica\x20esteja\x20sempre\x20a\x20seu\x20favor.']
              , _0x2afcdc = _0xbfe167[Math[_0x55aced(0x4bb)](Math[_0x55aced(0x157)]() * _0xbfe167['length'])]
              , _0x48d456 = _0x5b266d[Math[_0x55aced(0x4bb)](Math[_0x55aced(0x157)]() * _0x5b266d[_0x55aced(0x570)])];
            _0x5d5549 = _0x2afcdc + '\x20' + _0x48d456;
          }
        }
      }
      _0x2786ff(_0x5d5549, _0x55aced(0x503), 0x1b58), localStorage[_0x55aced(0x634)](_0x15e05d, _0x1ed107);
    }
  }

  function _0x2cf14e() {
    const _0x40ce93 = _0x2255fb
      , _0x567766 = new Date()[_0x40ce93(0x1ed)]()[_0x40ce93(0x3f0)]('T')[0x0]
      , _0x208ced = _0x40ce93(0x3aa);
    if (localStorage[_0x40ce93(0x1fb)](_0x208ced) === _0x567766) return;
    const _0xac57b3 = _0x162bd8();
    if (_0xac57b3) {
      const _0x4a296e = _0x40ce93(0x4ec) + _0xac57b3 + _0x40ce93(0x4f9);
      _0x2786ff(_0x4a296e, _0x40ce93(0x503), 0x2710), localStorage[_0x40ce93(0x634)](_0x208ced, _0x567766);
    }
  }

  function _0x5e6f8d() {
    const _0x1f2edc = _0x2255fb;
    _0x51f98b(![]), _0x2fd0e7(), _0x670dab(), _0x9324e5();
    const _0x5e82e6 = sessionStorage['getItem']('titanflow_session_planos');
    _0x5e82e6 && (_0x27b91a = JSON[_0x1f2edc(0x18c)](_0x5e82e6));
    const _0x37d9c8 = sessionStorage[_0x1f2edc(0x1fb)](_0x1f2edc(0x21c));
    _0x37d9c8 && (_0x34e176 = JSON[_0x1f2edc(0x18c)](_0x37d9c8));

    function _0x9324e5() {
      const _0x573095 = _0x1f2edc
        , _0x1724ef = sessionStorage[_0x573095(0x1fb)](_0x573095(0x4ce));
      if (_0x1724ef) try {
        const _0xd66a42 = JSON[_0x573095(0x18c)](_0x1724ef);
        _0x2786ff(_0xd66a42[_0x573095(0x1c0)], _0xd66a42['type'], 0x1770), sessionStorage[_0x573095(0x125)](_0x573095(0x4ce));
      } catch (_0x276e9a) {
        console['error'](_0x573095(0x58a), _0x276e9a), sessionStorage[_0x573095(0x125)](_0x573095(0x4ce));
      }
    }
    const _0x121499 = typeof GM_info !== _0x1f2edc(0x559) ? GM_info[_0x1f2edc(0x5ed)]['version'] : _0x1f2edc(0x4e7)
      , _0x3ba919 = {
        'storageKey': 'ordens_selecionadas'
        , 'configStorageKey': _0x1f2edc(0x479)
        , 'textoBotao': _0x1f2edc(0xfb)
        , 'horasPadrao': _0x1f2edc(0x2c3)
        , 'debug': !![]
      }
      , _0x3c3cfc = [{
        'id': ''
        , 'nome': _0x1f2edc(0x486)
        , 'empresaId': ''
        , 'empresaNome': ''
      }, {
        'id': _0x1f2edc(0x1ad)
        , 'nome': 'Antonio\x20Siqueira'
        , 'empresaId': '1'
        , 'empresaNome': _0x1f2edc(0x535)
      }, {
        'id': _0x1f2edc(0x4cd)
        , 'nome': _0x1f2edc(0x60b)
        , 'empresaId': '1'
        , 'empresaNome': 'Otamerica'
      }, {
        'id': _0x1f2edc(0x488)
        , 'nome': _0x1f2edc(0x131)
        , 'empresaId': '1'
        , 'empresaNome': _0x1f2edc(0x535)
      }, {
        'id': _0x1f2edc(0x1ea)
        , 'nome': _0x1f2edc(0x277)
        , 'empresaId': '1'
        , 'empresaNome': 'Otamerica'
      }, {
        'id': '2712'
        , 'nome': _0x1f2edc(0x244)
        , 'empresaId': '1'
        , 'empresaNome': 'Otamerica'
      }, {
        'id': '2853'
        , 'nome': _0x1f2edc(0x4dc)
        , 'empresaId': '1'
        , 'empresaNome': _0x1f2edc(0x535)
      }, {
        'id': _0x1f2edc(0x5fa)
        , 'nome': _0x1f2edc(0x21a)
        , 'empresaId': '1'
        , 'empresaNome': _0x1f2edc(0x535)
      }, {
        'id': _0x1f2edc(0x1d1)
        , 'nome': _0x1f2edc(0x2ba)
        , 'empresaId': '1'
        , 'empresaNome': _0x1f2edc(0x535)
      }, {
        'id': _0x1f2edc(0x3eb)
        , 'nome': 'Alcemi\x20De\x20Souza\x20(Brasanitas)'
        , 'empresaId': '5'
        , 'empresaNome': _0x1f2edc(0x224)
      }, {
        'id': _0x1f2edc(0x472)
        , 'nome': _0x1f2edc(0x686)
        , 'empresaId': '5'
        , 'empresaNome': _0x1f2edc(0x224)
      }, {
        'id': _0x1f2edc(0x653)
        , 'nome': _0x1f2edc(0x206)
        , 'empresaId': '4'
        , 'empresaNome': _0x1f2edc(0x411)
      }];
    let _0x2b7552 = []
      , _0x5b5dcd = ![]
      , _0x2029e5 = null
      , _0x2db1a3 = {
        'tecnicos': ['', '', '', '', '', '', '', '', '', '']
      };
    const _0x319428 = (_0x25d7ef, _0x7152cd) => {
      const _0x4972c0 = setInterval(() => {
        const _0x4997b3 = _0x3bcd
          , _0x19253e = document[_0x4997b3(0x667)](_0x25d7ef);
        _0x19253e && (clearInterval(_0x4972c0), _0x7152cd(_0x19253e));
      }, 0x64);
    };

    function _0xb11661(..._0x5e4c72) {
      const _0x38d566 = _0x1f2edc;
      _0x3ba919[_0x38d566(0x38a)] && console[_0x38d566(0x5ce)](_0x38d566(0x32d), ..._0x5e4c72);
    }

    function _0x3b4bec() {
      const _0xbd3e81 = _0x1f2edc;
      try {
        const _0x197a6f = document['createElement'](_0xbd3e81(0x5ed));
        _0x197a6f[_0xbd3e81(0x6a2)] = _0xbd3e81(0x5c9), (document[_0xbd3e81(0x439)] || document[_0xbd3e81(0x228)])[_0xbd3e81(0x5a0)](_0x197a6f), _0x197a6f[_0xbd3e81(0x4be)]();
      } catch (_0x9bd46b) {
        console[_0xbd3e81(0x5fb)](_0xbd3e81(0x490), _0x9bd46b);
      }
    }

    function _0x2dff9d() {
      const _0x42087b = _0x1f2edc
        , _0x145caf = (_0xcd7841, _0x59e520) => {
          const _0x5b10a5 = setInterval(() => {
            const _0x7a1789 = _0x3bcd
              , _0x2164b2 = document[_0x7a1789(0x667)](_0xcd7841);
            _0x2164b2 && (clearInterval(_0x5b10a5), _0x59e520(_0x2164b2));
          }, 0x64);
        };
      _0x145caf(_0x42087b(0x21e), () => {
        const _0x4ef6df = _0x42087b;
        if (document[_0x4ef6df(0x667)]('.titanflow-add-btn')) return;
        GM_addStyle(_0x4ef6df(0x348));

        function _0x452f4b(_0x1429e4) {
          const _0x49cfc5 = _0x4ef6df;
          if (_0x2b7552[_0x49cfc5(0x1c9)](_0x1429e4)) {
            _0x2786ff(_0x49cfc5(0x110) + _0x1429e4 + _0x49cfc5(0x46e), 'info', 0x7d0);
            return;
          }
          _0x2b7552['push'](_0x1429e4), _0x13d195(), _0x5f5540();
          const _0x142ee2 = document[_0x49cfc5(0x405)]('ordens-input');
          _0x142ee2 && (_0x142ee2[_0x49cfc5(0x554)] = _0x2b7552[_0x49cfc5(0x42f)]('\x0a') + '\x0a', _0x142ee2[_0x49cfc5(0x410)](new Event(_0x49cfc5(0x3d9)))), _0x2786ff('Ordem\x20' + _0x1429e4 + _0x49cfc5(0x525), _0x49cfc5(0x3a1), 0x7d0);
        }
        const _0x32b23f = document['querySelectorAll']('#resultado\x20table\x20tr.bgcolor0,\x20#resultado\x20table\x20tr.bgcolor1');
        _0x32b23f[_0x4ef6df(0x539)](_0x9f4685 => {
          const _0x5db861 = _0x4ef6df
            , _0x2bc9de = _0x9f4685[_0x5db861(0x581)][0x0]
            , _0x3f8442 = _0x2bc9de?.['textContent'][_0x5db861(0x247)]();
          if (_0x3f8442 && /^\d+$/ [_0x5db861(0x4f6)](_0x3f8442)) {
            const _0x1cc5cb = document['createElement'](_0x5db861(0x5e3));
            _0x1cc5cb[_0x5db861(0x657)] = _0x5db861(0x44b), _0x1cc5cb[_0x5db861(0x6a2)] = '+', _0x1cc5cb[_0x5db861(0x242)] = 'Adicionar\x20OT\x20' + _0x3f8442 + _0x5db861(0x504), _0x1cc5cb[_0x5db861(0x5fc)](_0x5db861(0x338), _0x15136c => {
              const _0x2ee084 = _0x5db861;
              _0x15136c[_0x2ee084(0x1b3)](), _0x452f4b(_0x3f8442);
            }), _0x2bc9de[_0x5db861(0x132)](_0x1cc5cb);
          }
        });
      });
    }

    function _0x493e8f() {
      const _0x530142 = _0x1f2edc;
      _0x3b4bec(), _0x365d4e(), _0x2dff9d(), _0x56ca07();
      const _0xfad1a6 = new URLSearchParams(window[_0x530142(0x298)][_0x530142(0x467)])
        , _0xac3e73 = _0xfad1a6[_0x530142(0x47f)](_0x530142(0x427));
      if (_0xac3e73 === _0x530142(0x4db) || _0xac3e73 === _0x530142(0x39f)) _0xc4d1f2(), _0x3b5be5(), _0x483135(), _0x239759(), _0x21ab2c(), _0x1d4458(), _0x3d29a5();
      else(_0xac3e73 === _0x530142(0x284) || _0xac3e73 === _0x530142(0x5b2)) && (_0x4458b3 !== _0x530142(0x331) && _0x2ebe4b());
    }

    function _0x3909dc() {
      const _0x49887b = _0x1f2edc;
      GM_addStyle(_0x49887b(0x207));
    }

    function _0x3861f3() {
      const _0x383bd6 = _0x1f2edc;
      !document['querySelector'](_0x383bd6(0x3db)) && _0x3909dc();
      const _0x454274 = typeof GM_info !== _0x383bd6(0x559) ? GM_info['script'][_0x383bd6(0x325)] : _0x383bd6(0x4e7);
      let _0x695c90 = [{
        'key': '1'
        , 'desc': 'Ir\x20para\x20a\x20aba\x20\x22Seleção\x22'
        , 'example': _0x383bd6(0x4ab)
      }, {
        'key': '3'
        , 'desc': _0x383bd6(0x42e)
        , 'example': _0x383bd6(0x47d)
      }, {
        'key': 'S'
        , 'desc': _0x383bd6(0x158)
        , 'example': _0x383bd6(0x551)
      }, {
        'key': 'C'
        , 'desc': _0x383bd6(0x45d)
        , 'example': _0x383bd6(0xfc)
      }, {
        'key': 'X'
        , 'desc': _0x383bd6(0x2f5)
        , 'example': 'Limpa\x20todas\x20as\x20ordens\x20da\x20sua\x20lista.'
      }, {
        'key': 'Z'
        , 'desc': _0x383bd6(0x3a8)
        , 'example': _0x383bd6(0x18d)
      }];
      _0x4458b3 !== _0x383bd6(0x331) && (_0x695c90['push']({
        'key': '2'
        , 'desc': _0x383bd6(0x236)
        , 'example': _0x383bd6(0x50d)
      }), _0x695c90[_0x383bd6(0x2d4)]({
        'key': '4'
        , 'desc': _0x383bd6(0x142)
        , 'example': _0x383bd6(0x23f)
      }), _0x695c90[_0x383bd6(0x3d6)]((_0x216cd5, _0x1f8a51) => _0x216cd5[_0x383bd6(0x4b9)][_0x383bd6(0x3cf)](_0x1f8a51['key'], undefined, {
        'numeric': !![]
        , 'sensitivity': _0x383bd6(0x3c7)
      })));
      let _0x38ba2b = '';
      _0x4458b3 === _0x383bd6(0x331) ? _0x38ba2b = _0x383bd6(0x1dc) : _0x38ba2b = _0x383bd6(0x442);
      const _0x36dd51 = typeof GM_info !== _0x383bd6(0x559) ? GM_info[_0x383bd6(0x5ed)][_0x383bd6(0x22a)] : 'https://raw.githubusercontent.com/Heaven0016/controle-licencas/main/public/titan.user.js'
        , _0x4d737c = document[_0x383bd6(0x4a9)](_0x383bd6(0x45f));
      _0x4d737c['className'] = _0x383bd6(0x2e6), _0x4d737c[_0x383bd6(0x417)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Ajuda\x20do\x20TitanSystem\x20🚀</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22titanflow-modal-close\x22>&times;</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-modal-body\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x38ba2b + _0x383bd6(0x133) + _0x695c90[_0x383bd6(0x113)](_0x104a4c => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-hotkey-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-hotkey-key\x22>' + _0x104a4c[_0x383bd6(0x4b9)] + _0x383bd6(0x12a) + _0x104a4c['desc'] + _0x383bd6(0x1a4) + _0x104a4c[_0x383bd6(0x13a)] + _0x383bd6(0x16f))['join']('') + _0x383bd6(0x375) + _0x454274 + '</b>.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ol>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tutorial-method\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4>Método\x202:\x20Link\x20Direto\x20(Manual)</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ol\x20class=\x22tutorial-steps\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Clique\x20no\x20botão\x20\x22Abrir\x20Link\x20de\x20Atualização\x22\x20abaixo.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>O\x20Tampermonkey\x20mostrará\x20as\x20informações\x20do\x20script.\x20Clique\x20em\x20<b>\x22Reinstalar\x22</b>\x20ou\x20<b>\x22Atualizar\x22</b>.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Volte\x20para\x20a\x20página\x20do\x20Titan\x20e\x20atualize-a\x20(F5).</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ol>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22update-link-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22' + _0x36dd51 + _0x383bd6(0x211), document[_0x383bd6(0x4c5)][_0x383bd6(0x5a0)](_0x4d737c);
      const _0xeca06 = _0x4d737c[_0x383bd6(0x667)](_0x383bd6(0x25b));
      setTimeout(() => {
        const _0x47260c = _0x383bd6;
        _0x4d737c[_0x47260c(0x39e)][_0x47260c(0x496)] = '1', _0xeca06[_0x47260c(0x39e)][_0x47260c(0x102)] = _0x47260c(0x19b);
      }, 0xa);
      const _0x2c14ca = () => {
        const _0x25f63f = _0x383bd6;
        _0x4d737c[_0x25f63f(0x39e)][_0x25f63f(0x496)] = '0', _0xeca06[_0x25f63f(0x39e)][_0x25f63f(0x102)] = _0x25f63f(0x10f), setTimeout(() => {
          const _0x5c2d16 = _0x25f63f;
          document[_0x5c2d16(0x4c5)][_0x5c2d16(0xfd)](_0x4d737c) && document[_0x5c2d16(0x4c5)]['removeChild'](_0x4d737c);
        }, 0x12c);
      };
      _0x4d737c[_0x383bd6(0x667)](_0x383bd6(0x4a2))['onclick'] = _0x2c14ca, _0x4d737c[_0x383bd6(0x5fc)]('click', _0x5a5f4e => {
        const _0x396419 = _0x383bd6;
        if (_0x5a5f4e[_0x396419(0x354)] === _0x4d737c) _0x2c14ca();
      }), document[_0x383bd6(0x5fc)]('keydown', function _0x89a323(_0x27a77a) {
        const _0x1c72f3 = _0x383bd6;
        _0x27a77a['key'] === 'Escape' && (_0x2c14ca(), document[_0x1c72f3(0x3c3)]('keydown', _0x89a323));
      });
    }
    async function _0x51ee14(_0x552dd7, _0x23f598, _0x4ec315) {
      const _0x80b7b0 = _0x1f2edc;
      console[_0x80b7b0(0x5ce)](_0x80b7b0(0x512));
      try {
        const _0x916a40 = document['getElementById'](_0x80b7b0(0x5d2));
        if (!_0x916a40) {
          console[_0x80b7b0(0x5fb)]('[animarBotaoPlanejamento]\x20ERRO:\x20Painel\x20#painel-planejamento\x20não\x20encontrado!'), await _0x4ec315(() => {});
          return;
        }
        console['log'](_0x80b7b0(0x18b) + _0x916a40['id']);
        const _0x23d749 = window['getComputedStyle'](_0x552dd7)[_0x80b7b0(0x156)]
          , _0x361546 = window[_0x80b7b0(0x29b)](_0x552dd7)
          , _0x159846 = _0x552dd7[_0x80b7b0(0x179)]()
          , _0x281720 = _0x23f598['getBoundingClientRect']()
          , _0x3c93fb = _0x916a40[_0x80b7b0(0x179)]()
          , _0x24fe64 = document['createElement']('div');
        _0x24fe64[_0x80b7b0(0x657)] = 'titanflow-action-btn', _0x24fe64[_0x80b7b0(0x417)] = _0x80b7b0(0x340), Object[_0x80b7b0(0x48a)](_0x24fe64[_0x80b7b0(0x39e)], {
          'position': _0x80b7b0(0x184)
          , 'top': _0x159846[_0x80b7b0(0x565)] - _0x3c93fb[_0x80b7b0(0x565)] + 'px'
          , 'left': _0x159846[_0x80b7b0(0x540)] - _0x3c93fb[_0x80b7b0(0x540)] + 'px'
          , 'width': _0x159846[_0x80b7b0(0x649)] + 'px'
          , 'height': _0x159846[_0x80b7b0(0x1cc)] + 'px'
          , 'backgroundColor': _0x23d749
          , 'borderRadius': _0x361546[_0x80b7b0(0x482)]
          , 'zIndex': '10000'
          , 'color': _0x80b7b0(0x56f)
          , 'fontWeight': _0x80b7b0(0x39b)
          , 'fontSize': _0x361546[_0x80b7b0(0x3a3)]
          , 'transition': _0x80b7b0(0x315)
        }), _0x916a40[_0x80b7b0(0x5a0)](_0x24fe64), _0x23f598[_0x80b7b0(0x39e)][_0x80b7b0(0x341)] = _0x80b7b0(0x49b);
        const _0x3ff0eb = _0x24fe64[_0x80b7b0(0x667)]('.btn-progress-fill')
          , _0x420bb6 = _0x24fe64[_0x80b7b0(0x667)]('.btn-text');
        setTimeout(() => {
          const _0x1d3c35 = _0x80b7b0;
          Object[_0x1d3c35(0x48a)](_0x24fe64[_0x1d3c35(0x39e)], {
            'left': _0x281720[_0x1d3c35(0x540)] - _0x3c93fb[_0x1d3c35(0x540)] + 'px'
            , 'width': _0x281720[_0x1d3c35(0x649)] + 'px'
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
            const _0x4782eb = _0x80b7b0;
            if (_0x864769 > 0x0 || _0x5bbb80) {
              clearInterval(_0x4e75e3);
              return;
            }
            if (_0x373538 < 0.15) {
              _0x373538 += 0.002;
              const _0x3ac328 = Math[_0x4782eb(0x4bb)](_0x373538 * 0x64);
              _0x3ff0eb['style'][_0x4782eb(0x649)] = _0x3ac328 + '%', _0x420bb6['textContent'] = _0x3ac328 + '%';
            }
          }, 0x1e);
          const _0x3ccae1 = _0x5bfec0 => {
            const _0x3ae2d5 = _0x80b7b0;
            if (_0x4e75e3) clearInterval(_0x4e75e3);
            _0x864769 = Math[_0x3ae2d5(0x356)](_0x5bfec0, _0x864769);
          };
          _0x1d7256 = setInterval(() => {
            const _0x809a7c = _0x80b7b0;
            let _0x39c75f = _0x864769;
            if (_0x5bbb80) {
              _0x39c75f = 0x1;
              if (_0x373538 > 0.995) _0x373538 = 0x1;
            }
            _0x864769 > 0x0 && (_0x373538 += (_0x39c75f - _0x373538) * 0.1);
            if (_0x864769 > 0x0 || _0x5bbb80) {
              const _0x5f5683 = Math[_0x809a7c(0x4bb)](_0x373538 * 0x64);
              _0x3ff0eb['style']['width'] = _0x5f5683 + '%', _0x420bb6[_0x809a7c(0x6a2)] = _0x5f5683 + '%';
            }
            _0x373538 >= 0x1 && (_0x373538 = 0x1, _0x3ff0eb[_0x809a7c(0x39e)]['width'] = _0x809a7c(0x669), _0x420bb6[_0x809a7c(0x6a2)] = _0x809a7c(0x38f), clearInterval(_0x1d7256));
          }, 0x14), await _0x4ec315(_0x3ccae1), _0x5bbb80 = !![];
        } catch (_0x4685c3) {
          if (_0x4e75e3) clearInterval(_0x4e75e3);
          if (_0x1d7256) clearInterval(_0x1d7256);
          console[_0x80b7b0(0x5fb)](_0x80b7b0(0x204), _0x4685c3), _0x420bb6['textContent'] = _0x80b7b0(0x57c), _0x5bbb80 = !![];
        }
        setTimeout(() => {
          const _0x629656 = _0x80b7b0;
          if (_0x4e75e3) clearInterval(_0x4e75e3);
          if (_0x1d7256) clearInterval(_0x1d7256);
          Object[_0x629656(0x48a)](_0x24fe64[_0x629656(0x39e)], {
            'left': _0x159846[_0x629656(0x540)] - _0x3c93fb['left'] + 'px'
            , 'width': _0x159846['width'] + 'px'
            , 'borderRadius': _0x361546[_0x629656(0x482)]
          }), _0x420bb6[_0x629656(0x39e)][_0x629656(0x496)] = '0', _0x3ff0eb[_0x629656(0x39e)][_0x629656(0x496)] = '0', setTimeout(() => {
            const _0x1771db = _0x629656;
            _0x916a40[_0x1771db(0x1d5)](_0x24fe64), _0x23f598['style'][_0x1771db(0x341)] = _0x1771db(0x164);
          }, 0x190);
        }, 0x5dc);
      } catch (_0x53935e) {
        console[_0x80b7b0(0x5fb)](_0x80b7b0(0x640), _0x53935e);
        if (_0x23f598) _0x23f598[_0x80b7b0(0x39e)]['visibility'] = _0x80b7b0(0x164);
      }
    }

    function _0x2ebe4b() {
      const _0x4b5828 = _0x1f2edc
        , _0x57a46a = {
          '17': {
            'nome': _0x4b5828(0x5ae)
            , 'classes': [{
              'id': '206'
              , 'nome': _0x4b5828(0x3ff)
            }, {
              'id': '211'
              , 'nome': 'Computadora\x20Industrial'
            }, {
              'id': '207'
              , 'nome': _0x4b5828(0x543)
            }, {
              'id': _0x4b5828(0x361)
              , 'nome': _0x4b5828(0x3d2)
            }, {
              'id': _0x4b5828(0x422)
              , 'nome': _0x4b5828(0x5cf)
            }, {
              'id': _0x4b5828(0x1f2)
              , 'nome': _0x4b5828(0x4f0)
            }, {
              'id': _0x4b5828(0x441)
              , 'nome': _0x4b5828(0x303)
            }, {
              'id': _0x4b5828(0x62f)
              , 'nome': _0x4b5828(0x659)
            }]
          }
          , '14': {
            'nome': _0x4b5828(0x3de)
            , 'classes': [{
              'id': '74'
              , 'nome': _0x4b5828(0x62e)
            }, {
              'id': _0x4b5828(0x447)
              , 'nome': 'Arrancador\x20Suave'
            }, {
              'id': _0x4b5828(0x189)
              , 'nome': _0x4b5828(0x64c)
            }, {
              'id': '170'
              , 'nome': 'Convertidor\x20de\x20Frecuencia\x20(VFD)'
            }, {
              'id': _0x4b5828(0x580)
              , 'nome': _0x4b5828(0x53c)
            }, {
              'id': _0x4b5828(0x332)
              , 'nome': _0x4b5828(0x2e8)
            }, {
              'id': _0x4b5828(0x252)
              , 'nome': _0x4b5828(0x287)
            }, {
              'id': _0x4b5828(0x2ab)
              , 'nome': 'Seccionador\x20Eléctrico'
            }, {
              'id': _0x4b5828(0x2b0)
              , 'nome': _0x4b5828(0x5f3)
            }, {
              'id': '216'
              , 'nome': _0x4b5828(0x414)
            }, {
              'id': _0x4b5828(0x39d)
              , 'nome': _0x4b5828(0x278)
            }, {
              'id': _0x4b5828(0x3a2)
              , 'nome': _0x4b5828(0x1f9)
            }, {
              'id': '87'
              , 'nome': _0x4b5828(0x3da)
            }]
          }
          , '7': {
            'nome': _0x4b5828(0x38c)
            , 'classes': [{
              'id': _0x4b5828(0x167)
              , 'nome': _0x4b5828(0x51e)
            }, {
              'id': '202'
              , 'nome': _0x4b5828(0x50c)
            }, {
              'id': _0x4b5828(0x38d)
              , 'nome': _0x4b5828(0x339)
            }, {
              'id': '201'
              , 'nome': 'Edificio'
            }, {
              'id': '199'
              , 'nome': 'Estación'
            }, {
              'id': _0x4b5828(0x1f8)
              , 'nome': _0x4b5828(0x22e)
            }, {
              'id': '134'
              , 'nome': _0x4b5828(0x1a2)
            }, {
              'id': '168'
              , 'nome': _0x4b5828(0x5dd)
            }, {
              'id': _0x4b5828(0x4a6)
              , 'nome': _0x4b5828(0x3e2)
            }]
          }
          , '15': {
            'nome': _0x4b5828(0x1f5)
            , 'classes': [{
              'id': _0x4b5828(0x201)
              , 'nome': _0x4b5828(0x386)
            }, {
              'id': _0x4b5828(0x46f)
              , 'nome': _0x4b5828(0x43d)
            }, {
              'id': _0x4b5828(0x230)
              , 'nome': _0x4b5828(0x180)
            }, {
              'id': _0x4b5828(0x545)
              , 'nome': _0x4b5828(0x1e2)
            }, {
              'id': '184'
              , 'nome': 'Dispositivo\x20Sensor\x20de\x20Nivel'
            }, {
              'id': _0x4b5828(0x5f0)
              , 'nome': _0x4b5828(0x612)
            }, {
              'id': _0x4b5828(0x586)
              , 'nome': _0x4b5828(0x115)
            }, {
              'id': _0x4b5828(0x1e8)
              , 'nome': _0x4b5828(0x68e)
            }, {
              'id': _0x4b5828(0x5ba)
              , 'nome': _0x4b5828(0x28c)
            }, {
              'id': _0x4b5828(0x2f2)
              , 'nome': _0x4b5828(0x67e)
            }, {
              'id': _0x4b5828(0x682)
              , 'nome': _0x4b5828(0x5e0)
            }]
          }
          , '19': {
            'nome': _0x4b5828(0x368)
            , 'classes': [{
              'id': '191'
              , 'nome': _0x4b5828(0x136)
            }, {
              'id': _0x4b5828(0x475)
              , 'nome': 'Equipo\x20de\x20Anclaje'
            }, {
              'id': _0x4b5828(0x2a5)
              , 'nome': _0x4b5828(0x212)
            }, {
              'id': _0x4b5828(0x2eb)
              , 'nome': 'Monoboya'
            }]
          }
          , '13': {
            'nome': 'Mecánico'
            , 'classes': [{
              'id': _0x4b5828(0x43e)
              , 'nome': _0x4b5828(0x3bb)
            }, {
              'id': _0x4b5828(0x313)
              , 'nome': _0x4b5828(0x2b4)
            }, {
              'id': _0x4b5828(0x285)
              , 'nome': _0x4b5828(0x22c)
            }, {
              'id': '150'
              , 'nome': _0x4b5828(0x567)
            }, {
              'id': _0x4b5828(0x600)
              , 'nome': 'Filtro'
            }, {
              'id': _0x4b5828(0x209)
              , 'nome': _0x4b5828(0x10c)
            }, {
              'id': '153'
              , 'nome': 'Recipiente\x20Sometido\x20a\x20Presión'
            }, {
              'id': '221'
              , 'nome': _0x4b5828(0x3fa)
            }, {
              'id': _0x4b5828(0x23b)
              , 'nome': 'Tanque\x20Atmosférico'
            }, {
              'id': _0x4b5828(0x4e6)
              , 'nome': _0x4b5828(0x3fd)
            }, {
              'id': _0x4b5828(0x53b)
              , 'nome': _0x4b5828(0x39c)
            }]
          }
          , '18': {
            'nome': _0x4b5828(0x42d)
            , 'classes': [{
              'id': '107'
              , 'nome': _0x4b5828(0x474)
            }, {
              'id': '1'
              , 'nome': _0x4b5828(0x647)
            }]
          }
          , '12': {
            'nome': _0x4b5828(0x425)
            , 'classes': [{
              'id': _0x4b5828(0x456)
              , 'nome': _0x4b5828(0x10a)
            }, {
              'id': _0x4b5828(0x3b9)
              , 'nome': 'Compresor'
            }, {
              'id': _0x4b5828(0x415)
              , 'nome': _0x4b5828(0x28e)
            }, {
              'id': _0x4b5828(0x175)
              , 'nome': _0x4b5828(0x62d)
            }, {
              'id': '85'
              , 'nome': 'Motor\x20Eléctrico'
            }, {
              'id': _0x4b5828(0x288)
              , 'nome': _0x4b5828(0x5c8)
            }]
          }
          , '16': {
            'nome': _0x4b5828(0x19f)
            , 'classes': [{
              'id': _0x4b5828(0x15d)
              , 'nome': _0x4b5828(0x345)
            }, {
              'id': _0x4b5828(0x2ec)
              , 'nome': 'Central\x20de\x20Alarma'
            }, {
              'id': _0x4b5828(0x5eb)
              , 'nome': _0x4b5828(0x514)
            }, {
              'id': '196'
              , 'nome': _0x4b5828(0x2d2)
            }, {
              'id': _0x4b5828(0x3b3)
              , 'nome': _0x4b5828(0x1e7)
            }, {
              'id': _0x4b5828(0x2e7)
              , 'nome': _0x4b5828(0x606)
            }]
          }
        }
        , _0x369381 = {
          'tipoTrabalho': [{
            'v': '7'
            , 't': _0x4b5828(0x342)
          }, {
            'v': '6'
            , 't': 'Mantenimiento\x20Predictivo'
          }, {
            'v': '5'
            , 't': _0x4b5828(0x372)
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
            , 't': _0x4b5828(0x18f)
          }, {
            'v': '7'
            , 't': _0x4b5828(0x20d)
          }, {
            'v': '10'
            , 't': _0x4b5828(0x5af)
          }, {
            'v': '18'
            , 't': _0x4b5828(0x639)
          }, {
            'v': '9'
            , 't': _0x4b5828(0x426)
          }, {
            'v': '1'
            , 't': _0x4b5828(0x499)
          }, {
            'v': '6'
            , 't': _0x4b5828(0x351)
          }, {
            'v': '15'
            , 't': _0x4b5828(0x5e4)
          }, {
            'v': '16'
            , 't': _0x4b5828(0x5d7)
          }, {
            'v': '12'
            , 't': _0x4b5828(0x403)
          }, {
            'v': '17'
            , 't': _0x4b5828(0x4a0)
          }]
          , 'condicao': [{
            'v': '1'
            , 't': _0x4b5828(0x5b9)
          }, {
            'v': '2'
            , 't': 'Fuera\x20de\x20Servicio'
          }, {
            'v': '5'
            , 't': 'Parada\x20de\x20Planta'
          }]
          , 'contratista': [{
            'v': '5'
            , 't': _0x4b5828(0x224)
          }, {
            'v': '16'
            , 't': _0x4b5828(0x198)
          }, {
            'v': '14'
            , 't': _0x4b5828(0x346)
          }, {
            'v': '11'
            , 't': _0x4b5828(0x22f)
          }, {
            'v': '17'
            , 't': _0x4b5828(0x5b7)
          }, {
            'v': '8'
            , 't': _0x4b5828(0x103)
          }, {
            'v': '7'
            , 't': _0x4b5828(0x3e6)
          }, {
            'v': '4'
            , 't': 'Marine'
          }, {
            'v': '6'
            , 't': _0x4b5828(0x223)
          }, {
            'v': '9'
            , 't': _0x4b5828(0x1b7)
          }, {
            'v': '1'
            , 't': 'Otamerica'
          }, {
            'v': '18'
            , 't': _0x4b5828(0x15a)
          }, {
            'v': '20'
            , 't': _0x4b5828(0x36a)
          }, {
            'v': '15'
            , 't': 'Schneider'
          }, {
            'v': '10'
            , 't': _0x4b5828(0x349)
          }, {
            'v': '13'
            , 't': _0x4b5828(0x129)
          }, {
            'v': '12'
            , 't': _0x4b5828(0x165)
          }]
          , 'especialidade': [{
            'v': '3'
            , 't': _0x4b5828(0x408)
          }, {
            'v': '14'
            , 't': _0x4b5828(0x5c4)
          }, {
            'v': '2'
            , 't': _0x4b5828(0x160)
          }, {
            'v': '17'
            , 't': _0x4b5828(0x20d)
          }, {
            'v': '4'
            , 't': _0x4b5828(0x498)
          }, {
            'v': '1'
            , 't': _0x4b5828(0x2d1)
          }, {
            'v': '23'
            , 't': _0x4b5828(0x205)
          }, {
            'v': '18'
            , 't': _0x4b5828(0x434)
          }]
        }
        , _0x4f98d9 = _0x4b5828(0x365)
        , _0x3a0af5 = _0x4b5828(0x4f7)
        , _0x19c9c0 = _0x4b5828(0x295);
      let _0x2ee372 = null;
      const _0x58806a = async (_0x29a5cb, _0x124abb) => {
        const _0x49201a = _0x4b5828
          , _0xf41861 = JSON[_0x49201a(0x18c)](localStorage[_0x49201a(0x1fb)](_0x49201a(0x150)) || '[]');
        if (_0xf41861[_0x49201a(0x570)] === 0x0) {
          _0x2786ff(_0x49201a(0x492), 'warning');
          throw new Error(_0x49201a(0x4d1));
        }
        let _0x1f6db6 = {};
        if (_0x29a5cb === _0x49201a(0x390)) {
          const _0x2c672b = document['getElementById'](_0x49201a(0x582))[_0x49201a(0x554)];
          if (!_0x2c672b) {
            _0x2786ff(_0x49201a(0x200), _0x49201a(0x5fb));
            throw new Error(_0x49201a(0x52d));
          }
          _0x1f6db6 = {
            'programacion_tipo': _0x2c672b
            , 'fecha_comienzo': document[_0x49201a(0x405)](_0x49201a(0x11f))[_0x49201a(0x554)][_0x49201a(0x3f0)]('-')[_0x49201a(0x66f)]()[_0x49201a(0x42f)]('/')
            , 'horizonte_de_llamada': document[_0x49201a(0x405)](_0x49201a(0x1ee))['value']
            , 'programacion_diaria_dias': document[_0x49201a(0x405)](_0x49201a(0x2ef))[_0x49201a(0x554)]
            , 'programacion_semanal_semanas': document[_0x49201a(0x405)](_0x49201a(0x2fc))[_0x49201a(0x554)]
            , 'programacion_semanal_dia': document[_0x49201a(0x405)](_0x49201a(0x33d))[_0x49201a(0x554)]
            , 'dummy6': document[_0x49201a(0x405)](_0x49201a(0x623))[_0x49201a(0x554)]
            , 'yearsIN': new Date(document['getElementById']('titanflow-prog-data-inicio')[_0x49201a(0x554)])[_0x49201a(0x5c7)]()
            , 'programacion_mensual2_dia_del_mes': '1'
            , 'programacion_mensual2_cada': document[_0x49201a(0x405)](_0x49201a(0x593))[_0x49201a(0x554)]
          };
        }
        _0x5b5dcd = !![];
        let _0x5d003a = 0x0
          , _0x1f810f = 0x0;
        for (const _0x121a35 of _0xf41861) {
          if (!_0x5b5dcd) break;
          try {
            _0x29a5cb === _0x49201a(0x390) ? await _0x8bec5c(_0x121a35['id'], _0x1f6db6) : await _0x342ee9(_0x121a35['id'], _0x29a5cb);
          } catch (_0x3ea03e) {
            _0x5d003a++, console[_0x49201a(0x5fb)](_0x49201a(0x384) + _0x29a5cb + _0x49201a(0x3c6) + _0x121a35['id'] + ':', _0x3ea03e);
          }
          _0x1f810f++;
          if (_0x124abb) _0x124abb(_0x1f810f / _0xf41861['length']);
        }
        _0x5b5dcd = ![];
        const _0x53bb19 = {
            'programar': _0x49201a(0x31f)
            , 'activar': _0x49201a(0x41a)
            , 'desactivar': 'desativadas'
          }
          , _0x520cf4 = _0x53bb19[_0x29a5cb] || _0x49201a(0x5fe)
          , _0x452aac = _0x49201a(0x65c) + (_0xf41861['length'] - _0x5d003a) + '\x20programações\x20' + _0x520cf4 + '.\x20' + _0x5d003a + '\x20falharam.';
        _0x2786ff(_0x452aac, _0x5d003a > 0x0 ? 'warning' : _0x49201a(0x3a1), 0x1770), _0x5d003a === 0x0 && _0xf41861[_0x49201a(0x570)] > 0x0 && setTimeout(() => location[_0x49201a(0x683)](), 0x1f4);
      }, _0x3ea34b = _0x5ae3b0 => {
        const _0x263c8f = _0x4b5828;
        _0x5ae3b0[_0x263c8f(0x5fc)](_0x263c8f(0x53d), () => {
          const _0x5ebb89 = _0x263c8f;
          !_0x5ae3b0[_0x5ebb89(0x4e8)] && (_0x5ae3b0[_0x5ebb89(0x39e)][_0x5ebb89(0x102)] = _0x5ebb89(0x5d6), _0x5ae3b0['style']['filter'] = _0x5ebb89(0x319), _0x5ae3b0[_0x5ebb89(0x39e)][_0x5ebb89(0x568)] = '0\x204px\x208px\x20rgba(0,0,0,0.2)');
        }), _0x5ae3b0[_0x263c8f(0x5fc)](_0x263c8f(0x4df), () => {
          const _0x4103c0 = _0x263c8f;
          !_0x5ae3b0[_0x4103c0(0x4e8)] && (_0x5ae3b0[_0x4103c0(0x39e)][_0x4103c0(0x102)] = 'translateY(0px)', _0x5ae3b0['style'][_0x4103c0(0x5fd)] = _0x4103c0(0x161), _0x5ae3b0[_0x4103c0(0x39e)][_0x4103c0(0x568)] = '0\x202px\x204px\x20rgba(0,0,0,0.15)');
        }), _0x5ae3b0[_0x263c8f(0x5fc)](_0x263c8f(0x109), () => {
          const _0x4fa28e = _0x263c8f;
          !_0x5ae3b0[_0x4fa28e(0x4e8)] && (_0x5ae3b0['style']['transform'] = _0x4fa28e(0x3c0), _0x5ae3b0['style'][_0x4fa28e(0x568)] = _0x4fa28e(0x24f));
        }), _0x5ae3b0[_0x263c8f(0x5fc)](_0x263c8f(0x2f1), () => {
          const _0x512e1b = _0x263c8f;
          !_0x5ae3b0['disabled'] && _0x5ae3b0[_0x512e1b(0x225)](_0x512e1b(0x334)) && (_0x5ae3b0[_0x512e1b(0x39e)][_0x512e1b(0x102)] = _0x512e1b(0x5d6));
        });
      };

      function _0x5b1121() {
        const _0x5e89e7 = _0x4b5828;
        if (!_0x27b91a || _0x27b91a[_0x5e89e7(0x570)] === 0x0) {
          console[_0x5e89e7(0xf5)](_0x5e89e7(0x246));
          return;
        }
        const _0x34e70f = _0x27b91a[_0x5e89e7(0x195)]((_0x26443e, _0xa974c5) => {
            const _0x3fcfa1 = _0x5e89e7
              , _0x521745 = _0xa974c5['tag']['match'](/TOIL-MNT-(\d+)/i);
            if (_0x521745 && _0x521745[0x1]) {
              const _0x22a7b4 = parseInt(_0x521745[0x1], 0xa);
              return Math[_0x3fcfa1(0x356)](_0x26443e, _0x22a7b4);
            }
            return _0x26443e;
          }, 0x0)
          , _0x147116 = _0x34e70f + 0x1
          , _0x422ec8 = document[_0x5e89e7(0x405)](_0x5e89e7(0x48d));
        _0x422ec8 && (_0x422ec8[_0x5e89e7(0x554)] = _0x147116, console[_0x5e89e7(0x5ce)]('[TitanSystem]\x20Próximo\x20ID\x20de\x20plano\x20sugerido:\x20' + _0x147116), _0x39afb0());
      }

      function _0x39afb0() {
        const _0x2bb887 = _0x4b5828
          , _0x1efb64 = {
            'idNumero': document[_0x2bb887(0x405)]('titanflow-tag-numero')[_0x2bb887(0x554)]
            , 'nome': document['getElementById']('titanflow-nombre')[_0x2bb887(0x554)]
            , 'tipoTrabalho': document[_0x2bb887(0x405)](_0x2bb887(0x12f))[_0x2bb887(0x554)]
            , 'taller': document[_0x2bb887(0x405)](_0x2bb887(0x51b))[_0x2bb887(0x554)]
            , 'categoria': document[_0x2bb887(0x405)](_0x2bb887(0x151))[_0x2bb887(0x554)]
            , 'classe': document[_0x2bb887(0x405)](_0x2bb887(0x1d8))['value']
            , 'condicao': document[_0x2bb887(0x405)](_0x2bb887(0x27b))[_0x2bb887(0x554)]
            , 'contratista': document[_0x2bb887(0x405)]('titanflow-key__empresas__id')[_0x2bb887(0x554)]
            , 'especialidades': []
          };
        for (let _0x461ec4 = 0x1; _0x461ec4 <= 0x4; _0x461ec4++) {
          const _0x8b22f5 = document[_0x2bb887(0x405)](_0x2bb887(0x2cd) + _0x461ec4);
          _0x8b22f5 && _0x1efb64['especialidades']['push']({
            'id': _0x8b22f5['value']
            , 'rec': document['getElementById'](_0x2bb887(0x100) + _0x461ec4)[_0x2bb887(0x554)]
            , 'hh': document[_0x2bb887(0x405)]('titanflow-esp-hh-' + _0x461ec4)[_0x2bb887(0x554)]
          });
        }
        localStorage[_0x2bb887(0x634)](_0x4f98d9, JSON[_0x2bb887(0x1b4)](_0x1efb64));
      }

      function _0x2b92f2() {
        const _0x2b1b3f = _0x4b5828;
        localStorage[_0x2b1b3f(0x125)](_0x4f98d9), document['getElementById']('titanflow-tag-numero')[_0x2b1b3f(0x554)] = '', document[_0x2b1b3f(0x405)](_0x2b1b3f(0x63b))[_0x2b1b3f(0x554)] = '', document[_0x2b1b3f(0x405)](_0x2b1b3f(0x12f))[_0x2b1b3f(0x554)] = '', document['getElementById'](_0x2b1b3f(0x51b))[_0x2b1b3f(0x554)] = '', document[_0x2b1b3f(0x405)](_0x2b1b3f(0x27b))[_0x2b1b3f(0x554)] = '', document[_0x2b1b3f(0x405)](_0x2b1b3f(0x310))[_0x2b1b3f(0x554)] = '';
        const _0x2b5b3f = document[_0x2b1b3f(0x405)]('titanflow-dummy_cat');
        _0x2b5b3f[_0x2b1b3f(0x554)] = '', _0x2b5b3f[_0x2b1b3f(0x410)](new Event(_0x2b1b3f(0x429)));
        for (let _0x20f8ce = 0x1; _0x20f8ce <= 0x4; _0x20f8ce++) {
          const _0x164cee = document[_0x2b1b3f(0x405)](_0x2b1b3f(0x2cd) + _0x20f8ce);
          _0x164cee[_0x2b1b3f(0x554)] = '', _0x164cee[_0x2b1b3f(0x410)](new Event(_0x2b1b3f(0x429)));
        }
        _0x2786ff('Campos\x20do\x20painel\x20foram\x20limpos.', _0x2b1b3f(0x503));
      }

      function _0x29dc9c() {
        const _0x1ac4b7 = _0x4b5828;
        _0x3909dc();
        const _0x53d5ca = [{
            'key': '1'
            , 'desc': _0x1ac4b7(0x5b8)
            , 'example': _0x1ac4b7(0x523)
          }, {
            'key': '2'
            , 'desc': _0x1ac4b7(0x27d)
            , 'example': _0x1ac4b7(0x13e)
          }, {
            'key': '3'
            , 'desc': _0x1ac4b7(0x5d9)
            , 'example': _0x1ac4b7(0x45e)
          }, {
            'key': 'Z'
            , 'desc': 'Ocultar/Mostrar\x20Painel'
            , 'example': _0x1ac4b7(0x202)
          }]
          , _0x367b79 = [{
            'key': 'C'
            , 'desc': 'Capturar\x20Programações\x20Visíveis'
            , 'example': 'Adiciona\x20todas\x20as\x20programações\x20da\x20tela\x20à\x20lista.'
          }, {
            'key': 'X'
            , 'desc': _0x1ac4b7(0x17a)
            , 'example': _0x1ac4b7(0x1b2)
          }]
          , _0x95063 = _0x1ac4b7(0x628) + _0x53d5ca['map'](_0x300509 => _0x1ac4b7(0x49c) + _0x300509[_0x1ac4b7(0x4b9)] + _0x1ac4b7(0x237) + _0x300509[_0x1ac4b7(0x2fa)] + _0x1ac4b7(0x2b8) + _0x300509[_0x1ac4b7(0x13a)] + _0x1ac4b7(0x42c))[_0x1ac4b7(0x42f)]('') + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22modal-section-title\x22>Atalhos\x20(Apenas\x20na\x20aba\x20\x22Configurar\x20Programação\x22)</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x367b79[_0x1ac4b7(0x113)](_0x3b9311 => _0x1ac4b7(0x49c) + _0x3b9311[_0x1ac4b7(0x4b9)] + _0x1ac4b7(0x237) + _0x3b9311['desc'] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>' + _0x3b9311['example'] + '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20')[_0x1ac4b7(0x42f)]('') + _0x1ac4b7(0x599)
          , _0x49584a = document['createElement'](_0x1ac4b7(0x45f));
        _0x49584a[_0x1ac4b7(0x657)] = 'titanflow-modal-overlay', _0x49584a[_0x1ac4b7(0x417)] = _0x1ac4b7(0x583) + _0x95063 + _0x1ac4b7(0x1a8), document[_0x1ac4b7(0x4c5)]['appendChild'](_0x49584a);
        const _0x28f104 = _0x49584a[_0x1ac4b7(0x667)]('.titanflow-modal-content');
        setTimeout(() => {
          const _0x486154 = _0x1ac4b7;
          _0x49584a[_0x486154(0x39e)]['opacity'] = '1', _0x28f104[_0x486154(0x39e)][_0x486154(0x102)] = _0x486154(0x19b);
        }, 0xa);
        const _0x2890bc = () => {
          const _0x489b26 = _0x1ac4b7;
          _0x49584a[_0x489b26(0x39e)][_0x489b26(0x496)] = '0', _0x28f104[_0x489b26(0x39e)]['transform'] = _0x489b26(0x10f), setTimeout(() => {
            const _0x756a23 = _0x489b26;
            if (document[_0x756a23(0x4c5)][_0x756a23(0xfd)](_0x49584a)) document[_0x756a23(0x4c5)][_0x756a23(0x1d5)](_0x49584a);
          }, 0x12c);
        };
        _0x49584a[_0x1ac4b7(0x667)](_0x1ac4b7(0x4a2))[_0x1ac4b7(0x424)] = _0x2890bc, _0x49584a[_0x1ac4b7(0x5fc)]('click', _0x4f0261 => {
          if (_0x4f0261['target'] === _0x49584a) _0x2890bc();
        });
      }

      function _0x474a0b() {
        const _0x5894f4 = _0x4b5828;
        document[_0x5894f4(0x5fc)](_0x5894f4(0x636), _0x587a19 => {
          const _0x44f4ea = _0x5894f4
            , _0x2f19dc = document[_0x44f4ea(0x405)](_0x44f4ea(0x5d2));
          if (!_0x2f19dc || _0x2f19dc[_0x44f4ea(0x39e)][_0x44f4ea(0x258)] === _0x44f4ea(0x24f)) return;
          const _0x442081 = document[_0x44f4ea(0x363)]['tagName'];
          if (_0x442081 === _0x44f4ea(0x44c) || _0x442081 === _0x44f4ea(0x24a)) return;
          if (_0x587a19[_0x44f4ea(0x45b)] || _0x587a19[_0x44f4ea(0x218)] || _0x587a19[_0x44f4ea(0x5f4)] || _0x587a19[_0x44f4ea(0x43f)]) return;
          const _0x3f092e = _0x587a19[_0x44f4ea(0x4b9)][_0x44f4ea(0x483)]()
            , _0x1547f1 = document[_0x44f4ea(0x405)]('tab-btn-configuracao')?.[_0x44f4ea(0x190)][_0x44f4ea(0xfd)](_0x44f4ea(0x428));
          switch (_0x3f092e) {
          case '1':
            document[_0x44f4ea(0x405)](_0x44f4ea(0x106))?.['click']();
            break;
          case '2':
            document[_0x44f4ea(0x405)](_0x44f4ea(0x2da))?.['click']();
            break;
          case '3':
            document[_0x44f4ea(0x405)](_0x44f4ea(0x3bf))?.['click']();
            break;
          case 'c':
            if (_0x1547f1) document[_0x44f4ea(0x405)](_0x44f4ea(0x648))?.[_0x44f4ea(0x338)]();
            break;
          case 'x':
            if (_0x1547f1) document[_0x44f4ea(0x405)](_0x44f4ea(0x557))?.[_0x44f4ea(0x338)]();
            break;
          }
        });
      }

      function _0x3e4ed3(_0x47fef2) {
        const _0x5ecf52 = _0x4b5828;
        _0x47fef2[_0x5ecf52(0x417)] = '';
        const _0x4e522a = (_0x2c81c0, _0x1bc89d, _0x54b701) => {
            const _0x315fc2 = _0x5ecf52
              , _0x4d9eca = document['createElement']('select');
            return _0x4d9eca['id'] = _0x315fc2(0x5df) + _0x2c81c0, _0x4d9eca[_0x315fc2(0x417)] = '<option\x20value=\x22\x22>--\x20' + _0x54b701 + _0x315fc2(0x43c) + _0x1bc89d[_0x315fc2(0x113)](_0x463b2a => _0x315fc2(0x300) + (_0x463b2a['v'] || _0x463b2a['id']) + '\x22>' + (_0x463b2a['t'] || _0x463b2a[_0x315fc2(0x4e9)]) + _0x315fc2(0x64f))[_0x315fc2(0x42f)](''), _0x4d9eca[_0x315fc2(0x27a)] = _0x39afb0, _0x4d9eca;
          }
          , _0x4386c0 = _0x5ebf74 => {
            const _0x22b752 = _0x5ecf52
              , _0x3176dd = document[_0x22b752(0x4a9)](_0x22b752(0x45f));
            _0x3176dd['className'] = 'titanflow-esp-linha';
            const _0x3e2074 = _0x4e522a(_0x22b752(0x38e) + _0x5ebf74, _0x369381[_0x22b752(0x222)], _0x22b752(0x389))
              , _0x4ca604 = document[_0x22b752(0x4a9)](_0x22b752(0x3d9));
            _0x4ca604['type'] = _0x22b752(0x4fe), _0x4ca604['id'] = _0x22b752(0x100) + _0x5ebf74, _0x4ca604[_0x22b752(0x41d)] = 'Rec.', _0x4ca604['min'] = '0', _0x4ca604[_0x22b752(0x4e8)] = !![], _0x4ca604['oninput'] = _0x39afb0;
            const _0x5df483 = document['createElement'](_0x22b752(0x3d9));
            _0x5df483[_0x22b752(0x312)] = _0x22b752(0x4fe), _0x5df483['id'] = _0x22b752(0x54a) + _0x5ebf74, _0x5df483[_0x22b752(0x41d)] = 'HH', _0x5df483[_0x22b752(0x54f)] = '0', _0x5df483[_0x22b752(0x4e8)] = !![], _0x5df483[_0x22b752(0x269)] = _0x39afb0;
            const _0x56bdab = document[_0x22b752(0x4a9)]('input');
            _0x56bdab[_0x22b752(0x312)] = _0x22b752(0x4fe), _0x56bdab['id'] = _0x22b752(0x2e0) + _0x5ebf74, _0x56bdab[_0x22b752(0x41d)] = _0x22b752(0x5c2), _0x56bdab[_0x22b752(0x4e8)] = !![];
            const _0x3b2f3d = () => {
              const _0x42fc5d = _0x22b752
                , _0x4fa813 = parseInt(_0x4ca604[_0x42fc5d(0x554)]) || 0x0
                , _0x103d47 = parseInt(_0x5df483['value']) || 0x0;
              _0x56bdab[_0x42fc5d(0x554)] = _0x4fa813 * _0x103d47;
            };
            return _0x3e2074['addEventListener'](_0x22b752(0x429), () => {
              const _0x1ab75a = _0x22b752
                , _0x1b844b = _0x3e2074[_0x1ab75a(0x554)] !== '';
              _0x4ca604[_0x1ab75a(0x4e8)] = !_0x1b844b, _0x5df483[_0x1ab75a(0x4e8)] = !_0x1b844b, !_0x1b844b && (_0x4ca604[_0x1ab75a(0x554)] = '', _0x5df483['value'] = ''), _0x3b2f3d(), _0x237199();
            }), _0x4ca604[_0x22b752(0x5fc)](_0x22b752(0x3d9), _0x3b2f3d), _0x5df483[_0x22b752(0x5fc)]('input', _0x3b2f3d), _0x3176dd[_0x22b752(0x417)] = '<label>Especialidade\x20' + _0x5ebf74 + _0x22b752(0x264), _0x3176dd[_0x22b752(0x2d3)](_0x3e2074, _0x4ca604, _0x5df483, _0x56bdab), _0x3176dd;
          }
          , _0x237199 = () => {
            const _0x3c23f8 = _0x5ecf52
              , _0x1a12d4 = document[_0x3c23f8(0x405)](_0x3c23f8(0x310));
            let _0x436cf6 = ![];
            for (let _0x1c9a48 = 0x1; _0x1c9a48 <= 0x4; _0x1c9a48++) {
              const _0x389fe8 = document['getElementById'](_0x3c23f8(0x2cd) + _0x1c9a48);
              if (_0x389fe8 && _0x389fe8[_0x3c23f8(0x554)] === '14') {
                _0x436cf6 = !![];
                break;
              }
            }
            _0x1a12d4[_0x3c23f8(0x4e8)] = !_0x436cf6;
            if (!_0x436cf6) _0x1a12d4[_0x3c23f8(0x554)] = '';
            _0x39afb0();
          }
          , _0x499460 = document[_0x5ecf52(0x4a9)]('div');
        _0x499460[_0x5ecf52(0x657)] = _0x5ecf52(0x59a), _0x499460[_0x5ecf52(0x417)] = _0x5ecf52(0x436), _0x47fef2[_0x5ecf52(0x5a0)](_0x499460);
        const _0xbaee44 = document['getElementById'](_0x5ecf52(0x5b4));
        _0xbaee44[_0x5ecf52(0x424)] = _0x2b92f2, _0xbaee44[_0x5ecf52(0x5fc)](_0x5ecf52(0x53d), () => {
          const _0x9c1b6 = _0x5ecf52;
          _0xbaee44[_0x9c1b6(0x39e)][_0x9c1b6(0x102)] = _0x9c1b6(0x5d6), _0xbaee44[_0x9c1b6(0x39e)][_0x9c1b6(0x5fd)] = 'brightness(110%)', _0xbaee44[_0x9c1b6(0x39e)][_0x9c1b6(0x568)] = _0x9c1b6(0x2a3);
        }), _0xbaee44[_0x5ecf52(0x5fc)](_0x5ecf52(0x4df), () => {
          const _0x26b1ae = _0x5ecf52;
          _0xbaee44[_0x26b1ae(0x39e)][_0x26b1ae(0x102)] = _0x26b1ae(0x37b), _0xbaee44[_0x26b1ae(0x39e)][_0x26b1ae(0x5fd)] = _0x26b1ae(0x161), _0xbaee44['style'][_0x26b1ae(0x568)] = _0x26b1ae(0x2c9);
        }), _0xbaee44['addEventListener'](_0x5ecf52(0x109), () => {
          const _0x1dcd65 = _0x5ecf52;
          _0xbaee44[_0x1dcd65(0x39e)]['transform'] = _0x1dcd65(0x3c0), _0xbaee44[_0x1dcd65(0x39e)][_0x1dcd65(0x568)] = _0x1dcd65(0x24f);
        }), _0xbaee44['addEventListener'](_0x5ecf52(0x2f1), () => {
          const _0x254dfb = _0x5ecf52;
          _0xbaee44[_0x254dfb(0x225)](':hover') && (_0xbaee44['style']['transform'] = _0x254dfb(0x5d6));
        }), document[_0x5ecf52(0x405)](_0x5ecf52(0x48d))['oninput'] = _0x39afb0, document[_0x5ecf52(0x405)](_0x5ecf52(0x63b))[_0x5ecf52(0x269)] = _0x39afb0, _0x499460[_0x5ecf52(0x667)](_0x5ecf52(0x5a2))['insertAdjacentElement'](_0x5ecf52(0x696), _0x4e522a(_0x5ecf52(0x1e4), _0x369381[_0x5ecf52(0x684)], _0x5ecf52(0x111))), _0x499460[_0x5ecf52(0x667)](_0x5ecf52(0x1bd))['insertAdjacentElement'](_0x5ecf52(0x696), _0x4e522a('key__talleres__id', _0x369381[_0x5ecf52(0x5e1)], 'Selecione\x20a\x20Oficina'));
        const _0x18bbc9 = _0x4e522a('dummy_cat', Object[_0x5ecf52(0x3cb)](_0x57a46a)[_0x5ecf52(0x113)](([_0x1a098d, _0x1658ce]) => ({
          'id': _0x1a098d
          , 'nome': _0x1658ce['nome']
        })), _0x5ecf52(0x382));
        _0x499460[_0x5ecf52(0x667)](_0x5ecf52(0x4a3))[_0x5ecf52(0x68f)](_0x5ecf52(0x696), _0x18bbc9);
        const _0x345d94 = _0x4e522a('key__equipos_clases__id', [], _0x5ecf52(0x605));
        _0x345d94[_0x5ecf52(0x4e8)] = !![], _0x499460[_0x5ecf52(0x667)](_0x5ecf52(0x172))[_0x5ecf52(0x68f)](_0x5ecf52(0x696), _0x345d94), _0x499460[_0x5ecf52(0x667)](_0x5ecf52(0x33f))[_0x5ecf52(0x68f)](_0x5ecf52(0x696), _0x4e522a(_0x5ecf52(0x5c5), _0x369381[_0x5ecf52(0x509)], _0x5ecf52(0x547)));
        const _0x415622 = _0x4e522a(_0x5ecf52(0x3ec), _0x369381[_0x5ecf52(0x66e)], _0x5ecf52(0x28d));
        _0x415622['disabled'] = !![], _0x499460['querySelector'](_0x5ecf52(0x4ef))[_0x5ecf52(0x68f)](_0x5ecf52(0x696), _0x415622), _0x18bbc9[_0x5ecf52(0x5fc)]('change', () => {
          const _0x36bd16 = _0x5ecf52
            , _0x55dfd1 = _0x18bbc9['value'];
          _0x345d94[_0x36bd16(0x417)] = '<option\x20value=\x22\x22>--\x20Selecione\x20a\x20Classe\x20--</option>', _0x55dfd1 && _0x57a46a[_0x55dfd1] ? (_0x345d94[_0x36bd16(0x417)] += _0x57a46a[_0x55dfd1][_0x36bd16(0x491)][_0x36bd16(0x113)](_0x5eedf2 => _0x36bd16(0x300) + _0x5eedf2['id'] + '\x22>' + _0x5eedf2[_0x36bd16(0x4e9)] + _0x36bd16(0x64f))['join'](''), _0x345d94[_0x36bd16(0x4e8)] = ![]) : _0x345d94['disabled'] = !![];
        });
        const _0x111d26 = _0x499460['querySelector'](_0x5ecf52(0x607));
        for (let _0x107c47 = 0x1; _0x107c47 <= 0x4; _0x107c47++) {
          _0x111d26[_0x5ecf52(0x5a0)](_0x4386c0(_0x107c47));
        }
        const _0x1aa11d = _0x499460['querySelector'](_0x5ecf52(0x4c3));
        _0x1aa11d[_0x5ecf52(0x5fc)](_0x5ecf52(0x3d9), () => {
          const _0x29c58e = _0x5ecf52;
          _0x1aa11d['value'] = _0x1aa11d['value'][_0x29c58e(0x2ee)](/\D/g, '');
        });
        const _0x1ecc30 = document[_0x5ecf52(0x4a9)](_0x5ecf52(0x45f));
        _0x1ecc30['className'] = 'titanflow-acao-container\x20titanflow-full-width';
        const _0x454c4e = document['createElement']('button');
        _0x454c4e['id'] = _0x5ecf52(0x101), _0x454c4e[_0x5ecf52(0x417)] = '<span\x20class=\x22btn-text\x22>✅\x20Criar\x20Plano</span><span\x20class=\x22btn-progress-fill\x22></span>', _0x454c4e[_0x5ecf52(0x657)] = _0x5ecf52(0x213), Object[_0x5ecf52(0x48a)](_0x454c4e['style'], {
          'backgroundColor': _0x5ecf52(0x155)
          , 'color': _0x5ecf52(0x56f)
          , 'border': 'none'
          , 'borderRadius': _0x5ecf52(0x596)
          , 'fontWeight': _0x5ecf52(0x39b)
          , 'transition': _0x5ecf52(0x4f8)
          , 'boxShadow': _0x5ecf52(0x2c9)
          , 'flexGrow': '1'
          , 'padding': _0x5ecf52(0x642)
          , 'fontSize': _0x5ecf52(0x62b)
          , 'cursor': _0x5ecf52(0x226)
        }), _0x454c4e['addEventListener'](_0x5ecf52(0x53d), () => {
          const _0x5492a5 = _0x5ecf52;
          !_0x454c4e['disabled'] && (_0x454c4e[_0x5492a5(0x39e)][_0x5492a5(0x102)] = _0x5492a5(0x5d6), _0x454c4e[_0x5492a5(0x39e)][_0x5492a5(0x5fd)] = 'brightness(110%)', _0x454c4e[_0x5492a5(0x39e)]['boxShadow'] = _0x5492a5(0x14a));
        }), _0x454c4e[_0x5ecf52(0x5fc)](_0x5ecf52(0x4df), () => {
          const _0x4487d6 = _0x5ecf52;
          !_0x454c4e['disabled'] && (_0x454c4e[_0x4487d6(0x39e)][_0x4487d6(0x102)] = _0x4487d6(0x37b), _0x454c4e[_0x4487d6(0x39e)]['filter'] = _0x4487d6(0x161), _0x454c4e['style']['boxShadow'] = _0x4487d6(0x2c9));
        });
        const _0x389b1d = document[_0x5ecf52(0x4a9)]('div');
        _0x389b1d[_0x5ecf52(0x657)] = 'custom-checkbox-container', _0x389b1d[_0x5ecf52(0x417)] = '\x0a\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22titanflow-criar-varios-check\x22\x20title=\x22Criar\x20vários\x20planos\x20em\x20sequência\x22>\x0a\x20\x20\x20\x20<label\x20for=\x22titanflow-criar-varios-check\x22\x20class=\x22checkbox-label\x22></label>\x0a\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22titanflow-criar-varios-qtd\x22\x20value=\x221\x22\x20min=\x221\x22\x20max=\x22999\x22\x20disabled>\x0a', _0x1ecc30['append'](_0x454c4e, _0x389b1d), _0x499460[_0x5ecf52(0x5a0)](_0x1ecc30);
        const _0x540d8e = _0x1ecc30[_0x5ecf52(0x667)]('#titanflow-criar-varios-check')
          , _0x502212 = _0x1ecc30[_0x5ecf52(0x667)](_0x5ecf52(0x4bd))
          , _0x1b0c38 = _0x454c4e[_0x5ecf52(0x667)](_0x5ecf52(0x210));
        _0x540d8e[_0x5ecf52(0x27a)] = () => {
          const _0x4983ec = _0x5ecf52;
          _0x502212[_0x4983ec(0x4e8)] = !_0x540d8e[_0x4983ec(0x660)], _0x1b0c38[_0x4983ec(0x6a2)] = _0x540d8e[_0x4983ec(0x660)] ? _0x4983ec(0x5ac) : _0x4983ec(0x68c);
        }, _0x454c4e[_0x5ecf52(0x424)] = () => {
          const _0x30feb3 = _0x5ecf52
            , _0x55f650 = document[_0x30feb3(0x667)](_0x30feb3(0x388));
          _0x51ee14(_0x454c4e, _0x55f650, _0x3a59e5);
        };

        function _0x48c581() {
          const _0x575e14 = _0x5ecf52
            , _0x25829f = localStorage[_0x575e14(0x1fb)](_0x4f98d9);
          if (!_0x25829f) return;
          const _0x128035 = JSON[_0x575e14(0x18c)](_0x25829f);
          document[_0x575e14(0x405)](_0x575e14(0x48d))[_0x575e14(0x554)] = _0x128035['idNumero'] || '', document[_0x575e14(0x405)](_0x575e14(0x63b))[_0x575e14(0x554)] = _0x128035[_0x575e14(0x4e9)] || '', document[_0x575e14(0x405)]('titanflow-key__trabajos_tipos__id')[_0x575e14(0x554)] = _0x128035[_0x575e14(0x684)] || '', document[_0x575e14(0x405)](_0x575e14(0x51b))[_0x575e14(0x554)] = _0x128035[_0x575e14(0x5e1)] || '', document[_0x575e14(0x405)](_0x575e14(0x27b))[_0x575e14(0x554)] = _0x128035[_0x575e14(0x509)] || '';
          const _0x3c2644 = document[_0x575e14(0x405)](_0x575e14(0x151));
          _0x3c2644[_0x575e14(0x554)] = _0x128035[_0x575e14(0x5e8)] || '', _0x3c2644['dispatchEvent'](new Event(_0x575e14(0x429))), setTimeout(() => {
            const _0x5eb029 = _0x575e14;
            document[_0x5eb029(0x405)](_0x5eb029(0x1d8))[_0x5eb029(0x554)] = _0x128035[_0x5eb029(0x4d9)] || '';
          }, 0x32);
          if (_0x128035[_0x575e14(0x406)])
            for (let _0x3ac0fa = 0x0; _0x3ac0fa < 0x4; _0x3ac0fa++) {
              const _0x5b95cb = _0x128035['especialidades'][_0x3ac0fa];
              if (_0x5b95cb) {
                const _0x341801 = document['getElementById']('titanflow-esp-id-' + (_0x3ac0fa + 0x1));
                _0x341801[_0x575e14(0x554)] = _0x5b95cb['id'] || '', _0x341801['dispatchEvent'](new Event('change')), document['getElementById'](_0x575e14(0x100) + (_0x3ac0fa + 0x1))[_0x575e14(0x554)] = _0x5b95cb[_0x575e14(0x272)] || '', document[_0x575e14(0x405)](_0x575e14(0x54a) + (_0x3ac0fa + 0x1))['value'] = _0x5b95cb['hh'] || '', _0x341801[_0x575e14(0x410)](new Event(_0x575e14(0x429)));
              }
            }
          setTimeout(() => {
            const _0x40c648 = _0x575e14;
            _0x237199(), document[_0x40c648(0x405)](_0x40c648(0x310))[_0x40c648(0x554)] = _0x128035[_0x40c648(0x66e)] || '';
          }, 0x64);
        }
        _0x48c581();
      }

      function _0x1cd725(_0x15bc84, _0x1d17a6, _0xa3631, _0x2258d9) {
        return new Promise((_0x4574af, _0x3c691f) => {
          const _0x4bc3d4 = _0x3bcd
            , _0x2ef2e4 = document[_0x4bc3d4(0x4a9)]('iframe');
          _0x2ef2e4[_0x4bc3d4(0x39e)][_0x4bc3d4(0x258)] = 'none', _0x2ef2e4[_0x4bc3d4(0x575)] = 'iframe-criacao-' + Date[_0x4bc3d4(0x437)](), document[_0x4bc3d4(0x4c5)][_0x4bc3d4(0x5a0)](_0x2ef2e4);
          const _0x4a6a88 = () => {
              const _0x1fcc42 = _0x4bc3d4;
              if (document[_0x1fcc42(0x4c5)][_0x1fcc42(0xfd)](_0x2ef2e4)) document['body'][_0x1fcc42(0x1d5)](_0x2ef2e4);
              if (document[_0x1fcc42(0x4c5)][_0x1fcc42(0xfd)](_0x36be9d)) document['body'][_0x1fcc42(0x1d5)](_0x36be9d);
            }
            , _0x36be9d = document[_0x4bc3d4(0x4a9)](_0x4bc3d4(0x5e6));
          _0x36be9d['method'] = _0x4bc3d4(0x148), _0x36be9d['action'] = '/albatros/actions/adm/abm.php?SESID=' + _0x2012f5(), _0x36be9d[_0x4bc3d4(0x354)] = _0x2ef2e4[_0x4bc3d4(0x575)];
          const _0x46578f = (_0x39f286, _0x170874) => {
            const _0x3c7d68 = _0x4bc3d4
              , _0x447626 = document[_0x3c7d68(0x4a9)](_0x3c7d68(0x3d9));
            _0x447626[_0x3c7d68(0x312)] = 'hidden', _0x447626[_0x3c7d68(0x575)] = _0x39f286, _0x447626[_0x3c7d68(0x554)] = _0x170874, _0x36be9d['appendChild'](_0x447626);
          };
          _0x46578f(_0x4bc3d4(0x427), 'titan_planes_de_mantenimiento'), _0x46578f(_0x4bc3d4(0x5ca), 'a'), _0x46578f(_0x4bc3d4(0x1ec), _0x4bc3d4(0x528) + String(_0x1d17a6)['padStart'](0x3, '0')), _0x46578f(_0x4bc3d4(0x294), _0xa3631 > 0x1 ? _0x15bc84[_0x4bc3d4(0x4e9)] + '\x20(' + (_0x2258d9 + 0x1) + '/' + _0xa3631 + ')' : _0x15bc84[_0x4bc3d4(0x4e9)]);
          const _0x112120 = document[_0x4bc3d4(0x405)](_0x4bc3d4(0x4d3))?.[_0x4bc3d4(0x554)] || '2957';
          _0x46578f(_0x4bc3d4(0x4d3), _0x112120);
          const _0x403b21 = new Date()
            , _0x1a7ed6 = String(_0x403b21[_0x4bc3d4(0x400)]())[_0x4bc3d4(0x44e)](0x2, '0')
            , _0x27cdb8 = String(_0x403b21[_0x4bc3d4(0x5e9)]() + 0x1)['padStart'](0x2, '0')
            , _0x5585fe = _0x403b21[_0x4bc3d4(0x5c7)]()
            , _0x310546 = _0x1a7ed6 + '-' + _0x27cdb8 + '-' + _0x5585fe;
          _0x46578f(_0x4bc3d4(0x29f), _0x310546), _0x46578f('key__trabajos_tipos__id', _0x15bc84[_0x4bc3d4(0x684)]), _0x46578f(_0x4bc3d4(0x318), _0x15bc84[_0x4bc3d4(0x5e1)]), _0x46578f(_0x4bc3d4(0x4c7), _0x15bc84[_0x4bc3d4(0x4d9)]), _0x46578f(_0x4bc3d4(0x5c5), _0x15bc84[_0x4bc3d4(0x509)]);
          _0x15bc84[_0x4bc3d4(0x66e)] && _0x46578f('key__empresas__id', _0x15bc84[_0x4bc3d4(0x66e)]);
          _0x15bc84[_0x4bc3d4(0x406)][_0x4bc3d4(0x539)]((_0x5c5f73, _0x339de8) => {
            const _0x19e7c2 = _0x4bc3d4
              , _0x21b8f4 = _0x339de8 + 0x1;
            _0x46578f(_0x19e7c2(0x1ac) + _0x21b8f4, _0x5c5f73['id']), _0x46578f(_0x19e7c2(0x678) + _0x21b8f4 + '_rrhh_cantidad', _0x5c5f73['rec']), _0x46578f('especialidad' + _0x21b8f4 + _0x19e7c2(0x416), _0x5c5f73['hh']);
          }), [_0x4bc3d4(0x5bb), 'materiales', _0x4bc3d4(0x17c), _0x4bc3d4(0x631), _0x4bc3d4(0x2df), _0x4bc3d4(0x32b), _0x4bc3d4(0x336)]['forEach'](_0xf3584b => {
            const _0x8d6332 = _0x4bc3d4;
            _0x46578f(_0xf3584b, _0x8d6332(0x366));
          }), _0x46578f(_0x4bc3d4(0x67c), 'Salve'), document[_0x4bc3d4(0x4c5)][_0x4bc3d4(0x5a0)](_0x36be9d);
          const _0x51cbce = setTimeout(() => {
            const _0x39b5aa = _0x4bc3d4;
            _0x4a6a88(), _0x3c691f(new Error(_0x39b5aa(0x587) + _0x1d17a6 + '.'));
          }, 0x3a98);
          _0x2ef2e4[_0x4bc3d4(0x357)] = () => {
            clearTimeout(_0x51cbce), _0x4a6a88(), _0x4574af();
          }, _0x2ef2e4[_0x4bc3d4(0x176)] = _0x29bcb3 => {
            clearTimeout(_0x51cbce), _0x4a6a88(), _0x3c691f(new Error('Erro\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe\x20para\x20o\x20plano\x20' + _0x1d17a6 + '.'));
          }, _0x36be9d['submit']();
        });
      }
      async function _0x3a59e5(_0x1a7762) {
        const _0x60cd88 = _0x4b5828
          , _0x2ff545 = {
            'titanflow-tag-numero': _0x60cd88(0x5f6)
            , 'titanflow-nombre': 'Nome\x20do\x20Plano'
            , 'titanflow-key__trabajos_tipos__id': _0x60cd88(0x38b)
            , 'titanflow-key__talleres__id': _0x60cd88(0x571)
            , 'titanflow-dummy_cat': _0x60cd88(0x2ae)
            , 'titanflow-key__equipos_clases__id': _0x60cd88(0x459)
            , 'titanflow-key__planes_de_mantenimiento_equipos_condiciones__id': _0x60cd88(0x2c8)
          };
        for (const _0x39c167 in _0x2ff545) {
          if (!document[_0x60cd88(0x405)](_0x39c167)[_0x60cd88(0x554)]) {
            _0x2786ff(_0x60cd88(0x588) + _0x2ff545[_0x39c167] + _0x60cd88(0x57b), _0x60cd88(0x5fb));
            throw new Error('Campo\x20obrigatório\x20não\x20preenchido.');
          }
        }
        if (!document[_0x60cd88(0x405)](_0x60cd88(0x34a))['value']) {
          _0x2786ff('Erro:\x20Pelo\x20menos\x20a\x20\x22Especialidade\x201\x22\x20deve\x20ser\x20selecionada.', _0x60cd88(0x5fb));
          throw new Error('Especialidade\x201\x20não\x20selecionada.');
        }
        botaoClicado['disabled'] = !![];
        const _0x17f743 = {
          'nome': document[_0x60cd88(0x405)](_0x60cd88(0x63b))['value']
          , 'tipoTrabalho': document['getElementById']('titanflow-key__trabajos_tipos__id')['value']
          , 'taller': document['getElementById']('titanflow-key__talleres__id')['value']
          , 'classe': document['getElementById'](_0x60cd88(0x1d8))['value']
          , 'condicao': document['getElementById'](_0x60cd88(0x27b))[_0x60cd88(0x554)]
          , 'contratista': document[_0x60cd88(0x405)](_0x60cd88(0x310))[_0x60cd88(0x554)]
          , 'especialidades': []
        };
        for (let _0x512bc0 = 0x1; _0x512bc0 <= 0x4; _0x512bc0++) {
          const _0xb18535 = document['getElementById']('titanflow-esp-id-' + _0x512bc0)[_0x60cd88(0x554)];
          _0xb18535 && _0x17f743[_0x60cd88(0x406)][_0x60cd88(0x2d4)]({
            'id': _0xb18535
            , 'rec': document['getElementById'](_0x60cd88(0x100) + _0x512bc0)[_0x60cd88(0x554)] || '0'
            , 'hh': document[_0x60cd88(0x405)]('titanflow-esp-hh-' + _0x512bc0)['value'] || '0'
          });
        }
        console[_0x60cd88(0x5ce)](_0x60cd88(0x635), _0x17f743);
        const _0x868d24 = parseInt(document[_0x60cd88(0x405)](_0x60cd88(0x48d))['value'], 0xa)
          , _0x396c11 = document[_0x60cd88(0x405)](_0x60cd88(0x2ce))[_0x60cd88(0x660)] ? parseInt(document['getElementById'](_0x60cd88(0x585))['value'], 0xa) : 0x1;
        let _0x25a2ed = 0x0;
        _0x1241ed(_0x60cd88(0x5b1) + _0x396c11 + _0x60cd88(0x1d9));
        for (let _0x438aeb = 0x0; _0x438aeb < _0x396c11; _0x438aeb++) {
          const _0x2df437 = _0x868d24 + _0x438aeb
            , _0x28261a = Math[_0x60cd88(0x2f6)]((_0x438aeb + 0x1) / _0x396c11 * 0x64);
          _0x1241ed(_0x60cd88(0x250) + (_0x438aeb + 0x1) + _0x60cd88(0x457) + _0x396c11 + '\x20(' + _0x28261a + '%)...');
          try {
            await _0x1cd725(_0x17f743, _0x2df437, _0x396c11, _0x438aeb);
          } catch (_0x465498) {
            _0x25a2ed++, console[_0x60cd88(0x5fb)](_0x60cd88(0x166) + _0x2df437 + ':', _0x465498), _0x2786ff('Erro\x20ao\x20criar\x20plano\x20' + _0x2df437, 'error');
          }
          if (_0x1a7762) _0x1a7762((_0x438aeb + 0x1) / _0x396c11);
        }
        const _0x26a075 = _0x60cd88(0x65c) + (_0x396c11 - _0x25a2ed) + _0x60cd88(0x266) + _0x25a2ed + _0x60cd88(0x173);
        _0x1241ed(_0x26a075, 0x1388), botaoClicado[_0x60cd88(0x4e8)] = ![];
        if (_0x25a2ed === 0x0 && _0x396c11 > 0x0) setTimeout(() => location[_0x60cd88(0x683)](), 0x5dc);
        else _0x25a2ed > 0x0 && _0x2786ff(_0x60cd88(0x681), _0x60cd88(0x65a), 0x1770);
      }
      async function _0x12f55c(_0x44c9d3 = ![]) {
        const _0x835af = 'titanflow_session_planos'
          , _0x21b302 = _0x2012f5()
          , _0x44feaf = '/albatros/admin.php?SESID=' + _0x21b302 + '&seccion=titan_planes_de_mantenimiento&show=mrt&eID=key__planes_de_mantenimiento__id&filtro=';
        return new Promise((_0x5a0a0d, _0x3dd477) => {
          const _0x39ee10 = _0x3bcd;
          GM_xmlhttpRequest({
            'method': _0x39ee10(0x148)
            , 'url': _0x44feaf
            , 'data': 'tag=TOIL-MNT-&bAceptar=Aplicar+filtro'
            , 'headers': {
              'Content-Type': _0x39ee10(0x433)
            }
            , 'overrideMimeType': _0x39ee10(0x192)
            , 'onload': function (_0x180bd7) {
              const _0xaa627e = _0x39ee10;
              try {
                const _0x2778c4 = new DOMParser()
                  , _0x5b676d = _0x2778c4[_0xaa627e(0x4a4)](_0x180bd7['responseText'], 'text/html')
                  , _0x2794fa = _0x5b676d[_0xaa627e(0x143)](_0xaa627e(0x21e))
                  , _0x5a70ae = []
                  , _0x1f733d = /campoPadre\.value='(\d+)'/;
                _0x2794fa[_0xaa627e(0x539)](_0x1effe3 => {
                  const _0x197b7c = _0xaa627e
                    , _0x1b4e29 = _0x1effe3[_0x197b7c(0x667)](_0x197b7c(0x537));
                  if (_0x1b4e29) {
                    const _0x220adf = _0x1b4e29[_0x197b7c(0x2bd)]['match'](_0x1f733d);
                    if (_0x220adf && _0x220adf[0x1]) {
                      const _0x5330f8 = _0x220adf[0x1]
                        , _0x30020b = _0x1effe3[_0x197b7c(0x143)]('td')
                        , _0x47853b = _0x30020b[0x0]?.[_0x197b7c(0x6a2)][_0x197b7c(0x247)]() || ''
                        , _0x5ec487 = _0x30020b[0x1]?.[_0x197b7c(0x6a2)][_0x197b7c(0x247)]() || '';
                      _0x5a70ae['push']({
                        'id': _0x5330f8
                        , 'tag': _0x47853b
                        , 'nome': _0x5ec487
                      });
                    }
                  }
                }), _0x27b91a = _0x5a70ae, sessionStorage[_0xaa627e(0x634)](_0x835af, JSON[_0xaa627e(0x1b4)](_0x5a70ae)), _0x5a0a0d();
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
          const _0x56acb4 = _0x3bcd
            , _0x2991d4 = _0x2012f5()
            , _0x2d1681 = _0x56acb4(0x283) + _0x2991d4 + _0x56acb4(0x5ea)
            , _0x57bb36 = document[_0x56acb4(0x4a9)]('iframe');
          _0x57bb36[_0x56acb4(0x39e)][_0x56acb4(0x258)] = _0x56acb4(0x24f);
          const _0x39adfc = () => document['body'][_0x56acb4(0xfd)](_0x57bb36) && document[_0x56acb4(0x4c5)][_0x56acb4(0x1d5)](_0x57bb36);
          _0x57bb36[_0x56acb4(0x357)] = () => {
            let _0x19a5e7 = 0x0;
            const _0x148e89 = 0x64
              , _0x35e822 = setInterval(() => {
                const _0x5aee16 = _0x3bcd;
                try {
                  _0x19a5e7++;
                  const _0x71d6a0 = _0x57bb36[_0x5aee16(0x306)]
                    , _0x44c274 = _0x71d6a0['getElementById'](_0x5aee16(0x227))
                    , _0x379c17 = _0x71d6a0[_0x5aee16(0x405)](_0x5aee16(0x67c));
                  if (_0x44c274 && _0x379c17) {
                    clearInterval(_0x35e822), console[_0x5aee16(0x5ce)](_0x5aee16(0x3e4)), _0x71d6a0['getElementById'](_0x5aee16(0x1d6))[_0x5aee16(0x554)] = _0x50990d['planoId'], _0x71d6a0[_0x5aee16(0x664)][_0x5aee16(0x44f)](_0x71d6a0['defaultView'][_0x5aee16(0x1f4)], _0x50990d[_0x5aee16(0x5db)], _0x71d6a0[_0x5aee16(0x405)](_0x5aee16(0x4b7))), _0x71d6a0['getElementById'](_0x5aee16(0x22b))[_0x5aee16(0x554)] = _0x50990d['equipamentoId'], _0x71d6a0[_0x5aee16(0x664)][_0x5aee16(0x44f)](_0x71d6a0['defaultView']['key__equipos__id_url'], _0x50990d[_0x5aee16(0x1db)], _0x71d6a0[_0x5aee16(0x405)]('key__equipos__id_result')), _0x71d6a0['getElementById'](_0x5aee16(0x326))[_0x5aee16(0x554)] = _0x50990d[_0x5aee16(0x493)], _0x379c17[_0x5aee16(0x338)](), setTimeout(() => {
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
          }, _0x57bb36[_0x56acb4(0x176)] = () => {
            _0x39adfc(), _0x4dbc12(new Error('Falha\x20ao\x20carregar\x20o\x20iframe\x20de\x20adição.'));
          }, document[_0x56acb4(0x4c5)][_0x56acb4(0x5a0)](_0x57bb36), _0x57bb36[_0x56acb4(0x465)] = _0x2d1681;
        });
      }
      async function _0x8bec5c(_0x2c75fd, _0x413640) {
        const _0x172169 = _0x4b5828
          , _0x42cf86 = new URLSearchParams(window[_0x172169(0x298)]['search'])
          , _0x54bae7 = _0x42cf86[_0x172169(0x47f)](_0x172169(0x656))
          , _0x564755 = _0x42cf86['get']('n1')
          , _0x3bcb52 = _0x42cf86[_0x172169(0x47f)]('n2')
          , _0x36ed16 = _0x42cf86['get']('in')
          , _0x107dee = _0x172169(0x283) + _0x54bae7 + '&n1=' + _0x564755 + _0x172169(0x383) + _0x3bcb52 + '&in=' + _0x36ed16 + '&seccion=titan_planes_programacion&op=m&subseccion=programar&id_reg=' + _0x2c75fd
          , _0x1271c3 = await _0x2630a5(_0x107dee)
          , _0x3c6309 = new FormData(_0x1271c3);
        for (const [_0x38c91f, _0x2f8720] of Object[_0x172169(0x3cb)](_0x413640)) {
          _0x3c6309[_0x172169(0x186)](_0x38c91f, _0x2f8720);
        }
        _0x3c6309[_0x172169(0x186)](_0x172169(0x328), _0x2c75fd);
        const _0x3fc4ec = _0x172169(0x24b) + _0x54bae7
          , _0x320157 = await fetch(_0x3fc4ec, {
            'method': _0x172169(0x148)
            , 'body': _0x3c6309
            , 'credentials': 'include'
          });
        if (!_0x320157['ok']) throw new Error('O\x20servidor\x20respondeu\x20com\x20o\x20status\x20' + _0x320157[_0x172169(0x5a9)]);
      }
      async function _0x342ee9(_0xf4c2f4, _0x4ba519) {
        const _0x2dcfc0 = _0x4b5828
          , _0x3f230d = new URLSearchParams(window['location']['search'])
          , _0x17a7a2 = _0x3f230d[_0x2dcfc0(0x47f)]('SESID')
          , _0x44d30f = _0x3f230d[_0x2dcfc0(0x47f)]('n1')
          , _0x351fcf = _0x3f230d['get']('n2')
          , _0x4a51a7 = _0x3f230d[_0x2dcfc0(0x47f)]('in')
          , _0x253444 = _0x2dcfc0(0x283) + _0x17a7a2 + _0x2dcfc0(0x508) + _0x44d30f + '&n2=' + _0x351fcf + _0x2dcfc0(0x58b) + _0x4a51a7 + '&seccion=titan_planes_programacion&show=accion&action=' + _0x4ba519 + _0x2dcfc0(0x279) + _0xf4c2f4
          , _0x437d68 = await fetch(_0x253444, {
            'credentials': 'include'
          });
        if (!_0x437d68['ok']) throw new Error('O\x20servidor\x20respondeu\x20com\x20o\x20status\x20' + _0x437d68[_0x2dcfc0(0x5a9)]);
      }
      const _0x598e3e = document[_0x4b5828(0x4a9)](_0x4b5828(0x45f));
      _0x598e3e['id'] = 'painel-planejamento', Object['assign'](_0x598e3e[_0x4b5828(0x39e)], {
        'position': _0x4b5828(0x698)
        , 'top': '40px'
        , 'left': _0x4b5828(0x63f)
        , 'width': _0x4b5828(0x655)
        , 'backgroundColor': '#f0f0f0'
        , 'border': _0x4b5828(0x2ea)
        , 'borderRadius': _0x4b5828(0x60c)
        , 'padding': _0x4b5828(0x17e)
        , 'zIndex': _0x4b5828(0x5bf)
        , 'boxShadow': _0x4b5828(0x4f5)
        , 'fontFamily': _0x4b5828(0x5ff)
      }), GM_addStyle(_0x4b5828(0x3c4)), _0x598e3e[_0x4b5828(0x417)] = _0x4b5828(0x67b) + GM_info[_0x4b5828(0x5ed)][_0x4b5828(0x325)] + _0x4b5828(0xfe), document[_0x4b5828(0x4c5)][_0x4b5828(0x5a0)](_0x598e3e);
      const _0xef5aa9 = document['createElement']('div');
      _0xef5aa9[_0x4b5828(0x417)] = _0x4b5828(0x261) + new Date()[_0x4b5828(0x5c7)](), Object['assign'](_0xef5aa9[_0x4b5828(0x39e)], {
        'fontSize': '11px'
        , 'color': _0x4b5828(0x3ac)
        , 'textAlign': _0x4b5828(0x500)
        , 'marginTop': '15px'
        , 'paddingTop': _0x4b5828(0x63f)
        , 'borderTop': _0x4b5828(0x1ab)
      }), _0x598e3e[_0x4b5828(0x5a0)](_0xef5aa9);
      const _0x31333f = _0x598e3e['querySelector']('#titanflow-tab-content')
        , _0x899236 = _0x598e3e[_0x4b5828(0x667)](_0x4b5828(0x2bf))
        , _0x538775 = _0x598e3e[_0x4b5828(0x667)]('#tab-btn-programacao')
        , _0x23ca39 = _0x598e3e['querySelector'](_0x4b5828(0x5ab));

      function _0x163373(_0x3294c3) {
        const _0x5eb016 = _0x4b5828;
        _0x3294c3[_0x5eb016(0x417)] = '';
        const _0x227811 = [{
            'v': ''
            , 't': _0x5eb016(0x2cf)
          }, {
            'v': '1'
            , 't': _0x5eb016(0x1fc)
          }, {
            'v': '2'
            , 't': _0x5eb016(0x231)
          }]
          , _0x1006aa = document[_0x5eb016(0x4a9)](_0x5eb016(0x45f));
        _0x1006aa['className'] = 'titanflow-grid-programacao', _0x1006aa[_0x5eb016(0x417)] = _0x5eb016(0x2c5) + _0x227811[_0x5eb016(0x113)](_0x454c56 => _0x5eb016(0x300) + _0x454c56['v'] + '\x22>' + _0x454c56['t'] + _0x5eb016(0x64f))[_0x5eb016(0x42f)]('') + _0x5eb016(0x15c), _0x3294c3[_0x5eb016(0x5a0)](_0x1006aa);
        const _0x5cda29 = document[_0x5eb016(0x4a9)](_0x5eb016(0x45f));
        _0x5cda29[_0x5eb016(0x657)] = _0x5eb016(0x1cf);
        const _0x111b9d = document[_0x5eb016(0x4a9)](_0x5eb016(0x5e3));
        _0x111b9d['id'] = _0x5eb016(0x34f), _0x111b9d[_0x5eb016(0x417)] = _0x5eb016(0x542), _0x111b9d[_0x5eb016(0x657)] = _0x5eb016(0x213), Object[_0x5eb016(0x48a)](_0x111b9d['style'], {
          'backgroundColor': _0x5eb016(0x31e)
          , 'color': _0x5eb016(0x56f)
          , 'border': 'none'
          , 'borderRadius': _0x5eb016(0x596)
          , 'fontWeight': _0x5eb016(0x39b)
          , 'transition': _0x5eb016(0x4f8)
          , 'boxShadow': _0x5eb016(0x2c9)
          , 'flexGrow': '1'
          , 'padding': _0x5eb016(0x642)
          , 'fontSize': _0x5eb016(0x62b)
          , 'cursor': _0x5eb016(0x226)
        }), _0x111b9d['addEventListener']('mouseenter', () => {
          const _0x3f2a06 = _0x5eb016;
          !_0x111b9d[_0x3f2a06(0x4e8)] && (_0x111b9d[_0x3f2a06(0x39e)][_0x3f2a06(0x102)] = _0x3f2a06(0x5d6), _0x111b9d[_0x3f2a06(0x39e)][_0x3f2a06(0x5fd)] = _0x3f2a06(0x319), _0x111b9d['style'][_0x3f2a06(0x568)] = '0\x204px\x2010px\x20rgba(0,0,0,0.25)');
        }), _0x111b9d[_0x5eb016(0x5fc)](_0x5eb016(0x4df), () => {
          const _0x1bcc47 = _0x5eb016;
          !_0x111b9d['disabled'] && (_0x111b9d[_0x1bcc47(0x39e)][_0x1bcc47(0x102)] = _0x1bcc47(0x37b), _0x111b9d[_0x1bcc47(0x39e)][_0x1bcc47(0x5fd)] = _0x1bcc47(0x161), _0x111b9d[_0x1bcc47(0x39e)][_0x1bcc47(0x568)] = _0x1bcc47(0x2c9));
        }), _0x111b9d[_0x5eb016(0x424)] = () => {
          const _0x443bb7 = _0x5cda29;
          _0x51ee14(_0x111b9d, _0x443bb7, _0x531b94);
        }, _0x5cda29[_0x5eb016(0x5a0)](_0x111b9d), _0x1006aa[_0x5eb016(0x5a0)](_0x5cda29), document[_0x5eb016(0x405)](_0x5eb016(0x270))['onclick'] = _0x28a1ef, document[_0x5eb016(0x405)](_0x5eb016(0x621))['onclick'] = async _0x5c1800 => {
          const _0x53003d = _0x5eb016
            , _0x421e62 = _0x5c1800['shiftKey']
            , _0x5b34fa = _0x5c1800[_0x53003d(0x354)];
          _0x5b34fa['disabled'] = !![], _0x5b34fa[_0x53003d(0x6a2)] = _0x53003d(0x553);
          try {
            await _0x12f55c(_0x421e62), _0x5b34fa[_0x53003d(0x6a2)] = 'Planos\x20Carregados';
          } catch (_0xca6011) {
            _0x2786ff('Falha\x20ao\x20carregar\x20planos.', 'error'), _0x5b34fa[_0x53003d(0x6a2)] = _0x53003d(0x2a1), _0x5b34fa[_0x53003d(0x4e8)] = ![];
          }
        }, document['getElementById']('titanflow-carregar-equipamentos')[_0x5eb016(0x424)] = async _0x536657 => {
          const _0x34f062 = _0x5eb016
            , _0x1f1d97 = _0x536657[_0x34f062(0x5f4)]
            , _0x129fa1 = _0x536657[_0x34f062(0x354)];
          _0x129fa1['disabled'] = !![], _0x129fa1[_0x34f062(0x6a2)] = _0x34f062(0x553);
          try {
            _0x34e176 = await _0x3a1f53(_0x1f1d97), _0x129fa1['textContent'] = _0x34f062(0x458);
          } catch (_0x30d442) {
            _0x2786ff(_0x34f062(0x443), _0x34f062(0x5fb)), _0x129fa1['textContent'] = 'Erro!\x20Tente\x20Novamente', _0x129fa1[_0x34f062(0x4e8)] = ![];
          }
        };
        const _0x1b9409 = (_0x431487, _0x485e3, _0x4bf2c2, _0x4882be, _0x14ea6d) => {
          const _0x41fcbc = _0x5eb016
            , _0x3c7023 = document[_0x41fcbc(0x405)](_0x431487)
            , _0x122cde = document[_0x41fcbc(0x405)](_0x485e3)
            , _0x2ccd1e = _0x4bf2c2 ? document[_0x41fcbc(0x405)](_0x4bf2c2) : null;
          _0x3c7023[_0x41fcbc(0x5fc)](_0x41fcbc(0x3d9), () => {
            const _0x1f43bf = _0x41fcbc;
            if (_0x2ccd1e) _0x2ccd1e[_0x1f43bf(0x554)] = '';
            const _0x37da8b = _0x3c7023[_0x1f43bf(0x554)][_0x1f43bf(0x483)]()[_0x1f43bf(0x247)]();
            _0x122cde[_0x1f43bf(0x417)] = '';
            if (_0x37da8b[_0x1f43bf(0x570)] < 0x2) {
              _0x122cde[_0x1f43bf(0x190)][_0x1f43bf(0x4be)](_0x1f43bf(0x391));
              return;
            }
            const _0x310728 = _0x4882be()
              , _0x295e12 = _0x310728['filter'](_0x5995c5 => _0x5995c5[_0x1f43bf(0x1ec)][_0x1f43bf(0x483)]()[_0x1f43bf(0x1c9)](_0x37da8b) || _0x5995c5[_0x1f43bf(0x4e9)][_0x1f43bf(0x483)]()['includes'](_0x37da8b))['slice'](0x0, 0xf);
            _0x295e12['length'] > 0x0 ? (_0x122cde[_0x1f43bf(0x190)][_0x1f43bf(0x5dc)]('show'), _0x295e12[_0x1f43bf(0x539)](_0x2a6c71 => {
              const _0x3de5a2 = _0x1f43bf
                , _0x45a7a7 = document[_0x3de5a2(0x4a9)](_0x3de5a2(0x45f));
              _0x45a7a7['innerHTML'] = _0x3de5a2(0x19d) + _0x2a6c71[_0x3de5a2(0x1ec)] + _0x3de5a2(0x2a4) + _0x2a6c71[_0x3de5a2(0x4e9)], _0x45a7a7[_0x3de5a2(0x424)] = () => {
                const _0x1af6a9 = _0x3de5a2;
                _0x14ea6d(_0x2a6c71), _0x122cde['innerHTML'] = '', _0x122cde[_0x1af6a9(0x190)][_0x1af6a9(0x4be)](_0x1af6a9(0x391));
              }, _0x122cde['appendChild'](_0x45a7a7);
            })) : _0x122cde[_0x1f43bf(0x190)][_0x1f43bf(0x4be)](_0x1f43bf(0x391));
          });
        };
        _0x1b9409('titanflow-prog-plan-busca', _0x5eb016(0x208), 'titanflow-prog-plan-id-selecionado', () => _0x27b91a, _0x23bb89 => {
          const _0x51ddeb = _0x5eb016;
          document[_0x51ddeb(0x405)](_0x51ddeb(0x420))['value'] = '[' + _0x23bb89[_0x51ddeb(0x1ec)] + ']\x20' + _0x23bb89[_0x51ddeb(0x4e9)], document[_0x51ddeb(0x405)](_0x51ddeb(0x322))[_0x51ddeb(0x554)] = _0x23bb89['id'];
        }), _0x1b9409('titanflow-prog-equip-busca', 'titanflow-prog-equip-resultados', null, () => _0x34e176, _0x468213), _0x2ee372 = _0x8615d0 => {
          const _0x2fe055 = _0x5eb016
            , _0x23d209 = document[_0x2fe055(0x405)](_0x2fe055(0x420))[_0x2fe055(0x215)]
            , _0x483e67 = document['getElementById'](_0x2fe055(0x577))['parentElement'];
          _0x23d209 && !_0x23d209[_0x2fe055(0xfd)](_0x8615d0[_0x2fe055(0x354)]) && document[_0x2fe055(0x405)](_0x2fe055(0x208))[_0x2fe055(0x190)][_0x2fe055(0x4be)](_0x2fe055(0x391)), _0x483e67 && !_0x483e67[_0x2fe055(0xfd)](_0x8615d0['target']) && document[_0x2fe055(0x405)]('titanflow-prog-equip-resultados')[_0x2fe055(0x190)][_0x2fe055(0x4be)](_0x2fe055(0x391));
        }, document['addEventListener'](_0x5eb016(0x338), _0x2ee372);
        if (_0x27b91a[_0x5eb016(0x570)] > 0x0) {
          const _0x43b7c9 = document[_0x5eb016(0x405)]('titanflow-carregar-planos');
          _0x43b7c9[_0x5eb016(0x6a2)] = _0x5eb016(0x121), _0x43b7c9['disabled'] = ![];
        }
        if (_0x34e176[_0x5eb016(0x570)] > 0x0) {
          const _0x23b926 = document[_0x5eb016(0x405)](_0x5eb016(0x3d0));
          _0x23b926['textContent'] = 'Equipamentos\x20Carregados', _0x23b926[_0x5eb016(0x4e8)] = ![];
        }
        _0x296722();
      }
      async function _0x531b94(_0x25e6d3) {
        const _0x249e9a = _0x4b5828
          , _0x12d6ef = document['getElementById']('titanflow-prog-plan-id-selecionado')[_0x249e9a(0x554)]
          , _0x5a8030 = JSON[_0x249e9a(0x18c)](localStorage[_0x249e9a(0x1fb)]('titanflow_prog_equipamentos_selecionados') || '[]')
          , _0x391c87 = document[_0x249e9a(0x405)]('titanflow-prog-requerente')['value'];
        if (!_0x12d6ef) {
          _0x2786ff('É\x20necessário\x20buscar\x20e\x20selecionar\x20um\x20Plano.', 'error');
          throw new Error(_0x249e9a(0x32e));
        }
        if (_0x5a8030[_0x249e9a(0x570)] === 0x0) {
          _0x2786ff(_0x249e9a(0x14c), _0x249e9a(0x5fb));
          throw new Error(_0x249e9a(0x274));
        }
        _0x5b5dcd = !![];
        let _0x5bc725 = 0x0
          , _0x323314 = 0x0;
        const _0x369913 = _0x5a8030[_0x249e9a(0x570)];
        for (const _0x31247f of _0x5a8030) {
          if (!_0x5b5dcd) {
            _0x2786ff(_0x249e9a(0x1e1), _0x249e9a(0x65a));
            throw new Error(_0x249e9a(0x3d8));
          }
          try {
            const _0x2e647e = {
              'planoId': _0x12d6ef
              , 'equipamentoId': _0x31247f['id']
              , 'requerenteId': _0x391c87
            };
            await _0x3d2908(_0x2e647e);
          } catch (_0x3bbf9d) {
            _0x5bc725++, console[_0x249e9a(0x5fb)](_0x249e9a(0x253) + _0x31247f['tag'] + ':', _0x3bbf9d), _0x2786ff(_0x249e9a(0x440) + _0x31247f[_0x249e9a(0x1ec)], _0x249e9a(0x5fb));
          }
          _0x323314++;
          if (_0x25e6d3) _0x25e6d3(_0x323314 / _0x369913);
        }
        _0x5b5dcd = ![];
        const _0x1142ac = _0x249e9a(0x65c) + (_0x369913 - _0x5bc725) + _0x249e9a(0x13c) + _0x5bc725 + _0x249e9a(0x173);
        _0x2786ff(_0x1142ac, _0x5bc725 > 0x0 ? 'warning' : _0x249e9a(0x3a1), 0x1770), _0x5bc725 === 0x0 && _0x369913 > 0x0 && (_0x28a1ef(), setTimeout(() => {
          const _0x415633 = _0x249e9a
            , _0x262747 = new URLSearchParams(window[_0x415633(0x298)][_0x415633(0x467)])
            , _0x1fca33 = _0x262747[_0x415633(0x47f)](_0x415633(0x656))
            , _0x12a636 = _0x262747['get']('n1')
            , _0x578ac5 = _0x262747[_0x415633(0x47f)]('n2')
            , _0x4e4f45 = _0x262747['get']('in')
            , _0x3a1685 = _0x415633(0x283) + _0x1fca33 + _0x415633(0x508) + _0x12a636 + _0x415633(0x383) + _0x578ac5 + _0x415633(0x58b) + _0x4e4f45 + '&seccion=titan_planes_programacion&op=c&plan_tag=' + _0x12d6ef + _0x415633(0x52f);
          window[_0x415633(0x298)][_0x415633(0x2bd)] = _0x3a1685;
        }, 0x5dc));
      }

      function _0x3e0009() {
        const _0x737b16 = _0x4b5828
          , _0x5dc44f = document[_0x737b16(0x143)](_0x737b16(0x21e));
        let _0x13288b = 0x0;
        _0x5dc44f[_0x737b16(0x539)](_0x1627f3 => {
          const _0x3f1d88 = _0x737b16
            , _0x3a9204 = _0x1627f3[_0x3f1d88(0x1c1)](_0x3f1d88(0x424));
          if (!_0x3a9204) return;
          const _0x109ae2 = _0x3a9204[_0x3f1d88(0x3b6)](/mostrar_acciones_disponibles\(this, '(\d+)'/)
            , _0x4035f5 = _0x109ae2 ? _0x109ae2[0x1] : null;
          if (_0x4035f5) {
            const _0x56e8ad = _0x1627f3[_0x3f1d88(0x581)][0x1]?.[_0x3f1d88(0x2d9)][_0x3f1d88(0x247)]() || 'N/A'
              , _0xde625b = _0x1627f3[_0x3f1d88(0x581)][0x4]?.[_0x3f1d88(0x2d9)][_0x3f1d88(0x247)]() || 'N/A';
            _0x14cc5d({
              'id': _0x4035f5
              , 'tag': _0x56e8ad
              , 'equipamentoNome': _0xde625b
            }) && _0x13288b++;
          }
        }), _0x13288b > 0x0 ? _0x2786ff(_0x13288b + _0x737b16(0x5d8), 'success') : _0x2786ff(_0x737b16(0x614), _0x737b16(0x503));
      }

      function _0x34ddef() {
        _0x319428('#resultado\x20table\x20tr', () => {
          const _0x2294a6 = _0x3bcd
            , _0x4bb2de = document['querySelector'](_0x2294a6(0x34d));
          if (!_0x4bb2de || _0x4bb2de[_0x2294a6(0x667)]('.th-titanflow-add')) return;
          const _0x15d5b4 = _0x4bb2de[_0x2294a6(0x667)]('tr');
          if (_0x15d5b4) {
            let _0x45772e = _0x15d5b4[_0x2294a6(0x40b)];
            _0x45772e && _0x45772e['textContent']['trim']() !== '' && (_0x45772e = document[_0x2294a6(0x4a9)]('td'), _0x15d5b4[_0x2294a6(0x5a0)](_0x45772e)), _0x45772e[_0x2294a6(0x657)] = _0x2294a6(0x1f7), _0x45772e[_0x2294a6(0x39e)]['width'] = '25px';
          }
          const _0x546eb9 = _0x4bb2de[_0x2294a6(0x143)](_0x2294a6(0x3df));
          _0x546eb9['forEach'](_0x1da086 => {
            const _0x249fa6 = _0x2294a6
              , _0x280e81 = _0x1da086[_0x249fa6(0x1c1)](_0x249fa6(0x424));
            if (!_0x280e81) return;
            const _0x18a6d9 = _0x280e81[_0x249fa6(0x3b6)](/mostrar_acciones_disponibles\(this, '(\d+)'/)
              , _0x1ad9fc = _0x18a6d9 ? _0x18a6d9[0x1] : null;
            if (_0x1ad9fc) {
              const _0x4a8896 = _0x1da086[_0x249fa6(0x581)][0x1]?.[_0x249fa6(0x2d9)]['trim']() || _0x249fa6(0x366)
                , _0x6a89aa = _0x1da086[_0x249fa6(0x581)][0x4]?.[_0x249fa6(0x2d9)][_0x249fa6(0x247)]() || _0x249fa6(0x366);
              let _0x4d3b6a = _0x1da086[_0x249fa6(0x40b)];
              if (_0x4d3b6a && _0x4d3b6a[_0x249fa6(0x6a2)][_0x249fa6(0x247)]() === '') {} else _0x4d3b6a = document['createElement']('td'), _0x1da086[_0x249fa6(0x5a0)](_0x4d3b6a);
              _0x4d3b6a[_0x249fa6(0x417)] = '', _0x4d3b6a[_0x249fa6(0x657)] = _0x249fa6(0x10b), _0x4d3b6a['style'][_0x249fa6(0x649)] = _0x249fa6(0x448), _0x4d3b6a[_0x249fa6(0x39e)][_0x249fa6(0x4aa)] = '0';
              const _0x463b49 = document[_0x249fa6(0x4a9)](_0x249fa6(0x45f));
              _0x463b49[_0x249fa6(0x39e)]['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
              const _0x46764b = document[_0x249fa6(0x4a9)](_0x249fa6(0x5e3));
              _0x46764b[_0x249fa6(0x657)] = _0x249fa6(0x3ab), _0x46764b[_0x249fa6(0x6a2)] = '+', _0x46764b[_0x249fa6(0x242)] = _0x249fa6(0x61e) + _0x6a89aa + _0x249fa6(0x239), _0x46764b[_0x249fa6(0x424)] = _0x18f7c1 => {
                const _0x5eec5b = _0x249fa6;
                _0x18f7c1[_0x5eec5b(0x1b3)](), _0x14cc5d({
                  'id': _0x1ad9fc
                  , 'tag': _0x4a8896
                  , 'equipamentoNome': _0x6a89aa
                });
              }, _0x463b49[_0x249fa6(0x5a0)](_0x46764b), _0x4d3b6a[_0x249fa6(0x5a0)](_0x463b49);
            }
          });
        });
      }

      function _0x296722() {
        const _0x22b387 = _0x4b5828
          , _0x5c01ee = JSON[_0x22b387(0x18c)](localStorage[_0x22b387(0x1fb)]('titanflow_prog_equipamentos_selecionados') || '[]')
          , _0xfbd3d2 = document['getElementById'](_0x22b387(0x3a7))
          , _0x5d30e2 = document[_0x22b387(0x405)](_0x22b387(0x12c));
        if (!_0xfbd3d2 || !_0x5d30e2) return;
        _0xfbd3d2[_0x22b387(0x417)] = '', _0x5d30e2[_0x22b387(0x6a2)] = _0x5c01ee[_0x22b387(0x570)], _0x5c01ee[_0x22b387(0x570)] === 0x0 ? _0xfbd3d2[_0x22b387(0x417)] = _0x22b387(0x359) : _0x5c01ee['forEach'](_0x444740 => {
          const _0x2f424a = _0x22b387
            , _0x32f369 = document[_0x2f424a(0x4a9)]('li');
          _0x32f369['innerHTML'] = '<span><b>[' + _0x444740[_0x2f424a(0x1ec)] + ']</b>\x20' + _0x444740[_0x2f424a(0x4e9)] + _0x2f424a(0x450) + _0x444740['id'] + '\x22\x20title=\x22Remover\x22>&times;</span>', _0xfbd3d2['appendChild'](_0x32f369);
        }), document['querySelectorAll'](_0x22b387(0x688))['forEach'](_0x757bce => {
          const _0x19b26a = _0x22b387;
          _0x757bce[_0x19b26a(0x424)] = _0x4f0640 => _0x12f968(_0x4f0640[_0x19b26a(0x64e)][_0x19b26a(0x534)]['id']);
        });
      }

      function _0x468213(_0x78bf90) {
        const _0x590f43 = _0x4b5828;
        let _0x45f473 = JSON[_0x590f43(0x18c)](localStorage[_0x590f43(0x1fb)](_0x590f43(0x399)) || '[]');
        const _0x43ec15 = _0x45f473[_0x590f43(0x308)](_0x598138 => _0x598138['id'] === _0x78bf90['id']);
        if (_0x43ec15) {
          _0x2786ff('Equipamento\x20[' + _0x78bf90[_0x590f43(0x1ec)] + _0x590f43(0x41c), _0x590f43(0x503), 0x7d0);
          return;
        }
        _0x45f473['push']({
          'id': _0x78bf90['id']
          , 'tag': _0x78bf90[_0x590f43(0x1ec)]
          , 'nome': _0x78bf90[_0x590f43(0x4e9)]
        }), localStorage['setItem'](_0x590f43(0x399), JSON['stringify'](_0x45f473)), document[_0x590f43(0x405)](_0x590f43(0x577))['value'] = '', _0x296722();
      }

      function _0x12f968(_0x316b0c) {
        const _0x45b8dc = _0x4b5828;
        let _0xfc90c6 = JSON[_0x45b8dc(0x18c)](localStorage[_0x45b8dc(0x1fb)](_0x45b8dc(0x399)) || '[]');
        _0xfc90c6 = _0xfc90c6[_0x45b8dc(0x5fd)](_0x1e3bcc => _0x1e3bcc['id'] !== _0x316b0c), localStorage[_0x45b8dc(0x634)]('titanflow_prog_equipamentos_selecionados', JSON[_0x45b8dc(0x1b4)](_0xfc90c6)), _0x296722();
      }

      function _0x28a1ef() {
        const _0x25624c = _0x4b5828;
        localStorage[_0x25624c(0x634)](_0x25624c(0x399), JSON['stringify']([])), _0x296722();
      }

      function _0x4f0158(_0x4fddef) {
        const _0x180f01 = _0x4b5828;
        _0x4fddef[_0x180f01(0x417)] = _0x180f01(0x371);
        const _0x6dfe77 = document[_0x180f01(0x405)](_0x180f01(0x648));
        _0x3ea34b(_0x6dfe77), _0x6dfe77[_0x180f01(0x424)] = _0x3e0009, document[_0x180f01(0x405)](_0x180f01(0x557))[_0x180f01(0x424)] = _0x169473;
        const _0x163fbf = document[_0x180f01(0x405)]('titanflow-prog-tipo')
          , _0x5dd17b = document[_0x180f01(0x405)]('titanflow-prog-data-inicio')
          , _0x2c3cd9 = document[_0x180f01(0x405)](_0x180f01(0x623))
          , _0x5500d0 = () => {
            const _0x5407ea = _0x180f01
              , _0x440a78 = new Date();
            let _0x32e762 = _0x440a78[_0x5407ea(0x5c7)]()
              , _0x128526 = parseInt(_0x2c3cd9[_0x5407ea(0x554)]) - 0x1;
            _0x128526 < _0x440a78[_0x5407ea(0x5e9)]() && _0x32e762++;
            const _0x105153 = new Date(_0x32e762, _0x128526, 0x1)
              , _0x10b424 = _0x105153[_0x5407ea(0x1ed)]()[_0x5407ea(0x3f0)]('T')[0x0];
            _0x5dd17b[_0x5407ea(0x554)] = _0x10b424;
          };
        _0x163fbf[_0x180f01(0x27a)] = () => {
          const _0x348a15 = _0x180f01;
          document[_0x348a15(0x405)](_0x348a15(0x174))['style'][_0x348a15(0x258)] = _0x348a15(0x24f), document[_0x348a15(0x405)](_0x348a15(0x37e))[_0x348a15(0x39e)][_0x348a15(0x258)] = _0x348a15(0x24f), document[_0x348a15(0x405)]('titanflow-prog-mensal-opts')[_0x348a15(0x39e)][_0x348a15(0x258)] = _0x348a15(0x24f);
          if (_0x163fbf[_0x348a15(0x554)] === _0x348a15(0x1c7)) document['getElementById'](_0x348a15(0x174))[_0x348a15(0x39e)][_0x348a15(0x258)] = _0x348a15(0x2f7);
          else {
            if (_0x163fbf['value'] === _0x348a15(0x59e)) document[_0x348a15(0x405)]('titanflow-prog-semanal-opts')[_0x348a15(0x39e)][_0x348a15(0x258)] = _0x348a15(0x4e5);
            else _0x163fbf['value'] === _0x348a15(0x562) && (document[_0x348a15(0x405)](_0x348a15(0x358))['style']['display'] = _0x348a15(0x4e5), _0x5500d0());
          }
        };
        const _0x2252ed = new Date()
          , _0x5d7505 = [_0x180f01(0x1fe), _0x180f01(0x31d), _0x180f01(0x601), _0x180f01(0x3b4), _0x180f01(0x522), _0x180f01(0x2e3), _0x180f01(0x59d), _0x180f01(0x37f), _0x180f01(0x3f9), _0x180f01(0x407), _0x180f01(0x4c2), 'Dezembro']
          , _0x3eeb71 = _0x2252ed[_0x180f01(0x5e9)]();
        for (let _0x54ba5d = 0x0; _0x54ba5d < 0xc; _0x54ba5d++) {
          const _0x356619 = (_0x3eeb71 + 0x1 + _0x54ba5d) % 0xc
            , _0x4f11b4 = document['createElement']('option');
          _0x4f11b4[_0x180f01(0x554)] = String(_0x356619 + 0x1)[_0x180f01(0x44e)](0x2, '0'), _0x4f11b4[_0x180f01(0x6a2)] = _0x5d7505[_0x356619], _0x2c3cd9['appendChild'](_0x4f11b4);
        }
        const _0x22d96b = new Date(_0x2252ed['getFullYear'](), _0x2252ed[_0x180f01(0x5e9)]() + 0x1, 0x1);
        _0x5dd17b[_0x180f01(0x554)] = _0x22d96b[_0x180f01(0x1ed)]()[_0x180f01(0x3f0)]('T')[0x0], _0x2c3cd9[_0x180f01(0x27a)] = _0x5500d0;
        const _0x4b1280 = document[_0x180f01(0x405)](_0x180f01(0x3af))
          , _0x26827d = document[_0x180f01(0x405)](_0x180f01(0x1ee));
        _0x4b1280[_0x180f01(0x269)] = () => {
          const _0x45f14a = _0x180f01;
          _0x26827d[_0x45f14a(0x554)] = _0x4b1280[_0x45f14a(0x554)];
        }, _0x26827d[_0x180f01(0x269)] = () => {
          const _0x120a72 = _0x180f01;
          let _0x469aa5 = parseInt(_0x26827d[_0x120a72(0x554)]);
          if (isNaN(_0x469aa5) || _0x469aa5 < 0x1) _0x469aa5 = 0x1;
          if (_0x469aa5 > 0x64) _0x469aa5 = 0x64;
          _0x26827d['value'] = _0x469aa5, _0x4b1280[_0x120a72(0x554)] = _0x469aa5;
        };
        const _0x294cd4 = document[_0x180f01(0x405)](_0x180f01(0x699))
          , _0x579867 = document[_0x180f01(0x405)](_0x180f01(0x1c2))
          , _0x486bb1 = document[_0x180f01(0x405)](_0x180f01(0x1d7));
        _0x3ea34b(_0x294cd4), _0x3ea34b(_0x579867), _0x3ea34b(_0x486bb1), _0x294cd4[_0x180f01(0x424)] = () => {
          const _0x33653c = _0x180f01
            , _0x554522 = document[_0x33653c(0x405)](_0x33653c(0x55c));
          _0x51ee14(_0x294cd4, _0x554522, _0x1d36d3 => _0x58806a(_0x33653c(0x390), _0x1d36d3));
        }, _0x579867[_0x180f01(0x424)] = () => {
          const _0x4eac95 = _0x180f01
            , _0x2cc5e8 = document[_0x4eac95(0x405)](_0x4eac95(0x55c));
          _0x51ee14(_0x579867, _0x2cc5e8, _0x3c2cb0 => _0x58806a(_0x4eac95(0x67a), _0x3c2cb0));
        }, _0x486bb1[_0x180f01(0x424)] = () => {
          const _0x4ad6b7 = _0x180f01
            , _0x360553 = document[_0x4ad6b7(0x405)](_0x4ad6b7(0x55c));
          _0x51ee14(_0x486bb1, _0x360553, _0x20fbd3 => _0x58806a(_0x4ad6b7(0x40f), _0x20fbd3));
        }, _0x5d1ad1();
      }

      function _0x5d1ad1() {
        const _0xbe7e77 = _0x4b5828
          , _0x8eb62e = JSON[_0xbe7e77(0x18c)](localStorage['getItem'](_0xbe7e77(0x150)) || '[]')
          , _0x3ebc58 = document[_0xbe7e77(0x405)](_0xbe7e77(0x3cd))
          , _0x4e476f = document[_0xbe7e77(0x405)](_0xbe7e77(0x267));
        if (!_0x3ebc58 || !_0x4e476f) return;
        _0x3ebc58['innerHTML'] = '', _0x4e476f['textContent'] = _0x8eb62e['length'], _0x8eb62e['length'] === 0x0 ? _0x3ebc58['innerHTML'] = _0xbe7e77(0x3ae) : _0x8eb62e[_0xbe7e77(0x539)](_0x41686e => {
          const _0x185884 = _0xbe7e77
            , _0x3e3c07 = document['createElement']('li');
          _0x3e3c07[_0x185884(0x417)] = _0x185884(0x574) + _0x41686e[_0x185884(0x1ec)] + _0x185884(0x2a4) + _0x41686e[_0x185884(0x532)] + _0x185884(0x2a6) + _0x41686e['id'] + '\x22\x20title=\x22Remover\x22>&times;</span>', _0x3ebc58['appendChild'](_0x3e3c07);
        }), document[_0xbe7e77(0x143)](_0xbe7e77(0x673))[_0xbe7e77(0x539)](_0x18b7b4 => {
          const _0x45c0c6 = _0xbe7e77;
          _0x18b7b4[_0x45c0c6(0x424)] = _0x438127 => _0x4549b2(_0x438127[_0x45c0c6(0x64e)][_0x45c0c6(0x534)]['id']);
        });
      }

      function _0x14cc5d(_0x57fa20) {
        const _0x38b9e7 = _0x4b5828;
        let _0x23748d = JSON['parse'](localStorage['getItem']('titanflow_config_programacoes_selecionadas') || '[]');
        if (_0x23748d[_0x38b9e7(0x308)](_0x4039ca => _0x4039ca['id'] === _0x57fa20['id'])) return ![];
        return _0x23748d[_0x38b9e7(0x2d4)](_0x57fa20), localStorage[_0x38b9e7(0x634)]('titanflow_config_programacoes_selecionadas', JSON['stringify'](_0x23748d)), _0x5d1ad1(), !![];
      }

      function _0x4549b2(_0x2a826c) {
        const _0x27d5d5 = _0x4b5828;
        let _0x3eec17 = JSON['parse'](localStorage['getItem'](_0x27d5d5(0x150)) || '[]');
        _0x3eec17 = _0x3eec17['filter'](_0x120c70 => _0x120c70['id'] !== _0x2a826c), localStorage[_0x27d5d5(0x634)]('titanflow_config_programacoes_selecionadas', JSON['stringify'](_0x3eec17)), _0x5d1ad1();
      }

      function _0x169473() {
        const _0x445ea4 = _0x4b5828;
        localStorage[_0x445ea4(0x634)]('titanflow_config_programacoes_selecionadas', JSON[_0x445ea4(0x1b4)]([])), _0x5d1ad1(), _0x2786ff('Lista\x20de\x20programações\x20foi\x20limpa.', _0x445ea4(0x503));
      }
      const _0x4e5493 = async _0x16424f => {
        const _0x16b8dd = _0x4b5828;
        _0x2ee372 && (document[_0x16b8dd(0x3c3)]('click', _0x2ee372), _0x2ee372 = null);
        localStorage[_0x16b8dd(0x634)](_0x19c9c0, _0x16424f), _0x899236[_0x16b8dd(0x190)][_0x16b8dd(0x4be)](_0x16b8dd(0x428)), _0x538775[_0x16b8dd(0x190)][_0x16b8dd(0x4be)]('active'), _0x23ca39[_0x16b8dd(0x190)][_0x16b8dd(0x4be)](_0x16b8dd(0x428));
        const _0x5a4176 = document[_0x16b8dd(0x405)](_0x16b8dd(0x369));
        if (_0x16424f === _0x16b8dd(0x5be)) {
          _0x899236[_0x16b8dd(0x190)]['add']('active'), _0x3e4ed3(_0x5a4176);
          try {
            const _0x41c9b8 = await Promise['allSettled']([_0x12f55c(), _0x3a1f53()]);
            _0x41c9b8[0x0]['status'] === _0x16b8dd(0x53a) ? _0x5b1121() : (console['error']('[TitanSystem]\x20Falha\x20ao\x20carregar\x20a\x20lista\x20de\x20planos:', _0x41c9b8[0x0][_0x16b8dd(0x453)]), _0x2786ff(_0x16b8dd(0x510), 'error')), _0x41c9b8[0x1]['status'] === _0x16b8dd(0x281) && console[_0x16b8dd(0xf5)](_0x16b8dd(0x511), _0x41c9b8[0x1]['reason']);
          } catch (_0xa418db) {
            console[_0x16b8dd(0x5fb)](_0x16b8dd(0x343), _0xa418db), _0x2786ff(_0x16b8dd(0x32a), 'error');
          }
        } else {
          if (_0x16424f === 'programacao') _0x538775['classList'][_0x16b8dd(0x5dc)](_0x16b8dd(0x428)), _0x163373(_0x5a4176);
          else _0x16424f === _0x16b8dd(0x619) && (_0x23ca39['classList'][_0x16b8dd(0x5dc)]('active'), _0x4f0158(_0x5a4176));
        }
      }, _0x248d42 = _0x13dcbd => {
        const _0x611cf2 = _0x4b5828;
        _0x13dcbd[_0x611cf2(0x5fc)](_0x611cf2(0x53d), () => {
          const _0x22ff2d = _0x611cf2;
          !_0x13dcbd[_0x22ff2d(0x190)][_0x22ff2d(0xfd)](_0x22ff2d(0x428)) && (_0x13dcbd[_0x22ff2d(0x39e)][_0x22ff2d(0x102)] = _0x22ff2d(0x5d6), _0x13dcbd['style'][_0x22ff2d(0x5fd)] = _0x22ff2d(0x319));
        }), _0x13dcbd['addEventListener']('mouseleave', () => {
          const _0x11a021 = _0x611cf2;
          _0x13dcbd[_0x11a021(0x39e)][_0x11a021(0x102)] = _0x11a021(0x37b), _0x13dcbd[_0x11a021(0x39e)]['filter'] = 'brightness(100%)';
        });
      };
      _0x248d42(_0x899236), _0x248d42(_0x538775), _0x248d42(_0x23ca39), _0x899236[_0x4b5828(0x424)] = () => _0x4e5493(_0x4b5828(0x5be)), _0x538775[_0x4b5828(0x424)] = () => _0x4e5493(_0x4b5828(0x135)), _0x23ca39[_0x4b5828(0x424)] = () => _0x4e5493('configuracao'), _0x5db97f();
      const _0x477848 = localStorage['getItem'](_0x19c9c0);
      _0x477848 ? _0x4e5493(_0x477848) : _0x4e5493(_0x4b5828(0x5be));
      _0x34ddef();
      const _0x3073f8 = document['getElementById']('btn-ajuda-planejamento');
      _0x3073f8[_0x4b5828(0x424)] = _0x29dc9c, _0x3073f8['addEventListener'](_0x4b5828(0x53d), () => {
        const _0x596831 = _0x4b5828;
        _0x3073f8[_0x596831(0x39e)][_0x596831(0x102)] = _0x596831(0x5ec);
      }), _0x3073f8[_0x4b5828(0x5fc)](_0x4b5828(0x4df), () => {
        const _0x12165d = _0x4b5828;
        _0x3073f8[_0x12165d(0x39e)][_0x12165d(0x102)] = _0x12165d(0x19b);
      }), _0x474a0b();
    }

    function _0x5db97f() {
      const _0x18f6bd = _0x1f2edc
        , _0x96cfc8 = document['createElement'](_0x18f6bd(0x5e3));
      _0x96cfc8['id'] = _0x18f6bd(0x144), Object[_0x18f6bd(0x48a)](_0x96cfc8[_0x18f6bd(0x39e)], {
        'position': _0x18f6bd(0x698)
        , 'top': _0x18f6bd(0x63f)
        , 'left': _0x18f6bd(0x63f)
        , 'color': _0x18f6bd(0x56f)
        , 'border': _0x18f6bd(0x24f)
        , 'borderRadius': _0x18f6bd(0x596)
        , 'padding': _0x18f6bd(0x3d7)
        , 'cursor': 'pointer'
        , 'zIndex': _0x18f6bd(0x5ef)
        , 'fontWeight': _0x18f6bd(0x39b)
        , 'fontSize': _0x18f6bd(0x3ba)
        , 'boxShadow': _0x18f6bd(0x2c9)
        , 'transition': _0x18f6bd(0x12b)
      }), _0x96cfc8[_0x18f6bd(0x5fc)]('mouseenter', () => {
        const _0x51736a = _0x18f6bd;
        _0x96cfc8[_0x51736a(0x39e)][_0x51736a(0x102)] = _0x51736a(0x5d6), _0x96cfc8['style'][_0x51736a(0x5fd)] = _0x51736a(0x319);
      }), _0x96cfc8['addEventListener']('mouseleave', () => {
        const _0x58aa09 = _0x18f6bd;
        _0x96cfc8[_0x58aa09(0x39e)][_0x58aa09(0x102)] = _0x58aa09(0x37b), _0x96cfc8[_0x58aa09(0x39e)]['filter'] = _0x58aa09(0x161);
      });
      const _0x50f87d = (_0x15a15a, _0x5a53d5) => {
        const _0x12b40b = _0x18f6bd;
        _0x15a15a['style'][_0x12b40b(0x258)] === _0x12b40b(0x24f) ? (_0x5a53d5[_0x12b40b(0x417)] = _0x12b40b(0x4d2), _0x5a53d5[_0x12b40b(0x39e)][_0x12b40b(0x156)] = _0x12b40b(0x155)) : (_0x5a53d5[_0x12b40b(0x417)] = '🙈\x20Ocultar\x20Painel', _0x5a53d5['style'][_0x12b40b(0x156)] = _0x12b40b(0x4e2));
      };
      _0x96cfc8[_0x18f6bd(0x424)] = function () {
        const _0x2d928b = _0x18f6bd
          , _0x40c96b = document[_0x2d928b(0x405)](_0x2d928b(0x5d2));
        if (_0x40c96b) {
          const _0x2cd4bd = _0x40c96b[_0x2d928b(0x39e)][_0x2d928b(0x258)] === _0x2d928b(0x24f);
          _0x40c96b[_0x2d928b(0x39e)]['display'] = _0x2cd4bd ? _0x2d928b(0x2f7) : 'none', localStorage[_0x2d928b(0x634)](_0x2d928b(0x162), _0x2cd4bd ? _0x2d928b(0x333) : _0x2d928b(0x5ee)), _0x50f87d(_0x40c96b, _0x96cfc8);
        }
      }, document[_0x18f6bd(0x4c5)]['appendChild'](_0x96cfc8);
      const _0x5b52ae = document[_0x18f6bd(0x405)](_0x18f6bd(0x5d2));
      localStorage[_0x18f6bd(0x1fb)](_0x18f6bd(0x162)) === 'false' && (_0x5b52ae[_0x18f6bd(0x39e)][_0x18f6bd(0x258)] = _0x18f6bd(0x24f)), _0x50f87d(_0x5b52ae, _0x96cfc8);
    }

    function _0x239759() {
      const _0x4312b2 = _0x1f2edc
        , _0x14c2fb = {
          'top': _0x4312b2(0x487)
          , 'left': _0x4312b2(0x63f)
        };
      let _0x5dc5ac = localStorage['getItem'](_0x4312b2(0x672)) !== _0x4312b2(0x5ee);
      const _0x43398e = localStorage[_0x4312b2(0x1fb)]('titanflow_panel_top')
        , _0x405019 = localStorage[_0x4312b2(0x1fb)](_0x4312b2(0x2f3))
        , _0x4e7800 = {
          'value': _0x5dc5ac
        };
      GM_addStyle(_0x4312b2(0x1be));
      const _0x32a5d7 = document[_0x4312b2(0x4a9)](_0x4312b2(0x45f));
      _0x32a5d7['id'] = _0x4312b2(0x320), _0x32a5d7['style'][_0x4312b2(0x2b1)] = _0x4312b2(0x698);
      !_0x5dc5ac && _0x43398e && _0x405019 ? (_0x32a5d7[_0x4312b2(0x39e)]['top'] = _0x43398e, _0x32a5d7[_0x4312b2(0x39e)][_0x4312b2(0x540)] = _0x405019) : (_0x32a5d7[_0x4312b2(0x39e)]['top'] = _0x14c2fb['top'], _0x32a5d7[_0x4312b2(0x39e)][_0x4312b2(0x540)] = _0x14c2fb[_0x4312b2(0x540)]);
      _0x32a5d7[_0x4312b2(0x39e)][_0x4312b2(0x649)] = _0x4458b3 === 'tecnico' ? _0x4312b2(0x20a) : _0x4312b2(0x52e), _0x32a5d7[_0x4312b2(0x39e)][_0x4312b2(0x156)] = _0x4312b2(0x10e), _0x32a5d7['style']['border'] = '1px\x20solid\x20#3366ff', _0x32a5d7[_0x4312b2(0x39e)]['borderRadius'] = _0x4312b2(0x596), _0x32a5d7[_0x4312b2(0x39e)][_0x4312b2(0x4aa)] = _0x4458b3 === _0x4312b2(0x331) ? '6px' : _0x4312b2(0x63f), _0x32a5d7[_0x4312b2(0x39e)]['zIndex'] = _0x4312b2(0x5bf), _0x32a5d7[_0x4312b2(0x39e)][_0x4312b2(0x568)] = _0x4312b2(0x43b), _0x32a5d7[_0x4312b2(0x39e)][_0x4312b2(0x256)] = _0x4312b2(0x529), _0x32a5d7['style']['overflowY'] = _0x4312b2(0x188), _0x32a5d7['style'][_0x4312b2(0x256)] = 'calc(105vh\x20-\x20120px)', _0x32a5d7[_0x4312b2(0x39e)]['overflowY'] = 'auto', _0x32a5d7[_0x4312b2(0x39e)][_0x4312b2(0x658)] = _0x4312b2(0x58f), _0x32a5d7['style'][_0x4312b2(0x183)] = _0x4312b2(0x1bb), _0x32a5d7[_0x4312b2(0x39e)][_0x4312b2(0x25f)] = _0x4312b2(0x507), _0x32a5d7[_0x4312b2(0x39e)][_0x4312b2(0x2db)] = _0x4312b2(0x591);
      const _0x368f37 = document[_0x4312b2(0x4a9)](_0x4312b2(0x45f));
      Object[_0x4312b2(0x48a)](_0x368f37['style'], {
        'display': 'flex'
        , 'justifyContent': _0x4312b2(0x460)
        , 'alignItems': _0x4312b2(0x500)
        , 'marginBottom': _0x4458b3 === 'tecnico' ? _0x4312b2(0x16d) : _0x4312b2(0x63f)
        , 'padding': _0x4458b3 === _0x4312b2(0x331) ? _0x4312b2(0x68a) : _0x4312b2(0x609)
      });
      const _0x5efc7b = document[_0x4312b2(0x4a9)]('span');
      _0x5efc7b[_0x4312b2(0x6a2)] = _0x4312b2(0x49a) + (_0x4458b3['charAt'](0x0)['toUpperCase']() + _0x4458b3['slice'](0x1)), Object[_0x4312b2(0x48a)](_0x5efc7b[_0x4312b2(0x39e)], {
        'fontWeight': 'bold'
        , 'fontSize': _0x4312b2(0x17e)
        , 'color': '#343a40'
      }), _0x368f37[_0x4312b2(0x5a0)](_0x5efc7b);
      const _0x1af3a8 = document[_0x4312b2(0x4a9)]('div');
      Object[_0x4312b2(0x48a)](_0x1af3a8[_0x4312b2(0x39e)], {
        'display': _0x4312b2(0x4e5)
        , 'alignItems': _0x4312b2(0x500)
        , 'gap': _0x4312b2(0x596)
      });
      const _0x543cba = document[_0x4312b2(0x4a9)](_0x4312b2(0x5e3));
      _0x543cba[_0x4312b2(0x242)] = _0x4312b2(0x62a), Object[_0x4312b2(0x48a)](_0x543cba[_0x4312b2(0x39e)], {
        'background': _0x4312b2(0x24f)
        , 'border': 'none'
        , 'borderRadius': _0x4312b2(0x596)
        , 'padding': _0x4312b2(0x330)
        , 'cursor': 'pointer'
        , 'fontSize': '18px'
        , 'lineHeight': '1'
        , 'transition': 'transform\x200.2s\x20ease'
      });

      function _0x2b26c0() {
        const _0x58b688 = _0x4312b2;
        _0x4e7800['value'] = _0x5dc5ac, _0x5dc5ac ? (_0x543cba[_0x58b688(0x6a2)] = '📌', _0x543cba[_0x58b688(0x39e)][_0x58b688(0x102)] = _0x58b688(0x2d7), _0x368f37[_0x58b688(0x39e)]['cursor'] = _0x58b688(0x47a)) : (_0x543cba[_0x58b688(0x6a2)] = _0x58b688(0x31b), _0x543cba[_0x58b688(0x39e)]['transform'] = _0x58b688(0x2d7), _0x368f37[_0x58b688(0x39e)][_0x58b688(0x241)] = _0x58b688(0x5a6));
      }
      _0x543cba['onclick'] = () => {
        const _0x5b038f = _0x4312b2;
        _0x5dc5ac = !_0x5dc5ac, _0x5dc5ac && (_0x32a5d7[_0x5b038f(0x39e)][_0x5b038f(0x565)] = _0x14c2fb[_0x5b038f(0x565)], _0x32a5d7['style'][_0x5b038f(0x540)] = _0x14c2fb[_0x5b038f(0x540)], localStorage['removeItem'](_0x5b038f(0x4de)), localStorage['removeItem'](_0x5b038f(0x2f3))), localStorage[_0x5b038f(0x634)](_0x5b038f(0x672), _0x5dc5ac), _0x2b26c0();
      };
      const _0x329a14 = document[_0x4312b2(0x4a9)](_0x4312b2(0x5e3));
      _0x329a14[_0x4312b2(0x6a2)] = '🔓', _0x329a14[_0x4312b2(0x242)] = _0x4312b2(0x63c), Object[_0x4312b2(0x48a)](_0x329a14[_0x4312b2(0x39e)], {
        'background': _0x4312b2(0x24f)
        , 'border': _0x4312b2(0x24f)
        , 'borderRadius': '5px'
        , 'padding': _0x4312b2(0x330)
        , 'cursor': _0x4312b2(0x226)
        , 'fontSize': _0x4312b2(0x548)
        , 'lineHeight': '1'
        , 'transition': 'background-color\x200.2s\x20ease,\x20transform\x200.1s\x20ease'
      }), _0x329a14[_0x4312b2(0x5fc)]('mouseenter', () => {
        const _0x48e92c = _0x4312b2;
        _0x329a14['style'][_0x48e92c(0x156)] = _0x48e92c(0x1e0), _0x329a14['style'][_0x48e92c(0x102)] = _0x48e92c(0x2f9);
      }), _0x329a14[_0x4312b2(0x5fc)]('mouseleave', () => {
        const _0x202605 = _0x4312b2;
        _0x329a14['style'][_0x202605(0x156)] = 'transparent', _0x329a14[_0x202605(0x39e)]['transform'] = _0x202605(0x19b);
      }), _0x329a14['onclick'] = () => {
        const _0x2270c2 = _0x4312b2;
        localStorage[_0x2270c2(0x125)](_0x2270c2(0x20c)), localStorage[_0x2270c2(0x125)]('senhaTitan'), location[_0x2270c2(0x683)]();
      };
      const _0x51152d = document[_0x4312b2(0x4a9)](_0x4312b2(0x5e3));
      _0x51152d[_0x4312b2(0x6a2)] = '❓', _0x51152d[_0x4312b2(0x242)] = 'Ajuda\x20e\x20Atalhos', Object['assign'](_0x51152d[_0x4312b2(0x39e)], {
        'background': _0x4312b2(0x24f)
        , 'border': _0x4312b2(0x24f)
        , 'borderRadius': _0x4312b2(0x596)
        , 'padding': _0x4312b2(0x330)
        , 'cursor': _0x4312b2(0x226)
        , 'fontSize': _0x4312b2(0x548)
        , 'lineHeight': '1'
        , 'transition': 'background-color\x200.2s\x20ease,\x20transform\x200.1s\x20ease'
      }), _0x51152d[_0x4312b2(0x5fc)](_0x4312b2(0x53d), () => {
        const _0x2abab3 = _0x4312b2;
        _0x51152d['style'][_0x2abab3(0x156)] = 'rgba(0,\x200,\x200,\x200.05)', _0x51152d[_0x2abab3(0x39e)][_0x2abab3(0x102)] = _0x2abab3(0x2f9);
      }), _0x51152d[_0x4312b2(0x5fc)](_0x4312b2(0x4df), () => {
        const _0x377f8c = _0x4312b2;
        _0x51152d[_0x377f8c(0x39e)][_0x377f8c(0x156)] = 'transparent', _0x51152d[_0x377f8c(0x39e)]['transform'] = 'scale(1)';
      }), _0x51152d[_0x4312b2(0x424)] = _0x3861f3, _0x1af3a8[_0x4312b2(0x5a0)](_0x543cba), _0x1af3a8[_0x4312b2(0x5a0)](_0x51152d), _0x1af3a8[_0x4312b2(0x5a0)](_0x329a14), _0x368f37[_0x4312b2(0x5a0)](_0x1af3a8), _0x2b26c0(), _0x32a5d7[_0x4312b2(0x5a0)](_0x368f37);
      const _0x376422 = document[_0x4312b2(0x4a9)](_0x4312b2(0x45f));
      _0x376422['style'][_0x4312b2(0x258)] = _0x4312b2(0x4e5), _0x376422[_0x4312b2(0x39e)]['justifyContent'] = 'space-between', _0x376422[_0x4312b2(0x39e)]['alignItems'] = _0x4312b2(0x500), _0x376422['style'][_0x4312b2(0x455)] = _0x4458b3 === _0x4312b2(0x331) ? _0x4312b2(0x297) : _0x4312b2(0x63f);
      const _0x52b738 = document[_0x4312b2(0x4a9)]('h3');
      _0x52b738['textContent'] = _0x4312b2(0x291), _0x52b738[_0x4312b2(0x39e)]['color'] = _0x4312b2(0x4e2), _0x52b738['style']['margin'] = 0x0, _0x52b738[_0x4312b2(0x39e)][_0x4312b2(0x3a3)] = '15px';
      const _0x23c386 = document[_0x4312b2(0x4a9)](_0x4312b2(0x3fe));
      _0x23c386[_0x4312b2(0x6a2)] = 'v' + _0x121499, _0x23c386[_0x4312b2(0x39e)][_0x4312b2(0x3a3)] = _0x4312b2(0x642), _0x23c386[_0x4312b2(0x39e)][_0x4312b2(0x16c)] = _0x4312b2(0x3ac), _0x23c386[_0x4312b2(0x39e)][_0x4312b2(0x1a6)] = _0x4312b2(0x55a);
      const _0xeb53f4 = document[_0x4312b2(0x4a9)]('a');
      _0xeb53f4[_0x4312b2(0x2bd)] = _0x4312b2(0x1b0), _0xeb53f4['target'] = _0x4312b2(0x140), _0xeb53f4[_0x4312b2(0x242)] = _0x4312b2(0x695), _0xeb53f4[_0x4312b2(0x6a2)] = _0x4312b2(0x5c0), Object['assign'](_0xeb53f4[_0x4312b2(0x39e)], {
        'textDecoration': _0x4312b2(0x24f)
        , 'marginRight': _0x4312b2(0x60c)
        , 'fontSize': _0x4312b2(0x548)
        , 'cursor': _0x4312b2(0x226)
        , 'transition': 'transform\x200.2s\x20ease'
      }), _0xeb53f4['addEventListener'](_0x4312b2(0x53d), () => {
        const _0x387846 = _0x4312b2;
        _0xeb53f4[_0x387846(0x39e)][_0x387846(0x102)] = _0x387846(0x5ec);
      }), _0xeb53f4['addEventListener'](_0x4312b2(0x4df), () => {
        const _0x21536d = _0x4312b2;
        _0xeb53f4[_0x21536d(0x39e)][_0x21536d(0x102)] = _0x21536d(0x19b);
      });
      const _0x1ddf10 = document[_0x4312b2(0x4a9)](_0x4312b2(0x45f));
      _0x1ddf10[_0x4312b2(0x39e)][_0x4312b2(0x258)] = _0x4312b2(0x4e5), _0x1ddf10[_0x4312b2(0x39e)][_0x4312b2(0x3bd)] = _0x4312b2(0x500), _0x1ddf10[_0x4312b2(0x5a0)](_0xeb53f4), _0x1ddf10['appendChild'](_0x23c386), _0x376422[_0x4312b2(0x5a0)](_0x52b738), _0x376422[_0x4312b2(0x5a0)](_0x1ddf10), _0x32a5d7[_0x4312b2(0x5a0)](_0x376422);
      const _0x322bee = document['createElement']('div');
      Object['assign'](_0x322bee[_0x4312b2(0x39e)], {
        'display': _0x4312b2(0x4e5)
        , 'gap': _0x4312b2(0x297)
        , 'marginBottom': _0x4312b2(0x63f)
      });
      const _0x2ce98f = document[_0x4312b2(0x4a9)](_0x4312b2(0x5e3));
      _0x2ce98f['id'] = _0x4312b2(0x2e4), _0x2ce98f[_0x4312b2(0x6a2)] = 'Seleção', Object[_0x4312b2(0x48a)](_0x2ce98f[_0x4312b2(0x39e)], {
        'backgroundColor': '#3366ff'
        , 'flex': '1'
        , 'color': 'white'
        , 'border': 'none'
        , 'borderRadius': '5px'
        , 'padding': _0x4458b3 === _0x4312b2(0x331) ? _0x4312b2(0x2b3) : _0x4312b2(0x394)
        , 'cursor': _0x4312b2(0x226)
        , 'textAlign': _0x4312b2(0x500)
        , 'fontSize': _0x4312b2(0x3ba)
        , 'fontWeight': 'bold'
        , 'transition': _0x4312b2(0x4f8)
        , 'boxShadow': _0x4312b2(0x2c9)
      }), _0x2ce98f[_0x4312b2(0x5fc)](_0x4312b2(0x53d), () => {
        const _0x2bb89b = _0x4312b2;
        _0x2ce98f[_0x2bb89b(0x39e)][_0x2bb89b(0x102)] = _0x2bb89b(0x5d6), _0x2ce98f[_0x2bb89b(0x39e)][_0x2bb89b(0x5fd)] = 'brightness(110%)', _0x2ce98f[_0x2bb89b(0x39e)][_0x2bb89b(0x568)] = _0x2bb89b(0x14a);
      }), _0x2ce98f[_0x4312b2(0x5fc)](_0x4312b2(0x4df), () => {
        const _0xfec763 = _0x4312b2;
        _0x2ce98f[_0xfec763(0x39e)]['transform'] = _0xfec763(0x37b), _0x2ce98f[_0xfec763(0x39e)]['filter'] = 'brightness(100%)', _0x2ce98f[_0xfec763(0x39e)][_0xfec763(0x568)] = _0xfec763(0x2c9);
      });
      const _0x246ef0 = document['createElement'](_0x4312b2(0x5e3));
      _0x246ef0['id'] = _0x4312b2(0x53f), _0x246ef0['textContent'] = _0x4312b2(0x234), Object[_0x4312b2(0x48a)](_0x246ef0[_0x4312b2(0x39e)], {
        'backgroundColor': '#ffaa00'
        , 'flex': '1'
        , 'color': _0x4312b2(0x56f)
        , 'border': _0x4312b2(0x24f)
        , 'borderRadius': '5px'
        , 'padding': _0x4312b2(0x394)
        , 'cursor': _0x4312b2(0x226)
        , 'textAlign': 'center'
        , 'fontSize': _0x4312b2(0x3ba)
        , 'fontWeight': _0x4312b2(0x39b)
        , 'transition': _0x4312b2(0x4f8)
        , 'boxShadow': _0x4312b2(0x2c9)
      }), _0x246ef0[_0x4312b2(0x5fc)](_0x4312b2(0x53d), () => {
        const _0x501c76 = _0x4312b2;
        _0x246ef0[_0x501c76(0x39e)]['transform'] = 'translateY(-2px)', _0x246ef0['style']['filter'] = _0x501c76(0x319), _0x246ef0[_0x501c76(0x39e)][_0x501c76(0x568)] = _0x501c76(0x14a);
      }), _0x246ef0[_0x4312b2(0x5fc)]('mouseleave', () => {
        const _0x45bcb0 = _0x4312b2;
        _0x246ef0[_0x45bcb0(0x39e)][_0x45bcb0(0x102)] = _0x45bcb0(0x37b), _0x246ef0[_0x45bcb0(0x39e)]['filter'] = _0x45bcb0(0x161), _0x246ef0[_0x45bcb0(0x39e)][_0x45bcb0(0x568)] = _0x45bcb0(0x2c9);
      });
      const _0x32d52e = document[_0x4312b2(0x4a9)](_0x4312b2(0x5e3));
      _0x32d52e['id'] = _0x4312b2(0x552), _0x32d52e[_0x4312b2(0x6a2)] = _0x4312b2(0x2ca), Object[_0x4312b2(0x48a)](_0x32d52e[_0x4312b2(0x39e)], {
        'backgroundColor': _0x4312b2(0x3ca)
        , 'flex': '1'
        , 'color': 'white'
        , 'border': _0x4312b2(0x24f)
        , 'borderRadius': _0x4312b2(0x596)
        , 'padding': _0x4458b3 === 'tecnico' ? _0x4312b2(0x2b3) : _0x4312b2(0x394)
        , 'cursor': _0x4312b2(0x226)
        , 'textAlign': _0x4312b2(0x500)
        , 'fontSize': _0x4312b2(0x3ba)
        , 'fontWeight': _0x4312b2(0x39b)
        , 'transition': _0x4312b2(0x4f8)
        , 'boxShadow': _0x4312b2(0x2c9)
      }), _0x32d52e['addEventListener'](_0x4312b2(0x53d), () => {
        const _0x45f81d = _0x4312b2;
        _0x32d52e[_0x45f81d(0x39e)][_0x45f81d(0x102)] = _0x45f81d(0x5d6), _0x32d52e[_0x45f81d(0x39e)][_0x45f81d(0x5fd)] = _0x45f81d(0x319), _0x32d52e[_0x45f81d(0x39e)][_0x45f81d(0x568)] = _0x45f81d(0x14a);
      }), _0x32d52e['addEventListener']('mouseleave', () => {
        const _0x18ae5f = _0x4312b2;
        _0x32d52e[_0x18ae5f(0x39e)][_0x18ae5f(0x102)] = _0x18ae5f(0x37b), _0x32d52e[_0x18ae5f(0x39e)]['filter'] = 'brightness(100%)', _0x32d52e[_0x18ae5f(0x39e)][_0x18ae5f(0x568)] = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
      }), _0x322bee[_0x4312b2(0x5a0)](_0x2ce98f), _0x322bee['appendChild'](_0x246ef0), _0x322bee['appendChild'](_0x32d52e);
      if (_0x4458b3 !== _0x4312b2(0x331)) {
        const _0x55bb4d = document['createElement'](_0x4312b2(0x5e3));
        _0x55bb4d['id'] = _0x4312b2(0x145), _0x55bb4d[_0x4312b2(0x6a2)] = _0x4312b2(0x37c), Object[_0x4312b2(0x48a)](_0x55bb4d[_0x4312b2(0x39e)], {
          'backgroundColor': _0x4312b2(0x4f3)
          , 'flex': '1'
          , 'color': _0x4312b2(0x56f)
          , 'border': _0x4312b2(0x24f)
          , 'borderRadius': '5px'
          , 'padding': _0x4312b2(0x394)
          , 'cursor': 'pointer'
          , 'textAlign': _0x4312b2(0x500)
          , 'fontSize': _0x4312b2(0x3ba)
          , 'fontWeight': _0x4312b2(0x39b)
          , 'transition': _0x4312b2(0x4f8)
          , 'boxShadow': _0x4312b2(0x2c9)
        }), _0x55bb4d[_0x4312b2(0x5fc)](_0x4312b2(0x53d), () => {
          const _0x49ea9d = _0x4312b2;
          _0x55bb4d['style']['transform'] = _0x49ea9d(0x5d6), _0x55bb4d[_0x49ea9d(0x39e)][_0x49ea9d(0x5fd)] = _0x49ea9d(0x319), _0x55bb4d[_0x49ea9d(0x39e)][_0x49ea9d(0x568)] = _0x49ea9d(0x14a);
        }), _0x55bb4d[_0x4312b2(0x5fc)](_0x4312b2(0x4df), () => {
          const _0x4e9acb = _0x4312b2;
          _0x55bb4d[_0x4e9acb(0x39e)]['transform'] = 'translateY(0px)', _0x55bb4d[_0x4e9acb(0x39e)][_0x4e9acb(0x5fd)] = _0x4e9acb(0x161), _0x55bb4d[_0x4e9acb(0x39e)]['boxShadow'] = _0x4e9acb(0x2c9);
        }), _0x55bb4d['onclick'] = async () => {
          const _0x2a9068 = _0x4312b2;
          sessionStorage[_0x2a9068(0x634)](_0x2a9068(0x2be), _0x2a9068(0x471)), _0x4177e2();
          try {
            await _0x3a1f53();
          } catch (_0x1ceb8b) {
            console['error'](_0x2a9068(0x611), _0x1ceb8b), _0x2786ff('Falha\x20ao\x20carregar\x20a\x20lista\x20de\x20equipamentos.', _0x2a9068(0x5fb));
          }
        }, _0x322bee[_0x4312b2(0x5a0)](_0x55bb4d);
      }

      function _0x1f742f() {
        const _0x1516f2 = _0x4312b2;
        _0xf02b62[_0x1516f2(0x417)] = '';

        function _0x544bc3() {
          const _0x5dfbb8 = _0x1516f2
            , _0x24f422 = 0x14;
          this['style'][_0x5dfbb8(0x1cc)] = _0x5dfbb8(0x188);
          const _0x553ac8 = Math[_0x5dfbb8(0x356)](_0x24f422, this[_0x5dfbb8(0x538)]);
          this[_0x5dfbb8(0x39e)][_0x5dfbb8(0x1cc)] = _0x553ac8 + 'px';
        }
        const _0x5b3273 = document[_0x1516f2(0x4a9)](_0x1516f2(0x45f));
        Object[_0x1516f2(0x48a)](_0x5b3273[_0x1516f2(0x39e)], {
          'display': _0x1516f2(0x1ff)
          , 'gridTemplateColumns': _0x1516f2(0x2ed)
          , 'gap': '30px'
          , 'backgroundColor': '#f8f9fa'
          , 'padding': _0x1516f2(0x596)
          , 'border': _0x1516f2(0x452)
          , 'borderRadius': _0x1516f2(0x596)
        });
        const _0x55f28f = (_0x37c8b8, _0xb81c88, _0x19ad5c) => {
            const _0x579bde = _0x1516f2
              , _0x34c514 = document[_0x579bde(0x4a9)](_0x579bde(0x45f));
            Object[_0x579bde(0x48a)](_0x34c514['style'], {
              'display': _0x579bde(0x4e5)
              , 'flexDirection': _0x579bde(0x3c1)
              , 'alignItems': _0x579bde(0x500)
              , 'gap': _0x579bde(0x5a5)
            });
            const _0x203938 = document[_0x579bde(0x4a9)]('label');
            _0x203938[_0x579bde(0x6a2)] = _0x37c8b8, Object['assign'](_0x203938['style'], {
              'fontWeight': '600'
              , 'fontSize': '12px'
              , 'color': _0x579bde(0x520)
            });
            const _0x42c502 = document[_0x579bde(0x4a9)]('input');
            return _0x42c502['id'] = _0xb81c88, _0x42c502[_0x579bde(0x312)] = 'number', _0x42c502[_0x579bde(0x54f)] = '0', _0x42c502[_0x579bde(0x518)] = '1', _0x42c502[_0x579bde(0x554)] = _0x19ad5c, Object['assign'](_0x42c502[_0x579bde(0x39e)], {
              'width': '90%'
              , 'padding': _0x579bde(0x596)
              , 'border': _0x579bde(0x30d)
              , 'borderRadius': _0x579bde(0x596)
              , 'textAlign': _0x579bde(0x500)
              , 'fontSize': _0x579bde(0x3ba)
            }), _0x34c514[_0x579bde(0x5a0)](_0x203938), _0x34c514[_0x579bde(0x5a0)](_0x42c502), _0x34c514;
          }
          , _0x3f8e8c = _0x55f28f(_0x1516f2(0x35b), 'input-recursos', parseInt(localStorage[_0x1516f2(0x1fb)](_0x1516f2(0x32f))) || 0x1)
          , _0xd43711 = _0x55f28f('Duração\x20(H)', 'input-duracion', parseInt(localStorage[_0x1516f2(0x1fb)](_0x1516f2(0x3e5))) || 0x1)
          , _0xd6c33d = _0x55f28f(_0x1516f2(0x2e2), _0x1516f2(0x1fd), 0x0)
          , _0x2e25cb = _0x3f8e8c['querySelector'](_0x1516f2(0x3d9))
          , _0x119e2c = _0xd43711[_0x1516f2(0x667)](_0x1516f2(0x3d9))
          , _0x412d1d = _0xd6c33d['querySelector'](_0x1516f2(0x3d9));
        _0x412d1d[_0x1516f2(0x4e8)] = !![], Object[_0x1516f2(0x48a)](_0x412d1d[_0x1516f2(0x39e)], {
          'backgroundColor': _0x1516f2(0x435)
          , 'color': _0x1516f2(0x3ce)
          , 'cursor': _0x1516f2(0x3fb)
          , 'fontWeight': _0x1516f2(0x39b)
        }), _0x5b3273['appendChild'](_0x3f8e8c), _0x5b3273['appendChild'](_0xd43711), _0x5b3273['appendChild'](_0xd6c33d);

        function _0x3409d1() {
          const _0x1f4b0a = _0x1516f2
            , _0x57a1d2 = parseInt(_0x2e25cb[_0x1f4b0a(0x554)]) || 0x0
            , _0x2a526a = parseInt(_0x119e2c['value']) || 0x0
            , _0x3bcca9 = _0x57a1d2 * _0x2a526a;
          _0x412d1d[_0x1f4b0a(0x554)] = _0x3bcca9, localStorage[_0x1f4b0a(0x634)](_0x1f4b0a(0x32f), _0x57a1d2), localStorage[_0x1f4b0a(0x634)](_0x1f4b0a(0x3e5), _0x2a526a), localStorage[_0x1f4b0a(0x634)](_0x1f4b0a(0x2a7), _0x3bcca9);
        }
        _0x2e25cb[_0x1516f2(0x5fc)](_0x1516f2(0x3d9), _0x3409d1), _0x119e2c[_0x1516f2(0x5fc)](_0x1516f2(0x3d9), _0x3409d1), _0x3409d1(), _0xf02b62[_0x1516f2(0x5a0)](_0x5b3273);
        const _0x4cd352 = [{
          'id': 'campo_exec_problema'
          , 'label': 'Problema:'
          , 'key': _0x1516f2(0x5aa)
        }, {
          'id': _0x1516f2(0x33e)
          , 'label': _0x1516f2(0x48b)
          , 'key': _0x1516f2(0x2a9)
        }, {
          'id': 'campo_exec_acao'
          , 'label': _0x1516f2(0x68d)
          , 'key': 'exec_acao'
        }, {
          'id': _0x1516f2(0x597)
          , 'label': _0x1516f2(0x4b1)
          , 'key': _0x1516f2(0x63d)
        }];
        _0x4cd352[_0x1516f2(0x539)](_0x48b9b1 => {
          const _0x118893 = _0x1516f2
            , _0x5f084c = document[_0x118893(0x4a9)]('label');
          _0x5f084c[_0x118893(0x6a2)] = _0x48b9b1['label'], Object['assign'](_0x5f084c[_0x118893(0x39e)], {
            'display': _0x118893(0x2f7)
            , 'marginTop': _0x118893(0x63f)
            , 'marginBottom': _0x118893(0x596)
            , 'color': _0x118893(0x520)
            , 'fontSize': _0x118893(0x3ba)
            , 'fontWeight': '600'
          }), _0xf02b62[_0x118893(0x5a0)](_0x5f084c);
          const _0x32c0d1 = document[_0x118893(0x4a9)]('textarea');
          _0x32c0d1['id'] = _0x48b9b1['id'], _0x32c0d1[_0x118893(0x554)] = localStorage[_0x118893(0x1fb)](_0x48b9b1[_0x118893(0x4b9)]) || _0x118893(0x366), Object[_0x118893(0x48a)](_0x32c0d1[_0x118893(0x39e)], {
            'width': _0x118893(0x669)
            , 'height': _0x118893(0x2de)
            , 'padding': _0x118893(0x60c)
            , 'border': '1px\x20solid\x20#ccc'
            , 'borderRadius': _0x118893(0x596)
            , 'boxSizing': _0x118893(0x4d4)
            , 'resize': 'none'
            , 'fontSize': _0x118893(0x2d6)
            , 'fontFamily': _0x118893(0x2f4)
            , 'transition': _0x118893(0x36c)
            , 'overflowY': _0x118893(0x49b)
          }), _0x32c0d1[_0x118893(0x5fc)]('focus', () => {
            const _0x5b8841 = _0x118893;
            _0x32c0d1[_0x5b8841(0x39e)][_0x5b8841(0x217)] = _0x5b8841(0x3ca), _0x32c0d1[_0x5b8841(0x39e)][_0x5b8841(0x568)] = '0\x200\x200\x203px\x20rgba(0,\x20170,\x200,\x200.2)', _0x32c0d1['style']['outline'] = _0x5b8841(0x24f);
          }), _0x32c0d1[_0x118893(0x5fc)](_0x118893(0x4b3), () => {
            const _0x44c836 = _0x118893;
            _0x32c0d1['style'][_0x44c836(0x217)] = _0x44c836(0x41f), _0x32c0d1[_0x44c836(0x39e)][_0x44c836(0x568)] = _0x44c836(0x24f);
          }), _0x32c0d1[_0x118893(0x269)] = () => {
            const _0x19ef96 = _0x118893;
            localStorage[_0x19ef96(0x634)](_0x48b9b1[_0x19ef96(0x4b9)], _0x32c0d1[_0x19ef96(0x554)]);
          }, _0x32c0d1[_0x118893(0x5fc)](_0x118893(0x3d9), _0x544bc3), _0xf02b62[_0x118893(0x5a0)](_0x32c0d1), _0x544bc3[_0x118893(0x305)](_0x32c0d1);
        });
        const _0x32d4fc = document[_0x1516f2(0x4a9)](_0x1516f2(0x45f));
        _0x32d4fc['id'] = 'titanflow-execucao-container', Object[_0x1516f2(0x48a)](_0x32d4fc['style'], {
          'display': _0x1516f2(0x4e5)
          , 'position': _0x1516f2(0x130)
          , 'width': _0x1516f2(0x669)
          , 'marginTop': _0x1516f2(0x63f)
          , 'marginBottom': '7px'
        });
        const _0x53c9a5 = document['createElement'](_0x1516f2(0x5e3));
        _0x53c9a5['innerHTML'] = '<span\x20class=\x22btn-text\x22>Executar\x20em\x20Massa</span><span\x20class=\x22btn-progress-fill\x22></span>', _0x53c9a5[_0x1516f2(0x190)][_0x1516f2(0x5dc)](_0x1516f2(0x213)), Object[_0x1516f2(0x48a)](_0x53c9a5[_0x1516f2(0x39e)], {
          'width': _0x1516f2(0x669)
          , 'backgroundColor': _0x1516f2(0x3ca)
          , 'color': _0x1516f2(0x56f)
          , 'border': _0x1516f2(0x24f)
          , 'borderRadius': _0x1516f2(0x596)
          , 'padding': _0x1516f2(0x438)
          , 'cursor': _0x1516f2(0x226)
          , 'textAlign': _0x1516f2(0x500)
          , 'fontSize': _0x1516f2(0x2d6)
          , 'fontWeight': _0x1516f2(0x39b)
          , 'transition': _0x1516f2(0x4f8)
          , 'boxShadow': _0x1516f2(0x2c9)
        }), _0x53c9a5[_0x1516f2(0x5fc)](_0x1516f2(0x53d), () => {
          const _0x31fcf2 = _0x1516f2;
          _0x53c9a5['style'][_0x31fcf2(0x102)] = 'translateY(-2px)', _0x53c9a5['style']['filter'] = 'brightness(110%)', _0x53c9a5[_0x31fcf2(0x39e)]['boxShadow'] = _0x31fcf2(0x14a);
        }), _0x53c9a5['addEventListener']('mouseleave', () => {
          const _0x376eed = _0x1516f2;
          _0x53c9a5[_0x376eed(0x39e)][_0x376eed(0x102)] = 'translateY(0px)', _0x53c9a5['style']['filter'] = _0x376eed(0x161), _0x53c9a5[_0x376eed(0x39e)][_0x376eed(0x568)] = _0x376eed(0x2c9);
        }), _0x53c9a5[_0x1516f2(0x424)] = () => {
          const _0x52eea5 = _0x1516f2;
          if (_0x2b7552['length'] === 0x0) {
            _0x2786ff(_0x52eea5(0x4ea), 'warning');
            return;
          }
          _0xc0586b(_0x53c9a5, _0x32d4fc, _0x2cdb6a);
        }, _0x32d4fc[_0x1516f2(0x5a0)](_0x53c9a5), _0xf02b62['appendChild'](_0x32d4fc);
        if (_0x4458b3 !== _0x1516f2(0x331)) {
          const _0x47276c = document[_0x1516f2(0x4a9)](_0x1516f2(0x5b6));
          _0x47276c[_0x1516f2(0x6a2)] = _0x1516f2(0x431), Object[_0x1516f2(0x48a)](_0x47276c[_0x1516f2(0x39e)], {
            'display': _0x1516f2(0x2f7)
            , 'marginTop': _0x1516f2(0x63f)
            , 'marginBottom': _0x1516f2(0x596)
            , 'color': _0x1516f2(0x520)
            , 'fontSize': _0x1516f2(0x3ba)
            , 'fontWeight': '600'
          }), _0xf02b62[_0x1516f2(0x5a0)](_0x47276c);
          const _0x4598b6 = document['createElement'](_0x1516f2(0x69d));
          _0x4598b6['id'] = _0x1516f2(0x527), Object[_0x1516f2(0x48a)](_0x4598b6['style'], {
            'width': _0x1516f2(0x669)
            , 'padding': _0x1516f2(0x60c)
            , 'marginBottom': _0x1516f2(0x63f)
            , 'border': _0x1516f2(0x30d)
            , 'borderRadius': '5px'
            , 'boxSizing': _0x1516f2(0x4d4)
            , 'fontSize': '14px'
            , 'fontFamily': _0x1516f2(0x2f4)
            , 'transition': 'border-color\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
            , 'appearance': _0x1516f2(0x24f)
            , 'backgroundImage': 'url(\x27data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\x27)'
            , 'backgroundRepeat': _0x1516f2(0x591)
            , 'backgroundPosition': _0x1516f2(0x329)
            , 'backgroundSize': '.65em\x20auto'
          }), _0x4598b6['addEventListener'](_0x1516f2(0x4a8), () => {
            const _0x258cca = _0x1516f2;
            _0x4598b6[_0x258cca(0x39e)][_0x258cca(0x217)] = _0x258cca(0x3fc), _0x4598b6['style'][_0x258cca(0x568)] = '0\x200\x200\x203px\x20rgba(170,\x200,\x200,\x200.2)', _0x4598b6[_0x258cca(0x39e)]['outline'] = 'none';
          }), _0x4598b6[_0x1516f2(0x5fc)](_0x1516f2(0x4b3), () => {
            const _0xd02e95 = _0x1516f2;
            _0x4598b6[_0xd02e95(0x39e)][_0xd02e95(0x217)] = _0xd02e95(0x41f), _0x4598b6[_0xd02e95(0x39e)][_0xd02e95(0x568)] = 'none';
          });
          const _0x2d41d9 = [{
            'valor': ''
            , 'texto': '--\x20Selecione\x20--'
          }, {
            'valor': '3'
            , 'texto': _0x1516f2(0x40d)
          }, {
            'valor': '4'
            , 'texto': _0x1516f2(0x4fd)
          }, {
            'valor': '5'
            , 'texto': _0x1516f2(0x4cc)
          }, {
            'valor': '6'
            , 'texto': 'Sin\x20calificar'
          }];
          _0x2d41d9['forEach'](_0x16a820 => {
            const _0x3dac90 = _0x1516f2
              , _0x36035a = document[_0x3dac90(0x4a9)](_0x3dac90(0x469));
            _0x36035a['value'] = _0x16a820['valor'], _0x36035a[_0x3dac90(0x6a2)] = _0x16a820[_0x3dac90(0x23c)], _0x4598b6[_0x3dac90(0x5a0)](_0x36035a);
          }), _0xf02b62[_0x1516f2(0x5a0)](_0x4598b6);
          const _0x10bc55 = document['createElement'](_0x1516f2(0x45f));
          _0x10bc55['id'] = _0x1516f2(0x5c3), Object[_0x1516f2(0x48a)](_0x10bc55[_0x1516f2(0x39e)], {
            'display': _0x1516f2(0x4e5)
            , 'marginTop': _0x1516f2(0x16d)
            , 'marginBottom': _0x1516f2(0x2b9)
          });
          const _0x5ee67b = document[_0x1516f2(0x4a9)](_0x1516f2(0x5e3));
          _0x5ee67b['id'] = _0x1516f2(0x536), _0x5ee67b['innerHTML'] = '<span\x20class=\x22btn-text\x22>Fechar\x20em\x20Massa</span><span\x20class=\x22btn-progress-fill\x22></span>', _0x5ee67b['classList']['add'](_0x1516f2(0x213)), Object[_0x1516f2(0x48a)](_0x5ee67b[_0x1516f2(0x39e)], {
            'width': _0x1516f2(0x669)
            , 'backgroundColor': _0x1516f2(0x3fc)
            , 'color': 'white'
            , 'border': _0x1516f2(0x24f)
            , 'borderRadius': '5px'
            , 'padding': _0x1516f2(0x438)
            , 'cursor': _0x1516f2(0x226)
            , 'textAlign': _0x1516f2(0x500)
            , 'fontSize': _0x1516f2(0x2d6)
            , 'fontWeight': 'bold'
            , 'transition': _0x1516f2(0x4f8)
            , 'boxShadow': '0\x202px\x204px\x20rgba(0,0,0,0.15)'
          }), _0x5ee67b[_0x1516f2(0x5fc)]('mouseenter', () => {
            const _0x57ddf3 = _0x1516f2;
            _0x5ee67b[_0x57ddf3(0x39e)][_0x57ddf3(0x102)] = _0x57ddf3(0x5d6), _0x5ee67b[_0x57ddf3(0x39e)][_0x57ddf3(0x5fd)] = _0x57ddf3(0x319), _0x5ee67b[_0x57ddf3(0x39e)][_0x57ddf3(0x568)] = '0\x204px\x2010px\x20rgba(0,0,0,0.25)';
          }), _0x5ee67b['addEventListener'](_0x1516f2(0x4df), () => {
            const _0x2eeb11 = _0x1516f2;
            _0x5ee67b[_0x2eeb11(0x39e)][_0x2eeb11(0x102)] = _0x2eeb11(0x37b), _0x5ee67b['style'][_0x2eeb11(0x5fd)] = _0x2eeb11(0x161), _0x5ee67b['style'][_0x2eeb11(0x568)] = _0x2eeb11(0x2c9);
          }), _0x5ee67b[_0x1516f2(0x424)] = () => {
            const _0xda3f34 = _0x1516f2;
            if (_0x2b7552[_0xda3f34(0x570)] === 0x0) {
              _0x2786ff(_0xda3f34(0x307), _0xda3f34(0x65a));
              return;
            }
            const _0x306980 = document[_0xda3f34(0x405)](_0xda3f34(0x527))[_0xda3f34(0x554)];
            if (!_0x306980) {
              _0x2786ff(_0xda3f34(0x3f2), _0xda3f34(0x65a));
              return;
            }
            _0xc0586b(_0x5ee67b, _0x10bc55, _0x1e1e0a);
          }, _0x10bc55['appendChild'](_0x5ee67b), _0xf02b62[_0x1516f2(0x5a0)](_0x10bc55);
        }
      }
      _0x32d52e[_0x4312b2(0x424)] = () => {
        const _0x2170c4 = _0x4312b2;
        sessionStorage['setItem'](_0x2170c4(0x2be), 'execucao'), _0x1f742f();
      }, _0x32a5d7[_0x4312b2(0x5a0)](_0x322bee);
      const _0xf02b62 = document['createElement'](_0x4312b2(0x45f));
      _0xf02b62['id'] = _0x4312b2(0x2cc), _0x32a5d7[_0x4312b2(0x5a0)](_0xf02b62);
      const _0x38017c = document['createElement'](_0x4312b2(0x45f));
      _0x38017c['id'] = _0x4312b2(0x54c), Object[_0x4312b2(0x48a)](_0x38017c['style'], {
        'display': _0x4312b2(0x4e5)
        , 'gap': '5px'
        , 'marginBottom': '10px'
      });
      const _0x3034e5 = document['createElement'](_0x4312b2(0x5e3));
      _0x3034e5['id'] = _0x4312b2(0x2dc), _0x3034e5['innerHTML'] = _0x4312b2(0x12d), _0x3034e5['classList'][_0x4312b2(0x5dc)](_0x4312b2(0x213)), Object['assign'](_0x3034e5['style'], {
        'backgroundColor': '#3366ff'
        , 'color': 'white'
        , 'border': _0x4312b2(0x24f)
        , 'borderRadius': '5px'
        , 'padding': _0x4458b3 === _0x4312b2(0x331) ? '3px\x203px' : _0x4312b2(0x2e1)
        , 'cursor': _0x4312b2(0x226)
        , 'textAlign': _0x4312b2(0x500)
        , 'fontSize': _0x4312b2(0x642)
        , 'fontWeight': _0x4312b2(0x39b)
        , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
        , 'boxShadow': '0\x202px\x204px\x20rgba(0,0,0,0.15)'
      }), _0x3034e5[_0x4312b2(0x5fc)](_0x4312b2(0x53d), () => {
        const _0x5f5c16 = _0x4312b2;
        _0x3034e5[_0x5f5c16(0x39e)][_0x5f5c16(0x102)] = 'translateY(-2px)', _0x3034e5[_0x5f5c16(0x39e)][_0x5f5c16(0x5fd)] = _0x5f5c16(0x319), _0x3034e5[_0x5f5c16(0x39e)][_0x5f5c16(0x568)] = '0\x204px\x2010px\x20rgba(0,0,0,0.25)';
      }), _0x3034e5[_0x4312b2(0x5fc)](_0x4312b2(0x4df), () => {
        const _0x466df6 = _0x4312b2;
        _0x3034e5[_0x466df6(0x39e)][_0x466df6(0x102)] = _0x466df6(0x37b), _0x3034e5[_0x466df6(0x39e)]['filter'] = _0x466df6(0x161), _0x3034e5[_0x466df6(0x39e)][_0x466df6(0x568)] = _0x466df6(0x2c9);
      }), _0x3034e5['addEventListener'](_0x4312b2(0x109), () => {
        const _0x39270f = _0x4312b2;
        _0x3034e5[_0x39270f(0x39e)]['transform'] = _0x39270f(0x3c0), _0x3034e5[_0x39270f(0x39e)]['boxShadow'] = 'none';
      }), _0x3034e5[_0x4312b2(0x5fc)](_0x4312b2(0x2f1), () => {
        const _0xdfa522 = _0x4312b2;
        _0x3034e5[_0xdfa522(0x225)](_0xdfa522(0x334)) && (_0x3034e5['style'][_0xdfa522(0x102)] = _0xdfa522(0x5d6), _0x3034e5[_0xdfa522(0x39e)][_0xdfa522(0x568)] = _0xdfa522(0x14a));
      }), _0x3034e5[_0x4312b2(0x424)] = _0x5907ab, _0x38017c[_0x4312b2(0x5a0)](_0x3034e5);
      const _0x564675 = document[_0x4312b2(0x4a9)]('button');
      _0x564675['innerHTML'] = _0x4312b2(0x33c), _0x564675[_0x4312b2(0x190)][_0x4312b2(0x5dc)]('titanflow-action-btn'), Object['assign'](_0x564675[_0x4312b2(0x39e)], {
        'backgroundColor': _0x4312b2(0x466)
        , 'color': _0x4312b2(0x56f)
        , 'border': _0x4312b2(0x24f)
        , 'borderRadius': _0x4312b2(0x596)
        , 'padding': _0x4458b3 === _0x4312b2(0x331) ? '3px\x203px' : _0x4312b2(0x2e1)
        , 'cursor': _0x4312b2(0x226)
        , 'textAlign': 'center'
        , 'fontSize': _0x4312b2(0x642)
        , 'fontWeight': _0x4312b2(0x39b)
        , 'transition': _0x4312b2(0x4f8)
        , 'boxShadow': _0x4312b2(0x2c9)
      }), _0x564675[_0x4312b2(0x5fc)]('mouseenter', () => {
        const _0x16aa51 = _0x4312b2;
        _0x564675[_0x16aa51(0x39e)][_0x16aa51(0x102)] = _0x16aa51(0x5d6), _0x564675['style']['filter'] = _0x16aa51(0x319), _0x564675[_0x16aa51(0x39e)][_0x16aa51(0x568)] = _0x16aa51(0x14a);
      }), _0x564675[_0x4312b2(0x5fc)](_0x4312b2(0x4df), () => {
        const _0x5840fb = _0x4312b2;
        _0x564675['style'][_0x5840fb(0x102)] = _0x5840fb(0x37b), _0x564675[_0x5840fb(0x39e)][_0x5840fb(0x5fd)] = _0x5840fb(0x161), _0x564675[_0x5840fb(0x39e)]['boxShadow'] = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
      }), _0x564675[_0x4312b2(0x5fc)](_0x4312b2(0x109), () => {
        const _0x4bb6d9 = _0x4312b2;
        _0x564675[_0x4bb6d9(0x39e)][_0x4bb6d9(0x102)] = _0x4bb6d9(0x3c0), _0x564675['style'][_0x4bb6d9(0x568)] = _0x4bb6d9(0x24f);
      }), _0x564675[_0x4312b2(0x5fc)](_0x4312b2(0x2f1), () => {
        const _0x4aa1a0 = _0x4312b2;
        _0x564675[_0x4aa1a0(0x225)](_0x4aa1a0(0x334)) && (_0x564675['style'][_0x4aa1a0(0x102)] = 'translateY(-2px)', _0x564675[_0x4aa1a0(0x39e)][_0x4aa1a0(0x568)] = _0x4aa1a0(0x14a));
      }), _0x564675[_0x4312b2(0x424)] = _0x5b9e12, _0x38017c[_0x4312b2(0x5a0)](_0x564675);
      if (_0x4458b3 !== _0x4312b2(0x331)) {
        const _0x50d985 = document[_0x4312b2(0x4a9)]('button');
        _0x50d985[_0x4312b2(0x417)] = _0x4312b2(0x524), _0x50d985['classList']['add'](_0x4312b2(0x213)), Object['assign'](_0x50d985[_0x4312b2(0x39e)], {
          'backgroundColor': _0x4312b2(0x1ef)
          , 'color': _0x4312b2(0x56f)
          , 'border': _0x4312b2(0x24f)
          , 'borderRadius': '5px'
          , 'padding': _0x4312b2(0x2e1)
          , 'cursor': _0x4312b2(0x226)
          , 'textAlign': _0x4312b2(0x500)
          , 'fontSize': _0x4312b2(0x642)
          , 'fontWeight': _0x4312b2(0x39b)
          , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
          , 'boxShadow': _0x4312b2(0x2c9)
        }), _0x50d985[_0x4312b2(0x5fc)]('mouseenter', () => {
          const _0x5ea8ef = _0x4312b2;
          _0x50d985[_0x5ea8ef(0x39e)][_0x5ea8ef(0x102)] = _0x5ea8ef(0x5d6), _0x50d985[_0x5ea8ef(0x39e)]['filter'] = _0x5ea8ef(0x319), _0x50d985[_0x5ea8ef(0x39e)]['boxShadow'] = _0x5ea8ef(0x14a);
        }), _0x50d985[_0x4312b2(0x5fc)](_0x4312b2(0x4df), () => {
          const _0x3d6926 = _0x4312b2;
          _0x50d985[_0x3d6926(0x39e)][_0x3d6926(0x102)] = _0x3d6926(0x37b), _0x50d985['style'][_0x3d6926(0x5fd)] = _0x3d6926(0x161), _0x50d985['style'][_0x3d6926(0x568)] = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
        }), _0x50d985[_0x4312b2(0x5fc)](_0x4312b2(0x109), () => {
          const _0x4d58cd = _0x4312b2;
          _0x50d985[_0x4d58cd(0x39e)][_0x4d58cd(0x102)] = _0x4d58cd(0x3c0), _0x50d985[_0x4d58cd(0x39e)][_0x4d58cd(0x568)] = _0x4d58cd(0x24f);
        }), _0x50d985['addEventListener'](_0x4312b2(0x2f1), () => {
          const _0x41715c = _0x4312b2;
          _0x50d985[_0x41715c(0x225)](':hover') && (_0x50d985['style'][_0x41715c(0x102)] = _0x41715c(0x5d6), _0x50d985['style'][_0x41715c(0x568)] = '0\x204px\x2010px\x20rgba(0,0,0,0.25)');
        }), _0x50d985['onclick'] = () => {
          const _0x392ee9 = _0x4312b2;
          if (_0x2b7552['length'] === 0x0) {
            _0x2786ff(_0x392ee9(0x59c), _0x392ee9(0x65a));
            return;
          }
          const _0x249b05 = document[_0x392ee9(0x405)]('titanflow-botoes-acao');
          _0xc0586b(_0x50d985, _0x249b05, _0x55e3a8);
        }, _0x38017c[_0x4312b2(0x5a0)](_0x50d985);
        const _0xef7eab = document[_0x4312b2(0x4a9)](_0x4312b2(0x5e3));
        _0xef7eab[_0x4312b2(0x417)] = '<span\x20class=\x22btn-text\x22>❌\x20Remover\x20Mão\x20de\x20Obra</span><span\x20class=\x22btn-progress-fill\x22></span>', _0xef7eab[_0x4312b2(0x190)][_0x4312b2(0x5dc)](_0x4312b2(0x213)), Object[_0x4312b2(0x48a)](_0xef7eab['style'], {
          'backgroundColor': '#ff3300'
          , 'color': _0x4312b2(0x56f)
          , 'border': 'none'
          , 'borderRadius': _0x4312b2(0x596)
          , 'padding': _0x4312b2(0x2e1)
          , 'cursor': _0x4312b2(0x226)
          , 'textAlign': 'center'
          , 'fontSize': _0x4312b2(0x642)
          , 'fontWeight': 'bold'
          , 'transition': _0x4312b2(0x4f8)
          , 'boxShadow': '0\x202px\x204px\x20rgba(0,0,0,0.15)'
        }), _0xef7eab['addEventListener'](_0x4312b2(0x53d), () => {
          const _0x4c7717 = _0x4312b2;
          _0xef7eab['style']['transform'] = _0x4c7717(0x5d6), _0xef7eab[_0x4c7717(0x39e)][_0x4c7717(0x5fd)] = 'brightness(110%)', _0xef7eab[_0x4c7717(0x39e)][_0x4c7717(0x568)] = _0x4c7717(0x14a);
        }), _0xef7eab[_0x4312b2(0x5fc)]('mouseleave', () => {
          const _0x23cff0 = _0x4312b2;
          _0xef7eab[_0x23cff0(0x39e)][_0x23cff0(0x102)] = _0x23cff0(0x37b), _0xef7eab['style'][_0x23cff0(0x5fd)] = _0x23cff0(0x161), _0xef7eab[_0x23cff0(0x39e)][_0x23cff0(0x568)] = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
        }), _0xef7eab[_0x4312b2(0x5fc)](_0x4312b2(0x109), () => {
          const _0x166863 = _0x4312b2;
          _0xef7eab[_0x166863(0x39e)][_0x166863(0x102)] = _0x166863(0x3c0), _0xef7eab[_0x166863(0x39e)][_0x166863(0x568)] = _0x166863(0x24f);
        }), _0xef7eab[_0x4312b2(0x5fc)](_0x4312b2(0x2f1), () => {
          const _0x2099df = _0x4312b2;
          _0xef7eab['matches'](':hover') && (_0xef7eab[_0x2099df(0x39e)][_0x2099df(0x102)] = _0x2099df(0x5d6), _0xef7eab[_0x2099df(0x39e)][_0x2099df(0x568)] = _0x2099df(0x14a));
        }), _0xef7eab[_0x4312b2(0x424)] = () => {
          const _0x5d43b0 = _0x4312b2;
          if (_0x2b7552['length'] === 0x0) {
            _0x2786ff('Nenhuma\x20ordem\x20selecionada\x20para\x20remover\x20a\x20mão\x20de\x20obra!', _0x5d43b0(0x65a));
            return;
          }
          const _0x25b081 = document['getElementById'](_0x5d43b0(0x54c));
          _0xc0586b(_0xef7eab, _0x25b081, _0x5583cc);
        }, _0x38017c['appendChild'](_0xef7eab);
        const _0xa0b891 = document[_0x4312b2(0x4a9)](_0x4312b2(0x5e3));
        _0xa0b891[_0x4312b2(0x417)] = '<span\x20class=\x22btn-text\x22>⚡\x20Ativar\x20em\x20Massa</span><span\x20class=\x22btn-progress-fill\x22></span>', _0xa0b891[_0x4312b2(0x190)][_0x4312b2(0x5dc)](_0x4312b2(0x213)), Object[_0x4312b2(0x48a)](_0xa0b891[_0x4312b2(0x39e)], {
          'backgroundColor': _0x4312b2(0x155)
          , 'color': 'white'
          , 'border': _0x4312b2(0x24f)
          , 'borderRadius': _0x4312b2(0x596)
          , 'padding': _0x4312b2(0x2e1)
          , 'cursor': 'pointer'
          , 'textAlign': _0x4312b2(0x500)
          , 'fontSize': '12px'
          , 'fontWeight': _0x4312b2(0x39b)
          , 'transition': _0x4312b2(0x4f8)
          , 'boxShadow': _0x4312b2(0x2c9)
        }), _0xa0b891[_0x4312b2(0x5fc)](_0x4312b2(0x53d), () => {
          const _0x30599a = _0x4312b2;
          _0xa0b891[_0x30599a(0x39e)][_0x30599a(0x102)] = _0x30599a(0x5d6), _0xa0b891['style']['filter'] = _0x30599a(0x319), _0xa0b891[_0x30599a(0x39e)]['boxShadow'] = _0x30599a(0x14a);
        }), _0xa0b891['addEventListener'](_0x4312b2(0x4df), () => {
          const _0x4c20f4 = _0x4312b2;
          _0xa0b891['style'][_0x4c20f4(0x102)] = _0x4c20f4(0x37b), _0xa0b891['style'][_0x4c20f4(0x5fd)] = _0x4c20f4(0x161), _0xa0b891[_0x4c20f4(0x39e)][_0x4c20f4(0x568)] = _0x4c20f4(0x2c9);
        }), _0xa0b891[_0x4312b2(0x5fc)]('mousedown', () => {
          const _0x1ff4be = _0x4312b2;
          _0xa0b891[_0x1ff4be(0x39e)][_0x1ff4be(0x102)] = 'translateY(1px)', _0xa0b891[_0x1ff4be(0x39e)][_0x1ff4be(0x568)] = _0x1ff4be(0x24f);
        }), _0xa0b891[_0x4312b2(0x5fc)]('mouseup', () => {
          const _0x85e1de = _0x4312b2;
          _0xa0b891[_0x85e1de(0x225)](':hover') && (_0xa0b891[_0x85e1de(0x39e)][_0x85e1de(0x102)] = _0x85e1de(0x5d6), _0xa0b891['style'][_0x85e1de(0x568)] = '0\x204px\x2010px\x20rgba(0,0,0,0.25)');
        }), _0xa0b891[_0x4312b2(0x424)] = () => {
          const _0x24aa1c = _0x4312b2;
          if (_0x2b7552[_0x24aa1c(0x570)] === 0x0) {
            _0x2786ff(_0x24aa1c(0x481), _0x24aa1c(0x65a));
            return;
          }
          const _0x58dd8d = document[_0x24aa1c(0x405)](_0x24aa1c(0x54c));
          _0xc0586b(_0xa0b891, _0x58dd8d, _0x224161);
        }, _0x38017c['appendChild'](_0xa0b891);
      }
      const _0x15cf9a = document[_0x4312b2(0x4a9)]('hr');
      Object[_0x4312b2(0x48a)](_0x15cf9a['style'], {
        'margin': _0x4458b3 === 'tecnico' ? _0x4312b2(0x41e) : _0x4312b2(0x609)
        , 'border': '0'
        , 'borderTop': _0x4458b3 === _0x4312b2(0x331) ? _0x4312b2(0x65d) : _0x4312b2(0x476)
      });
      const _0x480f64 = document[_0x4312b2(0x4a9)](_0x4312b2(0x45f));
      Object[_0x4312b2(0x48a)](_0x480f64[_0x4312b2(0x39e)], {
        'display': 'flex'
        , 'justifyContent': 'space-between'
        , 'alignItems': 'center'
        , 'paddingBottom': _0x4312b2(0x60c)
        , 'borderBottom': _0x4312b2(0x30d)
        , 'marginBottom': _0x4312b2(0x63f)
      });
      const _0x106efb = document[_0x4312b2(0x4a9)]('h3');
      _0x106efb[_0x4312b2(0x6a2)] = _0x4312b2(0x4a5), Object['assign'](_0x106efb[_0x4312b2(0x39e)], {
        'color': _0x4312b2(0x4e2)
        , 'margin': 0x0
        , 'fontSize': _0x4312b2(0x62b)
        , 'fontWeight': _0x4312b2(0x62c)
      });
      const _0x14ddf1 = document[_0x4312b2(0x4a9)](_0x4312b2(0x5e3));
      _0x14ddf1['innerHTML'] = '❌', Object[_0x4312b2(0x48a)](_0x14ddf1['style'], {
        'backgroundColor': _0x4312b2(0x395)
        , 'color': _0x4312b2(0x56f)
        , 'border': _0x4312b2(0x24f)
        , 'borderRadius': _0x4312b2(0x596)
        , 'padding': _0x4312b2(0x394)
        , 'fontSize': '14px'
        , 'fontWeight': _0x4312b2(0x39b)
        , 'cursor': 'pointer'
        , 'lineHeight': '1'
        , 'boxShadow': _0x4312b2(0x2c9)
        , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
      }), _0x14ddf1[_0x4312b2(0x5fc)](_0x4312b2(0x53d), () => {
        const _0x5de8c7 = _0x4312b2;
        _0x14ddf1['style'][_0x5de8c7(0x102)] = _0x5de8c7(0x5d6), _0x14ddf1[_0x5de8c7(0x39e)][_0x5de8c7(0x5fd)] = _0x5de8c7(0x685), _0x14ddf1['style'][_0x5de8c7(0x568)] = _0x5de8c7(0x564);
      }), _0x14ddf1[_0x4312b2(0x5fc)](_0x4312b2(0x4df), () => {
        const _0x30c173 = _0x4312b2;
        _0x14ddf1['style'][_0x30c173(0x102)] = 'translateY(0px)', _0x14ddf1['style'][_0x30c173(0x5fd)] = _0x30c173(0x161), _0x14ddf1[_0x30c173(0x39e)]['boxShadow'] = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
      }), _0x14ddf1[_0x4312b2(0x5fc)]('mousedown', () => {
        const _0x11905a = _0x4312b2;
        _0x14ddf1[_0x11905a(0x39e)][_0x11905a(0x102)] = _0x11905a(0x3c0), _0x14ddf1['style'][_0x11905a(0x568)] = _0x11905a(0x24f);
      }), _0x14ddf1[_0x4312b2(0x5fc)](_0x4312b2(0x2f1), () => {
        const _0x2e322f = _0x4312b2;
        _0x14ddf1[_0x2e322f(0x39e)][_0x2e322f(0x102)] = _0x2e322f(0x5d6), _0x14ddf1[_0x2e322f(0x39e)][_0x2e322f(0x568)] = _0x2e322f(0x564);
      }), _0x14ddf1[_0x4312b2(0x424)] = () => {
        const _0x1300fd = _0x4312b2;
        for (let _0xcd77b0 = 0x0; _0xcd77b0 < 0x6; _0xcd77b0++) {
          const _0x55d019 = document[_0x1300fd(0x405)](_0x1300fd(0x5bd) + _0xcd77b0);
          _0x55d019 && (_0x55d019['selectedIndex'] = 0x0, _0x2db1a3[_0x1300fd(0x3d4)][_0xcd77b0] = '');
        }
        _0x13dd7d();
      }, _0x480f64['appendChild'](_0x106efb), _0x480f64[_0x4312b2(0x5a0)](_0x14ddf1);
      const _0x11972b = document[_0x4312b2(0x4a9)]('p');
      _0x11972b[_0x4312b2(0x6a2)] = _0x4312b2(0x5f1), Object[_0x4312b2(0x48a)](_0x11972b['style'], {
        'margin': _0x4312b2(0x235)
        , 'fontSize': _0x4312b2(0x2d6)
        , 'color': _0x4312b2(0x3ce)
        , 'lineHeight': '1.4'
      });
      const _0x2ef9f0 = [];
      for (let _0x43bc1d = 0x0; _0x43bc1d < 0x5; _0x43bc1d++) {
        const _0x2dec8e = document[_0x4312b2(0x4a9)](_0x4312b2(0x45f));
        _0x2dec8e['id'] = _0x4312b2(0x515) + _0x43bc1d, _0x2dec8e['style']['marginBottom'] = _0x4312b2(0x3f7);
        const _0x324350 = document[_0x4312b2(0x4a9)](_0x4312b2(0x5b6));
        _0x324350[_0x4312b2(0x6a2)] = _0x4312b2(0x282) + (_0x43bc1d + 0x1) + ':', _0x324350['htmlFor'] = _0x4312b2(0x5bd) + _0x43bc1d, Object[_0x4312b2(0x48a)](_0x324350[_0x4312b2(0x39e)], {
          'display': _0x4312b2(0x2f7)
          , 'fontSize': _0x4312b2(0x2d6)
          , 'fontWeight': 'bold'
          , 'color': _0x4312b2(0x335)
        }), _0x2dec8e[_0x4312b2(0x5a0)](_0x324350);
        const _0x1c6e55 = document[_0x4312b2(0x4a9)]('select');
        _0x1c6e55['id'] = _0x4312b2(0x5bd) + _0x43bc1d, Object[_0x4312b2(0x48a)](_0x1c6e55['style'], {
          'width': _0x4312b2(0x669)
          , 'marginBottom': _0x4312b2(0x596)
          , 'padding': _0x4312b2(0x643)
          , 'fontSize': _0x4312b2(0x2d6)
          , 'backgroundColor': _0x4312b2(0x3e1)
          , 'border': _0x4312b2(0x4f1)
          , 'borderRadius': _0x4312b2(0x596)
          , 'cursor': _0x4312b2(0x226)
          , 'boxShadow': _0x4312b2(0x3f1)
          , 'transition': _0x4312b2(0x1fa)
          , 'appearance': 'none'
          , 'webkitAppearance': _0x4312b2(0x24f)
          , 'mozAppearance': _0x4312b2(0x24f)
          , 'backgroundImage': 'url(\x22data:image/svg+xml,%3csvg\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20viewBox=\x270\x200\x2016\x2016\x27%3e%3cpath\x20fill=\x27none\x27\x20stroke=\x27%23343a40\x27\x20stroke-linecap=\x27round\x27\x20stroke-linejoin=\x27round\x27\x20stroke-width=\x272\x27\x20d=\x27M2\x205l6\x206\x206-6\x27/%3e%3c/svg%3e\x22)'
          , 'backgroundRepeat': 'no-repeat'
          , 'backgroundPosition': 'right\x200.75rem\x20center'
          , 'backgroundSize': _0x4312b2(0xf6)
        }), _0x1c6e55[_0x4312b2(0x5fc)](_0x4312b2(0x53d), () => {
          const _0x50f0f6 = _0x4312b2;
          _0x1c6e55['style'][_0x50f0f6(0x217)] = _0x50f0f6(0x65f);
        }), _0x1c6e55[_0x4312b2(0x5fc)](_0x4312b2(0x4df), () => {
          const _0xb37bf0 = _0x4312b2;
          _0x1c6e55[_0xb37bf0(0x39e)][_0xb37bf0(0x217)] = _0xb37bf0(0x379);
        }), _0x1c6e55[_0x4312b2(0x534)][_0x4312b2(0x54d)] = _0x43bc1d, _0x1c6e55[_0x4312b2(0x27a)] = function () {
          const _0x32863c = _0x4312b2;
          _0x2db1a3[_0x32863c(0x3d4)][_0x43bc1d] = this['value'], _0x13dd7d();
        }, _0x3c3cfc[_0x4312b2(0x539)](_0x579df8 => {
          const _0x466290 = _0x4312b2
            , _0x121e6c = document[_0x466290(0x4a9)](_0x466290(0x469));
          _0x121e6c[_0x466290(0x554)] = _0x579df8['id'], _0x121e6c[_0x466290(0x6a2)] = _0x579df8[_0x466290(0x4e9)], _0x121e6c[_0x466290(0x323)] = _0x2db1a3[_0x466290(0x3d4)][_0x43bc1d] === _0x579df8['id'], _0x1c6e55[_0x466290(0x5a0)](_0x121e6c);
        }), _0x2dec8e['appendChild'](_0x1c6e55), _0x2ef9f0[_0x4312b2(0x2d4)](_0x2dec8e);
      }

      function _0x415963() {
        const _0x57e512 = _0x4312b2;
        _0x43e2ff[_0x57e512(0x554)] = _0x2b7552[_0x57e512(0x42f)]('\x0a'), _0x43e2ff['dispatchEvent'](new Event(_0x57e512(0x3d9))), _0xf02b62[_0x57e512(0x417)] = '', _0xf02b62[_0x57e512(0x5a0)](_0x4d9c32), _0xf02b62['appendChild'](_0xef89ae), _0xf02b62[_0x57e512(0x5a0)](_0x43e2ff), _0xf02b62[_0x57e512(0x5a0)](_0x38017c), _0x2029e5 = document[_0x57e512(0x4a9)](_0x57e512(0x45f)), _0x2029e5['id'] = _0x57e512(0x4b8), Object[_0x57e512(0x48a)](_0x2029e5[_0x57e512(0x39e)], {
          'backgroundColor': '#e9ecef'
          , 'color': _0x57e512(0x4b5)
          , 'border': '1px\x20solid\x20#dee2e6'
          , 'borderRadius': _0x57e512(0x2b9)
          , 'padding': _0x4458b3 === _0x57e512(0x331) ? _0x57e512(0x3f7) : _0x57e512(0x63f)
          , 'fontWeight': '600'
          , 'textAlign': _0x57e512(0x500)
          , 'fontSize': _0x57e512(0x2d6)
          , 'marginBottom': _0x4458b3 === 'tecnico' ? _0x57e512(0x65d) : _0x57e512(0x63f)
        }), _0xf02b62[_0x57e512(0x5a0)](_0x2029e5), _0x5f5540(), _0xf02b62['appendChild'](_0x15cf9a), _0x4458b3 !== _0x57e512(0x331) && (_0xf02b62[_0x57e512(0x5a0)](_0x480f64), _0xf02b62[_0x57e512(0x5a0)](_0x11972b), _0x2ef9f0['forEach'](_0x341420 => _0xf02b62[_0x57e512(0x5a0)](_0x341420)));
      }
      const _0x4d9c32 = document['createElement'](_0x4312b2(0x5e3));
      _0x4d9c32[_0x4312b2(0x6a2)] = _0x4312b2(0x139), Object['assign'](_0x4d9c32['style'], {
        'width': '100%'
        , 'backgroundColor': _0x4312b2(0x4e2)
        , 'color': _0x4312b2(0x56f)
        , 'border': _0x4312b2(0x24f)
        , 'borderRadius': _0x4312b2(0x596)
        , 'padding': _0x4458b3 === _0x4312b2(0x331) ? '3px\x203px' : '5px\x205px'
        , 'marginBottom': _0x4312b2(0x63f)
        , 'cursor': _0x4312b2(0x226)
        , 'textAlign': 'center'
        , 'fontSize': _0x4312b2(0x2d6)
        , 'fontWeight': 'bold'
        , 'transition': _0x4312b2(0x4f8)
        , 'boxShadow': _0x4312b2(0x2c9)
      }), _0x4d9c32[_0x4312b2(0x5fc)](_0x4312b2(0x53d), () => {
        const _0x42b96f = _0x4312b2;
        _0x4d9c32[_0x42b96f(0x39e)]['transform'] = 'translateY(-2px)', _0x4d9c32[_0x42b96f(0x39e)][_0x42b96f(0x5fd)] = 'brightness(110%)', _0x4d9c32[_0x42b96f(0x39e)][_0x42b96f(0x568)] = _0x42b96f(0x14a);
      }), _0x4d9c32[_0x4312b2(0x5fc)]('mouseleave', () => {
        const _0x1b8b84 = _0x4312b2;
        _0x4d9c32[_0x1b8b84(0x39e)][_0x1b8b84(0x102)] = 'translateY(0px)', _0x4d9c32[_0x1b8b84(0x39e)]['filter'] = 'brightness(100%)', _0x4d9c32[_0x1b8b84(0x39e)][_0x1b8b84(0x568)] = _0x1b8b84(0x2c9);
      }), _0x4d9c32[_0x4312b2(0x5fc)](_0x4312b2(0x109), () => {
        const _0x4fc979 = _0x4312b2;
        _0x4d9c32[_0x4fc979(0x39e)]['transform'] = 'translateY(1px)', _0x4d9c32[_0x4fc979(0x39e)][_0x4fc979(0x568)] = _0x4fc979(0x24f);
      }), _0x4d9c32[_0x4312b2(0x5fc)]('mouseup', () => {
        const _0x170f92 = _0x4312b2;
        _0x4d9c32['matches'](':hover') && (_0x4d9c32['style']['transform'] = _0x170f92(0x5d6), _0x4d9c32[_0x170f92(0x39e)]['boxShadow'] = _0x170f92(0x14a));
      }), _0x4d9c32[_0x4312b2(0x424)] = _0x39b14b;
      const _0xef89ae = document[_0x4312b2(0x4a9)](_0x4312b2(0x5b6));
      _0xef89ae[_0x4312b2(0x6a2)] = 'Ordens:\x20(uma\x20ordem\x20por\x20linha):', Object[_0x4312b2(0x48a)](_0xef89ae[_0x4312b2(0x39e)], {
        'display': 'flex'
        , 'justifyContent': 'space-between'
        , 'marginBottom': _0x4458b3 === 'tecnico' ? _0x4312b2(0x60c) : '10px'
        , 'color': _0x4312b2(0x520)
        , 'fontSize': _0x4312b2(0x3ba)
        , 'fontWeight': _0x4312b2(0x62c)
      });
      const _0x42a92e = document[_0x4312b2(0x4a9)](_0x4312b2(0x3fe));
      _0x42a92e['id'] = _0x4312b2(0x240), _0x42a92e[_0x4312b2(0x6a2)] = _0x4312b2(0x27c), Object[_0x4312b2(0x48a)](_0x42a92e['style'], {
        'color': _0x4312b2(0x4e2)
        , 'fontWeight': _0x4312b2(0x55a)
        , 'fontSize': _0x4312b2(0x642)
      }), _0xef89ae[_0x4312b2(0x5a0)](_0x42a92e);
      const _0x43e2ff = document['createElement'](_0x4312b2(0x4d8));
      _0x43e2ff['id'] = _0x4312b2(0x480), _0x43e2ff[_0x4312b2(0x41d)] = _0x4312b2(0x36d), Object[_0x4312b2(0x48a)](_0x43e2ff[_0x4312b2(0x39e)], {
        'width': _0x4312b2(0x669)
        , 'height': _0x4458b3 === _0x4312b2(0x331) ? _0x4312b2(0x249) : _0x4312b2(0x16a)
        , 'marginBottom': _0x4312b2(0x63f)
        , 'padding': _0x4458b3 === _0x4312b2(0x331) ? _0x4312b2(0x2e1) : '8px\x205px'
        , 'border': _0x4312b2(0x30d)
        , 'borderRadius': '5px'
        , 'boxSizing': _0x4312b2(0x4d4)
        , 'resize': _0x4312b2(0x24e)
        , 'fontSize': _0x4312b2(0x2d6)
        , 'fontFamily': _0x4312b2(0x2f4)
        , 'transition': _0x4312b2(0x1fa)
      });
      const _0x91544c = () => {
        const _0x1fa55e = _0x4312b2
          , _0x2a6207 = _0x43e2ff[_0x1fa55e(0x554)][_0x1fa55e(0x3f0)]('\x0a')
          , _0x599037 = _0x2a6207[_0x1fa55e(0x113)](_0x3d25e0 => {
            const _0x3d6d1b = _0x1fa55e
              , _0x2114eb = _0x3d25e0[_0x3d6d1b(0x2ee)](/\D/g, '');
            return _0x2114eb[_0x3d6d1b(0x387)](0x0, 0x6);
          });
        _0x43e2ff[_0x1fa55e(0x554)] = _0x599037[_0x1fa55e(0x42f)]('\x0a');
        const _0x5df5f8 = _0x599037['filter'](_0x1cc4c9 => _0x1cc4c9['trim']() !== '')[_0x1fa55e(0x570)];
        _0x42a92e[_0x1fa55e(0x6a2)] = _0x5df5f8 + _0x1fa55e(0x44a);
      };
      _0x43e2ff['addEventListener'](_0x4312b2(0x3d9), _0x91544c), _0x43e2ff['addEventListener']('paste', _0x5e7b6d => {
        const _0x50904a = _0x4312b2;
        _0x5e7b6d[_0x50904a(0x69b)]();
        const _0x23f57f = (_0x5e7b6d[_0x50904a(0x3dc)] || window[_0x50904a(0x3dc)])[_0x50904a(0x3a5)](_0x50904a(0x353))
          , _0x19f76c = _0x23f57f['replace'](/[,;\s]+/g, '\x0a')
          , _0x445e93 = _0x43e2ff[_0x50904a(0x4c4)]
          , _0xd1ed99 = _0x43e2ff[_0x50904a(0x1b1)];
        _0x43e2ff[_0x50904a(0x554)] = _0x43e2ff['value'][_0x50904a(0x2fd)](0x0, _0x445e93) + _0x19f76c + _0x43e2ff[_0x50904a(0x554)][_0x50904a(0x2fd)](_0xd1ed99), _0x91544c();
      }), _0x43e2ff[_0x4312b2(0x5fc)](_0x4312b2(0x4a8), () => {
        const _0x3c123c = _0x4312b2;
        _0x43e2ff[_0x3c123c(0x39e)][_0x3c123c(0x217)] = _0x3c123c(0x4e2), _0x43e2ff[_0x3c123c(0x39e)][_0x3c123c(0x568)] = _0x3c123c(0x533), _0x43e2ff[_0x3c123c(0x39e)]['outline'] = _0x3c123c(0x24f);
      }), _0x43e2ff[_0x4312b2(0x5fc)]('blur', () => {
        const _0x908774 = _0x4312b2;
        _0x43e2ff[_0x908774(0x39e)][_0x908774(0x217)] = _0x908774(0x41f), _0x43e2ff[_0x908774(0x39e)][_0x908774(0x568)] = _0x908774(0x24f);
      });
      _0x2b7552[_0x4312b2(0x570)] > 0x0 && (_0x43e2ff[_0x4312b2(0x554)] = _0x2b7552[_0x4312b2(0x42f)]('\x0a'), _0x91544c());

      function _0xf4af04() {
        const _0x37aa28 = _0x4312b2;
        _0xf02b62[_0x37aa28(0x417)] = '';
        const _0x27d346 = _0x16cd8c => {
            const _0x518a50 = _0x37aa28;
            Object[_0x518a50(0x48a)](_0x16cd8c['style'], {
              'width': _0x518a50(0x669)
              , 'height': _0x518a50(0x249)
              , 'padding': _0x518a50(0x60c)
              , 'border': '1px\x20solid\x20#ccc'
              , 'borderRadius': _0x518a50(0x596)
              , 'boxSizing': _0x518a50(0x4d4)
              , 'resize': _0x518a50(0x24e)
              , 'fontSize': _0x518a50(0x2d6)
              , 'fontFamily': _0x518a50(0x2f4)
              , 'transition': _0x518a50(0x1fa)
            }), _0x16cd8c[_0x518a50(0x5fc)]('focus', () => {
              const _0x5b5522 = _0x518a50;
              _0x16cd8c[_0x5b5522(0x39e)]['borderColor'] = _0x5b5522(0x395), _0x16cd8c['style'][_0x5b5522(0x568)] = _0x5b5522(0x17f), _0x16cd8c[_0x5b5522(0x39e)][_0x5b5522(0x665)] = _0x5b5522(0x24f);
            }), _0x16cd8c[_0x518a50(0x5fc)](_0x518a50(0x4b3), () => {
              const _0xc573cf = _0x518a50;
              _0x16cd8c[_0xc573cf(0x39e)]['borderColor'] = _0xc573cf(0x41f), _0x16cd8c[_0xc573cf(0x39e)]['boxShadow'] = _0xc573cf(0x24f);
            });
          }
          , _0x227e9c = (_0x187434, _0x120179 = '#28a745') => {
            const _0x57f4d0 = _0x37aa28;
            return Object['assign'](_0x187434['style'], {
              'width': _0x57f4d0(0x669)
              , 'padding': _0x57f4d0(0x2b9)
              , 'marginTop': '5px'
              , 'backgroundColor': '#6c757d'
              , 'color': _0x57f4d0(0x56f)
              , 'border': _0x57f4d0(0x24f)
              , 'borderRadius': _0x57f4d0(0x596)
              , 'cursor': _0x57f4d0(0x226)
              , 'fontWeight': _0x57f4d0(0x39b)
              , 'transition': _0x57f4d0(0xfa)
            }), _0x187434[_0x57f4d0(0x5fc)](_0x57f4d0(0x53d), () => _0x187434[_0x57f4d0(0x39e)]['filter'] = 'brightness(110%)'), _0x187434[_0x57f4d0(0x5fc)]('mouseleave', () => _0x187434[_0x57f4d0(0x39e)]['filter'] = _0x57f4d0(0x161)), (_0x3dcf6b, _0x762d21, _0x1ff783) => {
              const _0x5d8ad4 = _0x57f4d0;
              _0x3dcf6b[_0x5d8ad4(0x4e8)] = ![], _0x3dcf6b[_0x5d8ad4(0x41d)] = _0x762d21, _0x3dcf6b['style']['backgroundColor'] = _0x5d8ad4(0x3e1), _0x3dcf6b[_0x5d8ad4(0x39e)][_0x5d8ad4(0x241)] = 'text', _0x3dcf6b[_0x5d8ad4(0x4a8)](), _0x187434[_0x5d8ad4(0x6a2)] = _0x1ff783, _0x187434['style'][_0x5d8ad4(0x156)] = _0x120179, _0x187434[_0x5d8ad4(0x4e8)] = !![], _0x187434['style'][_0x5d8ad4(0x241)] = _0x5d8ad4(0x47a), _0x187434['style'][_0x5d8ad4(0x5fd)] = _0x5d8ad4(0x161);
            };
          }
          , _0x435c8a = document['createElement'](_0x37aa28(0x5b6));
        _0x435c8a[_0x37aa28(0x6a2)] = 'Nova\x20Data\x20(dd/mm/aaaa):', _0x435c8a[_0x37aa28(0x39e)]['display'] = _0x37aa28(0x2f7), _0xf02b62[_0x37aa28(0x5a0)](_0x435c8a);
        const _0x5bb377 = document['createElement'](_0x37aa28(0x3d9));
        _0x5bb377[_0x37aa28(0x312)] = _0x37aa28(0x5de), _0x5bb377['id'] = _0x37aa28(0x51a);
        const _0x56d23b = new Date()['toISOString']()[_0x37aa28(0x3f0)]('T')[0x0];
        _0x5bb377[_0x37aa28(0x54f)] = _0x56d23b, _0x5bb377['style'][_0x37aa28(0x3cc)] = _0x37aa28(0x40c), _0x5bb377[_0x37aa28(0x554)] = _0x56d23b, _0xf02b62[_0x37aa28(0x5a0)](_0x5bb377);
        const _0x9360cc = document[_0x37aa28(0x4a9)](_0x37aa28(0x5b6));
        _0x9360cc[_0x37aa28(0x6a2)] = _0x37aa28(0x120), _0x9360cc[_0x37aa28(0x39e)][_0x37aa28(0x258)] = _0x37aa28(0x2f7), _0xf02b62[_0x37aa28(0x5a0)](_0x9360cc);
        const _0x34fb17 = document[_0x37aa28(0x4a9)]('textarea');
        _0x34fb17['id'] = 'input-causa';

        function _0x5c21a7() {
          const _0xfb064e = _0x37aa28
            , _0x5c1356 = _0x5bb377[_0xfb064e(0x554)];
          if (_0x5c1356) {
            const _0x25569b = _0x5c1356[_0xfb064e(0x3f0)]('-')
              , _0x2c25cd = _0x25569b[0x2] + '/' + _0x25569b[0x1] + '/' + _0x25569b[0x0];
            _0x34fb17[_0xfb064e(0x554)] = _0xfb064e(0x327) + _0x2c25cd + ')';
          } else _0x34fb17['value'] = _0xfb064e(0x4ee);
        }
        _0x5bb377['addEventListener']('input', _0x5c21a7), _0x5c21a7(), _0x27d346(_0x34fb17), _0xf02b62[_0x37aa28(0x5a0)](_0x34fb17);
        const _0x571709 = document[_0x37aa28(0x4a9)]('hr');
        Object[_0x37aa28(0x48a)](_0x571709['style'], {
          'margin': _0x37aa28(0x127)
          , 'border': '0'
          , 'borderTop': _0x37aa28(0x30d)
        }), _0xf02b62[_0x37aa28(0x5a0)](_0x571709);
        const _0x58dd02 = document[_0x37aa28(0x4a9)](_0x37aa28(0x5b6));
        _0x58dd02['textContent'] = _0x37aa28(0x362), Object['assign'](_0x58dd02[_0x37aa28(0x39e)], {
          'display': 'block'
          , 'fontWeight': _0x37aa28(0x39b)
        }), _0xf02b62[_0x37aa28(0x5a0)](_0x58dd02);
        const _0x1da354 = document[_0x37aa28(0x4a9)]('textarea');
        _0x1da354['id'] = _0x37aa28(0x203), _0x1da354[_0x37aa28(0x41d)] = _0x37aa28(0x377), _0x1da354['disabled'] = !![], _0x27d346(_0x1da354), Object[_0x37aa28(0x48a)](_0x1da354[_0x37aa28(0x39e)], {
          'height': _0x37aa28(0x392)
          , 'marginTop': _0x37aa28(0x596)
          , 'backgroundColor': _0x37aa28(0x435)
          , 'cursor': _0x37aa28(0x3fb)
        }), _0xf02b62[_0x37aa28(0x5a0)](_0x1da354);
        const _0x3cd7b3 = document[_0x37aa28(0x4a9)](_0x37aa28(0x5e3));
        _0x3cd7b3['id'] = _0x37aa28(0x1b6), _0x3cd7b3[_0x37aa28(0x6a2)] = _0x37aa28(0x360);
        const _0x4248da = _0x227e9c(_0x3cd7b3);
        _0x3cd7b3[_0x37aa28(0x424)] = () => _0x4248da(_0x1da354, _0x37aa28(0x3a9), _0x37aa28(0x63a)), _0xf02b62['appendChild'](_0x3cd7b3);
        const _0x50cf7d = document['createElement'](_0x37aa28(0x5b6));
        _0x50cf7d['textContent'] = _0x37aa28(0x373), Object[_0x37aa28(0x48a)](_0x50cf7d[_0x37aa28(0x39e)], {
          'display': _0x37aa28(0x2f7)
          , 'fontWeight': _0x37aa28(0x39b)
          , 'marginTop': _0x37aa28(0x17e)
        }), _0xf02b62[_0x37aa28(0x5a0)](_0x50cf7d);
        const _0x57aca7 = document[_0x37aa28(0x4a9)](_0x37aa28(0x3d9));
        _0x57aca7['type'] = _0x37aa28(0x353), _0x57aca7['id'] = 'input-codigo-falha', _0x57aca7[_0x37aa28(0x41d)] = _0x37aa28(0x377), _0x57aca7[_0x37aa28(0x4e8)] = !![], _0x27d346(_0x57aca7), Object[_0x37aa28(0x48a)](_0x57aca7['style'], {
          'height': _0x37aa28(0x188)
          , 'marginTop': '5px'
          , 'backgroundColor': _0x37aa28(0x435)
          , 'cursor': 'not-allowed'
        }), _0xf02b62[_0x37aa28(0x5a0)](_0x57aca7);
        const _0x550397 = document[_0x37aa28(0x4a9)]('button');
        _0x550397['id'] = _0x37aa28(0x4f4), _0x550397[_0x37aa28(0x6a2)] = _0x37aa28(0x28f);
        const _0x402b85 = _0x227e9c(_0x550397);
        _0x550397[_0x37aa28(0x424)] = () => _0x402b85(_0x57aca7, 'Digite\x20o\x20código\x20de\x20falha\x20aqui\x20(ex:\x20E001)', _0x37aa28(0x28a)), _0xf02b62[_0x37aa28(0x5a0)](_0x550397);
        const _0x186106 = document[_0x37aa28(0x4a9)](_0x37aa28(0x45f));
        _0x186106['id'] = _0x37aa28(0x194), Object[_0x37aa28(0x48a)](_0x186106[_0x37aa28(0x39e)], {
          'display': 'flex'
          , 'marginTop': _0x37aa28(0x17e)
          , 'marginBottom': _0x37aa28(0x563)
        });
        const _0x44c9eb = document['createElement'](_0x37aa28(0x5e3));
        _0x44c9eb['innerHTML'] = '<span\x20class=\x22btn-text\x22>Executar\x20Reprogramação</span><span\x20class=\x22btn-progress-fill\x22></span>', _0x44c9eb[_0x37aa28(0x190)][_0x37aa28(0x5dc)](_0x37aa28(0x213)), Object[_0x37aa28(0x48a)](_0x44c9eb[_0x37aa28(0x39e)], {
          'width': _0x37aa28(0x669)
          , 'backgroundColor': _0x37aa28(0x395)
          , 'color': _0x37aa28(0x56f)
          , 'border': _0x37aa28(0x24f)
          , 'borderRadius': _0x37aa28(0x596)
          , 'padding': '10px\x205px'
          , 'cursor': _0x37aa28(0x226)
          , 'textAlign': _0x37aa28(0x500)
          , 'fontSize': _0x37aa28(0x2d6)
          , 'fontWeight': _0x37aa28(0x39b)
          , 'transition': _0x37aa28(0x4f8)
          , 'boxShadow': _0x37aa28(0x2c9)
        }), _0x44c9eb[_0x37aa28(0x5fc)]('mouseenter', () => {
          const _0x1e5b78 = _0x37aa28;
          _0x44c9eb['style'][_0x1e5b78(0x102)] = 'translateY(-2px)', _0x44c9eb['style'][_0x1e5b78(0x5fd)] = _0x1e5b78(0x319), _0x44c9eb[_0x1e5b78(0x39e)]['boxShadow'] = _0x1e5b78(0x14a);
        }), _0x44c9eb[_0x37aa28(0x5fc)](_0x37aa28(0x4df), () => {
          const _0xccbc29 = _0x37aa28;
          _0x44c9eb[_0xccbc29(0x39e)][_0xccbc29(0x102)] = _0xccbc29(0x37b), _0x44c9eb[_0xccbc29(0x39e)]['filter'] = _0xccbc29(0x161), _0x44c9eb[_0xccbc29(0x39e)][_0xccbc29(0x568)] = _0xccbc29(0x2c9);
        }), _0x44c9eb[_0x37aa28(0x424)] = () => {
          const _0x17eda3 = _0x37aa28;
          if (_0x2b7552[_0x17eda3(0x570)] === 0x0) {
            _0x2786ff(_0x17eda3(0x604), _0x17eda3(0x65a));
            return;
          }
          _0xc0586b(_0x44c9eb, _0x186106, _0x1116da);
        };
        const _0x444b7f = document[_0x37aa28(0x4a9)](_0x37aa28(0x5e3));
        _0x444b7f[_0x37aa28(0x417)] = _0x37aa28(0x5c1), _0x444b7f[_0x37aa28(0x190)][_0x37aa28(0x5dc)]('titanflow-action-btn'), Object['assign'](_0x444b7f[_0x37aa28(0x39e)], {
          'width': _0x37aa28(0x669)
          , 'backgroundColor': _0x37aa28(0x1bc)
          , 'color': 'white'
          , 'border': 'none'
          , 'borderRadius': _0x37aa28(0x596)
          , 'padding': _0x37aa28(0x438)
          , 'cursor': _0x37aa28(0x226)
          , 'textAlign': _0x37aa28(0x500)
          , 'fontSize': _0x37aa28(0x2d6)
          , 'fontWeight': _0x37aa28(0x39b)
          , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
          , 'boxShadow': '0\x202px\x204px\x20rgba(0,0,0,0.15)'
        }), _0x444b7f[_0x37aa28(0x5fc)]('mouseenter', () => {
          const _0x279fb5 = _0x37aa28;
          _0x444b7f[_0x279fb5(0x39e)][_0x279fb5(0x102)] = _0x279fb5(0x5d6), _0x444b7f[_0x279fb5(0x39e)]['filter'] = 'brightness(110%)', _0x444b7f[_0x279fb5(0x39e)]['boxShadow'] = _0x279fb5(0x14a);
        }), _0x444b7f['addEventListener'](_0x37aa28(0x4df), () => {
          const _0x4ddb44 = _0x37aa28;
          _0x444b7f[_0x4ddb44(0x39e)][_0x4ddb44(0x102)] = 'translateY(0px)', _0x444b7f[_0x4ddb44(0x39e)][_0x4ddb44(0x5fd)] = 'brightness(100%)', _0x444b7f[_0x4ddb44(0x39e)][_0x4ddb44(0x568)] = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
        }), _0x444b7f[_0x37aa28(0x424)] = () => {
          const _0x3f37cc = _0x37aa28;
          if (_0x2b7552[_0x3f37cc(0x570)] === 0x0) {
            _0x2786ff(_0x3f37cc(0x595), 'warning');
            return;
          }
          _0xc0586b(_0x444b7f, _0x186106, _0x497030);
        }, _0x186106[_0x37aa28(0x5a0)](_0x44c9eb), _0x186106[_0x37aa28(0x5a0)](_0x444b7f), _0xf02b62[_0x37aa28(0x5a0)](_0x186106);
      }
      _0x2ce98f['onclick'] = () => {
        const _0x34afb6 = _0x4312b2;
        sessionStorage[_0x34afb6(0x634)]('lastActiveTitanTab', _0x34afb6(0x275)), _0x415963();
      }, _0x246ef0['onclick'] = () => {
        const _0x41d894 = _0x4312b2;
        sessionStorage[_0x41d894(0x634)]('lastActiveTitanTab', 'reprogramacao'), _0xf4af04();
      };
      const _0x1d9786 = document[_0x4312b2(0x4a9)]('div');
      _0x1d9786[_0x4312b2(0x417)] = '👨‍💻\x20<em><a\x20href=\x22#\x22\x20target=\x22_blank\x22\x20style=\x22color:#1ab3a5;\x20text-decoration:\x20none;\x22>Desenvolvido\x20por\x20PCM</a></em>\x20&copy;\x20' + new Date()[_0x4312b2(0x5c7)](), _0x1d9786[_0x4312b2(0x39e)][_0x4312b2(0x3a3)] = _0x4312b2(0x105), _0x1d9786[_0x4312b2(0x39e)][_0x4312b2(0x16c)] = _0x4312b2(0x3ac), _0x1d9786['style'][_0x4312b2(0x57f)] = _0x4312b2(0x500), _0x1d9786[_0x4312b2(0x39e)][_0x4312b2(0x199)] = _0x4312b2(0x20e), _0x32a5d7[_0x4312b2(0x5a0)](_0x1d9786);

      function _0x334b85() {
        const _0x1ea60a = _0x4312b2
          , _0x15764 = sessionStorage[_0x1ea60a(0x1fb)](_0x1ea60a(0x2be));
        switch (_0x15764) {
        case _0x1ea60a(0x25e):
          _0xf4af04();
          break;
        case _0x1ea60a(0x255):
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
      document[_0x4312b2(0x4c5)][_0x4312b2(0x5a0)](_0x32a5d7), _0x334b85(), _0x5f5540(), _0x5ede4f(_0x32a5d7, _0x368f37, _0x4e7800);

      function _0x5ede4f(_0xd87bc6, _0x4ef3f5, _0x136ca8) {
        const _0x4bd86a = _0x4312b2;
        let _0x2635d5, _0x589c84, _0x31941c = ![];

        function _0x2aabbc(_0x3d61d8) {
          const _0x17e0ea = _0x3bcd;
          if (!_0x31941c) return;
          _0xd87bc6[_0x17e0ea(0x39e)]['position'] = _0x17e0ea(0x698), _0xd87bc6[_0x17e0ea(0x39e)][_0x17e0ea(0x540)] = _0x3d61d8[_0x17e0ea(0x25d)] - _0x2635d5 + 'px', _0xd87bc6['style'][_0x17e0ea(0x565)] = _0x3d61d8[_0x17e0ea(0x445)] - _0x589c84 + 'px';
        }

        function _0x1710cc() {
          const _0x1ae0f3 = _0x3bcd;
          if (!_0x31941c) return;
          _0x31941c = ![], document[_0x1ae0f3(0x3c3)](_0x1ae0f3(0x3c5), _0x2aabbc), document['removeEventListener'](_0x1ae0f3(0x2f1), _0x1710cc), !_0x136ca8['value'] && (localStorage[_0x1ae0f3(0x634)]('titanflow_panel_top', _0xd87bc6['style'][_0x1ae0f3(0x565)]), localStorage[_0x1ae0f3(0x634)](_0x1ae0f3(0x2f3), _0xd87bc6[_0x1ae0f3(0x39e)][_0x1ae0f3(0x540)]));
        }
        _0x4ef3f5[_0x4bd86a(0x5fc)]('mousedown', _0x509f7b => {
          const _0x2ab7e7 = _0x4bd86a;
          if (_0x136ca8['value']) return;
          _0x509f7b[_0x2ab7e7(0x69b)](), _0x31941c = !![], _0x2635d5 = _0x509f7b[_0x2ab7e7(0x25d)] - _0xd87bc6[_0x2ab7e7(0x1aa)], _0x589c84 = _0x509f7b[_0x2ab7e7(0x445)] - _0xd87bc6[_0x2ab7e7(0x5d3)], document[_0x2ab7e7(0x5fc)](_0x2ab7e7(0x3c5), _0x2aabbc), document['addEventListener'](_0x2ab7e7(0x2f1), _0x1710cc);
        });
      }
      const _0x1b42c6 = document['createElement'](_0x4312b2(0x5e3));
      _0x1b42c6['id'] = _0x4312b2(0x364), Object[_0x4312b2(0x48a)](_0x1b42c6[_0x4312b2(0x39e)], {
        'position': _0x4312b2(0x698)
        , 'top': '10px'
        , 'left': _0x4312b2(0x63f)
        , 'color': _0x4312b2(0x56f)
        , 'border': _0x4312b2(0x24f)
        , 'borderRadius': '5px'
        , 'padding': _0x4312b2(0x3d7)
        , 'cursor': _0x4312b2(0x226)
        , 'zIndex': _0x4312b2(0x5ef)
        , 'fontWeight': _0x4312b2(0x39b)
        , 'fontSize': _0x4312b2(0x3ba)
        , 'boxShadow': _0x4312b2(0x2c9)
        , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease,\x20background-color\x200.2s\x20ease'
      }), _0x1b42c6[_0x4312b2(0x5fc)]('mouseenter', () => {
        const _0x4e3b57 = _0x4312b2;
        _0x1b42c6[_0x4e3b57(0x39e)][_0x4e3b57(0x102)] = _0x4e3b57(0x5d6), _0x1b42c6[_0x4e3b57(0x39e)]['filter'] = 'brightness(110%)', _0x1b42c6['style']['boxShadow'] = _0x4e3b57(0x14a);
      }), _0x1b42c6[_0x4312b2(0x5fc)](_0x4312b2(0x4df), () => {
        const _0x518859 = _0x4312b2;
        _0x1b42c6[_0x518859(0x39e)]['transform'] = _0x518859(0x37b), _0x1b42c6[_0x518859(0x39e)]['filter'] = _0x518859(0x161), _0x1b42c6[_0x518859(0x39e)][_0x518859(0x568)] = _0x518859(0x2c9);
      }), _0x1b42c6[_0x4312b2(0x5fc)]('mousedown', () => {
        const _0x11e020 = _0x4312b2;
        _0x1b42c6[_0x11e020(0x39e)][_0x11e020(0x102)] = _0x11e020(0x3c0), _0x1b42c6['style']['boxShadow'] = _0x11e020(0x24f);
      }), _0x1b42c6['addEventListener'](_0x4312b2(0x2f1), () => {
        const _0x2c9b39 = _0x4312b2;
        _0x1b42c6[_0x2c9b39(0x225)](_0x2c9b39(0x334)) && (_0x1b42c6[_0x2c9b39(0x39e)]['transform'] = _0x2c9b39(0x5d6), _0x1b42c6[_0x2c9b39(0x39e)][_0x2c9b39(0x568)] = _0x2c9b39(0x14a));
      }), _0x1b42c6[_0x4312b2(0x424)] = function () {
        const _0x11e420 = _0x4312b2
          , _0x4d16b6 = document['getElementById'](_0x11e420(0x320));
        if (_0x4d16b6) {
          const _0x557bfc = _0x4d16b6[_0x11e420(0x39e)][_0x11e420(0x258)] === _0x11e420(0x24f);
          _0x4d16b6[_0x11e420(0x39e)][_0x11e420(0x258)] = _0x557bfc ? 'block' : 'none', localStorage[_0x11e420(0x634)](_0x11e420(0x21d), _0x557bfc ? _0x11e420(0x333) : _0x11e420(0x5ee)), _0x288fe4(_0x4d16b6, _0x1b42c6);
        }
      }, document[_0x4312b2(0x4c5)]['appendChild'](_0x1b42c6);
      const _0x128ff7 = localStorage[_0x4312b2(0x1fb)](_0x4312b2(0x21d));
      _0x128ff7 === 'false' && (_0x32a5d7['style']['display'] = _0x4312b2(0x24f)), _0x288fe4(_0x32a5d7, _0x1b42c6), !_0x195c9c['maoDeObra'] && (_0x2ce98f[_0x4312b2(0x39e)]['display'] = 'none'), !_0x195c9c[_0x4312b2(0x25e)] && (_0x246ef0['style'][_0x4312b2(0x258)] = 'none'), !_0x195c9c[_0x4312b2(0x255)] && (_0x32d52e['style'][_0x4312b2(0x258)] = _0x4312b2(0x24f)), document['addEventListener']('click', _0x4018d4 => {
        const _0xfefdea = _0x4312b2
          , _0x1110bb = document[_0xfefdea(0x405)](_0xfefdea(0x3a0))
          , _0x519f4f = document[_0xfefdea(0x405)](_0xfefdea(0x4c1));
        if (!_0x1110bb || !_0x519f4f) return;
        !_0x1110bb[_0xfefdea(0xfd)](_0x4018d4['target']) && !_0x519f4f['contains'](_0x4018d4['target']) && (_0x519f4f[_0xfefdea(0x417)] = '');
      });
    }

    function _0x21ab2c() {
      const _0x30bfc7 = _0x1f2edc
        , _0x3088cc = document[_0x30bfc7(0x4a9)]('button');
      _0x3088cc['id'] = 'botao-parada-emergencia', _0x3088cc[_0x30bfc7(0x6a2)] = _0x30bfc7(0x260), Object[_0x30bfc7(0x48a)](_0x3088cc[_0x30bfc7(0x39e)], {
        'position': _0x30bfc7(0x698)
        , 'top': _0x30bfc7(0x105)
        , 'left': '150px'
        , 'backgroundColor': _0x30bfc7(0x1bc)
        , 'color': 'white'
        , 'border': 'none'
        , 'borderRadius': _0x30bfc7(0x596)
        , 'padding': _0x30bfc7(0x4dd)
        , 'fontWeight': _0x30bfc7(0x39b)
        , 'fontSize': _0x30bfc7(0x642)
        , 'cursor': _0x30bfc7(0x226)
        , 'zIndex': _0x30bfc7(0x5ef)
        , 'boxShadow': _0x30bfc7(0x2c9)
        , 'transition': 'transform\x200.1s\x20ease,\x20filter\x200.2s\x20ease,\x20box-shadow\x200.2s\x20ease'
      }), _0x3088cc[_0x30bfc7(0x5fc)](_0x30bfc7(0x53d), () => {
        const _0xdae67f = _0x30bfc7;
        _0x3088cc[_0xdae67f(0x39e)][_0xdae67f(0x102)] = _0xdae67f(0x5d6), _0x3088cc['style'][_0xdae67f(0x5fd)] = 'brightness(110%)', _0x3088cc[_0xdae67f(0x39e)]['boxShadow'] = _0xdae67f(0x14a);
      }), _0x3088cc[_0x30bfc7(0x5fc)](_0x30bfc7(0x4df), () => {
        const _0x2ce2ba = _0x30bfc7;
        _0x3088cc[_0x2ce2ba(0x39e)][_0x2ce2ba(0x102)] = _0x2ce2ba(0x37b), _0x3088cc[_0x2ce2ba(0x39e)]['filter'] = _0x2ce2ba(0x161), _0x3088cc[_0x2ce2ba(0x39e)][_0x2ce2ba(0x568)] = '0\x202px\x204px\x20rgba(0,0,0,0.15)';
      }), _0x3088cc[_0x30bfc7(0x5fc)](_0x30bfc7(0x109), () => {
        const _0xbda005 = _0x30bfc7;
        _0x3088cc['style'][_0xbda005(0x102)] = _0xbda005(0x3c0), _0x3088cc[_0xbda005(0x39e)][_0xbda005(0x568)] = _0xbda005(0x24f);
      }), _0x3088cc[_0x30bfc7(0x5fc)](_0x30bfc7(0x2f1), () => {
        const _0x4940a2 = _0x30bfc7;
        _0x3088cc[_0x4940a2(0x225)](_0x4940a2(0x334)) && (_0x3088cc[_0x4940a2(0x39e)][_0x4940a2(0x102)] = _0x4940a2(0x5d6), _0x3088cc[_0x4940a2(0x39e)]['boxShadow'] = _0x4940a2(0x14a));
      }), _0x3088cc['onclick'] = _0x132a29, document['body'][_0x30bfc7(0x5a0)](_0x3088cc);
    }

    function _0x1d4458() {
      const _0x31a734 = _0x1f2edc;
      if (document[_0x31a734(0x405)](_0x31a734(0x5d2))) return;
      document[_0x31a734(0x5fc)]('keydown', function (_0x1148d7) {
        const _0x1e7227 = _0x31a734
          , _0x23654e = document[_0x1e7227(0x363)]['tagName'];
        if (_0x23654e === _0x1e7227(0x44c) || _0x23654e === _0x1e7227(0x24a)) return;
        if (_0x1148d7[_0x1e7227(0x45b)] || _0x1148d7[_0x1e7227(0x218)] || _0x1148d7[_0x1e7227(0x5f4)] || _0x1148d7[_0x1e7227(0x43f)]) return;
        const _0x6229e4 = _0x1148d7[_0x1e7227(0x4b9)]['toLowerCase']();
        switch (_0x6229e4) {
        case '1':
          document[_0x1e7227(0x405)](_0x1e7227(0x2e4))?.['click']();
          break;
        case '2':
          _0x4458b3 !== _0x1e7227(0x331) && document[_0x1e7227(0x405)]('titanflow-btn-reprogramacao')?.[_0x1e7227(0x338)]();
          break;
        case '3':
          document[_0x1e7227(0x405)](_0x1e7227(0x552))?.['click']();
          break;
        case '4':
          _0x4458b3 !== 'tecnico' && document['getElementById']('titanflow-btn-pedidos')?.['click']();
          break;
        case 's':
          document[_0x1e7227(0x405)](_0x1e7227(0x2dc))?.[_0x1e7227(0x338)]();
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
      const _0xf717b7 = _0x1f2edc;
      document[_0xf717b7(0x5fc)](_0xf717b7(0x636), function (_0x257025) {
        const _0x5b1d19 = _0xf717b7
          , _0x3222da = document['activeElement']['tagName'];
        if (_0x3222da === _0x5b1d19(0x44c) || _0x3222da === _0x5b1d19(0x24a)) return;
        const _0xe9fac9 = _0x257025['key'][_0x5b1d19(0x483)]();
        if (_0xe9fac9 === 'z') {
          const _0x7ad096 = document['getElementById'](_0x5b1d19(0x364))
            , _0x2fa8d3 = document[_0x5b1d19(0x405)](_0x5b1d19(0x144));
          if (_0x7ad096) _0x7ad096[_0x5b1d19(0x338)]();
          else _0x2fa8d3 && _0x2fa8d3['click']();
        }
      });
    }

    function _0x3d29a5() {
      const _0x441210 = _0x1f2edc
        , _0x46f2aa = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Define\x20a\x20animação\x20chamada\x20\x27decolagem-foguete\x27\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20decolagem-foguete\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Ponto\x20de\x20partida\x20da\x20animação\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(62px,\x2042px)\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Na\x20metade\x20da\x20animação,\x20ele\x20estará\x20bem\x20maior\x20e\x20mais\x20alto\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20VALORES\x20AJUSTADOS:\x20Menos\x20movimento\x20para\x20o\x20lado,\x20mais\x20para\x20cima\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20VALOR\x20AUMENTADO:\x20O\x20foguete\x20ficará\x208x\x20maior\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(220px,\x20-400px)\x20scale(18);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20No\x20final,\x20ele\x20sai\x20da\x20tela,\x20gigante\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20VALORES\x20AJUSTADOS:\x20Menos\x20movimento\x20para\x20o\x20lado,\x20muito\x20mais\x20para\x20cima\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20VALOR\x20AUMENTADO:\x20O\x20foguete\x20terminará\x2016x\x20maior\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(3000px,\x20-800px)\x20scale(80);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20A\x20aparência\x20do\x20foguete\x20não\x20muda,\x20apenas\x20a\x20animação\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.foguete-animado\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20decolagem-foguete\x202.5s\x20ease-in-out\x20forwards;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
        , _0x2d2df7 = document[_0x441210(0x4a9)](_0x441210(0x39e));
      _0x2d2df7[_0x441210(0x6a2)] = _0x46f2aa, document[_0x441210(0x439)][_0x441210(0x5a0)](_0x2d2df7);
    }

    function _0x36cec0(_0x4309c4) {
      const _0x541cea = _0x1f2edc
        , _0xdb730 = _0x4309c4[_0x541cea(0x179)]()
        , _0x1385d9 = document[_0x541cea(0x405)](_0x541cea(0x320))['getBoundingClientRect']()
        , _0x3035d1 = document[_0x541cea(0x4a9)](_0x541cea(0x3fe));
      _0x3035d1[_0x541cea(0x6a2)] = '🚀', _0x3035d1[_0x541cea(0x657)] = _0x541cea(0x454), _0x3035d1[_0x541cea(0x39e)]['fontSize'] = window[_0x541cea(0x29b)](_0x4309c4)[_0x541cea(0x3a3)], _0x3035d1[_0x541cea(0x39e)][_0x541cea(0x540)] = _0xdb730['left'] - _0x1385d9[_0x541cea(0x540)] + 0x5 + 'px', _0x3035d1[_0x541cea(0x39e)][_0x541cea(0x565)] = _0xdb730[_0x541cea(0x565)] - _0x1385d9[_0x541cea(0x565)] + 0x2 + 'px', document[_0x541cea(0x405)](_0x541cea(0x320))['appendChild'](_0x3035d1), setTimeout(() => {
        _0x3035d1['remove']();
      }, 0x9c4);
    }

    function _0x132a29() {
      const _0x576931 = _0x1f2edc;
      _0xb11661(_0x576931(0x268)), _0x5b5dcd = ![], _0x2786ff(_0x576931(0x2f0), _0x576931(0x5fb)), _0x97e034();
      const _0x1b8cbc = document[_0x576931(0x405)](_0x576931(0x32c));
      _0x1b8cbc && (_0x1b8cbc[_0x576931(0x39e)][_0x576931(0x156)] = _0x576931(0x466), _0x1b8cbc[_0x576931(0x6a2)] = _0x576931(0x23a), setTimeout(() => {
        const _0xf231e9 = _0x576931;
        _0x1b8cbc[_0xf231e9(0x39e)]['backgroundColor'] = '#dc3545', _0x1b8cbc[_0xf231e9(0x6a2)] = _0xf231e9(0x260);
      }, 0x5dc));
    }

    function _0x13dd7d() {
      const _0x57b6db = _0x1f2edc;
      localStorage[_0x57b6db(0x634)](_0x3ba919['configStorageKey'], JSON[_0x57b6db(0x1b4)](_0x2db1a3));
    }

    function _0x483135() {
      const _0x289699 = _0x1f2edc
        , _0x37dd77 = localStorage[_0x289699(0x1fb)](_0x3ba919[_0x289699(0x21b)]);
      _0x37dd77 && (_0x2db1a3 = JSON[_0x289699(0x18c)](_0x37dd77));
    }

    function _0x39b14b() {
      const _0x4e4903 = _0x1f2edc;
      _0xb11661(_0x4e4903(0x622));
      const _0x48b0be = document['getElementsByTagName'](_0x4e4903(0x5da));
      let _0x3f3126 = null;
      for (let _0x1416a7 = 0x0; _0x1416a7 < _0x48b0be[_0x4e4903(0x570)]; _0x1416a7++) {
        const _0x2b07bb = _0x48b0be[_0x1416a7][_0x4e4903(0x667)]('tr');
        if (_0x2b07bb && (_0x2b07bb['textContent'] || '')[_0x4e4903(0x1c9)](_0x4e4903(0x350))) {
          _0x3f3126 = _0x48b0be[_0x1416a7];
          break;
        }
      }
      if (!_0x3f3126) {
        _0x2786ff(_0x4e4903(0x1ba), 'error');
        return;
      }
      const _0x321ebd = _0x3f3126[_0x4e4903(0x143)](_0x4e4903(0x3df))
        , _0x463571 = [];
      _0x321ebd[_0x4e4903(0x539)](_0x69cb9b => {
        const _0x931d23 = _0x4e4903
          , _0x18eb65 = _0x69cb9b[_0x931d23(0x581)][0x0];
        if (_0x18eb65) {
          const _0x18c060 = (_0x18eb65['textContent'] || '')[_0x931d23(0x2ee)]('+', '')[_0x931d23(0x247)]();
          _0x18c060 && /^\d+$/ [_0x931d23(0x4f6)](_0x18c060) && _0x463571['push'](_0x18c060);
        }
      });
      if (_0x463571['length'] === 0x0) {
        _0x2786ff('Nenhuma\x20ordem\x20foi\x20encontrada\x20na\x20tabela.', 'info');
        return;
      }
      const _0x801bd8 = _0x463571[_0x4e4903(0x5fd)](_0x237b0a => !_0x2b7552[_0x4e4903(0x1c9)](_0x237b0a))
        , _0x650a60 = _0x801bd8['length']
        , _0x1d80b5 = [...new Set([..._0x2b7552, ..._0x463571])];
      _0x2b7552 = _0x1d80b5, _0x13d195();
      const _0xbd216d = document[_0x4e4903(0x405)](_0x4e4903(0x480));
      _0xbd216d && (_0xbd216d[_0x4e4903(0x554)] = _0x2b7552[_0x4e4903(0x42f)]('\x0a')), _0x5f5540(), _0xbd216d && _0xbd216d[_0x4e4903(0x410)](new Event(_0x4e4903(0x3d9))), _0x650a60 > 0x0 ? _0x2786ff('✅\x20' + _0x650a60 + _0x4e4903(0x419) + _0x2b7552[_0x4e4903(0x570)] + '.', _0x4e4903(0x3a1)) : _0x2786ff(_0x4e4903(0x191), _0x4e4903(0x503));
    }

    function _0x5907ab() {
      const _0x558906 = _0x1f2edc
        , _0x24703a = document[_0x558906(0x405)](_0x558906(0x480));
      if (!_0x24703a) return;
      _0x2b7552 = [];
      const _0x32609f = _0x24703a[_0x558906(0x554)][_0x558906(0x3f0)]('\x0a');
      for (const _0x3cd2fc of _0x32609f) {
        const _0x3bd749 = _0x3cd2fc[_0x558906(0x247)]();
        _0x3bd749 && !_0x2b7552[_0x558906(0x1c9)](_0x3bd749) && _0x2b7552[_0x558906(0x2d4)](_0x3bd749);
      }
      _0x13d195(), _0x5f5540(_0x2b7552[_0x558906(0x570)]), _0x2786ff(_0x558906(0x65b) + _0x2b7552['length'] + '\x20ordens\x20selecionadas.', 'success');
    }

    function _0x5b9e12() {
      const _0x22c71a = _0x1f2edc
        , _0x5752f7 = document[_0x22c71a(0x405)](_0x22c71a(0x480));
      _0x5752f7 && (_0x5752f7[_0x22c71a(0x554)] = '', _0x5752f7[_0x22c71a(0x410)](new Event(_0x22c71a(0x3d9)))), _0x2b7552 = [], _0x13d195(), _0x5f5540(), _0x2786ff(_0x22c71a(0x48e), _0x22c71a(0x503));
    }

    function _0x13d195() {
      const _0x49bf06 = _0x1f2edc;
      localStorage[_0x49bf06(0x634)](_0x3ba919[_0x49bf06(0x662)], JSON[_0x49bf06(0x1b4)](_0x2b7552));
    }

    function _0x3b5be5() {
      const _0x209ec3 = _0x1f2edc
        , _0x5e9e79 = localStorage[_0x209ec3(0x1fb)](_0x3ba919[_0x209ec3(0x662)]);
      _0x5e9e79 && (_0x2b7552 = JSON[_0x209ec3(0x18c)](_0x5e9e79));
    }

    function _0x5f5540() {
      const _0x50bb82 = _0x1f2edc;
      _0x2029e5 && (_0x2029e5[_0x50bb82(0x6a2)] = _0x50bb82(0x296) + _0x2b7552[_0x50bb82(0x570)]);
    }

    function _0x56ca07() {
      const _0x1ab7db = _0x1f2edc;
      if (document['getElementById']('painel-progresso-massa')) return;
      GM_addStyle(_0x1ab7db(0x506));
      const _0x28dfc1 = _0x1ab7db(0x572);
      document['body'][_0x1ab7db(0x4b4)]('beforeend', _0x28dfc1), document[_0x1ab7db(0x405)](_0x1ab7db(0x3c8))['onclick'] = _0x97e034;
    }

    function _0x4e25b2() {
      const _0x187c0e = _0x1f2edc
        , _0x586d37 = document['getElementById'](_0x187c0e(0x27f));
      if (_0x586d37) {
        _0x586d37['style'][_0x187c0e(0x258)] = _0x187c0e(0x4e5), document['getElementById'](_0x187c0e(0x2b5))[_0x187c0e(0x6a2)] = 'Iniciando...';
        const _0x428f5d = document[_0x187c0e(0x405)]('progresso-barra-valor');
        _0x428f5d[_0x187c0e(0x39e)][_0x187c0e(0x649)] = '0%', _0x428f5d[_0x187c0e(0x6a2)] = '0%', document['getElementById'](_0x187c0e(0x477))[_0x187c0e(0x417)] = '';
        const _0x276a4f = document['getElementById'](_0x187c0e(0x3c8));
        _0x276a4f[_0x187c0e(0x4e8)] = !![], _0x276a4f[_0x187c0e(0x6a2)] = _0x187c0e(0x64a), _0x276a4f[_0x187c0e(0x39e)][_0x187c0e(0x156)] = _0x187c0e(0x3ce);
      }
    }

    function _0x43b9e6(_0x429346, _0x2e2d34, _0x41b278 = '', _0x593b18 = ![]) {
      const _0x2d3fee = _0x1f2edc;
      if (_0x2e2d34 === 0x0) return;
      const _0x1ae0cc = Math['round'](_0x429346 / _0x2e2d34 * 0x64);
      document['getElementById'](_0x2d3fee(0x2b5))['textContent'] = _0x2d3fee(0x2c1) + _0x429346 + '\x20de\x20' + _0x2e2d34 + _0x2d3fee(0x69c);
      const _0x3962c3 = document[_0x2d3fee(0x405)](_0x2d3fee(0x579));
      _0x3962c3[_0x2d3fee(0x39e)]['width'] = _0x1ae0cc + '%', _0x3962c3['textContent'] = _0x1ae0cc + '%';
      if (_0x41b278) {
        const _0x4cbd7d = document[_0x2d3fee(0x405)](_0x2d3fee(0x477))
          , _0x125e4e = document[_0x2d3fee(0x4a9)]('li');
        _0x125e4e[_0x2d3fee(0x6a2)] = _0x41b278;
        if (_0x593b18) _0x125e4e[_0x2d3fee(0x657)] = 'error';
        _0x4cbd7d[_0x2d3fee(0x5a0)](_0x125e4e), _0x4cbd7d[_0x2d3fee(0x680)] = _0x4cbd7d['scrollHeight'];
      }
    }

    function _0x1dbb42(_0x13cd57, _0x2802c1 = 0x5dc) {
      const _0x25b12f = _0x1f2edc;
      document['getElementById'](_0x25b12f(0x2b5))['textContent'] = _0x13cd57;
      const _0x45c888 = document[_0x25b12f(0x405)]('progresso-botao-fechar');
      _0x45c888[_0x25b12f(0x6a2)] = _0x25b12f(0x38f), _0x45c888[_0x25b12f(0x39e)][_0x25b12f(0x156)] = _0x25b12f(0x155), _0x45c888[_0x25b12f(0x4e8)] = !![], setTimeout(() => {
        _0x97e034();
      }, _0x2802c1);
    }

    function _0x97e034() {
      const _0x125bb6 = _0x1f2edc
        , _0xa860f9 = document[_0x125bb6(0x405)](_0x125bb6(0x27f));
      if (_0xa860f9) _0xa860f9[_0x125bb6(0x39e)][_0x125bb6(0x258)] = 'none';
    }
    async function _0xc0586b(_0x25e494, _0x5103e7, _0x3ab493) {
      const _0x1235e6 = _0x1f2edc
        , _0x65170d = window[_0x1235e6(0x29b)](_0x25e494)['backgroundColor']
        , _0x5b1b2f = window['getComputedStyle'](_0x25e494)
        , _0x563672 = _0x25e494[_0x1235e6(0x179)]()
        , _0x581a07 = _0x5103e7[_0x1235e6(0x179)]()
        , _0x47f02c = document[_0x1235e6(0x405)](_0x1235e6(0x320))
        , _0x2193a5 = _0x47f02c[_0x1235e6(0x179)]()
        , _0x290f3c = document[_0x1235e6(0x4a9)](_0x1235e6(0x45f));
      _0x290f3c[_0x1235e6(0x657)] = _0x1235e6(0x213), _0x290f3c[_0x1235e6(0x417)] = _0x1235e6(0x340), Object[_0x1235e6(0x48a)](_0x290f3c['style'], {
        'position': 'absolute'
        , 'top': _0x563672[_0x1235e6(0x565)] - _0x2193a5['top'] + 'px'
        , 'left': _0x563672[_0x1235e6(0x540)] - _0x2193a5[_0x1235e6(0x540)] + 'px'
        , 'width': _0x563672['width'] + 'px'
        , 'height': _0x563672[_0x1235e6(0x1cc)] + 'px'
        , 'backgroundColor': _0x65170d
        , 'borderRadius': _0x5b1b2f[_0x1235e6(0x482)]
        , 'zIndex': _0x1235e6(0x5ef)
        , 'color': 'white'
        , 'fontWeight': _0x1235e6(0x39b)
        , 'fontSize': _0x5b1b2f[_0x1235e6(0x3a3)]
        , 'transition': 'width\x200.4s\x20ease-in-out,\x20left\x200.4s\x20ease-in-out,\x20border-radius\x200.4s\x20ease-in-out'
      }), _0x47f02c[_0x1235e6(0x5a0)](_0x290f3c), _0x5103e7['style'][_0x1235e6(0x341)] = _0x1235e6(0x49b);
      const _0x222ac5 = _0x290f3c[_0x1235e6(0x667)](_0x1235e6(0x1d0))
        , _0x3c91b7 = _0x290f3c[_0x1235e6(0x667)](_0x1235e6(0x210));
      setTimeout(() => {
        const _0x5d7b1e = _0x1235e6;
        Object[_0x5d7b1e(0x48a)](_0x290f3c[_0x5d7b1e(0x39e)], {
          'left': _0x581a07[_0x5d7b1e(0x540)] - _0x2193a5[_0x5d7b1e(0x540)] + 'px'
          , 'width': _0x581a07['width'] + 'px'
          , 'borderRadius': _0x5d7b1e(0x60c)
        });
      }, 0xa);
      let _0x1f4e3e = null
        , _0x3be5c5 = 0x0
        , _0x51303d = 0x0
        , _0x2f8d6b = ![];
      const _0x4dce06 = 0xc
        , _0x775fea = 0x32
        , _0x282bbf = _0x2b7552[_0x1235e6(0x570)] > 0x0 ? _0x2b7552['length'] : 0x1;
      try {
        await new Promise(_0x35fac8 => setTimeout(_0x35fac8, 0x190)), _0x3c91b7[_0x1235e6(0x6a2)] = '0%';
        const _0x1fc913 = _0x1f3501 => {
          const _0x3d3a8e = _0x1235e6;
          _0x3be5c5 = Math[_0x3d3a8e(0x356)](_0x1f3501, _0x3be5c5);
        };
        _0x1f4e3e = setInterval(() => {
          const _0x244324 = _0x1235e6;
          let _0x5c61fd = _0x3be5c5 + 0x1 / _0x282bbf;
          _0x2f8d6b && (_0x5c61fd = 0x1);
          const _0x1a332d = _0x5c61fd - _0x51303d
            , _0x108490 = _0x4dce06 * 0x3e8 / _0x775fea
            , _0x1b78f3 = _0x1a332d / _0x108490;
          _0x51303d < _0x5c61fd && (_0x51303d += _0x1b78f3);
          _0x51303d = Math[_0x244324(0x356)](_0x51303d, _0x3be5c5), _0x51303d = Math['min'](_0x51303d, 0x1);
          const _0x3d4ce6 = Math['floor'](_0x51303d * 0x64);
          _0x222ac5[_0x244324(0x39e)]['width'] = _0x3d4ce6 + '%', _0x3c91b7['textContent'] = _0x3d4ce6 + '%', _0x51303d >= 0x1 && _0x2f8d6b && (_0x3c91b7[_0x244324(0x6a2)] = 'Concluído!', clearInterval(_0x1f4e3e));
        }, _0x775fea), await _0x3ab493(_0x1fc913), _0x2f8d6b = !![];
      } catch (_0x38fd06) {
        if (_0x1f4e3e) clearInterval(_0x1f4e3e);
        console['error'](_0x1235e6(0x692), _0x38fd06), _0x3c91b7[_0x1235e6(0x6a2)] = 'Erro!', _0x2f8d6b = !![];
      }
      setTimeout(() => {
        const _0x1f9b44 = _0x1235e6;
        if (_0x1f4e3e) clearInterval(_0x1f4e3e);
        Object[_0x1f9b44(0x48a)](_0x290f3c[_0x1f9b44(0x39e)], {
          'left': _0x563672['left'] - _0x2193a5[_0x1f9b44(0x540)] + 'px'
          , 'width': _0x563672[_0x1f9b44(0x649)] + 'px'
          , 'borderRadius': _0x5b1b2f[_0x1f9b44(0x482)]
        }), _0x3c91b7[_0x1f9b44(0x39e)][_0x1f9b44(0x496)] = '0', _0x222ac5[_0x1f9b44(0x39e)][_0x1f9b44(0x496)] = '0', setTimeout(() => {
          const _0x281299 = _0x1f9b44;
          if (_0x47f02c[_0x281299(0xfd)](_0x290f3c)) _0x47f02c[_0x281299(0x1d5)](_0x290f3c);
          _0x5103e7[_0x281299(0x39e)][_0x281299(0x341)] = 'visible';
        }, 0x190);
      }, 0x5dc);
    }

    function _0x510cd0(_0x52aaae, _0x36738) {
      return new Promise((_0x1761a7, _0x37cc3e) => {
        const _0x181f02 = _0x3bcd
          , _0x24dcbe = document['createElement']('iframe');
        _0x24dcbe[_0x181f02(0x39e)]['display'] = _0x181f02(0x24f);
        const _0x17d97d = () => document[_0x181f02(0x4c5)][_0x181f02(0xfd)](_0x24dcbe) && document[_0x181f02(0x4c5)][_0x181f02(0x1d5)](_0x24dcbe)
          , _0x4d735d = _0x2012f5();
        if (!_0x4d735d) return _0x37cc3e(new Error('SESID\x20não\x20encontrado.'));
        const _0x4dc6a7 = '/albatros/admin.php?SESID=' + _0x4d735d + _0x181f02(0x4e4) + _0x52aaae;
        let _0x514048 = ![];
        _0x24dcbe[_0x181f02(0x357)] = () => {
          if (_0x514048) {
            _0xb11661('Reload\x20do\x20iframe\x20detectado,\x20ignorando\x20para\x20evitar\x20duplicatas.');
            return;
          }
          _0x514048 = !![];
          let _0x4dc6f9 = 0x0;
          const _0x1987a5 = 0x64
            , _0x2a7c6e = setInterval(() => {
              const _0x2aa1c7 = _0x3bcd;
              try {
                _0x4dc6f9++;
                const _0x569605 = _0x24dcbe[_0x2aa1c7(0x306)]
                  , _0x39b7de = _0x24dcbe[_0x2aa1c7(0x1c3)][_0x2aa1c7(0x298)][_0x2aa1c7(0x2bd)];
                if (_0x39b7de[_0x2aa1c7(0x1c9)](_0x2aa1c7(0x273))) {
                  const _0x9f91b6 = _0x569605['getElementById'](_0x2aa1c7(0x227))
                    , _0x5b2119 = _0x569605[_0x2aa1c7(0x405)](_0x2aa1c7(0x67c));
                  if (_0x9f91b6 && _0x5b2119) {
                    clearInterval(_0x2a7c6e), _0xb11661('Formulário\x20de\x20edição\x20carregado.\x20Preenchendo\x20dados...'), _0x569605[_0x2aa1c7(0x405)](_0x2aa1c7(0x324))[_0x2aa1c7(0x554)] = _0x36738['dataRequerida'], _0x569605[_0x2aa1c7(0x405)](_0x2aa1c7(0x35a))[_0x2aa1c7(0x554)] = _0x36738['descricao'], _0x569605[_0x2aa1c7(0x405)](_0x2aa1c7(0x318))[_0x2aa1c7(0x554)] = _0x36738['tallerId'], _0x569605[_0x2aa1c7(0x405)]('key__trabajos_tipos__id')[_0x2aa1c7(0x554)] = _0x36738[_0x2aa1c7(0x314)],
                        // --- COPIE DEQUI ---
_0x569605[_0x2aa1c7(0x405)]('key__trabajos_tipos__id')[_0x2aa1c7(0x554)] = _0x36738[_0x2aa1c7(0x314)],

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
                      const _0x352120 = _0x2aa1c7;
                      try {
                        !_0x24dcbe[_0x352120(0x306)]['getElementById'](_0x352120(0x227)) && (clearInterval(_0x2be41f), _0xb11661(_0x352120(0x4e0)), _0x17d97d(), _0x1761a7(_0x9f91b6['id_reg']['value']));
                        if (_0xe3ce5a++ > _0x1987a5) {
                          clearInterval(_0x2be41f);
                          throw new Error(_0x352120(0x3d1));
                        }
                      } catch (_0x2a1e89) {
                        clearInterval(_0x2be41f), _0x17d97d(), _0x1761a7(_0x9f91b6[_0x352120(0x328)][_0x352120(0x554)]);
                      }
                    }, 0xc8);
                    return;
                  }
                }
                if (_0x4dc6f9 > _0x1987a5) {
                  clearInterval(_0x2a7c6e);
                  throw new Error(_0x2aa1c7(0x35d));
                }
              } catch (_0x379039) {
                clearInterval(_0x2a7c6e), _0x17d97d(), _0x37cc3e(_0x379039);
              }
            }, 0xc8);
        }, _0x24dcbe[_0x181f02(0x176)] = _0x30c2a9 => {
          _0x17d97d(), _0x37cc3e(new Error('Falha\x20ao\x20carregar\x20o\x20iframe\x20inicial.'));
        }, document[_0x181f02(0x4c5)][_0x181f02(0x5a0)](_0x24dcbe), _0x24dcbe['src'] = _0x4dc6a7;
      });
    }
    async function _0x574ba0() {
      const _0x45fad7 = _0x1f2edc;
      if (_0x5b5dcd) {
        _0x2786ff(_0x45fad7(0x1e6), _0x45fad7(0x65a));
        return;
      }
      const _0x41cb7f = document['getElementById']('input-acao-valor')
        , _0x1172e1 = _0x41cb7f[_0x45fad7(0x554)]['trim']();
      if (!_0x1172e1 || !/^\d{1,7}$/ [_0x45fad7(0x4f6)](_0x1172e1)) {
        _0x2786ff('Por\x20favor,\x20digite\x20um\x20número\x20de\x20OT\x20válido.', 'error'), _0x41cb7f['focus']();
        return;
      }
      const _0x125d3e = document[_0x45fad7(0x405)](_0x45fad7(0x608))[_0x45fad7(0x554)];
      if (!_0x125d3e[_0x45fad7(0x247)]()) {
        _0x2786ff(_0x45fad7(0x40a), _0x45fad7(0x5fb)), document[_0x45fad7(0x405)](_0x45fad7(0x608))[_0x45fad7(0x4a8)]();
        return;
      }
     const _0x88d7df = {
    'dataRequerida': document['getElementById'](_0x45fad7(0x646))[_0x45fad7(0x554)][_0x45fad7(0x3f0)]('-')['reverse']()[_0x45fad7(0x42f)]('/'),
    'tallerId': document['getElementById'](_0x45fad7(0x3e7))[_0x45fad7(0x554)],
    'tipoTrabalhoId': document[_0x45fad7(0x405)]('pedido-tipo-trabalho')[_0x45fad7(0x554)],

    // --- LINHA NOVA AQUI: ---
    'propositoId': document.getElementById('pedido-proposito').value,
    // ------------------------

    'descricao': _0x125d3e['trim']()
};
      _0x5b5dcd = !![], _0x2786ff(_0x45fad7(0x4cf) + _0x1172e1 + _0x45fad7(0x2ad), 'info');
      const _0x552c08 = document[_0x45fad7(0x405)](_0x45fad7(0x46a));
      _0x552c08['disabled'] = !![], _0x552c08[_0x45fad7(0x417)] = _0x45fad7(0x2af);
      try {
        const _0x594739 = await _0x510cd0(_0x1172e1, _0x88d7df)
          , _0x4f491e = {
            'message': _0x45fad7(0x67d) + _0x594739 + _0x45fad7(0x60f) + _0x1172e1 + '.'
            , 'type': _0x45fad7(0x3a1)
          };
        sessionStorage[_0x45fad7(0x634)](_0x45fad7(0x4ce), JSON[_0x45fad7(0x1b4)](_0x4f491e)), setTimeout(() => {
          const _0x1aec2b = _0x45fad7
            , _0x54ac6d = _0x2012f5()
            , _0x3e6fa8 = _0x1aec2b(0x283) + _0x54ac6d + _0x1aec2b(0x66a);
          window[_0x1aec2b(0x298)][_0x1aec2b(0x2bd)] = _0x3e6fa8;
        }, 0x12c);
      } catch (_0x2d8e81) {
        console[_0x45fad7(0x5fb)](_0x45fad7(0x16b), _0x2d8e81), _0x2786ff(_0x45fad7(0x641) + _0x2d8e81[_0x45fad7(0x1c0)], _0x45fad7(0x5fb), 0x1f40), _0x5b5dcd = ![], _0x552c08['disabled'] = ![], typeof atualizarInterfaceAcao === _0x45fad7(0x380) && atualizarInterfaceAcao();
      }
    }
    async function _0x5a90c8(_0x432805, _0x4c08d5) {
      const _0x71dbfa = _0x1f2edc
        , _0x116c56 = _0x2db1a3['tecnicos']['filter'](_0x371459 => _0x371459 && _0x371459[_0x71dbfa(0x247)]() !== '');
      if (_0x116c56[_0x71dbfa(0x570)] === 0x0) return;
      const _0x45a292 = _0x3ba919[_0x71dbfa(0x47b)][_0x71dbfa(0x3f0)](':')
        , _0x33d60a = parseInt(_0x45a292[0x0], 0xa) * 0x3c + parseInt(_0x45a292[0x1], 0xa)
        , _0x38c813 = new Set();
      for (const _0x1ccb6e of _0x116c56) {
        const _0x4b9431 = _0x3c3cfc[_0x71dbfa(0x2d8)](_0x339cb4 => _0x339cb4['id'] === _0x1ccb6e);
        if (!_0x4b9431) continue;
        _0x38c813[_0x71dbfa(0x5dc)]('./admin.php?SESID=' + _0x4c08d5 + _0x71dbfa(0x286) + _0x432805 + _0x71dbfa(0x663) + _0x4b9431['id'] + _0x71dbfa(0x674) + _0x33d60a + _0x71dbfa(0x421)), _0x4b9431[_0x71dbfa(0x4f2)] && _0x38c813[_0x71dbfa(0x5dc)]('./admin.php?SESID=' + _0x4c08d5 + _0x71dbfa(0x286) + _0x432805 + '&show=accion&persona_id=0&empresa_id=' + _0x4b9431[_0x71dbfa(0x4f2)] + _0x71dbfa(0x2dd) + _0x33d60a + _0x71dbfa(0x421));
      }
      const _0x1e2efe = Array[_0x71dbfa(0x409)](_0x38c813)[_0x71dbfa(0x113)](_0x120a6a => fetch(_0x120a6a, {
        'credentials': _0x71dbfa(0x5a4)
      })[_0x71dbfa(0x1ca)](_0x3aac93 => {
        const _0x332762 = _0x71dbfa;
        if (!_0x3aac93['ok']) throw new Error(_0x332762(0x20b) + _0x3aac93['status']);
      }));
      await Promise[_0x71dbfa(0x152)](_0x1e2efe);
    }
    async function _0x55e3a8(_0x1af47e) {
      const _0x5f3250 = _0x1f2edc
        , _0x1ec95a = _0x2db1a3[_0x5f3250(0x3d4)][_0x5f3250(0x5fd)](_0x1e80c2 => _0x1e80c2 && _0x1e80c2[_0x5f3250(0x247)]() !== '');
      if (_0x1ec95a[_0x5f3250(0x570)] === 0x0) {
        _0x2786ff('Nenhum\x20técnico\x20selecionado.\x20Escolha\x20ao\x20menos\x20um.', 'warning');
        return;
      }
      _0x5b5dcd = !![];
      const _0x2a0ccc = [..._0x2b7552]
        , _0x49d8a5 = _0x2a0ccc['length'];
      let _0x3919b3 = 0x0
        , _0x120a7b = 0x0;
      const _0x44fbad = []
        , _0x467368 = _0x2012f5();
      _0x2786ff('🚀\x20Iniciando\x20adição\x20de\x20mão\x20de\x20obra\x20para\x20' + _0x49d8a5 + _0x5f3250(0x69c), _0x5f3250(0x503));
      for (const _0x25531e of _0x2a0ccc) {
        if (!_0x5b5dcd) {
          _0x2786ff(_0x5f3250(0x1de), 'warning');
          break;
        }
        try {
          await _0x5a90c8(_0x25531e, _0x467368), _0x44fbad['push'](_0x25531e);
        } catch (_0x5f16ea) {
          _0x120a7b++, console[_0x5f3250(0x5fb)](_0x5f3250(0x29e) + _0x25531e + ':', _0x5f16ea);
        }
        _0x3919b3++;
        if (_0x1af47e) _0x1af47e(_0x3919b3 / _0x49d8a5);
      }
      _0x5b5dcd = ![];
      const _0xe23b8f = _0x5f3250(0x65c) + _0x44fbad['length'] + '\x20ordens\x20processadas.\x20' + _0x120a7b + _0x5f3250(0x173);
      _0x2786ff(_0xe23b8f, _0x120a7b > 0x0 ? _0x5f3250(0x65a) : 'success', 0x1770), _0x120a7b === 0x0 && _0x49d8a5 > 0x0 && (_0x2786ff(_0x5f3250(0x691), 'info'), setTimeout(() => {
        const _0x40d775 = _0x5f3250;
        location[_0x40d775(0x683)]();
      }, 0x1f4));
    }
    async function _0x591d76(_0x178f21, _0x1393ee, _0x30db03, _0x48e07e, _0x9a4ec2) {
      const _0xb5a9f5 = _0x1f2edc
        , _0x22b21b = _0xb5a9f5(0x283) + _0x1393ee + _0xb5a9f5(0x508) + _0x30db03 + _0xb5a9f5(0x383) + _0x48e07e + '&in=' + _0x9a4ec2 + _0xb5a9f5(0x413) + _0x178f21
        , _0x130fac = await fetch(_0x22b21b, {
          'credentials': _0xb5a9f5(0x5a4)
        });
      if (!_0x130fac['ok']) throw new Error('Não\x20foi\x20possível\x20carregar\x20a\x20página\x20da\x20ordem\x20' + _0x178f21 + '.');
      const _0x51e5f0 = await _0x130fac[_0xb5a9f5(0x353)]()
        , _0x50d690 = new DOMParser()
        , _0x5ce905 = _0x50d690[_0xb5a9f5(0x4a4)](_0x51e5f0, _0xb5a9f5(0x2aa))
        , _0x23358a = new Set()
        , _0x1eec99 = /eventoOnClickDelete\([^,]+,\s*[^,]+,\s*[^,]+,\s*(\d+),\s*(\d+)\s*\)/
        , _0x3fc8dc = _0x5ce905[_0xb5a9f5(0x143)](_0xb5a9f5(0x13d));
      if (_0x3fc8dc['length'] === 0x0) return;
      _0x3fc8dc[_0xb5a9f5(0x539)](_0x26728e => {
        const _0x3b672f = _0xb5a9f5
          , _0x4b2ed1 = _0x26728e[_0x3b672f(0x1c1)]('onclick')
          , _0x1ebd53 = _0x4b2ed1[_0x3b672f(0x3b6)](_0x1eec99);
        if (_0x1ebd53 && _0x1ebd53[0x1] && _0x1ebd53[0x2]) {
          const _0x5263a7 = _0x1ebd53[0x1]
            , _0x2d41b2 = _0x1ebd53[0x2]
            , _0x35c6ee = _0x26728e[_0x3b672f(0x3e0)](_0x3b672f(0x5da))
            , _0x2acad2 = _0x35c6ee && _0x35c6ee['id'] === _0x3b672f(0x3b8)
            , _0x4b6ec9 = _0x2acad2 ? '0' : _0x5263a7
            , _0x542add = _0x2acad2 ? _0x5263a7 : '0'
            , _0x27ca47 = _0x3b672f(0x42b) + _0x1393ee + _0x3b672f(0x286) + _0x178f21 + _0x3b672f(0x663) + _0x4b6ec9 + _0x3b672f(0x14e) + _0x542add + _0x3b672f(0x2dd) + _0x2d41b2 + _0x3b672f(0x61d);
          _0x23358a[_0x3b672f(0x5dc)](_0x27ca47);
        }
      });
      if (_0x23358a[_0xb5a9f5(0x52c)] === 0x0) return;
      const _0x3b3677 = Array[_0xb5a9f5(0x409)](_0x23358a)[_0xb5a9f5(0x113)](_0x547a0f => fetch(_0x547a0f, {
        'credentials': 'include'
      })[_0xb5a9f5(0x1ca)](_0x7fe4df => {
        if (!_0x7fe4df['ok']) throw new Error('Falha\x20na\x20remoção\x20do\x20recurso:\x20' + _0x547a0f);
      }));
      await Promise[_0xb5a9f5(0x152)](_0x3b3677);
    }
    async function _0x5583cc(_0x4a8fe8) {
      const _0x589737 = _0x1f2edc;
      if (_0x2b7552['length'] === 0x0) {
        _0x2786ff('Nenhuma\x20ordem\x20selecionada\x20para\x20remover\x20a\x20mão\x20de\x20obra!', _0x589737(0x65a));
        return;
      }
      _0x5b5dcd = !![];
      const _0x2c8838 = [..._0x2b7552]
        , _0x4df10a = _0x2c8838[_0x589737(0x570)];
      let _0x3d71eb = 0x0
        , _0x237678 = 0x0;
      const _0x2f5c86 = []
        , _0x21ebf3 = new URLSearchParams(window[_0x589737(0x298)][_0x589737(0x467)])
        , _0x4ff13e = _0x21ebf3[_0x589737(0x47f)](_0x589737(0x656))
        , _0x388ad2 = _0x21ebf3['get']('n1')
        , _0x13d684 = _0x21ebf3[_0x589737(0x47f)]('n2')
        , _0x581df6 = _0x21ebf3['get']('in');
      _0x2786ff(_0x589737(0x1da) + _0x4df10a + _0x589737(0x69c), _0x589737(0x503));
      for (const _0x23fe7b of _0x2c8838) {
        if (!_0x5b5dcd) {
          _0x2786ff(_0x589737(0x1de), _0x589737(0x65a));
          break;
        }
        try {
          await _0x591d76(_0x23fe7b, _0x4ff13e, _0x388ad2, _0x13d684, _0x581df6), _0x2f5c86[_0x589737(0x2d4)](_0x23fe7b);
        } catch (_0xdf4d17) {
          _0x237678++, console[_0x589737(0x5fb)](_0x589737(0x37a) + _0x23fe7b + ':', _0xdf4d17);
        }
        _0x3d71eb++;
        if (_0x4a8fe8) _0x4a8fe8(_0x3d71eb / _0x4df10a);
      }
      _0x5b5dcd = ![];
      const _0x1938c5 = _0x589737(0x317) + _0x2f5c86['length'] + _0x589737(0x3f3) + _0x237678 + '\x20falharam.';
      _0x2786ff(_0x1938c5, _0x237678 > 0x0 ? _0x589737(0x65a) : _0x589737(0x3a1), 0x1770), _0x237678 === 0x0 && _0x4df10a > 0x0 && (_0x2786ff(_0x589737(0x691), _0x589737(0x503)), setTimeout(() => {
        location['reload']();
      }, 0x1f4));
    }

    function _0x2ab23f(_0x251a21, _0x524d86) {
      return new Promise((_0x55fbbf, _0x556f0d) => {
        const _0x2278f6 = _0x3bcd
          , _0x369840 = document[_0x2278f6(0x4a9)](_0x2278f6(0x49f));
        _0x369840[_0x2278f6(0x39e)][_0x2278f6(0x258)] = _0x2278f6(0x24f);
        const _0x1a0e57 = () => document[_0x2278f6(0x4c5)]['contains'](_0x369840) && document['body'][_0x2278f6(0x1d5)](_0x369840)
          , _0x1c10a0 = _0x2012f5();
        if (!_0x1c10a0) return _0x556f0d(new Error(_0x2278f6(0x185)));
        const _0x262178 = _0x2278f6(0x283) + _0x1c10a0 + _0x2278f6(0x3ed) + _0x251a21;
        let _0xa9eb6e = 0x0;
        const _0x520f48 = 0x96
          , _0x16574f = 0x64
          , _0xa4e505 = setInterval(() => {
            const _0xddf80e = _0x2278f6;
            _0xa9eb6e++;
            try {
              const _0x28ba79 = _0x369840['contentDocument'];
              if (_0x28ba79 && _0x28ba79['readyState'] === _0xddf80e(0x1dd)) {
                const _0x2c9a92 = _0x28ba79[_0xddf80e(0x405)](_0xddf80e(0x227))
                  , _0x8e267a = _0x28ba79[_0xddf80e(0x405)](_0xddf80e(0x67c));
                if (_0x2c9a92 && _0x8e267a) {
                  clearInterval(_0xa4e505);
                  const _0x1f25f7 = _0x28ba79[_0xddf80e(0x405)](_0xddf80e(0x661));
                  if (_0x1f25f7) _0x1f25f7[_0xddf80e(0x554)] = _0x524d86;
                  else throw new Error(_0xddf80e(0xf8));
                  _0x8e267a['click']();
                  let _0xe2366f = 0x0;
                  const _0x183f12 = setInterval(() => {
                    const _0x3e5c74 = _0xddf80e;
                    _0xe2366f++;
                    try {
                      if (!_0x369840[_0x3e5c74(0x306)]?.[_0x3e5c74(0x405)](_0x3e5c74(0x227))) clearInterval(_0x183f12), _0x1a0e57(), _0x55fbbf(_0x251a21);
                      else {
                        if (_0xe2366f > _0x520f48) {
                          clearInterval(_0x183f12);
                          throw new Error(_0x3e5c74(0x444));
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
                throw new Error(_0xddf80e(0x11d));
              }
            } catch (_0x52c87c) {
              clearInterval(_0xa4e505), _0x1a0e57(), _0x556f0d(_0x52c87c);
            }
          }, _0x16574f);
        _0x369840[_0x2278f6(0x176)] = _0x4dcc78 => {
          clearInterval(_0xa4e505), _0x1a0e57(), _0x556f0d(new Error('Falha\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe\x20para\x20a\x20ordem\x20' + _0x251a21 + '.'));
        }, document['body']['appendChild'](_0x369840), _0x369840['src'] = _0x262178;
      });
    }
    async function _0x1e1e0a(_0x295993) {
      const _0x102c1d = _0x1f2edc
        , _0x23069d = document[_0x102c1d(0x405)](_0x102c1d(0x527))['value'];
      if (!_0x23069d) {
        _0x2786ff(_0x102c1d(0x3f2), _0x102c1d(0x65a));
        throw new Error(_0x102c1d(0x644));
      }
      _0x5b5dcd = !![];
      const _0x50c3c1 = [..._0x2b7552]
        , _0x4b3e5c = _0x50c3c1[_0x102c1d(0x570)];
      let _0x5c7660 = []
        , _0x5e23c3 = [];
      _0x2786ff(_0x102c1d(0x693) + _0x4b3e5c + _0x102c1d(0x69c), 'info');
      for (let _0x5a5934 = 0x0; _0x5a5934 < _0x4b3e5c; _0x5a5934++) {
        if (!_0x5b5dcd) {
          _0x2786ff('Processo\x20interrompido\x20pelo\x20usuário.', _0x102c1d(0x65a));
          break;
        }
        const _0x5c8fcc = _0x50c3c1[_0x5a5934];
        if (!_0x5b5dcd) {
          _0x2786ff(_0x102c1d(0x1e1), _0x102c1d(0x65a));
          break;
        }
        try {
          await _0x2ab23f(_0x5c8fcc, _0x23069d), _0x5c7660[_0x102c1d(0x2d4)](_0x5c8fcc);
        } catch (_0x324e2d) {
          _0x5e23c3['push'](_0x5c8fcc), console[_0x102c1d(0x5fb)](_0x102c1d(0x556) + _0x5c8fcc + ':', _0x324e2d);
        }
        _0x295993 && _0x295993((_0x5a5934 + 0x1) / _0x4b3e5c);
      }
      if (_0x295993) _0x295993(0x1);
      _0x5b5dcd = ![], _0x2b7552 = _0x2b7552[_0x102c1d(0x5fd)](_0x16f828 => !_0x5c7660[_0x102c1d(0x1c9)](_0x16f828)), _0x13d195(), _0x5f5540();
      const _0x4b625e = _0x5c7660[_0x102c1d(0x570)] + _0x102c1d(0x470) + _0x5e23c3['length'] + _0x102c1d(0x173);
      _0x2786ff(_0x4b625e, _0x5e23c3['length'] > 0x0 ? _0x102c1d(0x65a) : 'success', 0x1770);
      if (_0x5e23c3[_0x102c1d(0x570)] === 0x0 && _0x4b3e5c > 0x0) _0x2786ff(_0x102c1d(0x691), _0x102c1d(0x503)), setTimeout(() => {
        location['reload']();
      }, 0x1f4);
      else _0x5e23c3[_0x102c1d(0x570)] > 0x0 && _0x2786ff(_0x102c1d(0x55b), _0x102c1d(0x5fb), 0x1770);
    }

    function _0x2630a5(_0xd937c2) {
      return new Promise((_0x17fdbc, _0x2a6c88) => {
        const _0x4c2ccf = _0x3bcd;
        console[_0x4c2ccf(0x5ce)](_0x4c2ccf(0x5cd), _0xd937c2);
        const _0x2057fa = document[_0x4c2ccf(0x4a9)](_0x4c2ccf(0x49f));
        _0x2057fa['style'][_0x4c2ccf(0x258)] = _0x4c2ccf(0x24f);
        const _0x4f2ddc = () => document[_0x4c2ccf(0x4c5)][_0x4c2ccf(0xfd)](_0x2057fa) && document[_0x4c2ccf(0x4c5)][_0x4c2ccf(0x1d5)](_0x2057fa);
        let _0x33f149 = 0x0;
        const _0x151581 = 0x82
          , _0x36e962 = 0x1e
          , _0x341cfc = setInterval(() => {
            const _0x4de1a2 = _0x4c2ccf;
            _0x33f149++;
            try {
              const _0x46b0bb = _0x2057fa[_0x4de1a2(0x306)];
              _0x33f149 % 0x14 === 0x0 && console[_0x4de1a2(0x5ce)](_0x4de1a2(0x26b) + _0x33f149 + _0x4de1a2(0x679) + (_0x46b0bb ? _0x46b0bb[_0x4de1a2(0x3dd)] : _0x4de1a2(0x24c)));
              if (_0x46b0bb && _0x46b0bb[_0x4de1a2(0x3dd)] === 'complete') {
                const _0x3a0e3d = _0x46b0bb[_0x4de1a2(0x405)]('formDatos');
                if (_0x3a0e3d) {
                  console[_0x4de1a2(0x5ce)]('[Debug\x20TitanSystem]\x20✅\x20Sucesso!\x20Formulário\x20\x22formDatos\x22\x20encontrado.'), clearInterval(_0x341cfc), _0x4f2ddc(), _0x17fdbc(_0x3a0e3d);
                  return;
                }
              }
              _0x33f149 > _0x151581 && (console[_0x4de1a2(0x5fb)](_0x4de1a2(0x36f)), clearInterval(_0x341cfc), _0x4f2ddc(), _0x2a6c88(new Error('Timeout:\x20O\x20formulário\x20modelo\x20não\x20foi\x20encontrado\x20na\x20página.')));
            } catch (_0x2ef6ad) {
              console[_0x4de1a2(0x5fb)](_0x4de1a2(0x374), _0x2ef6ad), clearInterval(_0x341cfc), _0x4f2ddc(), _0x2a6c88(_0x2ef6ad);
            }
          }, _0x36e962);
        _0x2057fa['onerror'] = _0x222765 => {
          const _0x1df923 = _0x4c2ccf;
          console['error'](_0x1df923(0x2c4)), clearInterval(_0x341cfc), _0x4f2ddc(), _0x2a6c88(new Error('Falha\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe.'));
        }, document['body'][_0x4c2ccf(0x5a0)](_0x2057fa), _0x2057fa[_0x4c2ccf(0x465)] = _0xd937c2, console[_0x4c2ccf(0x5ce)](_0x4c2ccf(0x58d));
      });
    }

    function _0x3822d5(_0x36700b, _0x43e2a4, _0x1b6118, _0x4d932c, _0x2ffce9) {
      return new Promise((_0x12e946, _0xcaf748) => {
        const _0x55e34c = _0x3bcd
          , _0x4254e9 = document[_0x55e34c(0x4a9)]('iframe');
        _0x4254e9[_0x55e34c(0x39e)][_0x55e34c(0x258)] = 'none';
        const _0x288396 = () => document['body']['contains'](_0x4254e9) && document[_0x55e34c(0x4c5)]['removeChild'](_0x4254e9);
        let _0x27bc54 = 0x0;
        const _0x178ba1 = 0xc8
          , _0x9b85c0 = 0x4b
          , _0x46e3b3 = setInterval(() => {
            const _0x45d777 = _0x55e34c;
            _0x27bc54++;
            try {
              const _0x24dcf1 = _0x4254e9[_0x45d777(0x306)];
              if (!_0x24dcf1 || !_0x24dcf1[_0x45d777(0x4c5)]) {
                if (_0x27bc54 > 0x32) throw new Error(_0x45d777(0x55d));
                return;
              }
              if (_0x24dcf1['readyState'] === _0x45d777(0x1dd)) {
                const _0x52c810 = _0x24dcf1[_0x45d777(0x405)](_0x45d777(0x227))
                  , _0x1ccfb2 = _0x24dcf1[_0x45d777(0x405)](_0x45d777(0x67c));
                if (_0x52c810 && _0x1ccfb2) {
                  clearInterval(_0x46e3b3);
                  const _0x537390 = _0x24dcf1[_0x45d777(0x405)](_0x45d777(0x23d))
                    , _0x586964 = _0x24dcf1[_0x45d777(0x405)](_0x45d777(0x592))
                    , _0xe1758c = _0x24dcf1[_0x45d777(0x405)]('problema');
                  if (!_0x537390 || !_0x586964 || !_0xe1758c) return _0x288396(), _0xcaf748(new Error(_0x45d777(0x670)));
                  _0x537390[_0x45d777(0x554)] = _0x43e2a4, _0x586964[_0x45d777(0x554)] = _0x1b6118, _0xe1758c[_0x45d777(0x4d6)](_0x45d777(0x4fb));
                  if (_0x4d932c) _0xe1758c['value'] = _0x4d932c;
                  else {
                    if (_0x2ffce9) {
                      const _0x2e3841 = _0xe1758c[_0x45d777(0x554)]['trim']()
                        , _0x43c96e = (_0x2e3841 + '\x20' + _0x2ffce9)[_0x45d777(0x247)]();
                      _0xe1758c[_0x45d777(0x554)] = _0x43c96e;
                    }
                  }
                  let _0x43287f = 0x0;
                  const _0xfce57f = setInterval(() => {
                    const _0xdb86b = _0x45d777;
                    _0x43287f++;
                    try {
                      if (!_0x4254e9[_0xdb86b(0x306)]?.[_0xdb86b(0x405)](_0xdb86b(0x227))) clearInterval(_0xfce57f), _0x288396(), _0x12e946();
                      else _0x43287f > _0x178ba1 && (clearInterval(_0xfce57f), _0x288396(), _0xcaf748(new Error(_0xdb86b(0x444))));
                    } catch (_0x5c3527) {
                      clearInterval(_0xfce57f), _0x288396(), _0x12e946();
                    }
                  }, _0x9b85c0);
                  _0x1ccfb2[_0x45d777(0x338)]();
                  return;
                }
              }
              _0x27bc54 > _0x178ba1 && (clearInterval(_0x46e3b3), console[_0x45d777(0x5fb)](_0x45d777(0x5d4)), console['error'](_0x45d777(0x163), _0x4254e9['src']), console[_0x45d777(0x5fb)]('Conteúdo\x20recebido\x20do\x20servidor:', _0x24dcf1[_0x45d777(0x4c5)][_0x45d777(0x417)]), console[_0x45d777(0x5fb)]('======\x20FIM\x20DO\x20CONTEÚDO\x20DO\x20IFRAME\x20(DEBUG)\x20======'), _0x288396(), _0xcaf748(new Error(_0x45d777(0x397))));
            } catch (_0x2d8a4d) {
              clearInterval(_0x46e3b3), _0x288396(), _0xcaf748(_0x2d8a4d);
            }
          }, _0x9b85c0);
        _0x4254e9['onerror'] = _0x29c54a => {
          const _0xe12a30 = _0x55e34c;
          clearInterval(_0x46e3b3), _0x288396(), _0xcaf748(new Error(_0xe12a30(0x64b)));
        }, document[_0x55e34c(0x4c5)][_0x55e34c(0x5a0)](_0x4254e9), _0x4254e9[_0x55e34c(0x465)] = _0x36700b;
      });
    }

    function _0x368aea(_0x33b3c0, _0x2a23ab) {
      return new Promise((_0x469183, _0x7e5786) => {
        const _0x2f1964 = _0x3bcd
          , _0x658ed4 = document[_0x2f1964(0x4a9)]('iframe');
        _0x658ed4[_0x2f1964(0x39e)]['display'] = _0x2f1964(0x24f);
        const _0x3ebb13 = () => document[_0x2f1964(0x4c5)][_0x2f1964(0xfd)](_0x658ed4) && document[_0x2f1964(0x4c5)][_0x2f1964(0x1d5)](_0x658ed4);
        let _0x4a33c9 = 0x0;
        const _0x385874 = 0x82
          , _0x3c3ccf = 0x4b
          , _0x429c9c = setInterval(() => {
            const _0x425a5b = _0x2f1964;
            _0x4a33c9++;
            try {
              const _0x8fad9 = _0x658ed4[_0x425a5b(0x306)];
              if (_0x8fad9 && _0x8fad9['readyState'] === 'complete') {
                const _0x4745e8 = _0x8fad9['getElementById']('formDatos');
                if (_0x4745e8) {
                  clearInterval(_0x429c9c);
                  try {
                    const _0x2effd1 = _0x8fad9[_0x425a5b(0x4a9)](_0x425a5b(0x5ed));
                    _0x2effd1[_0x425a5b(0x6a2)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.confirm\x20=\x20function(message)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27[✅\x20Popup\x20de\x20confirmação\x20bloqueado\x20DENTRO\x20DO\x20IFRAME]:\x27,\x20message);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x8fad9['head'][_0x425a5b(0x5a0)](_0x2effd1), _0xb11661(_0x425a5b(0x616));
                  } catch (_0x2aa11a) {
                    console[_0x425a5b(0x5fb)](_0x425a5b(0x16e), _0x2aa11a);
                  }
                  const _0x3052e8 = {
                    'problema': _0x8fad9[_0x425a5b(0x405)](_0x425a5b(0x137))
                    , 'causa': _0x8fad9['getElementById'](_0x425a5b(0x19e))
                    , 'acao': _0x8fad9[_0x425a5b(0x405)](_0x425a5b(0x280))
                    , 'recomendacao': _0x8fad9['getElementById']('terminacion_recomendacion')
                    , 'recursos': _0x8fad9[_0x425a5b(0x405)](_0x425a5b(0x620))
                    , 'duracao': _0x8fad9[_0x425a5b(0x405)](_0x425a5b(0x1a5))
                    , 'total': _0x8fad9['getElementById']('duracion_total')
                    , 'submitBtn': _0x8fad9[_0x425a5b(0x405)](_0x425a5b(0x67c))
                  };
                  if (Object[_0x425a5b(0x61c)](_0x3052e8)[_0x425a5b(0x308)](_0x33a139 => !_0x33a139)) return _0x3ebb13(), _0x7e5786(new Error(_0x425a5b(0x633)));
                  _0x3052e8[_0x425a5b(0x35a)] && !_0x3052e8['problema'][_0x425a5b(0x48c)] && (_0x3052e8[_0x425a5b(0x35a)][_0x425a5b(0x554)] = _0x2a23ab[_0x425a5b(0x35a)]);
                  _0x3052e8[_0x425a5b(0x33b)] && !_0x3052e8[_0x425a5b(0x33b)]['readOnly'] && (_0x3052e8[_0x425a5b(0x33b)]['value'] = _0x2a23ab['causa']);
                  _0x3052e8['acao'] && !_0x3052e8[_0x425a5b(0x46d)][_0x425a5b(0x48c)] && (_0x3052e8['acao'][_0x425a5b(0x554)] = _0x2a23ab['acao']);
                  _0x3052e8[_0x425a5b(0x4ba)] && !_0x3052e8[_0x425a5b(0x4ba)][_0x425a5b(0x48c)] && (_0x3052e8['recomendacao']['value'] = _0x2a23ab[_0x425a5b(0x4ba)]);
                  _0x3052e8['recursos'][_0x425a5b(0x554)] = _0x2a23ab['recursos'], _0x3052e8['duracao'][_0x425a5b(0x554)] = _0x2a23ab[_0x425a5b(0x26c)], _0x3052e8[_0x425a5b(0x4ad)][_0x425a5b(0x554)] = _0x2a23ab[_0x425a5b(0x4ad)], _0x3052e8[_0x425a5b(0x2c2)][_0x425a5b(0x338)]();
                  let _0x50ab6f = 0x0;
                  const _0x5e4b76 = setInterval(() => {
                    const _0x58eaa4 = _0x425a5b;
                    _0x50ab6f++;
                    try {
                      if (!_0x658ed4[_0x58eaa4(0x306)]?.[_0x58eaa4(0x405)]('formDatos')) clearInterval(_0x5e4b76), _0x3ebb13(), _0x469183();
                      else _0x50ab6f > _0x385874 && (clearInterval(_0x5e4b76), _0x3ebb13(), _0x7e5786(new Error(_0x58eaa4(0x444))));
                    } catch (_0x4fda3d) {
                      clearInterval(_0x5e4b76), _0x3ebb13(), _0x469183();
                    }
                  }, _0x3c3ccf);
                  return;
                }
              }
              _0x4a33c9 > _0x385874 && (clearInterval(_0x429c9c), _0x3ebb13(), _0x7e5786(new Error(_0x425a5b(0x385))));
            } catch (_0x5b90d9) {
              clearInterval(_0x429c9c), _0x3ebb13(), _0x7e5786(_0x5b90d9);
            }
          }, _0x3c3ccf);
        _0x658ed4[_0x2f1964(0x176)] = _0x57cf2a => {
          const _0xb72310 = _0x2f1964;
          clearInterval(_0x429c9c), _0x3ebb13(), _0x7e5786(new Error(_0xb72310(0x138)));
        }, document[_0x2f1964(0x4c5)][_0x2f1964(0x5a0)](_0x658ed4), _0x658ed4[_0x2f1964(0x465)] = _0x33b3c0;
      });
    }
    async function _0x2cdb6a(_0xc7246e) {
      const _0x1b8455 = _0x1f2edc;
      _0x5b5dcd = !![];
      const _0x27c0e2 = {
          'problema': localStorage[_0x1b8455(0x1fb)](_0x1b8455(0x5aa)) || _0x1b8455(0x366)
          , 'causa': localStorage[_0x1b8455(0x1fb)](_0x1b8455(0x2a9)) || 'N/A'
          , 'acao': localStorage[_0x1b8455(0x1fb)](_0x1b8455(0x69f)) || _0x1b8455(0x366)
          , 'recomendacao': localStorage[_0x1b8455(0x1fb)](_0x1b8455(0x63d)) || _0x1b8455(0x366)
          , 'recursos': localStorage[_0x1b8455(0x1fb)](_0x1b8455(0x32f)) || '1'
          , 'duracao': localStorage[_0x1b8455(0x1fb)](_0x1b8455(0x3e5)) || '1'
          , 'total': localStorage[_0x1b8455(0x1fb)](_0x1b8455(0x2a7)) || '1'
        }
        , _0x25c291 = new URLSearchParams(window['location']['search'])
        , _0x1f98df = _0x25c291[_0x1b8455(0x47f)](_0x1b8455(0x656))
        , _0x3fe143 = _0x25c291['get']('n1')
        , _0x29df64 = _0x25c291[_0x1b8455(0x47f)]('n2')
        , _0x4fbc41 = _0x25c291['get']('in');
      if (!_0x1f98df || !_0x3fe143 || !_0x29df64 || !_0x4fbc41) {
        _0x5b5dcd = ![], _0x2786ff(_0x1b8455(0x494), _0x1b8455(0x5fb));
        throw new Error(_0x1b8455(0x1f3));
      }
      const _0x31e4c8 = [..._0x2b7552]
        , _0x247787 = _0x31e4c8[_0x1b8455(0x570)];
      let _0x31d94a = 0x0;
      _0x2786ff('🚀\x20Disparando\x20execução\x20para\x20' + _0x247787 + _0x1b8455(0x402), 'info');
      const _0x175c92 = _0x31e4c8[_0x1b8455(0x113)](_0x579575 => {
          const _0x46334b = _0x1b8455;
          if (!_0x5b5dcd) return Promise['resolve']({
            'status': 'cancelled'
          });
          const _0x5bd939 = _0x46334b(0x283) + _0x1f98df + _0x46334b(0x508) + _0x3fe143 + '&n2=' + _0x29df64 + _0x46334b(0x58b) + _0x4fbc41 + '&seccion=titan_trabajos_ordenes&subseccion=terminar&op=m&id_reg=' + _0x579575;
          return _0x368aea(_0x5bd939, _0x27c0e2)[_0x46334b(0x1ca)](() => {
            const _0x5264cd = _0x46334b;
            _0x31d94a++;
            if (_0xc7246e) _0xc7246e(_0x31d94a / _0x247787);
            return {
              'status': _0x5264cd(0x53a)
              , 'value': _0x579575
            };
          })[_0x46334b(0x292)](_0x42eb42 => {
            const _0x26da82 = _0x46334b;
            _0x31d94a++;
            if (_0xc7246e) _0xc7246e(_0x31d94a / _0x247787);
            return console[_0x26da82(0x5fb)](_0x26da82(0x25a) + _0x579575 + ':', _0x42eb42), {
              'status': 'rejected'
              , 'reason': _0x42eb42['message']
              , 'orderId': _0x579575
            };
          });
        })
        , _0x5935bf = await Promise[_0x1b8455(0x152)](_0x175c92)
        , _0x2a99a3 = _0x5935bf[_0x1b8455(0x5fd)](_0x197a43 => _0x197a43[_0x1b8455(0x5a9)] === 'fulfilled')[_0x1b8455(0x113)](_0x44eaac => _0x44eaac['value'])
        , _0x469883 = _0x5935bf[_0x1b8455(0x5fd)](_0x322a05 => _0x322a05[_0x1b8455(0x5a9)] === _0x1b8455(0x281))[_0x1b8455(0x570)];
      _0x13d195(), _0x5f5540(), _0x5b5dcd = ![];
      const _0x25b42b = _0x2a99a3[_0x1b8455(0x570)] + _0x1b8455(0x650) + _0x469883 + '\x20falharam.';
      _0x2786ff(_0x25b42b, _0x469883 > 0x0 ? _0x1b8455(0x65a) : _0x1b8455(0x3a1), 0x1770);
      if (_0x4458b3 === _0x1b8455(0x331) && _0x469883 === 0x0 && _0x247787 > 0x0) {
        _0x2b7552 = [], _0x13d195(), _0x5f5540();
        const _0x5725ad = document[_0x1b8455(0x405)](_0x1b8455(0x480));
        _0x5725ad && (_0x5725ad[_0x1b8455(0x554)] = '', _0x5725ad[_0x1b8455(0x410)](new Event('input')));
      }
      if (_0x469883 === 0x0 && _0x247787 > 0x0) _0x2786ff(_0x1b8455(0x691), 'info'), setTimeout(() => {
        const _0x15d80b = _0x1b8455;
        location[_0x15d80b(0x683)]();
      }, 0x1f4);
      else _0x469883 > 0x0 && _0x2786ff(_0x1b8455(0x55b), _0x1b8455(0x5fb), 0x1770);
    }
    async function _0x1ca2cd(_0x168275, _0x23ed5e, _0x503fb7, _0xcaca9e, _0x105e5, _0x150c36) {
      const _0x58875f = _0x1f2edc
        , _0xe2f63a = _0x58875f(0x283) + _0x23ed5e + _0x58875f(0x508) + _0x503fb7 + _0x58875f(0x383) + _0xcaca9e + _0x58875f(0x58b) + _0x105e5 + _0x58875f(0x118) + _0x168275
        , _0x504f7a = await _0x2630a5(_0xe2f63a)
        , _0x9422e1 = new FormData(_0x504f7a);
      _0x9422e1[_0x58875f(0x186)](_0x58875f(0x23d), _0x150c36), _0x9422e1['set']('id_reg', _0x168275);
      const _0x45889d = _0x58875f(0x24b) + _0x23ed5e
        , _0x23e352 = await fetch(_0x45889d, {
          'method': _0x58875f(0x148)
          , 'body': _0x9422e1
          , 'credentials': 'include'
        });
      if (!_0x23e352['ok']) throw new Error(_0x58875f(0x418) + _0x23e352[_0x58875f(0x5a9)] + _0x58875f(0x3f5));
    }
    async function _0x224161(_0x459c40) {
      const _0x3129e1 = _0x1f2edc;
      if (_0x5b5dcd) {
        _0x2786ff(_0x3129e1(0x625), _0x3129e1(0x65a));
        return;
      }
      _0x5b5dcd = !![];
      const _0x14c9c5 = new URLSearchParams(window['location']['search'])
        , _0x25ee28 = _0x14c9c5[_0x3129e1(0x47f)](_0x3129e1(0x656))
        , _0x4db118 = _0x14c9c5[_0x3129e1(0x47f)]('n1')
        , _0x1bcff2 = _0x14c9c5[_0x3129e1(0x47f)]('n2')
        , _0x47772b = _0x14c9c5[_0x3129e1(0x47f)]('in');
      if (!_0x25ee28 || !_0x4db118 || !_0x1bcff2 || !_0x47772b) {
        _0x5b5dcd = ![];
        throw new Error(_0x3129e1(0x3b7));
      }
      const _0x4f376f = new Date()
        , _0x14394e = String(_0x4f376f['getDate']())[_0x3129e1(0x44e)](0x2, '0')
        , _0xb9ddb4 = String(_0x4f376f['getMonth']() + 0x1)[_0x3129e1(0x44e)](0x2, '0')
        , _0x35107b = _0x4f376f[_0x3129e1(0x5c7)]()
        , _0x24ec9b = _0x14394e + '/' + _0xb9ddb4 + '/' + _0x35107b
        , _0x499fec = [..._0x2b7552]
        , _0x126aac = _0x499fec[_0x3129e1(0x570)];
      let _0x5167af = 0x0
        , _0x1a1ae3 = 0x0;
      const _0x469da6 = [];
      _0x2786ff(_0x3129e1(0x2a8) + _0x126aac + _0x3129e1(0x412), _0x3129e1(0x503));
      for (const _0x573e4b of _0x499fec) {
        if (!_0x5b5dcd) break;
        try {
          await _0x1ca2cd(_0x573e4b, _0x25ee28, _0x4db118, _0x1bcff2, _0x47772b, _0x24ec9b), _0x469da6[_0x3129e1(0x2d4)](_0x573e4b);
        } catch (_0x28c2b8) {
          _0x1a1ae3++, console[_0x3129e1(0x5fb)](_0x3129e1(0x259) + _0x573e4b + ':', _0x28c2b8);
        }
        _0x5167af++;
        if (_0x459c40) _0x459c40(_0x5167af / _0x126aac);
      }
      _0x5b5dcd = ![];
      const _0x1ac4ba = _0x3129e1(0x65c) + _0x469da6[_0x3129e1(0x570)] + '\x20ordens\x20ativadas\x20com\x20sucesso.\x20' + _0x1a1ae3 + _0x3129e1(0x173);
      _0x2786ff(_0x1ac4ba, _0x1a1ae3 > 0x0 ? 'warning' : _0x3129e1(0x3a1), 0x1770);
      if (_0x1a1ae3 === 0x0 && _0x126aac > 0x0) _0x2786ff('Sucesso\x20total!\x20Atualizando\x20a\x20página...', _0x3129e1(0x503)), setTimeout(() => {
        location['reload']();
      }, 0x1f4);
      else _0x1a1ae3 > 0x0 && _0x2786ff(_0x3129e1(0x55b), 'error', 0x1770);
    }
    async function _0x1116da(_0x1c30cd) {
      const _0x50791a = _0x1f2edc
        , _0x17fb61 = _0x5e0ee9(document[_0x50791a(0x405)](_0x50791a(0x51a))['value'])
        , _0x3a3192 = document['getElementById']('input-causa')[_0x50791a(0x554)]
        , _0x5a0be1 = document[_0x50791a(0x405)](_0x50791a(0x203))
        , _0x3b5195 = _0x5a0be1 && !_0x5a0be1[_0x50791a(0x4e8)] ? _0x5a0be1[_0x50791a(0x554)][_0x50791a(0x247)]() : ''
        , _0x2e2119 = document['getElementById'](_0x50791a(0x149))
        , _0xfeec5e = _0x2e2119 && !_0x2e2119[_0x50791a(0x4e8)] ? _0x2e2119['value'][_0x50791a(0x247)]() : '';
      if (!_0x17fb61 || !_0x3a3192[_0x50791a(0x247)]()) return _0x2786ff(_0x50791a(0x4bc), 'warning');
      if (_0x3b5195 !== '' && _0xfeec5e !== '') return _0x2786ff(_0x50791a(0x5bc), 'error', 0x1770);
      else {
        if (_0x3b5195 !== '') {
          if (!confirm(_0x50791a(0x676) + _0x3b5195 + '\x22\x0aem\x20TODAS\x20as\x20' + _0x2b7552[_0x50791a(0x570)] + _0x50791a(0x25c))) return _0x2786ff(_0x50791a(0x47e), 'info');
        } else {
          if (_0xfeec5e !== '') {
            if (!confirm(_0x50791a(0x2f8) + _0xfeec5e + _0x50791a(0x1bf) + _0x2b7552[_0x50791a(0x570)] + _0x50791a(0x25c))) return _0x2786ff(_0x50791a(0x47e), _0x50791a(0x503));
          }
        }
      }
      _0x5b5dcd = !![];
      const _0x54a1dc = new URLSearchParams(window[_0x50791a(0x298)]['search'])
        , _0x588f32 = _0x54a1dc['get'](_0x50791a(0x656))
        , _0x3856c3 = _0x54a1dc[_0x50791a(0x47f)]('n1')
        , _0x396f57 = _0x54a1dc[_0x50791a(0x47f)]('n2')
        , _0x13ee81 = _0x54a1dc[_0x50791a(0x47f)]('in');
      if (!_0x588f32 || !_0x3856c3 || !_0x396f57 || !_0x13ee81) {
        _0x5b5dcd = ![], _0x2786ff(_0x50791a(0x494), _0x50791a(0x5fb));
        return;
      }
      const _0x5b3746 = [..._0x2b7552]
        , _0x5f4060 = _0x5b3746[_0x50791a(0x570)];
      let _0x5d59be = 0x0;
      _0x2786ff(_0x50791a(0x245) + _0x5f4060 + _0x50791a(0x402), _0x50791a(0x503));
      const _0x26b470 = _0x5b3746[_0x50791a(0x113)](_0x15ed4a => {
          const _0x4f14e5 = _0x50791a;
          if (!_0x5b5dcd) return Promise[_0x4f14e5(0x221)]({
            'status': _0x4f14e5(0x171)
          });
          const _0x2792b4 = _0x4f14e5(0x283) + _0x588f32 + _0x4f14e5(0x508) + _0x3856c3 + _0x4f14e5(0x383) + _0x396f57 + '&in=' + _0x13ee81 + _0x4f14e5(0x5cb) + _0x15ed4a;
          return _0x3822d5(_0x2792b4, _0x17fb61, _0x3a3192, _0x3b5195, _0xfeec5e)[_0x4f14e5(0x1ca)](() => {
            const _0x14cfd2 = _0x4f14e5;
            _0x5d59be++;
            if (_0x1c30cd) _0x1c30cd(_0x5d59be / _0x5f4060);
            return {
              'status': _0x14cfd2(0x53a)
              , 'value': _0x15ed4a
            };
          })[_0x4f14e5(0x292)](_0x2fe499 => {
            const _0x11eb4c = _0x4f14e5;
            _0x5d59be++;
            if (_0x1c30cd) _0x1c30cd(_0x5d59be / _0x5f4060);
            return console[_0x11eb4c(0x5fb)](_0x11eb4c(0x5ad) + _0x15ed4a + ':', _0x2fe499), {
              'status': _0x11eb4c(0x281)
              , 'reason': _0x2fe499['message']
              , 'orderId': _0x15ed4a
            };
          });
        })
        , _0x5de023 = await Promise[_0x50791a(0x152)](_0x26b470)
        , _0xc14037 = _0x5de023['filter'](_0xc02100 => _0xc02100[_0x50791a(0x5a9)] === 'fulfilled')[_0x50791a(0x113)](_0x4bb425 => _0x4bb425[_0x50791a(0x554)])
        , _0x2793ea = _0x5de023[_0x50791a(0x5fd)](_0x5a45b7 => _0x5a45b7[_0x50791a(0x5a9)] === 'rejected')[_0x50791a(0x570)];
      _0x13d195(), _0x5f5540(), _0x5b5dcd = ![];
      const _0x589821 = _0x50791a(0x65c) + _0xc14037['length'] + _0x50791a(0x2d0) + _0x2793ea + _0x50791a(0x173);
      _0x2786ff(_0x589821, _0x2793ea > 0x0 ? _0x50791a(0x65a) : _0x50791a(0x3a1), 0x1770);
      if (_0x2793ea === 0x0 && _0x5f4060 > 0x0) _0x2786ff(_0x50791a(0x691), _0x50791a(0x503)), setTimeout(() => {
        location['reload']();
      }, 0x1f4);
      else _0x2793ea > 0x0 && _0x2786ff(_0x50791a(0x55b), 'error', 0x1770);
    }

    function _0x507d86(_0x207a01, _0x5f24f8) {
      return new Promise((_0x9e5c40, _0x2d8dc1) => {
        const _0x2743b = _0x3bcd
          , _0x36f2f9 = document['createElement'](_0x2743b(0x49f));
        _0x36f2f9[_0x2743b(0x39e)]['display'] = _0x2743b(0x24f);
        const _0x785356 = () => document[_0x2743b(0x4c5)][_0x2743b(0xfd)](_0x36f2f9) && document[_0x2743b(0x4c5)][_0x2743b(0x1d5)](_0x36f2f9);
        let _0x489021 = 0x0;
        const _0x15a24f = 0xc8
          , _0x4f362b = 0x4b
          , _0xfb4d81 = setInterval(() => {
            const _0x36255f = _0x2743b;
            _0x489021++;
            try {
              const _0x31f45d = _0x36f2f9[_0x36255f(0x306)];
              if (_0x31f45d && _0x31f45d[_0x36255f(0x3dd)] === _0x36255f(0x1dd)) {
                const _0x2910b5 = _0x31f45d[_0x36255f(0x405)]('formDatos')
                  , _0x506f7b = _0x31f45d['getElementById'](_0x36255f(0x67c));
                if (_0x2910b5 && _0x506f7b) {
                  clearInterval(_0xfb4d81);
                  const _0x2b15d8 = _0x31f45d['getElementById'](_0x36255f(0x381));
                  if (!_0x2b15d8) return _0x785356(), _0x2d8dc1(new Error(_0x36255f(0x5a7)));
                  _0x2b15d8['value'] = _0x5f24f8, _0x506f7b[_0x36255f(0x338)]();
                  let _0x1f1ef2 = 0x0;
                  const _0x4898d7 = setInterval(() => {
                    const _0x558de7 = _0x36255f;
                    _0x1f1ef2++;
                    try {
                      if (!_0x36f2f9['contentDocument']?.[_0x558de7(0x405)](_0x558de7(0x227))) clearInterval(_0x4898d7), _0x785356(), _0x9e5c40();
                      else _0x1f1ef2 > _0x15a24f && (clearInterval(_0x4898d7), _0x785356(), _0x2d8dc1(new Error(_0x558de7(0x444))));
                    } catch (_0x221565) {
                      clearInterval(_0x4898d7), _0x785356(), _0x9e5c40();
                    }
                  }, _0x4f362b);
                  return;
                }
              }
              _0x489021 > _0x15a24f && (clearInterval(_0xfb4d81), _0x785356(), _0x2d8dc1(new Error(_0x36255f(0x584))));
            } catch (_0x3aba25) {
              clearInterval(_0xfb4d81), _0x785356(), _0x2d8dc1(_0x3aba25);
            }
          }, _0x4f362b);
        _0x36f2f9[_0x2743b(0x176)] = () => {
          const _0x3f74df = _0x2743b;
          clearInterval(_0xfb4d81), _0x785356(), _0x2d8dc1(new Error(_0x3f74df(0x478)));
        }, document[_0x2743b(0x4c5)][_0x2743b(0x5a0)](_0x36f2f9), _0x36f2f9[_0x2743b(0x465)] = _0x207a01;
      });
    }
    async function _0x497030(_0x5bbcf8) {
      const _0x8fabe3 = _0x1f2edc
        , _0x4036e4 = await _0x15e7d4('Cancelar\x20Ordens\x20em\x20Massa\x20🛑', _0x8fabe3(0x50b) + _0x2b7552['length'] + '\x20ordens\x20selecionadas.', _0x8fabe3(0x64d));
      if (_0x4036e4 === null || _0x4036e4[_0x8fabe3(0x247)]() === '') {
        _0x2786ff(_0x8fabe3(0xf7), _0x8fabe3(0x65a));
        throw new Error('Operação\x20cancelada\x20pelo\x20usuário.');
      }
      _0x5b5dcd = !![];
      const _0x33584d = new URLSearchParams(window[_0x8fabe3(0x298)][_0x8fabe3(0x467)])
        , _0x5a7e0c = _0x33584d[_0x8fabe3(0x47f)](_0x8fabe3(0x656))
        , _0x214b2a = _0x33584d['get']('n1')
        , _0x28c54d = _0x33584d[_0x8fabe3(0x47f)]('n2')
        , _0x7236b6 = _0x33584d[_0x8fabe3(0x47f)]('in');
      if (!_0x5a7e0c || !_0x214b2a || !_0x28c54d || !_0x7236b6) {
        _0x5b5dcd = ![], _0x2786ff(_0x8fabe3(0x494), _0x8fabe3(0x5fb));
        throw new Error(_0x8fabe3(0x1f3));
      }
      const _0x527376 = [..._0x2b7552]
        , _0x4c558e = _0x527376[_0x8fabe3(0x570)];
      let _0x38701d = 0x0
        , _0xa98364 = 0x0
        , _0x260442 = [];
      _0x2786ff(_0x8fabe3(0x4af) + _0x4c558e + _0x8fabe3(0x69c), 'info');
      for (const _0x262fc7 of _0x527376) {
        if (!_0x5b5dcd) break;
        const _0x2e4613 = _0x8fabe3(0x283) + _0x5a7e0c + '&n1=' + _0x214b2a + _0x8fabe3(0x383) + _0x28c54d + _0x8fabe3(0x58b) + _0x7236b6 + _0x8fabe3(0x4e1) + _0x262fc7;
        try {
          await _0x507d86(_0x2e4613, _0x4036e4), _0x260442[_0x8fabe3(0x2d4)](_0x262fc7);
        } catch (_0x27531a) {
          _0xa98364++, console[_0x8fabe3(0x5fb)](_0x8fabe3(0x3e8) + _0x262fc7 + ':', _0x27531a);
        }
        _0x38701d++;
        if (_0x5bbcf8) _0x5bbcf8(_0x38701d / _0x4c558e);
      }
      _0x5b5dcd = ![], _0x2b7552 = _0x2b7552['filter'](_0x45cd78 => !_0x260442[_0x8fabe3(0x1c9)](_0x45cd78)), _0x13d195(), _0x5f5540();
      const _0x226334 = _0x8fabe3(0x65c) + _0x260442[_0x8fabe3(0x570)] + _0x8fabe3(0x65e) + _0xa98364 + _0x8fabe3(0x173);
      _0x2786ff(_0x226334, _0xa98364 > 0x0 ? _0x8fabe3(0x65a) : _0x8fabe3(0x3a1), 0x1770);
      if (_0xa98364 === 0x0 && _0x4c558e > 0x0) _0x2786ff(_0x8fabe3(0x691), _0x8fabe3(0x503)), setTimeout(() => {
        const _0x123e06 = _0x8fabe3;
        location[_0x123e06(0x683)]();
      }, 0x1f4);
      else _0xa98364 > 0x0 && _0x2786ff(_0x8fabe3(0x55b), _0x8fabe3(0x5fb), 0x1770);
    }

    function _0x4158d4(_0x20b1ca, _0x38e819, _0x68c2b1) {
      return new Promise((_0x4b89a7, _0x25dadf) => {
        const _0x20f0c1 = _0x3bcd
          , _0x2b04a3 = document[_0x20f0c1(0x4a9)](_0x20f0c1(0x49f));
        _0x2b04a3[_0x20f0c1(0x39e)][_0x20f0c1(0x258)] = 'none';
        const _0x435e35 = () => document[_0x20f0c1(0x4c5)][_0x20f0c1(0xfd)](_0x2b04a3) && document[_0x20f0c1(0x4c5)][_0x20f0c1(0x1d5)](_0x2b04a3)
          , _0x4d34ae = _0x2012f5()
          , _0x46f7b6 = _0x20f0c1(0x283) + _0x4d34ae + _0x20f0c1(0x2fb)
          , _0x588ef1 = setInterval(() => {
            const _0x4b0c26 = _0x20f0c1;
            try {
              const _0x3b9341 = _0x2b04a3['contentDocument'];
              if (_0x3b9341 && _0x3b9341[_0x4b0c26(0x3dd)] === _0x4b0c26(0x1dd)) {
                const _0x335031 = _0x3b9341[_0x4b0c26(0x405)]('formDatos');
                if (_0x335031 && typeof _0x3b9341[_0x4b0c26(0x664)][_0x4b0c26(0x44f)] === 'function') {
                  clearInterval(_0x588ef1);
                  const _0xc09667 = _0x3b9341[_0x4b0c26(0x405)]('key__equipos__id_result');
                  _0x3b9341[_0x4b0c26(0x405)]('key__equipos__id')['value'] = _0x20b1ca[_0x4b0c26(0x1db)], _0x3b9341[_0x4b0c26(0x664)][_0x4b0c26(0x44f)](_0x3b9341[_0x4b0c26(0x664)][_0x4b0c26(0x652)], _0x20b1ca[_0x4b0c26(0x1db)], _0xc09667);
                  let _0x27fce9 = 0x0;
                  const _0x11ffcc = setInterval(() => {
                    const _0x10eb8e = _0x4b0c26;
                    _0x27fce9++;
                    if (_0xc09667[_0x10eb8e(0x554)]['trim']() !== '') {
                      clearInterval(_0x11ffcc);
                      const _0x20c578 = _0x68c2b1 > 0x1 ? _0x20b1ca[_0x10eb8e(0x30c)] + '\x20(' + _0x38e819 + '/' + _0x68c2b1 + ')' : _0x20b1ca[_0x10eb8e(0x30c)];
                      _0x3b9341['getElementById'](_0x10eb8e(0x35a))[_0x10eb8e(0x554)] = _0x20c578, _0x3b9341[_0x10eb8e(0x405)](_0x10eb8e(0x318))['value'] = _0x20b1ca['tallerId'], _0x3b9341['getElementById'](_0x10eb8e(0x1e4))[_0x10eb8e(0x554)] = _0x20b1ca[_0x10eb8e(0x314)], _0x3b9341[_0x10eb8e(0x405)](_0x10eb8e(0x1e4))[_0x10eb8e(0x410)](new Event(_0x10eb8e(0x429), {
                        'bubbles': !![]
                      })), _0x3b9341[_0x10eb8e(0x405)](_0x10eb8e(0x324))[_0x10eb8e(0x554)] = _0x20b1ca[_0x10eb8e(0x26a)], // --- CÓDIGO NOVO (PASSO 3 - VERSÃO ROBÔ B) ---
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

_0x3b9341[_0x10eb8e(0x405)](_0x10eb8e(0x67c))['click'](), setTimeout(() => {
                        _0x435e35(), _0x4b89a7();
                      }, 0x7d0);
                    } else _0x27fce9 > 0x32 && (clearInterval(_0x11ffcc), _0x435e35(), _0x25dadf(new Error(_0x10eb8e(0x451))));
                  }, 0xc8);
                  return;
                }
              }
            } catch (_0x4d8027) {
              clearInterval(_0x588ef1), _0x435e35(), _0x25dadf(_0x4d8027);
            }
          }, 0x1f4);
        _0x2b04a3[_0x20f0c1(0x176)] = _0x37adce => {
          clearInterval(_0x588ef1), _0x435e35(), _0x25dadf(new Error('Falha\x20de\x20rede\x20ao\x20carregar\x20o\x20iframe.'));
        }, document[_0x20f0c1(0x4c5)][_0x20f0c1(0x5a0)](_0x2b04a3), _0x2b04a3['src'] = _0x46f7b6;
      });
    }
    async function _0x565b94(_0x464fae) {
      const _0x4855bb = _0x1f2edc
        , _0x541001 = JSON[_0x4855bb(0x18c)](localStorage[_0x4855bb(0x1fb)](_0x4855bb(0x393)) || '[]');
      if (_0x541001[_0x4855bb(0x570)] === 0x0) {
        _0x2786ff('Nenhum\x20equipamento\x20na\x20lista\x20para\x20criar\x20pedidos!', _0x4855bb(0x5fb));
        throw new Error('Lista\x20de\x20equipamentos\x20vazia.');
      }
      const _0x21c2c5 = {
        'dataRequerida': document[_0x4855bb(0x405)](_0x4855bb(0x646))[_0x4855bb(0x554)][_0x4855bb(0x3f0)]('-')[_0x4855bb(0x66f)]()[_0x4855bb(0x42f)]('/')
        , 'tallerId': document[_0x4855bb(0x405)]('pedido-taller')[_0x4855bb(0x554)]
        , 'tipoTrabalhoId': document[_0x4855bb(0x405)](_0x4855bb(0x555))[_0x4855bb(0x554)]
        , 'descricao': document['getElementById'](_0x4855bb(0x608))['value']
        , 'propositoId': document.getElementById('pedido-proposito').value
        , 'quantidadePorEquipamento': parseInt(document[_0x4855bb(0x405)]('input-quantidade-pedidos')[_0x4855bb(0x554)], 0xa) || 0x1
      };
      if (!_0x21c2c5[_0x4855bb(0x30c)][_0x4855bb(0x247)]()) {
        _0x2786ff(_0x4855bb(0x40a), _0x4855bb(0x5fb));
        throw new Error(_0x4855bb(0x146));
      }
      _0x5b5dcd = !![], localStorage[_0x4855bb(0x634)](_0x4855bb(0x26e), _0x21c2c5[_0x4855bb(0x632)]), localStorage[_0x4855bb(0x634)](_0x4855bb(0x289), _0x21c2c5[_0x4855bb(0x314)]);
      let _0x4aa092 = 0x0;
      const _0x14c297 = _0x541001[_0x4855bb(0x570)] * _0x21c2c5['quantidadePorEquipamento'];
      let _0x3797a1 = 0x0;
      for (const _0x4d7779 of _0x541001) {
        if (!_0x5b5dcd) break;
        for (let _0x1d1be6 = 0x1; _0x1d1be6 <= _0x21c2c5[_0x4855bb(0x4ae)]; _0x1d1be6++) {
          if (!_0x5b5dcd) break;
          try {
            const _0x2abfc6 = {
              ..._0x21c2c5
              , 'equipamentoId': _0x4d7779['id']
            };
            await _0x4158d4(_0x2abfc6, _0x1d1be6, _0x21c2c5[_0x4855bb(0x4ae)]);
          } catch (_0x4b03dc) {
            _0x4aa092++, console[_0x4855bb(0x5fb)](_0x4855bb(0x311) + _0x1d1be6 + _0x4855bb(0x3d5) + _0x4d7779['tag'] + ':', _0x4b03dc);
          }
          _0x3797a1++;
          const _0x4fc1ad = _0x3797a1 / _0x14c297;
          if (_0x464fae) _0x464fae(_0x4fc1ad);
        }
      }
      _0x5b5dcd = ![];
      const _0x29bb8e = 'Concluído!\x20' + (_0x14c297 - _0x4aa092) + '\x20pedidos\x20criados.\x20' + _0x4aa092 + '\x20falharam.';
      _0x2786ff(_0x29bb8e, _0x4aa092 > 0x0 ? _0x4855bb(0x65a) : 'success', 0x1770), document['getElementById'](_0x4855bb(0x608))[_0x4855bb(0x554)] = '', localStorage[_0x4855bb(0x125)]('titanflow_pedido_descricao_salva'), _0x4bf71a(), setTimeout(() => {
        const _0x365941 = _0x4855bb;
        location[_0x365941(0x683)]();
      }, 0x5dc);
    }

    function _0x19fdd7(_0x4f77a0, _0xa8c39e) {
      return new Promise((_0x1adcc7, _0x3d7c27) => {
        const _0x1596c8 = _0x3bcd
          , _0x53824b = document['createElement'](_0x1596c8(0x49f));
        _0x53824b['style'][_0x1596c8(0x258)] = 'none';
        const _0x4cdafe = () => document[_0x1596c8(0x4c5)][_0x1596c8(0xfd)](_0x53824b) && document['body'][_0x1596c8(0x1d5)](_0x53824b)
          , _0x2cb421 = _0x2012f5()
          , _0x3e98d6 = _0x1596c8(0x42b) + _0x2cb421 + _0x1596c8(0x219) + _0x4f77a0;
        let _0x48bcc5 = 0x0;
        const _0x3d0b3e = 0x3c
          , _0x3305fd = setInterval(() => {
            const _0x2c2de3 = _0x1596c8;
            _0x48bcc5++;
            try {
              const _0x5449b5 = _0x53824b[_0x2c2de3(0x306)];
              if (_0x5449b5 && _0x5449b5[_0x2c2de3(0x3dd)] === _0x2c2de3(0x1dd)) {
                const _0x20c416 = _0x5449b5[_0x2c2de3(0x405)](_0x2c2de3(0x227));
                if (_0x20c416) {
                  clearInterval(_0x3305fd), _0x5449b5[_0x2c2de3(0x405)](_0x2c2de3(0x66c))[_0x2c2de3(0x554)] = _0xa8c39e[_0x2c2de3(0x1af)], _0x5449b5[_0x2c2de3(0x405)](_0x2c2de3(0x66d))['value'] = _0x2c2de3(0x366), _0x5449b5[_0x2c2de3(0x405)]('repuestos')[_0x2c2de3(0x554)] = 'N/A', _0x5449b5[_0x2c2de3(0x405)](_0x2c2de3(0x4bf))[_0x2c2de3(0x554)] = 'N/A', _0x5449b5[_0x2c2de3(0x405)]('herramientas')[_0x2c2de3(0x554)] = 'N/A';
                  if (_0xa8c39e[_0x2c2de3(0x406)][_0x2c2de3(0x570)] > 0x0) {
                    const _0xfc3e6a = _0xa8c39e[_0x2c2de3(0x406)][0x0]
                      , _0x23b441 = _0x5449b5['getElementById'](_0x2c2de3(0x34c));
                    _0x23b441 && (_0x23b441[_0x2c2de3(0x554)] = _0xfc3e6a['id'], _0x23b441[_0x2c2de3(0x410)](new Event(_0x2c2de3(0x429))), _0x5449b5[_0x2c2de3(0x405)](_0x2c2de3(0x1b8))[_0x2c2de3(0x554)] = _0xfc3e6a[_0x2c2de3(0x114)], _0x5449b5['getElementById']('especialidad1_hh_rrhh')[_0x2c2de3(0x554)] = _0xfc3e6a['horas']);
                  }
                  typeof _0x5449b5[_0x2c2de3(0x664)][_0x2c2de3(0x2ff)] === 'function' && _0x5449b5['defaultView']['actualizar_totales_especialidades']();
                  let _0x522a3c = 0x0;
                  const _0x3bf997 = setInterval(() => {
                    const _0x30f5a6 = _0x2c2de3;
                    _0x522a3c++;
                    try {
                      if (!_0x53824b[_0x30f5a6(0x306)]?.[_0x30f5a6(0x405)](_0x30f5a6(0x227))) clearInterval(_0x3bf997), _0x4cdafe(), _0x1adcc7();
                      else _0x522a3c > _0x3d0b3e && (clearInterval(_0x3bf997), _0x4cdafe(), _0x3d7c27(new Error(_0x30f5a6(0x444))));
                    } catch (_0x3fc8ad) {
                      clearInterval(_0x3bf997), _0x4cdafe(), _0x1adcc7();
                    }
                  }, 0x1f4);
                  _0x5449b5[_0x2c2de3(0x405)]('bEnviar')['click']();
                  return;
                }
              }
              _0x48bcc5 > _0x3d0b3e && (clearInterval(_0x3305fd), _0x4cdafe(), _0x3d7c27(new Error('Timeout:\x20Formulário\x20de\x20emissão\x20não\x20foi\x20encontrado.')));
            } catch (_0x2e412b) {
              clearInterval(_0x3305fd), _0x4cdafe(), _0x3d7c27(_0x2e412b);
            }
          }, 0x1f4);
        _0x53824b['onerror'] = _0x411295 => {
          const _0x261d0c = _0x1596c8;
          clearInterval(_0x3305fd), _0x4cdafe(), _0x3d7c27(new Error(_0x261d0c(0x3b1)));
        }, document[_0x1596c8(0x4c5)][_0x1596c8(0x5a0)](_0x53824b), _0x53824b['src'] = _0x3e98d6;
      });
    }
    async function _0x3872cf(_0x32bb8a) {
      const _0x4f2495 = _0x1f2edc
        , _0x508842 = {
          'estadoPlan': document[_0x4f2495(0x405)](_0x4f2495(0x43a))[_0x4f2495(0x554)]
          , 'especialidades': []
        }
        , _0x362f55 = document[_0x4f2495(0x405)](_0x4f2495(0x4b2))[_0x4f2495(0x554)];
      _0x362f55 && _0x508842['especialidades']['push']({
        'id': _0x362f55
        , 'pessoas': document[_0x4f2495(0x405)](_0x4f2495(0x112))[_0x4f2495(0x554)] || '0'
        , 'horas': document[_0x4f2495(0x405)](_0x4f2495(0x108))[_0x4f2495(0x554)] || '0'
      });
      _0x5b5dcd = !![];
      const _0x3dd970 = [..._0x2b7552];
      let _0x485905 = 0x0
        , _0x443de4 = 0x0;
      const _0x141187 = _0x3dd970[_0x4f2495(0x570)];
      for (const _0x17cd34 of _0x3dd970) {
        if (!_0x5b5dcd) break;
        try {
          await _0x19fdd7(_0x17cd34, _0x508842);
          const _0xc3687b = (_0x443de4 + 0x1) / _0x141187;
          if (_0x32bb8a) _0x32bb8a(_0xc3687b);
        } catch (_0x121f0c) {
          _0x485905++, console[_0x4f2495(0x5fb)](_0x4f2495(0x232) + _0x17cd34 + ':', _0x121f0c);
          const _0x480833 = (_0x443de4 + 0x1) / _0x141187;
          if (_0x32bb8a) _0x32bb8a(_0x480833);
        }
        _0x443de4++;
      }
      _0x5b5dcd = ![], _0x13d195(), _0x5f5540();
      const _0x3e37d5 = _0x4f2495(0x65c) + (_0x141187 - _0x485905) + _0x4f2495(0x495) + _0x485905 + _0x4f2495(0x173);
      _0x2786ff(_0x3e37d5, _0x485905 > 0x0 ? _0x4f2495(0x65a) : _0x4f2495(0x3a1), 0x1770);
      if (_0x485905 === 0x0 && _0x141187 > 0x0) {
        _0x2b7552 = [], _0x13d195(), _0x5f5540();
        const _0x5bb99b = document[_0x4f2495(0x405)]('ordens-input');
        _0x5bb99b && (_0x5bb99b[_0x4f2495(0x554)] = '', _0x5bb99b[_0x4f2495(0x410)](new Event(_0x4f2495(0x3d9)))), _0x2786ff('Atualizando\x20a\x20página\x20em\x20500ms...', _0x4f2495(0x503), 0x3e8), setTimeout(() => {
          const _0xbd24b3 = _0x4f2495;
          location[_0xbd24b3(0x683)]();
        }, 0x1f4);
      }
    }

    function _0x2012f5() {
      const _0x2301ad = _0x1f2edc
        , _0x2f546c = window[_0x2301ad(0x298)][_0x2301ad(0x2bd)][_0x2301ad(0x3b6)](/SESID=([^&]*)/);
      return _0x2f546c ? _0x2f546c[0x1] : '';
    }

    function _0x5e0ee9(_0x2256f8) {
      const _0x51c58a = _0x1f2edc
        , _0x3be17e = _0x2256f8['split']('-');
      if (_0x3be17e[_0x51c58a(0x570)] === 0x3) return _0x3be17e[0x2] + '/' + _0x3be17e[0x1] + '/' + _0x3be17e[0x0];
      return '';
    }

    function _0x288fe4(_0x3158de, _0x4e451e) {
      const _0x4d1350 = _0x1f2edc;
      _0x3158de[_0x4d1350(0x39e)][_0x4d1350(0x258)] === 'none' ? (_0x4e451e[_0x4d1350(0x417)] = '👁️\x20Mostrar\x20Painel', _0x4e451e[_0x4d1350(0x242)] = _0x4d1350(0x1c8), _0x4e451e[_0x4d1350(0x39e)][_0x4d1350(0x156)] = '#28a745') : (_0x4e451e[_0x4d1350(0x417)] = _0x4d1350(0x378), _0x4e451e[_0x4d1350(0x242)] = _0x4d1350(0x654), _0x4e451e[_0x4d1350(0x39e)][_0x4d1350(0x156)] = '#3366ff');
    }

    function _0x4177e2() {
      const _0x2ae6ee = _0x1f2edc
        , _0x5f4c9f = document[_0x2ae6ee(0x405)](_0x2ae6ee(0x2cc));
      if (!_0x5f4c9f) return;
      const _0x24658e = JSON[_0x2ae6ee(0x18c)](localStorage['getItem'](_0x2ae6ee(0x69a)) || '{}')
        , _0x119bf0 = [{
          'valor': '6'
          , 'texto': _0x2ae6ee(0x170)
        }, {
          'valor': '1'
          , 'texto': _0x2ae6ee(0x2c7)
        }, {
          'valor': '4'
          , 'texto': 'Esperando\x20evento'
        }, {
          'valor': '5'
          , 'texto': _0x2ae6ee(0x423)
        }, {
          'valor': '2'
          , 'texto': _0x2ae6ee(0x193)
        }, {
          'valor': '3'
          , 'texto': 'Esperando\x20serviços'
        }, {
          'valor': ''
          , 'texto': '--\x20Nenhum\x20--'
        }]
        , _0x1397cd = [{
          'valor': ''
          , 'texto': _0x2ae6ee(0x2cf)
        }, {
          'valor': '1'
          , 'texto': _0x2ae6ee(0x2d1)
        }, {
          'valor': '2'
          , 'texto': _0x2ae6ee(0x160)
        }, {
          'valor': '3'
          , 'texto': _0x2ae6ee(0x408)
        }, {
          'valor': '4'
          , 'texto': _0x2ae6ee(0x498)
        }, {
          'valor': '14'
          , 'texto': _0x2ae6ee(0x5c4)
        }, {
          'valor': '17'
          , 'texto': _0x2ae6ee(0x20d)
        }, {
          'valor': '18'
          , 'texto': _0x2ae6ee(0x434)
        }, {
          'valor': '23'
          , 'texto': _0x2ae6ee(0x205)
        }]
        , _0x1d7d49 = localStorage[_0x2ae6ee(0x1fb)]('pedido_ultimo_taller') || '8'
        , _0x3d8391 = localStorage[_0x2ae6ee(0x1fb)](_0x2ae6ee(0x289)) || '3'
        , _0x53a57e = [{
          'valor': '8'
          , 'texto': 'Caldeiraria'
        }, {
          'valor': '14'
          , 'texto': _0x2ae6ee(0x408)
        }, {
          'valor': '2'
          , 'texto': 'Elétrico'
        }, {
          'valor': '11'
          , 'texto': _0x2ae6ee(0x18f)
        }, {
          'valor': '7'
          , 'texto': _0x2ae6ee(0x20d)
        }, {
          'valor': '10'
          , 'texto': _0x2ae6ee(0x5af)
        }, {
          'valor': '18'
          , 'texto': _0x2ae6ee(0x639)
        }, {
          'valor': '9'
          , 'texto': _0x2ae6ee(0x426)
        }, {
          'valor': '1'
          , 'texto': _0x2ae6ee(0x499)
        }, {
          'valor': '6'
          , 'texto': _0x2ae6ee(0x351)
        }, {
          'valor': '15'
          , 'texto': _0x2ae6ee(0x5e4)
        }, {
          'valor': '16'
          , 'texto': _0x2ae6ee(0x5d7)
        }, {
          'valor': '12'
          , 'texto': 'Sinalização'
        }, {
          'valor': '17'
          , 'texto': _0x2ae6ee(0x4a0)
        }]
        , _0x3d107d = [{
          'valor': '3'
          , 'texto': _0x2ae6ee(0x2a2)
        }, {
          'valor': '1'
          , 'texto': _0x2ae6ee(0x4fc)
        }, {
          'valor': '7'
          , 'texto': _0x2ae6ee(0x34b)
        }, {
          'valor': '6'
          , 'texto': _0x2ae6ee(0x4a1)
        }, {
          'valor': '5'
          , 'texto': _0x2ae6ee(0x615)
        }, {
          'valor': '8'
          , 'texto': _0x2ae6ee(0x15e)
        }, {
          'valor': '9'
          , 'texto': _0x2ae6ee(0x6a3)
        }, {
          'valor': '2'
          , 'texto': _0x2ae6ee(0x321)
        }, {
          'valor': '10'
          , 'texto': _0x2ae6ee(0x3bc)
        }, {
          'valor': '4'
          , 'texto': _0x2ae6ee(0x49e)
        }];
      _0x5f4c9f[_0x2ae6ee(0x417)] = _0x2ae6ee(0x355) + _0x53a57e['map'](_0x18a256 => _0x2ae6ee(0x300) + _0x18a256[_0x2ae6ee(0x56e)] + '\x22\x20' + (_0x18a256['valor'] === _0x1d7d49 ? _0x2ae6ee(0x323) : '') + '>' + _0x18a256[_0x2ae6ee(0x23c)] + _0x2ae6ee(0x64f))[_0x2ae6ee(0x42f)]('') + _0x2ae6ee(0x61a) + _0x3d107d[_0x2ae6ee(0x113)](_0x28a201 => '<option\x20value=\x22' + _0x28a201[_0x2ae6ee(0x56e)] + '\x22\x20' + (_0x28a201[_0x2ae6ee(0x56e)] === _0x3d8391 ? _0x2ae6ee(0x323) : '') + '>' + _0x28a201[_0x2ae6ee(0x23c)] + '</option>')[_0x2ae6ee(0x42f)]('') + _0x2ae6ee(0x55f) + _0x119bf0[_0x2ae6ee(0x113)](_0x1a7909 => _0x2ae6ee(0x300) + _0x1a7909[_0x2ae6ee(0x56e)] + '\x22\x20' + (_0x24658e[_0x2ae6ee(0x1af)] === _0x1a7909[_0x2ae6ee(0x56e)] ? _0x2ae6ee(0x323) : '') + '>' + _0x1a7909[_0x2ae6ee(0x23c)] + _0x2ae6ee(0x64f))['join']('') + _0x2ae6ee(0x117);
      const _0x3545c6 = document['createElement'](_0x2ae6ee(0x39e));
      _0x3545c6[_0x2ae6ee(0x6a2)] = _0x2ae6ee(0x3ea), _0x5f4c9f['prepend'](_0x3545c6);
      const _0x17abf4 = document[_0x2ae6ee(0x405)]('pedido-taller')
        , _0x995319 = document[_0x2ae6ee(0x405)](_0x2ae6ee(0x555));
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
      _0x17abf4['addEventListener'](_0x2ae6ee(0x429), () => {
        const _0x3d53b0 = _0x2ae6ee;
        localStorage[_0x3d53b0(0x634)]('pedido_ultimo_taller', _0x17abf4[_0x3d53b0(0x554)]), _0xb11661(_0x3d53b0(0x549), _0x17abf4[_0x3d53b0(0x554)]);
      }), _0x995319[_0x2ae6ee(0x5fc)]('change', () => {
        const _0x155b46 = _0x2ae6ee;
        localStorage[_0x155b46(0x634)](_0x155b46(0x289), _0x995319[_0x155b46(0x554)]), _0xb11661(_0x155b46(0x60d), _0x995319[_0x155b46(0x554)]);
      });
      const _0x1a3c59 = document[_0x2ae6ee(0x405)](_0x2ae6ee(0x646));
      _0x1a3c59[_0x2ae6ee(0x554)] = new Date()[_0x2ae6ee(0x1ed)]()[_0x2ae6ee(0x3f0)]('T')[0x0], _0x1a3c59[_0x2ae6ee(0x54f)] = _0x1a3c59[_0x2ae6ee(0x554)], document[_0x2ae6ee(0x405)](_0x2ae6ee(0x3a0))[_0x2ae6ee(0x269)] = _0x4761f2;
      const _0x4ddf92 = document['getElementById'](_0x2ae6ee(0x293))
        , _0x29f31a = _0x24658e[_0x2ae6ee(0x406)] && _0x24658e[_0x2ae6ee(0x406)][0x0] || {};
      _0x4ddf92[_0x2ae6ee(0x417)] = _0x2ae6ee(0x15b) + _0x1397cd[_0x2ae6ee(0x113)](_0x1964c6 => _0x2ae6ee(0x300) + _0x1964c6[_0x2ae6ee(0x56e)] + '\x22\x20' + (_0x29f31a['id'] === _0x1964c6[_0x2ae6ee(0x56e)] ? _0x2ae6ee(0x323) : '') + '>' + _0x1964c6[_0x2ae6ee(0x23c)] + _0x2ae6ee(0x64f))[_0x2ae6ee(0x42f)]('') + _0x2ae6ee(0x153) + (_0x29f31a[_0x2ae6ee(0x114)] || 0x0) + _0x2ae6ee(0x2fe) + (_0x29f31a['horas'] || 0x0) + _0x2ae6ee(0x21f), document[_0x2ae6ee(0x405)](_0x2ae6ee(0x1b5))[_0x2ae6ee(0x424)] = () => {
        const _0x485e1d = _0x2ae6ee;
        _0x36cec0(event[_0x485e1d(0x64e)]);
        if (_0x2b7552[_0x485e1d(0x570)] === 0x0) {
          _0x2786ff(_0x485e1d(0x316), _0x485e1d(0x65a));
          return;
        }
        const _0x3b4e41 = document[_0x485e1d(0x405)](_0x485e1d(0x637));
        _0xc0586b(document['getElementById'](_0x485e1d(0x1b5)), _0x3b4e41, _0x3872cf);
      };
      const _0x55d0b7 = () => {
        const _0x4d870c = _0x2ae6ee
          , _0x3359ca = {
            'estadoPlan': document[_0x4d870c(0x405)](_0x4d870c(0x43a))[_0x4d870c(0x554)]
            , 'especialidades': [{
              'id': document['getElementById'](_0x4d870c(0x4b2))[_0x4d870c(0x554)]
              , 'pessoas': document[_0x4d870c(0x405)](_0x4d870c(0x112))['value']
              , 'horas': document[_0x4d870c(0x405)](_0x4d870c(0x108))[_0x4d870c(0x554)]
            }]
          };
        localStorage[_0x4d870c(0x634)](_0x4d870c(0x69a), JSON['stringify'](_0x3359ca));
      };
      document[_0x2ae6ee(0x405)](_0x2ae6ee(0x43a))['onchange'] = _0x55d0b7, document[_0x2ae6ee(0x405)](_0x2ae6ee(0x112))[_0x2ae6ee(0x269)] = _0x55d0b7, document['getElementById'](_0x2ae6ee(0x108))[_0x2ae6ee(0x269)] = _0x55d0b7;
      const _0x33bb3d = document[_0x2ae6ee(0x405)]('esp-id-1');
      _0x33bb3d[_0x2ae6ee(0x27a)] = () => {
        const _0x9054ba = _0x2ae6ee
          , _0x7c0fcb = _0x33bb3d[_0x9054ba(0x554)] !== '';
        document['getElementById'](_0x9054ba(0x112))[_0x9054ba(0x4e8)] = !_0x7c0fcb, document['getElementById']('esp-horas-1')[_0x9054ba(0x4e8)] = !_0x7c0fcb, !_0x7c0fcb && (document[_0x9054ba(0x405)]('esp-pessoas-1')[_0x9054ba(0x554)] = 0x0, document[_0x9054ba(0x405)](_0x9054ba(0x108))['value'] = 0x0), _0x55d0b7();
      }, _0x33bb3d['dispatchEvent'](new Event(_0x2ae6ee(0x429)));
      const _0x5e06d3 = document[_0x2ae6ee(0x405)](_0x2ae6ee(0x4d0))
        , _0x3560d9 = document['getElementById'](_0x2ae6ee(0x1e5))
        , _0x3b9f98 = document[_0x2ae6ee(0x405)](_0x2ae6ee(0x573))
        , _0xaab39b = document[_0x2ae6ee(0x405)]('btn-principal-acao');

      function _0x2a4909() {
        const _0x210e50 = _0x2ae6ee
          , _0xd7b475 = _0x5e06d3['checked']
          , _0x534e8e = _0x3560d9[_0x210e50(0x660)];
        _0x3b9f98['disabled'] = !_0xd7b475 && !_0x534e8e;
        if (_0x534e8e) {
          _0x3b9f98[_0x210e50(0x312)] = _0x210e50(0x353), _0xaab39b[_0x210e50(0x417)] = '<span>Emitir\x20Pedido\x20(Filha)</span>', _0xaab39b[_0x210e50(0x190)][_0x210e50(0x5dc)](_0x210e50(0x370)), _0x3b9f98['classList']['add']('expanded'), _0x3b9f98[_0x210e50(0x41d)] = _0x210e50(0x1eb);
          if (_0x3b9f98['value'][_0x210e50(0x570)] < 0x3) _0x3b9f98['value'] = '';
        } else {
          _0x3b9f98[_0x210e50(0x312)] = _0x210e50(0x4fe), _0xaab39b[_0x210e50(0x417)] = '✅\x20Criar\x20Pedido', _0xaab39b[_0x210e50(0x190)]['remove']('emit-mode'), _0x3b9f98[_0x210e50(0x190)][_0x210e50(0x4be)](_0x210e50(0x4ed)), _0x3b9f98['placeholder'] = _0x210e50(0x516);
          if (!_0x3b9f98[_0x210e50(0x554)] || parseInt(_0x3b9f98[_0x210e50(0x554)]) < 0x1) _0x3b9f98[_0x210e50(0x554)] = '1';
        }
      }
      _0x5e06d3[_0x2ae6ee(0x5fc)](_0x2ae6ee(0x429), () => {
        const _0x28f64b = _0x2ae6ee;
        _0x5e06d3[_0x28f64b(0x660)] ? _0x3560d9[_0x28f64b(0x660)] = ![] : _0x3b9f98[_0x28f64b(0x554)] = '1', _0x2a4909();
      }), _0x3560d9[_0x2ae6ee(0x5fc)]('change', () => {
        const _0x5e3326 = _0x2ae6ee;
        _0x3560d9[_0x5e3326(0x660)] ? _0x5e06d3[_0x5e3326(0x660)] = ![] : _0x3b9f98['value'] = '1', _0x2a4909();
      }), _0x2a4909(), _0xaab39b[_0x2ae6ee(0x424)] = () => {
        const _0x16b091 = _0x2ae6ee;
        if (_0x3560d9['checked']) _0x574ba0();
        else {
          const _0x3b29ba = JSON[_0x16b091(0x18c)](localStorage['getItem'](_0x16b091(0x393)) || '[]')
            , _0x249679 = document[_0x16b091(0x405)]('pedido-descricao')['value'];
          if (_0x3b29ba[_0x16b091(0x570)] === 0x0) return _0x2786ff(_0x16b091(0x3e3), 'error');
          if (!_0x249679[_0x16b091(0x247)]()) return _0x2786ff(_0x16b091(0x526), 'error');
          const _0x56c565 = _0x5e06d3['checked'] ? parseInt(_0x3b9f98[_0x16b091(0x554)], 0xa) || 0x1 : 0x1;
          document[_0x16b091(0x405)](_0x16b091(0x626))[_0x16b091(0x554)] = _0x56c565;
          const _0x5ea36e = document[_0x16b091(0x667)](_0x16b091(0x30b));
          typeof _0xc0586b === 'function' ? _0xc0586b(_0xaab39b, _0x5ea36e, _0x565b94) : _0x565b94(null);
        }
      }, _0x3b9f98['addEventListener'](_0x2ae6ee(0x3d9), () => {
        const _0x46a5a9 = _0x2ae6ee;
        let _0x4932d3 = _0x3b9f98[_0x46a5a9(0x554)][_0x46a5a9(0x2ee)](/\D/g, '');
        const _0x14ac79 = _0x3560d9[_0x46a5a9(0x660)] ? 0x7 : 0x2;
        _0x4932d3[_0x46a5a9(0x570)] > _0x14ac79 && (_0x4932d3 = _0x4932d3[_0x46a5a9(0x387)](0x0, _0x14ac79)), _0x3b9f98[_0x46a5a9(0x554)] = _0x4932d3;
      }), document[_0x2ae6ee(0x405)](_0x2ae6ee(0x276))[_0x2ae6ee(0x424)] = _0x4bf71a, _0x162603();
      const _0x27b47f = document['getElementById'](_0x2ae6ee(0x608))
        , _0x26775c = _0x2ae6ee(0x45c)
        , _0x302e48 = localStorage[_0x2ae6ee(0x1fb)](_0x26775c);
      _0x302e48 && (_0x27b47f[_0x2ae6ee(0x554)] = _0x302e48);
      _0x27b47f['addEventListener'](_0x2ae6ee(0x3d9), () => {
        const _0x2a7274 = _0x2ae6ee;
        localStorage[_0x2a7274(0x634)](_0x26775c, _0x27b47f[_0x2a7274(0x554)]);
      }), _0x27b47f[_0x2ae6ee(0x39e)][_0x2ae6ee(0x2d5)] = _0x2ae6ee(0x24e), _0x27b47f[_0x2ae6ee(0x39e)][_0x2ae6ee(0x505)] = _0x2ae6ee(0x694);

      function _0x4f4dbe() {
        const _0x1b536a = _0x2ae6ee
          , _0x47a7cc = 0x2d;
        this[_0x1b536a(0x39e)][_0x1b536a(0x1cc)] = 'auto';
        const _0x4ad9d1 = Math[_0x1b536a(0x356)](_0x47a7cc, this[_0x1b536a(0x538)]);
        this[_0x1b536a(0x39e)]['height'] = _0x4ad9d1 + 'px';
      }
      _0x27b47f[_0x2ae6ee(0x5fc)]('input', _0x4f4dbe, ![]), _0x4f4dbe[_0x2ae6ee(0x305)](_0x27b47f), document[_0x2ae6ee(0x405)](_0x2ae6ee(0x48f))[_0x2ae6ee(0x424)] = _0x595ad3;
    }
    async function _0x3a1f53(_0x32c1a7 = ![]) {
      const _0x5ac3b0 = _0x1f2edc
        , _0x5c0643 = _0x5ac3b0(0x21c);
      return new Promise((_0x5391d5, _0x23a4e0) => {
        const _0x30252b = _0x5ac3b0
          , _0x5be383 = _0x2012f5();
        if (!_0x5be383) return alert(_0x30252b(0x53e)), _0x23a4e0(new Error(_0x30252b(0x446)));
        const _0x2e8f77 = document[_0x30252b(0x4a9)](_0x30252b(0x49f));
        _0x2e8f77[_0x30252b(0x39e)]['display'] = 'none', _0x2e8f77[_0x30252b(0x465)] = '/albatros/admin.php?SESID=' + _0x5be383 + _0x30252b(0x497), _0x2e8f77[_0x30252b(0x357)] = () => {
          const _0x90d518 = _0x30252b;
          try {
            const _0x378fbf = _0x2e8f77['contentDocument']['body'][_0x90d518(0x2d9)]
              , _0x50d029 = _0x554d69(_0x378fbf);
            if (_0x50d029[_0x90d518(0x570)] > 0x0) _0x34e176 = _0x50d029, sessionStorage['setItem'](_0x5c0643, JSON[_0x90d518(0x1b4)](_0x50d029)), localStorage['setItem']('lista_equipamentos_titan', JSON['stringify'](_0x50d029)), _0x5391d5(_0x50d029);
            else throw new Error('Não\x20foi\x20possível\x20extrair\x20nenhum\x20equipamento.');
          } catch (_0x26112f) {
            _0x23a4e0(_0x26112f);
          } finally {
            document[_0x90d518(0x4c5)][_0x90d518(0x1d5)](_0x2e8f77);
          }
        }, _0x2e8f77['onerror'] = () => {
          const _0x5e75ae = _0x30252b;
          document[_0x5e75ae(0x4c5)][_0x5e75ae(0x1d5)](_0x2e8f77), _0x23a4e0(new Error(_0x5e75ae(0x2c6)));
        }, document[_0x30252b(0x4c5)][_0x30252b(0x5a0)](_0x2e8f77);
      });
    }

    function _0x554d69(_0x402617) {
      const _0x446bf7 = _0x1f2edc
        , _0x85c9c6 = []
        , _0x2fd7e0 = /\[(.*?)\]\s+(.*?)\s+showData\(".*?",\s*"(\d+)"\)/g
        , _0x52aa29 = _0x402617[_0x446bf7(0x33a)](_0x2fd7e0);
      for (const _0x55571a of _0x52aa29) {
        _0x85c9c6['push']({
          'tag': _0x55571a[0x1]
          , 'nome': _0x55571a[0x2][_0x446bf7(0x247)]()
          , 'id': _0x55571a[0x3]
        });
      }
      return _0x85c9c6;
    }

    function _0x360915(_0x20cbb8) {
      const _0x2b0a77 = _0x1f2edc;
      if (!_0x20cbb8) return '';
      return _0x20cbb8['toString']()[_0x2b0a77(0x483)]()[_0x2b0a77(0x13f)](_0x2b0a77(0x24d))[_0x2b0a77(0x2ee)](/[\u0300-\u036f]/g, '')[_0x2b0a77(0x2ee)](/ç/g, 'c');
    }

    function _0xc2fe5f(_0x2329b8, _0x5cac47) {
      const _0x32a792 = _0x1f2edc
        , _0x4db129 = /^[0-9.]+$/
        , _0x2cb46d = _0x4db129[_0x32a792(0x4f6)](_0x2329b8[_0x32a792(0x1ec)])
        , _0x50f0a5 = _0x4db129[_0x32a792(0x4f6)](_0x5cac47[_0x32a792(0x1ec)]);
      if (_0x2cb46d && !_0x50f0a5) return -0x1;
      if (!_0x2cb46d && _0x50f0a5) return 0x1;
      if (_0x2cb46d && _0x50f0a5) {
        const _0x4d0c0c = _0x2329b8[_0x32a792(0x1ec)][_0x32a792(0x3f0)]('.')['map'](Number)
          , _0x6250b4 = _0x5cac47[_0x32a792(0x1ec)]['split']('.')[_0x32a792(0x113)](Number)
          , _0x496f90 = Math[_0x32a792(0x356)](_0x4d0c0c['length'], _0x6250b4[_0x32a792(0x570)]);
        for (let _0x524dae = 0x0; _0x524dae < _0x496f90; _0x524dae++) {
          const _0x113782 = _0x4d0c0c[_0x524dae] || 0x0
            , _0xeed7db = _0x6250b4[_0x524dae] || 0x0;
          if (_0x113782 < _0xeed7db) return -0x1;
          if (_0x113782 > _0xeed7db) return 0x1;
        }
        return _0x4d0c0c[_0x32a792(0x570)] - _0x6250b4[_0x32a792(0x570)];
      }
      return _0x2329b8[_0x32a792(0x1ec)][_0x32a792(0x3cf)](_0x5cac47[_0x32a792(0x1ec)]);
    }

    function _0x4761f2(_0x49d07a) {
      const _0x58f7db = _0x1f2edc
        , _0x21df64 = _0x360915(_0x49d07a[_0x58f7db(0x354)][_0x58f7db(0x554)])
        , _0x23ebb1 = JSON[_0x58f7db(0x18c)](localStorage[_0x58f7db(0x1fb)](_0x58f7db(0x5a1)) || '[]')
        , _0x3b8c82 = document[_0x58f7db(0x405)](_0x58f7db(0x4c1));
      _0x3b8c82[_0x58f7db(0x417)] = '';
      if (_0x21df64[_0x58f7db(0x570)] < 0x2) return;
      const _0x4cc99f = _0x23ebb1['filter'](_0xde0bb8 => _0x360915(_0xde0bb8[_0x58f7db(0x1ec)])[_0x58f7db(0x1c9)](_0x21df64) || _0x360915(_0xde0bb8[_0x58f7db(0x4e9)])[_0x58f7db(0x1c9)](_0x21df64));
      _0x4cc99f[_0x58f7db(0x3d6)](_0xc2fe5f), _0x4cc99f[_0x58f7db(0x387)](0x0, 0x32)['forEach'](_0x5b46a1 => {
        const _0x2a97b1 = _0x58f7db
          , _0x209494 = document[_0x2a97b1(0x4a9)](_0x2a97b1(0x45f));
        _0x209494[_0x2a97b1(0x39e)]['padding'] = _0x2a97b1(0x596), _0x209494[_0x2a97b1(0x39e)][_0x2a97b1(0x241)] = 'pointer', _0x209494[_0x2a97b1(0x417)] = _0x2a97b1(0x19d) + _0x5b46a1[_0x2a97b1(0x1ec)] + _0x2a97b1(0x2a4) + _0x5b46a1[_0x2a97b1(0x4e9)], _0x209494[_0x2a97b1(0x290)] = () => _0x209494[_0x2a97b1(0x39e)][_0x2a97b1(0x156)] = '#f0f0f0', _0x209494[_0x2a97b1(0x463)] = () => _0x209494[_0x2a97b1(0x39e)][_0x2a97b1(0x156)] = 'transparent', _0x209494[_0x2a97b1(0x424)] = () => _0x279f1c(_0x5b46a1), _0x3b8c82[_0x2a97b1(0x5a0)](_0x209494);
      });
    }

    function _0x279f1c(_0xe7df2d) {
      const _0x1d5e64 = _0x1f2edc;
      let _0x4c4dbe = JSON[_0x1d5e64(0x18c)](localStorage[_0x1d5e64(0x1fb)](_0x1d5e64(0x393)) || '[]');
      const _0x507351 = _0x4c4dbe[_0x1d5e64(0x308)](_0x549033 => _0x549033['id'] === _0xe7df2d['id']);
      if (_0x507351) {
        _0x2786ff(_0x1d5e64(0x304) + _0xe7df2d[_0x1d5e64(0x1ec)] + ']\x20já\x20está\x20na\x20lista.', 'info', 0x7d0);
        return;
      }
      _0x4c4dbe['push']({
        'id': _0xe7df2d['id']
        , 'tag': _0xe7df2d['tag']
        , 'nome': _0xe7df2d['nome']
      }), localStorage[_0x1d5e64(0x634)](_0x1d5e64(0x393), JSON['stringify'](_0x4c4dbe)), _0x162603();
    }

    function _0x162603() {
      const _0x1d4afa = _0x1f2edc
        , _0x29b1e5 = JSON[_0x1d4afa(0x18c)](localStorage[_0x1d4afa(0x1fb)](_0x1d4afa(0x393)) || '[]')
        , _0x2f8ef4 = document[_0x1d4afa(0x405)](_0x1d4afa(0x5e2))
        , _0x4ba011 = document[_0x1d4afa(0x405)]('equip-count');
      if (!_0x2f8ef4 || !_0x4ba011) return;
      _0x2f8ef4[_0x1d4afa(0x417)] = '', _0x4ba011['textContent'] = _0x29b1e5[_0x1d4afa(0x570)], _0x29b1e5[_0x1d4afa(0x570)] === 0x0 ? _0x2f8ef4['innerHTML'] = _0x1d4afa(0x178) : _0x29b1e5[_0x1d4afa(0x539)](_0x3cd720 => {
        const _0x3bafd1 = _0x1d4afa
          , _0x3391f5 = document[_0x3bafd1(0x4a9)]('li');
        _0x3391f5['innerHTML'] = _0x3bafd1(0x2c0) + _0x3cd720['tag'] + _0x3bafd1(0x68b) + _0x3cd720[_0x3bafd1(0x4e9)] + _0x3bafd1(0x5cc) + _0x3cd720['id'] + '\x22\x20title=\x22Remover\x22>&times;</span>', _0x2f8ef4[_0x3bafd1(0x5a0)](_0x3391f5);
      }), document[_0x1d4afa(0x143)](_0x1d4afa(0x517))['forEach'](_0x271906 => {
        const _0x4bf961 = _0x1d4afa;
        _0x271906[_0x4bf961(0x424)] = _0x4b164c => _0x58b6b9(_0x4b164c['currentTarget'][_0x4bf961(0x534)]['id']);
      });
    }

    function _0x58b6b9(_0x59d2f3) {
      const _0x163c27 = _0x1f2edc;
      let _0x1a7e44 = JSON[_0x163c27(0x18c)](localStorage[_0x163c27(0x1fb)]('titanflow_equipamentos_selecionados') || '[]');
      _0x1a7e44 = _0x1a7e44['filter'](_0x4318bf => _0x4318bf['id'] !== _0x59d2f3), localStorage[_0x163c27(0x634)]('titanflow_equipamentos_selecionados', JSON[_0x163c27(0x1b4)](_0x1a7e44)), _0x162603();
    }

    function _0x4bf71a() {
      const _0x6f1bce = _0x1f2edc;
      localStorage['setItem'](_0x6f1bce(0x393), JSON[_0x6f1bce(0x1b4)]([])), _0x162603();
    }

    function _0xc4d1f2() {
      const _0x8d325e = _0x1f2edc;
      if (_0x4458b3 === _0x8d325e(0x331)) return;

      function _0x347847(_0x3e5fc5) {
        const _0x2c27a1 = _0x8d325e;
        if (!_0x3e5fc5) return '';
        return _0x3e5fc5[_0x2c27a1(0x3ef)]()['toLowerCase']()[_0x2c27a1(0x13f)](_0x2c27a1(0x24d))[_0x2c27a1(0x2ee)](/[\u0300-\u036f]/g, '');
      }
      const _0x1bf94b = _0x8d325e(0x51c);

      function _0x1bee9c() {
        const _0x13ca7d = _0x8d325e
          , _0x584286 = {
            'ot': document[_0x13ca7d(0x405)]('filtro-ot')[_0x13ca7d(0x554)]
            , 'equipamento': document[_0x13ca7d(0x405)](_0x13ca7d(0x56b))['value']
            , 'descricao': document[_0x13ca7d(0x405)](_0x13ca7d(0x60e))['value']
            , 'oficina': document[_0x13ca7d(0x405)](_0x13ca7d(0x37d))[_0x13ca7d(0x554)]
            , 'tipoTrabalho': document['getElementById'](_0x13ca7d(0x36e))[_0x13ca7d(0x554)]
            , 'tipoData': document[_0x13ca7d(0x405)](_0x13ca7d(0x5e5))['value']
            , 'dataDesde': document[_0x13ca7d(0x405)](_0x13ca7d(0x4d5))[_0x13ca7d(0x554)]
            , 'dataAte': document[_0x13ca7d(0x405)](_0x13ca7d(0x124))['value']
            , 'status': Array[_0x13ca7d(0x409)](document['querySelectorAll']('.filtro-status-btn.selected'))['map'](_0x39b083 => _0x39b083['dataset'][_0x13ca7d(0x554)])
          };
        localStorage[_0x13ca7d(0x634)](_0x1bf94b, JSON[_0x13ca7d(0x1b4)](_0x584286));
      }

      function _0x3f56fe() {
        const _0x4c25b0 = _0x8d325e
          , _0x3ee22b = JSON[_0x4c25b0(0x18c)](localStorage[_0x4c25b0(0x1fb)](_0x1bf94b) || '{}');
        if (Object[_0x4c25b0(0x177)](_0x3ee22b)['length'] === 0x0) return;
        document[_0x4c25b0(0x405)]('filtro-ot')[_0x4c25b0(0x554)] = _0x3ee22b['ot'] || '', document[_0x4c25b0(0x405)](_0x4c25b0(0x56b))[_0x4c25b0(0x554)] = _0x3ee22b['equipamento'] || '', document[_0x4c25b0(0x405)](_0x4c25b0(0x60e))[_0x4c25b0(0x554)] = _0x3ee22b[_0x4c25b0(0x30c)] || '', document['getElementById'](_0x4c25b0(0x37d))[_0x4c25b0(0x554)] = _0x3ee22b[_0x4c25b0(0x11b)] || '', document[_0x4c25b0(0x405)](_0x4c25b0(0x36e))[_0x4c25b0(0x554)] = _0x3ee22b[_0x4c25b0(0x684)] || '', document[_0x4c25b0(0x405)](_0x4c25b0(0x5e5))['value'] = _0x3ee22b['tipoData'] || '', document[_0x4c25b0(0x405)](_0x4c25b0(0x4d5))['value'] = _0x3ee22b['dataDesde'] || '', document[_0x4c25b0(0x405)](_0x4c25b0(0x124))[_0x4c25b0(0x554)] = _0x3ee22b['dataAte'] || '', _0x3ee22b[_0x4c25b0(0x5a9)] && _0x3ee22b['status'][_0x4c25b0(0x570)] > 0x0 && document['querySelectorAll'](_0x4c25b0(0x57d))[_0x4c25b0(0x539)](_0x449c7b => {
          const _0x5ce06b = _0x4c25b0;
          _0x3ee22b[_0x5ce06b(0x5a9)]['includes'](_0x449c7b['dataset'][_0x5ce06b(0x554)]) && _0x449c7b[_0x5ce06b(0x190)]['add'](_0x5ce06b(0x323));
        });
      }

      function _0x393cb9() {
        const _0x17a85a = _0x8d325e;
        localStorage[_0x17a85a(0x125)](_0x1bf94b), document[_0x17a85a(0x405)]('filtro-ot')[_0x17a85a(0x554)] = '', document[_0x17a85a(0x405)]('filtro-equipamento')[_0x17a85a(0x554)] = '', document['getElementById'](_0x17a85a(0x60e))['value'] = '', document[_0x17a85a(0x405)](_0x17a85a(0x37d))[_0x17a85a(0x554)] = '', document['getElementById'](_0x17a85a(0x36e))[_0x17a85a(0x554)] = '', document[_0x17a85a(0x405)]('filtro-data-desde')['value'] = '', document[_0x17a85a(0x405)](_0x17a85a(0x124))[_0x17a85a(0x554)] = '', document[_0x17a85a(0x143)](_0x17a85a(0x50e))['forEach'](_0x498c1a => _0x498c1a[_0x17a85a(0x190)]['remove']('selected')), _0x2786ff('Filtros\x20limpos!', 'info');
      }

      function _0x3f64d7() {
        const _0x28aae2 = _0x8d325e;

        function _0x426fd1(_0x1074aa) {
          const _0x2eff0f = _0x3bcd
            , _0xd9385 = _0x1074aa['querySelector'](_0x2eff0f(0x34d));
          if (!_0xd9385) {
            const _0x4c3e8a = _0x1074aa[_0x2eff0f(0x667)](_0x2eff0f(0x651));
            return _0x4c3e8a && !_0x4c3e8a[_0x2eff0f(0x2d9)][_0x2eff0f(0x1c9)](_0x2eff0f(0x126)) && alert('A\x20busca\x20não\x20retornou\x20resultados.\x20Mensagem\x20do\x20sistema:\x20\x22' + _0x4c3e8a[_0x2eff0f(0x2d9)]['trim']() + '\x22'), [];
          }
          const _0x43f688 = _0xd9385[_0x2eff0f(0x143)]('tr')
            , _0x511794 = [];
          return _0x43f688['forEach'](_0x5adcca => {
            const _0x5e37eb = _0x2eff0f
              , _0x33b1ff = _0x5adcca[_0x5e37eb(0x143)]('td');
            if (_0x33b1ff[_0x5e37eb(0x570)] < 0xb) return;
            const _0x3c2ad3 = _0x5adcca[_0x5e37eb(0x1c1)](_0x5e37eb(0x424))
              , _0x3ef859 = _0x3c2ad3 ? _0x3c2ad3['match'](/mostrar_acciones_disponibles\(this, '(\d+)'/) : null
              , _0x2fc0db = _0x3ef859 ? _0x3ef859[0x1] : _0x5e37eb(0x347) + Math[_0x5e37eb(0x157)]();
            _0x511794[_0x5e37eb(0x2d4)]({
              'id': _0x2fc0db
              , 'numeroOT': _0x33b1ff[0x0][_0x5e37eb(0x2d9)][_0x5e37eb(0x247)]()
              , 'status': _0x33b1ff[0x1][_0x5e37eb(0x667)](_0x5e37eb(0x35e))?.[_0x5e37eb(0x242)] || _0x5e37eb(0x366)
              , 'tag': _0x33b1ff[0x2][_0x5e37eb(0x2d9)][_0x5e37eb(0x247)]()
              , 'equipamento': _0x33b1ff[0x3][_0x5e37eb(0x2d9)][_0x5e37eb(0x247)]()
              , 'descricao': _0x33b1ff[0x4][_0x5e37eb(0x2d9)][_0x5e37eb(0x247)]()
              , 'emissao': _0x33b1ff[0x5]['innerText'][_0x5e37eb(0x247)]()
              , 'solicitada': _0x33b1ff[0x6]['innerText']['trim']()
              , 'prog': _0x33b1ff[0x7]['innerText'][_0x5e37eb(0x247)]()
              , 'tipoTrabalho': _0x33b1ff[0x8][_0x5e37eb(0x2d9)][_0x5e37eb(0x247)]()
              , 'prioridade': _0x33b1ff[0x9][_0x5e37eb(0x2d9)][_0x5e37eb(0x247)]()
              , 'oficina': _0x33b1ff[0xa][_0x5e37eb(0x2d9)][_0x5e37eb(0x247)]()
            });
          }), _0x511794;
        }
        GM_addStyle(_0x28aae2(0x22d));
        const _0x1bb58a = '\x0a\x20\x20\x20\x20<div\x20id=\x22painel-custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22painel-custom-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>Dashboard\x20de\x20Ordens\x20<span\x20id=\x22contador-ordens\x22></span></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22busca-avancada\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>OT\x20Nº:</label><input\x20type=\x22text\x22\x20id=\x22filtro-ot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Equipamento:</label><input\x20type=\x22text\x22\x20id=\x22filtro-equipamento\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Descrição:</label><input\x20type=\x22text\x22\x20id=\x22filtro-descricao\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Oficina:</label><select\x20id=\x22filtro-oficina\x22></select></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Tipo\x20Trabalho:</label><select\x20id=\x22filtro-tipo-trabalho\x22></select></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Tipo\x20de\x20Data:</label><select\x20id=\x22filtro-tipo-data\x22></select></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Desde:</label><input\x20type=\x22date\x22\x20id=\x22filtro-data-desde\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22><label>Até:</label><input\x20type=\x22date\x22\x20id=\x22filtro-data-ate\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22filtro-actions-wrapper\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22filtro-grupo\x22\x20style=\x22flex-grow:1;\x22><label>Status:</label><div\x20id=\x22filtro-status-container\x22\x20class=\x22filtro-status-container\x22></div></div>\x0a\x20\x20\x20\x20<button\x20id=\x22botao-limpar-filtros\x22>Limpar\x20Filtros</button>\x0a\x20\x20\x20\x20<button\x20id=\x22botao-buscar\x22>Buscar</button>\x0a</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22painel-custom-conteudo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22loading-overlay\x22>Carregando...</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22grupos-container\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20BOTÃO\x20MOVIDO\x20PARA\x20CÁ\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-scroll-top\x22>▲</button>\x0a\x20\x20\x20\x20</div>\x0a';
        document[_0x28aae2(0x4c5)][_0x28aae2(0x4b4)]('beforeend', _0x1bb58a);
        const _0x447817 = document[_0x28aae2(0x4a9)](_0x28aae2(0x5e3));
        _0x447817['className'] = _0x28aae2(0x468), _0x447817['innerHTML'] = '🚀\x20Abrir\x20Dashboard', document['body']['appendChild'](_0x447817), _0x447817[_0x28aae2(0x5fc)](_0x28aae2(0x53d), () => {
          const _0x5e4cf6 = _0x28aae2;
          _0x447817[_0x5e4cf6(0x39e)]['transform'] = _0x5e4cf6(0x5d6), _0x447817['style'][_0x5e4cf6(0x5fd)] = 'brightness(110%)', _0x447817[_0x5e4cf6(0x39e)]['boxShadow'] = _0x5e4cf6(0x14a);
        }), _0x447817[_0x28aae2(0x5fc)](_0x28aae2(0x4df), () => {
          const _0x44a2e5 = _0x28aae2;
          _0x447817[_0x44a2e5(0x39e)][_0x44a2e5(0x102)] = _0x44a2e5(0x37b), _0x447817[_0x44a2e5(0x39e)]['filter'] = _0x44a2e5(0x161), _0x447817[_0x44a2e5(0x39e)][_0x44a2e5(0x568)] = _0x44a2e5(0x560);
        }), _0x447817[_0x28aae2(0x5fc)](_0x28aae2(0x109), () => {
          const _0x57455f = _0x28aae2;
          _0x447817[_0x57455f(0x39e)][_0x57455f(0x102)] = 'translateY(1px)', _0x447817[_0x57455f(0x39e)]['boxShadow'] = _0x57455f(0x24f);
        }), _0x447817[_0x28aae2(0x5fc)](_0x28aae2(0x2f1), () => {
          const _0x56e3c6 = _0x28aae2;
          _0x447817[_0x56e3c6(0x225)](_0x56e3c6(0x334)) && (_0x447817[_0x56e3c6(0x39e)][_0x56e3c6(0x102)] = 'translateY(-2px)', _0x447817['style']['boxShadow'] = _0x56e3c6(0x14a));
        });
        const _0x2e3e78 = document[_0x28aae2(0x405)]('painel-custom');
        _0x2e3e78['addEventListener'](_0x28aae2(0x636), function (_0x937382) {
          const _0x48f4d9 = _0x28aae2;
          _0x937382['key'] === 'Enter' && _0x937382[_0x48f4d9(0x354)][_0x48f4d9(0xff)] !== _0x48f4d9(0x24a) && (_0x937382[_0x48f4d9(0x69b)](), document[_0x48f4d9(0x405)](_0x48f4d9(0x5f5))[_0x48f4d9(0x338)]());
        });
        const _0xf64908 = document[_0x28aae2(0x4a9)]('div');
        _0xf64908[_0x28aae2(0x657)] = _0x28aae2(0x59b), _0xf64908['innerHTML'] = '👨‍💻\x20<em><a\x20href=\x22#\x22\x20target=\x22_blank\x22\x20style=\x22color:#1ab3a5;\x20text-decoration:\x20none;\x22>Desenvolvido\x20por\x20PCM</a></em>\x20&copy;\x20' + new Date()[_0x28aae2(0x5c7)](), _0x2e3e78['appendChild'](_0xf64908);
        const _0x523d8a = document[_0x28aae2(0x405)](_0x28aae2(0x54b))
          , _0x967029 = _0x2e3e78[_0x28aae2(0x667)]('.loading-overlay')
          , _0x522434 = document[_0x28aae2(0x405)](_0x28aae2(0x4b8));
        let _0x475abd = [];
        const _0x1780b6 = document[_0x28aae2(0x405)]('painel-custom-conteudo')
          , _0x4e31a1 = _0x2e3e78['querySelector'](_0x28aae2(0x1f6));
        _0x1780b6[_0x28aae2(0x5fc)]('scroll', () => {
          const _0x56ccb5 = _0x28aae2;
          _0x1780b6[_0x56ccb5(0x680)] > 0x12c ? _0x4e31a1[_0x56ccb5(0x39e)][_0x56ccb5(0x258)] = _0x56ccb5(0x4e5) : _0x4e31a1[_0x56ccb5(0x39e)][_0x56ccb5(0x258)] = _0x56ccb5(0x24f);
        }), _0x4e31a1['addEventListener'](_0x28aae2(0x338), () => {
          const _0x32fb8c = _0x28aae2;
          _0x1780b6[_0x32fb8c(0x17b)]({
            'top': 0x0
            , 'behavior': 'smooth'
          });
        });

        function _0x4d242a() {
          const _0x502556 = _0x28aae2
            , _0x5bd6fd = (_0x1e6966, _0x3ec9ba, _0x5f4d74) => {
              const _0x38c593 = _0x3bcd
                , _0x480f8a = document[_0x38c593(0x667)](_0x1e6966)
                , _0x3320db = document['getElementById'](_0x3ec9ba);
              if (_0x480f8a && _0x3320db) {
                _0x3320db[_0x38c593(0x417)] = _0x480f8a[_0x38c593(0x417)];
                if (_0x5f4d74) {
                  const _0xe470ce = document[_0x38c593(0x4a9)]('option');
                  _0xe470ce['value'] = '', _0xe470ce[_0x38c593(0x353)] = _0x5f4d74, _0x3320db[_0x38c593(0x484)](_0xe470ce, _0x3320db[_0x38c593(0x2b7)]), _0x3320db[_0x38c593(0x554)] = '';
                }
              }
            }
            , _0x1b22c2 = document[_0x502556(0x405)](_0x502556(0x128))
            , _0x13ef87 = document[_0x502556(0x667)](_0x502556(0x461));
          _0x13ef87 && Array[_0x502556(0x409)](_0x13ef87[_0x502556(0x119)])[_0x502556(0x539)](_0xa0818d => {
            const _0x8654b4 = _0x502556;
            if (_0xa0818d[_0x8654b4(0x554)]) {
              const _0x28c840 = document[_0x8654b4(0x4a9)](_0x8654b4(0x5e3));
              _0x28c840[_0x8654b4(0x657)] = _0x8654b4(0x5d0), _0x28c840[_0x8654b4(0x534)][_0x8654b4(0x554)] = _0xa0818d[_0x8654b4(0x554)], _0x28c840[_0x8654b4(0x534)][_0x8654b4(0x5a9)] = _0xa0818d[_0x8654b4(0x353)], _0x28c840['innerHTML'] = _0x8654b4(0x52a) + _0xa0818d[_0x8654b4(0x353)], _0x28c840[_0x8654b4(0x424)] = () => _0x28c840[_0x8654b4(0x190)]['toggle'](_0x8654b4(0x323)), _0x1b22c2[_0x8654b4(0x5a0)](_0x28c840);
            }
          }), _0x5bd6fd(_0x502556(0x50a), _0x502556(0x37d), 'Todas\x20Oficinas'), _0x5bd6fd('select[name=\x22trabajo_tipo_id\x22]', _0x502556(0x36e), _0x502556(0x56d)), _0x5bd6fd(_0x502556(0x147), _0x502556(0x5e5), '');
        }

        function _0x13e91c(_0x45a561, _0x3de05e) {
          const _0x6ff0f0 = _0x28aae2
            , _0x159cac = document['querySelector'](_0x6ff0f0(0x56a) + _0x45a561 + '\x22]');
          _0x159cac && (_0x159cac['disabled'] = !![], _0x159cac[_0x6ff0f0(0x6a2)] = _0x6ff0f0(0x6a0));
          try {
            const {
              jsPDF: _0x231a18
            } = window[_0x6ff0f0(0x4c9)], _0xd2d78 = new _0x231a18({
              'orientation': _0x6ff0f0(0x546)
            }), _0x462ac9 = _0x6ff0f0(0x49d), _0x181835 = () => {
              const _0x20c59c = _0x6ff0f0;
              _0xd2d78[_0x20c59c(0x265)](0xe), _0xd2d78[_0x20c59c(0x14d)](_0x20c59c(0x11a), _0x20c59c(0x39b)), _0xd2d78[_0x20c59c(0x353)](_0x20c59c(0x214), 0xe, 0xa), _0xd2d78[_0x20c59c(0x353)](_0x20c59c(0x233), _0xd2d78[_0x20c59c(0x618)][_0x20c59c(0x56c)]['width'] - 0xe, 0xa, {
                'align': _0x20c59c(0x1a1)
              }), _0xd2d78['setLineWidth'](0.5), _0xd2d78[_0x20c59c(0x1a3)](0xe, 0xf, _0xd2d78['internal']['pageSize'][_0x20c59c(0x649)] - 0x1c, 0xa), _0xd2d78[_0x20c59c(0x265)](0xc), _0xd2d78['text'](_0x20c59c(0x3f4), _0xd2d78[_0x20c59c(0x618)][_0x20c59c(0x56c)]['width'] / 0x2, 0x16, {
                'align': _0x20c59c(0x500)
              });
            }, _0x2d4909 = _0x1c1329 => {
              const _0x3f2e24 = _0x6ff0f0
                , _0x34f0d7 = _0x1c1329['pageNumber'];
              _0xd2d78[_0x3f2e24(0x265)](0x8);
              const _0x21d66b = new Date()[_0x3f2e24(0x645)](_0x3f2e24(0x309), {
                'day': _0x3f2e24(0x3a4)
                , 'month': '2-digit'
                , 'year': _0x3f2e24(0x566)
                , 'hour': _0x3f2e24(0x3a4)
                , 'minute': _0x3f2e24(0x3a4)
              });
              _0xd2d78[_0x3f2e24(0x353)](_0x21d66b, 0xe, _0xd2d78[_0x3f2e24(0x618)]['pageSize'][_0x3f2e24(0x1cc)] - 0xa), _0xd2d78[_0x3f2e24(0x353)]('Quantidade\x20de\x20registos:\x20' + _0x3de05e['length'], _0xd2d78['internal'][_0x3f2e24(0x56c)][_0x3f2e24(0x649)] / 0x2, _0xd2d78[_0x3f2e24(0x618)][_0x3f2e24(0x56c)][_0x3f2e24(0x1cc)] - 0xa, {
                'align': _0x3f2e24(0x500)
              });
              const _0x406207 = _0x3f2e24(0x11e) + _0x34f0d7 + _0x3f2e24(0x457) + _0x462ac9;
              _0xd2d78['text'](_0x406207, _0xd2d78[_0x3f2e24(0x618)][_0x3f2e24(0x56c)][_0x3f2e24(0x649)] - 0xe, _0xd2d78[_0x3f2e24(0x618)][_0x3f2e24(0x56c)]['height'] - 0xa, {
                'align': _0x3f2e24(0x1a1)
              });
            }, _0x39fdea = [
              [_0x6ff0f0(0x4da), 'Situação', 'Tag', _0x6ff0f0(0x3ee), _0x6ff0f0(0x58e), 'Emissão', _0x6ff0f0(0x541), _0x6ff0f0(0x26f), _0x6ff0f0(0x519), 'P.', _0x6ff0f0(0x104)]
            ], _0x1ce5bb = _0x3de05e[_0x6ff0f0(0x113)](_0x40f2e6 => [_0x40f2e6[_0x6ff0f0(0x42a)], _0x40f2e6[_0x6ff0f0(0x5a9)], _0x40f2e6[_0x6ff0f0(0x1ec)], _0x40f2e6['equipamento'], _0x40f2e6['descricao'], _0x40f2e6[_0x6ff0f0(0x134)], _0x40f2e6[_0x6ff0f0(0x41b)], _0x40f2e6[_0x6ff0f0(0x404)], _0x40f2e6[_0x6ff0f0(0x684)], _0x40f2e6[_0x6ff0f0(0x5d5)], _0x40f2e6['oficina']]);
            _0xd2d78[_0x6ff0f0(0x1a7)]({
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
                , 'overflow': _0x6ff0f0(0x352)
              }
              , 'headStyles': {
                'fillColor': [0x16, 0x16, 0x16]
                , 'textColor': [0xff, 0xff, 0xff]
                , 'fontStyle': _0x6ff0f0(0x39b)
              }
              , 'columnStyles': {
                0x0: {
                  'cellWidth': 0xc
                  , 'halign': _0x6ff0f0(0x500)
                }
                , 0x1: {
                  'cellWidth': 0xf
                  , 'halign': _0x6ff0f0(0x540)
                }
                , 0x2: {
                  'cellWidth': 0x14
                  , 'halign': _0x6ff0f0(0x540)
                }
                , 0x3: {
                  'cellWidth': 0x28
                  , 'halign': _0x6ff0f0(0x540)
                }
                , 0x4: {
                  'cellWidth': 0x41
                  , 'halign': 'left'
                }
                , 0x5: {
                  'cellWidth': 0xf
                  , 'halign': _0x6ff0f0(0x500)
                }
                , 0x6: {
                  'cellWidth': 0xf
                  , 'halign': _0x6ff0f0(0x500)
                }
                , 0x7: {
                  'cellWidth': 0xf
                  , 'halign': _0x6ff0f0(0x500)
                }
                , 0x8: {
                  'cellWidth': 0x19
                  , 'halign': _0x6ff0f0(0x540)
                }
                , 0x9: {
                  'cellWidth': 0x5
                  , 'halign': 'center'
                }
                , 0xa: {
                  'cellWidth': _0x6ff0f0(0x188)
                  , 'halign': _0x6ff0f0(0x540)
                }
              }
            });
            typeof _0xd2d78[_0x6ff0f0(0x2e9)] === 'function' && _0xd2d78[_0x6ff0f0(0x2e9)](_0x462ac9);
            const _0x3b8cf6 = _0x6ff0f0(0xf4) + _0x45a561[_0x6ff0f0(0x2ee)](/[^a-z0-9]/gi, '_') + _0x6ff0f0(0x59f);
            _0xd2d78['save'](_0x3b8cf6);
          } catch (_0x3e4e36) {
            console['error'](_0x6ff0f0(0x46b), _0x3e4e36), alert(_0x6ff0f0(0x3b0));
          } finally {
            _0x159cac && (_0x159cac[_0x6ff0f0(0x4e8)] = ![], _0x159cac['textContent'] = _0x6ff0f0(0x251));
          }
        }

        function _0x1e1dc3(_0x26fa1) {
          const _0xb6f84c = _0x28aae2
            , _0xd1e406 = {
              'Ativa': '#007bff'
              , 'Aberta': _0xb6f84c(0x61f)
              , 'Cerrada': _0xb6f84c(0x155)
              , 'Cancelada': _0xb6f84c(0x1bc)
              , 'Terminada': '#6c757d'
            }
            , _0x26a526 = Object['values'](_0x26fa1)['reduce']((_0x444b8f, _0x2008ad) => _0x444b8f + _0x2008ad, 0x0);
          if (_0x26a526 === 0x0) return '';
          let _0x2383c7 = _0xb6f84c(0x14f);
          for (const [_0x4664f7, _0x437f77] of Object[_0xb6f84c(0x3cb)](_0x26fa1)) {
            const _0x7346d6 = (_0x437f77 / _0x26a526 * 0x64)[_0xb6f84c(0x18e)](0x1)
              , _0x519087 = _0xd1e406[_0x4664f7] || _0xb6f84c(0x3ce);
            _0x2383c7 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chart-bar-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chart-label\x22>' + _0x4664f7 + _0xb6f84c(0x561) + _0x7346d6 + _0xb6f84c(0x4c0) + _0x519087 + ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x437f77 + '\x20(' + _0x7346d6 + _0xb6f84c(0x168);
          }
          return _0x2383c7 += _0xb6f84c(0x154), _0x2383c7;
        }

        function _0x2aecad(_0x4c8409) {
          const _0x2236ba = _0x28aae2;
          _0x523d8a['innerHTML'] = '', _0x522434[_0x2236ba(0x6a2)] = '(' + _0x4c8409['length'] + _0x2236ba(0xf3);
          if (_0x4c8409[_0x2236ba(0x570)] === 0x0) {
            _0x523d8a[_0x2236ba(0x417)] = '<p\x20style=\x22text-align:center;\x20color:#888;\x20padding:\x2020px;\x22>Nenhuma\x20ordem\x20encontrada\x20para\x20os\x20filtros\x20selecionados.</p>';
            return;
          }
          const _0x123001 = _0x4c8409[_0x2236ba(0x195)]((_0x1a9ad5, _0x4dc781) => {
            const _0x4f5669 = _0x2236ba;
            return _0x1a9ad5[_0x4dc781[_0x4f5669(0x5a9)]] = (_0x1a9ad5[_0x4dc781[_0x4f5669(0x5a9)]] || 0x0) + 0x1, _0x1a9ad5;
          }, {});
          let _0x2409e3 = _0x2236ba(0x57e);
          for (const [_0x2cf0e2, _0x42eb8d] of Object[_0x2236ba(0x3cb)](_0x123001)) {
            _0x2409e3 += '<div\x20class=\x22summary-item\x22><b>' + _0x2cf0e2 + _0x2236ba(0x4ff) + _0x42eb8d + _0x2236ba(0x154);
          }
          _0x2409e3 += '</div>', _0x523d8a['innerHTML'] = _0x2409e3;
          const _0x3c6604 = _0x4c8409[_0x2236ba(0x195)]((_0x5b8746, _0x431adb) => {
              const _0x349ff0 = _0x2236ba
                , _0x1bc6f1 = _0x431adb[_0x349ff0(0x3be)] || _0x349ff0(0x473);
              if (!_0x5b8746[_0x1bc6f1]) _0x5b8746[_0x1bc6f1] = [];
              return _0x5b8746[_0x1bc6f1][_0x349ff0(0x2d4)](_0x431adb), _0x5b8746;
            }, {})
            , _0x1f8cf3 = Object[_0x2236ba(0x3cb)](_0x3c6604)['sort']((_0x451193, _0x5a4c37) => _0x5a4c37[0x1]['length'] - _0x451193[0x1][_0x2236ba(0x570)]);
          for (const [_0x163303, _0x4a3b9e] of _0x1f8cf3) {
            const _0x251528 = 'grupo-' + _0x163303[_0x2236ba(0x2ee)](/[^a-zA-Z0-9]/g, '')
              , _0x3a4bb3 = _0x4a3b9e['reduce']((_0x364275, _0x17965e) => {
                const _0x27c343 = _0x2236ba;
                return _0x364275[_0x17965e[_0x27c343(0x5a9)]] = (_0x364275[_0x17965e['status']] || 0x0) + 0x1, _0x364275;
              }, {})
              , _0x153d9c = _0x1e1dc3(_0x3a4bb3)
              , _0x361840 = _0x2236ba(0x29c) + _0x251528 + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-titulo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toggle-icon\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + _0x163303 + _0x2236ba(0x67f) + _0x163303 + _0x2236ba(0x60a) + _0x4a3b9e[_0x2236ba(0x570)] + _0x2236ba(0x3a6) + _0x251528 + _0x2236ba(0x630) + _0x153d9c + _0x2236ba(0x697) + _0x4a3b9e[_0x2236ba(0x113)](_0x122320 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x122320['numeroOT'] + _0x2236ba(0x182) + _0x122320[_0x2236ba(0x5a9)] + _0x2236ba(0x182) + _0x122320[_0x2236ba(0x1ec)] + _0x2236ba(0x182) + _0x122320[_0x2236ba(0x30c)] + _0x2236ba(0x182) + _0x122320[_0x2236ba(0x11b)] + _0x2236ba(0x182) + _0x122320[_0x2236ba(0x134)] + _0x2236ba(0x35f))[_0x2236ba(0x42f)]('') + _0x2236ba(0x376);
            _0x523d8a[_0x2236ba(0x4b4)](_0x2236ba(0x30a), _0x361840);
          }
          document[_0x2236ba(0x143)](_0x2236ba(0x122))['forEach'](_0x3a7892 => {
            const _0x5a2064 = _0x2236ba;
            _0x3a7892[_0x5a2064(0x5fc)]('click', _0x1b0b19 => {
              const _0x20e0e2 = _0x5a2064;
              if (_0x1b0b19[_0x20e0e2(0x354)][_0x20e0e2(0x3e0)]('.btn-pdf-grupo')) return;
              const _0x22199c = _0x3a7892[_0x20e0e2(0x534)][_0x20e0e2(0x354)]
                , _0x44552f = document[_0x20e0e2(0x405)](_0x22199c);
              _0x44552f[_0x20e0e2(0x39e)][_0x20e0e2(0x258)] === _0x20e0e2(0x2f7) ? (_0x44552f[_0x20e0e2(0x39e)][_0x20e0e2(0x258)] = _0x20e0e2(0x24f), _0x3a7892['classList']['remove'](_0x20e0e2(0x30f))) : (_0x44552f[_0x20e0e2(0x39e)]['display'] = _0x20e0e2(0x2f7), _0x3a7892[_0x20e0e2(0x190)]['add'](_0x20e0e2(0x30f)));
            });
          }), document[_0x2236ba(0x143)](_0x2236ba(0x1a9))[_0x2236ba(0x539)](_0x3377a2 => {
            const _0x29c971 = _0x2236ba;
            _0x3377a2[_0x29c971(0x5fc)](_0x29c971(0x338), _0x145e11 => {
              const _0x5a2d2a = _0x29c971;
              _0x145e11[_0x5a2d2a(0x1b3)]();
              const _0x707b6c = _0x145e11[_0x5a2d2a(0x64e)][_0x5a2d2a(0x534)][_0x5a2d2a(0x532)]
                , _0x50db5f = _0x1f8cf3[_0x5a2d2a(0x2d8)](([_0x5ac8b8]) => _0x5ac8b8 === _0x707b6c);
              if (_0x50db5f) {
                const _0xd8df6f = _0x50db5f[0x1];
                _0x13e91c(_0x707b6c, _0xd8df6f);
              }
            });
          });
        }

        function _0x484fd9() {
          const _0x4dda18 = _0x28aae2;
          _0x967029[_0x4dda18(0x39e)][_0x4dda18(0x258)] = _0x4dda18(0x4e5);
          const _0x286ccf = window[_0x4dda18(0x298)][_0x4dda18(0x467)][_0x4dda18(0x3b6)](/SESID=([a-zA-Z0-9]+)/);
          if (!_0x286ccf) {
            alert(_0x4dda18(0x26d)), _0x967029[_0x4dda18(0x39e)]['display'] = _0x4dda18(0x24f);
            return;
          }
          const _0x22d0bd = _0x286ccf[0x1]
            , _0x501cbb = '/albatros/admin.php?SESID=' + _0x22d0bd + '&n1=200&n2=202&in=30&seccion=titan_trabajos_ordenes&op=c'
            , _0x5dc2b0 = Array[_0x4dda18(0x409)](document['querySelectorAll'](_0x4dda18(0x50e)))[_0x4dda18(0x113)](_0x259dd3 => _0x259dd3[_0x4dda18(0x534)][_0x4dda18(0x554)])
            , _0x5ed684 = _0x5dc2b0[_0x4dda18(0x570)] > 0x0 ? _0x5dc2b0 : ['']
            , _0x3af9a6 = _0x5ed684[_0x4dda18(0x113)](_0x474634 => {
              return new Promise((_0x43401f, _0x13ec43) => {
                const _0x3d3f97 = _0x3bcd
                  , _0xbf8725 = new URLSearchParams();
                _0xbf8725[_0x3d3f97(0x2d3)](_0x3d3f97(0x617), document[_0x3d3f97(0x405)](_0x3d3f97(0x638))[_0x3d3f97(0x554)]), _0xbf8725[_0x3d3f97(0x2d3)](_0x3d3f97(0x432), document[_0x3d3f97(0x405)](_0x3d3f97(0x56b))[_0x3d3f97(0x554)]), _0xbf8725[_0x3d3f97(0x2d3)](_0x3d3f97(0x3d3), _0x474634), _0xbf8725[_0x3d3f97(0x2d3)]('taller_id', document['getElementById'](_0x3d3f97(0x37d))[_0x3d3f97(0x554)]), _0xbf8725[_0x3d3f97(0x2d3)](_0x3d3f97(0x4ac), document[_0x3d3f97(0x405)](_0x3d3f97(0x36e))[_0x3d3f97(0x554)]);
                const _0x570b0e = document[_0x3d3f97(0x405)](_0x3d3f97(0x4d5))[_0x3d3f97(0x554)]
                  , _0x295ff2 = document['getElementById'](_0x3d3f97(0x124))[_0x3d3f97(0x554)];
                if (_0x570b0e) _0xbf8725[_0x3d3f97(0x2d3)](_0x3d3f97(0x3f6), _0x570b0e[_0x3d3f97(0x3f0)]('-')[_0x3d3f97(0x66f)]()[_0x3d3f97(0x42f)]('/'));
                if (_0x295ff2) _0xbf8725[_0x3d3f97(0x2d3)](_0x3d3f97(0x229), _0x295ff2[_0x3d3f97(0x3f0)]('-')[_0x3d3f97(0x66f)]()['join']('/'));
                _0xbf8725[_0x3d3f97(0x2d3)](_0x3d3f97(0x530), document[_0x3d3f97(0x405)](_0x3d3f97(0x5e5))[_0x3d3f97(0x554)]), _0xbf8725['append']('bAceptar', 'Aplicar\x20filtro'), GM_xmlhttpRequest({
                  'method': 'POST'
                  , 'url': _0x501cbb
                  , 'data': _0xbf8725[_0x3d3f97(0x3ef)]()
                  , 'headers': {
                    'Content-Type': _0x3d3f97(0x433)
                  }
                  , 'overrideMimeType': _0x3d3f97(0x192)
                  , 'onload': _0xb7a190 => {
                    const _0x409bd3 = _0x3d3f97
                      , _0x3c7952 = new DOMParser()
                      , _0x34d8bb = _0x3c7952['parseFromString'](_0xb7a190[_0x409bd3(0x141)], _0x409bd3(0x2aa));
                    _0x43401f(_0x426fd1(_0x34d8bb));
                  }
                  , 'onerror': _0x16b488 => _0x13ec43(_0x16b488)
                });
              });
            });
          Promise[_0x4dda18(0x152)](_0x3af9a6)[_0x4dda18(0x1ca)](_0xe2c67e => {
            const _0x45cfc1 = _0x4dda18
              , _0x1ac744 = new Map();
            _0xe2c67e[_0x45cfc1(0x262)]()[_0x45cfc1(0x539)](_0x5342a7 => _0x1ac744[_0x45cfc1(0x186)](_0x5342a7['id'], _0x5342a7));
            let _0x36cbf9 = Array[_0x45cfc1(0x409)](_0x1ac744[_0x45cfc1(0x61c)]());
            const _0x232c14 = document[_0x45cfc1(0x405)](_0x45cfc1(0x60e))[_0x45cfc1(0x554)];
            if (_0x232c14[_0x45cfc1(0x247)]()) {
              const _0x4bad93 = _0x232c14[_0x45cfc1(0x3f0)]('*')[_0x45cfc1(0x113)](_0x4b881c => _0x347847(_0x4b881c['trim']()))['filter'](_0x4a0331 => _0x4a0331);
              _0x4bad93['length'] > 0x0 && (_0x36cbf9 = _0x36cbf9['filter'](_0x10c6e7 => {
                const _0x1a38ac = _0x45cfc1
                  , _0x1a5612 = _0x347847(_0x10c6e7[_0x1a38ac(0x30c)]);
                return _0x4bad93['every'](_0x1ca552 => _0x1a5612[_0x1a38ac(0x1c9)](_0x1ca552));
              }));
            }
            _0x475abd = _0x36cbf9, _0x2aecad(_0x475abd);
          })[_0x4dda18(0x292)](_0x2b8298 => {
            const _0x1affa8 = _0x4dda18;
            console[_0x1affa8(0x5fb)](_0x1affa8(0x569), _0x2b8298), alert(_0x1affa8(0x45a));
          })[_0x4dda18(0x1f0)](() => {
            const _0x41206c = _0x4dda18;
            _0x967029[_0x41206c(0x39e)][_0x41206c(0x258)] = _0x41206c(0x24f);
          });
        }
        document[_0x28aae2(0x405)]('botao-buscar')[_0x28aae2(0x5fc)](_0x28aae2(0x338), _0x484fd9);
        const _0x443fda = () => {
          const _0x264fb1 = _0x28aae2
            , _0x5ebb4e = _0x2e3e78[_0x264fb1(0x39e)][_0x264fb1(0x258)] === 'flex';
          _0x5ebb4e ? (_0x2e3e78['style'][_0x264fb1(0x258)] = _0x264fb1(0x24f), _0x447817[_0x264fb1(0x417)] = _0x264fb1(0x123)) : (_0x475abd[_0x264fb1(0x570)] === 0x0 && (_0x475abd = _0x426fd1(document), _0x2aecad(_0x475abd)), _0x2e3e78['style'][_0x264fb1(0x258)] = _0x264fb1(0x4e5), _0x447817[_0x264fb1(0x417)] = _0x264fb1(0x690));
        };
        _0x447817['addEventListener'](_0x28aae2(0x338), _0x443fda), _0x4d242a(), _0x3f56fe();
        const _0x5ad607 = [_0x28aae2(0x638), _0x28aae2(0x56b), _0x28aae2(0x60e), 'filtro-oficina', _0x28aae2(0x36e), _0x28aae2(0x5e5), _0x28aae2(0x4d5), _0x28aae2(0x124)];
        _0x5ad607[_0x28aae2(0x539)](_0x362d4b => {
          const _0x898532 = _0x28aae2;
          document[_0x898532(0x405)](_0x362d4b)[_0x898532(0x5fc)](_0x898532(0x3d9), _0x1bee9c);
        }), document[_0x28aae2(0x143)](_0x28aae2(0x57d))[_0x28aae2(0x539)](_0x17e5d8 => {
          const _0xdf2fd4 = _0x28aae2;
          _0x17e5d8[_0xdf2fd4(0x5fc)](_0xdf2fd4(0x338), _0x1bee9c);
        }), document['getElementById'](_0x28aae2(0x28b))[_0x28aae2(0x5fc)](_0x28aae2(0x338), _0x393cb9);
      }
      _0x3f64d7();
    }

    function _0x365d4e() {
      const _0x251dd2 = _0x1f2edc
        , _0x44f027 = new MutationObserver(_0x48b0e7 => {
          const _0x50d05e = _0x3bcd;
          for (const _0x5ebf31 of _0x48b0e7) {
            if (_0x5ebf31[_0x50d05e(0x312)] === _0x50d05e(0x5f2)) {
              const _0x92161d = document[_0x50d05e(0x405)]('iframe_popup');
              _0x92161d && (_0x92161d[_0x50d05e(0x357)] = () => {
                const _0x3d9ed0 = _0x50d05e;
                try {
                  const _0x283e25 = _0x92161d[_0x3d9ed0(0x306)];
                  if (!_0x283e25) return;
                  const _0x3a7a15 = _0x283e25[_0x3d9ed0(0x667)](_0x3d9ed0(0x301));
                  if (_0x3a7a15) {
                    const _0x386bf8 = parseInt(_0x3a7a15[_0x3d9ed0(0x6a2)][_0x3d9ed0(0x247)](), 0xa);
                    if (_0x386bf8 > 0xc350) {
                      const _0x311e0b = 'https://tocica.otamerica.net/editar_reporte/' + _0x386bf8;
                      _0x3a7a15['href'] = _0x311e0b, _0x3a7a15[_0x3d9ed0(0x354)] = _0x3d9ed0(0x140), _0x3a7a15[_0x3d9ed0(0x4d6)](_0x3d9ed0(0x424)), _0x3a7a15[_0x3d9ed0(0x39e)][_0x3d9ed0(0x16c)] = '#007bff', _0x3a7a15[_0x3d9ed0(0x39e)][_0x3d9ed0(0x181)] = _0x3d9ed0(0x257), _0x3a7a15['title'] = 'Link\x20modificado\x20pelo\x20TitanSystem\x20para:\x20' + _0x311e0b, console[_0x3d9ed0(0x5ce)](_0x3d9ed0(0x2bb) + _0x386bf8 + _0x3d9ed0(0x501));
                    }
                  }
                } catch (_0x401a07) {
                  console[_0x3d9ed0(0x5fb)]('[TitanSystem]\x20Erro\x20ao\x20tentar\x20modificar\x20o\x20link\x20do\x20TOCICA:', _0x401a07);
                }
              });
            }
          }
        });
      _0x44f027['observe'](document[_0x251dd2(0x4c5)], {
        'childList': !![]
        , 'subtree': !![]
      });
    }

    function _0x564a29(_0x523641, _0x3108c5) {
      const _0x393586 = _0x1f2edc;
      GM_addStyle(_0x393586(0x4a7));
      const _0x59d667 = GM_info[_0x393586(0x5ed)][_0x393586(0x325)]
        , _0x211edb = document[_0x393586(0x4a9)]('div');
      _0x211edb['className'] = 'titanflow-update-overlay', _0x211edb[_0x393586(0x417)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22titanflow-update-popup\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22popup-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2240\x22\x20height=\x2240\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M21.44\x2011.05l-9.19\x209.19a6\x206\x200\x200\x201-8.49-8.49l9.19-9.19a4\x204\x200\x200\x201\x205.66\x205.66l-9.2\x209.19a2\x202\x200\x200\x201-2.83-2.83l8.49-8.48\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Atualização\x20Disponível!</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22popup-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Uma\x20nova\x20versão\x20do\x20TitanSystem\x20está\x20pronta\x20para\x20ser\x20instalada.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22version-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Sua\x20versão:\x20<b>' + _0x59d667 + _0x393586(0x6a1) + _0x523641 + _0x393586(0x4d7) + _0x3108c5 + _0x393586(0x18a), document[_0x393586(0x4c5)][_0x393586(0x5a0)](_0x211edb);
      const _0x3e0e96 = () => document[_0x393586(0x4c5)][_0x393586(0xfd)](_0x211edb) && document[_0x393586(0x4c5)][_0x393586(0x1d5)](_0x211edb);
      _0x211edb[_0x393586(0x667)](_0x393586(0x502))['onclick'] = _0x3e0e96, _0x211edb[_0x393586(0x5fc)](_0x393586(0x338), _0x1b5f58 => {
        const _0x2f7da3 = _0x393586;
        _0x1b5f58[_0x2f7da3(0x354)] === _0x211edb && _0x3e0e96();
      });
    }

    function _0x2fd0e7() {
      const _0x52bd2e = _0x1f2edc;
      console['log']('[TitanSystem\x20Update]\x20Iniciando\x20verificação\x20de\x20atualização...');
      const _0x2349e9 = (_0x4ceaee, _0x1c4d74) => {
        const _0x265598 = _0x3bcd
          , _0x14a69b = _0x4ceaee[_0x265598(0x3f0)]('.')['map'](Number)
          , _0x1b86c1 = _0x1c4d74[_0x265598(0x3f0)]('.')[_0x265598(0x113)](Number)
          , _0x3a7b51 = Math[_0x265598(0x356)](_0x14a69b['length'], _0x1b86c1[_0x265598(0x570)]);
        for (let _0x41b0b2 = 0x0; _0x41b0b2 < _0x3a7b51; _0x41b0b2++) {
          const _0x198e3f = _0x14a69b[_0x41b0b2] || 0x0
            , _0x4f7659 = _0x1b86c1[_0x41b0b2] || 0x0;
          if (_0x198e3f > _0x4f7659) return 0x1;
          if (_0x198e3f < _0x4f7659) return -0x1;
        }
        return 0x0;
      };
      try {
        const _0xe31050 = GM_info[_0x52bd2e(0x5ed)][_0x52bd2e(0x325)]
          , _0x5adce3 = GM_info[_0x52bd2e(0x5ed)]['updateURL']
          , _0x373f72 = GM_info['script']['downloadURL'];
        if (!_0x5adce3) {
          console[_0x52bd2e(0x5fb)](_0x52bd2e(0x20f));
          return;
        }
        console['log'](_0x52bd2e(0x220) + _0xe31050 + _0x52bd2e(0x1c4) + _0x5adce3), GM_xmlhttpRequest({
          'method': _0x52bd2e(0x10d)
          , 'url': _0x5adce3
          , 'onload': function (_0x22b262) {
            const _0x459a17 = _0x52bd2e;
            console[_0x459a17(0x5ce)](_0x459a17(0x4e3));
            if (_0x22b262['status'] >= 0xc8 && _0x22b262[_0x459a17(0x5a9)] < 0x12c) {
              const _0x19dff6 = _0x22b262[_0x459a17(0x141)][_0x459a17(0x3b6)](/@version\s+([\d.]+)/);
              if (_0x19dff6 && _0x19dff6[0x1]) {
                const _0x33cc73 = _0x19dff6[0x1];
                console[_0x459a17(0x5ce)](_0x459a17(0x13b) + _0x33cc73), _0x2349e9(_0x33cc73, _0xe31050) > 0x0 ? (console[_0x459a17(0x5ce)](_0x459a17(0x521)), _0x564a29(_0x33cc73, _0x373f72)) : console[_0x459a17(0x5ce)](_0x459a17(0x2cb));
              } else console[_0x459a17(0x5fb)](_0x459a17(0x12e));
            } else console[_0x459a17(0x5fb)](_0x459a17(0x1f1) + _0x22b262[_0x459a17(0x5a9)]);
          }
          , 'onerror': function (_0x24639f) {
            console['error']('[TitanSystem\x20Update]\x20Erro\x20de\x20rede\x20ao\x20tentar\x20verificar\x20atualização.\x20Verifique\x20a\x20permissão\x20@connect\x20para\x20raw.githubusercontent.com.', _0x24639f);
          }
        });
      } catch (_0x2ea704) {
        console[_0x52bd2e(0x5fb)](_0x52bd2e(0x598), _0x2ea704);
      }
    }

    function _0x595ad3() {
      const _0x4d2828 = _0x1f2edc;
      GM_addStyle(_0x4d2828(0x2e5));
      const _0x161077 = _0x4d2828(0x602);
      document[_0x4d2828(0x4c5)][_0x4d2828(0x4b4)](_0x4d2828(0x30a), _0x161077);
      const _0x31ec52 = document[_0x4d2828(0x667)](_0x4d2828(0x66b))
        , _0x542b68 = () => document['body'][_0x4d2828(0xfd)](_0x31ec52) && document[_0x4d2828(0x4c5)]['removeChild'](_0x31ec52);
      document[_0x4d2828(0x405)](_0x4d2828(0x1c5))[_0x4d2828(0x424)] = _0x542b68, document[_0x4d2828(0x405)](_0x4d2828(0x302))[_0x4d2828(0x424)] = () => {
        const _0x160e75 = _0x4d2828
          , _0x33694a = document['getElementById']('textarea-os-marine')[_0x160e75(0x554)];
        _0x542b68(), _0x2a8a19(_0x33694a);
      }, _0x31ec52['addEventListener']('click', _0x4b8e65 => {
        const _0x2f5a3e = _0x4d2828;
        if (_0x4b8e65[_0x2f5a3e(0x354)] === _0x31ec52) _0x542b68();
      });
    }
    async function _0x2a8a19(_0x11e030) {
      const _0x55b0fd = _0x1f2edc;
      if (!_0x11e030['trim']()) {
        _0x2786ff(_0x55b0fd(0x47c), _0x55b0fd(0x65a));
        return;
      }
      let _0x3fb358;
      try {
        _0x3fb358 = JSON[_0x55b0fd(0x18c)](_0x11e030);
        if (!Array[_0x55b0fd(0x5b3)](_0x3fb358)) throw new Error(_0x55b0fd(0x35c));
      } catch (_0x2daf78) {
        _0x2786ff(_0x55b0fd(0x576) + _0x2daf78[_0x55b0fd(0x1c0)], 'error', 0x1770);
        return;
      }
      _0x2786ff('Validando\x20script\x20e\x20equipamentos...', _0x55b0fd(0x503));
      if (_0x34e176['length'] === 0x0) try {
        await _0x3a1f53();
      } catch (_0x443286) {
        _0x2786ff('Falha\x20ao\x20carregar\x20a\x20lista\x20de\x20equipamentos\x20para\x20validação.', _0x55b0fd(0x5fb));
        return;
      }
      const _0x24c330 = []
        , _0x4736b1 = [];
      for (const [_0x26a61e, _0xa8c722] of _0x3fb358[_0x55b0fd(0x3cb)]()) {
        const _0x57d21b = _0x360915(_0xa8c722['equipamento'])
          , _0x7f3027 = _0x34e176[_0x55b0fd(0x2d8)](_0x4750f2 => _0x360915(_0x4750f2[_0x55b0fd(0x4e9)]) === _0x57d21b || _0x360915(_0x4750f2[_0x55b0fd(0x1ec)]) === _0x57d21b);
        if (!_0x7f3027) {
          _0x4736b1[_0x55b0fd(0x2d4)](_0x55b0fd(0x671) + (_0x26a61e + 0x1) + _0x55b0fd(0x337) + _0xa8c722[_0x55b0fd(0x3be)] + '\x22');
          continue;
        }
        _0x24c330[_0x55b0fd(0x2d4)]({
          'equipamentoId': _0x7f3027['id']
          , 'descricao': (_0xa8c722[_0x55b0fd(0x30c)] + '\x20' + (_0xa8c722[_0x55b0fd(0x4cb)] || ''))[_0x55b0fd(0x247)]()
          , 'tallerId': _0xa8c722[_0x55b0fd(0x5e1)]
          , 'tipoTrabalhoId': _0xa8c722[_0x55b0fd(0x684)]
          , 'dataRequerida': new Date()[_0x55b0fd(0x1ed)]()[_0x55b0fd(0x3f0)]('T')[0x0][_0x55b0fd(0x3f0)]('-')[_0x55b0fd(0x66f)]()[_0x55b0fd(0x42f)]('/')
        });
      }
      if (_0x4736b1['length'] > 0x0) {
        alert(_0x55b0fd(0x462) + _0x4736b1['join']('\x0a')), _0x2786ff(_0x4736b1[_0x55b0fd(0x570)] + '\x20erros\x20encontrados.\x20Nenhuma\x20ordem\x20foi\x20criada.', _0x55b0fd(0x5fb));
        return;
      }
      if (_0x24c330['length'] === 0x0) {
        _0x2786ff(_0x55b0fd(0x2b2), _0x55b0fd(0x65a));
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
          _0x204dcf++, console['error'](_0x55b0fd(0x44d) + _0x53baeb[_0x55b0fd(0x1db)] + ':', _0x236d77);
        }
        _0x1241ed(_0x55b0fd(0x250) + _0x2021e1 + _0x55b0fd(0x457) + _0x23dc82 + _0x55b0fd(0x196) + Math['round'](_0x2021e1 / _0x23dc82 * 0x64) + '%)');
      }
      _0x5b5dcd = ![];
      const _0x29a9c5 = _0x55b0fd(0x65c) + _0x2021e1 + '\x20pedidos\x20criados.\x20' + _0x204dcf + '\x20falharam.';
      _0x1241ed(_0x29a9c5, 0x1388), _0x204dcf === 0x0 && _0x23dc82 > 0x0 && setTimeout(() => location['reload'](), 0x5dc);
    }
    _0x493e8f();
  }
}()));
