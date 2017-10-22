new Vue({
    'el': '#app',
    'data': {

        'groups': [
            {'teams': [{'name': "A1", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "A2", 'fed': null, 'final': '', 'url': ''},
                       {'name': "A3", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "A4", 'fed': null, 'final': '', 'url': ''}]},
            {'teams': [{'name': "B1", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "B2", 'fed': null, 'final': '', 'url': ''},
                       {'name': "B3", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "B4", 'fed': null, 'final': '', 'url': ''}]},
            {'teams': [{'name': "C1", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "C2", 'fed': null, 'final': '', 'url': ''},
                       {'name': "C3", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "C4", 'fed': null, 'final': '', 'url': ''}]},
            {'teams': [{'name': "D1", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "D2", 'fed': null, 'final': '', 'url': ''},
                       {'name': "D3", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "D4", 'fed': null, 'final': '', 'url': ''}]},
            {'teams': [{'name': "E1", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "E2", 'fed': null, 'final': '', 'url': ''},
                       {'name': "E3", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "E4", 'fed': null, 'final': '', 'url': ''}]},
            {'teams': [{'name': "F1", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "F2", 'fed': null, 'final': '', 'url': ''},
                       {'name': "F3", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "F4", 'fed': null, 'final': '', 'url': ''}]},
            {'teams': [{'name': "G1", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "G2", 'fed': null, 'final': '', 'url': ''},
                       {'name': "G3", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "G4", 'fed': null, 'final': '', 'url': ''}]},
            {'teams': [{'name': "H1", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "H2", 'fed': null, 'final': '', 'url': ''},
                       {'name': "H3", 'fed': null, 'final': '', 'url': ''}, 
                       {'name': "H4", 'fed': null, 'final': '', 'url': ''}]},
        ],
        'pots': [ {"teams": [{'name': "RUS", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "BRA", 'fed': 'CONMEBOL', 'chosen': false, 'final': false}, 
                             {'name': "BEL", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "GER", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "POL", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "POR", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "FRA", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "ARG", 'fed': 'UEFA', 'chosen': false, 'final': false}]}, 
                  {"teams": [{'name': "MEX", 'fed': 'CONCACAF', 'chosen': false, 'final': false}, 
                             {'name': "ENG", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "ESP", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "URU", 'fed': 'CONMEBOL', 'chosen': false, 'final': false}, 
                             {'name': "COL", 'fed': 'CONMEBOL', 'chosen': false, 'final': false}, 
                             {'name': "PER", 'fed': 'CONMEBOL', 'chosen': false, 'final': false}, 
                             {'name': "SUI", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "ITA", 'fed': 'UEFA', 'chosen': false, 'final': false}]},
                  {"teams": [{'name': "CRC", 'fed': 'CONCACAF', 'chosen': false, 'final': false}, 
                             {'name': "ISL", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "IRN", 'fed': 'AFC', 'chosen': false, 'final': false}, 
                             {'name': "EGY", 'fed': 'CAF', 'chosen': false, 'final': false}, 
                             {'name': "CRO", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "DEN", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "NGA", 'fed': 'CAF', 'chosen': false, 'final': false}, 
                             {'name': "SEN", 'fed': 'CAF', 'chosen': false, 'final': false}]},
                  {"teams": [{'name': "KOR", 'fed': 'AFC', 'chosen': false, 'final': false}, 
                             {'name': "KSA", 'fed': 'AFC', 'chosen': false, 'final': false}, 
                             {'name': "PAN", 'fed': 'CONCACAF', 'chosen': false, 'final': false}, 
                             {'name': "JPN", 'fed': 'AFC', 'chosen': false, 'final': false}, 
                             {'name': "AUS", 'fed': 'AFC', 'chosen': false, 'final': false}, 
                             {'name': "CIV", 'fed': 'CAF', 'chosen': false, 'final': false}, 
                             {'name': "SER", 'fed': 'UEFA', 'chosen': false, 'final': false}, 
                             {'name': "TUN", 'fed': 'CAF', 'chosen': false, 'final': false}]}   
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
                    this.selectTeam(pot, i);
                }, 1000*i + 200);
            }
        },
        'selectTeam': function(pot, groupIndex) {

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

            let canAddTeam = false;
            let drawnTeam = null;
            let allPotTeams = this.pots[index]['teams'];
            let eligibleTeams = allPotTeams.filter(e => e.chosen == false);

            while (!canAddTeam) {
                
                let drawnIndex = Math.floor(Math.random()*eligibleTeams.length);
                drawnTeam = eligibleTeams[drawnIndex];

                this.groups[groupIndex].teams[index].fed = drawnTeam.fed;

                canAddTeam = this.groupIsValid(this.groups[groupIndex]);
            }

            this.groups[groupIndex].teams[index]["url"] = drawnTeam.name;
            
            console.log(drawnTeam.name + " added to Group " + groupIndex + " spot " + index);

            for (let team of allPotTeams) {
                if (team.name === drawnTeam.name) {
                    team.chosen = true;
                }
            }

        },
        'groupIsValid': function(group) {
            const DIST = {"UEFA": 0, "CAF": 0, "AFC": 0, "CONMEBOL": 0, "CONCACAF": 0};
         
            for (let team of group.teams) {
                const federation = team.fed; 
                DIST[federation] += 1;
            };

            return (DIST.UEFA <= 2 && DIST.CAF <= 1 && DIST.AFC <= 1 && DIST.CONMEBOL <= 1 && DIST.CONCACAF <= 1);
        },

        'distributionIsValid': function() {
            let isValid = true;

            for (let group of this.groups) {
                isValid = isValid && this.groupIsValid(group);
            }

            alert(isValid);
            return isValid;
        },
        'teamIsChosen': function(team, potIndex, teamIndex) {
            return this.pots[potIndex]["teams"][teamIndex]["chosen"];
        },
        'buttonClick': function() {
            setTimeout(() => this.emptyPot("One"), 0);
            setTimeout(() => this.emptyPot("Two"), 10000);
            setTimeout(() => this.emptyPot("Three"), 20000);
            setTimeout(() => this.emptyPot("Four"), 30000);

        },
        'getImgPath': function(team) {
            return 'img/' + team + '.png';
        }
    }
})