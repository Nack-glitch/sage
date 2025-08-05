#include <iostream>
using namespace std;
int main(){
	float weight, height,bmi ;
	cout<< "enter your weight";
	cin>>weight;
	cout<<"enter your height";
	cin>>height;
	bmi=weight/(height*height);
	if (bmi<18.5){
		cout<<"underweight"<<endl;
	}else if(bmi>18.5 and bmi < 24.9){
		cout<<"normal"<<endl;
	}else if (bmi>25 and bmi<29.9){
		cout<<"overweight"<<endl;
	}else if(bmi> 30){
		cout<<"obese"<<endl;
	}else{
		cout<<"404"<<endl;
	}
	
	return 0;
}