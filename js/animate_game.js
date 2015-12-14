jQuery(function($){
	
	//on ajoute la classe overlay et tooltip à map
	$('.map').append('<div class="overlay">').append('<div class="tooltip"></div>');
	
	//on masque le tooltip au demarrage
	$('.map .tooltip').hide();

	var count = 10;
	var counter = setInterval(timer, 1000);
	var score = 0;

	function timer(){
		count -= 1;
		if (count == 0){
			clearInterval(counter);
			$(".question2").html("<h2>Temps Ecoulé</h2>");
		}

		document.getElementById('count').innerHTML = count;
		document.getElementById('score').innerHTML = score;

	}
      
	//liste des régions
	var regions =[
		{name: 'Nord Pas de Calais', result:1},
		{name: 'Picardie', result:2},
		{name: 'Haute Normandie', result:3},
		{name: 'Champagne Ardenne', result:4},
		{name: 'Basse Normandie', result:5},
		{name: 'Lorraine', result:6},
		{name: 'Alsace', result:7},
		{name: 'Bretagne', result:8},
		{name: 'Pays de la Loire', result:9},
		{name: 'Centre', result:10},
		{name: 'Bourgogne', result:11},
		{name: 'Franche-Comte', result:12},
		{name: 'Rhone-Alpes',result:13},
		{name: 'Auvergne', result:14},
		{name: 'Limousin', result:15},
		{name: 'Poitou Charente', result:16},
		{name: 'Aquitaine',result:17},
		{name: 'Midi Pyrenees',result:18},
		{name: 'Languedoc Roussillon',result:19},
		{name: 'Paca',result:20},
		{name: 'Corse', result:21},
		{name: 'Ile de France', result:22},
	]

	var questions =[
		{name: 'Nord Pas de Calais', result:1},
		{name: 'Picardie', result:2},
		{name: 'Haute Normandie', result:3},
		{name: 'Champagne Ardenne', result:4},
		{name: 'Basse Normandie', result:5},
		{name: 'Lorraine', result:6},
		{name: 'Alsace', result:7},
		{name: 'Bretagne', result:8},
		{name: 'Pays de la Loire', result:9},
		{name: 'Centre', result:10},
		{name: 'Bourgogne', result:11},
		{name: 'Franche-Comte', result:12},
		{name: 'Rhone-Alpes',result:13},
		{name: 'Auvergne', result:14},
		{name: 'Limousin', result:15},
		{name: 'Poitou Charente', result:16},
		{name: 'Aquitaine',result:17},
		{name: 'Midi Pyrenees',result:18},
		{name: 'Languedoc Roussillon',result:19},
		{name: 'Paca',result:20},
		{name: 'Corse', result:21},
		{name: 'Ile de France', result:22},
	]
	
	//on passe sur une region
	$('.map area').mouseover(function(){
		var index = $(this).index();
		var left = -index*420 - 420;
		$('.map .overlay').css({
			backgroundPosition: left+"px 0px "
		});
	});

	//on sort de la region
	$('.map area').mouseout(function(){
		$('.map .overlay').css({
			backgroundPosition: "420px 0px"
		});
		$('.map .tooltip').stop().fadeTo(500,0);
	});

	var i= questions.length, j, temp;

	while(--i>0){
		j = Math.floor(Math.random()*(i+1));
		temp = questions[j];
		questions[j]=questions[i];
		questions[i]=temp;
	}

	var z = 0;
	$(".question").html(questions[z].name + " ?");


	$('.map area').click(function(){
		//l endroit ou l on clique
		index = $(this).index();
		index+=1;

		//bonne réponse
		var index_click = questions[z].result; 

		//comparaison entre le click et la question posée
		if(questions[z].result == index){
			$(".question").html(questions[z].name + " ?");
			z +=1;
			score += count;
			count = 10;
			
			if(z>21){
				cout = 10;
				clearInterval(counter);
				$(".question2").html("Bravo");
			}
		}

		if(questions[z].result != index_click){
			z = z;
			$(".question").html(questions[z].name + " ?");
		}		
	});
});
	

	


	
	
	
	
	
	
