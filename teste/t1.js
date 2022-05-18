 var intr=new Array();
var va=new Array();
var vb=new Array();
var vc=new Array();
var ea=new Array();
var eb=new Array();
var ec=new Array();
var corect="bbccbacccbbabaccacbb";//varianta corecta de raspuns pentru fiecare intrebare
var nr_int=20;
var set=new Array();//setul intrebarilor alese

intr[0]="&icirc;n timpul Celui De-al Doilea R&#259;zboi Mondial, Germania a fost condus&#259; de c&#259;tre: " 
va[0]="Otto von Bismarck"; 
vb[0]="Adolf Hitler"; 
vc[0]="presedinele Hindenburg"; 
ea[0]="R&#259;spuns incorect deoarece Adolf Hitler era cancelarul Germaniei. " 
eb[0]="R&#259;spuns corect !"; 
ec[0]="R&#259;spuns incorect deoarece Adolf Hitler era cancelarul Germaniei"; 

intr[1]="Al Doilea R&#259;zboi Mondial a &icirc;nceput la dat&#259; de : " 
va[1]="17 septembrie 1939"; 
vb[1]="1 septembrie 1939 "; 
vc[1]="22 iunie 1941"; 
ea[1]="R&#259;spuns incorect deoarece la dat&#259; de 1 septembrie 1939 Germania a atacat Polonia" 
eb[1]="R&#259;spuns corect !"; 
ec[1]="R&#259;spuns incorect deoarece la dat&#259; de 1 septembrie 1939 Germania a atacat Polonia"; 

intr[2]="Polonia a fost impar&#539;it&#259; , &icirc;n anul 1939 &icirc;ntre Germania si : " 
va[2]="Italia"; 
vb[2]="Finlanda"; 
vc[2]="URSS"; 
ea[2]="r&#259;spuns incorect deoarece Polonia a fost impar&#539;it&#259; , &icirc;n anul 1939 &icirc;ntre Germania si URSS."; 
eb[2]="R&#259;spuns incorect deoarece Polonia a fost impar&#539;it&#259; , &icirc;n anul 1939 &icirc;ntre Germania si URSS."; 
ec[2]="R&#259;spuns corect !"; 


intr[3]=" Italia a fost guvernat&#259;  &icirc;n timpul celui De-al Doilea R&#259;zboi Mondial, de c&#259;tre : " 
va[3]="Victor Emanuel I"; 
vb[3]="Vittorio Orlando"; 
vc[3]="Benitto Mussolini"; 
ea[3]="R&#259;spuns incorect deoarece Italia a fost guvernat&#259; . &icirc;n timpul celui De-al Doilea R&#259;zboi Mondial de c&#259;tre Benitto Mussolini." 
eb[3]="R&#259;spuns incorect deoarece Italia a fost guvernat&#259; . &icirc;n timpul celui De-al Doilea R&#259;zboi Mondial de c&#259;tre Benitto Mussolini."; 
ec[3]="R&#259;spuns corect !"; 


intr[4]=" Planul de r&#259;zboi al Germaniei &icirc;n 1940 a purtat denumire de : " 
va[4]="R&#259;zboi de uzur&#259;"; 
vb[4]="R&#259;zboi-fulger"; 
vc[4]="R&#259;zboi ciudat"; 
ea[4]='R&#259;spuns incorect deoarece planul de r&#259;zboi al Germaniei &icirc;n 1940 a purtat denumirea de r&#259;zboi- fulger.' 
eb[4]="R&#259;spuns corect !"; 
ec[4]='R&#259;spuns incorect deoarece planul de r&#259;zboi al Germaniei &icirc;n 1940 a purtat denumirea de r&#259;zboi- fulger.'; 

intr[5]="Statul atacat de Germania pe cale aerian&#259; &icirc;n 1940 a fost : " 
va[5]="Marea Britanie"; 
vb[5]="Fran&#539;a"; 
vc[5]="Damenarca"; 
ea[5]="R&#259;spuns corect !"; 
eb[5]="R&#259;spuns incorect deoarece Germania a atacat Marea Britanie pe calea aerian&#259; &icirc;n 1940 ."; 
ec[5]="R&#259;spuns incorect deoarece Germania a atacat Marea Britanie pe calea aerian&#259; &icirc;n 1940 ."; 

