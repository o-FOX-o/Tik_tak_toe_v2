const conditions = {
    '=': (a,b) => a===b,
    '<=': (a,b) => a<=b,
    '>=': (a,b) => a>=b,
    '!=': (a,b) => a!==b,
    '>': (a,b) => a>b,
    '<': (a,b) => a<b,
    'HZ/VR': (preM,preS,curM,curS)=>{
        return preM === curM && preS === curS + 1
    },
    
}
