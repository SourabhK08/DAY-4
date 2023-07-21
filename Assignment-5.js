function largestNumber(a, b, c) 
{
    if(a>=b && a>=c)
    {
        return a;
    }

    else if(b>=a && b>=c)
    {
        return b;
    }
    
    else
    {
        return c;
    }
}
  
  // Test cases
  const num1 = 10;
  const num2 = 8;
  const num3 = 17;
  
  const Number = largestNumber(num1, num2, num3);
  console.log(`The largest number is: ${Number}`);
  