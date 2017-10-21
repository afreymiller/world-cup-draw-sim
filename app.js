new Vue({
    'el': '#app',
    'data': {

        'groups': [
            {'name': "A", 'teams': [{'name': "A1", 'final': '', 'url': ''}, {'name': "A2", 'final': '', 'url': ''},
                                    {'name': "A3", 'final': '', 'url': ''}, {'name': "A4", 'final': '', 'url': ''}]},
            {'name': "B", 'teams': [{'name': "B1", 'final': '', 'url': ''}, {'name': "B2", 'final': '', 'url': ''},
                                    {'name': "B3", 'final': '', 'url': ''}, {'name': "B4", 'final': '', 'url': ''}]},
            {'name': "C", 'teams': [{'name': "C1", 'final': '', 'url': ''}, {'name': "C2", 'final': '', 'url': ''},
                                    {'name': "C3", 'final': '', 'url': ''}, {'name': "C4", 'final': '', 'url': ''}]},
            {'name': "D", 'teams': [{'name': "D1", 'final': '', 'url': ''}, {'name': "D2", 'final': '', 'url': ''},
                                    {'name': "D3", 'final': '', 'url': ''}, {'name': "D4", 'final': '', 'url': ''}]},
            {'name': "E", 'teams': [{'name': "E1", 'final': '', 'url': ''}, {'name': "E2", 'final': '', 'url': ''},
                                    {'name': "E3", 'final': '', 'url': ''}, {'name': "E4", 'final': '', 'url': ''}]},
            {'name': "F", 'teams': [{'name': "F1", 'final': '', 'url': ''}, {'name': "F2", 'final': '', 'url': ''},
                                    {'name': "F3", 'final': '', 'url': ''}, {'name': "F4", 'final': '', 'url': ''}]},
            {'name': "G", 'teams': [{'name': "G1", 'final': '', 'url': ''}, {'name': "G2", 'final': '', 'url': ''},
                                    {'name': "G3", 'final': '', 'url': ''}, {'name': "G4", 'final': '', 'url': ''}]},
            {'name': "H", 'teams': [{'name': "H1", 'final': '', 'url': ''}, {'name': "H2", 'final': '', 'url': ''},
                                    {'name': "H3", 'final': '', 'url': ''}, {'name': "H4", 'final': '', 'url': ''}]},
        ],
        'pots': [ {"teams": [{'name': "RUS", 'path': null, 'chosen': false, 'final': false}, {'name': "BRA", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "BEL", 'path': null, 'chosen': false, 'final': false}, {'name': "GER", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "POL", 'path': null, 'chosen': false, 'final': false}, {'name': "POR", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "FRA", 'path': null, 'chosen': false, 'final': false}, {'name': "ARG", 'path': null, 'chosen': false, 'final': false}]}, 
                  {"teams": [{'name': "MEX", 'path': null, 'chosen': false, 'final': false}, {'name': "ENG", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "ESP", 'path': null, 'chosen': false, 'final': false}, {'name': "URU", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "COL", 'path': null, 'chosen': false, 'final': false}, {'name': "PER", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "SUI", 'path': null, 'chosen': false, 'final': false}, {'name': "ITA", 'path': null, 'chosen': false, 'final': false}]},
                  {"teams": [{'name': "CRC", 'path': null, 'chosen': false, 'final': false}, {'name': "ISL", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "IRN", 'path': null, 'chosen': false, 'final': false}, {'name': "EGY", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "CRO", 'path': null, 'chosen': false, 'final': false}, {'name': "DEN", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "NGA", 'path': null, 'chosen': false, 'final': false}, {'name': "SEN", 'path': null, 'chosen': false, 'final': false}]},
                  {"teams": [{'name': "KOR", 'path': null, 'chosen': false, 'final': false}, {'name': "KSA", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "PAN", 'path': null, 'chosen': false, 'final': false}, {'name': "JPN", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "AUS", 'path': null, 'chosen': false, 'final': false}, {'name': "CIV", 'path': null, 'chosen': false, 'final': false}, 
                             {'name': "SER", 'path': null, 'chosen': false, 'final': false}, {'name': "TUN", 'path': null, 'chosen': false, 'final': false}]}   
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

            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    let teamChosen = this.selectTeam(pot);
                    
                    this.groups[i].teams[index]["url"] = teamChosen;
                    
                }, 200*i + 200);
            }
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

        },
        'getImgPath': function(team) {
            return 'img/' + team + '.png';
        }
    }
})