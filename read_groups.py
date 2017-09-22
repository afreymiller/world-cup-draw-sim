
file = open("groups_only.txt", "r")

for line in file:
    print(line)
    l_strip = line.strip("]")
    r_strip = l_strip.strip("]")
    print(r_strip)