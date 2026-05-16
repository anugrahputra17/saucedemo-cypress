test case 
 [Login]
positif :
- berhasil login

negative:
- empty username
- empty password
- empty username and password
- wrong username
- wrong password

[inventory]
positif:
- berhasil tampil halaman product, nama, harga dan button add to cart 
- berhasil add to cart (button add to cart change to remove button & badge number show increment)
- sorting ascending
- sort descending
- sort price high to low
- sort price low to high
- remove (button remove change to add to cart & badge number in market decrement)

[cart]
positif :
- berhasil tampil halaman cart dengan element nama, price , qty , remove button and checkout button
- berhasil checkout
- berhasil remove (angka 1 di cart hilang)
- berhasil continue shopping button (angka 1 masih ada di cart)

[checkout]
- verify UI checkout page
- empty all field
- empty first name
- empty last name
- empty zip code
- zip code less than 5 digit
- zip code more than 5 digit
- berhasil checkout
