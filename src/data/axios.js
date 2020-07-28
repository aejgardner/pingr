// import the axios library
import axios from "axios";

// return a new version of axios with useful settings applied
export default axios.create({
    baseURL: "https://restful.training/api/ping-pong/games",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer ER9OO2YIiQEj44Okj74Q595RyMiS9H6TnijS5mrLJnLPaCQuRX0hg0LJERWO4pM1BClQMZodvvvD1gJT",
    },
});