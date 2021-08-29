const BASE_URL = "https://app.aibers.health";
const AIBERS_HEADER = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const AIBER_APIs_HEADER = () => {
  return { Accept: 'application/json', 'Content-Type': 'application/json', "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im51bWJlciI6Iis5MjMxMjYyNjUyNjAifSwiaWF0IjoxNjI4MjM2OTE1LCJleHAiOjE2MzYwMTI5MTV9.Uz4A0PccjLdJzStEwUhl2ahRqEUTriTsMftPx89qF9I", 'user-agent': 'abc' }
};
export function APIsHeader() {
  return { Accept: 'application/json', 'Content-Type': 'application/json', "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im51bWJlciI6Iis5MjMxMjYyNjUyNjAifSwiaWF0IjoxNjI4MjM2OTE1LCJleHAiOjE2MzYwMTI5MTV9.Uz4A0PccjLdJzStEwUhl2ahRqEUTriTsMftPx89qF9I", 'user-agent': 'abc' }
};

//Get Patient ID
export function getPatientIdByContactNo(contactNo, session_ID) {
  console.log("getPatientIdByContactNo", contactNo, session_ID)
  return fetch((BASE_URL + '/patients/' + contactNo + '/login?sid=' + session_ID),
    {
      method: "PUT",
      ContentType: 'application/json',
      headers: AIBER_APIs_HEADER(),
      body: JSON.stringify({
        notification_token: 'abc',
      })
    }
  ).then(response => response.json()).catch((error) => {
    console.error(error);
    console.error("getPatientIdByContactNo");
  });
}
