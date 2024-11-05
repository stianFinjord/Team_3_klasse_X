async function loadGPXFile() {
    // Henter filen til lokal instans av programmet? Må gjøre det sånn pga sikkerhet elns
    const response = await fetch("data/Friluftsliv_03_Oslo_4326_TurOgFriluftsruter_GPX.gpx");

    // Konverterer til tekst
    const gpxText = await response.text();

    // Konverterer fra XML-tekst til objekt?
    const parser = new DOMParser();
    const gpxDoc = parser.parseFromString(gpxText, "text/xml");

    console.log(gpxDoc);

    const trackPoints = gpxDoc.querySelectorAll('wpt');

    console.log(trackPoints);
}

//loadGPXFile();