
file = open("groups_only.txt", "r")

for line in file:
    print(line.split(","))