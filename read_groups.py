
def trim(team):
    x = team.rstrip()
    y = team.strip(" ")
    return y

def clean_groups(file_name):
    file = open(file_name, "r")

    for line in file:
        split_group = line.split(",")
        group = [trim(t) for t in split_group]
        print(group)


clean_groups("groups_only.txt")