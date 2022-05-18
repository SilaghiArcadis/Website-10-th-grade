 var intr=new Array();
var va=new Array();
var vb=new Array();
var vc=new Array();
var ea=new Array();
var eb=new Array();
var ec=new Array();
var corect="babcabaabcaccccccbbc";//varianta corecta de raspuns pentru fiecare intrebare
var nr_int=20;
var set=new Array();//setul intrebarilor alese

intr[0]="În timpul Celui De-al Doilea R&#259;zboi Mondial, Germania a fost condus&#259; de c&#259;tre: " 
va[0]="Otto von Bismarck"; 
vb[0]="Adolf Hitler"; 
vc[0]="presedinele Hindenburg"; 
ea[0]="R&#259;spuns incorect deoarece Adolf Hitler era cancelarul Germaniei. " 
eb[0]="R&#259;spuns corect !"; 
ec[0]="R&#259;spuns incorect deoarece Adolf Hitler era cancelarul Germaniei"; 





function genereaza()
{
	var ales=new Array();
	for(i=0;i<nr_int;i++)
		ales[i]=0;
	for(i=0;i<9;i++)
	{
		do
		{
			nr=Math.floor(Math.random()*nr_int);
		}while (ales[nr]!=0);
		ales[nr]=1;
		set[i]=nr;
	}
	return set;
}// JavaScript Document