import pyodbc

conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=localhost;'
                      'Database=user;'
                      'Trusted_Connection=yes;')

cursor = conn.cursor()
cursor.execute('SELECT * FROM user.table')

for row in cursor:
    print(row)


