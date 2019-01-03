String.prototype.mudarHexa = function(string){
	string = string.replaceAll("&#225;", "\u00e1");
	string = string.replaceAll("&#224;", "\u00e0");
	string = string.replaceAll("&#226;", "\u00e2");
	string = string.replaceAll("&#227;", "\u00e3");
	string = string.replaceAll("&#228;", "\u00e4");
	string = string.replaceAll("&#193;", "\u00c1");
	string = string.replaceAll("&#192;", "\u00c0");
	string = string.replaceAll("&#194;", "\u00c2");
	string = string.replaceAll("&#195;", "\u00c3");
	string = string.replaceAll("&#196;", "\u00c4");
	string = string.replaceAll("&#233;", "\u00e9");
	string = string.replaceAll("&#232;", "\u00e8");
	string = string.replaceAll("&#234;", "\u00ea");
	string = string.replaceAll("&#201;", "\u00c9");
	string = string.replaceAll("&#200;", "\u00c8");
	string = string.replaceAll("&#202;", "\u00ca");
	string = string.replaceAll("&#203;", "\u00cb");
	string = string.replaceAll("&#203;", "\u00cb");
	string = string.replaceAll("&#237;", "\u00ed");
	string = string.replaceAll("&#236;", "\u00ec");
	string = string.replaceAll("&#238;", "\u00ee");
	string = string.replaceAll("&#239;", "\u00ef");
	string = string.replaceAll("&#205;", "\u00cd");
	string = string.replaceAll("&#204;", "\u00cc");
	string = string.replaceAll("&#206;", "\u00ce");
	string = string.replaceAll("&#207;", "\u00cf");
	string = string.replaceAll("&#243;", "\u00f3");
	string = string.replaceAll("&#242;", "\u00f2");
	string = string.replaceAll("&#244;", "\u00f4");
	string = string.replaceAll("&#245;", "\u00f5");
	string = string.replaceAll("&#246;", "\u00f6");
	string = string.replaceAll("&#211;", "\u00d3");
	string = string.replaceAll("&#210;", "\u00d2");
	string = string.replaceAll("&#212;", "\u00d4");
	string = string.replaceAll("&#213;", "\u00d5");
	string = string.replaceAll("&#214;", "\u00d6");
	string = string.replaceAll("&#250;", "\u00fa");
	string = string.replaceAll("&#249;", "\u00f9");
	string = string.replaceAll("&#251;", "\u00fb");
	string = string.replaceAll("&#252;", "\u00fc");
	string = string.replaceAll("&#218;", "\u00da");
	string = string.replaceAll("&#217;", "\u00d9");
	string = string.replaceAll("&#219;", "\u00db");
	string = string.replaceAll("&#231;", "\u00e7");
	string = string.replaceAll("&#199;", "\u00c7");
	string = string.replaceAll("&#241;", "\u00f1");
	string = string.replaceAll("&#209;", "\u00d1");
	return string;
}

String.prototype.replaceAll = function(de, para){
	var str = this;
	var pos = str.indexOf(de);
	while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
return (str);

}