export const state = () => ({
  playMode: "",
  secretNotes: [],
  currentGuess:[],
  lastNote:'',
  round:0,
  maxRounds:10,
  totalPoints:0,
  roundPoints:0,
  resetWarning:{open:false, mode:''},
  scales:{
    major:[
      {tonic:"c", notes:['c','d','e','f','g','a','b']},
      {tonic:"c#", notes:['c#','d#','f','f#','g#','a#','c']},
      {tonic:"d", notes:['d','e','f#','g','a','b','c#']},
      {tonic:"d#", notes:['d#','f','g','g#','a#','c','d']},
      {tonic:"e", notes:['e','f#','g#','a','b','c#','d#']},
      {tonic:"f", notes:['f','g','a','a#','c','d','e']},
      {tonic:"f#", notes:['f#','g#','a#','b','c#','d#','f']},
      {tonic:"g", notes:['g','a','b','c','d','e','f#',]},
      {tonic:"g#", notes:['g#','a#','c','c#','d#','f','g']},
      {tonic:"a", notes:['a','b','c#','d','e','f#','g#',]},
      {tonic:"a#", notes:['a#','c','d','d#','f','g','a']},
      {tonic:"b", notes:['b','c#','d#','e','f#','g#','a#']},
    ]
  },
  piano:[
    {name:"c3",color:"white"},
    {name:"c#3",color:"black"},
    {name:"d3",color:"white"},
    {name:"d#3",color:"black"},
    {name:"e3",color:"white"},
    {name:"f3",color:"white"},
    {name:"f#3",color:"black"},
    {name:"g3",color:"white"},
    {name:"g#3",color:"black"},
    {name:"a3",color:"white"},
    {name:"a#3",color:"black"},
    {name:"b3",color:"white"},
    {name:"c4",color:"white"},
    {name:"c#4",color:"black"},
    {name:"d4",color:"white"},
    {name:"d#4",color:"black"},
    {name:"e4",color:"white"},
    {name:"f4",color:"white"},
    {name:"f#4",color:"black"},
    {name:"g4",color:"white"},
    {name:"g#4",color:"black"},
    {name:"a4",color:"white"},
    {name:"a#4",color:"black"},
    {name:"b4",color:"white"},
  ]
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
  getScales:(state)=>{
    return state.scales
  },
  getPiano:(state)=>{
    return state.piano
  },
  getResetWarning:(state)=>{
    return state.resetWarning
  }

}