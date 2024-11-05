//App

//Input

//Data

const model = {
    app: {
        currentPage: "tripView", // login, register, myProfile, recommendedTrips, friendsOverview, 
                                //tripOverview, findAFriend, friendsProfile, chatOverview, tripView, feedView, footerView
        loggedInUser: null,
        tripId: 2,
        shownUserID: 5,
        buttons:[{ // Currently not in use
                functionName: 'myPage',
                buttonName: 'Min Side',
            },
            {
                functionName: 'hikeSugestion',
                buttonName: 'TurForslag',
            },
        ],
        
    }, 

    input: {
        loginForm: {
            email: null,
            password: null,
        },
        createAccount:{
            userName: null,
            email: null,
            password: null,
            repeatPassword: null,
        }, 
        searchField:{
            searchText: null,
        },
        myProfile:{
            userPicture: null,
            userPhysical: 0,
        },
        
    },

    data: {
        userProfile: [ 
            {
                id: 0,
                userFullName: "Jørgine Heffalompen",
                userName: "Jørgine",
                email: "eksempel@gmail.com",
                password: "hei123",
                userPicture: "img/placeholder.jpg",
                userPhysical: 0,
                location: "sted",
                friendsListId: [2, 3, 4],
                pendingRequests: [5, 6],
                kilometresWalked: 0,
                tripsTaken: 0,
                achievementView: ["10km", "20km"],
            },
            {
                id: 2,
                userFullName: "Erik Hansen",
                userName: "ErikH",
                email: "erik.hansen@gmail.com",
                password: "secure456",
                userPicture: "img/placeholder.jpg",
                userPhysical: 4,
                location: "Oslo",
                friendsListId: [0, 3, 4],
                pendingRequests: [7],
                kilometresWalked: 156,
                tripsTaken: 25,
                achievementView: ["10km", "20km", "50km", "100km", "10trips", "25trips"],
            },
            {
                id: 3,
                userFullName: "Maria Larsen",
                userName: "MariaL",
                email: "maria.l@gmail.com",
                password: "hiking789",
                userPicture: "img/placeholder.jpg",
                userPhysical: 5,
                location: "Bergen",
                friendsListId: [0, 2, 4, 5],
                pendingRequests: [],
                kilometresWalked: 283,
                tripsTaken: 42,
                achievementView: ["10km", "20km", "50km", "100km", "200km", "10trips", "25trips", "40trips"],
            },
            {
                id: 4,
                userFullName: "Anders Pedersen",
                userName: "AndersP",
                email: "anders.p@gmail.com",
                password: "nature123",
                userPicture: "img/placeholder.jpg",
                userPhysical: 3,
                location: "Trondheim",
                friendsListId: [0, 2, 3],
                pendingRequests: [6],
                kilometresWalked: 89,
                tripsTaken: 15,
                achievementView: ["10km", "20km", "50km", "10trips"],
            },
            {
                id: 5,
                userFullName: "Sofia Berg",
                userName: "SofiaB",
                email: "sofia.b@gmail.com",
                password: "walk456",
                userPicture: "img/placeholder.jpg",
                userPhysical: 2,
                location: "Stavanger",
                friendsListId: [3],
                pendingRequests: [0],
                kilometresWalked: 45,
                tripsTaken: 8,
                achievementView: ["10km", "20km"],
            },
            {
                id: 6,
                userFullName: "Lars Nilsen",
                userName: "LarsN",
                email: "lars.n@gmail.com",
                password: "trek789",
                userPicture: "img/placeholder.jpg",
                userPhysical: 1,
                location: "Tromsø",
                friendsListId: [],
                pendingRequests: [0, 4],
                kilometresWalked: 12,
                tripsTaken: 2,
                achievementView: ["10km"],
            },
            {
                id: 7,
                userFullName: "Kristin Olsen",
                userName: "KristinO",
                email: "kristin.o@gmail.com",
                password: "hike101",
                userPicture: "img/placeholder.jpg",
                userPhysical: 4,
                location: "Bodø",
                friendsListId: [],
                pendingRequests: [2],
                kilometresWalked: 167,
                tripsTaken: 28,
                achievementView: ["10km", "20km", "50km", "100km", "10trips", "25trips"],
            },
    
        ],
        tripData: [
            {
                id: 1,
                tripName: "Hardangervidda Rundtur",
                tripPicture: "img/trip/1.png",
                tripInfo: "Vakker fjellplatå-kryssing med storslått utsikt",
                tripKM: 42,
                tripHeightChart: 1200,
                tripPhysical: 4,
                tripRating: 5
            },
            {
                id: 2,
                tripName: "Kyst Vandring",
                tripPicture: "img/trip/2.png",
                tripInfo: "Scenisk kystrute med fjordutsikt",
                tripKM: 15,
                tripHeightChart: 300,
                tripPhysical: 2,
                tripRating: 4
            },
            {
                id: 3,
                tripName: "Skogsløyfe",
                tripPicture: "img/trip/3.png",
                tripInfo: "Rundtur i tett granskog",
                tripKM: 8,
                tripHeightChart: 150,
                tripPhysical: 1,
                tripRating: 3
            },
            {
                id: 4,
                tripName: "Fjelltopp Utfordringen",
                tripPicture: "img/trip/4.png",
                tripInfo: "Bratt klatring til fjelltoppen",
                tripKM: 12,
                tripHeightChart: 1800,
                tripPhysical: 5,
                tripRating: 5
            },
            {
                id: 5,
                tripName: "Vannet Rundt",
                tripPicture: "img/trip/5.png",
                tripInfo: "Lett tur rundt fjellvann",
                tripKM: 6,
                tripHeightChart: 50,
                tripPhysical: 1,
                tripRating: 4
            },
            {
                id: 6,
                tripName: "Dalføre Traversering",
                tripPicture: "img/trip/6.png",
                tripInfo: "Lang kryssing gjennom dalen",
                tripKM: 28,
                tripHeightChart: 600,
                tripPhysical: 3,
                tripRating: 4
            },
            {
                id: 7,
                tripName: "Eggeryggen",
                tripPicture: "img/trip/7.png",
                tripInfo: "Eksponert fjellrygg-traversering",
                tripKM: 16,
                tripHeightChart: 900,
                tripPhysical: 4,
                tripRating: 5
            },
        ],
        
        achievements: {
            distance: [
                {
                    badgeName: "10km",
                    requirement: 10,
                },
                {
                    badgeName: "20km",
                    requirement: 20,
                },
                {
                    badgeName: "50km",
                    requirement: 50,
                },
                {
                    badgeName: "100km",
                    requirement: 100,
                },
                {
                    badgeName: "Marathon",
                    requirement: 42,
                }
            ],
            number: [
                {
                    badgeName: "5trips",
                    requirement: 5,
                },
                {
                    badgeName: "15trips",
                    requirement: 15,
                },
                {
                    badgeName: "30trips",
                    requirement: 30,
                },
                {
                    badgeName: "50trips",
                    requirement: 50,
                },
                {
                    badgeName: "100trips",
                    requirement: 100,
                }
            ],
        },
    },
}

//Test purposes, setter default user til Jørgine
model.app.loggedInUser = model.data.userProfile[0];