new Vue({
    'el': '#app',
    'data': {

        'groups': [
            {'name': "A", 'teams': [{'name': "A1", 'url': ''}, {'name': "A2", 'url': ''},
                                    {'name': "A3", 'url': ''}, {'name': "A4", 'url': ''}]},
            {'name': "B", 'teams': [{'name': "B1", 'url': ''}, {'name': "B2", 'url': ''},
                                    {'name': "B3", 'url': ''}, {'name': "B4", 'url': ''}]},
            {'name': "C", 'teams': [{'name': "C1", 'url': ''}, {'name': "C2", 'url': ''},
                                    {'name': "C3", 'url': ''}, {'name': "C4", 'url': ''}]},
            {'name': "D", 'teams': [{'name': "D1", 'url': ''}, {'name': "D2", 'url': ''},
                                    {'name': "D3", 'url': ''}, {'name': "D4", 'url': ''}]},
            {'name': "E", 'teams': [{'name': "E1", 'url': ''}, {'name': "E2", 'url': ''},
                                    {'name': "E3", 'url': ''}, {'name': "E4", 'url': ''}]},
            {'name': "F", 'teams': [{'name': "F1", 'url': ''}, {'name': "F2", 'url': ''},
                                    {'name': "F3", 'url': ''}, {'name': "F4", 'url': ''}]},
            {'name': "G", 'teams': [{'name': "G1", 'url': ''}, {'name': "G2", 'url': ''},
                                    {'name': "G3", 'url': ''}, {'name': "G4", 'url': ''}]},
            {'name': "H", 'teams': [{'name': "H1", 'url': ''}, {'name': "H2", 'url': ''},
                                    {'name': "H3", 'url': ''}, {'name': "H4", 'url': ''}]},
        ],
        'pots': [ {"teams": [{'name': "RUS", 'path': null, 'chosen': false}, {'name': "BRA", 'path': null, 'chosen': false}, 
                             {'name': "BEL", 'path': null, 'chosen': false}, {'name': "GER", 'path': null, 'chosen': false}, 
                             {'name': "POL", 'path': null, 'chosen': false}, {'name': "POR", 'path': null, 'chosen': false}, 
                             {'name': "FRA", 'path': null, 'chosen': false}, {'name': "ARG", 'path': null, 'chosen': false}]}, 
                  {"teams": [{'name': "MEX", 'path': null, 'chosen': false}, {'name': "ENG", 'path': null, 'chosen': false}, 
                             {'name': "ESP", 'path': null, 'chosen': false}, {'name': "URU", 'path': null, 'chosen': false}, 
                             {'name': "COL", 'path': null, 'chosen': false}, {'name': "PER", 'path': null, 'chosen': false}, 
                             {'name': "SUI", 'path': null, 'chosen': false}, {'name': "ITA", 'path': null, 'chosen': false}]},
                  {"teams": [{'name': "CRC", 'path': null, 'chosen': false}, {'name': "ISL", 'path': null, 'chosen': false}, 
                             {'name': "IRN", 'path': null, 'chosen': false}, {'name': "EGY", 'path': null, 'chosen': false}, 
                             {'name': "CRO", 'path': null, 'chosen': false}, {'name': "DEN", 'path': null, 'chosen': false}, 
                             {'name': "NGA", 'path': null, 'chosen': false}, {'name': "SEN", 'path': null, 'chosen': false}]},
                  {"teams": [{'name': "KOR", 'path': null, 'chosen': false}, {'name': "KSA", 'path': null, 'chosen': false}, 
                             {'name': "PAN", 'path': null, 'chosen': false}, {'name': "JPN", 'path': null, 'chosen': false}, 
                             {'name': "AUS", 'path': null, 'chosen': false}, {'name': "CIV", 'path': null, 'chosen': false}, 
                             {'name': "SER", 'path': null, 'chosen': false}, {'name': "TUN", 'path': null, 'chosen': false}]}   
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

        },
        'getImgPath': function(team) {
            return 'img/' + team + '.png';
        }
    }
})