new Vue({
    'el': '#app',
    'data': {

        'groups': [
            {'teams': [{'name': "A1", 'fed': 'UEFA', 'url': 'RUS'}, 
                       {'name': "A2", 'fed': null, 'url': ''},
                       {'name': "A3", 'fed': null, 'url': ''}, 
                       {'name': "A4", 'fed': null, 'url': ''}]},
            {'teams': [{'name': "B1", 'fed': null, 'url': ''}, 
                       {'name': "B2", 'fed': null, 'url': ''},
                       {'name': "B3", 'fed': null, 'url': ''}, 
                       {'name': "B4", 'fed': null, 'url': ''}]},
            {'teams': [{'name': "C1", 'fed': null, 'url': ''}, 
                       {'name': "C2", 'fed': null, 'url': ''},
                       {'name': "C3", 'fed': null, 'url': ''}, 
                       {'name': "C4", 'fed': null, 'url': ''}]},
            {'teams': [{'name': "D1", 'fed': null, 'url': ''}, 
                       {'name': "D2", 'fed': null, 'url': ''},
                       {'name': "D3", 'fed': null, 'url': ''}, 
                       {'name': "D4", 'fed': null, 'url': ''}]},
            {'teams': [{'name': "E1", 'fed': null, 'url': ''}, 
                       {'name': "E2", 'fed': null, 'url': ''},
                       {'name': "E3", 'fed': null, 'url': ''}, 
                       {'name': "E4", 'fed': null, 'url': ''}]},
            {'teams': [{'name': "F1", 'fed': null, 'url': ''}, 
                       {'name': "F2", 'fed': null, 'url': ''},
                       {'name': "F3", 'fed': null, 'url': ''}, 
                       {'name': "F4", 'fed': null, 'url': ''}]},
            {'teams': [{'name': "G1", 'fed': null, 'url': ''}, 
                       {'name': "G2", 'fed': null, 'url': ''},
                       {'name': "G3", 'fed': null, 'url': ''}, 
                       {'name': "G4", 'fed': null, 'url': ''}]},
            {'teams': [{'name': "H1", 'fed': null, 'url': ''}, 
                       {'name': "H2", 'fed': null, 'url': ''},
                       {'name': "H3", 'fed': null, 'url': ''}, 
                       {'name': "H4", 'fed': null, 'url': ''}]},
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
        'teamInGroupIsValid': function(team, group) {
            const UEFA = group.filter(e => e.fed === "UEFA").length;
            const CONCACAF = group.filter(e => e.fed === "CONCACAF").length;
            const CAF = group.filter(e => e.fed === "CAF").length;
            const AFC = group.filter(e => e.fed === "AFC").length;
            const CONMEBOL = group.filter(e => e.fed === "CONMEBOL").length;

            if (team.fed === "UEFA") {
                return UEFA < 2;
            }
            else if (team.fed === "CONCACAF") {
                return CONCACAF < 1;
            }
            else if (team.fed === "CAF") {
                return CAF < 1;
            }
            else if (team.fed === "AFC") {
                return AFC < 1;
            }
            else {
                return CONMEBOL < 1;
            }
        },
        'federationMustBeChosenNow': function(fed, teamsToDraw, groupIndex) {
            const groupsToFill = teamsToDraw.length;
            let fedCount = 0;
            let groupsWithFedTeam = 0;
            for (let team of teamsToDraw) {
                if (team.fed === fed) {
                    fedCount++;
                }
            }
            for (let i = groupIndex; i < 8; i++){
                let euroCount = 0;
                for (let j = 0; j < 4; j++) {
                    if (this.groups[i].teams[j].fed === fed) {
                        if (fed === "UEFA") {
                            euroCount++;
                            if (euroCount === 2) {
                                groupsWithFedTeam++;
                                break;
                            }
                        }
                        else {
                            groupsWithFedTeam++;
                        }
                    }
                }
            }

            return ((groupsToFill - fedCount) <= groupsWithFedTeam);
            
        },
        'getAllEligibleTeams': function(pot, groupIndex) {

            let allPotTeams = this.pots[pot]['teams'];
            let originalTeams = allPotTeams.filter(e => e.chosen === false);

            if (pot === 0) {
                return originalTeams;
            }
        
            else {
                const group = this.groups[groupIndex].teams;
                let eligibleTeams = originalTeams.filter(e => this.teamInGroupIsValid(e, group) === true);

                let blockerFederation = null;

                let federationsInPot = [];

                for (let team of eligibleTeams) {
                    if (federationsInPot.indexOf(team.fed) === -1) {
                        federationsInPot.push(team.fed);
                    }
                }

                for (let i = 0; i < federationsInPot.length; i++) {
                    if (this.federationMustBeChosenNow(federationsInPot[i], originalTeams, groupIndex)) {
                        blockerFederation = federationsInPot[i];
                        break;
                    }
                }

                if (!!blockerFederation) {
                    eligibleTeams = eligibleTeams.filter(e => e.fed === blockerFederation);
                }

                return eligibleTeams;
            }
            
        },
        'selectTeam': function(pot, groupIndex) {

            if (pot === 0) {
                groupIndex++;
            }

            let canAddTeam = false;
            let drawnTeam = null;
            let allPotTeams = this.pots[pot]['teams'];

            /* Just pull up all eligible teams */
            const eligibleTeams = this.getAllEligibleTeams(pot, groupIndex);
            const randIndex = Math.floor(Math.random() * eligibleTeams.length);

            drawnTeam = eligibleTeams[randIndex];

            this.groups[groupIndex].teams[pot]["url"] = drawnTeam.name;
            this.groups[groupIndex].teams[pot]["fed"] = drawnTeam.fed;

            for (let team of allPotTeams) {
                if (team.name === drawnTeam.name) {
                    team.chosen = true;
                }
            }

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