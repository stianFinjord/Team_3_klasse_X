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

function parseXml(xml, arrayTags) {
    let dom = null;
    if (window.DOMParser) dom = (new DOMParser()).parseFromString(xml, "text/xml");
    else if (window.ActiveXObject) {
        dom = new ActiveXObject('Microsoft.XMLDOM');
        dom.async = false;
        if (!dom.loadXML(xml)) throw dom.parseError.reason + " " + dom.parseError.srcText;
    }
    else throw new Error("cannot parse xml string!");

    function parseNode(xmlNode, result) {
        if (xmlNode.nodeName == "#text") {
            let v = xmlNode.nodeValue;
            if (v.trim()) result['#text'] = v;
            return;
        }

        let jsonNode = {},
            existing = result[xmlNode.nodeName];
        if (existing) {
            if (!Array.isArray(existing)) result[xmlNode.nodeName] = [existing, jsonNode];
            else result[xmlNode.nodeName].push(jsonNode);
        }
        else {
            if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1) result[xmlNode.nodeName] = [jsonNode];
            else result[xmlNode.nodeName] = jsonNode;
        }

        if (xmlNode.attributes) for (let attribute of xmlNode.attributes) jsonNode[attribute.nodeName] = attribute.nodeValue;

        for (let node of xmlNode.childNodes) parseNode(node, jsonNode);
    }

    let result = {};
    for (let node of dom.childNodes) parseNode(node, result);

    return result;
}

fetch('http://localhost:5113/weatherforecast')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {
    console.log(data); // Use the returned data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });



//Faktisk API stuff:
const baseUrl = "http://localhost:5113";

  async function acceptFriendRequestApi(fromProfileId, toProfileId) {
    const url = "http://localhost:5113/AcceptFriendRequest"; // Replace with your API endpoint
    const bodyData = {
        fromProfileId: fromProfileId, // Sender's profile ID
        toProfileId: toProfileId     // Receiver's profile ID
    };

    try {
        const response = await fetch(url, {
            method: "POST", // HTTP method
            headers: {
                "Content-Type": "application/json", // Specify JSON data
            },
            body: JSON.stringify(bodyData), // Convert the body object to JSON string
        });

        if (response.ok) {
            const result = await response.json(); // Parse JSON response
            console.log("Friend request accepted successfully:", result);
        } else {
            console.error("Failed to accept friend request:", response.statusText);
        }
    } catch (err) {
        console.error("Network error:", err);
    }
}

async function logInUserApi(email, password) {
    //const url = '${baseUrl}/LoginUser';
    const url = 'http://localhost:5113/LoginUser';
    const bodyData = {
        Email: email,
        Password: password
    };

    try {
        const response = await fetch(url, {
            method: "POST", // HTTP method
            headers: {
                "Content-Type": "application/json", // Specify JSON data
            },
            body: JSON.stringify(bodyData), // Convert the body object to JSON string
        });

        if (response.ok) {
            const result = await response.json(); // Parse JSON response
            console.log("Logged in successfully:", result);
            return result;
        } else {
            console.error("Failed to log in user:", response.statusText);
        }
    } catch (err) {
        console.error("Network error:", err);
    }
}

// Call the function with example data
//acceptFriendRequestApi(1, 2);


