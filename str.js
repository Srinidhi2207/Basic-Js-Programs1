
let num=1234;
let rev=0;
for(;num>0;num=Math.floor(num/10))
{
    rev=rev*10+num%10;
}console.log("reverse of num:"+rev);