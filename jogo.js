var rodada = 1;
var matriz_jogo = array(3);

matriz_jogo['a'] = array(3);
matriz_jogo['b'] = array(3);
matriz_jogo['c'] = array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function(){

	$('#btn_iniciar_jogo').click(function(){

		// valida a digitação dos apelidos dos jogadores
		if ($('#entrada_apelido_jogador_1').val()==''){
			alert('Apelido do Jogador 1 não foi preenchido');
			return false;
		}

		if ($('#entrada_apelido_jogador_2').val()==''){
			alert('Apelido do Jogador 2 não foi preenchido');
			return false;
		}

		// exibir os apelidos
		$('#nome_jogador_1').html($('#entrada_apelido_jogador_1').val());
		$('#nome_jogador_2').html($('#entrada_apelido_jogador_2').val());


		//controla a visualização das divs
		$('#pagina_inicial').hide();
		$('#palco_jogo').show();

	});

	$('.jogada').click(function(){

		var id_campo_clicado = this.id;
		jogada(id_campo_clicado);

	});

	function jogada(id){
		var icone = '';
		var ponto = 0;

		if((rodada % 2)== 1){
			icone = 'url("imagens/marcacao_1.png")';
			ponto = -1;
		} else{
			icone = 'url("imagens/marcacao_2.png")';
			ponto = 1;
		}
		
		rodada++;

		$('#'+id).css('background-image',icone);

		var linha_coluna = id.split('-'); //função do javascript que trunca uma cadeio de caracter, tornando-o a informação em um array
	
		matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

	}

});
