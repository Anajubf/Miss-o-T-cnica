// 1. Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.
let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];
  
  let elementoRemovido = inventarioAlpha.pop();

console.log(`Depois do pop: ${inventarioAlpha}`);
console.log(`Elemento removida: ${elementoRemovido}`);

// 2. Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.

let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

  let elementoRemovido1 = inventarioBeta.pop();

  console.log(`Depois do pop: ${inventarioBeta}`);
  console.log(`Elemento removido: ${elementoRemovido1}`);

  // 3.Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.
  inventarioAlpha.push (["Cristal Roxo", "Terra", 1700 ], 
    ["Anel de Rubi", "Terra", 1500],
    ["Esfera de luz", "Terra", 5200])
  
    console.log(`Depois do push: ${inventarioAlpha}`);

// 4. Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.
    inventarioBeta.push (["Pó solar", "Terra", 4300 ], 
        ["Fluido de Netuno", "Sol", 6500])
      
      console.log(`Os dois artefatos adicionados são: ${inventarioBeta}`);

      //5.Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.
      let itemDestaque = inventarioAlpha [13];
      inventarioAlpha.unshift(itemDestaque);
      inventarioAlpha.splice (14, 1);
      console.log(`O item que precisa ser destacado e aparecer no topo da lista ${inventarioAlpha} `);

      // 6. Um item da Beta deve ser promovido para o início da lista para estudo prioritário.
      let itemDestaque1 = inventarioBeta [3];
      inventarioBeta.unshift(itemDestaque1);
      inventarioBeta.splice (4, 1);
      console.log("O item promovido foi:" , inventarioBeta);

      // 7. Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.
      let elementoRemovido02 = inventarioAlpha.shift();
      console.log("O artefato incorreto removido:", inventarioAlpha);
      console.log("Elemento removido:", elementoRemovido02);
 
      //8. O primeiro item da Beta pertence a um museu e deve ser removido.
      let elementoRemovido03 = inventarioBeta.shift();
      console.log("O artefato incorreto removido:", inventarioBeta);
      console.log("Elemento removido:", elementoRemovido03);

      //12. Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.
      console.log(`Parte do inventário Bata (índices 0 a 10): ${inventarioBeta.slice(0, 10)}`);

      //13. Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.
      let novaLista = inventarioBeta.splice(0, 5);
      console.log("A nova lista é:" , novaLista );

      //14. Separe os 10 últimos itens do inventário Alpha para estudo temporal.
      console.log(`Parte do inventário Alpha (índices 17 a 28): ${inventarioAlpha.slice(17, 28)}`);

      //15. O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.
      let elementoAlterado = inventarioAlpha.splice(5, 1, ["Ampulheta Galáctica 2.0", "Vênus", "2200"]);
      console.log(`A versão mais moderna do quinto item é: ${inventarioAlpha.join(', ')}`);
      console.log(`Elementos alterados: ${elementoAlterado.join(', ')}`);

      //16. Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.
      inventarioBeta.splice(6, 2);
      console.log("Novo inventário:" , inventarioBeta);

      //17.Unifique os inventários Alpha e Beta em uma única estrutura.
      console.log(`Inventários combinados: ${inventarioAlpha.concat(inventarioBeta)}`);
      console.log(`Inventários combinados: ${inventarioAlpha.concat(inventarioBeta).join(', ')}`);

      //18. Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.
      let novoInvatarioBeta = inventarioBeta.splice(0, 5);
      let novoInventarioAlpha = inventarioAlpha.splice(0, 5);
      console.log(`Inventários combinados: ${novoInventarioAlpha.concat(novoInvatarioBeta)}`);
      
      //26. Inverta a ordem dos 15 primeiros itens da Alpha como simulação de viagem no tempo.
      let inventarioAlphaInvertido = inventarioAlpha.slice(0, 16);
      let ultimosElementos = inventarioAlpha.slice (17, 28)
      console.log("O invetário Alpha invertido:" , inventarioAlphaInvertido.reverse());
      console.log("Os últimos elementos do array:" , inventarioAlphaInvertido.concat(ultimosElementos));