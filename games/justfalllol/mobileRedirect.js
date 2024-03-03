var userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/bot|crawler|spider|crawling/i.test(userAgent)) {}
else if (/windows phone/i.test(userAgent)) {
	window.location.replace("/mobile");
}
else if (/android/i.test(userAgent)) {
	var confirmreloc = window.confirm("It looks like you're on Android. Would you like to go to the Play Store?");
	if (confirmreloc) {
		window.location.replace("https://play.google.com/store/apps/details?id=lol.justfall");
	}
}
else if ((/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform))) {
	var confirmreloc = window.confirm("It looks like you're on iOS/iPadOS. Would you like to go to the App Store?");
	if (confirmreloc) {
    	window.location.replace("https://apps.apple.com/app/id1551844218");
	}
}