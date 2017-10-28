new Vue({
    'el': '#app',
    'data': {

        'groups': [
            {'teams': [{'name': "A1", 'fed': 'UEFA', 'final': '', 'url': 'RUS'}, 
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
        'pots': [ {"teams": [{'name': "RUS", 'fed': 'UEFA', 'chosen': true}, 
                             {'name': "BRA", 'fed': 'CONMEBOL', 'chosen': false}, 
                             {'name': "BEL", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "GER", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "POL", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "POR", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "FRA", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "ARG", 'fed': 'CONMEBOL', 'chosen': false}]}, 
                  {"teams": [{'name': "MEX", 'fed': 'CONCACAF', 'chosen': false}, 
                             {'name': "ENG", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "ESP", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "URU", 'fed': 'CONMEBOL', 'chosen': false}, 
                             {'name': "COL", 'fed': 'CONMEBOL', 'chosen': false}, 
                             {'name': "PER", 'fed': 'CONMEBOL', 'chosen': false}, 
                             {'name': "SUI", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "ITA", 'fed': 'UEFA', 'chosen': false}]},
                  {"teams": [{'name': "CRC", 'fed': 'CONCACAF', 'chosen': false}, 
                             {'name': "ISL", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "IRN", 'fed': 'AFC', 'chosen': false}, 
                             {'name': "EGY", 'fed': 'CAF', 'chosen': false}, 
                             {'name': "CRO", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "DEN", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "NGA", 'fed': 'CAF', 'chosen': false}, 
                             {'name': "SEN", 'fed': 'CAF', 'chosen': false}]},
                  {"teams": [{'name': "KOR", 'fed': 'AFC', 'chosen': false}, 
                             {'name': "KSA", 'fed': 'AFC', 'chosen': false}, 
                             {'name': "PAN", 'fed': 'CONCACAF', 'chosen': false}, 
                             {'name': "JPN", 'fed': 'AFC', 'chosen': false}, 
                             {'name': "AUS", 'fed': 'AFC', 'chosen': false}, 
                             {'name': "CIV", 'fed': 'CAF', 'chosen': false}, 
                             {'name': "SER", 'fed': 'UEFA', 'chosen': false}, 
                             {'name': "TUN", 'fed': 'CAF', 'chosen': false}]}   
        ]
    },
    'methods': {
        'emptyPot': function(pot) {
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    this.selectTeam(pot, i);
                }, 1000*i + 200);
            }
        },
        'getAllEligibleTeams': function(pot, groupIndex, fed) {
            let gp_dist = {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0};
            const eligibleTeams = allPotTeams.filter(e => e.chosen == false);
        },
        'selectTeam': function(pot, groupIndex) {

            if (pot === 0) {
                groupIndex++;
            }

            let canAddTeam = false;
            let drawnTeam = null;
            let allPotTeams = this.pots[pot]['teams'];

            /* This is where I need to find out how to get only eligible teams that won't cause an issue */
            let eligibleTeams = allPotTeams.filter(e => e.chosen == false);

            while (!canAddTeam) {
                
                let drawnIndex = Math.floor(Math.random()*eligibleTeams.length);
                drawnTeam = eligibleTeams[drawnIndex];

                this.groups[groupIndex].teams[pot].fed = drawnTeam.fed;

                canAddTeam = this.groupIsValid(this.groups[groupIndex]);
            }

            this.groups[groupIndex].teams[pot]["url"] = drawnTeam.name;
            
           // console.log(drawnTeam.name + " added to Group " + groupIndex + " spot " + index);

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
            setTimeout(() => this.emptyPot(0), 0);
            setTimeout(() => this.emptyPot(1), 10000);
            setTimeout(() => this.emptyPot(2), 20000);
            setTimeout(() => this.emptyPot(3), 30000);

        },
        'getImgPath': function(team) {
            return 'img/' + team + '.png';
        }
    }
})