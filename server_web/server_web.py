import socket
import os
# creeaza un server socket
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# specifica ca serverul va rula pe portul 5678, accesibil de pe orice ip al serverului
serversocket.bind(('', 5678))
# serverul poate accepta conexiuni; specifica cati clienti pot astepta la coada
serversocket.listen(5)

while True:
	print '#########################################################################'
	print 'Serverul asculta potentiali clienti.'
	# asteapta conectarea unui client la server
	# metoda `accept` este blocanta => clientsocket, care reprezinta socket-ul corespunzator clientului conectat
	(clientsocket, address) = serversocket.accept()
	print 'S-a conectat un client.'
	# se proceseaza cererea si se citeste prima linie de text
	cerere = ''
	linieDeStart = ''
	while True:
		data = clientsocket.recv(1024)
		cerere = cerere + data.decode()
		print 'S-a citit mesajul: \n---------------------------\n' + cerere + '\n---------------------------'
		pozitie = cerere.find('\r\n')
		if (pozitie > -1):
			linieDeStart = cerere[0:pozitie]
			print 'S-a citit linia de start din cerere: ##### ' + linieDeStart + ' #####'
			break
	print 'S-a terminat cititrea.'

	input1=linieDeStart.split(' ')[1]
	print input1
	rasp = ''
	if os.path.exists("../continut"+str(input1)):
		rasp+='HTTP/1.1 200 OK\r\n'
		rasp+='Content length: '+str(14+len(input1))+'\r\n'
	else:
		rasp+='HTTP/1.1 484 Not Found\r\n'
	rasp+='Server: MyHost \r\n'	
	rasp+='Content-Type: text/html\r\n'
	rasp+='Connection: close\r\n'

	rasp+='\r\n'
	if os.path.exists("../continut"+str(input1)):
		rasp+='Hello Word - '+ input1


		
	clientsocket.sendall(bytes(rasp))
	clientsocket.close()
	print 'S-a terminat comunicarea cu clientul.'