import sqlite3

database = sqlite3.connect("storage.db")
database.execute("DROP TABLE IF EXISTS proofs;")
database.execute("CREATE TABLE proofs(left, right);")
database.commit() #creates 'sample.db' and <users> table in it with 3 columns
database.close()
print("Deleted!")
