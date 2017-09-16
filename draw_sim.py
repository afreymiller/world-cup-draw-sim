
import random

teams = {
    "RUS": "UEFA", "GER": "UEFA", "POR": "UEFA", "BEL": "UEFA",
    "POL": "UEFA", "SUI": "UEFA", "FRA": "UEFA", "ESP": "UEFA",
    "WAL": "UEFA", "ENG": "UEFA", "ITA": "UEFA", "HSV": "UEFA",
    "B&H": "UEFA", "SER": "UEFA", "USA": "CONCACAF", "MEX": "CONCACAF",
    "CRC": "CONCACAF", "BRA": "CONMEBOL", "ARG": "CONMEBOL", "COL": "CONMEBOL",
    "CHI": "CONMEBOL", "URU": "CONMEBOL", "AUS": "AFC", "IRN": "AFC",
    "KOR": "AFC", "KSA": "AFC", "JPN": "AFC", "NGA": "CAF",
    "BUR": "CAF", "CIV": "CAF", "EGY": "CAF", "TUN": "CAF"
}

pot_1 = ["GER", "POR", "BEL", "SUI", "POL", "BRA", "ARG"]
pot_2 = ["ESP", "WAL", "FRA", "COL", "MEX", "ENG", "URU", "CHI"]
pot_3 = ["ITA", "HSV", "CRC", "IRN", "USA", "EGY", "TUN", "SER"]
pot_4 = ["B&H", "JPN", "NGA", "BUR", "AUS", "KOR", "KSA", "CIV"]

def get_random_team_confed_and_count(group, pot):
    rand_i = random.randint(0, len(pot)-1)
    team = pot.pop(rand_i)
    confed = teams[team]
    count = group.get(teams[team], 0)
    return team, confed, count

def team_can_be_added_to_group(count, confed):
    return (count == 0) or (count == 1 and confed == "UEFA")

def update_group(group, team, confed, count):
    group["teams"].append(team)
    group[confed] = count
    return group

def empty_pot(group, pot):
    
    team, confed, count = get_random_team_confed_and_count(group, pot)
    can_be_added = team_can_be_added_to_group(count, confed)

    while not can_be_added:
        pot.append(team)
        team, confed, count = get_random_team_confed_and_count(group, pot)
        can_be_added = team_can_be_added_to_group(count, confed)

    group = update_group(group, team, confed, count + 1)
    return group
 

        

def simulate_draw():
    A = {"teams": ["RUS"], "CAF": 0, "UEFA": 1, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    B = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    C = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    D = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    E = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    F = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    G = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    H = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}

    B = empty_pot(B, pot_1)
    C = empty_pot(C, pot_1)
    D = empty_pot(D, pot_1)
    E = empty_pot(E, pot_1)
    F = empty_pot(F, pot_1)
    G = empty_pot(G, pot_1)
    H = empty_pot(H, pot_1)

    print(A)
    print(B)
    print(C)
    print(D)
    print(E)
    print(F)
    print(G)
    print(H)



     

def simulate_draw_n_times(n):
    pass
    