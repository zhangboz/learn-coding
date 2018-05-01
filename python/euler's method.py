import math
x = 0.0
y = 2.0
dx = 0.2

for i in range(1, 10):
 dydx = 1/(math.cos(y))
 x = x + dx
 y = y + dydx*dx
 print (x, y)