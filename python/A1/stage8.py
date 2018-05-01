def stage8(hat, size, price, M):
	hatvar = hat
	sizevar = size
	pricevar = price
	N = len (sizevar)
	i = 0
	j = 0
	k = 0
	while j < M:
		maxval = sizevar[i]
		while i < N:
			if sizevar[i] > maxval:
				maxval = sizevar [i]
				k = i
			i = i + 1
	# i = N now, k is the position of the max
		print (hatvar[k],end = "	")
		print (pricevar[k])
		del hatvar[k]
		del sizevar[k]
		del pricevar[k]
		j = j + 1
		N = len(sizevar)
		i = 0
		k = 0