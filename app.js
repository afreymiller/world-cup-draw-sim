new Vue({
    'el': '#app',
    'data': {

        'groups': [
            {'name': "A", 'teams': [{'One': "A1", 'url': ''}, {'Two': "A2", 'url': ''},
                                    {'Three': "A3", 'url': ''}, {'Four': "A4", 'url': ''}]},
            {'name': "B", 'teams': [{'One': "B1", 'url': ''}, {'Two': "B2", 'url': ''},
                                    {'Three': "B3", 'url': ''}, {'Four': "B4", 'url': ''}]},
            {'name': "C", 'teams': [{'One': "C1", 'url': ''}, {'Two': "C2", 'url': ''},
                                    {'Three': "C3", 'url': ''}, {'Four': "C4", 'url': ''}]},
            {'name': "D", 'teams': [{'One': "D1", 'url': ''}, {'Two': "D2", 'url': ''},
                                    {'Three': "D3", 'url': ''}, {'Four': "D4", 'url': ''}]},
            {'name': "E", 'teams': [{'One': "E1", 'url': ''}, {'Two': "E2", 'url': ''},
                                    {'Three': "E3", 'url': ''}, {'Four': "E4", 'url': ''}]},
            {'name': "F", 'teams': [{'One': "F1", 'url': ''}, {'Two': "F2", 'url': ''},
                                    {'Three': "F3", 'url': ''}, {'Four': "F4", 'url': ''}]},
            {'name': "G", 'teams': [{'One': "G1", 'url': ''}, {'Two': "G2", 'url': ''},
                                    {'Three': "G3", 'url': ''}, {'Four': "G4", 'url': ''}]},
            {'name': "H", 'teams': [{'One': "H1", 'url': ''}, {'Two': "H2", 'url': ''},
                                    {'Three': "H3", 'url': ''}, {'Four': "H4", 'url': ''}]},
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

            let index = 0;

            if (pot === "One") {
                index = 0;
            }
            else if (pot === "Two") {
                index = 1;
            }
            else if (pot === "Three") {
                index = 2;
            }
            else if (pot === "Four") {
                index = 3;
            }

            setTimeout(() => {
                let teamChosen = this.selectTeam(pot);
                this.groups[0].teams[index][pot] = teamChosen;
                this.groups[0].teams[index]["url"] = teamChosen;
            }, 200);
            setTimeout(() => {
                let teamChosen = this.selectTeam(pot);
                this.groups[1].teams[index][pot] = teamChosen;
                this.groups[1].teams[index]["url"] = teamChosen;
            }, 400);
            setTimeout(() => {
                let teamChosen = this.selectTeam(pot);
                this.groups[2].teams[index][pot] = teamChosen;
                this.groups[2].teams[index]["url"] = teamChosen;
            }, 600);
            setTimeout(() => {
                let teamChosen = this.selectTeam(pot);
                this.groups[3].teams[index][pot] = teamChosen;
                this.groups[3].teams[index]["url"] = teamChosen;
            }, 800);
            setTimeout(() => {
                let teamChosen = this.selectTeam(pot);
                this.groups[4].teams[index][pot] = teamChosen;
                this.groups[4].teams[index]["url"] = teamChosen;
            }, 1000);
            setTimeout(() => {
                let teamChosen = this.selectTeam(pot);
                this.groups[5].teams[index][pot] = teamChosen;
                this.groups[5].teams[index]["url"] = teamChosen;
            }, 1200);
            setTimeout(() => {
                let teamChosen = this.selectTeam(pot);
                this.groups[6].teams[index][pot] = teamChosen;
                this.groups[6].teams[index]["url"] = teamChosen;
            }, 1400);
            setTimeout(() => {
                let teamChosen = this.selectTeam(pot);
                this.groups[7].teams[index][pot] = teamChosen;
                this.groups[7].teams[index]["url"] = teamChosen;
            }, 1600);
        },
        'selectTeam': function(pot) {

            /* There should be a more ES6 friendly way of doing the pot check */

            let index;

            if (pot === "One") {
                index = 0;
            }
            
            else if (pot === "Two") {
                index = 1;
            }

            else if (pot === "Three") {
                index = 2;
            }

            else {
                index = 3;
            }

            let allPotTeams = this.pots[index]['teams'];
            let eligibleTeams = allPotTeams.filter(e => e.chosen == false);
            let drawnIndex = Math.floor(Math.random()*eligibleTeams.length);
            let drawnTeam = eligibleTeams[drawnIndex];

            for (let team of allPotTeams) {
                if (team.name === drawnTeam.name) {
                    team.chosen = true;
                }
            }

            return drawnTeam.name;

        },
        'teamIsChosen': function(team, potIndex, teamIndex) {
            return this.pots[potIndex]["teams"][teamIndex]["chosen"];
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