import {NextResponse} from "next/server";
import UserData from "../store/user_data.json"


export async function GET(): Promise<any> {
    return NextResponse.json(UserData)
}