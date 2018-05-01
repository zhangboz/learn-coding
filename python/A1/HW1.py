Python 3.5.2 (v3.5.2:4def2a2901a5, Jun 25 2016, 22:18:55) [MSC v.1900 64 bit (AMD64)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> # Stage 8
# inputs must be in list format.
# ex : M = [4], not M = 4
def stage8(hat, size, price, M):
	Mint = type(M) == int
	Mlist = type(M) == list
	if Mlist:
		lenth = len(hat) == len (size) and len (hat) == len(price) == len(M)
	elif Mint:
		lenth = len(hat) == len (size) and len (hat) == len(price)
	hattype = type(hat) == list
	sizetype = type(size) == list
	pricetype = type(price) == list
	Mtype = Mint or Mlist
	if lenth and hattype and sizetype and pricetype and Mtype:
		N = len (size)
		i = 0
		j = 1
		k = 0
		while j < N:
			maxval = size[i] >= size[j]
			if maxval:
				j = j + 1 #if big, proceed to the next number in list.
			else:	
				i = j	#if not big, start again from the next number.
				j = j + 1
# "i" is now saved as the location of the first biggest hat in lists.
		while k < N: #search the list for other hats that are also biggest.
			same_size = size[i] == size[k]
			if same_size and Mlist:					
				l = 0
				while l < M[k]:		#repeat printing M[k] items.
					print (hat[k], end="  ")
					print (price[k])
					l = l + 1
			elif same_size and Mint:
				l = 0
				while l < M:		#repeat printing M items.
					print (hat[k], end="  ")
					print (price[k])
					l = l + 1
			k = k + 1		#proceed to the next item in list.
	else:
		print ("Please check the input type.")
		print ("Acceptable inputs:")
		print ("hat: list of strings. Ex: ['a','b']")
		print ("size: list of integers. Ex: [1,2]")
		print ("price: list of integers. Ex: [1,2]")
		print ("M: list of integers or integer. Ex: [1,2] or 1")
#####################################################
# Example Imput Format		
#hat = ['fedora','trilby','sombrero']
#size = [5, 2, 7]
#price = [10, 20, 40]
#M = [1,2,3]; or M = 3
#stage8(hat, size, price, M)

>>> hat = ['fedora','trilby','sombrero','Normalhat']
>>> size = [5, 2, 7,7]
>>> price = [10, 20, 40,20]
>>> M=4
>>> stage8(hat, size, price, M)
sombrero  40
sombrero  40
sombrero  40
sombrero  40
Normalhat  20
Normalhat  20
Normalhat  20
Normalhat  20
>>> 
