define(['aloha/jquery'], function(jQuery) { 
	var $ = jQuery;

;(function($){
/**
 * jqGrid German Translation
 * Version 1.0.0 (developed for jQuery Grid 3.3.1)
 * Olaf KlÃ¶ppel opensource@blue-hit.de
 * http://blue-hit.de/ 
 *
 * Updated for jqGrid 3.8
 * Andreas Flack
 * http://www.contentcontrol-berlin.de
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
// $.jgrid = {
$.jgrid_de = {
	defaults: {
		recordtext: "Zeige {0} - {1} von {2}",
	    emptyrecords: "Keine DatensÃ¤tze vorhanden",
		loadtext: "LÃ¤dt...",
		pgtext: "Seite {0} von {1}"
	},
	search: {
		caption: "Suche...",
		Find: "Suchen",
		Reset: "ZurÃ¼cksetzen",
	    odata: [ 'gleich', 'ungleich', 'kleiner', 'kleiner gleich','grÃ¶Ãer','grÃ¶Ãer gleich', 'beginnt mit','beginnt nicht mit','ist in','ist nicht in','endet mit','endet nicht mit','enthÃ¤lt','enthÃ¤lt nicht' ],
	    groupOps: [	{ op: "AND", text: "alle" }, { op: "OR",  text: "mindestens eine" } ],
		matchText: " erfÃ¼lle",
		rulesText: " Bedingung(en)"
	},
	edit: {
		addCaption: "Datensatz hinzufÃ¼gen",
		editCaption: "Datensatz bearbeiten",
		bSubmit: "Speichern",
		bCancel: "Abbrechen",
		bClose: "SchlieÃen",
		saveData: "Daten wurden geÃ¤ndert! Ãnderungen speichern?",
		bYes: "ja",
		bNo: "nein",
		bExit: "abbrechen",
		msg: {
		    required: "Feld ist erforderlich",
		    number: "Bitte geben Sie eine Zahl ein",
		    minValue: "Wert muss grÃ¶Ãer oder gleich sein, als ",
		    maxValue: "Wert muss kleiner oder gleich sein, als ",
		    email: "ist keine gÃ¼ltige E-Mail-Adresse",
		    integer: "Bitte geben Sie eine Ganzzahl ein",
			date: "Bitte geben Sie ein gÃ¼ltiges Datum ein",
			url: "ist keine gÃ¼ltige URL. PrÃ¤fix muss eingegeben werden ('http://' oder 'https://')",
			nodefined: " ist nicht definiert!",
			novalue: " RÃ¼ckgabewert ist erforderlich!",
			customarray: "Benutzerdefinierte Funktion sollte ein Array zurÃ¼ckgeben!",
			customfcheck: "Benutzerdefinierte Funktion sollte im Falle der benutzerdefinierten ÃberprÃ¼fung vorhanden sein!"
		}
	},
	view: {
	    caption: "Datensatz anzeigen",
	    bClose: "SchlieÃen"
	},
	del: {
		caption: "LÃ¶schen",
		msg: "AusgewÃ¤hlte DatensÃ¤tze lÃ¶schen?",
		bSubmit: "LÃ¶schen",
		bCancel: "Abbrechen"
	},
	nav: {
		edittext: " ",
	    edittitle: "AusgewÃ¤hlte Zeile editieren",
		addtext: " ",
	    addtitle: "Neue Zeile einfÃ¼gen",
	    deltext: " ",
	    deltitle: "AusgewÃ¤hlte Zeile lÃ¶schen",
	    searchtext: " ",
	    searchtitle: "Datensatz suchen",
	    refreshtext: "",
	    refreshtitle: "Tabelle neu laden",
	    alertcap: "Warnung",
	    alerttext: "Bitte Zeile auswÃ¤hlen",
		viewtext: "",
		viewtitle: "AusgewÃ¤hlte Zeile anzeigen"
	},
	col: {
		caption: "Spalten auswÃ¤hlen",
		bSubmit: "Speichern",
		bCancel: "Abbrechen"	
	},
	errors: {
		errcap: "Fehler",
		nourl: "Keine URL angegeben",
		norecords: "Keine DatensÃ¤tze zu bearbeiten",
		model: "colNames und colModel sind unterschiedlich lang!"
	},
	formatter: {
		integer: {thousandsSeparator: ".", defaultValue: '0'},
		number: {decimalSeparator: ",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0,00'},
		currency: {decimalSeparator: ",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix: " â¬", defaultValue: '0,00'},
		date: {
			dayNames:   [
				"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa",
				"Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez",
				"Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"
			],
			AmPm: ["am","pm","AM","PM"],
			S: function (j) {return 'ter'},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y',
			masks: {
		        ISO8601Long: "Y-m-d H:i:s",
		        ISO8601Short: "Y-m-d",
		        ShortDate: "j.n.Y",
		        LongDate: "l, j. F Y",
		        FullDateTime: "l, d. F Y G:i:s",
		        MonthDay: "d. F",
		        ShortTime: "G:i",
		        LongTime: "G:i:s",
		        SortableDateTime: "Y-m-d\\TH:i:s",
		        UniversalSortableDateTime: "Y-m-d H:i:sO",
		        YearMonth: "F Y"
		    },
		    reformatAfterEdit: false
		},
		baseLinkUrl: '',
		showAction: '',
	    target: '',
	    checkbox: {disabled:true},
		idName: 'id'
	}
};
})(jQuery);

});