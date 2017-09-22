
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

def get_team_counts(team, groups):
    count = 0

    for g in groups:
        if team in g:
            count += 1
    
    return count

def __main__():
    groups = clean_groups("groups_only.txt")
    arg = get_team_counts("ARG", groups)
    aus = get_team_counts("AUS", groups)
    bel = get_team_counts("BEL", groups)
    bh  = get_team_counts("B&H", groups)
    bra = get_team_counts("BRA", groups)
    bur = get_team_counts("BUR", groups)
    chi = get_team_counts("CHI", groups)
    civ = get_team_counts("CIV", groups)
    col = get_team_counts("COL", groups)
    crc = get_team_counts("CRC", groups)
    egy = get_team_counts("EGY", groups)
    eng = get_team_counts("ENG", groups)
    esp = get_team_counts("ESP", groups)
    fra = get_team_counts("FRA", groups)
    ger = get_team_counts("GER", groups)
    hsv = get_team_counts("HSV", groups)
    irn = get_team_counts("IRN", groups)
    ita = get_team_counts("ITA", groups)
    jpn = get_team_counts("JPN", groups)
    kor = get_team_counts("KOR", groups)
    ksa = get_team_counts("KSA", groups)
    mex = get_team_counts("MEX", groups)
    nga = get_team_counts("NGA", groups)
    pol = get_team_counts("POL", groups)
    por = get_team_counts("POR", groups)
    rus = get_team_counts("RUS", groups)
    ser = get_team_counts("SER", groups)
    sui = get_team_counts("SUI", groups)
    tun = get_team_counts("TUN", groups)
    uru = get_team_counts("URU", groups)
    usa = get_team_counts("USA", groups)
    wal = get_team_counts("WAL", groups)
    
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
