 var intr=new Array();
var va=new Array();
var vb=new Array();
var vc=new Array();
var ea=new Array();
var eb=new Array();
var ec=new Array();
var corect="cabcabaabcaccccccbbc";//varianta corecta de raspuns pentru fiecare intrebare
var nr_int=20;
var set=new Array();//setul intrebarilor alese

intr[0]="O variabila : "
va[0]="este o data care îsi poate modifica valoarea pe parcursul prelucrarii.&#259;&acirc;&#539;&icirc;&nbsp;";
vb[0]="este o data care se identifica prin valoare.";
vc[0]="este o data care îsi poate modifica identificatorul pe parcursul prelucrarii.";
ea[0]="Corect , deoarece chiar daca o variabila are un nume unic, continutul ei poate fi diferit de la un moment la altul, pe parcursul executarii programului. "
eb[0]="Incorect, deoarece o variabila nu se identifica prin valoare, ci se identifica prin NUME.";
ec[0]="Incorect, deoarece identificatorul si caracteristicile(tip de data,domeniu de valori,set de operatii) sunt stabilite in momentul declaratiei si nu pot fi modificate pe parcursul algoritmului.";

intr[1]="Numele unei variabile poate sa înceapa cu : "
va[1]="cu underline sau litere";
vb[1]="cu cifre ";
vc[1]="cu paranteze";
ea[1]="Corect , pentru ca numele unei variabile poate sa înceapa NUMAI  cu litere sau underline."
eb[1]="Incorect, pentru ca numele unei variabile nu poate sa înceapa cu cifre , NUMAI  cu litere sau underline.";
ec[1]="Incorect, pentru ca numele unei variabile nu poate sa înceapa NUMAI  cu litere sau underline.";

intr[2]="Pentru înmultire se foloseste operatorul : "
va[2]="+";
vb[2]="*";
vc[2]="&&";
ea[2]="Incorect, deoarece operatorul “+” se foloseste pentru adunare."
eb[2]="Corect, deoarece operatorul “*” se foloseste pentru înmultire.";
ec[2]="Incorect, deoarece operatorul “&&” se foloseste pentru pentru a lega mai multe conditii. ";


intr[3]=" Daca a si b sunt doua variabile de tip întreg care retin 3, respectiv 7, atunci expresia a+3*b va avea valoarea : "
va[3]="42";
vb[3]="10";
vc[3]="24";
ea[3]="Incorect, deoarece 3+(3*7)=3+21=24."
eb[3]="Incorect, deoarece 3+(3*7)=3+21=24.";
ec[3]="Corect, deoarece 3+(3*7)=3+21=24.";


intr[4]=" Pentru împartire se foloseste operatorul : "
va[4]="/";
vb[4]="||";
vc[4]="+";
ea[4]='Corect, deoarece operatorul “/” se foloseste pentru împartire.'
eb[4]='Incorect, deoarece operatorul “||” se foloseste pentru pentru a lega 2 sau mai multe conditii.';
ec[4]='Incorect, deoarece “+” se foloseste pentru adunare.';

intr[5]="Daca b si c sunt doua variabile de tip întreg care retin 3, respectiv 30, atunci expresia b+c/10 va avea valoarea : "
va[5]="33";
vb[5]="6";
vc[5]="3";
ea[5]="Incorect, deoarece 3+30/10=3+3=6 ."
eb[5]="Corect, deoarece 3+30/10=3+3=6 .";
ec[5]="Incorect, deoarece 3+30/10=3+3=6 .";

intr[6]="Daca a si b sunt doua variabile de tip întreg care retin 6, respectiv 3, atunci expresia a%b va avea valoarea : "
va[6]="2";
vb[6]="8";
vc[6]="0";
ea[6]="Corect, deoarece 6:3=2 , rest 2 ."
eb[6]="Incorect, deoarece6:3=2 , rest 2 .";
ec[6]="Incorect, deoarece 6:3=2 , rest 2 .";

intr[7]="Expresiile relationale pot avea: "
va[7]="2 rezultate";
vb[7]="orice rezultat";
vc[7]="nu au niciun rezultat ";
ea[7]="Corect , deoarece expresiile relationale pot avea doar 2 rezultate, 1 si 0."
eb[7]="Incorect , deoarece expresiile relationale pot avea doar 2 rezultate, 1 si 0.";
ec[7]="Incorect, deoarece expresiile relationale pot avea doar 2 rezultate, 1 si 0.";

intr[8]=" Este obligatoriu ca în partea stânga a unei atribuiri sa fie o :"
va[8]="constanta";
vb[8]=" variabila";
vc[8]="expresie";
ea[8]="Incorect, deoarece o constanta nu îsi schimba valoarea, deci nu poate sta în stânga unei atribuiri."
eb[8]="Corect, deoarece este obligatoriu ca în partea stânga a unei atribuiri sa fie o variabila.";
ec[8]="Incorect, deoarece o expresie nu poate sta în stânga unei atribuiri;în stânga unei atribuiri poate exista doar o variabila;";


intr[9]="Operatorii relationali si logici se folosesc : "
va[9]="pentru efectuarea calculelor";
vb[9]= "pentru manipularea datelor";
vc[9]="pentru efectuarea de comparatii în vederea luarii unei decizii în cadrul algoritmului.";
ea[9]="Incorect , deoarece pentru efectuarea calculelor se folosesc operatorii aritmetici."
eb[9]="Incorect, deoarece pentru manipularea datelor se folosesc operatorii de atribuire.";
ec[9]="Corect ! Operatorii relationali si logici se folosesc pentru efectuarea de comparatii în vederea luarii unei decizii în cadrul algoritmului.";


