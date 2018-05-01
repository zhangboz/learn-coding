import sqlite3

database = sqlite3.connect("storage.db")
print("Input on the left:")
left1 = input()
print("Input on the right:")
left2 = input()
print("Inserted")

database.execute("INSERT INTO proofs VALUES('" + left1 + "', '" + left2 + "');")

database.commit()
database.close()
