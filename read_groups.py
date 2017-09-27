
def trim(team):
    x = team.replace("\n", "")
    return x

def clean_groups(file_name):
    file = open(file_name, "r")
    groups = []

    for line in file:
        split_group = line.split(",")
        g = [trim(x) for x in split_group]
        groups.append(g)

    return groups

def get_team_count(team, groups):
    count = 0

    for g in groups:
        if team in g:
            count += 1
    
    return count

def get_all_team_counts(groups):
    arg = get_team_count("ARG", groups)
    aus = get_team_count("AUS", groups)
    bel = get_team_count("BEL", groups)
    bh  = get_team_count("B&H", groups)
    bra = get_team_count("BRA", groups)
    bur = get_team_count("BUR", groups)
    chi = get_team_count("CHI", groups)
    civ = get_team_count("CIV", groups)
    col = get_team_count("COL", groups)
    crc = get_team_count("CRC", groups)
    egy = get_team_count("EGY", groups)
    eng = get_team_count("ENG", groups)
    esp = get_team_count("ESP", groups)
    fra = get_team_count("FRA", groups)
    ger = get_team_count("GER", groups)
    hsv = get_team_count("HSV", groups)
    irn = get_team_count("IRN", groups)
    ita = get_team_count("ITA", groups)
    jpn = get_team_count("JPN", groups)
    kor = get_team_count("KOR", groups)
    ksa = get_team_count("KSA", groups)
    mex = get_team_count("MEX", groups)
    nga = get_team_count("NGA", groups)
    pol = get_team_count("POL", groups)
    por = get_team_count("POR", groups)
    rus = get_team_count("RUS", groups)
    ser = get_team_count("SER", groups)
    sui = get_team_count("SUI", groups)
    tun = get_team_count("TUN", groups)
    uru = get_team_count("URU", groups)
    usa = get_team_count("USA", groups)
    wal = get_team_count("WAL", groups)
    
    print("ARG: " + str(arg))
    print("AUS: " + str(aus))
    print("BEL: " + str(bel))
    print("B&H: " + str(bh))
    print("BRA: " + str(bra))
    print("BUR: " + str(bur))
    print("CHI: " + str(chi))
    print("CIV: " + str(civ))
    print("COL: " + str(col))
    print("CRC: " + str(crc))
    print("EGY: " + str(egy))
    print("ENG: " + str(eng))
    print("ESP: " + str(esp))
    print("FRA: " + str(fra))
    print("GER: " + str(ger))
    print("HSV: " + str(hsv))
    print("IRN: " + str(irn))
    print("ITA: " + str(ita))
    print("JPN: " + str(jpn))
    print("KOR: " + str(kor))
    print("KSA: " + str(ksa))
    print("MEX: " + str(mex))
    print("NGA: " + str(nga))
    print("POL: " + str(pol))
    print("POR: " + str(por))
    print("RUS: " + str(rus))
    print("SER: " + str(ser))
    print("SUI: " + str(sui))
    print("TUN: " + str(tun))
    print("URU: " + str(uru))
    print("USA: " + str(usa))
    print("WAL: " + str(wal)) 

def aggregate_groups(groups):
    group_counts = {}

    for g in groups:
        g_as_str = ''.join(g)
        v = group_counts.get(g_as_str, 0)
        group_counts[g_as_str] = v + 1

    return group_counts

def get_opponents_dict(team, groups):
    counts = {}

    for g in groups:
        if team in g:
            for opp in g:
                v = counts.get(opp, 0)
                counts[opp] = v+1

    counts.pop(team, None)

    return counts

def __main__():
    groups = clean_groups("draws.txt")
    
    opponents = get_opponents_dict("USA", groups)
    print(opponents)