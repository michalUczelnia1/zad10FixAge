
   function fixage(s)
   {
    var result="";
      var myLength=s.length;
      var isFirst =true;
      console.log(myLength);
      for (var i = 0; i < myLength; i++) 
      {
        if (s[i]>18&&s[i]<60) 
        {
          if(isFirst)
          {
            result+=s[i];
            isFirst=false;
          }
          else
          {
            result+=(","+s[i]);
          }
        }
      }
       console.log(s);
       if(result=="")
       {
        console.log("NA")
       }
       else
       {
        console.log(result)
       }
       
    }
 

   const x=[5,15,25,78,59,45];
   fixage(x);    
 