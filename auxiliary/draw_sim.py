
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

def get_random_team_confed_and_count(group, pot):
    rand_i = random.randint(0, len(pot)-1)
    team = pot.pop(rand_i)
    confed = teams[team]
    count = group.get(teams[team], 0)
    return team, confed, count

def group_is_valid(gp):
    return (gp["UEFA"] <= 2) and (gp["CONMEBOL"] <= 1) and (gp["CONCACAF"] <= 1) and (gp["CAF"] <= 1) and (gp["AFC"] <= 1)

def update_group(group, team, confed, count):
    group["teams"].append(team)
    group[confed] = count
    return group

def empty_pot(group, pot):
    team, confed, count = get_random_team_confed_and_count(group, pot)
    group = update_group(group, team, confed, count + 1)
    return group
 
def check_if_draw_is_valid(a, b, c, d, e, f, g, h):
    return a and b and c and d and e and f and g and h

def sim_draw():
    
    groups = create_groups()

    _a = group_is_valid(groups[0])
    _b = group_is_valid(groups[1])
    _c = group_is_valid(groups[2])
    _d = group_is_valid(groups[3])
    _e = group_is_valid(groups[4])
    _f = group_is_valid(groups[5])
    _g = group_is_valid(groups[6])
    _h = group_is_valid(groups[7])

    is_valid = check_if_draw_is_valid(_a, _b, _c, _d, _e, _f, _g, _h)

    while not is_valid:
        groups = create_groups()

        _a = group_is_valid(groups[0])
        _b = group_is_valid(groups[1])
        _c = group_is_valid(groups[2])
        _d = group_is_valid(groups[3])
        _e = group_is_valid(groups[4])
        _f = group_is_valid(groups[5])
        _g = group_is_valid(groups[6])
        _h = group_is_valid(groups[7])

        is_valid = check_if_draw_is_valid(_a, _b, _c, _d, _e, _f, _g, _h)
        #print(is_valid)

    print(groups[0]["teams"])
    print(groups[1]["teams"])
    print(groups[2]["teams"])
    print(groups[3]["teams"])
    print(groups[4]["teams"])
    print(groups[5]["teams"])
    print(groups[6]["teams"])
    print(groups[7]["teams"])

def create_groups():
    pot_1 = ["GER", "POR", "BEL", "SUI", "POL", "BRA", "ARG"]
    pot_2 = ["ESP", "WAL", "FRA", "COL", "MEX", "ENG", "URU", "CHI"]
    pot_3 = ["ITA", "HSV", "CRC", "IRN", "USA", "EGY", "TUN", "SER"]
    pot_4 = ["B&H", "JPN", "NGA", "BUR", "AUS", "KOR", "KSA", "CIV"]

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

    A = empty_pot(A, pot_2)
    B = empty_pot(B, pot_2)
    C = empty_pot(C, pot_2)
    D = empty_pot(D, pot_2)
    E = empty_pot(E, pot_2)
    F = empty_pot(F, pot_2)
    G = empty_pot(G, pot_2)
    H = empty_pot(H, pot_2)

    A = empty_pot(A, pot_3)
    B = empty_pot(B, pot_3)
    C = empty_pot(C, pot_3)
    D = empty_pot(D, pot_3)
    E = empty_pot(E, pot_3)
    F = empty_pot(F, pot_3)
    G = empty_pot(G, pot_3)
    H = empty_pot(H, pot_3)

    A = empty_pot(A, pot_4)
    B = empty_pot(B, pot_4)
    C = empty_pot(C, pot_4)
    D = empty_pot(D, pot_4)
    E = empty_pot(E, pot_4)
    F = empty_pot(F, pot_4)
    G = empty_pot(G, pot_4)
    H = empty_pot(H, pot_4)

    return [A, B, C, D, E, F, G, H]
     

def simulate_draw_n_times(n):
    pass
    