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
  explicitNotes:true,
  difficulties:{
    easy:{notesPerRound:3, timeBetweenNotes:1600},
    normal:{notesPerRound:5, timeBetweenNotes:1300},
    hard:{notesPerRound:7, timeBetweenNotes:1000},
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
    pressPlay:{eng:'Press play to start',esp:'Presiona jugar para comenzar'},
    roundCompleted:{eng:'Round Completed!',esp:'Ronda Completada!'},
    roundPoints:{eng:'Round Points: ',esp:'Puntos de Ronda: '},
    totalPoints:{eng:'Total Points: ', esp:'Puntos Totales: '},
    continue:{eng:'Continue',esp:'Continuar'},
    victory:{eng:'You Won!',esp:'Ganaste!'},
    yourScore:{eng:'your score: ',esp:'tu puntaje: '},
    goBack:{eng:'Go Back',esp:'Volver'},
    easy:{eng:'Easy',esp:'Fácil'},
    normal:{eng:'Normal',esp:'Normal'},
    hard:{eng:'Hard',esp:'Difícil'},
    resetWarning:{eng:'Changing modes will reset the progress of your current game. Change modes anyway?',
                  esp:'Cambiar de modo borrará el progreso de tu actual juego, cambiar de todos modos?'},
    change:{eng:'Change',esp:'Cambiar'},
    cancel:{eng:'Cancel',esp:'Cancelar'},
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
  roundWin:(state)=>{
    if (state.secretNotes.length!=0){
      return state.currentGuess.equals(state.secretNotes)
    } else return false
  },
  gameWin:(state)=>{
    return state.round == state.maxRounds
  }
}