intr[6]="Cea mai mare b&#259;t&#259;lie de tancuri din istoria secolului al XX-lea a fost desf&#259;sur&acirc;t&#259; la : " 
va[6]="Stalingrad"; 
vb[6]="El Alamein"; 
vc[6]="Kursk"; 
ea[6]="R&#259;spuns incorect deoarece cea mai mare b&#259;t&#259;lie de tancuri din istorie s- a desf&#259;surat la Kursk ."; 
eb[6]="R&#259;spuns incorect deoarece cea mai mare b&#259;t&#259;lie de tancuri din istorie s- a desf&#259;surat la Kursk ."; 
ec[6]="R&#259;spuns corect !"; 

intr[7]="Baza american&#259; Pearl Harbour a fost atact&#259; de c&#259;tre : " 
va[7]="Canada"; 
vb[7]="Italia"; 
vc[7]="Japonia "; 
ea[7]="R&#259;spuns incorect deoarece japonezii au atacat baza militar&#259; Pearl Harbour." 
eb[7]="R&#259;spuns incorect deoarece japonezii au atacat baza militar&#259; Pearl Harbour."; 
ec[7]="R&#259;spuns corect !"; 

intr[8]="Rom&acirc;nia a pierdut , &icirc;n 1940, pe seama U.R.S.S-ului :" 
va[8]="Cadrilaterul"; 
vb[8]="NV Transilvaniei"; 
vc[8]="Basarabia ,N Bucovinei si &#539;inutul Her&#539;ei"; 
ea[8]="R&#259;spuns incorect-Cadrilaterul a fost pierdut pe seama Bulgariei."; 
eb[8]="R&#259;spuns incorect-Cadrilaterul a fost pierdut pe seama Bulgariei."; 
ec[8]="R&#259;spuns corect !"; 


intr[9]=" ZIUA Z reprezint&#259; opera&#539;iunea prin care trupele aliate au debarcat &icirc;n : " 
va[9]="Italia"; 
vb[9]="Normandia"; 
vc[9]="Sicilia"; 
ea[9]="R&#259;spuns incorect deoarece ,,ZIUA Z reprezint&#259; opera&#539;iunea prin care trupele aliate au debarcat &icirc;n Normandia." 
eb[9]="R&#259;spuns corect !"; 
ec[9]="R&#259;spuns incorect deoarece ,,ZIUA Z reprezint&#259; opera&#539;iunea prin care trupele aliate au debarcat &icirc;n Normandia."; 


intr[10]="Rom&acirc;nia a &icirc;ntors armele &icirc;mpotriva Germaniei la dat&#259; de : " 
va[10]="25 aprilie 1943"; 
vb[10]="23 august 1944"; 
vc[10]="25 aprilie 1945"; 
ea[10]="R&#259;spuns incorect deoarece Rom&acirc;nia a &icirc;ntors armele &icirc;mpotriva Germaniei &icirc;n 23 august 1944." 
eb[10]="R&#259;spuns corect !"; 
ec[10]="R&#259;spuns incorect deoarece Rom&acirc;nia a &icirc;ntors armele &icirc;mpotriva Germaniei &icirc;n 23 august 1944"; 

intr[11]="Ziua Victoriei este s&#259;rb&#259;torit&#259; an dat&#259; de: " 
va[11]="9 mai"; 
vb[11]="7 mai"; 
vc[11]="25 aprilie"; 
ea[11]="R&#259;spuns corect !"; 
eb[11]="R&#259;spuns incorect deoarece Ziua Victoriei este s&#259;rb&#259;torit&#259; &icirc;n 9 mai."; 
ec[11]="R&#259;spuns incorect deoarece Ziua Victoriei este s&#259;rb&#259;torit&#259; &icirc;n 9 mai."; 

intr[12]=" Cel mai cunoscut lag&#259;r de exterminare a fost :" 
va[12]="Majdanek"; 
vb[12]="Auscwitz"; 
vc[12]="Buchenwald"; 
ea[12]="R&#259;spuns incorect deoarece cel mai cunoscut lag&#259;r fost Auschwitz." 
eb[12]="R&#259;spuns corect !"; 
ec[12]="R&#259;spuns incorect deoarece cel mai cunoscut lag&#259;r fost Auschwitz ."; 


