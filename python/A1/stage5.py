def f(x):
	N = len (x)
	i = 0
	j = 1
	while j < N:
		maxval = x[i] >= x[j]
		if maxval:
			j = j + 1
		else:
			i = j
			j = j + 1
		
	print ('The largest value is ', end="")
	print (x[i],end=".")

#f ([2,4,1,5,7,9,13,18,10])