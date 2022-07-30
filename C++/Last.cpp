#include<iostream>
#include <fstream>
#include <string>
#include <vector>
#include <sstream>
#include <algorithm>
#include <cctype>
#include <getopt.h>
using namespace std;

string trimEntry(string str) 
{
	int n = str.length();
	int i = 0, j = -1;
	bool spaceFound = false;

	while (++j < n && str[j] == ' ');
	while (j < n)
	{
		if (str[j] != ' ')
		{
			if ((str[j] == '.' || str[j] == ',' || str[j] == '?') && i - 1 >= 0 && str[i - 1] == ' ')
				str[i - 1] = str[j++];

			else
				str[i++] = str[j++];
			spaceFound = false;
		}
		else if (str[j++] == ' ')
		{
			if (!spaceFound)
			{
				str[i++] = ' ';
				spaceFound = true;
			}
		}
	}
	if (i <= 1)
		str.erase(str.begin() + i, str.end());
	else
		str.erase(str.begin() + i - 1, str.end());

	return str;
}

vector<string> getWordsFromString(string str)
{
	string word;
	stringstream iss(str);
	vector<string> result;

	while (iss >> word)
		result.push_back(word);
	result.push_back("");
	return result;
}

void displayEnvelope(vector<vector<string>> data, char opt) {
    for (int i=0;i<data.size();i++) {
        if(opt == 'm')
            cout<<data[i][9]<<endl;
        cout<<data[i][1]<<" "<<data[i][0]<<","<<endl;
        cout<<data[i][4]<<" "<<data[i][5]<<","<<endl;
        cout<<data[i][6]<<", "<<data[i][7]<<data[i][8]<<endl;
    }
}

void displayFixed(vector<vector<string>> data, char opt) {
    for (int i=0;i<data.size();i++) {
        if(opt == 'm')
            cout<<data[i][9]<<endl;
        cout<<data[i][1]<<" "<<data[i][0]<<" ";
        cout<<data[i][4]<<" "<<data[i][5]<<" ";
        cout<<data[i][6]<<", "<<data[i][7]<<" "<<data[i][8]<<endl;
    }
}

void displayCSV(vector<vector<string>> data, char opt) {
    for (int i=0;i<data.size();i++) {
        if(opt == 'm')
            cout<<data[i][9]<<endl;
        cout<<'"'<<data[i][1]<<" "<<data[i][1]<<'"'<<",";
        cout<<'"'<<data[i][4]<<" "<<data[i][5]<<'"'<<",";
        cout<<'"'<<data[i][6]<<", "<<data[i][7]<<" "<<data[i][8]<<'"'<<endl;
    }
}

void displayNickName(vector<vector<string>> data) {
    for (int i=0;i<data.size();i++) {
        data[i][1] = data[i][3];
        cout<<data[i][1];
    }
}

vector<vector<string>> to_uppercase(vector<vector<string>> data) {
    for (int i=0;i<data.size();i++) {
        for (int j=0;j<data[i].size();j++) {
            transform(data[i][j].begin(), data[i][j].end(), data[i][j].begin(), ::toupper);
        }
    }
    return data;
}

int main()
{
	string line;
	vector <string> lines;
	vector <vector<string>> withWords;

    ifstream myfile ("input/sample_input.in");
    if (myfile.is_open())
    {
        while ( getline (myfile,line) )
        {
            lines.push_back(line);
        }
        myfile.close();
    } else {
        cout << "Unable to open file";
    }
    cout<<endl;
    // process the file data
    for (int i=0;i<lines.size();i++) {
        string temp = trimEntry(lines[i]);
        vector<string> r = getWordsFromString(temp);
        withWords.push_back(r);
    }

    // Envelope display
    cout<<"Envelope display - \n";
    displayEnvelope(withWords, 'm');

    // Fixed display
    cout<<"\n\nFixed format display - \n";
    displayFixed(withWords, 'm');

    // CSV display
    cout<<"\n\nCSV display - \n";
    displayCSV(withWords, 'm');

    // Display uppercase
    cout<<"\n\nUppercase display - \n";
    withWords = to_uppercase(withWords);
    displayCSV(withWords, 'm');
	return 0;
}

