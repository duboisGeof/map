jQuery(function($){
	


	//on ajoute la classe overlay et tooltip à map
	$('.map').append('<div class="overlay">').append('<div class="tooltip"></div>');
	
	//on masque le tooltip au demarrage
	$('.map .tooltip').hide();
      
	//liste des régions
	var regions =[
		{name: 'Nord Pas de Calais', slug:'Nord Pas de Calais', result:1, prefecture: "Lille"},
		{name: 'Picardie', slug:'Picardie', result:2, prefecture: "Amiens"},
		{name: 'Haute Normandie', slug:'Haute Normandie', result:3, prefecture: "Rouen"},
		{name: 'Champagne Ardenne', slug:'Champagne Ardenne', result:4, prefecture: "Chalons-en-Champagne"},
		{name: 'Basse Normandie', slug:'Basse Normandie', result:5, prefecture: "Caen"},
		{name: 'Lorraine', slug:'Lorraine', result:6, prefecture: "Metz"},
		{name: 'Alsace', slug:'Alsace', result:7, prefecture: "Strasbourg"},
		{name: 'Bretagne', slug:'Bretagne', result:8, prefecture: "Rennes"},
		{name: 'Pays de la Loire', slug:'Pays de la loire', result:9, prefecture: "Nantes"},
		{name: 'Centre', slug:'Centre', result:10, prefecture: "Centre"},
		{name: 'Bourgogne', slug:'Bourgogne', result:11, prefecture: "Dijon"},
		{name: 'Franche-Comte', slug:'Franche-Comte', result:12, prefecture: "Besancon"},
		{name: 'Rhone-Alpes', slug:'Rhone-Alpes', result:13, prefecture: "Lyon"},
		{name: 'Auvergne', slug:'Auvergne', result:14, prefecture: "Clermont Ferrand"},
		{name: 'Limousin', slug:'Limousin', result:15, prefecture: "Limoges"},
		{name: 'Poitou Charente', slug:'Poitou Charente', result:16, prefecture: "Poitiers"},
		{name: 'Aquitaine', slug:'Aquitaine', result:17, prefecture: "Bordeaux"},
		{name: 'Midi Pyrenees', slug:'Midi Pyrennees', result:18, prefecture: "Toulouse"},
		{name: 'Languedoc Roussillon', slug:'Languedoc Roussillon', result:19, prefecture: "Montpellier"},
		{name: 'Paca', slug:'Paca', result:20, prefecture: "Marseille"},
		{name: 'Corse', slug:'Corse', result:21, prefecture: "Ajaccio et Bastia"},
		{name: 'Ile de France', slug:'Ile de France', result:22, prefecture: "Paris"},
		
	]

	var questions =[
		{name: 'Nord Pas de Calais', slug:'Nord Pas de Calais', result:1, prefecture: "Lille", population: "4 000 000", 
			photo1: "img/Nord Pas de Calais/0.jpg", title1: "Lille - La Grande Place",
			photo2: "img/Nord Pas de Calais/1.jpg", title2: "Arras - Le Beffroi",
			photo3: "img/Nord Pas de Calais/2.jpg", title3: "Tourcoing - Parvis de l'Eglise Saint Christophe",
			photo4: "img/Nord Pas de Calais/3.jpg", title4: "Dunkerque - Le grand port maritime",
			photo5: "img/Nord Pas de Calais/4.jpg", title5: "Cap Gris Nez - Vue de l'Angleterre depuis la France"},

		{name: 'Picardie', slug:'Picardie', result:2, prefecture: "Amiens", population: "1 900 000",
			photo1: "img/Picardie/0.jpg", title1: "Beauvais - Cathédrale de Beauvais",
			photo2: "img/Picardie/1.jpg", title2: "Amiens",
			photo3: "img/Picardie/2.jpg", title3: "Chantilly - Le Chateau de Chantilly",
			photo4: "img/Picardie/3.jpg", title4: "Laon - Cathédrale de Laon",
			photo5: "img/Picardie/4.jpg", title5: "Pierrefonds - Chateau de Pierrefonds"},

		{name: 'Haute Normandie', slug:'Haute Normandie', result:3, prefecture: "Rouen", population: "1 800 000",
			photo1: "img/Haute Normandie/0.jpg", title1: "Etretas - Falaise d'Etretas",
			photo2: "img/Haute Normandie/1.jpg", title2: "Rouen - Cathédrale de Rouen",
			photo3: "img/Haute Normandie/2.jpg", title3: "Tancarville - Pont de Tancarville",
			photo4: "img/Haute Normandie/3.jpg", title4: "Le Havre - Port du Havre",
			photo5: "img/Haute Normandie/4.jpg", title5: "Dieppe - Plage de Dieppe"},

		{name: 'Champagne Ardenne', slug:'Champagne Ardenne', result:4, prefecture: "Chalons-en-Champagne", population: "1 300 000",
			photo1: "img/Champagne Ardenne/0.jpg", title1: "Chalon en Champagne - Notre Dame de Veaux",
			photo2: "img/Champagne Ardenne/1.jpg", title2: "Vigne de Champagne",
			photo3: "img/Champagne Ardenne/2.jpg", title3: "Massif des Ardennes",
			photo4: "img/Champagne Ardenne/3.jpg", title4: "Lac du Der-Chantecoq",
			photo5: "img/Champagne Ardenne/4.jpg", title5: "Troyes - La place de Troyes"},

		{name: 'Basse Normandie', slug:'Basse Normandie', result:5, prefecture: "Caen", population: "1 500 000",
			photo1: "img/Basse Normandie/0.jpg", title1: "Caen - Hotel de Ville de Caen",
			photo2: "img/Basse Normandie/1.jpg", title2: "Le Mont Saint Michel à marée basse",
			photo3: "img/Basse Normandie/2.jpg", title3: "Le Mont Saint Michel à marée haute",
			photo4: "img/Basse Normandie/3.jpg", title4: "Arromanches",
			photo5: "img/Basse Normandie/4.jpg", title5: "Saint Malo"},

		{name: 'Lorraine', slug:'Lorraine', result:6, prefecture: "Metz", population: "2 300 000",
			photo1: "img/Lorraine/0.jpg", title1: "Nancy - Hotel de Ville de Nancy",
			photo2: "img/Lorraine/1.jpg", title2: "Metz",
			photo3: "img/Lorraine/2.jpg", title3: "Montagne des Vosges",
			photo4: "img/Lorraine/3.jpg", title4: "Basilique Saint Nicolas de Port",
			photo5: "img/Lorraine/4.jpg", title5: "Verdun - CImetière militaire de Verdun"},

		{name: 'Alsace', slug:'Alsace', result:7, prefecture: "Strasbourg", population: "1 900 000",
			photo1: "img/Alsace/0.jpg", title1: "Centre ville de Strasbourg",
			photo2: "img/Alsace/1.jpg", title2: "Colmar",
			photo3: "img/Alsace/2.jpg", title3: "Orschwiller - Chateau Haut koenigsbourg",
			photo4: "img/Alsace/3.jpg", title4: "Ottrott - Le Mont Sainte-Odile",
			photo5: "img/Alsace/4.jpg", title5: "Automne en Alsace"},

		{name: 'Bretagne', slug:'Bretagne', result:8, prefecture: "Rennes", population: "3 300 000",
			photo1: "img/Bretagne/0.jpg", title1: "Golf de Belle Isle en Mer",
			photo2: "img/Bretagne/1.jpg", title2: "Magalhites de Carnac",
			photo3: "img/Bretagne/2.jpg", title3: "Rennes - Place de la mairie",
			photo4: "img/Bretagne/3.jpg", title4: "Plage du Finistere",
			photo5: "img/Bretagne/4.jpg", title5: "Phare de Lacroix"},

		{name: 'Pays de la Loire', slug:'Pays de la loire', result:9, prefecture: "Nantes", population: "3 700 000",
			photo1: "img/Pays de la Loire/0.jpg", title1: "Circuit des 24h du Mans",
			photo2: "img/Pays de la Loire/1.jpg", title2: "Nantes - Chateau des Duc de Bretagne",
			photo3: "img/Pays de la Loire/2.jpg", title3: "Chateau de Chalaine",
			photo4: "img/Pays de la Loire/3.jpg", title4: "La venise verte - Le marais Poitevin",
			photo5: "img/Pays de la Loire/4.jpg", title5: "Plage des Sable d'Olonne"},

		{name: 'Centre', slug:'Centre', result:10, prefecture: "Orleans", population: "3 700 000",
			photo1: "img/Centre/0.jpg", title1: "Val de Loire",
			photo2: "img/Centre/1.jpg", title2: "Orleans",
			photo3: "img/Centre/2.jpg", title3: "Château de Sully-sur-Loire",
			photo4: "img/Centre/3.jpg", title4: "Blois",
			photo5: "img/Centre/4.jpg", title5: "Chateau de Chambord"},

		{name: 'Bourgogne', slug:'Bourgogne', result:11, prefecture: "Dijon", population: "1 600 000",
			photo1: "img/Bourgogne/0.jpg", title1: "Vigne de la région Bourgogne",
			photo2: "img/Bourgogne/1.jpg", title2: "Dijon",
			photo3: "img/Bourgogne/2.jpg", title3: "Auxerre",
			photo4: "img/Bourgogne/3.jpg", title4: "Châteaux & Abbayes de Bourgogne",
			photo5: "img/Bourgogne/4.jpg", title5: "Chateau de Tanlay"},

		{name: 'Franche-Comte', slug:'Franche-Comte', result:12, prefecture: "Besancon", population: "1 200 000",
			photo1: "img/Franche-Comte/0.jpg", title1: "Citadelle de Besancon",
			photo2: "img/Franche-Comte/1.jpg", title2: "Lac de Vouglans",
			photo3: "img/Franche-Comte/2.jpg", title3: "Haut-Doubs",
			photo4: "img/Franche-Comte/3.jpg", title4: "Sabot de Frotey",
			photo5: "img/Franche-Comte/4.jpg", title5: "Montelimar"},

		{name: 'Rhone-Alpes', slug:'Rhone-Alpes', result:13, prefecture: "Lyon", population: "6 400 000",
			photo1: "img/Rhone-Alpes/0.jpg", title1: "Lac d'Annecy",
			photo2: "img/Rhone-Alpes/1.jpg", title2: "Montagne de Chambery",
			photo3: "img/Rhone-Alpes/2.jpg", title3: "Massif du Mont Blanc",
			photo4: "img/Rhone-Alpes/3.jpg", title4: "Saint Etienne",
			photo5: "img/Rhone-Alpes/4.jpg", title5: "Les gorges du Vercors"},

		{name: 'Auvergne', slug:'Auvergne', result:14, prefecture: "Clermont Ferrand", population: "1 400 000",
			photo1: "img/Auvergne/0.jpg", title1: "Panorama du Puy de Dome",
			photo2: "img/Auvergne/1.jpg", title2: "Volcan de Clermont Ferrand",
			photo3: "img/Auvergne/2.jpg", title3: "Auvergne",
			photo4: "img/Auvergne/3.jpg", title4: "Auvergne",
			photo5: "img/Auvergne/4.jpg", title5: "La Tour d'Auvergne"},

		{name: 'Limousin', slug:'Limousin', result:15, prefecture: "Limoges", population: "740 000",
			photo1: "img/Limousin/0.jpg", title1: "Tulle",
			photo2: "img/Limousin/1.jpg", title2: "Limoges - Musée des Beaux Arts",
			photo3: "img/Limousin/2.jpg", title3: "Parc naturel régional de Millevaches",
			photo4: "img/Limousin/3.jpg", title4: "Saint-Jean-Ligoure",
			photo5: "img/Limousin/4.jpg", title5: "Le château de Montbrun"},

		{name: 'Poitou Charente', slug:'Poitou Charente', result:16, prefecture: "Poitiers", population: "1 800 000",
			photo1: "img/Poitou Charente/0.jpg", title1: "Fort Boyard",
			photo2: "img/Poitou Charente/1.jpg", title2: "La Rochelle",
			photo3: "img/Poitou Charente/2.jpg", title3: "Cathédrale d'Angoulême",
			photo4: "img/Poitou Charente/3.jpg", title4: "Hotel de ville de Poitiers",
			photo5: "img/Poitou Charente/4.jpg", title5: "Niort"},

		{name: 'Aquitaine', slug:'Aquitaine', result:17, prefecture: "Bordeaux", population: "3 300 000",
			photo1: "img/Aquitaine/0.jpg", title1: "Hotel de ville de Bordeaux",
			photo2: "img/Aquitaine/1.jpg", title2: "Vallée d'Ossau-Plateau de Benou",
			photo3: "img/Aquitaine/2.jpg", title3: "Paysages d'Aquitaine",
			photo4: "img/Aquitaine/3.jpg", title4: "Pyrenee Atlantique - Lac d'Artouste",
			photo5: "img/Aquitaine/4.jpg", title5: "Pyrenee Atlantique"},

		{name: 'Midi Pyrenees', slug:'Midi Pyrennees', result:18, prefecture: "Toulouse", population: "3 000 000",
			photo1: "img/Midi Pyrenees/0.jpg", title1: "Le viaduc de Millau",
			photo2: "img/Midi Pyrenees/1.jpg", title2: "Les Terrasses de Saubissan",
			photo3: "img/Midi Pyrenees/2.jpg", title3: "Toulouse - Place de la mairie",
			photo4: "img/Midi Pyrenees/3.jpg", title4: "Le pic du midi",
			photo5: "img/Midi Pyrenees/4.jpg", title5: "Valcabrère - Basilique Saint-Just"},

		{name: 'Languedoc Roussillon', slug:'Languedoc Roussillon', result:19, prefecture: "Montpellier", population: "2 700 000",
			photo1: "img/Languedoc Roussillon/0.jpg", title1: "Cap d'Agde",
			photo2: "img/Languedoc Roussillon/1.jpg", title2: "Montpellier - Palavas les FLots",
			photo3: "img/Languedoc Roussillon/2.jpg", title3: "Montagne Languedoc Roussillon",
			photo4: "img/Languedoc Roussillon/3.jpg", title4: "Les Arènes de Nimes",
			photo5: "img/Languedoc Roussillon/4.jpg", title5: "Les Arènes de Nimes"},

		{name: 'Paca', slug:'Paca', result:20, prefecture: "Marseille", population: "4 900 000",
			photo1: "img/Paca/0.jpg", title1: "Marseille - Notre Dame de la Garde",
			photo2: "img/Paca/1.jpg", title2: "Le vieux port de Marseille",
			photo3: "img/Paca/2.jpg", title3: "Nice - La promenade des Anglais",
			photo4: "img/Paca/3.jpg", title4: "La fontaine du Vaucluse",
			photo5: "img/Paca/4.jpg", title5: "Champs de lavande"},

		{name: 'Corse', slug:'Corse', result:21, prefecture: "Ajaccio et Bastia", population: "320 000",
			photo1: "img/Corse/0.jpg", title1: "Plage de Saint FLorent",
			photo2: "img/Corse/1.jpg", title2: "Port de Bastia",
			photo3: "img/Corse/2.jpg", title3: "Montagne Corse",
			photo4: "img/Corse/3.jpg", title4: "Crique Corse",
			photo5: "img/Corse/4.jpg", title5: "Ajaccio"},

		{name: 'Ile de France', slug:'Ile de France', result:22, prefecture: "Paris", population: "12 000 000", 
			photo1: "img/Ile de France/0.jpg", title1: "Paris - Avenue des Champs Elysée",
			photo2: "img/Ile de France/1.jpg", title2: "Paris - Tour Eiffel",
			photo3: "img/Ile de France/2.jpg", title3: "Paris - Notre Dame de Paris",
			photo4: "img/Ile de France/3.jpg", title4: "Paris - Musée du Louvre",
			photo5: "img/Ile de France/4.jpg", title5: "Bernes Sur Oise (Ma ville natale) - Place de la mairie"},
	]

	//tooltip qui suit la souris
	$(document).mousemove(function(e){
		$(".map .tooltip").css({
			top:e.pageY-30,
			left:e.pageX+30
		});
	});
	
	//on passe sur une region
	$('.map area').mouseover(function(){
		var index = $(this).index();
		var left = -index*420 - 420;
		$('.map .tooltip').html(regions[index].name).stop().fadeTo(500,1);
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


	$('.map area').click(function(){
		//l endroit ou l on clique
		index = $(this).index();
		var i = 0;

		var dir =  questions[index].name;

		var div = document.getElementById('tooltip_img');
		var ul = document.getElementById('gallery');

		if ($('ul#gallery li').length != 0){
  				var elem = document.querySelector('#gallery');
    			elem.parentNode.removeChild(elem);
    			//alert("pas vide")	
    			var ul  = document.createElement('ul');
    			ul.setAttribute("id", "gallery");
    			div.appendChild(ul);

    			for (var i = 1; i < 6; i++) {

			
	        		var li  = document.createElement('li'),
					a   = document.createElement('a'),
					img = document.createElement("img");

						
					a.className = "fancybox";
					a.title 	= questions[index]["title"+i];
					a.rel       = "gallery1";
					a.id        = i;
					img.src     = questions[index]["photo"+i];
					
					a.appendChild(img)
					li.appendChild(a)
					ul.appendChild(li)

					document.getElementById('container').appendChild(div);
    			}
   		}
   		else{
   			for (var i = 1; i < 6; i++) {

	    		var li  = document.createElement('li'),
				a   = document.createElement('a'),
				clear = document.createElement('div'),
				img = document.createElement("img");

				clear.className = "clear";
				a.className = "fancybox";
				a.title 	= questions[index]["title"+i];
				a.rel       = "gallery";
				a.id        = i;
				img.src     = questions[index]["photo"+i];
						
				a.appendChild(img)
				li.appendChild(a)
				li.appendChild(clear)
				ul.appendChild(li)

				document.getElementById('container').appendChild(div);
    		}
   		}

		$("#nom_pref").html(questions[index].prefecture);
		$("#nb_pop").html(questions[index].population + " d habitants");	
		
	});

	var speed = 700;
	var next_speed = 300;
	
	$(".fancybox").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',
    	openSpeed : speed,
    	closeSpeed : speed,
    	nextEffect : 'fade',
    	prevEffect : 'fade',
    	nextSpeed : next_speed,
    	prevSpeed : next_speed

    });
});
	

	


	
	
	
	
	
	
