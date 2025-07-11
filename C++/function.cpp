#include <iostream>
using namespace std;


 void  celsius_to_fahranheit(double cel){
 	double F;
 	F=(cel*1.8)+32 ;
 	cout<<F<<endl;
 }
 	
void  fahranheit_to_celsius(double far){
 	double C;
    C=9/5*(far-32);
 	cout<<C<<endl;
 	
 }
 
 int main(){
celsius_to_fahranheit(0);
 	celsius_to_fahranheit(32);
 	celsius_to_fahranheit(0);
 	celsius_to_fahranheit(32);
 		return 0;
}
 