intr[13]="Procesul &icirc;n care au fost judea&#539;i criminalii de r&#259;zboi nazisti a avut loc la: " 
va[13]="Nuremberg"; 
vb[13]="Londra"; 
vc[13]="Berlin"; 
ea[13]="R&#259;spuns corect !"; 
eb[13]="R&#259;spuns incorect deoarece procesul criminaior de r&#259;zboi a avut loc la Nuremberg."; 
ec[13]="R&#259;spuns incorect deoarece procesul criminaior de r&#259;zboi a avut loc la Nuremberg."; 


intr[14]="Num&#259;rul victimelor din cadrul lag&#259;relor de exterminare a fost de : " 
va[14]="1 milion"; 
vb[14]="3 milioane"; 
vc[14]="6 milioane"; 
ea[14]="R&#259;spuns incorect deoarece num&#259;rul victimelor a fost de 6 milioane." 
eb[14]="R&#259;spuns incorect deoarece num&#259;rul victimelor a fost de 6 milioane."; 
ec[14]="R&#259;spuns corect !"; 

intr[15]="Impar&#539;irea Europei &icirc;n zone de influen&#539;e a fost hot&#259;r&acirc;t&#259; &icirc;n urm&#259; Conferin&#539;a de la : " 
va[15]="Washington"; 
vb[15]="Cairo"; 
vc[15]="Yalta"; 
ea[15]="R&#259;spuns incorect deoarece impar&#539;irea Europei &icirc;n zone de influen&#539;e s-a hot&#259;r&acirc;t &icirc;n urm&#259; Conferin&#539;ei de la Yalta." 
eb[15]="R&#259;spuns incorect deoarece impar&#539;irea Europei &icirc;n zone de influen&#539;e s-a hot&#259;r&acirc;t &icirc;n urm&#259; Conferin&#539;ei de la Yalta."; 
ec[15]="R&#259;spuns corect !"; 


intr[16]="Reprezentantul Marii Britanii &icirc;n cadrul Confein&#539;ei de la Yalta a fost : " 
va[16]="W.Churchill"; 
vb[16]="H.Truman"; 
vc[16]="I.V.Stalin"; 
ea[16]="R&#259;spuns corect !"; 
eb[16]="R&#259;spuns incorect deoarece reprezentantul Marii Britani la Conferin&#539;a de la Yalta a fost W.Churchill."; 
ec[16]="R&#259;spuns incorect deoarece reprezentantul Marii Britani la Conferin&#539;a de la Yalta a fost W.Churchill."; 

intr[17]=" Regele Rom&acirc;niei &icirc;n anul 1945 a fost : " 
va[17]="Ferdinand"; 
vb[17]="Carol al II-lea"; 
vc[17]="Mihai I"; 
ea[17]="R&#259;spuns incorect deoarece regele Rom&acirc;niei &icirc;n anul 1945 a fost Mihai I." 
eb[17]="R&#259;spuns incorect deoarece regele Rom&acirc;niei &icirc;n anul 1945 a fost Mihai I"; 
ec[17]="R&#259;spuns corect !";


intr[18]="Influenta URSS-ului &icirc;n Romania,&icirc;n urma &icirc;n&#539;elegerilor  dintre mariel puteri a fost &icirc;ntr-un procent de: "
va[18]="50 %";
vb[18]="90%";
vc[18]="30%";
ea[18]="R&#259;spuns incorect deoarece Influen&#539;a URSS-ului &icirc;n Rom&#259;nia,&icirc;n urma &icirc;n&#539;elegerilor  dintre marile puteri a fost &icirc;ntr-un procent de 90%.  "
eb[18]="R&#259;spuns corect !";
ec[18]="R&#259;spuns incorect deoarece Influen&#539;a URSS-ului &icirc;n Rom&#259;nia,&icirc;n urma &icirc;n&#539;elegerilor  dintre marile puteri a fost &icirc;ntr-un procent de 90%.";


intr[19]="Primul guvern comunist din Rom&#259;nia a fost condus de c&#259;tre ? "
va[19]="Constantin Argetoianu";
vb[19]="Petru Groza	";
vc[19]="Iuliu Maniu";
ea[19]="R&#259;spuns incorect deoarece primul guvern comunist din Rom&#259;nia a fost condus de c&#259;tre Petru Groza."
eb[19]="R&#259;spuns corect !";
ec[19]="R&#259;spuns incorect deoarece primul guvern comunist din Rom&#259;nia a fost condus de c&#259;tre Petru Groza.";



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