
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

pot_1 = ["RUS", "GER", "POR", "BEL", "SUI", "POL", "BRA", "ARG"]
pot_2 = ["ESP", "WAL", "FRA", "COL", "MEX", "ENG", "URU", "CHI"]
pot_3 = ["ITA", "HSV", "CRC", "IRN", "USA", "EGY", "TUN", "SER"]
pot_4 = ["B&H", "JPN", "NGA", "BUR", "AUS", "KOR", "KSA", "CIV"]

def empty_1(group):
    rand_i = random.randint(0, len(pot_1)-1)
    team = pot_1.pop(rand_i)
    group["teams"].append(team)
    k = teams[team]
    v = teams.get(teams[team], 0)
    group[k] = v + 1 

def simulate_draw():
    A = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    B = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    C = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    D = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    E = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    F = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    G = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    H = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}

    empty_1(A)
    empty_1(B)
    empty_1(C)
    empty_1(D)
    empty_1(E)
    empty_1(F)
    empty_1(G)

    H["teams"].append(pot_1[0])

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
    