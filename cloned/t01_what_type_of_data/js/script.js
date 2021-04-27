let var1 = 4, var2 = 10n, var3 = 'lol', var4 = true, var5 = null, var6, var7 = Object(), var8 = Symbol(), var9 = Math.sin;

alert('Variable types are: \n \n'
+ 'Variable №1 is - ' + typeof(var1) + '\n'     //Number
+ 'Variable №2 is - ' + typeof(var2) + '\n'     //BigInt
+ 'Variable №3 is - ' + typeof(var3) + '\n'     //Srting
+ 'Variable №4 is - ' + typeof(var4) + '\n'     //Boolean
+ 'Variable №5 is - ' + typeof(var5) + '\n'     //Object = Null (Famous BUG in JS)
+ 'Variable №6 is - ' + typeof(var6) + '\n'     //Undefined
+ 'Variable №7 is - ' + typeof(var7) + '\n'     //Object
+ 'Variable №8 is - ' + typeof(var8) + '\n'     //Symbol
+ 'Variable №9 is - ' + typeof(var9) + '\n');   //Function