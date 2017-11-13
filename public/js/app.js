new Vue({
    'el': '#app',
    'data': {
        showLoader: false,
        date: (new Date(2017, 11, 1)),
                diff: null,
                now: null,
                days: null, 
                hours: null, 
                minutes: null,
                seconds: null,
        'groups': [
            {'teams': [{'name': "A1", 'fed': 'UEFA', 'url': 'RUS'}, 
                       {'name': "A2", 'fed': null, 'url': 'stamp1'},
                       {'name': "A3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "A4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "B1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "B2", 'fed': null, 'url': 'stamp1'},
                       {'name': "B3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "B4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "C1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "C2", 'fed': null, 'url': 'stamp1'},
                       {'name': "C3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "C4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "D1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "D2", 'fed': null, 'url': 'stamp1'},
                       {'name': "D3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "D4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "E1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "E2", 'fed': null, 'url': 'stamp1'},
                       {'name': "E3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "E4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "F1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "F2", 'fed': null, 'url': 'stamp1'},
                       {'name': "F3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "F4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "G1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "G2", 'fed': null, 'url': 'stamp1'},
                       {'name': "G3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "G4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "H1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "H2", 'fed': null, 'url': 'stamp1'},
                       {'name': "H3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "H4", 'fed': null, 'url': 'stamp1'}]},
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
                }, 500*i + 200);
            }
        },
        'teamInGroupIsValid': function(team, group) {
            const currCount = group.filter(e => e.fed === team.fed).length;
            const limits = {"UEFA": 2, "CONCACAF": 1, "CAF": 1, "AFC": 1, "CONMEBOL": 1};
            return limits[team.fed] > currCount;
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

            /* Just pull up all eligible teams */
            const eligibleTeams = this.getAllEligibleTeams(pot, groupIndex);
            const randIndex = Math.floor(Math.random() * eligibleTeams.length);
            const drawnTeam = eligibleTeams[randIndex];

            this.groups[groupIndex].teams[pot]["url"] = drawnTeam.name;
            this.groups[groupIndex].teams[pot]["fed"] = drawnTeam.fed;

            const allPotTeams = this.pots[pot]['teams'];

            for (let team of allPotTeams) {
                if (team.name === drawnTeam.name) {
                    team.chosen = true;
                    break;
                }
            }

        },

        'teamIsChosen': function(team, potIndex, teamIndex) {
            return this.pots[potIndex]["teams"][teamIndex]["chosen"];
        },
        'buttonClick': function() {

            this.showLoader = true;

            this.groups = [
            {'teams': [{'name': "A1", 'fed': 'UEFA', 'url': 'RUS'}, 
                       {'name': "A2", 'fed': null, 'url': 'stamp1'},
                       {'name': "A3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "A4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "B1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "B2", 'fed': null, 'url': 'stamp1'},
                       {'name': "B3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "B4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "C1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "C2", 'fed': null, 'url': 'stamp1'},
                       {'name': "C3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "C4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "D1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "D2", 'fed': null, 'url': 'stamp1'},
                       {'name': "D3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "D4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "E1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "E2", 'fed': null, 'url': 'stamp1'},
                       {'name': "E3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "E4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "F1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "F2", 'fed': null, 'url': 'stamp1'},
                       {'name': "F3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "F4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "G1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "G2", 'fed': null, 'url': 'stamp1'},
                       {'name': "G3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "G4", 'fed': null, 'url': 'stamp1'}]},
            {'teams': [{'name': "H1", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "H2", 'fed': null, 'url': 'stamp1'},
                       {'name': "H3", 'fed': null, 'url': 'stamp1'}, 
                       {'name': "H4", 'fed': null, 'url': 'stamp1'}]},
        ];

        this.pots = [ {"teams": [{'name': "RUS", 'fed': 'UEFA', 'chosen': true}, 
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
        ];


            setTimeout(() => this.emptyPot(0), 0);
            setTimeout(() => this.emptyPot(1), 4250);
            setTimeout(() => this.emptyPot(2), 8500);
            setTimeout(() => this.emptyPot(3), 12750);
            setTimeout(() => this.showLoader = false, 17000);

        },
        'getImgPath': function(team) {
            return 'img/' + team + '.png';
        }
    },
     mounted() {
                interval = setInterval(() => {
                    this.now = (new Date());
                    this.diff = Math.abs(this.date - this.now);
                    this.days = Math.floor(this.diff / 86400000);
                    this.hours = Math.floor( Math.floor((Math.floor(this.diff % 86400000)) / 3600000));
                    this.minutes = Math.floor( Math.floor((Math.floor(this.diff % 86400000)) % 3600000) / 60000);
                    this.seconds =  Math.floor(Math.floor(Math.floor((Math.floor(this.diff % 86400000)) % 3600000) % 60000) / 1000);
                }, 1000)
            }
    })