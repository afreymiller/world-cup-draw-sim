
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

def simulate_draw():
    A = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    B = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    C = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    D = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    E = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    F = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    G = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}
    H = {"teams": [], "CAF": 0, "UEFA": 0, "CONMEBOL": 0, "AFC": 0, "CONCACAF": 0}

    rand_i = random.randint(0, len(pot_1)-1)
    A["teams"].append(pot_1.pop(rand_i))

    rand_i = random.randint(0, len(pot_1)-1)
    B["teams"].append(pot_1.pop(rand_i))

    rand_i = random.randint(0, len(pot_1)-1)
    C["teams"].append(pot_1.pop(rand_i))

    rand_i = random.randint(0, len(pot_1)-1)
    D["teams"].append(pot_1.pop(rand_i))

    rand_i = random.randint(0, len(pot_1)-1)
    E["teams"].append(pot_1.pop(rand_i))

    rand_i = random.randint(0, len(pot_1)-1)
    F["teams"].append(pot_1.pop(rand_i))

    rand_i = random.randint(0, len(pot_1)-1)
    G["teams"].append(pot_1.pop(rand_i))

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
    