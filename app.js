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
        'pots': [ { "teams": [{'name': "GER", 'path': null}, {'name': "ARG", 'path': null}, {'name': "BRA", 'path': null}, {'name': "POR", 'path': null}, 
                             {'name': "SUI", 'path': null}, {'name': "POL", 'path': null}, {'name': "CHI", 'path': null}, {'name': "RUS", 'path': null}]}, 
                  { "teams": [{'name': "DRC", 'path': null}, {'name': "NGA", 'path': null}, {'name': "CIV", 'path': null}, {'name': "BUR", 'path': null}, 
                             {'name': "EGY", 'path': null}, {'name': "URU", 'path': null}, {'name': "COL", 'path': null}, {'name': "IRE", 'path': null}]},
                  { "teams": [{'name': "MEX", 'path': null}, {'name': "CRC", 'path': null}, {'name': "USA", 'path': null}, {'name': "AUS", 'path': null}, 
                             {'name': "IRN", 'path': null}, {'name': "KOR", 'path': null}, {'name': "JPN", 'path': null}, {'name': "KSA", 'path': null}]},
                  { "teams": [{'name': "SWE", 'path': null}, {'name': "SER", 'path': null}, {'name': "ENG", 'path': null}, {'name': "FRA", 'path': null}, 
                             {'name': "ESP", 'path': null}, {'name': "BEL", 'path': null}, {'name': "CRO", 'path': null}, {'name': "GRE", 'path': null}]}   
        ]
    },
    'methods': {
        'emptyPot': function(pot) {
            setTimeout(() => this.groups[0][pot] = this.popTeam(pot)[0], 200);
            setTimeout(() => this.groups[1][pot] = this.popTeam(pot)[0], 400);
            setTimeout(() => this.groups[2][pot] = this.popTeam(pot)[0], 600);
            setTimeout(() => this.groups[3][pot] = this.popTeam(pot)[0], 800);
            setTimeout(() => this.groups[4][pot] = this.popTeam(pot)[0], 1000);
            setTimeout(() => this.groups[5][pot] = this.popTeam(pot)[0], 1200);
            setTimeout(() => this.groups[6][pot] = this.popTeam(pot)[0], 1400);
            setTimeout(() => this.groups[7][pot] = this.popTeam(pot)[0], 1600);
        },
        'popTeam': function(pot) {
            switch (pot) {
                case "One":
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
            console.log(team);
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