intr[10]="Care este rezultatul expresiei  127%432 : "
va[10]="127";
vb[10]="0";
vc[10]="10";
ea[10]="Corect , deoarece 127 : 432 = 0, rest 127."
eb[10]="Incorect , deoarece 127 : 432 = 0, rest 127.";
ec[10]="Incorect , deoarece 127 : 432 = 0, rest 127";

intr[11]="Care este rezultatul expresiei  5>= 7: "
va[11]="7";
vb[11]="1";
vc[11]="0";
ea[11]="Incorect , deoarece 5<7 , deci rezultatul expresiei va fi 0(fals)."
eb[11]="Incorect, deoarece 5<7 , deci rezultatul expresiei va fi 0(fals), si nu 1.";
ec[11]="Corect ! rezultatul expresiei este 0(fals), deoarece 5 nu este mai mare sau egal decat 7.";

intr[12]=" Care este rezultatul expresiei  33/3 :"
va[12]="10";
vb[12]="3";
vc[12]="11";
ea[12]="Incorect , deoarece 33 :3=10 ."
eb[12]="Incorect, deoarece 33 :3=10 .";
ec[12]="Corect , deoarece 33 :3=10 .";


intr[13]="Care este rezultatul expresiei  33/4 : "
va[13]="10";
vb[13]="3";
vc[13]="8";
ea[13]="Incorect.Rezultatul împartirii lui 33 la 4 este 8.25 , dar daca ambii operanzi sunt numere întregi , rezultatul va fi numar întreg , deci rezultatul va fi 8 , si nu 10."
eb[13]="Incorect.Rezultatul împartirii lui 33 la 4 este 8.25 , dar daca ambii operanzi sunt numere întregi , rezultatul va fi numar întreg , deci rezultatul va fi 8 , si nu 3.";
ec[13]="Corect.Rezultatul împartirii lui 33 la 4 este 8.25 , dar daca ambii operanzi sunt numere întregi , rezultatul va fi numar întreg , deci rezultatul va fi 8.";


intr[14]="Care este rezultatul expresiei  !(5<=7) : "
va[14]="10";
vb[14]="1";
vc[14]="0";
ea[14]="Incorect , deoarece !(5<=7) = !(1) = 0 , deci rezultatul expresiei va fi 0(fals)."
eb[14]="Incorect, deoarece  !(5<=7) = !(1) = 0 , deci rezultatul expresiei va fi 0(fals) , si nu 1.";
ec[14]="Corect ! rezultatul expresiei este 0(fals), deoarece !(5<=7) = !(1) = 0.";

intr[15]="Care este rezultatul expresiei (5<=7)&&(13<6) : "
va[15]="5";
vb[15]="1";
vc[15]="0";
ea[15]="Incorect ,deoarece (5<=7)=1 si (13<6)=0 , deci (5<=7)&&(13<6) = 1 && 0 = 0."
eb[15]="Incorect ,deoarece (5<=7)=1 si (13<6)=0 , deci (5<=7)&&(13<6) = 1 && 0 = 0.";
ec[15]="Corect ! rezultatul expresiei este 1(adevarat) , deoarece (5<=7)=1 si (13<6)=0 , deci (5<=7)&&(13<6) = 1 && 0 = 0.";


intr[16]="Care este rezultatul expresiei (35<=7)||(4<=6) : "
va[16]="35";
vb[16]="1";
vc[16]="0";
ea[16]="Incorect ,deoarece expresia este una de tip logic , asa ca nu poate avea numai 2 valori(1 si 0)."
eb[16]="Incorect ! (35<=7) = 0 , (4<=6) = 1 , deci (35<=7)||(4<=6) = 0  || 1 = 1.";
ec[16]="Corect ! rezultatul expresiei este 1(adevarat) , deoarece (35<=7) = 0 , (4<=6) = 1 , deci(35<=7)||(4<=6) =  0  || 1 = 1.";

intr[17]=" Alege care nume de variabila este corect : "
va[17]="0_v_";
vb[17]="variabila";
vc[17]="+v";
ea[17]="Incorect, deoarece numele unei variabile nu poate sa înceapa numai cu litere sau underline."
eb[17]="Corect !!!";
ec[17]="Incorect, deoarece numele unei variabile nu poate sa înceapa numai cu litere sau underline.";


intr[18]="În urma atribuirii:  a <- 100 ;a <- 3, ce valoare se va gasi în variabila a ? "
va[18]="100";
vb[18]="3";
vc[18]="103";
ea[18]="Incorect, deoarece în memorie nu se pastreaza prima valoare atribuita lui a , ci ultima valoare atribuita lui a(în cazul nostru, se pastreaza 3).  "
eb[18]="Corect , deoarece în memorie se pastreaza ultima valoare atribuita lui a. ";
ec[18]="Incorect , deoarece în memorie se pastreaza ultima valoare atribuita lui a(în cazul nostru, se pastreaza 3) si nu se face nicio operatie de adunare.";


intr[19]="În urma atribuirii:  a <- 100+3, ce valoare se va gasi în variabila a ? "
va[19]="100";
vb[19]="3";
vc[19]="103";
ea[19]="Incorect, deoarece în memorie se pastreaza 103, rezultatul expresiei din dreapta."
eb[19]="Incorect, deoarece în memorie se pastreaza 103, rezultatul expresiei din dreapta.";
ec[19]="Corect , deoarece în memorie se pastreaza 103, rezultatul expresiei din dreapta.";



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