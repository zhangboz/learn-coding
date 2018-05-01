def f(x):
	N = len(x)
	for i in list(range(1,N+1)):
		print (i, end="        ")
		print (x[i-1])
		
#f(['tom','jerry','bob','billy'])