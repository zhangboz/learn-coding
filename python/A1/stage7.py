def f(hat, size, price):
	N = len (size)
	i = 0
	j = 1
	while j < N:
		maxval = size[i] >= size[j]
		if maxval:
			j = j + 1
		else:
			i = j
			j = j + 1
		
	print ('The biggest hat is in size ', end="")
	print (size[i],end = ' named ')
	print (hat[i], end=" for $")
	print (price[i], end=".")
	
#hat = ['fedora','trilby', 'sombrero']
#price = [10,20,40]
#size = [5,2,7]
#f(hat, size, price)