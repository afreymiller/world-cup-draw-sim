new Vue({
    'el': '#app',
    'data': {

        'groups': [
            {'name': "A", 'One': "A1", 'Two': "A2", 'Three': "A3", 'Four': "A4"},
            {'name': "B", 'One': "B1", 'Two': "B2", 'Three': "B3", 'Four': "B4"},
            {'name': "C", 'One': "C1", 'Two': "C2", 'Three': "C3", 'Four': "C4"},
            {'name': "D", 'One': "D1", 'Two': "D2", 'Three': "D3", 'Four': "D4"},
            {'name': "E", 'One': "E1", 'Two': "E2", 'Three': "E3", 'Four': "E4"},
            {'name': "F", 'One': "F1", 'Two': "F2", 'Three': "F3", 'Four': "F4"},
            {'name': "G", 'One': "G1", 'Two': "G2", 'Three': "G3", 'Four': "G4"},
            {'name': "H", 'One': "H1", 'Two': "H2", 'Three': "H3", 'Four': "H4"},
        ],
        'pots': [ {"teams": [{'name': "GER", 'path': null, 'chosen': false}, {'name': "ARG", 'path': null, 'chosen': false}, 
                             {'name': "BRA", 'path': null, 'chosen': false}, {'name': "POR", 'path': null, 'chosen': false}, 
                             {'name': "SUI", 'path': null, 'chosen': false}, {'name': "POL", 'path': null, 'chosen': false}, 
                             {'name': "CHI", 'path': null, 'chosen': false}, {'name': "RUS", 'path': null, 'chosen': false}]}, 
                  {"teams": [{'name': "DRC", 'path': null, 'chosen': false}, {'name': "NGA", 'path': null, 'chosen': false}, 
                             {'name': "CIV", 'path': null, 'chosen': false}, {'name': "BUR", 'path': null, 'chosen': false}, 
                             {'name': "EGY", 'path': null, 'chosen': false}, {'name': "URU", 'path': null, 'chosen': false}, 
                             {'name': "COL", 'path': null, 'chosen': false}, {'name': "IRE", 'path': null, 'chosen': false}]},
                  {"teams": [{'name': "MEX", 'path': null, 'chosen': false}, {'name': "CRC", 'path': null, 'chosen': false}, 
                             {'name': "USA", 'path': null, 'chosen': false}, {'name': "AUS", 'path': null, 'chosen': false}, 
                             {'name': "IRN", 'path': null, 'chosen': false}, {'name': "KOR", 'path': null, 'chosen': false}, 
                             {'name': "JPN", 'path': null, 'chosen': false}, {'name': "KSA", 'path': null, 'chosen': false}]},
                  {"teams": [{'name': "SWE", 'path': null, 'chosen': false}, {'name': "SER", 'path': null, 'chosen': false}, 
                             {'name': "ENG", 'path': null, 'chosen': false}, {'name': "FRA", 'path': null, 'chosen': false}, 
                             {'name': "ESP", 'path': null, 'chosen': false}, {'name': "BEL", 'path': null, 'chosen': false}, 
                             {'name': "CRO", 'path': null, 'chosen': false}, {'name': "GRE", 'path': null, 'chosen': false}]}   
        ]
    },
    'methods': {
        'emptyPot': function(pot) {
            setTimeout(() => this.groups[0][pot] = this.selectTeam(pot), 200);
            setTimeout(() => this.groups[1][pot] = this.selectTeam(pot), 400);
            setTimeout(() => this.groups[2][pot] = this.selectTeam(pot), 600);
            setTimeout(() => this.groups[3][pot] = this.selectTeam(pot), 800);
            setTimeout(() => this.groups[4][pot] = this.selectTeam(pot), 1000);
            setTimeout(() => this.groups[5][pot] = this.selectTeam(pot), 1200);
            setTimeout(() => this.groups[6][pot] = this.selectTeam(pot), 1400);
            setTimeout(() => this.groups[7][pot] = this.selectTeam(pot), 1600);
        },
        'selectTeam': function(pot) {
            switch (pot) {
                case "One":
                    let allPotTeams = this.pots[0]['teams'];
                    let eligibleTeams = allPotTeams.filter(e => e.chosen == false);
                    console.log(eligibleTeams);
                    return this.Pot1.splice(Math.floor(Math.random()*this.Pot1.length), 1);
                case "Two":
                    return this.Pot2.splice(Math.floor(Math.random()*this.Pot2.length), 1);
                case "Three":
                    return this.Pot3.splice(Math.floor(Math.random()*this.Pot3.length), 1);
                case "Four":
                    return this.Pot4.splice(Math.floor(Math.random()*this.Pot4.length), 1);
                default:
                    break;
            }
        },
        'teamIsChosen': function(team, index) {
            return true;
        },
        'buttonClick': function() {
            setTimeout(() => this.emptyPot("One"), 0);
            setTimeout(() => this.emptyPot("Two"), 1600);
            setTimeout(() => this.emptyPot("Three"), 3200);
            setTimeout(() => this.emptyPot("Four"), 4800);

            this.Pot1 = ["GER", "ARG", "BRA", "POR", "SUI", "POL", "CHI", "RUS"],
            this.Pot2 = ["DRC", "NGA", "CIV", "BUR", "EGP", "URU", "COL", "IRE"],
            this.Pot3 = ["MEX", "CRC", "USA", "AUS", "IRN", "KOR", "JPN", "KSA"],
            this.Pot4 = ["SWE", "SER", "ENG", "FRA", "ESP", "BEL", "CRO", "GRE"]
        },
        'getImgPath': function(team) {
            return 'img/' + team + '.jpg';
        }
    }
})