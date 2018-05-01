def f(hat, size, price):
	N = len(hat)
	for i in list(range(1,N+1)):
		print (hat[i-1], end="  ")
		print (size[i-1], end="  ")
		print (price[i-1])
		
#hat = ['fedora','trilby', 'sombrero']
#price = [10,20,40]
#size = [5,2,7]
#f(hat, size, price)