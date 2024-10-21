//App

//Input

//Data

const model = {
    app: {
        // currentPage endres avhengig av hvilken side som skal vises
        currentPage: "renderMyProfileView", // login, register, myProfile, recommendedTrips, friendsOveriew, 
                                //tripOverview, findAFriend, friendsProfile, chatOverview, tripReview, feedView, footerView
        loggedInUser: null,
        tripID: 1,
        shownUserID: 0,
        buttons:[{
                functionName: 'myPage',
                buttonName: 'Min Side',
            },
            {
                functionName: 'hikeSugestion',
                buttonName: 'TurForslag', 
            }
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
        userPhysical:{} 
    },

    data: {
    
        userProfile: [ 
            {
            id: 1,
            userFullName: "Jørgine Heffalompen",
            userName: "brukernavn",
            email: "eksempel@gmail.com",
            password: "hei123",
            userPicture: "pictures/user11.png",
            userPhysical: 0,
            location: "sted",
            friendsListId: [2, 3, 4],
            pendingRequests: [5, 6],
            kilometresWalked: 0,
            tripsTaken: 0,
            achievementView: ["10km", "20km"],
            },
    
        ],

        tripData: [
            {
                tripID: 1,
                tripName: "turnavn",
                tripPicture: "pictures/trip/1.png",
                tripInfo: "info",
                tripKM: 0,
                tripHeightChart: 0,
                tripPhysical: 0,
                tripRating: 0,
        
            }
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
            ],
        },
    },
}