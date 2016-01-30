(function () {
    'use strict';

    var LEAGUES = [
        {
            "id": 1,
            "name": "Cager Classic",
            "homeScreen": "**Welcome coaches, players, and parents!** " +
            "\n\nThis site contains full schedule information for the tournament.",
            "rulesScreen": ""
        },
        {
            "id": 2,
            "name": "Holiday Hoops Challenge",
            "homeScreen": "**Welcome coaches, players, and parents!** " +
            "\n\nThis site contains full schedule information for the tournament.",
            "rulesScreen": ""
        },
        {
            "id": 3,
            "name": "Thanksgiving Tip Off",
            "homeScreen": "**Welcome coaches, players, and parents!** " +
            "\n\nThis site contains full schedule information for the tournament.",
            "rulesScreen": ""
        }
    ];

    var TEAMS = [
        {
            "id": "bbc1c31a-b1d3-407b-9aac-d9588956bf86",
            "name": "Baltimore Stars",
            "coach": "James",
            "divisionName": "6th grade",
            "leagueId": 1
        },
        {
            "id": "48ae65b2-54da-42f4-a769-2e459a3df746",
            "name": "DC Assault",
            "coach": "Bartlett",
            "divisionName": "6th grade",
            "leagueId": 2
        },
        {
            "id": "4be3dbd6-97a7-409b-871d-2553927a3971",
            "name": "Reisterstown Wolfpack",
            "coach": "Hightower",
            "divisionName": "6th grade",
            "leagueId": 3
        },
        {
            "id": "96b1d770-c114-4306-a0da-4325a5f2ddb3",
            "name": "MADE Elite",
            "coach": "Johnson",
            "divisionName": "6th grade",
            "leagueId": 1
        },
        {
            "id": "adfe9d53-0920-49c8-9df4-158c938a75a4",
            "name": "Sharks",
            "coach": "Smith",
            "divisionName": "6th grade",
            "leagueId": 2
        },
        {
            "id": "38ba0c9f-8f30-42b0-af60-4658d3ab8aa7",
            "name": "Maryland 3D",
            "coach": "Brown",
            "divisionName": "7th grade",
            "leagueId": 3
        },
        {
            "id": "46545545-8fd1-4d5d-93e0-281f6dc9f5ec",
            "name": "DC Premier",
            "coach": "Davis",
            "divisionName": "7th grade",
            "leagueId": 1
        },
        {
            "id": "dea95b06-997e-4116-a243-3f94a0fec0c5",
            "name": "Baltimore Supreme",
            "coach": "Miller",
            "divisionName": "7th grade",
            "leagueId": 2
        },
        {
            "id": "dbfd5e89-a9ca-4502-9d61-381e378951d4",
            "name": "HC Elite",
            "coach": "Michelotti",
            "divisionName": "7th grade",
            "leagueId": 3
        },
        {
            "id": "25bca3cb-dce6-474e-a5f4-55002370d7ee",
            "name": "Severn Elite",
            "coach": "Wilson",
            "divisionName": "7th grade",
            "leagueId": 1
        },
        {
            "id": "e8fcefde-52e5-4595-8349-ceefb28a14b1",
            "name": "Team Takeover",
            "coach": "Williams",
            "divisionName": "7th grade",
            "leagueId": 2
        },
        {
            "id": "90e7271b-1e59-43cc-939b-ba553c39f034",
            "name": "6th Man Warriors",
            "coach": "White",
            "divisionName": "8th grade",
            "leagueId": 3
        },
        {
            "id": "520ab250-e831-4f79-b99d-0a21a01e2de8",
            "name": "E-City Ballers",
            "coach": "Moore",
            "divisionName": "8th grade",
            "leagueId": 1
        },
        {
            "id": "d37ddc16-dd0f-4b59-8e8b-1af87ebefad7",
            "name": "Force Attack",
            "coach": "Taylor",
            "divisionName": "8th grade",
            "leagueId": 2
        },
        {
            "id": "9aca230f-166e-495f-8b21-742f5a05e17d",
            "name": "Savage Eagles",
            "coach": "Anderson",
            "divisionName": "8th grade",
            "leagueId": 3
        },
        {
            "id": "162c1cb3-c5f3-4860-a7b1-22baceb04198",
            "name": "Team Glory",
            "coach": "Thomas",
            "divisionName": "8th grade",
            "leagueId": 1
        },
        {
            "id": "a16423ae-2ccf-4601-b984-053065257b97",
            "name": "Maryland Playmakers",
            "coach": "Jackson",
            "divisionName": "8th grade",
            "leagueId": 2
        },
        {
            "id": "9f4a60ec-bca1-4e2b-ab31-bf71124be656",
            "name": "Columbia Raven",
            "coach": "Jones",
            "divisionName": "6th grade",
            "leagueId": 3
        },
        {
            "id": "bc9b3285-37ee-4b08-b5d7-0e1ab41aaf60",
            "name": "DC Assault",
            "coach": "Bartlett",
            "divisionName": "6th grade",
            "leagueId": 2
        },
        {
            "id": "c8b3822e-874d-4452-8b9c-38a398198d41",
            "name": "Reisterstown Wolfpack",
            "coach": "Hightower",
            "divisionName": "6th grade",
            "leagueId": 1
        },
        {
            "id": "199f5c3e-6c44-48be-b9d4-f4c0c3c7cebd",
            "name": "MADE Elite",
            "coach": "Johnson",
            "divisionName": "6th grade",
            "leagueId": 3
        },
        {
            "id": "874e91ed-ca27-48f8-8a45-4c75bf274f5a",
            "name": "Baltimore Stars",
            "coach": "James",
            "divisionName": "6th grade",
            "leagueId": 2
        },
        {
            "id": "542274e5-e36c-42de-9a62-5dc3103d7a87",
            "name": "Baltimore Supreme",
            "coach": "Miller",
            "divisionName": "7th grade",
            "leagueId": 1
        },
        {
            "id": "463e1f4e-db32-4bfd-8175-b209c624bdae",
            "name": "DC Premier",
            "coach": "Davis",
            "divisionName": "7th grade",
            "leagueId": 3
        },
        {
            "id": "e43c931d-e5ae-4e3f-9d1a-67a0b18bf580",
            "name": "HC Elite",
            "coach": "Michelotti",
            "divisionName": "7th grade",
            "leagueId": 2
        },
        {
            "id": "9ee1dacf-5483-4faf-8bbd-5e1d87a1c2ae",
            "name": "Maryland 3D",
            "coach": "Brown",
            "divisionName": "7th grade",
            "leagueId": 1
        },
        {
            "id": "5c453b2d-daa3-49b8-9621-798f8d3d65e7",
            "name": "Sharks",
            "coach": "Smith",
            "divisionName": "6th grade",
            "leagueId": 3
        },
        {
            "id": "00e8d899-8f2c-45de-94ac-7b8895f1e3ad",
            "name": "Severn Elite",
            "coach": "Wilson",
            "divisionName": "7th grade",
            "leagueId": 2
        },
        {
            "id": "334fa562-88c8-4061-a226-78ba5b4414c5",
            "name": "Team Takeover",
            "coach": "Williams",
            "divisionName": "7th grade",
            "leagueId": 1
        },
        {
            "id": "6f6dfe98-3638-48f2-8470-88d4a3fbc5cb",
            "name": "6th Man Warriors",
            "coach": "White",
            "divisionName": "8th grade",
            "leagueId": 3
        },
        {
            "id": "aa12b8b3-ee72-4774-8d91-063757e24c5c",
            "name": "E-City Ballers",
            "coach": "Moore",
            "divisionName": "8th grade",
            "leagueId": 2
        },
        {
            "id": "d90b5e53-6e84-48c2-a5bb-f04909ba876c",
            "name": "Force Attack",
            "coach": "Taylor",
            "divisionName": "8th grade",
            "leagueId": 1
        },
        {
            "id": "e60b3578-9b8f-43ad-b482-08d53945f4e7",
            "name": "Maryland Playmakers",
            "coach": "Jackson",
            "divisionName": "8th grade",
            "leagueId": 3
        },
        {
            "id": "c834b4fc-3ba4-459c-bf81-ce75f3939f77",
            "name": "Savage Eagles",
            "coach": "Anderson",
            "divisionName": "8th grade",
            "leagueId": 2
        },
        {
            "id": "fa0d885b-dd92-4b12-9c5c-937f1ccfd128",
            "name": "Team Glory",
            "coach": "Thomas",
            "divisionName": "8th grade",
            "leagueId": 1
        },
        {
            "id": "ca6cbb6d-4eda-409b-a6a6-fefc18e9ab65",
            "name": "MADE Elite",
            "coach": "Johnson",
            "divisionName": "6th grade",
            "leagueId": 3
        },
        {
            "id": "d6bb55d2-ec9a-4f4b-8c47-05a43e223471",
            "name": "Reisterstown Wolfpack",
            "coach": "Hightower",
            "divisionName": "6th grade",
            "leagueId": 2
        },
        {
            "id": "d0bf344d-6981-447f-abe2-bad1af95a76d",
            "name": "DC Assault",
            "coach": "Bartlett",
            "divisionName": "6th grade",
            "leagueId": 1
        },
        {
            "id": "9221d6d8-c73e-4228-b8cc-77bd27c2da41",
            "name": "Baltimore Stars",
            "coach": "James",
            "divisionName": "6th grade",
            "leagueId": 3
        },
        {
            "id": "5289ddd3-3ab2-407c-868d-2c864abccc9c",
            "name": "Columbia Raven",
            "coach": "Jones",
            "divisionName": "6th grade",
            "leagueId": 2
        },
        {
            "id": "0fdad598-871d-47cd-bc5c-7d84b2877074",
            "name": "Sharks",
            "coach": "Smith",
            "divisionName": "6th grade",
            "leagueId": 1
        },
        {
            "id": "a8a2f27b-5738-4d2c-93cb-43fb494dc33e",
            "name": "Baltimore Supreme",
            "coach": "Miller",
            "divisionName": "7th grade",
            "leagueId": 3
        },
        {
            "id": "c3df847e-38e1-432e-a69f-bedeead9adaf",
            "name": "DC Premier",
            "coach": "Davis",
            "divisionName": "7th grade",
            "leagueId": 2
        },
        {
            "id": "a7faa14a-4b1c-48a6-8ba7-bf8dc03d7994",
            "name": "HC Elite",
            "coach": "Michelotti",
            "divisionName": "7th grade",
            "leagueId": 1
        },
        {
            "id": "dcb48489-c8b4-48cc-a2d4-e2c58fe943c7",
            "name": "Maryland 3D",
            "coach": "Brown",
            "divisionName": "7th grade",
            "leagueId": 3
        },
        {
            "id": "863b8582-b08f-4682-b44d-425672017b7a",
            "name": "Severn Elite",
            "coach": "Wilson",
            "divisionName": "7th grade",
            "leagueId": 2
        },
        {
            "id": "20fa3c08-3b8a-420c-8952-ecf02fefca3b",
            "name": "6th Man Warriors",
            "coach": "White",
            "divisionName": "8th grade",
            "leagueId": 1
        },
        {
            "id": "e51ef5f0-0a00-41f3-ba67-d4ef6afc8b3d",
            "name": "E-City Ballers",
            "coach": "Moore",
            "divisionName": "8th grade",
            "leagueId": 3
        },
        {
            "id": "6b8d945f-af28-45fe-bb7c-ed0fd7f0afc5",
            "name": "Force Attack",
            "coach": "Taylor",
            "divisionName": "8th grade",
            "leagueId": 2
        },
        {
            "id": "286d54fd-1a25-4b81-8672-851b15032144",
            "name": "Maryland Playmakers",
            "coach": "Jackson",
            "divisionName": "8th grade",
            "leagueId": 1
        },
        {
            "id": "a6673230-4207-41ec-b6d1-5cebfe90d00c",
            "name": "Savage Eagles",
            "coach": "Anderson",
            "divisionName": "8th grade",
            "leagueId": 3
        },
        {
            "id": "9082b65a-f152-42f3-97e3-1af9b811cf59",
            "name": "Team Glory",
            "coach": "Thomas",
            "divisionName": "8th grade",
            "leagueId": 2
        },
        {
            "id": "9411c57c-1fc7-415a-a281-ec8b79a5724c",
            "name": "Team Takeover",
            "coach": "Williams",
            "divisionName": "7th grade",
            "leagueId": 1
        }
    ];

    var GAMES = [
        {
            "id": "c19a0ad6-37a8-4539-9b15-c02eecd21744",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "bbc1c31a-b1d3-407b-9aac-d9588956bf86",
            "team2Id": "adfe9d53-0920-49c8-9df4-158c938a75a4",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T09:00:00",
            "leagueId": 1
        },
        {
            "id": "0fc290e7-07be-4aa9-b77f-d6ad11cd41c9",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "46545545-8fd1-4d5d-93e0-281f6dc9f5ec",
            "team2Id": "25bca3cb-dce6-474e-a5f4-55002370d7ee",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T10:00:00",
            "leagueId": 2
        },
        {
            "id": "e45ccba5-dcc2-49ec-93ed-7f792ccb2b94",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "dea95b06-997e-4116-a243-3f94a0fec0c5",
            "team2Id": "e8fcefde-52e5-4595-8349-ceefb28a14b1",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T09:00:00",
            "leagueId": 3
        },
        {
            "id": "7be14c32-f206-4ee0-bea9-ecc6772c0b69",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "90e7271b-1e59-43cc-939b-ba553c39f034",
            "team2Id": "162c1cb3-c5f3-4860-a7b1-22baceb04198",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T10:00:00",
            "leagueId": 1
        },
        {
            "id": "ce283993-768a-4ee4-b698-5633e9f5bc7f",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "dbfd5e89-a9ca-4502-9d61-381e378951d4",
            "team2Id": "38ba0c9f-8f30-42b0-af60-4658d3ab8aa7",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T10:00:00",
            "leagueId": 2
        },
        {
            "id": "95e0cc17-b778-44a0-82a1-e25a9fbcca7c",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "520ab250-e831-4f79-b99d-0a21a01e2de8",
            "team2Id": "9aca230f-166e-495f-8b21-742f5a05e17d",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T10:00:00",
            "leagueId": 3
        },
        {
            "id": "6374dfb2-0ff0-4451-a134-a1e1c1294623",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "48ae65b2-54da-42f4-a769-2e459a3df746",
            "team2Id": "96b1d770-c114-4306-a0da-4325a5f2ddb3",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T09:00:00",
            "leagueId": 1
        },
        {
            "id": "ca85080c-c810-4d61-912a-82873e4ebb56",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "bbc1c31a-b1d3-407b-9aac-d9588956bf86",
            "team2Id": "4be3dbd6-97a7-409b-871d-2553927a3971",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T11:00:00",
            "leagueId": 2
        },
        {
            "id": "5be1e8b8-b1f6-4cec-a17e-7c2887bbfe5d",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "d37ddc16-dd0f-4b59-8e8b-1af87ebefad7",
            "team2Id": "a16423ae-2ccf-4601-b984-053065257b97",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T11:00:00",
            "leagueId": 3
        },
        {
            "id": "275ae563-a725-4f43-a9f9-f08966d434db",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "adfe9d53-0920-49c8-9df4-158c938a75a4",
            "team2Id": "96b1d770-c114-4306-a0da-4325a5f2ddb3",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T11:00:00",
            "leagueId": 1
        },
        {
            "id": "a2749f13-b98a-47e5-9730-29383e0f53bf",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "dea95b06-997e-4116-a243-3f94a0fec0c5",
            "team2Id": "25bca3cb-dce6-474e-a5f4-55002370d7ee",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T13:00:00",
            "leagueId": 2
        },
        {
            "id": "02e0b26d-7dc2-45a2-8506-6fb529d20bda",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "46545545-8fd1-4d5d-93e0-281f6dc9f5ec",
            "team2Id": "dbfd5e89-a9ca-4502-9d61-381e378951d4",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T13:00:00",
            "leagueId": 3
        },
        {
            "id": "a2521bc0-9f22-4631-9ee9-ffac899d4c97",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "e8fcefde-52e5-4595-8349-ceefb28a14b1",
            "team2Id": "38ba0c9f-8f30-42b0-af60-4658d3ab8aa7",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T13:00:00",
            "leagueId": 1
        },
        {
            "id": "121bd679-a7e3-4fc5-b34f-ded8eca8213d",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "162c1cb3-c5f3-4860-a7b1-22baceb04198",
            "team2Id": "a16423ae-2ccf-4601-b984-053065257b97",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T14:00:00",
            "leagueId": 2
        },
        {
            "id": "d1f5eeda-5b20-496f-941e-137ba6b5510b",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "90e7271b-1e59-43cc-939b-ba553c39f034",
            "team2Id": "9aca230f-166e-495f-8b21-742f5a05e17d",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T13:00:00",
            "leagueId": 3
        },
        {
            "id": "98aec1f2-4a75-4a33-a6e9-617ad1fd586a",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "4be3dbd6-97a7-409b-871d-2553927a3971",
            "team2Id": "48ae65b2-54da-42f4-a769-2e459a3df746",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T14:00:00",
            "leagueId": 1
        },
        {
            "id": "eddea304-98ba-4e61-86f1-2ad3e7cea8bb",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "dea95b06-997e-4116-a243-3f94a0fec0c5",
            "team2Id": "38ba0c9f-8f30-42b0-af60-4658d3ab8aa7",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T15:00:00",
            "leagueId": 2
        },
        {
            "id": "68bf79c9-b7d3-40ef-a11e-b0ca99fa15ec",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "520ab250-e831-4f79-b99d-0a21a01e2de8",
            "team2Id": "d37ddc16-dd0f-4b59-8e8b-1af87ebefad7",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T14:00:00",
            "leagueId": 3
        },
        {
            "id": "ab7068f5-3cb9-47f3-be14-d213ae6d32d5",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "bbc1c31a-b1d3-407b-9aac-d9588956bf86",
            "team2Id": "96b1d770-c114-4306-a0da-4325a5f2ddb3",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T14:00:00",
            "leagueId": 1
        },
        {
            "id": "6fdcbf8b-e97c-4bde-aa39-b0e1958e0cc3",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "25bca3cb-dce6-474e-a5f4-55002370d7ee",
            "team2Id": "dbfd5e89-a9ca-4502-9d61-381e378951d4",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T15:00:00",
            "leagueId": 2
        },
        {
            "id": "243747c4-bb03-4473-8789-d1ab98859d94",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "adfe9d53-0920-49c8-9df4-158c938a75a4",
            "team2Id": "e24a70b1-f801-4a64-9c6a-02d8180c11bc",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T15:00:00",
            "leagueId": 3
        },
        {
            "id": "bd67dccd-bdb4-4a61-84a7-7855c6722702",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "e8fcefde-52e5-4595-8349-ceefb28a14b1",
            "team2Id": "46545545-8fd1-4d5d-93e0-281f6dc9f5ec",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-17T15:00:00",
            "leagueId": 1
        },
        {
            "id": "c8b4255c-8a8a-4e98-9e1d-9341550a9206",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "bbc1c31a-b1d3-407b-9aac-d9588956bf86",
            "team2Id": "48ae65b2-54da-42f4-a769-2e459a3df746",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T09:00:00",
            "leagueId": 2
        },
        {
            "id": "ef362edf-f9f3-4fe6-acfb-1cbf95032007",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "9aca230f-166e-495f-8b21-742f5a05e17d",
            "team2Id": "d37ddc16-dd0f-4b59-8e8b-1af87ebefad7",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T09:00:00",
            "leagueId": 3
        },
        {
            "id": "3d3f049d-c2f5-42cb-acb1-4d9f707d8a42",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "90e7271b-1e59-43cc-939b-ba553c39f034",
            "team2Id": "a16423ae-2ccf-4601-b984-053065257b97",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T09:00:00",
            "leagueId": 1
        },
        {
            "id": "5600806c-8286-479f-a6d0-81c9d300f1ed",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "162c1cb3-c5f3-4860-a7b1-22baceb04198",
            "team2Id": "520ab250-e831-4f79-b99d-0a21a01e2de8",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T09:00:00",
            "leagueId": 2
        },
        {
            "id": "dd44c265-6731-48ee-935a-3df65cb84eb8",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "38ba0c9f-8f30-42b0-af60-4658d3ab8aa7",
            "team2Id": "46545545-8fd1-4d5d-93e0-281f6dc9f5ec",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T10:00:00",
            "leagueId": 3
        },
        {
            "id": "b43ad97a-1012-4427-8656-ac6895f3c93d",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "4be3dbd6-97a7-409b-871d-2553927a3971",
            "team2Id": "adfe9d53-0920-49c8-9df4-158c938a75a4",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T10:00:00",
            "leagueId": 1
        },
        {
            "id": "e877b4c1-74a3-4fb4-ad73-4f4f78c9d76c",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "dea95b06-997e-4116-a243-3f94a0fec0c5",
            "team2Id": "dbfd5e89-a9ca-4502-9d61-381e378951d4",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T10:00:00",
            "leagueId": 2
        },
        {
            "id": "fb23097a-a569-4fc4-91a4-428af62ba1b4",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "96b1d770-c114-4306-a0da-4325a5f2ddb3",
            "team2Id": "e24a70b1-f801-4a64-9c6a-02d8180c11bc",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T10:00:00",
            "leagueId": 3
        },
        {
            "id": "daad7e04-df04-49ee-b135-c0aba66e36b0",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "a16423ae-2ccf-4601-b984-053065257b97",
            "team2Id": "520ab250-e831-4f79-b99d-0a21a01e2de8",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T11:00:00",
            "leagueId": 1
        },
        {
            "id": "0f6d2c0e-692e-4328-977c-ffd3d7a1b93a",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "25bca3cb-dce6-474e-a5f4-55002370d7ee",
            "team2Id": "e8fcefde-52e5-4595-8349-ceefb28a14b1",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T11:00:00",
            "leagueId": 2
        },
        {
            "id": "052f30b1-bf5e-487f-b8bf-3d7621c7d824",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "90e7271b-1e59-43cc-939b-ba553c39f034",
            "team2Id": "d37ddc16-dd0f-4b59-8e8b-1af87ebefad7",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T11:00:00",
            "leagueId": 3
        },
        {
            "id": "57bfe1f3-11be-4712-8a77-8af8057c3b06",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "9aca230f-166e-495f-8b21-742f5a05e17d",
            "team2Id": "162c1cb3-c5f3-4860-a7b1-22baceb04198",
            "team1Score": "",
            "team2Score": "",
            "time": "2015-01-18T11:00:00",
            "leagueId": 1
        },
        {
            "id": "3006e1ce-2f17-490e-b880-0848fe75c1ef",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "874e91ed-ca27-48f8-8a45-4c75bf274f5a",
            "team2Id": "5c453b2d-daa3-49b8-9621-798f8d3d65e7",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T09:00:00",
            "leagueId": 1
        },
        {
            "id": "28bf87cb-4ff8-46af-8b81-dada9abf95da",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "bc9b3285-37ee-4b08-b5d7-0e1ab41aaf60",
            "team2Id": "199f5c3e-6c44-48be-b9d4-f4c0c3c7cebd",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T09:00:00",
            "leagueId": 1
        },
        {
            "id": "90394d32-136a-4ddd-9822-f40fb246e25e",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "463e1f4e-db32-4bfd-8175-b209c624bdae",
            "team2Id": "00e8d899-8f2c-45de-94ac-7b8895f1e3ad",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T10:00:00",
            "leagueId": 1
        },
        {
            "id": "510d07e6-aa33-4d2f-885f-a0f3b08e969d",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "542274e5-e36c-42de-9a62-5dc3103d7a87",
            "team2Id": "334fa562-88c8-4061-a226-78ba5b4414c5",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T09:00:00",
            "leagueId": 3
        },
        {
            "id": "a8efdb5c-fd9a-4c5b-936f-c2f5ed9d92f8",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "9f4a60ec-bca1-4e2b-ab31-bf71124be656",
            "team2Id": "c8b3822e-874d-4452-8b9c-38a398198d41",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T09:00:00",
            "leagueId": 3
        },
        {
            "id": "e6db62dd-1041-459d-a269-1b761e6a06ac",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "e43c931d-e5ae-4e3f-9d1a-67a0b18bf580",
            "team2Id": "9ee1dacf-5483-4faf-8bbd-5e1d87a1c2ae",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T10:00:00",
            "leagueId": 3
        },
        {
            "id": "73000584-e093-4deb-83ce-0dbfd804c8dc",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "aa12b8b3-ee72-4774-8d91-063757e24c5c",
            "team2Id": "c834b4fc-3ba4-459c-bf81-ce75f3939f77",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T10:00:00",
            "leagueId": 3
        },
        {
            "id": "da874c8c-124c-435d-be7d-764687533c4a",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "6f6dfe98-3638-48f2-8470-88d4a3fbc5cb",
            "team2Id": "fa0d885b-dd92-4b12-9c5c-937f1ccfd128",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T10:00:00",
            "leagueId": 3
        },
        {
            "id": "187ec197-421c-49fd-b6f2-50b712f61776",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "d90b5e53-6e84-48c2-a5bb-f04909ba876c",
            "team2Id": "e60b3578-9b8f-43ad-b482-08d53945f4e7",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T11:00:00",
            "leagueId": 3
        },
        {
            "id": "831ff217-8f05-4460-9059-27b856c02763",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "5c453b2d-daa3-49b8-9621-798f8d3d65e7",
            "team2Id": "199f5c3e-6c44-48be-b9d4-f4c0c3c7cebd",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T11:00:00",
            "leagueId": 3
        },
        {
            "id": "6c953417-565f-4454-9b2c-d48cfc6a5e5a",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "9f4a60ec-bca1-4e2b-ab31-bf71124be656",
            "team2Id": "bc9b3285-37ee-4b08-b5d7-0e1ab41aaf60",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T11:00:00",
            "leagueId": 3
        },
        {
            "id": "ead24523-fefe-4a04-9018-814e88e545da",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "874e91ed-ca27-48f8-8a45-4c75bf274f5a",
            "team2Id": "c8b3822e-874d-4452-8b9c-38a398198d41",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T11:00:00",
            "leagueId": 3
        },
        {
            "id": "c117eac1-47c8-4597-95b5-f6382b513b46",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "542274e5-e36c-42de-9a62-5dc3103d7a87",
            "team2Id": "00e8d899-8f2c-45de-94ac-7b8895f1e3ad",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T13:00:00",
            "leagueId": 3
        },
        {
            "id": "d4d9f9f1-4494-43fd-bb88-9a9f528bb81e",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "334fa562-88c8-4061-a226-78ba5b4414c5",
            "team2Id": "9ee1dacf-5483-4faf-8bbd-5e1d87a1c2ae",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T13:00:00",
            "leagueId": 3
        },
        {
            "id": "bf75a639-9264-4aff-bb50-ed78e82a17eb",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "6f6dfe98-3638-48f2-8470-88d4a3fbc5cb",
            "team2Id": "c834b4fc-3ba4-459c-bf81-ce75f3939f77",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T13:00:00",
            "leagueId": 3
        },
        {
            "id": "a85b88f6-3412-4155-8fe7-ee427e58e3e9",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "463e1f4e-db32-4bfd-8175-b209c624bdae",
            "team2Id": "e43c931d-e5ae-4e3f-9d1a-67a0b18bf580",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T13:00:00",
            "leagueId": 3
        },
        {
            "id": "c4df9912-dd75-4f4d-9b45-ad008f41bcf0",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "874e91ed-ca27-48f8-8a45-4c75bf274f5a",
            "team2Id": "199f5c3e-6c44-48be-b9d4-f4c0c3c7cebd",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T14:00:00",
            "leagueId": 3
        },
        {
            "id": "1c29d7c0-a341-415b-9e01-3f549dbc0c2f",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "fa0d885b-dd92-4b12-9c5c-937f1ccfd128",
            "team2Id": "e60b3578-9b8f-43ad-b482-08d53945f4e7",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T14:00:00",
            "leagueId": 3
        },
        {
            "id": "650d91de-140f-4a89-b3f3-5ab214ff8182",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "c8b3822e-874d-4452-8b9c-38a398198d41",
            "team2Id": "bc9b3285-37ee-4b08-b5d7-0e1ab41aaf60",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T14:00:00",
            "leagueId": 3
        },
        {
            "id": "f28f5927-7ce5-43fb-9f9c-0bff1ea342e1",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "aa12b8b3-ee72-4774-8d91-063757e24c5c",
            "team2Id": "d90b5e53-6e84-48c2-a5bb-f04909ba876c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T14:00:00",
            "leagueId": 3
        },
        {
            "id": "a0583e0e-15b3-4f49-8e40-553bfd0cb368",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "542274e5-e36c-42de-9a62-5dc3103d7a87",
            "team2Id": "9ee1dacf-5483-4faf-8bbd-5e1d87a1c2ae",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T15:00:00",
            "leagueId": 3
        },
        {
            "id": "d6226631-a6ee-4138-95db-8ab7b12067e4",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "00e8d899-8f2c-45de-94ac-7b8895f1e3ad",
            "team2Id": "e43c931d-e5ae-4e3f-9d1a-67a0b18bf580",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T15:00:00",
            "leagueId": 3
        },
        {
            "id": "8a813f20-1876-453f-93a3-f2a6b7c3735a",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "5c453b2d-daa3-49b8-9621-798f8d3d65e7",
            "team2Id": "9f4a60ec-bca1-4e2b-ab31-bf71124be656",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T15:00:00",
            "leagueId": 3
        },
        {
            "id": "bde1f77b-029f-4de3-b830-b47d344b0e6f",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "334fa562-88c8-4061-a226-78ba5b4414c5",
            "team2Id": "463e1f4e-db32-4bfd-8175-b209c624bdae",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-27T15:00:00",
            "leagueId": 3
        },
        {
            "id": "2a3ddf55-c303-410c-a0d5-c20b1c416610",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "6f6dfe98-3638-48f2-8470-88d4a3fbc5cb",
            "team2Id": "e60b3578-9b8f-43ad-b482-08d53945f4e7",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T09:00:00",
            "leagueId": 3
        },
        {
            "id": "04f2bd5e-95db-48ef-9087-184192a89f86",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "fa0d885b-dd92-4b12-9c5c-937f1ccfd128",
            "team2Id": "aa12b8b3-ee72-4774-8d91-063757e24c5c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T09:00:00",
            "leagueId": 3
        },
        {
            "id": "080ed032-dd52-47ca-a0a4-728786ef34d0",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "874e91ed-ca27-48f8-8a45-4c75bf274f5a",
            "team2Id": "bc9b3285-37ee-4b08-b5d7-0e1ab41aaf60",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T09:00:00",
            "leagueId": 3
        },
        {
            "id": "b7505871-39f7-42ef-8420-01dc3c31c00e",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "c834b4fc-3ba4-459c-bf81-ce75f3939f77",
            "team2Id": "d90b5e53-6e84-48c2-a5bb-f04909ba876c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T09:00:00",
            "leagueId": 3
        },
        {
            "id": "25c7a5de-5dfe-4a89-8997-41da000d79d4",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "199f5c3e-6c44-48be-b9d4-f4c0c3c7cebd",
            "team2Id": "9f4a60ec-bca1-4e2b-ab31-bf71124be656",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T10:00:00",
            "leagueId": 3
        },
        {
            "id": "40870837-a085-4b6c-a5a9-0ca9019550af",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "9ee1dacf-5483-4faf-8bbd-5e1d87a1c2ae",
            "team2Id": "463e1f4e-db32-4bfd-8175-b209c624bdae",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T10:00:00",
            "leagueId": 3
        },
        {
            "id": "897bc5e0-8e21-4881-a094-ef68ded42c3d",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "542274e5-e36c-42de-9a62-5dc3103d7a87",
            "team2Id": "e43c931d-e5ae-4e3f-9d1a-67a0b18bf580",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T10:00:00",
            "leagueId": 3
        },
        {
            "id": "18940a37-439d-4060-b34f-3fdd3359cd2f",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "00e8d899-8f2c-45de-94ac-7b8895f1e3ad",
            "team2Id": "334fa562-88c8-4061-a226-78ba5b4414c5",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T11:00:00",
            "leagueId": 3
        },
        {
            "id": "a65b7a8c-3715-4474-9d70-f9abbf9f0c5b",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "c8b3822e-874d-4452-8b9c-38a398198d41",
            "team2Id": "5c453b2d-daa3-49b8-9621-798f8d3d65e7",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T10:00:00",
            "leagueId": 3
        },
        {
            "id": "c82573e0-7973-4c5d-bb89-cde94c8925d3",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "6f6dfe98-3638-48f2-8470-88d4a3fbc5cb",
            "team2Id": "d90b5e53-6e84-48c2-a5bb-f04909ba876c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T11:00:00",
            "leagueId": 3
        },
        {
            "id": "5fcb7e10-7dea-4783-a7de-fd8c718fe6d0",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "e60b3578-9b8f-43ad-b482-08d53945f4e7",
            "team2Id": "aa12b8b3-ee72-4774-8d91-063757e24c5c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T11:00:00",
            "leagueId": 3
        },
        {
            "id": "dfaae2eb-3272-491f-95ec-aa0f4950c45c",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "c834b4fc-3ba4-459c-bf81-ce75f3939f77",
            "team2Id": "fa0d885b-dd92-4b12-9c5c-937f1ccfd128",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-12-28T11:00:00",
            "leagueId": 3
        },
        {
            "id": "1e13aa1c-e1e4-4965-a54b-1a09a66c411e",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "d0bf344d-6981-447f-abe2-bad1af95a76d",
            "team2Id": "ca6cbb6d-4eda-409b-a6a6-fefc18e9ab65",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T09:00:00",
            "leagueId": 2
        },
        {
            "id": "eac2354c-5932-45ee-825e-0c8d7c754b50",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "a8a2f27b-5738-4d2c-93cb-43fb494dc33e",
            "team2Id": "9411c57c-1fc7-415a-a281-ec8b79a5724c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T09:00:00",
            "leagueId": 2
        },
        {
            "id": "bc2c6ec2-23ea-4159-8ae8-495bc51029c9",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "9221d6d8-c73e-4228-b8cc-77bd27c2da41",
            "team2Id": "0fdad598-871d-47cd-bc5c-7d84b2877074",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T09:00:00",
            "leagueId": 2
        },
        {
            "id": "ae5c0102-a7e9-4260-8d2d-ff6d6d0620d9",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "a7faa14a-4b1c-48a6-8ba7-bf8dc03d7994",
            "team2Id": "dcb48489-c8b4-48cc-a2d4-e2c58fe943c7",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T10:00:00",
            "leagueId": 2
        },
        {
            "id": "2acade72-cd50-439c-b752-b29de5543e77",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "5289ddd3-3ab2-407c-868d-2c864abccc9c",
            "team2Id": "d6bb55d2-ec9a-4f4b-8c47-05a43e223471",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T09:00:00",
            "leagueId": 2
        },
        {
            "id": "49aa1aab-213c-47b2-b118-30bbca2a2ebe",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "c3df847e-38e1-432e-a69f-bedeead9adaf",
            "team2Id": "863b8582-b08f-4682-b44d-425672017b7a",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T10:00:00",
            "leagueId": 2
        },
        {
            "id": "60b5c1c0-ee08-4764-ba1e-cab4fea03588",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "20fa3c08-3b8a-420c-8952-ecf02fefca3b",
            "team2Id": "9082b65a-f152-42f3-97e3-1af9b811cf59",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T10:00:00",
            "leagueId": 2
        },
        {
            "id": "c679d2c7-6348-4987-8767-96838ad70a68",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "e51ef5f0-0a00-41f3-ba67-d4ef6afc8b3d",
            "team2Id": "a6673230-4207-41ec-b6d1-5cebfe90d00c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T10:00:00",
            "leagueId": 2
        },
        {
            "id": "bdc1d074-8817-4977-a5ee-3d1fd48393ca",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "0fdad598-871d-47cd-bc5c-7d84b2877074",
            "team2Id": "ca6cbb6d-4eda-409b-a6a6-fefc18e9ab65",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T11:00:00",
            "leagueId": 2
        },
        {
            "id": "31e02c08-fbd9-4c11-8eaa-16140a307188",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "5289ddd3-3ab2-407c-868d-2c864abccc9c",
            "team2Id": "d0bf344d-6981-447f-abe2-bad1af95a76d",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T11:00:00",
            "leagueId": 2
        },
        {
            "id": "eb28cbc7-0155-40a8-a116-d163224bec4b",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "6b8d945f-af28-45fe-bb7c-ed0fd7f0afc5",
            "team2Id": "286d54fd-1a25-4b81-8672-851b15032144",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T11:00:00",
            "leagueId": 2
        },
        {
            "id": "390f15b9-2d64-46d8-9c4e-ac4fbadb103a",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "9221d6d8-c73e-4228-b8cc-77bd27c2da41",
            "team2Id": "d6bb55d2-ec9a-4f4b-8c47-05a43e223471",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T11:00:00",
            "leagueId": 2
        },
        {
            "id": "4918d639-da20-4f05-8dda-5d6a8b15ae02",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "9411c57c-1fc7-415a-a281-ec8b79a5724c",
            "team2Id": "dcb48489-c8b4-48cc-a2d4-e2c58fe943c7",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T13:00:00",
            "leagueId": 2
        },
        {
            "id": "4230fa3e-d547-4b84-8d24-08b493e49f55",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "a8a2f27b-5738-4d2c-93cb-43fb494dc33e",
            "team2Id": "863b8582-b08f-4682-b44d-425672017b7a",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T13:00:00",
            "leagueId": 2
        },
        {
            "id": "e5282ce4-38b9-4c68-a380-1c77a8a2db7c",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "20fa3c08-3b8a-420c-8952-ecf02fefca3b",
            "team2Id": "a6673230-4207-41ec-b6d1-5cebfe90d00c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T13:00:00",
            "leagueId": 2
        },
        {
            "id": "b0032585-ef4f-42fb-a754-ae1e818cacbd",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "c3df847e-38e1-432e-a69f-bedeead9adaf",
            "team2Id": "a7faa14a-4b1c-48a6-8ba7-bf8dc03d7994",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T13:00:00",
            "leagueId": 2
        },
        {
            "id": "cb8dd9cf-c4c7-438c-97e2-aed656f44d2b",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "9082b65a-f152-42f3-97e3-1af9b811cf59",
            "team2Id": "286d54fd-1a25-4b81-8672-851b15032144",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T14:00:00",
            "leagueId": 2
        },
        {
            "id": "621e65ba-25fd-4310-9627-c8ba0f0dec2f",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "9221d6d8-c73e-4228-b8cc-77bd27c2da41",
            "team2Id": "ca6cbb6d-4eda-409b-a6a6-fefc18e9ab65",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T14:00:00",
            "leagueId": 2
        },
        {
            "id": "cf2f1746-e84f-4767-90b8-29ad2478bc7c",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "d6bb55d2-ec9a-4f4b-8c47-05a43e223471",
            "team2Id": "d0bf344d-6981-447f-abe2-bad1af95a76d",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T14:00:00",
            "leagueId": 2
        },
        {
            "id": "5df9dc37-1506-4f6f-9263-ef7ec39f8577",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "e51ef5f0-0a00-41f3-ba67-d4ef6afc8b3d",
            "team2Id": "6b8d945f-af28-45fe-bb7c-ed0fd7f0afc5",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T14:00:00",
            "leagueId": 2
        },
        {
            "id": "8e51d6d8-bf33-418c-b703-7faa1b413189",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "863b8582-b08f-4682-b44d-425672017b7a",
            "team2Id": "a7faa14a-4b1c-48a6-8ba7-bf8dc03d7994",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T15:00:00",
            "leagueId": 2
        },
        {
            "id": "55560875-f106-4bc2-b2c5-9ac2f06179d2",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "9411c57c-1fc7-415a-a281-ec8b79a5724c",
            "team2Id": "c3df847e-38e1-432e-a69f-bedeead9adaf",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T15:00:00",
            "leagueId": 2
        },
        {
            "id": "4d7a3a44-eb2a-40b1-8f9a-45acf2d762d6",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "a8a2f27b-5738-4d2c-93cb-43fb494dc33e",
            "team2Id": "dcb48489-c8b4-48cc-a2d4-e2c58fe943c7",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T15:00:00",
            "leagueId": 2
        },
        {
            "id": "a9c2a7ce-77a9-4494-b014-785af76081f8",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "a6673230-4207-41ec-b6d1-5cebfe90d00c",
            "team2Id": "6b8d945f-af28-45fe-bb7c-ed0fd7f0afc5",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T16:00:00",
            "leagueId": 2
        },
        {
            "id": "1129f863-cce5-4f4b-a75e-c8620b865f0e",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "20fa3c08-3b8a-420c-8952-ecf02fefca3b",
            "team2Id": "286d54fd-1a25-4b81-8672-851b15032144",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T16:00:00",
            "leagueId": 2
        },
        {
            "id": "d95651f8-f393-4d3b-acf6-6fec3359d173",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "9221d6d8-c73e-4228-b8cc-77bd27c2da41",
            "team2Id": "d0bf344d-6981-447f-abe2-bad1af95a76d",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T16:00:00",
            "leagueId": 2
        },
        {
            "id": "64ba221b-bc5c-4196-8d01-d6c58725fc53",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "9082b65a-f152-42f3-97e3-1af9b811cf59",
            "team2Id": "e51ef5f0-0a00-41f3-ba67-d4ef6afc8b3d",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T16:00:00",
            "leagueId": 2
        },
        {
            "id": "181c7671-9dd0-4763-ad11-961030d7fec0",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "0fdad598-871d-47cd-bc5c-7d84b2877074",
            "team2Id": "5289ddd3-3ab2-407c-868d-2c864abccc9c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-29T15:00:00",
            "leagueId": 2
        },
        {
            "id": "04fa1066-7e53-47a0-8ee3-4c26b9549466",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "a8a2f27b-5738-4d2c-93cb-43fb494dc33e",
            "team2Id": "a7faa14a-4b1c-48a6-8ba7-bf8dc03d7994",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-30T09:00:00",
            "leagueId": 2
        },
        {
            "id": "00c894a3-3217-44ed-b9f2-349386b63d3b",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "d6bb55d2-ec9a-4f4b-8c47-05a43e223471",
            "team2Id": "0fdad598-871d-47cd-bc5c-7d84b2877074",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-30T09:00:00",
            "leagueId": 2
        },
        {
            "id": "6af84084-71f1-446c-8e77-41a69e3ae959",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "ca6cbb6d-4eda-409b-a6a6-fefc18e9ab65",
            "team2Id": "5289ddd3-3ab2-407c-868d-2c864abccc9c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-30T09:00:00",
            "leagueId": 2
        },
        {
            "id": "2f3e0c53-3630-48fa-b4f8-da2fd806d521",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "dcb48489-c8b4-48cc-a2d4-e2c58fe943c7",
            "team2Id": "c3df847e-38e1-432e-a69f-bedeead9adaf",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-30T09:00:00",
            "leagueId": 2
        },
        {
            "id": "e21899c0-6c97-4abb-b845-60591d208968",
            "locationId": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "team1Id": "286d54fd-1a25-4b81-8672-851b15032144",
            "team2Id": "e51ef5f0-0a00-41f3-ba67-d4ef6afc8b3d",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-30T10:00:00",
            "leagueId": 2
        },
        {
            "id": "64d11b49-cdcc-4a68-bf91-0db0c8eeacf6",
            "locationId": "53c1f096-4c57-475c-92b6-754276839356",
            "team1Id": "20fa3c08-3b8a-420c-8952-ecf02fefca3b",
            "team2Id": "6b8d945f-af28-45fe-bb7c-ed0fd7f0afc5",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-30T10:00:00",
            "leagueId": 2
        },
        {
            "id": "ac5a43c9-8ea4-44c1-8548-534223d81ab9",
            "locationId": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "team1Id": "a6673230-4207-41ec-b6d1-5cebfe90d00c",
            "team2Id": "9082b65a-f152-42f3-97e3-1af9b811cf59",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-30T10:00:00",
            "leagueId": 2
        },
        {
            "id": "22c2ceac-2ce6-4c4c-b4ab-3275ef7fd475",
            "locationId": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "team1Id": "863b8582-b08f-4682-b44d-425672017b7a",
            "team2Id": "9411c57c-1fc7-415a-a281-ec8b79a5724c",
            "team1Score": "",
            "team2Score": "",
            "time": "2014-11-30T10:00:00",
            "leagueId": 2
        }
    ];

    var LOCATIONS = [
        {
            "id": "b4ad712f-9054-4d46-997a-aec2cacb34ca",
            "name": "Meadowbrook Ct. 1",
            "locationUrl": "http://goo.gl/rHw5Rj",
            "address": "5001 Meadowbrook Lane, Ellicott City, MD"
        },
        {
            "id": "53c1f096-4c57-475c-92b6-754276839356",
            "name": "Meadowbrook Ct. 2",
            "locationUrl": "http://goo.gl/rHw5Rj",
            "address": "5001 Meadowbrook Lane, Ellicott City, MD"
        },
        {
            "id": "692d0e83-66b9-43b7-8d81-4ad370e23550",
            "name": "Meadowbrook Ct. 3",
            "locationUrl": "http://goo.gl/rHw5Rj",
            "address": "5001 Meadowbrook Lane, Ellicott City, MD"
        },
        {
            "id": "f2fdcaf2-bc75-4c30-ac25-004fe38617cb",
            "name": "Meadowbrook Ct. 4",
            "locationUrl": "http://goo.gl/rHw5Rj",
            "address": "5001 Meadowbrook Lane, Ellicott City, MD"
        }
    ];

    var app = angular.module('eliteAdmin', [
        // Angular modules
        'ngRoute',
        // 3rd Party Modules
        'ui.bootstrap'
    ]);

    app.config(['$routeProvider', configRoutes]);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .when('/leagues', {
                templateUrl: 'app/leagues/leagues.html',
                controller: 'LeaguesCtrl',
                controllerAs: 'vm',
                resolve: {
                    initialData: [function () {
                        return LEAGUES;
                    }]
                }
            })
            .when('/leagues/:leagueId/teams', {
                controller: 'LeagueShellCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/layout/league-shell.html',
                resolve: {
                    initialData: [function () {
                        return TEAMS;
                    }]
                }
            })
            .when('/leagues/:leagueId/games', {
                controller: 'GamesCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/games/games.html',
                resolve: {
                    initialData: [function () {
                        return GAMES;
                    }],
                    teams: function() {
                        return TEAMS;
                    },
                    locations: function() {
                        return LOCATIONS;
                    }
                }
            })
            .when('/leagues/:leagueId/games-calendar', {
                controller: 'GamesCalendarCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/games/games-calendar.html',
                resolve: {
                    initialData: [function () {
                        return GAMES;
                    }]
                }
            })
            .when('/leagues/:leagueId/location', {
                controller: 'LocationCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/location/location.html'
            });


        $routeProvider.otherwise('/');
    }

    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();
