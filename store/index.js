export const state = () => ({
  language:'esp',
  playMode: "",
  secretNotes: [],
  currentGuess:[],
  lastNote:'',
  round:0,
  maxRounds:5,
  totalPoints:0,
  roundPoints:0,
  resetWarning:{open:false, mode:''},
  settingsOpen: false,
  leaderBoardOpen: false,
  helpOpen: false,
  explicitNotes: true,
  timeBetweenNotes:1000,
  difficulties:{
    easy:{notesPerRound:3},
    normal:{notesPerRound:5},
    hard:{notesPerRound:7},
  },
  chosenDifficulty:'easy',
  chosenScale:'major',
  scales:{
    major:[
      {tonic:"c", notes:['c','d','e','f','g','a','b']},
      {tonic:"cS", notes:['cS','dS','f','fS','gS','aS','c']},
      {tonic:"d", notes:['d','e','fS','g','a','b','cS']},
      {tonic:"dS", notes:['dS','f','g','gS','aS','c','d']},
      {tonic:"e", notes:['e','fS','gS','a','b','cS','dS']},
      {tonic:"f", notes:['f','g','a','aS','c','d','e']},
      {tonic:"fS", notes:['fS','gS','aS','b','cS','dS','f']},
      {tonic:"g", notes:['g','a','b','c','d','e','fS',]},
      {tonic:"gS", notes:['gS','aS','c','cS','dS','f','g']},
      {tonic:"a", notes:['a','b','cS','d','e','fS','gS',]},
      {tonic:"aS", notes:['aS','c','d','dS','f','g','a']},
      {tonic:"b", notes:['b','cS','dS','e','fS','gS','aS']},
    ]
  },
  piano:[
    {name:"c3",color:"white"},
    {name:"cS3",color:"black"},
    {name:"d3",color:"white"},
    {name:"dS3",color:"black"},
    {name:"e3",color:"white"},
    {name:"f3",color:"white"},
    {name:"fS3",color:"black"},
    {name:"g3",color:"white"},
    {name:"gS3",color:"black"},
    {name:"a3",color:"white"},
    {name:"aS3",color:"black"},
    {name:"b3",color:"white"},
    {name:"c4",color:"white"},
    {name:"cS4",color:"black"},
    {name:"d4",color:"white"},
    {name:"dS4",color:"black"},
    {name:"e4",color:"white"},
    {name:"f4",color:"white"},
    {name:"fS4",color:"black"},
    {name:"g4",color:"white"},
    {name:"gS4",color:"black"},
    {name:"a4",color:"white"},
    {name:"aS4",color:"black"},
    {name:"b4",color:"white"},
    ],
  strings:{
    notes:{
      a:{eng:'A',esp:'LA'},
      aS:{eng:'A#',esp:'LA#'},  
      b:{eng:'B',esp:'SI'},
      c:{eng:'C',esp:'DO'},
      cS:{eng:'C#',esp:'DO#'},
      d:{eng:'D',esp:'RE'},
      dS:{eng:'D#',esp:'RE#'},
      e:{eng:'E',esp:'MI'},
      f:{eng:'F',esp:'FA'},
      fS:{eng:'F#',esp:'FA#'},
      g:{eng:'G',esp:'SOL'},
      gS:{eng:'G#',esp:'SOL#'},
    },
    choose: {eng:'Choose a mode:',esp:'Elige un modo:'}, 
    memory:{eng:'Memory',esp:'Memoria'},
    guess:{eng:'Ear training',esp:'Audioperceptiva'},
    free:{eng:'Free',esp:'Libre'},
    pressPlay:{eng:'Press to start',esp:'Presiona para comenzar'},
    roundCompleted:{eng:'Round Completed!',esp:'Ronda Completada!'},
    roundPoints:{eng:'Round Points: ',esp:'Puntos de Ronda: '},
    totalPoints:{eng:'Total Points: ', esp:'Puntos Totales: '},
    continue:{eng:'Continue',esp:'Continuar'},
    victory:{eng:'You Won!',esp:'Ganaste!'},
    yourScore:{eng:'your score: ',esp:'tu puntaje: '},
    goBack:{eng:'Go Back',esp:'Volver'},
    difficulty:{eng:'Difficulty',esp:'Dificultad'},
    easy:{eng:'Easy',esp:'Fácil'},
    normal:{eng:'Normal',esp:'Normal'},
    hard:{eng:'Hard',esp:'Difícil'},
    resetWarning:{eng:'Changing modes will reset the progress of your current game. Change modes anyway?',
                  esp:'Cambiar de modo borrará el progreso de tu actual juego, cambiar de todos modos?'},
    change:{eng:'Change',esp:'Cambiar'},
    cancel:{eng:'Cancel',esp:'Cancelar'},
    language:{eng:'Language',esp:'Idioma'},
    timeBetweenNotes:{eng:'Time between Notes',esp:'Tiempo entre Notas'},
    fast:{eng:'Fast',esp:'Rápido'},
    slow:{eng:'Slow',esp:'Lento'},
    points:{eng:'points',esp:'puntos'},
    topScores:{eng:'Top Scores',esp:'Mejores Puntajes'},
    erase:{eng:'Erase',esp:'Borrar'},
    eraseScores:{eng:'Erase Scores',esp:'Borrar Puntajes'},
    eraseWarning:{eng:'You are about to delete your top scores, proceed?',esp:'Estás a punto de borrar tus mejores puntajes, proceder?'},
    emptyLeaderBoard:{eng:'You don\'t have any top scores yet!',esp:'No tienes mejores puntajes todavía!'},
    help:{eng:'Help',esp:'Ayuda'},
    freeHelp:{
      eng:'Just a piano for you to play freely, there\'s no score with this one!',
      esp:'Sólo un piano para tocar libremente, este modo no tiene puntaje!'},
    memoryHelp:{
      eng:'Memory game where you get more points the more you can remember a randomly generated melody, you can use your eyes and ears for this one',
      esp:'Juego de memoria en el cual ganas mas puntos cuanto mejor recuerdes una melodía aleatoriamente seleccionada, puedes usar tanto tus ojos como tus oídos'},
    guessHelp:{
      eng:'The same as the memory game, but this one doesn\'t have any visual cues, so you have to go purely by ear!',
      esp:'Parecido al juego de memoria, pero este no tiene ningún tipo de indicación visual, por lo cual debes usar sólo tus oídos!'},
    listenHelp:{
      eng:'This lets you listen one more time to the current melody, but it takes one point from your score',
      esp:'Sirve para escuchar nuevamente la melodía actual, pero le resta uno a tu puntaje'},
    newSequenceHelp:{
      eng:'This skips straight to the next melody, but you don\'t get any points from the current one. Use only when stuck!',
      esp:'Sirve para pasar a la siguiente melodía, pero no ganas puntos por la melodía actual. Sólo usar cuando no puedas avanzar!'},
    visibleNotesHelp:{
      eng:'This simply show/hides the name of the notes on the keyboard',
      esp:'Simplemente muestra/oculta los nombres de las notas en el piano'},      
    yourName:{eng:'Your Name',esp:'Tu nombre'},
    madeBy:{eng:'Made by Emilio Zamacona',esp:'Hecho por Emilio Zamacona'},
  } 
})

