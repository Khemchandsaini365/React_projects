import { base_url } from "../env";
import { useDispatch, useSelector } from "react-redux";
import { setCompanies } from "../redux/companiesSlice";

const FetchCompanies = async () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.companies);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    tokenData:
      "OWdBQUFCK0xDQUFBQUFBQUFBbzlqczBPZ2pBUWhGK2w2ZGtRa0FRU2JpcGUvUW5xdmNKcURLV3R1MFZDakQ2N0xjRm1UN1B6VFdiZWZLTTdJOVM0RXgzd3dpbFZnN0hzQkMycnRPenRReXUrNEpXKzJVRWcvQ25aWDlrZUcwQzJNc2I1RjBEeVpNR1RLUGJuTTRBdndEbEI5NldTM1VoUG1SdEpiVVJROXdnMElaRUNHL2lEUnV2NE5JMno4RHM3Ym03MWF5Y1plRUUwYUd5Y2YweUhyUDJxUEFsbXVaN3J0LzlzS2F6Z254OHFwQWVYOWdBQUFBPT0=",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${base_url}/Admin_CompanyList`,
      requestOptions
    );
    const result = await response.json(); // Parse response as JSON
    console.log(result); // You can log it for debugging

    // Assuming the result is an array of companies
    if (result.status) {
      dispatch(setCompanies(result.data)); // Set the companies state with the fetched data
    } else {
      console.error("Invalid data format:", result);
    }
  } catch (error) {
    console.error("Error fetching company data:", error);
  }
};

export default FetchCompanies;
