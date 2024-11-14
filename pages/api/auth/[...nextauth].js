import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions = {
    providers:[
        Github({
            clientId:"Ov23lirxMdeL6wgsJMx5",
            clientSecret:"5349da00db2f52cba1891fbcf9c5a4aa4204f11f"
        })
    ]
}

export default NextAuth(authOptions)