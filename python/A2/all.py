import sqlite3

database = sqlite3.connect("storage.db")


result = database.execute("SELECT left, right FROM proofs;").fetchall()
length = len(result)
current_result = 0
while current_result < length:
    print(result[current_result][0], end = "|")
    print(result[current_result][1])
    print("")
    current_result = current_result +1
print("end of table")
