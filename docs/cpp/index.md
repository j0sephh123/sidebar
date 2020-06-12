# 1

## Types
### Arithmetic Types
Integral and floating type
- bool  
- char - 8 bits  
- short - 16 bits  
- int - 16 bits  
- long - 32 bits
- long long 64 bits
- float 
- double
- long double

__signed__ or __unsigned__
`unsigned int`

Example: 8-bit _unsigned char_ can hold the values from 0 through 255
8-bit _signed char_ can hold values from -128 through 127

::: tip calculations
Use _double_ for them, not float, because it isn't precise
:::

### Type Conversions
`bool b = 43` // b is true, only will be false if the value is 0
`int i = b` // it will be 1 or 0
`i = 3.14` // i has value 3
`unsigned char c = -1` // c has value 255. If we assign outside of its range, the compiler assigns the remainder of that value modulo 256

### Literals
value of 20:
- `20` - decimal
- `024` - octal
- `0x14` - hexadecimal

`'a'` // character literal
`"Hello"` // string literal
  
__Specifying the type of a literal__:
- u - unicode 16 character
- u or U - _unsigned
- l or L - long
- ll or LL - long long
- f or F - float
- l or L - long double

## Variables