export const mutations = {
  changeState(state,{stateValue,newValue}) {
    state[stateValue] = newValue
  },

}
export const getters = {
  getSecretNotes: (state) => {
    return state.secretNotes
  },
  getCurrentGuess: (state)=>{
    return state.currentGuess
  },
  getTotalPoints: (state)=>{
    return state.totalPoints
  },
  getRoundPoints: (state)=>{
    return state.roundPoints
  },
  getLastNote:(state)=>{
    return state.lastNote
  },
  getPlayMode:(state)=>{
    return state.playMode
  },
  getSettingsOpen:(state)=>{
    return state.settingsOpen
  },
  getLeaderBoardOpen:(state)=>{
    return state.leaderBoardOpen
  },
  getExplicitNotes:(state)=>{
    return state.explicitNotes
  },
  getScales:(state)=>{
    return state.scales
  },
  getChosenScale:(state)=>{
    return state.chosenScale
  },
  getChosenDifficulty:(state)=>{
    return state.chosenDifficulty
  },
  getPiano:(state)=>{
    return state.piano
  },
  getTimeBetweenNotes:(state)=>{
    return state.timeBetweenNotes
  },
  getResetWarning:(state)=>{
    return state.resetWarning
  },
  getRound:(state)=>{
    return state.round
  },
  getStrings:(state)=>{
    return state.strings
  },
  getLang:(state)=>{
    return state.language
  },
  getHelpOpen:(state)=>{
    return state.helpOpen
  },
  roundWin:(state)=>{
    if (state.secretNotes.length!=0){
      return state.currentGuess.equals(state.secretNotes)
    } else return false
  },
  gameWin:(state)=>{
    return state.round == state.maxRounds
  }
}
