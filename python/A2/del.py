import sqlite3

database = sqlite3.connect("storage.db")
print("What do you want to delete?")
victim = input()
result = database.execute("SELECT left, right FROM proofs;").fetchall()
length_i = len(result)
results = database.execute("DELETE FROM proofs WHERE left='"+ victim +"' OR right='"+ victim +"';")
result = database.execute("SELECT left, right FROM proofs;").fetchall()
length_f = len(result)
N = length_i - length_f
print(N)
database.commit()
database.close()
